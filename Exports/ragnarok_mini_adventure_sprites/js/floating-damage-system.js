
// ================================================================
//  PLUG & PLAY FLOATING DAMAGE SYSTEM (HIGH PERFORMANCE / 120 FPS)
//  - Offscreen sprite texture caching (0 runtime text re-rasterization)
//  - Offscreen cached crit balloons (0 gradient/blur allocation per frame)
//  - Viewport culling (off-screen combat numbers skipped automatically)
//  - Single-pass in-place compaction (0 GC / 0 array splice lag)
//  - Object pool + Z-order (newest on top)
//  - Heal: green, vertical only
//  - POP / HOLD / FLOAT are three INDEPENDENT stages:
//      • POP   — quick big -> normal pop, its own popDuration.
//      • HOLD  — frozen in place for holdDuration (default 1.8s). Size
//                stays at finalScale. NOT tied to popDuration.
//      • FLOAT — rises and fades for duration ms. During this stage the
//                number continues to gradually shrink from finalScale
//                down to floatShrink (default 0.7) — a second, slow
//                shrink layered on top of the pop.
//  - LATEST WINS: only the SINGLE newest floater forces hiding.
// ================================================================

// ---- Utility ----
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ================================================================
//  TEXT MEASUREMENT (spawn-time only)
// ================================================================
const fdsMeasureCanvas = document.createElement('canvas');
const fdsMeasureCtx = fdsMeasureCanvas.getContext('2d');

function measureFloaterTextWidth(text, fontSize, renderScale) {
  const fs = Math.max(8, Math.round(fontSize * clamp(Number(renderScale) || 1, 0.25, 2)));
  fdsMeasureCtx.font = `400 ${fs}px "Press Start 2P", monospace`;
  const w = fdsMeasureCtx.measureText(text).width;
  return w > 0 ? w : fs * text.length * 0.6;
}

// ================================================================
//  SPRITE & BALLOON TEXTURE CACHES
// ================================================================
const fdsSpriteCache = new Map();
const MAX_FDS_SPRITE_CACHE = 300;
const fdsCritBalloonCache = new Map();

function getFloaterSprite(
  text,
  type,
  fontSize,
  renderScale,
  textColor,
  outlineColor,
  shadowColor,
  isCrit,
  isSkillTotal,
  isHeal,
  isMiss
) {
  const fs = Math.max(8, Math.round(fontSize * clamp(Number(renderScale) || 1, 0.25, 2)));
  const key = `${type}|${text}|${fs}|${textColor}|${outlineColor}|${shadowColor}`;
  let cached = fdsSpriteCache.get(key);
  if (cached) return cached;

  const offCanvas = document.createElement('canvas');
  const offCtx = offCanvas.getContext('2d');

  const fontFamily = '"Press Start 2P", monospace';
  const fontStr = `400 ${fs}px ${fontFamily}`;

  offCtx.font = fontStr;
  const metrics = offCtx.measureText(text);
  const textW = Math.ceil(metrics.width) || Math.ceil(fs * text.length * 0.6);
  const padX = Math.ceil(fs * 0.9) + 28;
  const padY = Math.ceil(fs * 0.9) + 28;
  const cw = textW + padX * 2;
  const ch = fs * 2 + padY * 2;

  offCanvas.width = cw;
  offCanvas.height = ch;

  offCtx.font = fontStr;
  offCtx.textAlign = 'center';
  offCtx.textBaseline = 'middle';
  const cx = cw / 2;
  const cy = ch / 2;

  if (isMiss) {
    offCtx.lineWidth = 2.5;
    offCtx.strokeStyle = '#0a0a12';
    offCtx.lineJoin = 'round';
    offCtx.strokeText(text, cx, cy);
    offCtx.shadowColor = 'rgba(150, 150, 180, 0.10)';
    offCtx.shadowBlur = 10;
    offCtx.fillStyle = '#9999BB';
    offCtx.fillText(text, cx, cy);
  } else {
    const lineW = isCrit || isSkillTotal ? 3 : 2;
    offCtx.lineWidth = lineW;
    offCtx.strokeStyle = outlineColor || '#000000';
    offCtx.lineJoin = 'round';
    offCtx.lineCap = 'round';
    offCtx.shadowColor = 'rgba(0,0,0,0)';
    offCtx.strokeText(text, cx, cy);

    offCtx.shadowColor = shadowColor || 'rgba(0,0,0,0)';
    offCtx.shadowBlur = isCrit ? 20 : isSkillTotal || isHeal ? 10 : 10;
    offCtx.shadowOffsetY = isCrit || isSkillTotal || isHeal ? 0 : 1;
    offCtx.fillStyle = textColor;
    offCtx.fillText(text, cx, cy);

    if (isCrit || isSkillTotal || isHeal) {
      offCtx.shadowColor = isHeal ? 'rgba(102, 255, 102, 0.15)' : 'rgba(255, 215, 0, 0.15)';
      offCtx.shadowBlur = 30;
      offCtx.shadowOffsetY = 0;
      offCtx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      offCtx.fillText(text, cx - 1, cy - 1);
    }
  }

  cached = { canvas: offCanvas, width: cw, height: ch };
  if (fdsSpriteCache.size >= MAX_FDS_SPRITE_CACHE) {
    const iter = fdsSpriteCache.keys();
    for (let i = 0; i < 60; i++) {
      const next = iter.next();
      if (next.done) break;
      fdsSpriteCache.delete(next.value);
    }
  }
  fdsSpriteCache.set(key, cached);
  return cached;
}

function getCritBalloonSprite(baseFs) {
  const fs = Math.max(8, Math.round(baseFs));
  const key = `crit_balloon_${fs}`;
  let cached = fdsCritBalloonCache.get(key);
  if (cached) return cached;

  const offCanvas = document.createElement('canvas');
  const offCtx = offCanvas.getContext('2d');

  const bw = fs * 1.6;
  const bh = fs * 1.4;
  const outerR = bw * 0.55;
  const innerR = bw * 0.35;
  const pad = Math.ceil(outerR * 0.5) + 24;
  const cw = Math.ceil((outerR + pad) * 2);
  const ch = Math.ceil((outerR + pad) * 2);

  offCanvas.width = cw;
  offCanvas.height = ch;

  offCtx.translate(cw / 2, ch / 2 - 2);

  const glow = offCtx.createRadialGradient(0, 0, 0, 0, 0, bw * 0.9);
  glow.addColorStop(0, 'rgba(255, 60, 60, 0.20)');
  glow.addColorStop(1, 'rgba(255, 0, 0, 0)');
  offCtx.fillStyle = glow;
  offCtx.beginPath();
  offCtx.arc(0, 0, bw * 0.9, 0, Math.PI * 2);
  offCtx.fill();

  const spikes = 14;
  offCtx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    offCtx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
  }
  offCtx.closePath();

  const grad = offCtx.createRadialGradient(0, -bh * 0.2, 0, 0, 0, outerR);
  grad.addColorStop(0, '#FF4444');
  grad.addColorStop(0.5, '#DD2222');
  grad.addColorStop(1, '#AA1111');
  offCtx.fillStyle = grad;
  offCtx.shadowColor = 'rgba(255, 50, 50, 0.3)';
  offCtx.shadowBlur = 20;
  offCtx.fill();
  offCtx.shadowBlur = 0;
  offCtx.strokeStyle = '#881111';
  offCtx.lineWidth = 2.5;
  offCtx.stroke();

  offCtx.strokeStyle = 'rgba(255, 200, 200, 0.12)';
  offCtx.lineWidth = 2;
  offCtx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? innerR * 1.1 : innerR * 0.85;
    offCtx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
  }
  offCtx.closePath();
  offCtx.stroke();

  cached = { canvas: offCanvas, width: cw, height: ch };
  if (fdsCritBalloonCache.size > 20) fdsCritBalloonCache.clear();
  fdsCritBalloonCache.set(key, cached);
  return cached;
}

function evaluateFdsEasing(t, type) {
  t = clamp(t, 0, 1);
  switch (type) {
    case 'linear':
      return t;
    case 'quadIn':
      return t * t;
    case 'cubicIn':
      return t * t * t;
    case 'quadInOut':
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    case 'cubicInOut':
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    case 'sineIn':
      return 1 - Math.cos((t * Math.PI) / 2);
    case 'sineInOut':
      return -(Math.cos(Math.PI * t) - 1) / 2;
    case 'quadOut':
      return 1 - (1 - t) * (1 - t);
    case 'sineOut':
      return Math.sin((t * Math.PI) / 2);
    case 'backOut': {
      const s = 1.70158;
      const t1 = t - 1;
      return t1 * t1 * ((s + 1) * t1 + s) + 1;
    }
    case 'bounceOut': {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (t < 1 / d1) {
        return n1 * t * t;
      } else if (t < 2 / d1) {
        const t2 = t - 1.5 / d1;
        return n1 * t2 * t2 + 0.75;
      } else if (t < 2.5 / d1) {
        const t3 = t - 2.25 / d1;
        return n1 * t3 * t3 + 0.9375;
      } else {
        const t4 = t - 2.625 / d1;
        return n1 * t4 * t4 + 0.984375;
      }
    }
    case 'elasticOut': {
      if (t === 0) return 0;
      if (t === 1) return 1;
      return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
    }
    case 'cubicOut':
    default:
      return 1 - Math.pow(1 - t, 3);
  }
}

// ================================================================
//  FLOATING DAMAGE CLASS
// ================================================================
class FloatingDamage {
  constructor() {
    this.alive = false;
    this.originX = 0;
    this.originY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.x = 0;
    this.y = 0;
    this.value = 0;
    this.type = 'normal';
    this.life = 0;
    this.vy = 0;
    this.vx = 0;
    this.dir = 1;
    this.gravity = 0.4;
    this.opacity = 1;
    this.duration = 1800;
    this.fadeStart = 0.7;
    this.isCrit = false;
    this.isMiss = false;
    this.isMulti = false;
    this.isSkillHit = false;
    this.isSkillTotal = false;
    this.isHeal = false;
    this.critBalloonScale = 0;
    this.fontSize = 44;
    this.renderScale = 1;
    this.textColor = '#FFFFFF';
    this.outlineColor = '#000000';
    this.shadowColor = 'rgba(255,255,255,0.06)';
    this.flinchOffset = 0;
    this.missSlideX = 0;
    this.missSlideDone = false;
    this.drawFn = null;

    this.textW = 44;
    this.textH = 44;
    this.renderVisible = true;

    // ---- THREE INDEPENDENT STAGES ----
    // POP   — quick big -> normal pop; its own popDuration.
    this.popScale = 1.0;
    this.popElapsed = 0;
    this.popDuration = 300;
    this.initialScale = 1.6;
    this.finalScale = 1.0;
    this.easing = 'cubicOut';

    // HOLD  — frozen in place; independent of popDuration.
    this.holdDuration = 1800;
    this.motionLife = 0;

    // FLOAT — gradual secondary shrink layered on top of the pop.
    //         Combined render scale = popScale * floatScale.
    this.floatScale = 1;
    this.floatShrink = 0.7; // final size multiplier at end of float
  }

  init(x, y, value, type = 'normal', options = {}) {
    this.alive = true;
    this.originX = x;
    this.originY = y;
    this.offsetX = options.xOffset !== undefined ? options.xOffset : 0;
    this.offsetY = options.yOffset !== undefined ? options.yOffset : 0;
    this.offsetY = options.yOffset !== undefined ? options.yOffset : 0;
    this.x = x + this.offsetX;
    this.y = y + this.offsetY;
    this.value = value;
    this.type = type;
    this.life = 0;
    this.motionLife = 0;
    this.opacity = 1;
    this.renderVisible = true;
    this.missSlideX = 0;
    this.missSlideDone = false;
    this.critBalloonScale = 0;
    this.isSkillHit = false;
    this.isSkillTotal = false;
    this.isHeal = false;

    if (options.renderScale !== undefined && Number.isFinite(Number(options.renderScale))) {
      this.renderScale = clamp(Number(options.renderScale), 0.25, 2);
    }

    this.vy = options.vy !== undefined ? options.vy : -7.2;
    this.vx = options.vx !== undefined ? options.vx : 4.5;
    this.gravity = options.gravity !== undefined ? options.gravity : 0.4;
    this.duration = options.duration !== undefined ? options.duration : 1800;
    this.fadeStart = options.fadeStart !== undefined ? options.fadeStart : 0.7;

    if (Number.isFinite(options.dir)) {
      this.dir = options.dir < 0 ? -1 : 1;
    } else {
      this.dir = this.vx < 0 ? -1 : 1;
    }

    this.isCrit = type === 'critical';
    this.isMiss = type === 'miss';
    this.isMulti = type === 'multi';
    this.isSkillHit = type === 'skill_hit';
    this.isSkillTotal = type === 'skill_total';
    this.isHeal = type === 'heal';

    if (this.isHeal) this.vx = 0;

    if (this.isCrit) {
      this.textColor = '#FFD700';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(255, 215, 0, 0.25)';
      this.fontSize = 56;
      this.flinchOffset = 0;
    } else if (this.isMiss) {
      this.textColor = '#9999BB';
      this.outlineColor = '#1a1a2a';
      this.shadowColor = 'rgba(150, 150, 180, 0.05)';
      this.fontSize = 36;
    } else if (this.isMulti) {
      this.textColor = '#FFFFFF';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(255, 255, 255, 0.08)';
      this.fontSize = 34;
    } else if (this.isSkillHit) {
      this.textColor = '#FFFFFF';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(255, 255, 255, 0.06)';
      this.fontSize = 30;
    } else if (this.isSkillTotal) {
      this.textColor = '#FFD700';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(255, 215, 0, 0.20)';
      this.fontSize = 52;
      this.flinchOffset = 0;
    } else if (this.isHeal) {
      this.textColor = '#66FF66';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(102, 255, 102, 0.20)';
      this.fontSize = 44;
      this.flinchOffset = 0;
    } else {
      this.textColor = '#FFFFFF';
      this.outlineColor = '#000000';
      this.shadowColor = 'rgba(255, 255, 255, 0.06)';
      this.fontSize = 44;
    }

    // ---- Measure glyph box ONCE ----
    const rs = clamp(Number(this.renderScale) || 1, 0.25, 2);
    let dispText;
    if (this.isMiss) dispText = 'MISS';
    else if (this.isHeal) dispText = '+' + Math.round(Number(value) || 0);
    else dispText = String(Math.round(Number(value) || 0));
    let tw = measureFloaterTextWidth(dispText, this.fontSize, rs);
    if (this.isSkillTotal) tw = Math.max(tw, this.fontSize * rs * 3);
    this.textW = Math.max(8, tw);
    this.textH = Math.max(8, this.fontSize * rs);

    this.drawFn = options.drawFn || null;

    // ---- POP stage (independent) ----
    this.popElapsed = 0;
    this.popDuration = options.popDuration !== undefined ? options.popDuration : 300;

    // ---- HOLD stage (independent of popDuration) ----
    const hd = options.holdDuration;
    this.holdDuration =
      hd !== undefined && hd !== null && Number.isFinite(Number(hd))
        ? Math.max(0, Number(hd))
        : 1800;

    // ---- FLOAT shrink ----
    const fsOpt = options.floatShrink;
    this.floatShrink =
      fsOpt !== undefined && fsOpt !== null && Number.isFinite(Number(fsOpt))
        ? clamp(Number(fsOpt), 0.1, 2)
        : 0.7;
    this.floatScale = 1;

    const defaultInit = options.startPopScale !== undefined ? options.startPopScale : 1.6;
    this.initialScale =
      options.initialScale !== undefined ? Number(options.initialScale) : defaultInit;
    this.finalScale = options.finalScale !== undefined ? Number(options.finalScale) : 1.0;
    this.easing = options.easing || 'cubicOut';
    this.popScale = this.initialScale;
  }

  update(dt) {
    if (!this.alive) return;

    const ms = dt * 1000;
    this.life += ms;

    // ============================================================
    //  POP stage (quick, always runs from spawn)
    // ============================================================
    if (this.popElapsed < this.popDuration) {
      this.popElapsed += ms;
      const t = Math.min(this.popElapsed / this.popDuration, 1);
      const eased = evaluateFdsEasing(t, this.easing);
      this.popScale = this.initialScale + (this.finalScale - this.initialScale) * eased;
    } else {
      this.popScale = this.finalScale;
    }

    // Crit balloon animation runs independently of the text.
    if (this.isCrit) {
      const bEased = evaluateFdsEasing(Math.min(this.life / 300, 1), this.easing);
      this.critBalloonScale =
        this.life < 300 ? lerp(0, 1, bEased) : 1 + Math.sin(this.life / 150) * 0.04;
      this.critBalloonScale = clamp(this.critBalloonScale, 0.7, 1.4);
    }

    // ============================================================
    //  HOLD stage — frozen in place. No motion, no fade, no extra
    //  shrink. The pop keeps animating if it hasn't finished yet,
    //  but the number does not move.
    // ============================================================
    if (this.life < this.holdDuration) return;

    // ============================================================
    //  FLOAT stage — motion + fade + slow secondary shrink.
    // ============================================================
    this.motionLife = Math.min(this.life - this.holdDuration, this.motionLife + ms);

    // Gradual shrink during the float. Progress is based on motionLife
    // over the fade duration, so it always finishes shrinking exactly
    // when the number fades out.
    const floatProgress = clamp(this.motionLife / this.duration, 0, 1);
    this.floatScale = lerp(1, this.floatShrink, floatProgress);

    if (this.isMiss) {
      if (!this.missSlideDone) {
        this.offsetX += 4.5 * this.dir;
        this.missSlideX += 4.5;
        if (this.missSlideX > 120) this.missSlideDone = true;
      }
      if (this.missSlideDone && this.motionLife > 300) this.opacity -= 0.015;
      if (this.opacity <= 0 || this.motionLife > 2200) {
        this.alive = false;
        return;
      }
      return;
    }

    // Physics: vy negative = upwards. Starts floating regardless of
    // whether the pop has finished, thanks to the separate hold stage.
    this.vy += this.gravity;
    this.offsetY += this.vy;
    this.offsetX += this.vx;
    this.vx *= 0.998;

    const progress = this.motionLife / this.duration;
    this.opacity =
      progress < this.fadeStart ? 1 : 1 - (progress - this.fadeStart) / (1 - this.fadeStart);
    this.opacity = clamp(this.opacity, 0, 1);

    if (this.motionLife > this.duration) this.alive = false;
    if (Math.abs(this.offsetY) > 800 || Math.abs(this.offsetX) > 800) this.alive = false;
  }

  // Combined scale used for both rendering and overlap tests.
  get combinedScale() {
    return this.popScale * this.floatScale;
  }

  _drawCritBalloon(ctx, x, y, baseFs) {
    const bs = this.critBalloonScale * 1.1;
    const sprite = getCritBalloonSprite(baseFs);
    if (!sprite) return;
    const dw = sprite.width * bs;
    const dh = sprite.height * bs;
    ctx.drawImage(sprite.canvas, x - dw / 2, y - 2 - dh / 2, dw, dh);
  }

  draw(ctx) {
    if (!this.alive) return;
    if (!this.renderVisible) return;
    if (this.opacity <= 0) return;

    if (this.drawFn) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      this.drawFn(ctx, this);
      ctx.restore();
      return;
    }

    let displayValue = this.value;
    if (typeof displayValue === 'number' && Number.isFinite(displayValue)) {
      displayValue = Math.round(displayValue);
    }
    if (this.isHeal) displayValue = '+' + Math.round(Number(this.value) || 0);
    const textStr = this.isMiss ? 'MISS' : String(displayValue);
    const baseFs = this.fontSize * clamp(Number(this.renderScale) || 1, 0.25, 2);

    ctx.save();
    ctx.globalAlpha = this.opacity;

    const x = this.x;
    const y = this.y + this.flinchOffset;
    const scale = this.combinedScale;

    if (this.isCrit && this.critBalloonScale > 0.1) {
      this._drawCritBalloon(ctx, x, y, baseFs);
    }

    const sprite = getFloaterSprite(
      textStr,
      this.type,
      this.fontSize,
      this.renderScale,
      this.textColor,
      this.outlineColor,
      this.shadowColor,
      this.isCrit,
      this.isSkillTotal,
      this.isHeal,
      this.isMiss
    );

    if (sprite) {
      const dw = sprite.width * scale;
      const dh = sprite.height * scale;
      ctx.drawImage(sprite.canvas, x - dw / 2, y - dh / 2, dw, dh);
    }

    ctx.restore();
  }
}

// ================================================================
//  FLOATING DAMAGE SYSTEM
// ================================================================
class FloatingDamageSystem {
  constructor(options = {}) {
    this.poolSize = options.poolSize || 80;
    this.defaultVy = options.defaultVy || -14.2;
    this.defaultVx = options.defaultVx || 4.5;
    this.defaultGravity = options.defaultGravity || 0.4;
    this.defaultDuration = options.defaultDuration || 1800;
    this.defaultFadeStart = options.defaultFadeStart || 0.7;
    this.defaultYOffset = options.defaultYOffset || -20;
    this.initialYOffset = Number.isFinite(Number(options.initialYOffset))
      ? Number(options.initialYOffset)
      : 0;

    this.skillDuration = options.skillDuration || 3000;
    this.skillFadeStart = options.skillFadeStart || 0.9;
    this.skillYOffset = options.skillYOffset || -30;

    this.healVy = options.healVy || -6.0;
    this.healDuration = options.healDuration || 1600;
    this.healFadeStart = options.healFadeStart || 0.7;
    this.healYOffset = options.healYOffset || -25;

    this.viewCenterX = undefined;
    this.viewCenterProvider = null;
    this.awayFromCenter = true;
    this.posTransform = null;

    this.textScale = Number.isFinite(Number(options.textScale))
      ? clamp(Number(options.textScale), 0.25, 2)
      : 1;

    this.initialTextScale = Number.isFinite(Number(options.initialTextScale))
      ? Number(options.initialTextScale)
      : 1.6;
    this.finalTextScale = Number.isFinite(Number(options.finalTextScale))
      ? Number(options.finalTextScale)
      : 1.0;
    this.popDuration = Number.isFinite(Number(options.popDuration))
      ? Number(options.popDuration)
      : 300;
    this.easing = options.easing || 'cubicOut';

    // ---- HOLD PHASE DEFAULT ----
    // Standalone "brief display" duration. NOT tied to popDuration.
    // Default 1800ms ≈ a couple of seconds of frozen display.
    this.holdDuration = Number.isFinite(Number(options.holdDuration))
      ? Math.max(0, Number(options.holdDuration))
      : 1800;

    // ---- FLOAT SHRINK DEFAULT ----
    // Scale the number shrinks to by the end of the float stage.
    this.floatShrink = Number.isFinite(Number(options.floatShrink))
      ? clamp(Number(options.floatShrink), 0.1, 2)
      : 0.7;

    // ---- LATEST-WINS ----
    this.latestWins = options.latestWins !== false;
    this.hideShrink = Number.isFinite(Number(options.hideShrink))
      ? Number(options.hideShrink)
      : 2;

    this.pool = [];
    this.active = [];
    this._initPool();

    this.multiQueue = [];
    this.multiTimer = 0;
    this.multiInterval = 100;

    this.skillState = {
      active: false,
      totalDamage: 0,
      hitCount: 0,
      totalHits: 0,
      spawnTimer: 0,
      spawnInterval: 70,
      phase: 'idle',
      baseX: 0,
      baseY: 0,
      hitDamage: [],
      yellowNumber: null,
      _dir: 1,
    };
  }

  // ---- Internal ----
  _initPool() {
    for (let i = 0; i < this.poolSize; i++) {
      this.pool.push(new FloatingDamage());
    }
  }

  _get() {
    for (let i = 0; i < this.pool.length; i++) {
      if (!this.pool[i].alive) {
        const recycled = this.pool[i];
        recycled.alive = true;
        this.active.push(recycled);
        return recycled;
      }
    }

    // The pool is a hard ceiling. Under a burst of combat text, recycle
    // the oldest floater rather than allocating more objects or allowing
    // a backlog to grow. The newest feedback therefore always survives.
    let victim = null;
    const currentTotal = this.skillState && this.skillState.yellowNumber;
    for (let i = 0; i < this.active.length; i++) {
      const candidate = this.active[i];
      if (candidate && candidate !== currentTotal) {
        victim = candidate;
        break;
      }
    }
    if (!victim && this.active.length) victim = this.active[0];
    if (victim) {
      let write = 0;
      for (let i = 0; i < this.active.length; i++) {
        const active = this.active[i];
        if (active === victim) continue;
        if (write !== i) this.active[write] = active;
        write++;
      }
      this.active.length = write;
      this.active.push(victim);
      return victim;
    }

    // Defensive fallback for an unexpectedly empty/misaligned pool.
    const obj = new FloatingDamage();
    this.pool.push(obj);
    this.active.push(obj);
    return obj;
  }

  _prune() {
    let w = 0;
    const len = this.active.length;
    for (let i = 0; i < len; i++) {
      if (this.active[i].alive) {
        if (w !== i) this.active[w] = this.active[i];
        w++;
      }
    }
    this.active.length = w;
  }

  // Resolve the hold duration: explicit per-spawn option wins, else
  // system default. Never falls back to popDuration.
  _resolveHold(options) {
    if (options && options.holdDuration !== undefined && options.holdDuration !== null) {
      return Math.max(0, Number(options.holdDuration) || 0);
    }
    return this.holdDuration;
  }

  // Resolve the float shrink factor.
  _resolveFloatShrink(options) {
    if (options && options.floatShrink !== undefined && options.floatShrink !== null) {
      const v = Number(options.floatShrink);
      if (Number.isFinite(v)) return clamp(v, 0.1, 2);
    }
    return this.floatShrink;
  }

  // ---- Screen position of a live floater ----
  _getScreenPos(ft) {
    if (this.posTransform) {
      const b = this.posTransform(ft.originX, ft.originY);
      return { x: b.x + ft.offsetX, y: b.y + ft.offsetY };
    }
    return { x: ft.originX + ft.offsetX, y: ft.originY + ft.offsetY };
  }

  // ================================================================
  //  LATEST-WINS OVERLAP LOGIC
  //  Only the SINGLE newest floater forces hiding. Older floaters
  //  overlapping each other are never hidden.
  // ================================================================
  _boxOf(ft) {
    const p = this._getScreenPos(ft);
    const sc = ft.combinedScale;
    const hw = ft.textW * sc * 0.5 - this.hideShrink;
    const hh = ft.textH * sc * 0.5 - this.hideShrink;
    return { x: p.x, y: p.y, hw, hh };
  }

  static _boxesOverlap(a, b) {
    if (a.hw <= 0 || a.hh <= 0 || b.hw <= 0 || b.hh <= 0) return false;
    if (a.x + a.hw <= b.x - b.hw) return false;
    if (a.x - a.hw >= b.x + b.hw) return false;
    if (a.y + a.hh <= b.y - b.hh) return false;
    if (a.y - a.hh >= b.y + b.hh) return false;
    return true;
  }

  // Return the single latest alive floater (topmost / most recent).
  _getLatestAlive() {
    const act = this.active;
    for (let i = act.length - 1; i >= 0; i--) {
      if (act[i].alive) return act[i];
    }
    return null;
  }

  // Per-frame pass: reset visibility, then hide anything covered by
  // the single latest floater.
  _updateOverlapHide() {
    const act = this.active;
    const n = act.length;
    if (n === 0) return;

    // Master switch off: everyone visible.
    if (!this.latestWins) {
      for (let i = 0; i < n; i++) act[i].renderVisible = true;
      return;
    }

    for (let i = 0; i < n; i++) act[i].renderVisible = true;

    const latest = this._getLatestAlive();
    if (!latest) return;

    const lb = this._boxOf(latest);
    if (lb.hw <= 0 || lb.hh <= 0) return;

    for (let i = 0; i < n; i++) {
      const a = act[i];
      if (a === latest || !a.alive) continue;
      const ab = this._boxOf(a);
      if (FloatingDamageSystem._boxesOverlap(ab, lb)) {
        a.renderVisible = false;
      }
    }
  }

  // Instant pass used right after a spawn: the brand-new floater is the
  // latest, so anything older that it covers is hidden on frame one.
  _snapOverlapFor(newFloater) {
    if (!this.latestWins) return;
    const nf = newFloater;
    if (!nf || !nf.alive) return;

    const nb = this._boxOf(nf);
    if (nb.hw <= 0 || nb.hh <= 0) return;

    const act = this.active;
    for (let i = 0; i < act.length; i++) {
      const a = act[i];
      if (a === nf || !a.alive) continue;
      const ab = this._boxOf(a);
      if (FloatingDamageSystem._boxesOverlap(ab, nb)) {
        a.renderVisible = false;
      }
    }
  }

  // ---- Camera-aware direction API ----
  setViewCenter(x) {
    this.viewCenterX = Number(x);
    this.viewCenterProvider = null;
  }
  setViewCenterProvider(fn) {
    this.viewCenterProvider = typeof fn === 'function' ? fn : null;
  }
  setAwayFromCenter(enabled) {
    this.awayFromCenter = !!enabled;
  }
  setPositionTransform(fn) {
    this.posTransform = typeof fn === 'function' ? fn : null;
  }

  _getViewCenterX() {
    if (this.viewCenterProvider) {
      const v = Number(this.viewCenterProvider());
      if (Number.isFinite(v)) return v;
    }
    if (Number.isFinite(this.viewCenterX)) return this.viewCenterX;
    return 0;
  }

  _getFloatDirection(x, options) {
    if (options && Number.isFinite(options.dir)) return options.dir < 0 ? -1 : 1;
    if (!this.awayFromCenter) return 1;
    const rotX = this.posTransform ? this.posTransform(x, 0).x : x;
    const centerX = this._getViewCenterX();
    return rotX < centerX ? -1 : 1;
  }

  // ---- Settings API ----
  setDefaults(settings) {
    if (settings.vy !== undefined) this.defaultVy = settings.vy;
    if (settings.vx !== undefined) this.defaultVx = settings.vx;
    if (settings.gravity !== undefined) this.defaultGravity = settings.gravity;
    if (settings.duration !== undefined) this.defaultDuration = settings.duration;
    if (settings.fadeStart !== undefined) this.defaultFadeStart = settings.fadeStart;
    if (settings.yOffset !== undefined) this.defaultYOffset = settings.yOffset;
    if (settings.initialYOffset !== undefined)
      this.initialYOffset = Number(settings.initialYOffset) || 0;
    if (settings.skillDuration !== undefined) this.skillDuration = settings.skillDuration;
    if (settings.skillFadeStart !== undefined) this.skillFadeStart = settings.skillFadeStart;
    if (settings.skillYOffset !== undefined) this.skillYOffset = settings.skillYOffset;
    if (settings.healVy !== undefined) this.healVy = settings.healVy;
    if (settings.healDuration !== undefined) this.healDuration = settings.healDuration;
    if (settings.healFadeStart !== undefined) this.healFadeStart = settings.healFadeStart;
    if (settings.healYOffset !== undefined) this.healYOffset = settings.healYOffset;
    if (settings.textScale !== undefined) {
      this.textScale = clamp(Number(settings.textScale) || 1, 0.25, 2);
      fdsSpriteCache.clear();
      fdsCritBalloonCache.clear();
    }
    if (settings.initialTextScale !== undefined)
      this.initialTextScale = Number(settings.initialTextScale);
    if (settings.finalTextScale !== undefined)
      this.finalTextScale = Number(settings.finalTextScale);
    if (settings.popDuration !== undefined) this.popDuration = Number(settings.popDuration);
    if (settings.easing !== undefined) this.easing = settings.easing;
    if (settings.holdDuration !== undefined) {
      this.holdDuration = Math.max(0, Number(settings.holdDuration) || 0);
    }
    if (settings.floatShrink !== undefined) {
      this.floatShrink = clamp(Number(settings.floatShrink) || 0.7, 0.1, 2);
    }
    if (settings.latestWins !== undefined) this.latestWins = !!settings.latestWins;
    if (settings.hideShrink !== undefined) this.hideShrink = Number(settings.hideShrink) || 0;
  }

  // ---- Z-Order Management ----
  bringToFront(obj) {
    const index = this.active.indexOf(obj);
    if (index > -1 && index < this.active.length - 1) {
      this.active.splice(index, 1);
      this.active.push(obj);
      this._snapOverlapFor(obj);
    }
  }

  // ---- Spawn API ----

  /** Spawn a normal damage number */
  spawnNormal(x, y, value, options = {}) {
    const dmg = value || randInt(80, 220);
    const ft = this._get();
    const dir = this._getFloatDirection(x, options);
    const vx = options.vx !== undefined ? options.vx : this.defaultVx * dir;
    const yOff =
      (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset) +
      this.initialYOffset;
    ft.init(x, y, dmg, 'normal', {
      vy: options.vy !== undefined ? options.vy : this.defaultVy,
      vx: vx,
      dir: dir,
      gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity,
      duration: options.duration !== undefined ? options.duration : this.defaultDuration,
      fadeStart: options.fadeStart !== undefined ? options.fadeStart : this.defaultFadeStart,
      yOffset: yOff,
      drawFn: options.drawFn || null,
      holdDuration: this._resolveHold(options),
      floatShrink: this._resolveFloatShrink(options),
      renderScale: this.textScale,
      initialScale:
        options.initialScale !== undefined ? options.initialScale : this.initialTextScale,
      finalScale: options.finalScale !== undefined ? options.finalScale : this.finalTextScale,
      popDuration: options.popDuration !== undefined ? options.popDuration : this.popDuration,
      easing: options.easing !== undefined ? options.easing : this.easing,
    });
    this._snapOverlapFor(ft);
    return ft;
  }

  /** Spawn a critical hit */
  spawnCritical(x, y, value, options = {}) {
    const dmg = value || randInt(350, 620);
    const ft = this._get();
    const dir = this._getFloatDirection(x, options);
    const vx = options.vx !== undefined ? options.vx : this.defaultVx * dir;
    const yOff =
      (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset - 8) +
      this.initialYOffset;
    ft.init(x, y, dmg, 'critical', {
      vy: options.vy !== undefined ? options.vy : this.defaultVy * 1.1,
      vx: vx,
      dir: dir,
      gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity * 1.05,
      duration: options.duration !== undefined ? options.duration : this.defaultDuration,
      fadeStart: options.fadeStart !== undefined ? options.fadeStart : this.defaultFadeStart,
      yOffset: yOff,
      drawFn: options.drawFn || null,
      holdDuration: this._resolveHold(options),
      floatShrink: this._resolveFloatShrink(options),
      renderScale: this.textScale,
      initialScale:
        options.initialScale !== undefined ? options.initialScale : this.initialTextScale,
      finalScale: options.finalScale !== undefined ? options.finalScale : this.finalTextScale,
      popDuration: options.popDuration !== undefined ? options.popDuration : this.popDuration,
      easing: options.easing !== undefined ? options.easing : this.easing,
    });
    this._snapOverlapFor(ft);
    return ft;
  }

  /** Spawn a miss */
  spawnMiss(x, y, options = {}) {
    const ft = this._get();
    const dir = this._getFloatDirection(x, options);
    const yOff =
      (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset) +
      this.initialYOffset;
    ft.init(x, y, 'MISS', 'miss', {
      vy: 0,
      vx: 0,
      dir: dir,
      gravity: 0,
      duration: 2200,
      fadeStart: 0.5,
      yOffset: yOff,
      drawFn: options.drawFn || null,
      holdDuration: this._resolveHold(options),
      floatShrink: this._resolveFloatShrink(options),
      renderScale: this.textScale,
      initialScale:
        options.initialScale !== undefined ? options.initialScale : this.initialTextScale,
      finalScale: options.finalScale !== undefined ? options.finalScale : this.finalTextScale,
      popDuration: options.popDuration !== undefined ? options.popDuration : this.popDuration,
      easing: options.easing !== undefined ? options.easing : this.easing,
    });
    ft.missSlideX = 0;
    ft.missSlideDone = false;
    this._snapOverlapFor(ft);
    return ft;
  }

  /** Spawn a heal (green, vertical) */
  spawnHeal(x, y, value, options = {}) {
    const amt = value || randInt(80, 220);
    const ft = this._get();
    const dir = this._getFloatDirection(x, options);
    const yOff =
      (options.yOffset !== undefined ? options.yOffset : this.healYOffset) +
      this.initialYOffset;
    ft.init(x, y, amt, 'heal', {
      vy: options.vy !== undefined ? options.vy : this.healVy,
      vx: 0,
      dir: dir,
      gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity,
      duration: options.duration !== undefined ? options.duration : this.healDuration,
      fadeStart: options.fadeStart !== undefined ? options.fadeStart : this.healFadeStart,
      yOffset: yOff,
      drawFn: options.drawFn || null,
      holdDuration: this._resolveHold(options),
      floatShrink: this._resolveFloatShrink(options),
      renderScale: this.textScale,
      initialScale:
        options.initialScale !== undefined ? options.initialScale : this.initialTextScale,
      finalScale: options.finalScale !== undefined ? options.finalScale : this.finalTextScale,
      popDuration: options.popDuration !== undefined ? options.popDuration : this.popDuration,
      easing: options.easing !== undefined ? options.easing : this.easing,
    });
    ft.vx = 0;
    this._snapOverlapFor(ft);
    return ft;
  }

  /** Spawn a multi-hit sequence (sequential white numbers) */
  spawnMulti(x, y, count = 5, baseDamage = null, options = {}) {
    const base = baseDamage || randInt(40, 80);
    for (let i = 0; i < count; i++) {
      const dmg = base + (options.variance ? randInt(-5, 10) : 0);
      const yOff =
        (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset) +
        i * -8 +
        this.initialYOffset;
      const itemX =
        x + (options.arcSpread || 0) * (count > 1 ? (i / (count - 1) - 0.5) * 2 : 0);
      const dir = this._getFloatDirection(itemX, options);
      this.multiQueue.push({
        x: itemX,
        y: y,
        yOff: yOff,
        dmg: dmg,
        index: i,
        count: count,
        dir: dir,
        delay: (options.startDelay || 0) + i * this.multiInterval,
        options: options,
      });
    }
  }

  /** Spawn a skill multi-hit (white arc + yellow total) */
  spawnSkillMulti(x, y, count = null, damages = null, options = {}) {
    const numHits = count || randInt(5, 8);
    const dir = this._getFloatDirection(x, options);

    this.skillState.active = true;
    this.skillState.totalDamage = 0;
    this.skillState.hitCount = 0;
    this.skillState.totalHits = numHits;
    this.skillState.spawnTimer = 0;
    this.skillState.spawnInterval = options.interval || 70;
    this.skillState.phase = 'spawning';
    this.skillState.baseX = x;
    this.skillState.baseY = y;
    this.skillState.hitDamage = damages || [];
    this.skillState.yellowNumber = null;
    this.skillState._dir = dir;

    if (!damages) {
      this.skillState.hitDamage = [];
      for (let i = 0; i < numHits; i++) {
        this.skillState.hitDamage.push(randInt(35, 85));
      }
    }

    const yellow = this._get();
    const yOff =
      (options.skillYOffset !== undefined ? options.skillYOffset : this.skillYOffset) +
      this.initialYOffset;
    yellow.init(x, y, 0, 'skill_total', {
      vy: -2.5,
      vx: 0,
      dir: dir,
      gravity: 0.05,
      duration:
        options.skillDuration !== undefined ? options.skillDuration : this.skillDuration,
      fadeStart:
        options.skillFadeStart !== undefined ? options.skillFadeStart : this.skillFadeStart,
      yOffset: yOff,
      drawFn: options.drawFn || null,
      holdDuration: this._resolveHold(options),
      floatShrink: this._resolveFloatShrink(options),
      renderScale: this.textScale,
      initialScale:
        options.initialScale !== undefined ? options.initialScale : this.initialTextScale,
      finalScale: options.finalScale !== undefined ? options.finalScale : this.finalTextScale,
      popDuration: options.popDuration !== undefined ? options.popDuration : this.popDuration,
      easing: options.easing !== undefined ? options.easing : this.easing,
    });
    yellow.textColor = '#FFD700';
    yellow.outlineColor = '#000000';
    yellow.fontSize = 54;
    yellow.isSkillTotal = true;
    yellow.opacity = 1;
    this._snapOverlapFor(yellow);
    this.skillState.yellowNumber = yellow;
    this.skillState._options = options;
  }

  // ---- Update ----
  update(dt) {
    for (let i = 0; i < this.active.length; i++) {
      const ft = this.active[i];
      if (ft.alive) ft.update(dt);
    }
    this._prune();

    this._processMulti(dt);
    this._processSkill(dt);

    // Latest-wins: only the newest floater forces hiding.
    this._updateOverlapHide();
  }

  _processMulti(dt) {
    if (this.multiQueue.length === 0) return;
    const ms = dt * 1000;
    let w = 0;
    const len = this.multiQueue.length;
    for (let qi = 0; qi < len; qi++) {
      const item = this.multiQueue[qi];
      item.delay -= ms;
      if (item.delay <= 0) {
        const opts = item.options || {};
        const ft = this._get();
        const dir = item.dir !== undefined ? item.dir : 1;
        const vy = opts.vy !== undefined ? opts.vy : this.defaultVy * 0.8 - item.index * 0.12;
        const vx =
          opts.vx !== undefined ? opts.vx : (this.defaultVx + item.index * 0.15) * dir;
        const grav = opts.gravity !== undefined ? opts.gravity : this.defaultGravity * 0.9;
        const dur =
          opts.duration !== undefined
            ? opts.duration
            : this.defaultDuration * 0.7 + item.index * 60;
        const fade = opts.fadeStart !== undefined ? opts.fadeStart : this.defaultFadeStart;

        ft.init(item.x, item.y, item.dmg, 'multi', {
          vy: vy,
          vx: vx,
          dir: dir,
          gravity: grav,
          duration: dur,
          fadeStart: fade,
          yOffset: item.yOff,
          drawFn: opts.drawFn || null,
          holdDuration: this._resolveHold(opts),
          floatShrink: this._resolveFloatShrink(opts),
          renderScale: this.textScale,
          initialScale:
            opts.initialScale !== undefined ? opts.initialScale : this.initialTextScale,
          finalScale: opts.finalScale !== undefined ? opts.finalScale : this.finalTextScale,
          popDuration: opts.popDuration !== undefined ? opts.popDuration : this.popDuration,
          easing: opts.easing !== undefined ? opts.easing : this.easing,
        });
        ft.fontSize = 32 + Math.floor(item.index / 2) * 2;
        ft.textColor = '#FFFFFF';
        this._snapOverlapFor(ft);
      } else {
        if (w !== qi) this.multiQueue[w] = item;
        w++;
      }
    }
    this.multiQueue.length = w;
  }

  _processSkill(dt) {
    const state = this.skillState;
    if (!state.active) return;

    if (state.phase === 'done') {
      if (state.yellowNumber && !state.yellowNumber.alive) {
        state.active = false;
      }
      return;
    }

    if (state.phase === 'spawning') {
      state.spawnTimer += dt * 1000;
      if (state.spawnTimer >= state.spawnInterval && state.hitCount < state.totalHits) {
        state.spawnTimer = 0;

        const idx = state.hitCount;
        const dmg = state.hitDamage[idx];
        state.totalDamage += dmg;

        const opts = state._options || {};
        const totalHits = state.totalHits;
        const t = totalHits > 1 ? idx / (totalHits - 1) : 0.5;
        const angle = -0.5 + t * 1.0;
        const dir = state._dir !== undefined ? state._dir : 1;

        const white = this._get();
        const wx = state.baseX;
        const wy = state.baseY;
        const yOff =
          (opts.yOffset !== undefined ? opts.yOffset : this.defaultYOffset) +
          this.initialYOffset +
          idx * -3;

        const vy =
          opts.vy !== undefined ? opts.vy : this.defaultVy * 0.8 + Math.sin(angle) * 2.5;
        const vx = opts.vx !== undefined ? opts.vx : this.defaultVx * 0.15 * dir;
        const grav = opts.gravity !== undefined ? opts.gravity : this.defaultGravity * 0.85;
        const dur = opts.duration !== undefined ? opts.duration : this.defaultDuration * 0.7;
        const fade = opts.fadeStart !== undefined ? opts.fadeStart : this.defaultFadeStart;

        white.init(wx, wy, dmg, 'skill_hit', {
          vy: vy,
          vx: vx,
          dir: dir,
          gravity: grav,
          duration: dur,
          fadeStart: fade,
          yOffset: yOff,
          drawFn: opts.drawFn || null,
          holdDuration: this._resolveHold(opts),
          floatShrink: this._resolveFloatShrink(opts),
          renderScale: this.textScale,
          initialScale:
            opts.initialScale !== undefined ? opts.initialScale : this.initialTextScale,
          finalScale: opts.finalScale !== undefined ? opts.finalScale : this.finalTextScale,
          popDuration: opts.popDuration !== undefined ? opts.popDuration : this.popDuration,
          easing: opts.easing !== undefined ? opts.easing : this.easing,
        });
        white.textColor = '#FFFFFF';
        white.outlineColor = '#000000';
        white.fontSize = 30;
        white.isSkillHit = true;
        this._snapOverlapFor(white);

        const yellow = state.yellowNumber;
        if (yellow && yellow.alive) {
          yellow.value = state.totalDamage;
          yellow.life = 0;
          yellow.motionLife = 0;
          yellow.popElapsed = 0;
          yellow.popScale = yellow.initialScale;
          yellow.floatScale = 1;
          yellow.opacity = 1;
          yellow.renderVisible = true;
          yellow.alive = true;
          yellow.originX = state.baseX;
          yellow.originY = state.baseY;
          yellow.offsetX = 0;
          const yOff2 =
            (opts.skillYOffset !== undefined ? opts.skillYOffset : this.skillYOffset) +
            this.initialYOffset;
          yellow.offsetY = yOff2;
          yellow.vy = -2.5;

          // Yellow becomes the latest → it now forces hiding on the
          // white hits it covers.
          this.bringToFront(yellow);
        }

        state.hitCount++;

        if (state.hitCount >= state.totalHits) {
          state.phase = 'done';
        }
      }
    }
  }

  // ---- Render (with optional viewport culling) ----
  render(ctx, inViewFn) {
    const tf = this.posTransform;
    const len = this.active.length;
    for (let i = 0; i < len; i++) {
      const ft = this.active[i];
      if (!ft.alive) continue;
      if (!ft.renderVisible) continue;
      ft.renderScale = this.textScale;
      if (tf) {
        const base = tf(ft.originX, ft.originY);
        if (inViewFn && !inViewFn(base.x, base.y, 140)) continue;
        ft.x = base.x + ft.offsetX;
        ft.y = base.y + ft.offsetY;
        ft.draw(ctx);
      } else {
        if (inViewFn && !inViewFn(ft.originX, ft.originY, 140)) continue;
        ft.x = ft.originX + ft.offsetX;
        ft.y = ft.originY + ft.offsetY;
        ft.draw(ctx);
      }
    }
  }

  // ---- Clear ----
  clear() {
    for (let i = 0; i < this.pool.length; i++) this.pool[i].alive = false;
    this.active.length = 0;
    this.multiQueue.length = 0;
    this.multiTimer = 0;
    this.skillState.active = false;
    this.skillState.phase = 'idle';
    this.skillState.yellowNumber = null;
  }

  // ---- Stats ----
  getActiveCount() {
    return this.active.length;
  }

  // ---- Multi-hit control ----
  setMultiInterval(ms) {
    this.multiInterval = ms;
  }

  // ---- Skill control ----
  setSkillInterval(ms) {
    this.skillState.spawnInterval = ms;
  }
}
