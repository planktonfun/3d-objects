// Use binary Data and SOA to trivialize serialization/deserialization
class Pool {
    constructor(maxCount, fields) {
        this.maxCount = maxCount;
        this.count = 0;
        this.nextFree = 0;

        this.active = new Uint8Array(maxCount);
        this.fieldNames = Object.keys(fields);

        this.prevActive = new Uint8Array(maxCount);

        this.freeSlots = Array.from({ length: this.maxCount }, (_, i) => i).reverse();

        // Ensure 'active' is always the first storage element
        this.storage = [this.active];
        for (const name of this.fieldNames) {
            this[name] = new fields[name](maxCount);
            this.storage.push(this[name]);
        }
    }

    commit() {
        this.prevActive.set(this.active);
    }

    reset(id) {
        this.fieldNames.forEach(o=>this[o][id] = 0);
    }

    byteSize(offset = 0) {
        let current = offset;
        for (const v of this.storage) {
            current = this._align(current) + v.byteLength;
        }
        return current - offset; // Return only the size this pool needs
    }

    _align(offset) {
        return (offset + 7) & ~7;
    }

    // Pass the current global offset so we can calculate padding accurately
    getEndOffset(startOffset) {
        let offset = startOffset;
        for (const v of this.storage) {
            offset = this._align(offset) + v.byteLength;
        }
        return offset;
    }

    write(view, offset) {
        const dest = new Uint8Array(view.buffer);
        for (const v of this.storage) {
            offset = this._align(offset);
            const source = new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
            dest.set(source, offset);
            offset += v.byteLength;
        }
        return offset;
    }

    read(view, offset) {
        const src = new Uint8Array(view.buffer);
        for (const v of this.storage) {
            offset = this._align(offset);
            const target = new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
            target.set(src.subarray(offset, offset + v.byteLength));
            offset += v.byteLength;
        }
        this.count = this.active.reduce((a, b) => a + b, 0);
        return offset;
    }

    activate(i) {
        if (this.active[i]) return;
        this.active[i] = 1;
        this.count++;
    }

    /*deactivate(i) {
        if (!this.active[i]) return;
        this.active[i] = 0;
        this.count--;
    }

    alloc() {
        if (this.count >= this.maxCount) return -1;

        // Find ALL free slots and sort them deterministically
        const freeSlots = [];
        for (let i = 0; i < this.maxCount; i++) {
            if (!this.active[i]) freeSlots.push(i);
        }

        // Sort by some deterministic criteria (just by index is fine)
        freeSlots.sort((a, b) => a - b);

        // Always allocate the smallest free slot
        const slot = freeSlots[0];
        this.activate(slot);
        return slot;
    }*/

    // Optimized alloc (havent test throughly use old one if it doesnt work)
    alloc() {
        if (this.freeSlots.length === 0) return -1;

        // Pop the smallest available index (O(1))
        const slot = this.freeSlots.pop();
        this.activate(slot);
        return slot;
    }

    deactivate(slot) {
        // When deallocating, push back into freeSlots
        this.active[slot] = 0;
        this.count--;

        // To keep it sorted/deterministic, insert in binary order or binary insert,
        // or just maintain a Min-Heap / BitSet if high frequency churn occurs.
        this.freeSlots.push(slot);
    }
}

class PoolManager {
    constructor() {
        this.pools = [];
    }

    add(pool) {
        this.pools.push(pool);
        return pool;
    }

    byteSize() {
        let offset = 0;
        for (const p of this.pools) {
            // Predict exactly where the next pool will end
            offset = p.getEndOffset(offset);
        }
        return offset;
    }

    commit() {
        for (const p of this.pools) {
            p.commit();
        }
    }

    serialize() {
        const size = this.byteSize();
        const buffer = new ArrayBuffer(size);
        const view = new DataView(buffer);

        let offset = 0;
        for (const p of this.pools) {
            offset = p.write(view, offset);
        }

        return buffer;
    }

    deserialize(buffer) {
        const view = new DataView(buffer);
        let offset = 0;
        for (const p of this.pools) {
            offset = p.read(view, offset);
        }
    }
}
/* SAVE / LOAD */
function bufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToBuffer(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}


function saveGame() {
    // const buffer = pools.serialize();
    localStorage.setItem(
        "save",
        bufferToBase64(pools.serialize())
    );
    console.log('game saved')
}

function loadGame() {
    const base64String = localStorage.getItem("save");
    if (!base64String) return;
    pools.deserialize(base64ToBuffer(base64String));
    console.log('game loaded')
}

globalThis.Pool = Pool;
globalThis.PoolManager = PoolManager;

/* FOR RENDERING */
// One factory for all three query types
function createQueriesFor(pool) {
    return {
        all:     () => getActive(pool),
        entered: () => getEntered(pool),
        exited:  () => getExited(pool),
        pool:  pool
    };
}

// Helper functions (extracted so they're easier to optimize later)
function getActive(pool) {
    const result = [];
    for (let i = 0; i < pool.maxCount; i++) {
        if (pool.active[i]) result.push(i);
    }
    return result;
}

function getEntered(pool) {
    const result = [];
    for (let i = 0; i < pool.maxCount; i++) {
        if (pool.active[i] && !pool.prevActive[i]) result.push(i);
    }
    return result;
}

function getExited(pool) {
    const result = [];
    for (let i = 0; i < pool.maxCount; i++) {
        if (!pool.active[i] && pool.prevActive[i]) result.push(i);
    }
    return result;
}

globalThis.createQueriesFor = createQueriesFor;


function seedRandom(seed) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}
function getMaxUserCount(bufferByteLength, mbps = 5_000_000, hz=60) {
    const budget = mbps / hz; // 83333.33

    // Quadratic coefficients: au^2 + bu + c = 0
    const a = 8 * bufferByteLength;
    const b = 560 - a;
    const c = -(budget + 560);

    // Apply quadratic formula: (-b + sqrt(b^2 - 4ac)) / 2a
    const discriminant = (b * b) - (4 * a * c);

    if (discriminant < 0) return 0; // No valid user count possible

    const maxUsers = (-b + Math.sqrt(discriminant)) / (2 * a);

    // Use Math.floor because userCount must be a whole number
    return Math.floor(maxUsers);
}

globalThis.seedRandom = seedRandom;
globalThis.lerp = lerp;
globalThis.getMaxUserCount = getMaxUserCount;

// testing
if(window?.process?.argv[2]) {

    require('./binary-delta-fixedsize.js');

    const pools = new PoolManager();
    const userCount = 13; // can handle 50k users in less than a milisecond

    const environment = pools.add(new Pool(1, {
        TIMESTAMP: Float32Array,
    }));

    const player = pools.add(new Pool(userCount, {
        UID: Float32Array,
        HP: Uint16Array,
        MP: Uint16Array,
        LVL: Uint16Array,
        EXP: Uint16Array,
        STR: Uint8Array,
        AGI: Uint8Array,
        INT: Uint8Array,
        VIT: Uint8Array,
        LK: Uint8Array,
        POS_X: Uint16Array,
        POS_Y: Uint16Array,
        POS_Z: Uint16Array,
        YAW: Uint16Array,
        EQUIP_1: Uint8Array,
        EQUIP_2: Uint8Array,
        EQUIP_3: Uint8Array,
        EQUIP_4: Uint8Array,
        EQUIP_5: Uint8Array,
        INV_1: Uint8Array,
        INV_2: Uint8Array,
        INV_3: Uint8Array,
        INV_4: Uint8Array,
        INV_5: Uint8Array,
        INV_6: Uint8Array,
        INV_7: Uint8Array,
        INV_8: Uint8Array,
        INV_9: Uint8Array,
        INV_10: Uint8Array,
        INV_11: Uint8Array,
        INV_12: Uint8Array,
        MAP: Uint8Array,
        SUBZONE: Uint8Array,
        FLAG_1: Uint8Array,
        FLAG_2: Uint8Array,
        FLAG_3: Uint8Array,
        FLAG_4: Uint8Array,
    }));


    const t0 = performance.now();
    // recieve client intents
    // game updates
    const tid = environment.alloc();
    tid.TIMESTAMP = Date.now();

    for (let i = 0; i < player.maxCount; i++) {
        const id = player.alloc();
        player.POS_X[id] = Math.floor(Math.random()*255*255);
        player.POS_Y[id] = Math.floor(Math.random()*255*255);
        player.POS_Z[id] = Math.floor(Math.random()*255*255);
    }

    // bitpack and then send
    pools.serialize();
    const t1 = performance.now();

    const previous = new Uint8Array(pools.serialize());
    for (let i = 0; i < player.maxCount; i++) {
        player.POS_X[i] = 5000;
    }

    const t2 = performance.now();
    const after = new Uint8Array(pools.serialize());
    const delta = createDelta(previous, after);
    const t3 = performance.now();

    function getMaxUserCount(bufferByteLength) {
        const budget = 5_000_000 / 60; // 83333.33

        // Quadratic coefficients: au^2 + bu + c = 0
        const a = 8 * bufferByteLength;
        const b = 560 - a;
        const c = -(budget + 560);

        // Apply quadratic formula: (-b + sqrt(b^2 - 4ac)) / 2a
        const discriminant = (b * b) - (4 * a * c);

        if (discriminant < 0) return 0; // No valid user count possible

        const maxUsers = (-b + Math.sqrt(discriminant)) / (2 * a);

        // Use Math.floor because userCount must be a whole number
        return Math.floor(maxUsers);
    }

    const budget = (5_000_000/60);
    const budgetPass = previous.byteLength*8 <= ((budget/(userCount-1))-560);

    console.table({
        userCount,
        "Soa architecture bits": previous.byteLength*8,
        "Speed soa in ms": (t1-t0).toFixed(3)*1,
        "Delta bits": delta.byteLength*8,
        "Speed delta in ms": (t3-t2).toFixed(3)*1,
        "Max user count": getMaxUserCount(previous.byteLength/userCount),
        "Passing": budgetPass,
    })

    console.log(`formula how many players you can support given upload rate:`);
    console.log(`e.g. 5 mbps, game tick 60 hz minus 560 bits network header`);

    console.table([
        {players: 2, maxBitsPerTick: Math.floor(budget/1)-560},
        {players: 4, maxBitsPerTick: Math.floor(budget/3)-560},
        {players: 8, maxBitsPerTick: Math.floor(budget/7)-560},
        {players: 10, maxBitsPerTick: Math.floor(budget/9)-560},
        {players: 20, maxBitsPerTick: Math.floor(budget/19)-560},
        {players: 40, maxBitsPerTick: Math.floor(budget/39)-560},
        {players: 80, maxBitsPerTick: Math.floor(budget/79)-560},
        {players: 160, maxBitsPerTick: Math.floor(budget/149)-560},
    ]);
}