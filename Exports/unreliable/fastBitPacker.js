// fastPackerFactory.js – with delta support
(function (global) {
  'use strict';

  function createFastPacker(schema, createDefaultState) {
    // ---------- Layout ----------
    function buildLayout() {
      var layout = [];
      var bitPos = 0;
      for (var i = 0; i < schema.length; i++) {
        var f = schema[i];
        layout.push({
          id: f.id,
          bits: f.bits,
          startBit: bitPos,
          byteIndex: bitPos >> 3,
          bitOffset: bitPos & 7,
          path: f.path || ('s.' + f.id),
          getValue: f.getValue,
          setValue: f.setValue
        });
        bitPos += f.bits;
      }
      return layout;
    }

    var layout = buildLayout();
    var totalBits = 0;
    for (var i = 0; i < layout.length; i++) totalBits += layout[i].bits;
    var totalBytes = Math.ceil(totalBits / 8);
    var fieldCount = layout.length;

    // Precompute masks
    var fieldMasks = layout.map(function(f) { return (1 << f.bits) - 1; });

    // ---------- Code generation: packFast ----------
    function genPackBody() {
      var lines = [];
      lines.push('var buf = new Uint8Array(' + totalBytes + ');');
      for (var i = 0; i < layout.length; i++) {
        var f = layout[i];
        lines.push('var v' + i + ' = (' + f.path + ') & ' + fieldMasks[i] + ';');
      }
      for (var i = 0; i < layout.length; i++) {
        var f = layout[i];
        var bp = f.startBit;
        var n = f.bits;
        var startByte = f.byteIndex;
        var endByte = (bp + n - 1) >> 3;
        for (var b = startByte; b <= endByte; b++) {
          var chunkStart = Math.max(b << 3, bp);
          var chunkEnd = Math.min((b << 3) + 8, bp + n);
          var numBits = chunkEnd - chunkStart;
          if (numBits <= 0) continue;
          var valueShift = n - (chunkEnd - bp);
          var byteShift = 8 - (chunkEnd - (b << 3));
          var fullByte = (chunkStart === (b << 3) && chunkEnd === (b << 3) + 8);
          var src = '(v' + i + ' >>> ' + valueShift + ')';
          if (fullByte) {
            lines.push('buf[' + b + '] = ' + src + ' & 255;');
          } else if (byteShift === 0) {
            lines.push('buf[' + b + '] |= ' + src + ' & ' + ((1 << numBits) - 1) + ';');
          } else {
            lines.push('buf[' + b + '] |= (' + src + ' & ' + ((1 << numBits) - 1) + ') << ' + byteShift + ';');
          }
        }
      }
      lines.push('return buf;');
      return lines.join('\n');
    }

    // ---------- Code generation: unpackFast ----------
    function genUnpackBody() {
      var lines = [];
      if (typeof createDefaultState === 'function') {
        lines.push('var r = (' + createDefaultState.toString() + ')();');
      } else {
        lines.push('var r = {};');
      }
      for (var j = 0; j < layout.length; j++) {
        var f = layout[j];
        var bp = f.startBit;
        var n = f.bits;
        var startByte = f.byteIndex;
        var endByte = (bp + n - 1) >> 3;
        var expr = '';
        for (var b = startByte; b <= endByte; b++) {
          var chunkStart = Math.max(b << 3, bp);
          var chunkEnd = Math.min((b << 3) + 8, bp + n);
          var numBits = chunkEnd - chunkStart;
          if (numBits <= 0) continue;
          var byteShift = 8 - (chunkEnd - (b << 3));
          var valueShift = n - (chunkEnd - bp);
          var term = '((buf[' + b + '] >>> ' + byteShift + ') & ' + ((1 << numBits) - 1) + ') << ' + valueShift;
          expr = expr ? term + ' | ' + expr : term;
        }
        var val = '(' + expr + ')';
        var target = f.path.replace(/^s\./, 'r.');
        lines.push(target + ' = ' + val + ';');
      }
      lines.push('return r;');
      return lines.join('\n');
    }

    // Compile pack/unpack
    var codegenAvailable = true;
    var packFast = null;
    var unpackFast = null;
    try {
      packFast = new Function('s', genPackBody());
      unpackFast = new Function('buf', genUnpackBody());
    } catch (_) {
      codegenAvailable = false;
    }

    // ---------- Table‑driven versions ----------
    var getters = schema.map(function(f) { return f.getValue; });
    var setters = schema.map(function(f) { return f.setValue; });

    function packTable(state, out) {
      var buf = out || new Uint8Array(totalBytes);
      var acc = 0, accBits = 0, pos = 0;
      for (var i = 0; i < layout.length; i++) {
        var val = getters[i](state) & fieldMasks[i];
        acc = (acc << layout[i].bits) | val;
        accBits += layout[i].bits;
        while (accBits >= 8) {
          buf[pos++] = (acc >>> (accBits - 8)) & 0xff;
          accBits -= 8;
        }
        acc &= (1 << accBits) - 1;
      }
      return buf;
    }

    function unpackTable(buf) {
      var state = (typeof createDefaultState === 'function') ? createDefaultState() : {};
      for (var j = 0; j < layout.length; j++) {
        var f = layout[j];
        var bp = f.startBit;
        var n = f.bits;
        var startByte = f.byteIndex;
        var endByte = (bp + n - 1) >> 3;
        var v = 0;
        for (var b = startByte; b <= endByte; b++) {
          var chunkStart = Math.max(b << 3, bp);
          var chunkEnd = Math.min((b << 3) + 8, bp + n);
          var numBits = chunkEnd - chunkStart;
          if (numBits <= 0) continue;
          var byteShift = 8 - (chunkEnd - (b << 3));
          var valueShift = n - (chunkEnd - bp);
          v |= ((buf[b] >>> byteShift) & ((1 << numBits) - 1)) << valueShift;
        }
        setters[j](state, v);
      }
      return state;
    }

    // ---------- Delta Packer (generated code) ----------
    // We'll generate a packDeltaFast that uses the path expressions for speed.
    // It outputs a Uint8Array with bitmask (fieldCount bits) + changed values.
    function genDeltaPackBody() {
      var lines = [];
      var totalHeaderBits = fieldCount; // one bit per field
      var maxPayloadBits = 0;
      for (var i = 0; i < layout.length; i++) maxPayloadBits += layout[i].bits;
      var maxTotalBits = totalHeaderBits + maxPayloadBits;
      var maxBytes = Math.ceil(maxTotalBits / 8);
      lines.push('var out = new Uint8Array(' + maxBytes + ');');
      // Read old and new values into locals
      for (var i = 0; i < layout.length; i++) {
        var f = layout[i];
        lines.push('var old' + i + ' = (' + f.path + ') & ' + fieldMasks[i] + ';');
        // For new state, we need to access the second argument 'n'
        // But we need to generate path for 'n' instead of 's'
        var newPath = f.path.replace(/^s\./, 'n.');
        lines.push('var new' + i + ' = (' + newPath + ') & ' + fieldMasks[i] + ';');
      }
      // We'll use a bit-buffer accumulator
      lines.push('var acc = 0, accBits = 0, pos = 0;');
      lines.push('function put(bits, val) { acc = (acc << bits) | (val & ((1 << bits) - 1)); accBits += bits; while (accBits >= 8) { out[pos++] = (acc >>> (accBits - 8)) & 0xff; accBits -= 8; } acc &= (1 << accBits) - 1; }');
      // Write header: 1 bit per field, 1 if changed
      for (var i = 0; i < layout.length; i++) {
        lines.push('put(1, (old' + i + ' !== new' + i + ') ? 1 : 0);');
      }
      // Write changed values
      for (var i = 0; i < layout.length; i++) {
        lines.push('if (old' + i + ' !== new' + i + ') put(' + layout[i].bits + ', new' + i + ');');
      }
      // Flush remaining bits
      lines.push('if (accBits > 0) out[pos] = (acc << (8 - accBits)) & 0xff;');
      // Trim to actual bytes used (we can't easily trim Uint8Array, but we can return a slice)
      lines.push('return out.slice(0, pos + (accBits > 0 ? 1 : 0));');
      return lines.join('\n');
    }

    var packDeltaFast = null;
    try {
      packDeltaFast = new Function('s', 'n', genDeltaPackBody());
    } catch (_) {
      // fallback to table version
    }

    // Table-driven delta packer (always available)
    function packDeltaTable(oldState, newState) {
      var changed = [];
      for (var i = 0; i < layout.length; i++) {
        if (getters[i](oldState) !== getters[i](newState)) changed.push(i);
      }
      var changedSet = new Set(changed);
      var payloadBits = 0;
      for (var i = 0; i < changed.length; i++) payloadBits += layout[changed[i]].bits;
      var totalBits = fieldCount + payloadBits;
      var out = new Uint8Array(Math.ceil(totalBits / 8));
      var acc = 0, accBits = 0, pos = 0;
      function put(bits, val) {
        acc = (acc << bits) | (val & ((1 << bits) - 1));
        accBits += bits;
        while (accBits >= 8) {
          out[pos++] = (acc >>> (accBits - 8)) & 0xff;
          accBits -= 8;
        }
        acc &= (1 << accBits) - 1;
      }
      // header
      for (var i = 0; i < layout.length; i++) {
        put(1, changedSet.has(i) ? 1 : 0);
      }
      // payload
      for (var i = 0; i < changed.length; i++) {
        var idx = changed[i];
        put(layout[idx].bits, getters[idx](newState));
      }
      if (accBits > 0) out[pos] = (acc << (8 - accBits)) & 0xff;
      return out;
    }

    // ---------- Delta unpack (apply delta to base state) ----------
    // We'll implement a function that takes a base state and delta bytes,
    // returns a new state with changes applied.
    function unpackDelta(baseState, deltaBytes) {
      // Parse bitmask header (fieldCount bits) and then payload.
      var state = (typeof createDefaultState === 'function') ? createDefaultState() : {};
      // Copy all values from baseState to new state
      for (var i = 0; i < layout.length; i++) {
        setters[i](state, getters[i](baseState));
      }
      // Now read delta
      var bitPos = 0;
      function readBits(n) {
        var val = 0;
        for (var i = 0; i < n; i++) {
          var byteIdx = bitPos >> 3;
          var bitOffset = bitPos & 7;
          var bit = (deltaBytes[byteIdx] >>> (7 - bitOffset)) & 1;
          val = (val << 1) | bit;
          bitPos++;
        }
        return val;
      }
      // Read header
      var changedIndices = [];
      for (var i = 0; i < fieldCount; i++) {
        var changed = readBits(1);
        if (changed) changedIndices.push(i);
      }
      // Read payload values in order
      for (var i = 0; i < changedIndices.length; i++) {
        var idx = changedIndices[i];
        var bits = layout[idx].bits;
        var val = readBits(bits);
        setters[idx](state, val);
      }
      return state;
    }

    // ---------- Full analysis delta (like calculateDelta) ----------
    function calculateDelta(baseState, newState) {
      var changedFields = [];
      var bitmaskBits = '';
      var payloadBits = '';
      for (var i = 0; i < layout.length; i++) {
        var oldVal = getters[i](baseState);
        var newVal = getters[i](newState);
        var changed = oldVal !== newVal;
        bitmaskBits += changed ? '1' : '0';
        if (changed) {
          changedFields.push({
            index: i,
            id: layout[i].id,
            bits: layout[i].bits,
            oldValue: oldVal,
            newValue: newVal,
            oldBinary: oldVal.toString(2).padStart(layout[i].bits, '0'),
            newBinary: newVal.toString(2).padStart(layout[i].bits, '0')
          });
          // we need the binary string of newVal, but we can compute payload bits
          payloadBits += newVal.toString(2).padStart(layout[i].bits, '0');
        }
      }
      var deltaPacket = packDeltaFast ? packDeltaFast(baseState, newState) : packDeltaTable(baseState, newState);
      return {
        hasChanges: changedFields.length > 0,
        changedFields: changedFields,
        bitmaskBits: bitmaskBits,
        bitmaskHex: bitmaskBits.match(/.{8}/g)?.map(function(b) { return parseInt(b, 2).toString(16).padStart(2, '0').toUpperCase(); }).join(' ') || '',
        payloadBits: payloadBits,
        deltaBytes: deltaPacket,
        deltaHex: Array.from(deltaPacket).map(function(b) { return b.toString(16).padStart(2, '0').toUpperCase(); }).join(' '),
        fullSnapshotBytes: totalBytes,
        deltaPacketBytes: deltaPacket.length,
        savingsPercent: Math.round((1 - deltaPacket.length / totalBytes) * 100)
      };
    }

    // ---------- Expose API ----------
    return {
      // Basic packing
      packFast: packFast,
      unpackFast: unpackFast,
      packTable: packTable,
      unpackTable: unpackTable,
      // Delta packing
      packDeltaFast: packDeltaFast,
      packDeltaTable: packDeltaTable,
      unpackDelta: unpackDelta,
      calculateDelta: calculateDelta,
      // Metadata
      totalBits: totalBits,
      totalBytes: totalBytes,
      fieldCount: fieldCount,
      layout: layout,
      CODEC_ENABLED: codegenAvailable,
      // Helpers (if needed)
      createDefaultState: createDefaultState
    };
  }

  // Expose
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createFastPacker: createFastPacker };
  } else {
    global.createFastPacker = createFastPacker;
  }
    globalThis.createFastPacker = createFastPacker;

})(typeof window !== 'undefined' ? window : this);