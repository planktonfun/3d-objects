// Minimal no-UI P2P chat with auto host election (error‑based discovery)
// No external signaling service – uses PeerJS ID collisions to assign roles.

// ── Constants ──────────────────────────────────────────────
const UNIQUE_SERVER_NAME = 'p2p-chat-tcp';
const numberOfHosts = 2;
const numberOfClientsPerHost = 5;

const peerConfig = {
    config: {
        iceServers: [{
            urls: "stun:stun.relay.metered.ca:80"
        }, {
            urls: "turn:standard.relay.metered.ca:80",
            username: "d0012d764320711d20e32cb5",
            credential: "NJ8OImbAEeJTEu4H"
        }, {
            urls: "turn:standard.relay.metered.ca:80?transport=tcp",
            username: "d0012d764320711d20e32cb5",
            credential: "NJ8OImbAEeJTEu4H"
        }, {
            urls: "turn:standard.relay.metered.ca:443",
            username: "d0012d764320711d20e32cb5",
            credential: "NJ8OImbAEeJTEu4H"
        }, {
            urls: "turns:standard.relay.metered.ca:443?transport=tcp",
            username: "d0012d764320711d20e32cb5",
            credential: "NJ8OImbAEeJTEu4H"
        }]
    }
};

// Build the list of possible IDs (hosts first, then their clients)
const connectionList = [];
for (let i = numberOfHosts; i >= 1; i--) {
  for (let j = numberOfClientsPerHost; j >= 1; j--) {
    connectionList.unshift({
      value: `${UNIQUE_SERVER_NAME}-host${i}-client${j}`,
      host: `${UNIQUE_SERVER_NAME}-host${i}`
    });
  }
  connectionList.unshift({
    value: `${UNIQUE_SERVER_NAME}-host${i}`,
    host: null
  });
}

// ── State ──────────────────────────────────────────────────
const state = {
  peer: null,
  myPeerId: null,
  connections: new Map(),      // peerId -> { conn, open }
  isReady: false,
  isHost: false,              // true if we claimed a host ID
  hostId: null,               // the ID of the current host (ours if isHost)
};

// ── Events ──────────────────────────────────────────────────
const events = {
  onStatus: null,
  onPeerConnected: null,
  onPeerDisconnected: null,
  onMessage: null,
  onHostChanged: null,        // called once: { hostId, isHost }
};

function emit(name, ...args) {
  try { events[name]?.(...args); } catch (err) {
    console.error(`Event handler error (${name}):`, err);
  }
}

function setStatus(status, message = '') {
  emit('onStatus', {
    status,
    message,
    connectedPeers: state.connections.size,
    peerId: state.myPeerId,
    isHost: state.isHost,
    hostId: state.hostId,
  });
}

// ── Helper: create a Peer and resolve when open ────────────
function connect(name) {
  return new Promise((resolve, reject) => {
    const peer = new Peer(name, peerConfig);
    peer.on('open', id => resolve(peer));
    peer.on('error', err => reject(err));
  });
}

// ── Host logic ──────────────────────────────────────────────
function startAsHost(peer) {
  state.isHost = true;
  state.hostId = state.myPeerId; // our ID
  state.peer = peer;

  peer.on('connection', conn => {
    conn.on('open', () => {
      onConnectionEstablished(conn, conn.peer);
    });
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (peer && !peer.destroyed) peer.destroy();
  });

  setStatus('connected', 'I am the host');
  emit('onHostChanged', { hostId: state.hostId, isHost: true });
}

// ── Client logic ────────────────────────────────────────────
function startAsClient(peer, hostId) {
  state.isHost = false;
  state.hostId = hostId;
  state.peer = peer;

  peer.on('open', () => {
    const conn = peer.connect(hostId, { reliable: true });
    conn.on('error', console.error);
    conn.on('open', () => {
      onConnectionEstablished(conn, hostId);
    });
    conn.on('close', () => {
      console.warn('Connection to host closed – refreshing page.');
      location.reload();
    });
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (peer && !peer.destroyed) peer.destroy();
  });

  setStatus('searching', `Connecting to host ${hostId}...`);
  emit('onHostChanged', { hostId, isHost: false });
}

// ── Connection handling ────────────────────────────────────
function onConnectionEstablished(conn, peerId) {
  if (state.connections.has(peerId)) {
    try { conn.close(); } catch {}
    return;
  }

  state.connections.set(peerId, { conn, open: true });

  conn.on('data', data => {
    emit('onMessage', { from: peerId, data });
  });

  conn.on('close', () => {
    closeConnection(peerId);
  });

  conn.on('error', err => {
    console.warn(`Connection error with ${peerId}:`, err);
  });

  emit('onPeerConnected', peerId);
  setStatus(
    state.isHost ? 'connected' : 'connected',
    `${state.connections.size} peer(s) connected`
  );
}

function closeConnection(peerId) {
  const entry = state.connections.get(peerId);
  if (!entry) return;
  try { entry.conn.close(); } catch {}
  state.connections.delete(peerId);
  emit('onPeerDisconnected', peerId);
  setStatus(
    state.connections.size ? 'connected' : 'searching',
    state.connections.size ? `${state.connections.size} peer(s) connected` : 'No peers connected'
  );
}

// ── Try all possible IDs until one succeeds ────────────────
async function tryConnections() {
  for (const connection of connectionList) {
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const peer = await connect(connection.value);
      state.myPeerId = connection.value;
      state.isReady = true;

      if (connection.host === null) {
        // This is a host ID
        startAsHost(peer);
      } else {
        // This is a client ID – connect to its host
        startAsClient(new Peer(peerConfig), connection.host);
      }
      return; // success – stop trying
    } catch (err) {
      // Name is taken or other error – continue to next candidate
      console.warn(`Failed to claim ${connection.value}:`, err);
    }
  }
  console.error('All attempts failed.');
  setStatus('idle', 'Could not join any chat group');
}

// ── Public API ──────────────────────────────────────────────
function sendData(data, peerId = null) {
  if (state.connections.size === 0) return false;

  if (state.isHost) {
    // Broadcast to all clients
    for (const { conn } of state.connections.values()) {
      if(peerId) {
        if(conn.peer == peerId) {
          try { conn.send(data); } catch (err) { console.warn('Send failed:', err); }
        }
      } else {
        try { conn.send(data); } catch (err) { console.warn('Send failed:', err); }
      }
    }
  } else {
    // Send only to the host (we should have exactly one connection)
    const [first] = state.connections.values();
    if (first) {
      try { first.conn.send(data); } catch (err) { console.warn('Send failed:', err); }
    }
  }
  return true;
}

function sendMessage(data) {
  return sendData(data);
}

function getState() {
  return {
    peerId: state.myPeerId,
    ready: state.isReady,
    peers: [...state.connections.keys()],
    isHost: state.isHost,
    hostId: state.hostId,
  };
}

async function cleanUp() {
  // Close connections
  for (const { conn } of state.connections.values()) {
    try { conn.close(); } catch {}
  }
  state.connections.clear();

  // Destroy Peer
  if (state.peer) {
    try { state.peer.destroy(); } catch {}
  }
  state.peer = null;
  state.isReady = false;
  state.myPeerId = null;
  state.isHost = false;
  state.hostId = null;
}

// ── Start ────────────────────────────────────────────────────
tryConnections();

// ── Expose global API ──────────────────────────────────────
window.p2pChat = {
  sendData,
  sendMessage,
  getState,
  cleanUp,
  events,
};

/**
 * USAGE
 *
 * window.p2pChat.events.onHostChanged = ({ hostId, isHost }) => {
 *   console.log(`Host is ${hostId}, I am ${isHost ? 'the host' : 'a client'}`);
 * };
 *
 * p2pChat.events.onStatus = console.log;
 * p2pChat.events.onPeerConnected = (peerId) => console.log('Connected:', peerId);
 * p2pChat.events.onMessage = ({ from, data }) => console.log('From:', from, 'Data:', data);
 *
 * p2pChat.sendMessage('Hello, everyone!');
 */