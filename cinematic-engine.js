
/*! cinematic-engine.js */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.CinematicEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const now = (typeof performance !== 'undefined' && performance.now)
    ? () => performance.now()
    : () => Date.now();

  const raf = (typeof requestAnimationFrame === 'function')
    ? (fn) => requestAnimationFrame(fn)
    : (fn) => setTimeout(() => fn(now()), 16);

  const caf = (typeof cancelAnimationFrame === 'function')
    ? (id) => cancelAnimationFrame(id)
    : (id) => clearTimeout(id);

  function setByPath(obj, path, value) {
    if (obj == null || !path) return;
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const k = parts[i];
      if (cur[k] == null) cur[k] = {};
      cur = cur[k];
    }
    cur[parts[parts.length - 1]] = value;
  }

  const Easing = {
    linear: t => t,
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => 1 - Math.pow(1 - t, 3),
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - Math.pow(1 - t, 4),
    easeOutBack: t => { const c1 = 1.70158, c3 = c1 + 1;
                        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
    easeOutElastic: t => t === 0 || t === 1 ? t
                      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1,
    step: t => t < 1 ? 0 : 1
  };

  const lerpNum = (a, b, t) => a + (b - a) * t;

  function hexRgb(hex) {
    if (typeof hex !== 'string' || hex[0] !== '#') return { r: 0, g: 0, b: 0 };
    let h = hex.slice(1);
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    if (h.length !== 6) return { r: 0, g: 0, b: 0 };
    const n = parseInt(h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgbHex(r, g, b) {
    return '#' + [r, g, b].map(v =>
      Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')
    ).join('');
  }
  function lerpColor(a, b, t) {
    const ca = hexRgb(a), cb = hexRgb(b);
    return rgbHex(lerpNum(ca.r, cb.r, t), lerpNum(ca.g, cb.g, t), lerpNum(ca.b, cb.b, t));
  }
  function lerpVec2(a, b, t) { return [lerpNum(a[0], b[0], t), lerpNum(a[1], b[1], t)]; }
  function slerpQuat(qa, qb, t) {
    let [ax, ay, az, aw] = qa, [bx, by, bz, bw] = qb;
    let dot = ax * bx + ay * by + az * bz + aw * bw;
    if (dot < 0) { bx = -bx; by = -by; bz = -bz; bw = -bw; dot = -dot; }
    if (dot > 0.9995) {
      const x = lerpNum(ax, bx, t), y = lerpNum(ay, by, t);
      const z = lerpNum(az, bz, t), w = lerpNum(aw, bw, t);
      const len = Math.hypot(x, y, z, w) || 1;
      return [x / len, y / len, z / len, w / len];
    }
    const theta0 = Math.acos(dot), theta = theta0 * t;
    const sin0 = Math.sin(theta0) || 1e-6;
    const s0 = Math.cos(theta) - dot * Math.sin(theta) / sin0;
    const s1 = Math.sin(theta) / sin0;
    return [ax * s0 + bx * s1, ay * s0 + by * s1, az * s0 + bz * s1, aw * s0 + bw * s1];
  }

  function defaultLerp(a, b, t) {
    if (a === b) return a;
    if (typeof a === 'number' && typeof b === 'number') return lerpNum(a, b, t);
    if (typeof a === 'boolean' || typeof b === 'boolean') return t < 0.5 ? a : b;
    if (typeof a === 'string' && typeof b === 'string' && a[0] === '#' && b[0] === '#')
      return lerpColor(a, b, t);
    if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
      const out = new Array(a.length);
      for (let i = 0; i < a.length; i++) out[i] = defaultLerp(a[i], b[i], t);
      return out;
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const out = {};
      for (const k in a) out[k] = defaultLerp(a[k], b[k], t);
      for (const k in b) if (!(k in out)) out[k] = b[k];
      return out;
    }
    return t < 0.5 ? a : b;
  }

  class CinematicEngine {
    constructor(options) {
      options = options || {};
      this.duration = options.duration != null ? options.duration : 0;
      this.loop     = !!options.loop;
      this.speed    = options.speed != null ? options.speed : 1;
      this.playhead = 0;
      this.playing  = false;
      this.targets  = options.targets || {};
      this.tracks   = [];
      this.cues     = [];
      this.adapter  = options.adapter || {};
      this._activeCues = new Map();
      this._listeners  = Object.create(null);
      this._rafId = null;
      this._lastTime = 0;
      this._headless = options.headless !== false;

      if (options.tracks) this.setTracks(options.tracks);
      if (options.cues)   this.setCues(options.cues);
      if (options.scene)  this.loadScene(options.scene);
      if (options.autoplay) this.play();
    }

    loadScene(scene) {
      if (scene.duration != null) this.duration = scene.duration;
      if (scene.loop     != null) this.loop     = !!scene.loop;
      if (scene.speed    != null) this.speed    = scene.speed;
      if (scene.targets) this.targets = Object.assign({}, this.targets, scene.targets);
      this.setTracks(scene.tracks || []);
      this.setCues(scene.cues || []);
      this.seek(0);
      this.emit('load', { scene });
      return this;
    }

    setTracks(tracks) {
      this.tracks = tracks.map(t => this._normalizeTrack(t));
      return this;
    }
    _normalizeTrack(t) {
      const keys = (t.keys || t.keyframes || [])
        .slice().sort((a, b) => a.time - b.time);
      return {
        target:  t.target,
        path:    t.path,
        type:    t.type || 'value',
        keys,
        ease:    t.ease || 'easeInOut',
        lerp:    t.lerp || null,
        set:     t.set || null,
        enabled: t.enabled !== false
      };
    }

    setCues(cues) {
      this.cues = cues.map(c => ({
        time: c.time,
        duration: c.duration || 0,
        type: c.type || 'cue',
        data: c.data != null ? c.data : c.payload,
        enabled: c.enabled !== false
      })).sort((a, b) => a.time - b.time);
      this._activeCues.clear();
      return this;
    }

    evaluateTrack(track, t) {
      const keys = track.keys;
      if (!keys.length) return undefined;
      if (t <= keys[0].time) return keys[0].value;
      const last = keys[keys.length - 1];
      if (t >= last.time) return last.value;
      for (let i = 0; i < keys.length - 1; i++) {
        const a = keys[i], b = keys[i + 1];
        if (t >= a.time && t <= b.time) {
          const span = b.time - a.time;
          if (span <= 0) return b.value;
          const u = (t - a.time) / span;
          const easeName = b.ease || a.ease || track.ease;
          const easeFn = Easing[easeName] || Easing.linear;
          const k = easeFn(u);
          const lerpFn = track.lerp || defaultLerp;
          return lerpFn(a.value, b.value, k, a, b);
        }
      }
      return last.value;
    }

    _resolveAnimTrack(track, t) {
      const keys = track.keys;
      if (!keys.length) return { name: null, startTime: 0 };
      let current = keys[0], startTime = keys[0].time;
      for (let i = 0; i < keys.length; i++) {
        if (t >= keys[i].time) { current = keys[i]; startTime = keys[i].time; }
        else break;
      }
      return { name: current.value, startTime };
    }

    _resolveSpriteFrame(sprite, animName, localElapsedMs) {
      if (!sprite || !sprite.sheet) return null;
      const anim = sprite.sheet.animations && sprite.sheet.animations[animName];
      if (!anim || !Array.isArray(anim.frames) || !anim.frames.length) return null;
      const fps = anim.fps || 8;
      let idx = Math.floor(Math.max(0, localElapsedMs) / (1000 / fps));
      if (anim.loop !== false)
        idx = ((idx % anim.frames.length) + anim.frames.length) % anim.frames.length;
      else
        idx = Math.min(idx, anim.frames.length - 1);
      return anim.frames[idx];
    }

    applyAt(t) {
      for (let i = 0; i < this.tracks.length; i++) {
        const tr = this.tracks[i];
        if (!tr.enabled || tr.type === 'anim') continue;
        const value = this.evaluateTrack(tr, t);
        const target = this._resolveTarget(tr.target);
        if (tr.set) { tr.set(target, value, tr, t); continue; }
        if (typeof this.adapter.apply === 'function') {
          this.adapter.apply(target, tr, value, t, this);
          continue;
        }
        if (tr.path) setByPath(target, tr.path, value);
      }
      for (let i = 0; i < this.tracks.length; i++) {
        const tr = this.tracks[i];
        if (!tr.enabled || tr.type !== 'anim') continue;
        const target = this._resolveTarget(tr.target);
        if (!target) continue;
        const { name, startTime } = this._resolveAnimTrack(tr, t);
        if (name != null) target.anim = name;
        target.animStartTime = startTime;
        const frame = this._resolveSpriteFrame(target, name, t - startTime);
        if (frame != null) target.frame = frame;
      }
    }

    _resolveTarget(name) {
      if (name == null) return null;
      if (typeof name === 'object') return name;
      return this.targets[name];
    }

    _tickCues(t, prevT) {
      const active = this._activeCues;
      const seen = new Set();
      for (let i = 0; i < this.cues.length; i++) {
        const c = this.cues[i];
        if (!c.enabled) continue;
        let activeNow;
        if (c.duration > 0) activeNow = t >= c.time && t < c.time + c.duration;
        else activeNow = prevT == null
          ? (t === c.time)
          : (prevT < c.time && t >= c.time) || (t === c.time);
        if (!activeNow) continue;
        seen.add(i);
        const localT = c.duration > 0 ? (t - c.time) / c.duration : 0;
        const payload = { cue: c, localT, time: t, engine: this };
        if (!active.has(i)) { active.set(i, c); this._fireCue(c, 'enter', payload); }
        else this._fireCue(c, 'update', payload);
      }
      for (const [i, c] of active) {
        if (!seen.has(i)) {
          active.delete(i);
          this._fireCue(c, 'exit', { cue: c, localT: 1, time: t, engine: this });
        }
      }
    }

    _fireCue(c, phase, payload) {
      if (typeof this.adapter.onCue === 'function') {
        try { this.adapter.onCue(c, phase, payload, this); }
        catch (e) { console.error('[CinematicEngine] adapter.onCue', e); }
      }
      this.emit('cue', Object.assign({ phase }, payload));
      this.emit('cue:' + c.type, Object.assign({ phase }, payload));
      this.emit('cue:' + phase, payload);
      this.emit('cue:' + c.type + ':' + phase, payload);
    }

    play() {
      if (this.playing) return this;
      this.playing = true;
      this._lastTime = now();
      this.emit('play', { playhead: this.playhead });
      if (!this._headless) this._startLoop();
      return this;
    }
    pause() {
      if (!this.playing) return this;
      this.playing = false;
      this.emit('pause', { playhead: this.playhead });
      return this;
    }
    toggle() { return this.playing ? this.pause() : this.play(); }
    stop() {
      this.playing = false;
      this._activeCues.clear();
      this.seek(0);
      this.emit('stop', { playhead: 0 });
      return this;
    }

    seek(t) {
      const prev = this.playhead;
      this.playhead = Math.max(0, Math.min(this.duration, Number(t) || 0));
      this._activeCues.clear();
      this.applyAt(this.playhead);
      this._renderFrame();
      this.emit('seek', { playhead: this.playhead, prev, duration: this.duration });
      return this;
    }

    setSpeed(s) { this.speed = s > 0 ? s : 1; this.emit('speed', { speed: this.speed }); return this; }
    setLoop(l)  { this.loop = !!l; this.emit('loopchange', { loop: this.loop }); return this; }
    update(dt)  { this._advance(dt); return this; }

    refreshCues() {
      this._activeCues.clear();
      this._tickCues(this.playhead, -1e18);
      this._renderFrame();
      return this;
    }
    forceRender() { this._renderFrame(); return this; }

    on(evt, fn) { (this._listeners[evt] || (this._listeners[evt] = [])).push(fn); return this; }
    off(evt, fn) {
      const list = this._listeners[evt];
      if (!list) return this;
      if (!fn) { delete this._listeners[evt]; return this; }
      const i = list.indexOf(fn);
      if (i >= 0) list.splice(i, 1);
      return this;
    }
    emit(evt, data) {
      const list = this._listeners[evt];
      if (!list) return;
      for (let i = 0; i < list.length; i++) {
        try { list[i].call(this, data, this); }
        catch (e) { console.error('[CinematicEngine] listener "' + evt + '"', e); }
      }
    }

    _renderFrame() {
      if (typeof this.adapter.render === 'function') {
        try { this.adapter.render(this.playhead, this); }
        catch (e) { console.error('[CinematicEngine] adapter.render', e); }
      }
    }

    _startLoop() {
      if (this._rafId != null) return;
      const tick = () => {
        if (!this.playing) { this._rafId = null; return; }
        const t = now();
        let dt = t - this._lastTime;
        this._lastTime = t;
        if (dt > 250) dt = 250;
        this._advance(dt);
        this._rafId = raf(tick);
      };
      this._rafId = raf(tick);
    }

    _advance(dt) {
      const prev = this.playhead;
      let t = this.playhead + dt * this.speed;
      const dur = this.duration;
      if (dur > 0 && t >= dur) {
        if (this.loop) {
          t = t % dur;
          this.playhead = t;
          this.applyAt(t); this._tickCues(t, prev); this._renderFrame();
          this.emit('loop', { playhead: t });
          this.emit('tick', { playhead: t, duration: dur, dt });
          return;
        }
        t = dur;
        this.playhead = t;
        this.applyAt(t); this._tickCues(t, prev); this._renderFrame();
        this.playing = false;
        this.emit('tick', { playhead: t, duration: dur, dt });
        this.emit('ended', { playhead: t });
        this.emit('pause', { playhead: t });
        return;
      }
      this.playhead = t;
      this.applyAt(t); this._tickCues(t, prev); this._renderFrame();
      this.emit('tick', { playhead: t, duration: dur, dt });
    }
  }

  CinematicEngine.Easing      = Easing;
  CinematicEngine.setByPath   = setByPath;
  CinematicEngine.defaultLerp = defaultLerp;
  CinematicEngine.lerpNum     = lerpNum;
  CinematicEngine.lerpColor   = lerpColor;
  CinematicEngine.lerpVec2    = lerpVec2;
  CinematicEngine.slerpQuat   = slerpQuat;

  return CinematicEngine;
});