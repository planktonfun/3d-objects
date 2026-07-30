class BitPacker {
  // ============================================================
  //  Enums
  // ============================================================

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

  static SIDE = { left: 0, right: 1 };
  static ACTION = { press: 0, move: 1, release: 2 };

  static BUTTON_NAME = Object.fromEntries(
    Object.entries(BitPacker.BUTTON_ID).map(([k, v]) => [v, k])
  );
  static SIDE_NAME = Object.fromEntries(
    Object.entries(BitPacker.SIDE).map(([k, v]) => [v, k])
  );
  static ACTION_NAME = Object.fromEntries(
    Object.entries(BitPacker.ACTION).map(([k, v]) => [v, k])
  );

  // ============================================================
  //  Schema
  // ============================================================

  static SCHEMA = {
    ping: {
      type: 0,
      fields: [{ name: 'timestamp', type: 'float64' }],
    },
    pong: {
      type: 1,
      fields: [{ name: 'timestamp', type: 'float64' }],
    },
    playerName: {
      type: 2,
      fields: [
        { name: 'playerId', type: 'uint16' },
        { name: 'name', type: 'string' },
      ],
    },
    thumbstick: {
      type: 3,
      fields: [
        { name: 'playerId', type: 'uint16' },
        { name: 'side', type: 'enum', enumMap: BitPacker.SIDE },
        { name: 'x', type: 'float64' },
        { name: 'y', type: 'float64' },
        { name: 'action', type: 'enum', enumMap: BitPacker.ACTION },
      ],
    },
    button: {
      type: 4,
      fields: [
        { name: 'playerId', type: 'uint16' },
        { name: 'button', type: 'enum', enumMap: BitPacker.BUTTON_ID },
        { name: 'action', type: 'enum', enumMap: BitPacker.ACTION },
      ],
    },
    vibrate: {
      type: 5,
      fields: [],
    },
  };

  static TYPE_NAME = Object.fromEntries(
    Object.entries(BitPacker.SCHEMA).map(([name, def]) => [def.type, name])
  );

  // ============================================================
  //  Write / Read helpers
  // ============================================================

  static _writeUint8(view, offset, value) {
    view.setUint8(offset, value);
  }
  static _writeUint16LE(view, offset, value) {
    view.setUint16(offset, value, true);
  }
  static _writeFloat64LE(view, offset, value) {
    view.setFloat64(offset, value, true);
  }

  static _readUint8(view, offset) {
    return view.getUint8(offset);
  }
  static _readUint16LE(view, offset) {
    return view.getUint16(offset, true);
  }
  static _readFloat64LE(view, offset) {
    return view.getFloat64(offset, true);
  }

  // ============================================================
  //  Encode
  // ============================================================

  static encode(message) {
    const typeName = message.type;
    const schema = BitPacker.SCHEMA[typeName];
    if (!schema) throw new Error(`Unknown message type: ${typeName}`);

    const fieldWriters = [];
    let totalSize = 1; // type byte

    for (const field of schema.fields) {
      const value = message[field.name];
      if (value === undefined && field.type !== 'string') {
        throw new Error(`Missing field ${field.name} in ${typeName}`);
      }

      switch (field.type) {
        case 'uint16': {
          totalSize += 2;
          fieldWriters.push({ size: 2, write: (view, off) => BitPacker._writeUint16LE(view, off, value) });
          break;
        }
        case 'float64': {
          totalSize += 8;
          fieldWriters.push({ size: 8, write: (view, off) => BitPacker._writeFloat64LE(view, off, value) });
          break;
        }
        case 'enum': {
          const enumMap = field.enumMap;
          const enumVal = enumMap[value];
          if (enumVal === undefined) throw new Error(`Invalid enum value "${value}" for field ${field.name}`);
          totalSize += 1;
          fieldWriters.push({ size: 1, write: (view, off) => BitPacker._writeUint8(view, off, enumVal) });
          break;
        }
        case 'string': {
          const bytes = new TextEncoder().encode(value);
          if (bytes.length > 255) throw new Error(`String too long (max 255 bytes): ${field.name}`);
          totalSize += 1 + bytes.length;
          fieldWriters.push({
            size: 1 + bytes.length,
            write: (view, off) => {
              BitPacker._writeUint8(view, off, bytes.length);
              off += 1;
              for (let i = 0; i < bytes.length; i++) {
                view.setUint8(off + i, bytes[i]);
              }
            },
          });
          break;
        }
        default:
          throw new Error(`Unsupported field type: ${field.type}`);
      }
    }

    const buf = new Uint8Array(totalSize);
    const view = new DataView(buf.buffer);
    let offset = 0;

    // Write type
    BitPacker._writeUint8(view, offset, schema.type);
    offset += 1;

    // Write fields
    for (const w of fieldWriters) {
      w.write(view, offset);
      offset += w.size;
    }

    return buf;
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

    const typeNum = BitPacker._readUint8(view, 0);
    const typeName = BitPacker.TYPE_NAME[typeNum];
    if (!typeName) throw new Error(`Unknown type code: ${typeNum}`);

    const schema = BitPacker.SCHEMA[typeName];
    let offset = 1;
    const result = { type: typeName };

    for (const field of schema.fields) {
      switch (field.type) {
        case 'uint16': {
          if (offset + 2 > totalLen) throw new Error('Buffer too short for uint16');
          result[field.name] = BitPacker._readUint16LE(view, offset);
          offset += 2;
          break;
        }
        case 'float64': {
          if (offset + 8 > totalLen) throw new Error('Buffer too short for float64');
          result[field.name] = BitPacker._readFloat64LE(view, offset);
          offset += 8;
          break;
        }
        case 'enum': {
          if (offset + 1 > totalLen) throw new Error('Buffer too short for enum');
          const val = BitPacker._readUint8(view, offset);
          offset += 1;
          const enumMap = field.enumMap;
          // Reverse map for this enum
          const revMap = Object.fromEntries(Object.entries(enumMap).map(([k, v]) => [v, k]));
          const name = revMap[val];
          if (name === undefined) throw new Error(`Invalid enum value ${val} for field ${field.name}`);
          result[field.name] = name;
          break;
        }
        case 'string': {
          if (offset + 1 > totalLen) throw new Error('Buffer too short for string length');
          const len = BitPacker._readUint8(view, offset);
          offset += 1;
          if (offset + len > totalLen) throw new Error('Buffer too short for string data');
          const bytes = new Uint8Array(view.buffer, view.byteOffset + offset, len);
          result[field.name] = new TextDecoder().decode(bytes);
          offset += len;
          break;
        }
        default:
          throw new Error(`Unsupported field type: ${field.type}`);
      }
    }

    return result;
  }
}

// ============================================================
//  Example usage (test with sample messages)
// ============================================================

const samples = [
  { type: 'vibrate' },
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
});