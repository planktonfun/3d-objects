// ── Constants ──────────────────────────────────────────────
const UNIQUE_SERVER_NAME = 'webgl-fluid-sim';
const numberOfHosts = 10;
const numberOfClientsPerHost = 10;

// Auto host handling
const connectionList = [];
for (var i = numberOfHosts; i >= 1; i--) {
    for (var j = numberOfClientsPerHost; j >= 1; j--) {
        connectionList.unshift({ value: `${UNIQUE_SERVER_NAME}-host${i}-client${j}`, host: `${UNIQUE_SERVER_NAME}-host${i}` });
    }
    connectionList.unshift({ value: `${UNIQUE_SERVER_NAME}-host${i}`, host: null });
}

const peerjsServerConfig = {
    host: 'sturdy-computing-machine-gx55vj7gxv2wqx5-9000.app.github.dev', // Your domain (or 'localhost' for local testing)
    port: 443,                   // 443 for HTTPS production, 9000 for local HTTP
    path: '/peerjs',             // Must match the path defined in your server options
    secure: true                 // Set to true if using HTTPS/SSL
};
// const peerjsServerConfig = null;

// Helper function converting event-based Obj into a Promise

if(peerjsServerConfig) {
    function connect(requestedName) {
        return new Promise(async (resolve, reject) => {
            // Ask your backend if the name is already in use
            const response = await fetch(`https://${peerjsServerConfig.host}/check-id/${requestedName}`);
            const data = await response.json();

            if (data.taken) {
                reject("This name is already taken. Please choose another one.");
                return;
            }

            resolve(new Peer(requestedName, peerjsServerConfig));
        });
    }

    async function tryConnections() {
        for (const connection of connectionList) {
            try {
                const peer = await connect(connection.value);

                // If connection succeeds, execute your callback and stop trying others
                if(connection.host) {
                    isHost = false;
                    startAsClient(new Peer(null, peerjsServerConfig), connection.host);
                } else {
                    isHost = true;
                    startAsHost(peer);
                }

                return;
            } catch (err) {
                // Loop automatically continues to the next connection
                console.warn(`Failed for connection: ${connection.value}`, err);
            }
        }

        console.error('All attempts failed.');
    }

    tryConnections();
} else {

    function connect(name, type) {
        return new Promise((resolve, reject) => {
            const peer = new Peer(name);

            peer.on('open', id => resolve(peer));
            peer.on('error', err => reject(err));
        });
    }

    async function tryConnections() {
        for (const connection of connectionList) {
            try {
                const peer = await connect(connection.value);

                // If connection succeeds, execute your callback and stop trying others
                if(connection.host) {
                    isHost = false;
                    startAsClient(new Peer(), connection.host);
                } else {
                    isHost = true;
                    startAsHost(peer);
                }

                return;
            } catch (err) {
                // Loop automatically continues to the next connection
                console.warn(`Failed for connection: ${connection.value}`, err);
            }
        }

        console.error('All attempts failed.');
    }

    tryConnections();
}
