class BitPacker {
  // ============================================================
  //  Constants
  // ============================================================

  static TYPE = {
    PING: 0,
    PONG: 1,
    PLAYER_NAME: 2,
    THUMBSTICK: 3,
    BUTTON: 4,
  };

  static BUTTON_ID = {
    right: 0,
    left: 1,
    up: 2,
    down: 3,
    Select: 4,
    Home: 5,
    Start: 6,
    X: 7,
    Y: 8,
    B: 9,
    A: 10,
    R2: 11,
    L2: 12,
    R1: 13,
    L1: 14,
  };

  static BUTTON_NAME = Object.fromEntries(
    Object.entries(BitPacker.BUTTON_ID).map(([k, v]) => [v, k])
  );

  static SIDE = { left: 0, right: 1 };
  static SIDE_NAME = { 0: 'left', 1: 'right' };

  // Action: press=0, move=1, release=2
  static ACTION = { press: 0, move: 1, release: 2 };
  static ACTION_NAME = { 0: 'press', 1: 'move', 2: 'release' };

  // ============================================================
  //  Low‑level read/write helpers (little‑endian)
  // ============================================================

  static _writeUint8(view, offset, value) {
    view.setUint8(offset, value);
  }

  static _writeUint16LE(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  static _writeDoubleLE(view, offset, value) {
    view.setFloat64(offset, value, true);
  }

  static _readUint8(view, offset) {
    return view.getUint8(offset);
  }

  static _readUint16LE(view, offset) {
    return view.getUint16(offset, true);
  }

  static _readDoubleLE(view, offset) {
    return view.getFloat64(offset, true);
  }

  // ============================================================
  //  Encode
  // ============================================================

  static encode(message) {
    const type = message.type;
    const TYPE = BitPacker.TYPE;

    switch (type) {
      case 'ping':
      case 'pong': {
        const buf = new Uint8Array(1 + 8);
        const view = new DataView(buf.buffer);
        BitPacker._writeUint8(view, 0, type === 'ping' ? TYPE.PING : TYPE.PONG);
        BitPacker._writeDoubleLE(view, 1, message.timestamp);
        return buf;
      }

      case 'playerName': {
        const nameBytes = new TextEncoder().encode(message.name);
        if (nameBytes.length > 255) throw new Error('Name too long (max 255 bytes)');
        const buf = new Uint8Array(1 + 2 + 1 + nameBytes.length);
        const view = new DataView(buf.buffer);
        let offset = 0;
        BitPacker._writeUint8(view, offset, TYPE.PLAYER_NAME);
        offset += 1;
        BitPacker._writeUint16LE(view, offset, message.playerId);
        offset += 2;
        BitPacker._writeUint8(view, offset, nameBytes.length);
        offset += 1;
        buf.set(nameBytes, offset);
        return buf;
      }

      case 'thumbstick': {
        const side = BitPacker.SIDE[message.side];
        if (side === undefined) throw new Error('Invalid side');
        const action = BitPacker.ACTION[message.action];
        if (action === undefined) throw new Error('Invalid thumbstick action');
        // type + playerId + side + action + x(8) + y(8) = 21 bytes
        const buf = new Uint8Array(1 + 2 + 1 + 1 + 8 + 8);
        const view = new DataView(buf.buffer);
        let offset = 0;
        BitPacker._writeUint8(view, offset, TYPE.THUMBSTICK);
        offset += 1;
        BitPacker._writeUint16LE(view, offset, message.playerId);
        offset += 2;
        BitPacker._writeUint8(view, offset, side);
        offset += 1;
        BitPacker._writeUint8(view, offset, action);
        offset += 1;
        BitPacker._writeDoubleLE(view, offset, message.x);
        offset += 8;
        BitPacker._writeDoubleLE(view, offset, message.y);
        return buf;
      }

      case 'button': {
        const buttonId = BitPacker.BUTTON_ID[message.button];
        if (buttonId === undefined) throw new Error('Unknown button');
        const action = BitPacker.ACTION[message.action];
        if (action === undefined) throw new Error('Invalid button action');
        const buf = new Uint8Array(1 + 2 + 1 + 1);
        const view = new DataView(buf.buffer);
        let offset = 0;
        BitPacker._writeUint8(view, offset, TYPE.BUTTON);
        offset += 1;
        BitPacker._writeUint16LE(view, offset, message.playerId);
        offset += 2;
        BitPacker._writeUint8(view, offset, buttonId);
        offset += 1;
        BitPacker._writeUint8(view, offset, action);
        return buf;
      }

      default: {
        console.error(message);
        throw new Error(`Unknown message type: ${type}`);
      }
    }
  }

  // ============================================================
  //  Decode
  // ============================================================

  static decode(buffer) {
    // Accept ArrayBuffer, Uint8Array, or DataView
    const view = buffer instanceof DataView
      ? buffer
      : new DataView(
          buffer.buffer || buffer,
          buffer.byteOffset || 0,
          buffer.byteLength || buffer.length
        );
    const totalLen = view.byteLength;
    if (totalLen < 1) throw new Error('Buffer too short');

    const type = BitPacker._readUint8(view, 0);
    let offset = 1;
    const TYPE = BitPacker.TYPE;

    switch (type) {
      case TYPE.PING:
      case TYPE.PONG: {
        if (totalLen < 1 + 8) throw new Error('Invalid ping/pong buffer');
        const timestamp = BitPacker._readDoubleLE(view, offset);
        return {
          type: type === TYPE.PING ? 'ping' : 'pong',
          timestamp,
        };
      }

      case TYPE.PLAYER_NAME: {
        if (totalLen < 1 + 2 + 1) throw new Error('Invalid playerName buffer');
        const playerId = BitPacker._readUint16LE(view, offset);
        offset += 2;
        const nameLen = BitPacker._readUint8(view, offset);
        offset += 1;
        if (totalLen < offset + nameLen) throw new Error('Name data truncated');
        const nameBytes = new Uint8Array(view.buffer, view.byteOffset + offset, nameLen);
        const name = new TextDecoder().decode(nameBytes);
        return { type: 'playerName', playerId, name };
      }

      case TYPE.THUMBSTICK: {
        if (totalLen < 1 + 2 + 1 + 1 + 8 + 8) throw new Error('Invalid thumbstick buffer');
        const playerId = BitPacker._readUint16LE(view, offset);
        offset += 2;
        const sideVal = BitPacker._readUint8(view, offset);
        offset += 1;
        const actionVal = BitPacker._readUint8(view, offset);
        offset += 1;
        const x = BitPacker._readDoubleLE(view, offset);
        offset += 8;
        const y = BitPacker._readDoubleLE(view, offset);
        const side = BitPacker.SIDE_NAME[sideVal];
        const action = BitPacker.ACTION_NAME[actionVal];
        if (side === undefined || action === undefined) {
          throw new Error('Invalid thumbstick values');
        }
        return { type: 'thumbstick', playerId, side, x, y, action };
      }

      case TYPE.BUTTON: {
        if (totalLen < 1 + 2 + 1 + 1) throw new Error('Invalid button buffer');
        const playerId = BitPacker._readUint16LE(view, offset);
        offset += 2;
        const buttonId = BitPacker._readUint8(view, offset);
        offset += 1;
        const actionVal = BitPacker._readUint8(view, offset);
        const button = BitPacker.BUTTON_NAME[buttonId];
        const action = BitPacker.ACTION_NAME[actionVal];
        if (button === undefined || action === undefined) {
          throw new Error('Invalid button values');
        }
        return { type: 'button', playerId, button, action };
      }

      default:
        throw new Error(`Unknown type code: ${type}`);
    }
  }
}


// ============================================================
//  Example usage (test with sample messages)
// ============================================================
/*
const samples = [
  { type: 'ping', timestamp: 240423.20000004768 },
  { type: 'pong', timestamp: 240423.20000004768 },
  { type: 'playerName', playerId: 863, name: 'John' },
  { type: 'thumbstick', playerId: 863, side: 'right', x: -0.8529411764705882, y: -0.4227941176470588, action: 'move' },
  { type: 'thumbstick', playerId: 863, side: 'right', x: 0, y: 0, action: 'release' },
  { type: 'thumbstick', playerId: 863, side: 'left', x: 0.08823529411764706, y: -0.06985294117647059, action: 'move' },
  { type: 'thumbstick', playerId: 863, side: 'left', x: 0, y: 0, action: 'release' },
  { type: 'button', playerId: 863, button: 'right', action: 'press' },
  { type: 'button', playerId: 863, button: 'right', action: 'release' },
  { type: 'button', playerId: 863, button: 'down', action: 'press' },
  { type: 'button', playerId: 863, button: 'down', action: 'release' },
  { type: 'button', playerId: 863, button: 'up', action: 'press' },
  { type: 'button', playerId: 863, button: 'up', action: 'release' },
  { type: 'button', playerId: 863, button: 'left', action: 'press' },
  { type: 'button', playerId: 863, button: 'left', action: 'release' },
  { type: 'button', playerId: 863, button: 'Select', action: 'release' },
  { type: 'button', playerId: 863, button: 'Select', action: 'press' },
  { type: 'button', playerId: 863, button: 'Home', action: 'press' },
  { type: 'button', playerId: 863, button: 'Home', action: 'release' },
  { type: 'button', playerId: 863, button: 'Start', action: 'press' },
  { type: 'button', playerId: 863, button: 'Start', action: 'release' },
  { type: 'button', playerId: 863, button: 'X', action: 'press' },
  { type: 'button', playerId: 863, button: 'X', action: 'release' },
  { type: 'button', playerId: 863, button: 'Y', action: 'press' },
  { type: 'button', playerId: 863, button: 'Y', action: 'release' },
  { type: 'button', playerId: 863, button: 'B', action: 'press' },
  { type: 'button', playerId: 863, button: 'B', action: 'release' },
  { type: 'button', playerId: 863, button: 'A', action: 'press' },
  { type: 'button', playerId: 863, button: 'A', action: 'release' },
  { type: 'button', playerId: 863, button: 'R2', action: 'press' },
  { type: 'button', playerId: 863, button: 'R2', action: 'release' },
  { type: 'button', playerId: 863, button: 'L2', action: 'press' },
  { type: 'button', playerId: 863, button: 'L2', action: 'release' },
  { type: 'button', playerId: 863, button: 'R1', action: 'press' },
  { type: 'button', playerId: 863, button: 'R1', action: 'release' },
  { type: 'button', playerId: 863, button: 'L1', action: 'press' },
  { type: 'button', playerId: 863, button: 'L1', action: 'release' }
];

// Test round‑trip
samples.forEach((msg, i) => {
  const packed = BitPacker.encode(msg);
  const unpacked = BitPacker.decode(packed);
  // Compare (floating point tolerance for x/y/timestamp)
  const ok = JSON.stringify(msg) === JSON.stringify(unpacked);
  console.log(`Sample ${i+1}: ${ok ? '✅' : '❌'}`);
    if(!ok) console.log(msg, unpacked);
});*/