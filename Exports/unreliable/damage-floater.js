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
          // Runtime scale is supplied by FloatingDamageSystem settings.
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
          // Floaters use world coordinates; cull only far outside the full world.
          if (this.y > 2600 || this.y < -600 || this.x > 2600 || this.x < -600) this.alive = false;
        }

        draw(ctx) {
          if (!this.alive || this.opacity <= 0) return;

          // Custom draw override
          if (this.drawFn) {
            this.drawFn(ctx, this);
            return;
          }

          ctx.save();
          ctx.globalAlpha = this.opacity;

          const x = this.x;
          const y = this.y;
          const fs = this.fontSize * clamp(Number(this.renderScale) || 1, 0.25, 2) * this.popScale;

          // ---- Crit balloon ----
          if (this.isCrit && this.critBalloonScale > 0.1) {
            this._drawCritBalloon(ctx, x, y, fs);
          }

          // ---- Miss ----
          if (this.isMiss) {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = `900 ${fs}px "Arial Black", "Segoe UI Black", system-ui, sans-serif`;
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = '#0a0a12';
            ctx.lineJoin = 'round';
            ctx.strokeText('MISS', x, y);
            ctx.shadowColor = 'rgba(150, 150, 180, 0.10)';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#9999BB';
            ctx.fillText('MISS', x, y);
            ctx.shadowBlur = 0;
            ctx.restore();
            return;
          }

          // ---- Heal: add "+" prefix ----
          let displayValue = this.value;
          if (typeof displayValue === 'number' && Number.isFinite(displayValue)) {
            displayValue = Math.round(displayValue);
          }
          if (this.isHeal) {
            displayValue = '+' + Math.round(Number(this.value) || 0);
          }

          // ---- Normal text ----
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const fontFamily =
            this.isCrit || this.isSkillTotal
              ? '"Arial Black", "Impact", system-ui, sans-serif'
              : '"Arial Black", "Segoe UI Black", system-ui, sans-serif';
          ctx.font = `900 ${fs}px ${fontFamily}`;

          // Thinner outlines keep the numbers crisp without heavy black borders.
          const lineW = this.isCrit || this.isSkillTotal ? 3 : 2;
          ctx.lineWidth = lineW;
          ctx.strokeStyle = '#000000';
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';
          ctx.shadowColor = 'rgba(0,0,0,0)';
          ctx.strokeText(String(displayValue), x, y + this.flinchOffset);

          ctx.shadowColor = this.shadowColor;
          ctx.shadowBlur = this.isCrit ? 20 : 10;
          ctx.shadowOffsetY = this.isCrit || this.isSkillTotal || this.isHeal ? 0 : 1;
          ctx.fillStyle = this.textColor;
          ctx.fillText(String(displayValue), x, y + this.flinchOffset);

          if (this.isCrit || this.isSkillTotal || this.isHeal) {
            ctx.shadowColor = this.isHeal ? 'rgba(102, 255, 102, 0.15)' : 'rgba(255, 215, 0, 0.15)';
            ctx.shadowBlur = 30;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillText(String(displayValue), x - 1, y - 1 + this.flinchOffset);
          }

          ctx.restore();
        }

        _drawCritBalloon(ctx, x, y, fs) {
          const bs = this.critBalloonScale * 1.1;
          const bw = fs * 1.6 * bs;
          const bh = fs * 1.4 * bs;

          ctx.save();
          ctx.translate(x, y - 2);

          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, bw * 0.9);
          glow.addColorStop(0, 'rgba(255, 60, 60, 0.20)');
          glow.addColorStop(1, 'rgba(255, 0, 0, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(0, 0, bw * 0.9, 0, Math.PI * 2);
          ctx.fill();

          const spikes = 14;
          const outerR = bw * 0.55;
          const innerR = bw * 0.35;
          ctx.beginPath();
          for (let i = 0; i < spikes * 2; i++) {
            const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
            const r = i % 2 === 0 ? outerR : innerR;
            ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
          }
          ctx.closePath();

          const grad = ctx.createRadialGradient(0, -bh * 0.2, 0, 0, 0, outerR);
          grad.addColorStop(0, '#FF4444');
          grad.addColorStop(0.5, '#DD2222');
          grad.addColorStop(1, '#AA1111');
          ctx.fillStyle = grad;
          ctx.shadowColor = 'rgba(255, 50, 50, 0.3)';
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = '#881111';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          ctx.strokeStyle = 'rgba(255, 200, 200, 0.12)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < spikes * 2; i++) {
            const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
            const r = i % 2 === 0 ? innerR * 1.1 : innerR * 0.85;
            ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
          }
          ctx.closePath();
          ctx.stroke();

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = `900 ${fs * 0.45}px "Arial Black", "Impact", system-ui, sans-serif`;
          ctx.fillStyle = 'rgba(255, 255, 200, 0.85)';
          ctx.shadowColor = 'rgba(0,0,0,0.3)';
          ctx.shadowBlur = 8;
          // ctx.fillText('POW!', 0, -bh * 0.02);
          ctx.shadowBlur = 0;

          ctx.restore();
        }
      }

      // ================================================================
      //  FLOATING DAMAGE SYSTEM (Plug & Play)
      // ================================================================
      class FloatingDamageSystem {
        /**
         * @param {Object} options
         * @param {number} options.poolSize - Max number of floaters (default 80)
         * @param {number} options.defaultVy - Initial vertical velocity (default -7.2)
         * @param {number} options.defaultVx - Horizontal drift (default 4.5)
         * @param {number} options.defaultGravity - Gravity (default 0.40)
         * @param {number} options.defaultDuration - Duration in ms (default 1800)
         * @param {number} options.defaultFadeStart - Fade start as 0-1 (default 0.7)
         * @param {number} options.defaultYOffset - Y offset from spawn point (default -20)
         * @param {number} options.initialYOffset - Creator-controlled global Y adjustment for all floating combat text (default 0)
         */
        constructor(options = {}) {
          this.poolSize = options.poolSize || 80;
          this.defaultVy = options.defaultVy || -7.2;
          this.defaultVx = options.defaultVx || 4.5;
          this.defaultGravity = options.defaultGravity || 0.4;
          this.defaultDuration = options.defaultDuration || 1800;
          this.defaultFadeStart = options.defaultFadeStart || 0.7;
          this.defaultYOffset = options.defaultYOffset || -20;
          // Applied once to every floater after its normal/skill/heal spawn offset.
          // A value of 0 preserves the game's authored placement.
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
          for (let i = this.active.length - 1; i >= 0; i--) {
            if (!this.active[i].alive) this.active.splice(i, 1);
          }
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
          if (settings.textScale !== undefined)
            this.textScale = clamp(Number(settings.textScale) || 1, 0.25, 2);
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
          // Ensure VX is 0
          ft.vx = 0;
          return ft;
        }

        /**
         * Spawn a multi-hit sequence (sequential white numbers)
         * @param {number} x - Center x
         * @param {number} y - Center y
         * @param {number} count - Number of hits (default 5)
         * @param {number} baseDamage - Base damage per hit (default random 40-80)
         * @param {Object} options - Override settings
         */
        spawnMulti(x, y, count = 5, baseDamage = null, options = {}) {
          const base = baseDamage || randInt(40, 80);
          // Each queued hit carries its own delay so multiple multi-hit
          // sequences (fast attack speed / several targets) can play at the
          // same time and always finish, even if the target dies mid-way.
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
         * @param {number} x - Center x
         * @param {number} y - Center y
         * @param {number} count - Number of hits (default random 5-8)
         * @param {Array} damages - Optional array of damage values
         * @param {Object} options - Override settings
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

          // Store options for spawning
          this.skillState._options = options;
        }

        // ---- Update ----
        update(dt) {
          // Update all alive
          for (const ft of this.active) {
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
          for (let qi = this.multiQueue.length - 1; qi >= 0; qi--) {
            const item = this.multiQueue[qi];
            item.delay -= ms;
            if (item.delay > 0) continue;
            this.multiQueue.splice(qi, 1);

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
          }
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
              const arcSpread = opts.arcSpread || 90;
              const wx = state.baseX; // + (t - 0.5) * arcSpread;
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

              // ---- Update yellow total (reset animation) ----
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

                // <<< FIX: Bring yellow to front AFTER every update >>>
                this.bringToFront(yellow);
              }

              state.hitCount++;

              if (state.hitCount >= state.totalHits) {
                state.phase = 'done';
              }
            }
          }
        }

        // ---- Render ----
        render(ctx) {
          for (const ft of this.active) {
            if (ft.alive) {
              // Apply the same creator-controlled scale to damage, crits, heals,
              // multi-hit numbers, and status messages routed through FDS.
              ft.renderScale = this.textScale;
              ft.draw(ctx);
            }
          }
        }

        // ---- Clear ----
        clear() {
          for (const obj of this.pool) obj.alive = false;
          this.active = [];
          this.multiQueue = [];
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