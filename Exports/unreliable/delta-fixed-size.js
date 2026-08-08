function createDelta(oldData, newData) {
    if (oldData.length !== newData.length) {
        throw new Error("Arrays must have the same length");
    }

    let mode;
    let indexBytes;

    if (oldData.length <= 0x100) {
        mode = 0;
        indexBytes = 1;
    } else if (oldData.length <= 0x10000) {
        mode = 1;
        indexBytes = 2;
    } else {
        mode = 2;
        indexBytes = 4;
    }

    let changes = 0;
    for (let i = 0; i < oldData.length; i++) {
        if (oldData[i] !== newData[i]) {
            changes++;
        }
    }

    const delta = new Uint8Array(
        1 + changes * (indexBytes + 1)
    );

    delta[0] = mode;

    const view = new DataView(delta.buffer);

    let p = 1;

    for (let i = 0; i < oldData.length; i++) {
        if (oldData[i] !== newData[i]) {

            switch (mode) {
                case 0:
                    delta[p++] = i;
                    break;

                case 1:
                    view.setUint16(p, i, true);
                    p += 2;
                    break;

                case 2:
                    view.setUint32(p, i, true);
                    p += 4;
                    break;
            }

            delta[p++] = newData[i];
        }
    }

    return delta;
}

function applyDelta(data, delta) {
    const result = data.slice();

    const mode = delta[0];
    const view = new DataView(
        delta.buffer,
        delta.byteOffset,
        delta.byteLength
    );

    let p = 1;

    while (p < delta.length) {

        let index;

        switch (mode) {
            case 0:
                index = delta[p++];
                break;

            case 1:
                index = view.getUint16(p, true);
                p += 2;
                break;

            case 2:
                index = view.getUint32(p, true);
                p += 4;
                break;

            default:
                throw new Error("Invalid delta format");
        }

        result[index] = delta[p++];
    }

    return result;
}

function createDeltaOptimized(oldData, newData) {
    if (oldData.length !== newData.length) {
        throw new Error("Arrays must have the same length");
    }

    const len = oldData.length;
    let mode = 2;
    let indexBytes = 4;

    if (len <= 0x100) {
        mode = 0;
        indexBytes = 1;
    } else if (len <= 0x10000) {
        mode = 1;
        indexBytes = 2;
    }

    // Pass 1: Your original fast count (keeps allocation tiny)
    let changes = 0;
    for (let i = 0; i < len; i++) {
        if (oldData[i] !== newData[i]) {
            changes++;
        }
    }

    // Allocate the exact size needed
    const delta = new Uint8Array(1 + changes * (indexBytes + 1));
    delta[0] = mode;

    let p = 1;

    // Pass 2: Use an isolated loop per mode. No switch statements, no layout errors.
    if (mode === 0) {
        for (let i = 0; i < len; i++) {
            const newVal = newData[i];
            if (oldData[i] !== newVal) {
                delta[p++] = i;
                delta[p++] = newVal;
            }
        }
    } else if (mode === 1) {
        // Fast view handles arbitrary unaligned writing perfectly
        const view = new DataView(delta.buffer);
        for (let i = 0; i < len; i++) {
            const newVal = newData[i];
            if (oldData[i] !== newVal) {
                view.setUint16(p, i, true);
                p += 2;
                delta[p++] = newVal;
            }
        }
    } else {
        const view = new DataView(delta.buffer);
        for (let i = 0; i < len; i++) {
            const newVal = newData[i];
            if (oldData[i] !== newVal) {
                view.setUint32(p, i, true);
                p += 4;
                delta[p++] = newVal;
            }
        }
    }

    return delta;
}

function applyDeltaOptimized(data, delta) {
    const result = data.slice();
    const mode = delta[0];
    const len = delta.length;
    let p = 1;

    if (mode === 0) {
        while (p < len) {
            result[delta[p++]] = delta[p++];
        }
    } else if (mode === 1) {
        const view = new DataView(delta.buffer, delta.byteOffset, delta.byteLength);
        while (p < len) {
            const index = view.getUint16(p, true);
            p += 2;
            result[index] = delta[p++];
        }
    } else if (mode === 2) {
        const view = new DataView(delta.buffer, delta.byteOffset, delta.byteLength);
        while (p < len) {
            const index = view.getUint32(p, true);
            p += 4;
            result[index] = delta[p++];
        }
    } else {
        throw new Error("Invalid delta format");
    }

    return result;
}


globalThis.createDelta = createDeltaOptimized;
globalThis.applyDelta = applyDeltaOptimized;

/*const before = new Uint8Array([
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
]);

const after = new Uint8Array([
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,
  255,255,254,1,254,1,255,255,255,255,254,192,191,84,255,255,254,1,254,1,255,255,255,255,254,192,191,84,1,255,254,1,254,
]);

console.time('delta bench optimized')
for (var i = 0; i < 10000; i++) {
    const delta = createDeltaOptimized(before, after);
    const rebuilt = applyDeltaOptimized(before, delta);
}
console.timeEnd('delta bench optimized')

console.time('delta bench')
for (var i = 0; i < 10000; i++) {
    const delta = createDelta(before, after);
    const rebuilt = applyDelta(before, delta);
}
console.timeEnd('delta bench')

const delta = createDeltaOptimized(before, after);

console.log(delta); // 1 change is about 3 bytes and goes higher as the before, after
// Uint8Array [1, 0, 0]
// index = 1 (0x0001), value = 0

const rebuilt = applyDeltaOptimized(before, delta);

console.table({
    before: before.byteLength,
    delta: delta.byteLength,
    after: after.byteLength
}); // should be the same

console.log('intergrity check:', JSON.stringify(rebuilt) == JSON.stringify(after))

*/