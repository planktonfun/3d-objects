function DeltaTimeAccumulator(hz, logicCallback) {
    return {
        lastTime: performance.now(),
        acc: 0,
        hz: hz,
        MAX_DELTA: 100,
        delta: 0,
        update: function() {
            const now = performance.now();
            this.delta = now - this.lastTime;
            this.lastTime = now;

            // comment this out if you want the loop to accummulate even window is not active
            // ms, prevents spiral of death
            // if (this.delta > this.MAX_DELTA) {
            //     // console.warn('Game is slowing down');
            //     this.delta = this.MAX_DELTA;
            // }

            // Accumulate actual passing time
            this.acc += this.delta;

            this.execute();
        },
        execute: function() {
            while (this.acc >= this.hz) {
                logicCallback();
                this.acc -= this.hz;
            }
        }
    }
};

/*
// Usage
const MASTER_LOOP = new DeltaTimeAccumulator(MASTER_SAMPLING_RATE, ()=>{
    masterTickCounter++;
});

// High-Frequency Input Sampler (60Hz Loop)
setInterval(() => {
    MASTER_LOOP.update();
}, 1000/60);*/