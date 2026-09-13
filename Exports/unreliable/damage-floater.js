        // ================================================================
        //  PLUG & PLAY FLOATING DAMAGE SYSTEM
        //  - Reusable class with clean API
        //  - Consistent multi-hit arcs (no randomness)
        //  - Object pool + Z-order (newest on top)
        //  - No scaling, no floor
        //  - Heal: green, vertical only
        // ================================================================

        // ---- Utility ----
        function lerp(a, b, t) { return a + (b - a) * t; }

        function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

        function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

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

        const fontFamily =
          isCrit || isSkillTotal
            ? '"Arial Black", "Impact", system-ui, sans-serif'
            : '"Arial Black", "Segoe UI Black", system-ui, sans-serif';
        const fontStr = `900 ${fs}px ${fontFamily}`;

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

        // 1. Red glow circle
        const glow = offCtx.createRadialGradient(0, 0, 0, 0, 0, bw * 0.9);
        glow.addColorStop(0, 'rgba(255, 60, 60, 0.20)');
        glow.addColorStop(1, 'rgba(255, 0, 0, 0)');
        offCtx.fillStyle = glow;
        offCtx.beginPath();
        offCtx.arc(0, 0, bw * 0.9, 0, Math.PI * 2);
        offCtx.fill();

        // 2. Star spike polygon with gradient & shadow
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

        // 3. Inner decorative star ring
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
        if (fdsCritBalloonCache.size > 20) {
          fdsCritBalloonCache.clear();
        }
        fdsCritBalloonCache.set(key, cached);
        return cached;
      }

      // ================================================================
      //  FLOATING DAMAGE CLASS (single instance)
      // ================================================================
      class FloatingDamage {
        constructor() {
          this.alive = false;
          this.x = 0;
          this.y = 0;
          this.value = 0;
          this.type = 'normal';
          this.life = 0;
          this.vy = 0;
          this.vx = 0;
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

          this.popScale = 1.0;
          this.popElapsed = 0;
          this.popDuration = 300;
          this.startPopScale = 1.6;
        }

        init(x, y, value, type = 'normal', options = {}) {
          this.alive = true;
          this.x = x;
          this.y = y;
          this.value = value;
          this.type = type;
          this.life = 0;
          this.opacity = 1;
          this.missSlideX = 0;
          this.missSlideDone = false;
          this.critBalloonScale = 0;
          this.isSkillHit = false;
          this.isSkillTotal = false;
          this.isHeal = false;

          this.vy = options.vy !== undefined ? options.vy : -7.2;
          this.vx = options.vx !== undefined ? options.vx : 4.5;
          this.gravity = options.gravity !== undefined ? options.gravity : 0.4;
          this.duration = options.duration !== undefined ? options.duration : 1800;
          this.fadeStart = options.fadeStart !== undefined ? options.fadeStart : 0.7;

          this.isCrit = type === 'critical';
          this.isMiss = type === 'miss';
          this.isMulti = type === 'multi';
          this.isSkillHit = type === 'skill_hit';
          this.isSkillTotal = type === 'skill_total';
          this.isHeal = type === 'heal';

          // Heal: force vertical
          if (this.isHeal) {
            this.vx = 0;
          }

          // Visual styles
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

          this.drawFn = options.drawFn || null;

          this.popElapsed = 0;
          this.popDuration = options.popDuration !== undefined ? options.popDuration : 300;
          this.startPopScale = options.startPopScale !== undefined ? options.startPopScale : 1.6;
          this.popScale = this.startPopScale;
        }

        update(dt) {
          if (!this.alive) return;

          const ms = dt * 1000;
          this.life += ms;

          // pop animation
          if (this.popElapsed < this.popDuration) {
            this.popElapsed += ms;
            const t = Math.min(this.popElapsed / this.popDuration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            this.popScale = this.startPopScale + (1 - this.startPopScale) * eased;
            this.popScale = Math.max(this.popScale, 1.0);
          } else {
            this.popScale = 1.0;
          }

          // Physics: no floor, no bounce
          if (!this.isMiss) {
            this.vy += this.gravity;
            this.y += this.vy;
            this.x += this.vx;
            this.vx *= 0.998;
          } else {
            // Miss: horizontal slide
            if (!this.missSlideDone) {
              this.missSlideX += 4.5;
              this.x += 4.5;
              if (this.missSlideX > 120) this.missSlideDone = true;
            }
            if (this.missSlideDone && this.life > 300) this.opacity -= 0.015;
            if (this.opacity <= 0 || this.life > 2200) {
              this.alive = false;
              return;
            }
            return;
          }

          // Opacity
          const progress = this.life / this.duration;
          this.opacity =
            progress < this.fadeStart ? 1 : 1 - (progress - this.fadeStart) / (1 - this.fadeStart);
          this.opacity = clamp(this.opacity, 0, 1);

          // Crit balloon
          if (this.isCrit) {
            this.critBalloonScale =
              this.life < 300 ? lerp(0, 1, this.life / 300) : 1 + Math.sin(this.life / 150) * 0.04;
            this.critBalloonScale = clamp(this.critBalloonScale, 0.7, 1.3);
          }

          // Expiry
          const expires = this.life > this.duration;
          if (this.isSkillTotal) {
            if (expires) this.alive = false;
          } else if (this.isSkillHit) {
            if (expires) {
              this.opacity *= 0.97;
              if (this.opacity < 0.05) this.alive = false;
            }
          } else {
            if (expires) this.alive = false;
          }

          // Off-screen
          if (this.y > 2600 || this.y < -600 || this.x > 2600 || this.x < -600) this.alive = false;
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
          if (!this.alive || this.opacity <= 0) return;

          // Custom draw override
          if (this.drawFn) {
            this.drawFn(ctx, this);
            return;
          }

          let displayValue = this.value;
          if (typeof displayValue === 'number' && Number.isFinite(displayValue)) {
            displayValue = Math.round(displayValue);
          }
          if (this.isHeal) {
            displayValue = '+' + Math.round(Number(this.value) || 0);
          }
          const textStr = this.isMiss ? 'MISS' : String(displayValue);
          const baseFs = this.fontSize * clamp(Number(this.renderScale) || 1, 0.25, 2);

          ctx.save();
          ctx.globalAlpha = this.opacity;

          const x = this.x;
          const y = this.y + this.flinchOffset;
          const scale = this.popScale;

          // ---- Crit balloon ----
          if (this.isCrit && this.critBalloonScale > 0.1) {
            this._drawCritBalloon(ctx, x, y, baseFs);
          }

          // ---- Draw Cached Text Sprite (Ultra-fast blit) ----
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
      //  FLOATING DAMAGE SYSTEM (Plug & Play / 120 FPS Engine)
      // ================================================================
      class FloatingDamageSystem {
        constructor(options = {}) {
          this.poolSize = options.poolSize || 80;
          this.defaultVy = options.defaultVy || -7.2;
          this.defaultVx = options.defaultVx || 4.5;
          this.defaultGravity = options.defaultGravity || 0.4;
          this.defaultDuration = options.defaultDuration || 1800;
          this.defaultFadeStart = options.defaultFadeStart || 0.7;
          this.defaultYOffset = options.defaultYOffset || -20;
          this.initialYOffset = Number.isFinite(Number(options.initialYOffset))
            ? Number(options.initialYOffset)
            : 0;

          // Skill total defaults
          this.skillDuration = options.skillDuration || 3000;
          this.skillFadeStart = options.skillFadeStart || 0.9;
          this.skillYOffset = options.skillYOffset || -30;

          // Heal defaults
          this.healVy = options.healVy || -6.0;
          this.healDuration = options.healDuration || 1600;
          this.healFadeStart = options.healFadeStart || 0.7;
          this.healYOffset = options.healYOffset || -25;

          // Pool & active list
          this.pool = [];
          this.active = [];
          this._initPool();

          // Multi-hit state
          this.multiQueue = [];
          this.multiTimer = 0;
          this.multiInterval = 100;

          // Skill state
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
              this.active.push(this.pool[i]);
              return this.pool[i];
            }
          }
          // Pool exhausted - create new (grow)
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
        }

        // ---- Z-Order Management ----
        bringToFront(obj) {
          const index = this.active.indexOf(obj);
          if (index > -1 && index < this.active.length - 1) {
            this.active.splice(index, 1);
            this.active.push(obj);
          }
        }

        // ---- Spawn API ----

        /** Spawn a normal damage number */
        spawnNormal(x, y, value, options = {}) {
          const dmg = value || randInt(80, 220);
          const ft = this._get();
          ft.init(
            x,
            y +
              (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset) +
              this.initialYOffset,
            dmg,
            'normal',
            {
              vy: options.vy !== undefined ? options.vy : this.defaultVy,
              vx: options.vx !== undefined ? options.vx : this.defaultVx,
              gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity,
              duration: options.duration !== undefined ? options.duration : this.defaultDuration,
              fadeStart:
                options.fadeStart !== undefined ? options.fadeStart : this.defaultFadeStart,
              drawFn: options.drawFn || null,
            }
          );
          return ft;
        }

        /** Spawn a critical hit */
        spawnCritical(x, y, value, options = {}) {
          const dmg = value || randInt(350, 620);
          const ft = this._get();
          const yOff = options.yOffset !== undefined ? options.yOffset : this.defaultYOffset - 8;
          ft.init(x, y + yOff + this.initialYOffset, dmg, 'critical', {
            vy: options.vy !== undefined ? options.vy : this.defaultVy * 1.1,
            vx: options.vx !== undefined ? options.vx : this.defaultVx,
            gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity * 1.05,
            duration: options.duration !== undefined ? options.duration : this.defaultDuration,
            fadeStart: options.fadeStart !== undefined ? options.fadeStart : this.defaultFadeStart,
            drawFn: options.drawFn || null,
          });
          return ft;
        }

        /** Spawn a miss */
        spawnMiss(x, y, options = {}) {
          const ft = this._get();
          const yOff = options.yOffset !== undefined ? options.yOffset : this.defaultYOffset;
          ft.init(x, y + yOff + this.initialYOffset, 'MISS', 'miss', {
            vy: 0,
            vx: 0,
            gravity: 0,
            duration: 2200,
            fadeStart: 0.5,
            drawFn: options.drawFn || null,
          });
          ft.missSlideX = 0;
          ft.missSlideDone = false;
          return ft;
        }

        /** Spawn a heal (green, vertical) */
        spawnHeal(x, y, value, options = {}) {
          const amt = value || randInt(80, 220);
          const ft = this._get();
          const yOff = options.yOffset !== undefined ? options.yOffset : this.healYOffset;
          ft.init(x, y + yOff + this.initialYOffset, amt, 'heal', {
            vy: options.vy !== undefined ? options.vy : this.healVy,
            vx: 0, // force vertical
            gravity: options.gravity !== undefined ? options.gravity : this.defaultGravity,
            duration: options.duration !== undefined ? options.duration : this.healDuration,
            fadeStart: options.fadeStart !== undefined ? options.fadeStart : this.healFadeStart,
            drawFn: options.drawFn || null,
          });
          ft.vx = 0;
          return ft;
        }

        /**
         * Spawn a multi-hit sequence (sequential white numbers)
         */
        spawnMulti(x, y, count = 5, baseDamage = null, options = {}) {
          const base = baseDamage || randInt(40, 80);
          for (let i = 0; i < count; i++) {
            const dmg = base + (options.variance ? randInt(-5, 10) : 0);
            const yOff =
              (options.yOffset !== undefined ? options.yOffset : this.defaultYOffset) + i * -8;
            this.multiQueue.push({
              x: x + (options.arcSpread || 0) * (count > 1 ? (i / (count - 1) - 0.5) * 2 : 0),
              y: y + yOff + this.initialYOffset,
              dmg: dmg,
              index: i,
              count: count,
              delay: (options.startDelay || 0) + i * this.multiInterval,
              options: options,
            });
          }
        }

        /**
         * Spawn a skill multi-hit (white arc + yellow total)
         */
        spawnSkillMulti(x, y, count = null, damages = null, options = {}) {
          const numHits = count || randInt(5, 8);
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

          if (!damages) {
            this.skillState.hitDamage = [];
            for (let i = 0; i < numHits; i++) {
              this.skillState.hitDamage.push(randInt(35, 85));
            }
          }

          // Yellow total
          const yellow = this._get();
          const yOff =
            options.skillYOffset !== undefined ? options.skillYOffset : this.skillYOffset;
          yellow.init(x, y + yOff + this.initialYOffset, 0, 'skill_total', {
            vy: -2.5,
            vx: 0,
            gravity: 0.05,
            duration:
              options.skillDuration !== undefined ? options.skillDuration : this.skillDuration,
            fadeStart:
              options.skillFadeStart !== undefined ? options.skillFadeStart : this.skillFadeStart,
            drawFn: options.drawFn || null,
          });
          yellow.textColor = '#FFD700';
          yellow.outlineColor = '#000000';
          yellow.fontSize = 54;
          yellow.isSkillTotal = true;
          yellow.opacity = 1;
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

          // Process multi queue
          this._processMulti(dt);

          // Process skill
          this._processSkill(dt);
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
              const vy = opts.vy !== undefined ? opts.vy : this.defaultVy * 0.8 - item.index * 0.12;
              const vx = opts.vx !== undefined ? opts.vx : this.defaultVx + item.index * 0.15;
              const grav = opts.gravity !== undefined ? opts.gravity : this.defaultGravity * 0.9;
              const dur =
                opts.duration !== undefined
                  ? opts.duration
                  : this.defaultDuration * 0.7 + item.index * 60;
              const fade = opts.fadeStart !== undefined ? opts.fadeStart : this.defaultFadeStart;

              ft.init(item.x, item.y, item.dmg, 'multi', {
                vy: vy,
                vx: vx,
                gravity: grav,
                duration: dur,
                fadeStart: fade,
                drawFn: opts.drawFn || null,
              });
              ft.fontSize = 32 + Math.floor(item.index / 2) * 2;
              ft.textColor = '#FFFFFF';
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

              // White arc hit
              const white = this._get();
              const wx = state.baseX;
              const wy =
                state.baseY +
                (opts.yOffset !== undefined ? opts.yOffset : this.defaultYOffset) +
                this.initialYOffset +
                idx * -3;

              const vy =
                opts.vy !== undefined ? opts.vy : this.defaultVy * 0.8 + Math.sin(angle) * 2.5;
              const vx = opts.vx !== undefined ? opts.vx : this.defaultVx * 0.15;
              const grav = opts.gravity !== undefined ? opts.gravity : this.defaultGravity * 0.85;
              const dur = opts.duration !== undefined ? opts.duration : this.defaultDuration * 0.7;
              const fade = opts.fadeStart !== undefined ? opts.fadeStart : this.defaultFadeStart;

              white.init(wx, wy, dmg, 'skill_hit', {
                vy: vy,
                vx: vx,
                gravity: grav,
                duration: dur,
                fadeStart: fade,
                drawFn: opts.drawFn || null,
              });
              white.textColor = '#FFFFFF';
              white.outlineColor = '#000000';
              white.fontSize = 30;
              white.isSkillHit = true;

              // Update yellow total
              const yellow = state.yellowNumber;
              if (yellow && yellow.alive) {
                yellow.value = state.totalDamage;
                yellow.life = 0;
                yellow.opacity = 1;
                yellow.alive = true;
                yellow.x = state.baseX;
                const yOff =
                  opts.skillYOffset !== undefined ? opts.skillYOffset : this.skillYOffset;
                yellow.y = state.baseY + yOff + this.initialYOffset;
                yellow.vy = -2.5;

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
          const len = this.active.length;
          for (let i = 0; i < len; i++) {
            const ft = this.active[i];
            if (ft.alive) {
              if (inViewFn && !inViewFn(ft.x, ft.y, 140)) continue;
              ft.renderScale = this.textScale;
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