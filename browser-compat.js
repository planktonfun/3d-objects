// purpose: ai not cooperating so a library is made for easy pseudo multiplayer implementation
// author: planktonfun
// requires
  // <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
  // <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-database.js"></script>
  // <script src="https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js"></script>


// Module-scoped variables
let serverOffset = 0;

function getTimeStamp() {
  return Date.now() - serverOffset;
}

function displayTimeWithMilliseconds() {
  const now = new Date(getTimeStamp());
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  return formattedTime;
}

class FirebaseSingleton {
  constructor(firebaseConfig) {
    if (!FirebaseSingleton.instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      this.db = firebase.database();

      this.online = false;

      const connectedRef = firebase.database().ref(".info/connected");

      connectedRef.on("value", (snapshot) => {
        if (snapshot.val() === true) {
          this.online = true;
          console.log("Connected to Firebase");
        } else {
          this.online = false;
          console.log("Disconnected from Firebase");
        }
      });

      this.db.goOffline();

      FirebaseSingleton.instance = this;
    }

    return FirebaseSingleton.instance;
  }

  initializeApp() {
    return this.app;
  }

  database() {
    return this.db;
  }

  isOnline() {
    return this.online;
  }
}

class FirebaseObject {
  constructor(firebaseConfig, path, signInCallback, extraData = "", readyCallback) {
    const fb = new FirebaseSingleton(firebaseConfig);
    this.app = fb.initializeApp(firebaseConfig);
    this.db = fb.database();   // Namespaced
    this.path = path;
    this.signInCallback = signInCallback;
    this.uid = extraData;
    this.data = extraData;
    this.firebaseConfig = firebaseConfig;

    this.unsubscribers = [];
    this.isCleanedUp = false;

    this.initApp();
    readyCallback();
  }

  signedIn() {
    return true;
  }

  disconnect(callback) {
    const userRef = this.db.ref(this.path + "/users/" + this.uid);
    userRef.remove().then(() => {
      this.cleanup();
      this.db.goOffline();
      if (callback) callback();
    });
  }

  cleanup() {
    if (this.isCleanedUp) return;

    this.unsubscribers.forEach(unsubscribe => {
      if (typeof unsubscribe === 'function') unsubscribe();
    });
    this.unsubscribers = [];

    if (window.chatListening && window.chatListeningOwner === this) {
      window.chatListening = false;
      window.chatListeningOwner = null;
    }

    this.isCleanedUp = true;
  }

  log(message) {
    console.log(message);
  }

  updatePathValue(pathName, objectValue) {
    const referencePath = this.db.ref(this.path + '/' + pathName);
    referencePath.update(objectValue);
  }

  async retrievePathValue(pathName) {
    const referencePath = this.db.ref(this.path + '/' + pathName);
    const snapshot = await referencePath.get();
    return snapshot.val();
  }

  updateServerTimestamp() {
    const serverTimestampRef = this.db.ref(this.path + '/serverTimestamp');
    serverTimestampRef.update({
      timestampField: firebase.database.ServerValue.TIMESTAMP
    });
  }

  testing() {
    const userStatusDatabaseRef = this.db.ref(this.path + '/users/' + this.uid);
    const isOnlineForDatabase = {
      state: 'online',
      last_changed: firebase.database.ServerValue.TIMESTAMP,
      extraData: {
        uid: this.uid,
        data: this.data
      },
    };

    userStatusDatabaseRef.update(isOnlineForDatabase);
    userStatusDatabaseRef.onDisconnect().remove();
    this.updateServerTimestamp();
  }

  monitorPresence() {
    const usersRef = this.db.ref(this.path + "/users");

    // Initial fetch
    usersRef.once('value', (snapshot) => {
      if (this.isCleanedUp) return;
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        this.signInCallback(user, 'added');
      });
    });

    // Child listeners
    const unsubscribeAdded = usersRef.on('child_added', (snapshot) => {
      if (this.isCleanedUp) return;
      const user = snapshot.val();
      this.signInCallback(user, 'added');
    });
    this.unsubscribers.push(() => usersRef.off('child_added', unsubscribeAdded));

    const unsubscribeRemoved = usersRef.on('child_removed', (snapshot) => {
      if (this.isCleanedUp) return;
      const userKey = snapshot.key;
      const user = { extraData: { uid: userKey, data: userKey } };
      this.signInCallback(user, 'removed');
    });
    this.unsubscribers.push(() => usersRef.off('child_removed', unsubscribeRemoved));

    const unsubscribeChanged = usersRef.on('child_changed', (snapshot) => {
      if (this.isCleanedUp) return;
      const user = snapshot.val();
      this.signInCallback(user, 'changed');
    });
    this.unsubscribers.push(() => usersRef.off('child_changed', unsubscribeChanged));

    // Server timestamp offset
    const serverTimestampRef = this.db.ref(this.path + "/serverTimestamp/timestampField");
    const unsubscribeTimestamp = serverTimestampRef.on('value', (snapshot) => {
      if (this.isCleanedUp) return;
      const referenceTimestamp = snapshot.val();
      const localTimestamp = new Date();
      serverOffset = localTimestamp - referenceTimestamp;   // Note: this may need refinement for accuracy
    });
    this.unsubscribers.push(() => serverTimestampRef.off('value', unsubscribeTimestamp));

    this.listenToChatMessages();
  }

  listenToChatMessages() {
    if (!window.chatListening || window.chatListeningOwner === this) {
      if (!window.chatListening) {
        window.chatListening = true;
        window.chatListeningOwner = this;
      }

      function chatOrganizer() {
        let stringArray = [];
        function append(str) {
          stringArray.push(str);
          if (stringArray.length > 4) stringArray.shift();
          console.log({
            text: stringArray.join("\n"),
            length: stringArray.length - 1
          });
          return {
            text: stringArray.join("\n"),
            length: stringArray.length - 1
          };
        }
        return append;
      }

      let lastMessage = "";
      const co = chatOrganizer();
      const chatsRef = this.db.ref(this.path + "/chats");

      // Initial load
      chatsRef.once('value', (snapshot) => {
        if (this.isCleanedUp) return;
        const message = snapshot.val();
        if (!message) return;
        message.forEach(e => {
          if (lastMessage !== e) {
            lastMessage = e;
            co(e);
          }
        });
      });

      // New messages (limit to last 1)
      const lastMessageQuery = chatsRef.limitToLast(1);
      const unsubscribeChat = lastMessageQuery.on('child_added', (snapshot) => {
        if (this.isCleanedUp) return;
        const message = snapshot.val();
        if (lastMessage !== message) {
          lastMessage = message;
          co(message);
        }
      });
      this.unsubscribers.push(() => lastMessageQuery.off('child_added', unsubscribeChat));
    }
  }

  sendChatMessage(message) {
    const limit = 4;
    const circularBufferRef = this.db.ref(this.path + '/chats');

    circularBufferRef.transaction((currentData) => {
      let circularBuffer = currentData || [];
      circularBuffer.push(message);
      while (circularBuffer.length > limit) {
        circularBuffer.shift();
      }
      return circularBuffer;
    });
  }

  initApp() {
    this.uid = this.data;
    this.log('Initialized with peer ID: ' + this.uid);
    this.monitorPresence();
    this.testing();
  }
}

// Predetermined interval relative to timestamp
class TimestampDisplay {
  constructor(startingTimestamp, everySpecificSecond = 1, callback) {
    this.startingTimestamp = startingTimestamp;
    this.lastDisplay = 0;
    this.everySpecificSecond = everySpecificSecond;
    this.callback = callback;
  }

  random() {
    var x = Math.sin(this.timestamp) * 10000;
    return x - Math.floor(x);
  }

  randomInRange(min, max) {
    var minCeil = Math.ceil(min);
    var maxFloor = Math.floor(max);
    return Math.floor(this.random() * (maxFloor - minCeil + 1) + minCeil);
  }

  update() {
    const currentTimestamp = Math.floor(getTimeStamp() / 100);
    const diff = currentTimestamp - this.startingTimestamp;
    const currentDiff = diff % (this.everySpecificSecond * 10);

    if (this.lastDisplay != currentDiff) {
      this.lastDisplay = currentDiff;
      if (currentDiff === 0) {
        this.timestamp = currentTimestamp;
        this.callback();
      }
    }
  }
}

function chunkManager(pplayer) {
  let chunks = [];
  const delayTresholdMilisseconds = 50;
  let sendRate = 0;

  function appendChunk(event) {
    chunks.push(event);
    sendChunks();
  }

  function sendChunks() {
    if (chunks.length === 0) return;
    chunks.sort((a, b) => a.delayTimestamp - b.delayTimestamp);
    if ((chunks[0].delayTimestamp - getTimeStamp()) < delayTresholdMilisseconds) {
      pplayer.sendEvent(chunks);
      sendRate++;
      chunks = [];
    }
  }

  setInterval(() => {
    sendChunks();
  }, 10);

  return appendChunk;
}

class PeerPlayer {
  constructor(peerConnectedCallback, readyCallback) {
    this.peer = new Peer();
    this.connectedPeers = {};
    this.cm = chunkManager(this);
    this.history = [];
    this.readyCallback = readyCallback;
    this.peerConnectedCallback = function(c) {
      if (!Array.isArray(c)) {
        c = [c];
      }
      c.forEach(e => peerConnectedCallback(e));
    };
    this.init();
  }

  sendDelayedEvent(type, data, durationMilliSecond = 0) {
    const event = {
      peerId: this.peer.id,
      type: type,
      data: data,
      delayTimestamp: getTimeStamp() + durationMilliSecond
    };
    this.cm(event);
  }

  sendToOneClientEvent(clientPeerId, type, data, durationMilliSecond = 0) {
    const event = {
      peerId: this.peer.id,
      type: type,
      data: data,
      delayTimestamp: getTimeStamp() + durationMilliSecond
    };
    const conn = this.connectedPeers[clientPeerId];
    if (conn) {
      conn.send(event);
    }
  }

  sendPersistentEvent(type, data, durationMilliSecond = 0) {
    const event = {
      peerId: this.peer.id,
      type: type,
      data: data,
      delayTimestamp: getTimeStamp() + durationMilliSecond
    };
    this.history.push(event);
    this.cm(event);
  }

  sendToOthers(type, data, durationMilliSecond = 0) {
    const event = {
      peerId: this.peer.id,
      type: type,
      data: data,
      delayTimestamp: getTimeStamp() + durationMilliSecond
    };
    this.send(event);
  }

  sendEvent(event) {
    this.peerConnectedCallback(event);
    this.send(event);
  }

  send(event) {
    for (let peerId in this.connectedPeers) {
      const conn = this.connectedPeers[peerId];
      conn.send(event);
    }
  }

  log(message) {
    console.log(message);
  }

  init() {
    this.peer.on('open', (peerId) => {
      this.log('My Peer ID is: ' + peerId);
      this.readyCallback(peerId);
    });

    this.peer.on('close', (peerId) => {
      this.log('Peer disconnected: ' + peerId);
    });

    this.peer.on('connection', (conn) => {
      this.log('Peer connected: ' + conn.peer);
      conn.on('data', (data) => this.peerConnectedCallback(data));
      conn.on('close', () => {
        this.handleDisconnectedPlayer(conn.peer);
      });
    });
  }

  handleDisconnectedPlayer(peerId) {
    // Override if needed
    this.log('Peer disconnected: ' + peerId);
    if(this.connectedPeers[peerId]) {
      this.connectedPeers[peerId].close();
      delete this.connectedPeers[peerId];
    }
  }

  addPeer(peerId, conn) {
    if (peerId !== this.peer.id && !this.connectedPeers[peerId]) {
      this.connectedPeers[peerId] = conn;
    }
  }

  connectToPeers(peerIds) {
    peerIds.forEach((peerId) => {
      if (peerId !== this.peer.id && !this.connectedPeers[peerId]) {
        const conn = this.peer.connect(peerId);
        conn.on('open', () => {
          this.log('Connected to ' + conn.peer);
          this.addPeer(peerId, conn);
          this.history.forEach((event) => {
            conn.send(event);
          });
        });
      }
    });
  }
}

class Lobby {
  constructor(firebaseConfig, path, handleRecievedData, firebaseReady = () => {}) {
    this.path = path;
    this.users = {};
    this.pplayer = new PeerPlayer(handleRecievedData, (id) => { this.onReadyPeerId(id, firebaseReady); });
    this.firebaseConfig = firebaseConfig;
    this.isDisconnected = false;
  }

  onReadyPeerId(readyPeerId, firebaseReady) {
    this.fbobj = new FirebaseObject(this.firebaseConfig, this.path, (user, state) => {
      this.handleFirebaseUpdate(user, state);
    }, readyPeerId, () => {
      firebaseReady();
    });
  }

  handleFirebaseUpdate(user, state) {
    if (this.isDisconnected) return;
    console.log('handleFirebaseUpdate:', state, user);

    if (!user || !user.extraData) return;

    const peerId = user.extraData.data;
    const uid = peerId;

    if (state === 'removed') {
      delete this.users[uid];
      this.pplayer.handleDisconnectedPlayer(peerId);
    } else {
      this.users[uid] = {
        name: uid,
        state: user.state,
        peerId: peerId,
        timestamp: user.last_changed,
        uid: user.extraData.uid
      };
      this.pplayer.connectToPeers([peerId]);
    }
    console.log('users:', this.users);
  }

  disconnect() {
    if (this.isDisconnected) return;
    this.isDisconnected = true;

    if (this.fbobj) {
      this.fbobj.disconnect(() => {
        this.sendMessage('disconnected', { uid: this.pplayer?.peer?.id }, 0);
        if (this.pplayer?.peer) {
          this.pplayer.peer.disconnect();
          this.pplayer.peer.destroy();
        }
      });
    } else if (this.pplayer?.peer) {
      this.pplayer.peer.disconnect();
      this.pplayer.peer.destroy();
    }

    this.users = {};
  }

  cleanup() {
    if (this.isDisconnected) return;
    this.isDisconnected = true;

    if (this.fbobj) this.fbobj.cleanup();
    if (this.pplayer?.peer) this.pplayer.peer.destroy();
    this.users = {};
  }

  getSelfPeerId() {
    return this.pplayer?.peer?.id;
  }

  getUsers() {
    return this.users;
  }

  getUsersCount() {
    return Object.keys(this.users).length;   // Fixed: was .length on object
  }

  setServerVariable(varName) {
    this.fbobj.updatePathValue(varName, {
      test: getTimeStamp(),
      two: getTimeStamp() + 1000
    });
  }

  async getServerVariable(varName) {
    return await this.fbobj.retrievePathValue(varName);
  }

  sendMessage(type, data, delay) {
    this.pplayer.sendDelayedEvent(type, data, delay);
  }

  sendOneWay(type, data, delay) {
    this.pplayer.sendToOthers(type, data, delay);
  }

  replyMessage(peerId, type, data, delay) {
    this.pplayer.sendToOneClientEvent(peerId, type, data, delay);
  }
}

// Room management extensions (updated for namespaced)
Lobby.prototype.createRoom = async function(roomName, roomData = {}) {
  if (!this.roomManager) {
    const lobbyPrefix = this.path ? this.path.split('/')[0] : 'sandbox';
    this.roomManager = new RoomManager(this.firebaseConfig, 'rooms', lobbyPrefix);
  }
  return await this.roomManager.createRoom(roomName, roomData);
};

Lobby.prototype.joinRoom = async function(roomName) {
  if (!this.roomManager) {
    const lobbyPrefix = this.path ? this.path.split('/')[0] : 'sandbox';
    this.roomManager = new RoomManager(this.firebaseConfig, 'rooms', lobbyPrefix);
  }
  const result = await this.roomManager.joinRoom(roomName);
  if (result.success) {
    this.path = roomName;
  }
  return result;
};

Lobby.prototype.leaveRoom = async function() {
  const roomName = this.path;
  if (this.roomManager && roomName) {
    await this.roomManager.leaveRoom(roomName);
  }
  this.disconnect();
  return { success: true };
};

function getActingServer(lobby, timeSyncer) {
  const peerIds = [lobby.pplayer.peer.id];
  for (let peerId in lobby.pplayer.connectedPeers) {
    peerIds.push(peerId);
  }
  peerIds.sort();
  const match = Math.floor(timeSyncer.randomInRange(0, peerIds.length - 1));
  return peerIds[match];
}

function IAmActingServer(lobby, timeSyncer) {
  const serverPeerId = getActingServer(lobby, timeSyncer);
  return (lobby.getSelfPeerId() === serverPeerId);
}

class RoomManager {
  constructor(firebaseConfig, basePath = 'sandbox/rooms', prefix = 'sandbox') {
    this.firebaseConfig = firebaseConfig;
    this.prefix = prefix;
    this.basePath = basePath.includes('/') ? basePath : `${prefix}/${basePath}`;
    this.db = null;
    this.app = null;
    this.initialized = false;
    this.isConnected = false;
    this.currentRoom = null; // Track which room we're currently in
    this.roomListeners = []; // Track active listeners
  }

  async initialize() {
    if (this.initialized) return;

    const fb = new FirebaseSingleton(this.firebaseConfig);
    this.fb = fb;
    this.app = fb.initializeApp(this.firebaseConfig);
    this.db = fb.database();
    this.initialized = true;
  }

  // Connect to Firebase (keeps WebSocket open)
  async connect() {
    await this.initialize();
    if (!this.isConnected) {
      this.db.goOnline();
      this.isConnected = true;
    }
  }

  // Disconnect from Firebase (closes WebSocket)
  async disconnect() {
    if (this.isConnected && this.db && !this.currentRoom) {
      this.db.goOffline();
      this.isConnected = false;
    }
  }

  async createRoom(roomName, roomData = {}) {
    try {
      await this.connect();
      const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
      await roomRef.set({
        name: roomName,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        created: true,
        playerCount: 0,
        ...roomData
      });
      return { roomName, success: true };
    } finally {
      await this.disconnect();
    }
  }

  async removeEmptyRoom(roomName) {
    try {
      await this.connect();
      const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
      const current = await this.getRoomPlayerCount(roomName);
      if (current < 1) {
        await roomRef.remove();
      }
    } finally {
      await this.disconnect();
    }
  }

  async joinRoom(roomName) {
    try {
      await this.connect();
      const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
      const snapshot = await roomRef.get();

      if (!snapshot.exists()) {
        return { roomName, success: false, error: 'Room does not exist' };
      }

      // Store current room and keep connection alive
      this.currentRoom = roomName;

      // Setup real-time listener for this room
      this.setupRoomListeners(roomName);

      return { roomName, success: true };
    } catch (error) {
      await this.disconnect();
      throw error;
    }
  }

  // Setup real-time listeners for room updates (keeps connection alive)
  setupRoomListeners(roomName) {
    // Listen for player count changes
    const playerCountRef = this.db.ref(`${this.basePath}/${roomName}/playerCount`);
    const playerCountListener = playerCountRef.on('value', (snapshot) => {
      console.log(`Player count in ${roomName}: ${snapshot.val()}`);
      // You can emit events or trigger callbacks here
      if (this.onPlayerCountChange) {
        this.onPlayerCountChange(roomName, snapshot.val());
      }
    });

    // Listen for room deletion
    const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
    const roomListener = roomRef.on('value', (snapshot) => {
      if (!snapshot.exists()) {
        console.log(`Room ${roomName} was deleted`);
        this.leaveRoom(roomName);
        if (this.onRoomDeleted) {
          this.onRoomDeleted(roomName);
        }
      }
    });

    this.roomListeners.push({ roomName, playerCountListener, roomListener });
  }

  // Remove listeners for a room
  removeRoomListeners(roomName) {
    const listeners = this.roomListeners.filter(l => l.roomName === roomName);
    listeners.forEach(listener => {
      const playerCountRef = this.db.ref(`${this.basePath}/${roomName}/playerCount`);
      const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
      playerCountRef.off('value', listener.playerCountListener);
      roomRef.off('value', listener.roomListener);
    });
    this.roomListeners = this.roomListeners.filter(l => l.roomName !== roomName);
  }

  async leaveRoom(roomName) {
    try {
      // Remove listeners first
      this.removeRoomListeners(roomName);

      // Clear current room if it matches
      if (this.currentRoom === roomName) {
        this.currentRoom = null;
      }

      await this.removeEmptyRoom(roomName);
      return { roomName, success: true };
    } finally {
      // Only disconnect if we're not in any room
      if (!this.currentRoom) {
        await this.disconnect();
      }
    }
  }

  async listRooms() {
    try {
      await this.connect();
      const roomsRef = this.db.ref(this.basePath);
      const snapshot = await roomsRef.get();
      const rooms = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const roomData = childSnapshot.val();
          rooms.push({
            name: childSnapshot.key,
            createdAt: roomData.createdAt,
            created: roomData.created || false,
            playerCount: roomData.playerCount || 0
          });
        });
      }
      return rooms;
    } finally {
      await this.disconnect();
    }
  }

  async getRoomPlayerCount(roomName) {
    try {
      await this.connect();
      const roomRef = this.db.ref(`${this.basePath}/${roomName}/users`);
      const snapshot = await roomRef.get();
      return snapshot.numChildren() || 0;
    } finally {
      // Only disconnect if we're not in this room
      if (this.currentRoom !== roomName) {
        await this.disconnect();
      }
    }
  }

  async roomExists(roomName) {
    try {
      await this.connect();
      const roomRef = this.db.ref(`${this.basePath}/${roomName}`);
      const snapshot = await roomRef.get();
      return snapshot.exists();
    } finally {
      await this.disconnect();
    }
  }

  // Get the current room (if any)
  getCurrentRoom() {
    return this.currentRoom;
  }

  // Check if connected to a room
  isInRoom() {
    return this.currentRoom !== null;
  }

  // Manual cleanup - call this when component unmounts or app closes
  async cleanup() {
    // Remove all listeners
    this.roomListeners.forEach(listener => {
      const playerCountRef = this.db.ref(`${this.basePath}/${listener.roomName}/playerCount`);
      const roomRef = this.db.ref(`${this.basePath}/${listener.roomName}`);
      playerCountRef.off('value', listener.playerCountListener);
      roomRef.off('value', listener.roomListener);
    });
    this.roomListeners = [];

    // Clear current room
    this.currentRoom = null;

    // Force disconnect
    await this.disconnect();
  }
}
globalThis.Lobby = Lobby;
globalThis.TimestampDisplay = TimestampDisplay;
globalThis.getActingServer = getActingServer;
globalThis.IAmActingServer = IAmActingServer;
globalThis.getTimeStamp = getTimeStamp;
globalThis.displayTimeWithMilliseconds = displayTimeWithMilliseconds;
globalThis.RoomManager = RoomManager;

/**
 *
// Initialize Firebase configuration
// use wss for the databaseURL
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID"
};

// Handle incoming peer data
function handleReceivedData(event) {
  const correction = Math.max(0, event.delayTimestamp - getTimeStamp());

  setTimeout(() => {
    console.log("Received:", event.type, event.data);

    // Handle different event types
    if (event.data.playerId === myPlayerId) return; // Ignore own events

    if (event.type === 'position') {
      // Update remote entity position
    } else if (event.type === 'chat') {
      // Display chat message
    }
  }, correction);
}

// Initialize Lobby
const myPlayerId = 'p' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
const myPlayerName = 'Player ' + myPlayerId.substr(-4, 4);

const lobby = new Lobby(firebaseConfig, `${config.firebasePrefix}/rooms/${roomName}`, handleReceivedData, () => {
  console.log("Firebase ready!");
});

// Time synchronization (every 5 seconds)
const timeSyncer = new TimestampDisplay(Date.now() / 1000, 5, () => {
  if (IAmActingServer(lobby, timeSyncer)) {
    lobby.fbobj.updateServerTimestamp();
  }
});

setInterval(() => {
  timeSyncer.update();
}, 30);

// Send chat message
function sendChat(text) {
  if (text.trim()) {
    lobby.sendMessage('chat', { text: text.trim(), playerId: myPlayerId, playerName: myPlayerName }, 50);
  }
}

// Send position update
function sendPosition(x, y, z) {
  lobby.sendOneWay('position', { x, y, z, playerId: myPlayerId, playerName: myPlayerName }, 50);
}

// Send to specific peer
function sendToPeer(peerId, type, data) {
  lobby.replyMessage(peerId, type, data, 0);
}

// Get connected users
const users = lobby.getUsers();
const userCount = lobby.getUsersCount();

// Room management
async function manageRooms() {
  const roomManager = new RoomManager(firebaseConfig);

  // Create a room
  const created = await roomManager.createRoom('my_room', { maxPlayers: 10 });

  // List all rooms
  const rooms = await roomManager.listRooms();

  // Join a room
  const joined = await roomManager.joinRoom('my_room');

  // Check if room exists
  const exists = await roomManager.roomExists('my_room');

  // Leave a room
  await roomManager.leaveRoom('my_room');
}

// Disconnect when done
function cleanup() {
  lobby.disconnect();
}

// Notes:
// make online objects deterministic
// like using getTimestamp as your seed
// and using random seed via get getTimestamp
 */