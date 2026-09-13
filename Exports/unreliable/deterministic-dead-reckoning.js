class TimelineAction {
    constructor(startRatio, endRatio, behaviorFunction) {
        this.startRatio = startRatio;
        this.endRatio = endRatio;
        this.evaluate = behaviorFunction;
    }
}

class SmartDeterministicObject {
    constructor(id, type, config) {
        this.id = id;
        this.type = type;
        this.spawnTime = config.spawnTime;
        this.baseParams = config.baseParams;
        this.loopDuration = config.loopDuration;
        this.timeline = config.timeline;
        this.serverOverride = null;
    }

    calculateState(currentTimeMs) {
        if (this.serverOverride) {
            if (this.serverOverride.expiresAt && currentTimeMs > this.serverOverride.expiresAt) {
                this.serverOverride = null;
            } else {
                return this.serverOverride.state;
            }
        }

        const elapsed = currentTimeMs - this.spawnTime;
        const cycleTime = elapsed % this.loopDuration;
        const normalizedTime = cycleTime / this.loopDuration;

        const activeAction = this.timeline.find(action =>
            normalizedTime >= action.startRatio && normalizedTime < action.endRatio
        );

        if (!activeAction) {
            return { status: "Idle", x: this.baseParams.startX, y: this.baseParams.startY, color: "#8b5cf6" };
        }

        const actionProgress = (normalizedTime - activeAction.startRatio) / (activeAction.endRatio - activeAction.startRatio);
        return activeAction.evaluate(actionProgress, this.baseParams);
    }

    applyInterrupt(payload) {
        this.serverOverride = payload;
    }
}

// Helper to build TimelineAction from a plain config
const Easing = {
    linear: t => t,
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    // add more as needed: easeInCubic, easeOutCubic, etc.
};

function buildTweenAction(config) {
    const { start, end, from = {}, to = {}, ease = 'linear', color, label } = config;
    const easeFn = Easing[ease] || Easing.linear;

    return new TimelineAction(start, end, (progress, params) => {
        // Apply easing to progress
        const t = easeFn(progress); // 0 → 1

        // Start with base params
        const result = { ...params };

        // Interpolate all numeric properties present in both 'from' and 'to'
        for (const key in from) {
            if (to[key] !== undefined && typeof from[key] === 'number' && typeof to[key] === 'number') {
                result[key] = from[key] + (to[key] - from[key]) * t;
            } else {
                result[key] = from[key]; // fallback
            }
        }
        // Also include any extra properties from 'to' that aren't in 'from'
        for (const key in to) {
            if (!(key in from)) {
                result[key] = to[key];
            }
        }

        // Ensure x, y are present (fallback to startX/startY)
        const x = result.x ?? params.startX;
        const y = result.y ?? params.startY;
        const status = label || 'Moving';
        const c = color || '#888';

        // Return state; the renderer can use 'explosion', 'size', etc.
        return { status, x, y, color: c, ...result };
    });
}

function buildTimelineFromDurations(segments) {
    // First pass: compute total duration
    const totalDuration = segments.reduce((sum, seg) => sum + (seg.durationMs || 0), 0);
    if (totalDuration === 0) {
        console.warn('Total duration is zero; returning empty timeline.');
        return [];
    }

    let currentStart = 0;
    const result = [];
    for (const seg of segments) {
        const duration = seg.durationMs || 0;
        if (duration === 0) continue;
        const start = currentStart / totalDuration;
        const end = (currentStart + duration) / totalDuration;
        const { durationMs, ...rest } = seg;
        result.push({ start, end, ...rest });
        currentStart += duration;
    }
    // No need to add idle; the timeline will loop perfectly.
    return result.map(buildTweenAction)
}

function createEntityWithSchedule(id, type, config, scheduleSegments) {
    const actions = buildTimelineFromDurations(scheduleSegments);
    const totalDuration = scheduleSegments.reduce((sum, s) => sum + (s.durationMs || 0), 0);
    return new SmartDeterministicObject(id, type, {
        spawnTime: config.spawnTime,
        loopDuration: totalDuration || 1000, // fallback
        baseParams: config.baseParams,
        timeline: actions
    });
}

/*
//Usage:

 const npcSchedule = [
    {
        durationMs: 4000,
        from: { x: 0, y: 0 },
        to:   { x: 150, y: 0 },
        ease: 'easeInOut',
        color: '#3b82f6',
        label: 'Walking to Shop'
    },
    {
        durationMs: 4000,
        from: { x: 150, y: 0, bounce: 0 },
        to:   { x: 150, y: 0, bounce: 10 },
        ease: 'easeInOut',
        color: '#ef4444',
        label: 'Working at Blacksmith'
    },
    {
        durationMs: 2000,
        from: { x: 150, y: 0 },
        to:   { x: 0, y: 0 },
        ease: 'easeInOut',
        color: '#10b981',
        label: 'Returning Home'
    },
    {
        durationMs: 2000,
        from: { x: 0, y: 0 },
        to:   { x: 0, y: 0 },
        ease: 'linear',
        color: '#10b981',
        label: 'Sleeping'
    }
];

const monsterPatrol = [
    {
        durationMs: 3000,
        from: { x: 50, y: 0 },
        to:   { x: 300, y: 0 },
        ease: 'linear',
        color: '#f59e0b',
        label: 'Patrol East'
    },
    {
        durationMs: 3000,
        from: { x: 300, y: 0 },
        to:   { x: 50, y: 0 },
        ease: 'linear',
        color: '#f59e0b',
        label: 'Patrol West'
    }
];

const customSpellLoop = [
    {
        durationMs: 3500,
        from: { x: 0, y: 0, size: 12, explosion: 0 },
        to:   { x: 0, y: 0, size: 22, explosion: 0.3 },
        ease: 'easeInOut',
        color: '#ec4899',
        label: 'Chanting Ritual'
    },
    {
        durationMs: 1500,
        from: { x: 0, y: 0, size: 22, explosion: 0.3 },
        to:   { x: 0, y: 0, size: 60, explosion: 1.0 },
        ease: 'easeOut',
        color: '#ffffff',
        label: 'Casting Nova Explosion',
    }
];

const entities = [
    createEntityWithSchedule("npc_1", "NPC Schedule", { spawnTime: startTime, baseParams: { startX: 100, startY: 100 } }, npcSchedule),
    createEntityWithSchedule("npc_2", "NPC Schedule", { spawnTime: startTime+1000, baseParams: { startX: 100, startY: 150 } }, npcSchedule),
    createEntityWithSchedule("mob_1", "Monster Mapped", { spawnTime: startTime, baseParams: { startX: 100, startY: 200 } }, monsterPatrol),
    createEntityWithSchedule("boss_1", "Custom Spell Loop", { spawnTime: startTime, baseParams: { startX: 250, startY: 300 } }, customSpellLoop),
];*/