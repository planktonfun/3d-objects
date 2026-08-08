// ── Binary Schema (for tiny JSON-like objects) ──
    class BinarySchema {
      constructor(fields) {
        this.fields = [];
        let offset = 0;
        for (const [key, type] of Object.entries(fields)) {
          const size = { uint8: 1, int8: 1, uint16: 2, int16: 2, uint32: 4, int32: 4, float32: 4, float64: 8 }[type];
          if (!size) throw new Error(`Unknown type: ${type}`);
          this.fields.push({ key, type, offset, size });
          offset += size;
        }
        this.byteLength = offset;
      }

      encode(obj) {
        const buf = new Uint8Array(this.byteLength);
        const view = new DataView(buf.buffer);
        for (const f of this.fields) {
          const val = obj[f.key] ?? 0;
          switch (f.type) {
            case 'uint8':   view.setUint8(f.offset, val); break;
            case 'int8':    view.setInt8(f.offset, val); break;
            case 'uint16':  view.setUint16(f.offset, val, true); break;
            case 'int16':   view.setInt16(f.offset, val, true); break;
            case 'uint32':  view.setUint32(f.offset, val, true); break;
            case 'int32':   view.setInt32(f.offset, val, true); break;
            case 'float32': view.setFloat32(f.offset, val, true); break;
            case 'float64': view.setFloat64(f.offset, val, true); break;
          }
        }
        return buf;
      }

      decode(buffer) {
        const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        const obj = {};
        for (const f of this.fields) {
          let val;
          switch (f.type) {
            case 'uint8':   val = view.getUint8(f.offset); break;
            case 'int8':    val = view.getInt8(f.offset); break;
            case 'uint16':  val = view.getUint16(f.offset, true); break;
            case 'int16':   val = view.getInt16(f.offset, true); break;
            case 'uint32':  val = view.getUint32(f.offset, true); break;
            case 'int32':   val = view.getInt32(f.offset, true); break;
            case 'float32': val = view.getFloat32(f.offset, true); break;
            case 'float64': val = view.getFloat64(f.offset, true); break;
          }
          obj[f.key] = val;
        }
        return obj;
      }
    }