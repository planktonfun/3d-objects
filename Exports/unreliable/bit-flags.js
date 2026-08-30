//---------------------------------------------------
// Toggle, Activate, Remove Flags
//---------------------------------------------------
class BitFlags {
    constructor(value = 0) {
        this.value = value;
    }

    has(flag) {
        return (this.value & flag) != 0;
    }

    activate(flag) {
        this.value |= flag;
        return this;
    }

    deactivate(flag) {
        this.value &= ~flag;
        return this;
    }

    toggle(flag) {
        this.value ^= flag;
        return this;
    }

    reset() {
        this.value = 0;
        return this;
    }

    set(flag, value) {
        if (value) {
            this.activate(flag);
        } else {
            this.deactivate(flag);
        }

        return this;
    }
}

/*

// Usage
const DIRTY_SKILL_1 = 1 << 0;
const DIRTY_SKILL_2 = 1 << 1;
const DIRTY_SKILL_3 = 1 << 2;
const DIRTY_SKILL_4 = 1 << 3; // up to 32 for 32 bits

let a = new BitFlags();
a.set(DIRTY_SKILL_4, true);
a.activate(DIRTY_SKILL_2);

console.log(a.value); // Output: 10
console.log(a.has(DIRTY_SKILL_4)); // Output: true
console.log(a.has(DIRTY_SKILL_2)); // Output: true
console.log(a.has(DIRTY_SKILL_1)); // Output: false

*/