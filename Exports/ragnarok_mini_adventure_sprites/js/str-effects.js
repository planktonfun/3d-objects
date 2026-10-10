(function() {
  'use strict';

  function create(options) {
    var gameCanvas = options.canvas;
    var host = options.host;
    var getSpawnPosition = options.getSpawnPosition;
    var getCameraTransform = options.getCameraTransform;
    var configuredEffectIds = options.effectIds;
    var panel = document.createElement('details');
    panel.style.cssText = [
      'position:absolute',
      'top:12px',
      'right:12px',
      'z-index:3000',
      'max-width:min(360px,calc(100vw - 24px))',
      'padding:8px 10px',
      'border:1px solid #d9ad55',
      'border-radius:6px',
      'background:rgba(7,16,29,.94)',
      'color:#fff',
      'font:12px Inter,sans-serif',
      'pointer-events:auto'
    ].join(';');
    panel.innerHTML = [
      '<summary style="cursor:pointer;font-weight:600">STR Effects</summary>',
      '<div style="display:grid;gap:7px;padding-top:9px">',
      '<label style="display:grid;gap:3px">Client asset root',
      '<input data-str-root value="https://grf.robrowser.com/" spellcheck="false"></label>',
      '<label style="display:grid;gap:3px">Effect',
      '<select data-str-effect disabled><option>Loading effects.txt…</option></select></label>',
      '<label style="display:grid;gap:3px">Blend mode',
      '<select data-str-blend>',
      '<option value="str">STR file mode</option>',
      '<option value="normal">Normal alpha</option>',
      '<option value="additive">Additive</option>',
      '<option value="multiply">Multiply</option>',
      '<option value="screen">Screen</option>',
      '</select></label>',
      '<label style="display:grid;gap:3px">Client loading',
      '<select data-str-thread-mode>',
      '<option value="main" selected>Main thread (no worker; may lag)</option>',
      '<option value="worker">Web Worker</option>',
      '</select></label>',
      '<div style="display:flex;gap:6px">',
      '<button type="button" data-str-connect>Connect client</button>',
      '<button type="button" data-str-play disabled>Play STR</button>',
      '<button type="button" data-str-next>Next</button>',
      '<button type="button" data-str-back>Back</button>',
      '</div>',
      '<div data-str-status role="status" aria-live="polite">Loading effect list…</div>',
      '</div>'
    ].join('');
    host.appendChild(panel);

    var rootInput = panel.querySelector('[data-str-root]');
    var effectList = panel.querySelector('[data-str-effect]');
    var blendMode = panel.querySelector('[data-str-blend]');
    var threadMode = panel.querySelector('[data-str-thread-mode]');
    var connectButton = panel.querySelector('[data-str-connect]');
    var playButton = panel.querySelector('[data-str-play]');
    var nextButton = panel.querySelector('[data-str-next]');
    var backButton = panel.querySelector('[data-str-back]');
    var status = panel.querySelector('[data-str-status]');
    var effectsCanvas = document.createElement('canvas');
    effectsCanvas.setAttribute('aria-hidden', 'true');
    effectsCanvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;';

    function setStatus(message) {
      status.textContent = message;
    }

    const effects = [
      "data/texture/effect/RL_BANISHING_BUSTER/vanishing1.str",
      "data/texture/effect/RL_C_MAKER/cm.str",
      "data/texture/effect/RL_C_MAKER/deffender.str",
      "data/texture/effect/RL_D_TAIL/DTDT.str",
      "data/texture/effect/RL_EXPLOSION/boom.str",
      "data/texture/effect/RL_HAMER_GOD/hogg.str",
      "data/texture/effect/RL_HAMER_GOD/hogg2.str",
      "data/texture/effect/RL_MESS_SPIRAL/S5.str",
      "data/texture/effect/RL_P_ALTER/platinum.str",
      "data/texture/effect/RL_QUICK_DRAW/qd2.str",
      "data/texture/effect/RL_SLUGSHOT/slug.str",
      "data/texture/effect/RL_STORM/S_STORM.str",
      "data/texture/effect/_devil.str",
      "data/texture/effect/ab_offertorium.str",
      "data/texture/effect/ab_offertorium_ring.str",
      "data/texture/effect/ac_concentration.str",
      "data/texture/effect/ado.str",
      "data/texture/effect/adrenaline.str",
      "data/texture/effect/aimed.str",
      "data/texture/effect/all_full_throttle.str",
      "data/texture/effect/allow.str",
      "data/texture/effect/angel.str",
      "data/texture/effect/angel_2nd.str",
      "data/texture/effect/angelus.str",
      "data/texture/effect/arrowshot.str",
      "data/texture/effect/arrowstorm.str",
      "data/texture/effect/aspersio.str",
      "data/texture/effect/assasin_poisonreact.str",
      "data/texture/effect/assasin_poisonreact_1st.str",
      "data/texture/effect/asum.str",
      "data/texture/effect/aura.str",
      "data/texture/effect/autocounter.str",
      "data/texture/effect/benedictio.str",
      "data/texture/effect/black_hammerfall.str",
      "data/texture/effect/black_maxmize.str",
      "data/texture/effect/black_sword_mini.str",
      "data/texture/effect/blast mine.str",
      "data/texture/effect/blastmine.str",
      "data/texture/effect/bowling.str",
      "data/texture/effect/brandish.str",
      "data/texture/effect/brandish2.str",
      "data/texture/effect/bs_refinefailed.str",
      "data/texture/effect/bs_refinesuccess.str",
      "data/texture/effect/bubble.str",
      "data/texture/effect/bubble1.str",
      "data/texture/effect/bubble1_1.str",
      "data/texture/effect/bubble2.str",
      "data/texture/effect/bubble2_1.str",
      "data/texture/effect/bubble3.str",
      "data/texture/effect/bubble3_1.str",
      "data/texture/effect/bubble4.str",
      "data/texture/effect/bubble4_1.str",
      "data/texture/effect/cart.str",
      "data/texture/effect/cartrevolution.str",
      "data/texture/effect/chainlight.str",
      "data/texture/effect/changematerial_fa.str",
      "data/texture/effect/changematerial_su.str",
      "data/texture/effect/chill.str",
      "data/texture/effect/claymore.str",
      "data/texture/effect/concentration.str",
      "data/texture/effect/cook_fail.str",
      "data/texture/effect/cook_suc.str",
      "data/texture/effect/crash earth.str",
      "data/texture/effect/crashearth.str",
      "data/texture/effect/crimson_r.str",
      "data/texture/effect/cross.str",
      "data/texture/effect/cure.str",
      "data/texture/effect/cure_min.str",
      "data/texture/effect/cwound.str",
      "data/texture/effect/dancingblade.str",
      "data/texture/effect/defense.str",
      "data/texture/effect/deffender.str",
      "data/texture/effect/detoxication.str",
      "data/texture/effect/devil.str",
      "data/texture/effect/devil_gas.str",
      "data/texture/effect/devotion.str",
      "data/texture/effect/dfear.str",
      "data/texture/effect/dragon_h.str",
      "data/texture/effect/dust.str",
      "data/texture/effect/earthhit.str",
      "data/texture/effect/enc_earth.str",
      "data/texture/effect/enc_fire.str",
      "data/texture/effect/enc_ice.str",
      "data/texture/effect/enc_wind.str",
      "data/texture/effect/energycoat.str",
      "data/texture/effect/enervation.str",
      "data/texture/effect/eraser_cutter.str",
      "data/texture/effect/ez_cure.str",
      "data/texture/effect/fire dragon.str",
      "data/texture/effect/fire.str",
      "data/texture/effect/firehit.str",
      "data/texture/effect/firehit1.str",
      "data/texture/effect/firehit2.str",
      "data/texture/effect/firehit3.str",
      "data/texture/effect/firepillar.str",
      "data/texture/effect/firepillarbomb.str",
      "data/texture/effect/firewall.str",
      "data/texture/effect/firewall1.str",
      "data/texture/effect/firewall2.str",
      "data/texture/effect/firewall_blue.str",
      "data/texture/effect/firewall_per.str",
      "data/texture/effect/firewall_sky.str",
      "data/texture/effect/flower_leaf.str",
      "data/texture/effect/flower_sesami.str",
      "data/texture/effect/flower_sesami2.str",
      "data/texture/effect/flower_sesami3.str",
      "data/texture/effect/flower_sesami4.str",
      "data/texture/effect/food_agi.str",
      "data/texture/effect/food_dex.str",
      "data/texture/effect/food_int.str",
      "data/texture/effect/food_luk.str",
      "data/texture/effect/food_str.str",
      "data/texture/effect/food_vit.str",
      "data/texture/effect/freeze.str",
      "data/texture/effect/freezed.str",
      "data/texture/effect/freezing.str",
      "data/texture/effect/fruit.str",
      "data/texture/effect/fruit_.str",
      "data/texture/effect/gaspush.str",
      "data/texture/effect/gc_darkcrow.str",
      "data/texture/effect/gloria.str",
      "data/texture/effect/gloria_min.str",
      "data/texture/effect/gn_illusiondoping.str",
      "data/texture/effect/groomy.str",
      "data/texture/effect/guardian.str",
      "data/texture/effect/h_levelup.str",
      "data/texture/effect/hell_in.str",
      "data/texture/effect/hit.str",
      "data/texture/effect/holy_cross.str",
      "data/texture/effect/holyhit.str",
      "data/texture/effect/homing.str",
      "data/texture/effect/hunter_loud.str",
      "data/texture/effect/hunter_poison.str",
      "data/texture/effect/hunter_shockwave_blue.str",
      "data/texture/effect/i_manus.str",
      "data/texture/effect/ice_status.str",
      "data/texture/effect/ice_status_crash.str",
      "data/texture/effect/ice_statusing.str",
      "data/texture/effect/icecrash.str",
      "data/texture/effect/icestatusing.str",
      "data/texture/effect/icy.str",
      "data/texture/effect/ignorance.str",
      "data/texture/effect/impisitio.str",
      "data/texture/effect/impositio.str",
      "data/texture/effect/invenom.str",
      "data/texture/effect/invincibleoff2.str",
      "data/texture/effect/itempokjuk.str",
      "data/texture/effect/joblvup.str",
      "data/texture/effect/jong.str",
      "data/texture/effect/jong_mini.str",
      "data/texture/effect/jyumonjikiri.str",
      "data/texture/effect/keeping.str",
      "data/texture/effect/kyrie.str",
      "data/texture/effect/kyrie_min.str",
      "data/texture/effect/landmine.str",
      "data/texture/effect/lauagnus.str",
      "data/texture/effect/laulamus.str",
      "data/texture/effect/lava_slide.str",
      "data/texture/effect/laziness.str",
      "data/texture/effect/lexaeterna.str",
      "data/texture/effect/lexaeterna_min.str",
      "data/texture/effect/lexdivina.str",
      "data/texture/effect/lightning.str",
      "data/texture/effect/lord.str",
      "data/texture/effect/loud.str",
      "data/texture/effect/maemor.str",
      "data/texture/effect/magical.str",
      "data/texture/effect/magician_safe.str",
      "data/texture/effect/magician_strorn.str",
      "data/texture/effect/magni_.str",
      "data/texture/effect/magnificat.str",
      "data/texture/effect/magnificat_min.str",
      "data/texture/effect/magnus.str",
      "data/texture/effect/mapae.str",
      "data/texture/effect/maximize power.str",
      "data/texture/effect/maximize_min.str",
      "data/texture/effect/maximizepower.str",
      "data/texture/effect/melt.str",
      "data/texture/effect/memor_min.str",
      "data/texture/effect/mentalbreak.str",
      "data/texture/effect/meteor1.str",
      "data/texture/effect/meteor2.str",
      "data/texture/effect/meteor3.str",
      "data/texture/effect/meteor4.str",
      "data/texture/effect/mid_frenzy.str",
      "data/texture/effect/mil_shield.str",
      "data/texture/effect/moonlight_1.str",
      "data/texture/effect/moonlight_2.str",
      "data/texture/effect/moonlight_3.str",
      "data/texture/effect/moonstar.str",
      "data/texture/effect/mvp.str",
      "data/texture/effect/nc_magma_eruption.str",
      "data/texture/effect/p_failed.str",
      "data/texture/effect/p_success.str",
      "data/texture/effect/pierce.str",
      "data/texture/effect/pneuma1.str",
      "data/texture/effect/pneuma2.str",
      "data/texture/effect/pneuma3.str",
      "data/texture/effect/poison.str",
      "data/texture/effect/poison_mist.str",
      "data/texture/effect/poisonreact.str",
      "data/texture/effect/poisonreact_1st.str",
      "data/texture/effect/poisonzone.str",
      "data/texture/effect/pokjuk_jap.str",
      "data/texture/effect/pong.str",
      "data/texture/effect/pong1.str",
      "data/texture/effect/pong2.str",
      "data/texture/effect/pong3.str",
      "data/texture/effect/powerswing.str",
      "data/texture/effect/proboc.str",
      "data/texture/effect/proboke.str",
      "data/texture/effect/providence.str",
      "data/texture/effect/provoke.str",
      "data/texture/effect/quagmire.str",
      "data/texture/effect/ramadan.str",
      "data/texture/effect/recovery.str",
      "data/texture/effect/red_cross.str",
      "data/texture/effect/repair weapon.str",
      "data/texture/effect/repairweapon.str",
      "data/texture/effect/resurrection.str",
      "data/texture/effect/resurrection_min.str",
      "data/texture/effect/rk_luxanima.str",
      "data/texture/effect/rl_fire_rain/fire_rain.str",
      "data/texture/effect/rune_fail.str",
      "data/texture/effect/rune_success.str",
      "data/texture/effect/rwc2011.str",
      "data/texture/effect/rwc2011_2.str",
      "data/texture/effect/safetywall.str",
      "data/texture/effect/sanctuary.str",
      "data/texture/effect/sandman.str",
      "data/texture/effect/setsudan.str",
      "data/texture/effect/shield_charge.str",
      "data/texture/effect/shockwave.str",
      "data/texture/effect/shockwavehit.str",
      "data/texture/effect/silence.str",
      "data/texture/effect/skidtrap.str",
      "data/texture/effect/sleep.str",
      "data/texture/effect/slowp.str",
      "data/texture/effect/so_elemental_shield.str",
      "data/texture/effect/sonic_claw.str",
      "data/texture/effect/sonicblow.str",
      "data/texture/effect/spear_step.str",
      "data/texture/effect/spearboomerang.str",
      "data/texture/effect/spearstab.str",
      "data/texture/effect/spell.str",
      "data/texture/effect/spring.str",
      "data/texture/effect/sr_flashcombo.str",
      "data/texture/effect/stay2.str",
      "data/texture/effect/steal_coin.str",
      "data/texture/effect/stonecurse.str",
      "data/texture/effect/storm gust.str",
      "data/texture/effect/storm_min.str",
      "data/texture/effect/stormgust.str",
      "data/texture/effect/strip_armor.str",
      "data/texture/effect/strip_helm.str",
      "data/texture/effect/strip_shield.str",
      "data/texture/effect/strip_weapon.str",
      "data/texture/effect/stun.str",
      "data/texture/effect/stun_effect.str",
      "data/texture/effect/suffragium.str",
      "data/texture/effect/suffragium_min.str",
      "data/texture/effect/sui_explosion.str",
      "data/texture/effect/suicide.str",
      "data/texture/effect/sword.str",
      "data/texture/effect/thief_invenom.str",
      "data/texture/effect/thunderstorm.str",
      "data/texture/effect/tinder.str",
      "data/texture/effect/twohand.str",
      "data/texture/effect/ufidel.str",
      "data/texture/effect/ufidel_pang.str",
      "data/texture/effect/unlucky.str",
      "data/texture/effect/vash00.str",
      "data/texture/effect/venomdust.str",
      "data/texture/effect/venomsplasher.str",
      "data/texture/effect/venomsplasher_1st.str",
      "data/texture/effect/venomsplasherafter.str",
      "data/texture/effect/weakness.str",
      "data/texture/effect/weapon perfection.str",
      "data/texture/effect/weaponperfection.str",
      "data/texture/effect/weaponperfection_min.str",
      "data/texture/effect/wideb.str",
      "data/texture/effect/windhit.str",
      "data/texture/effect/windhit1.str",
      "data/texture/effect/windhit2.str",
      "data/texture/effect/windhit3.str",
      "data/texture/effect/wl_telekinesis_intense.str",
      "data/texture/effect/yunta_1.str",
      "data/texture/effect/yunta_2.str",
      "data/texture/effect/yunta_3.str",
      "data/texture/effect/yunta_4.str",
      "data/texture/effect/yunta_5.str",
      "data/texture/effect/°¢¼º.str",
      "data/texture/effect/³ë¶õÆ÷¼Ç.str",
      "data/texture/effect/µð½ºÆç.str",
      "data/texture/effect/¸ÅÁ÷·Îµå.str",
      "data/texture/effect/¹ö¼­Å©.str",
      "data/texture/effect/ºÒ±æÇÑºÓÀº´Þºû.str",
      "data/texture/effect/ºÒ½º¾ÆÀÌ.str",
      "data/texture/effect/»¡°£Æ÷¼Ç.str",
      "data/texture/effect/»ç¶÷È¿°ú.str",
      "data/texture/effect/¼Ò¿ï¹ø.str",
      "data/texture/effect/¼ú½ÄÀü°³2.str",
      "data/texture/effect/¼ú½ÄÀü°³3.str",
      "data/texture/effect/¼ú½ÄÀü°³4.str",
      "data/texture/effect/¼ú½ÄÀü°³5.str",
      "data/texture/effect/¼ú½ÄÇØ¹æ.str",
      "data/texture/effect/¿¬È¯.str",
      "data/texture/effect/ÀÌ±×´Ï¼Çºê·¹ÀÌÅ©.str",
      "data/texture/effect/ÁÖÈ«Æ÷¼Ç.str",
      "data/texture/effect/ÁýÁß.str",
      "data/texture/effect/Âý½Ò¶±.str",
      "data/texture/effect/ÃÊ·ÏÆ÷¼Ç.str",
      "data/texture/effect/ÃÊ½Â´Þ2.str",
      "data/texture/effect/Æ®·¢Å·.str",
      "data/texture/effect/ÆÄ¶õÆ÷¼Ç.str",
      "data/texture/effect/ÇÏ¾áÆ÷¼Ç.str",
      "data/texture/effect/Çã¹«ÀÇ±×¸²ÀÚ.str",
      "data/texture/effect/Èå¸°´ÞºûÈ¯»ó2.str"
  ];

  const effectIds = {};

  effects.forEach(o=>{
    const effectId = o.replace('data/texture/effect/', '').replace('.str', '');
    effectIds[effectId] = o;
  });

  console.log(effectIds);

    function loadEffectList() {

      // Populate dropdown directly from array
      effectList.textContent = '';
      effects.forEach(function(path) {
        var option = document.createElement('option');
        option.value = path;
        option.textContent = path;
        effectList.appendChild(option);
      });

      effectsReady = true;
      effectList.disabled = false;
      updatePlayButton();
      setStatus(clientReady
        ? 'Client and effects ready. Choose an effect and press Play STR.'
        : 'Choose an effect, connect the client, then press Play STR.');
    }

    var gl;
    var sceneTexture;
    var sceneProgram;
    var sceneBuffer;
    var scenePosition;
    var sceneTexCoord;
    var sceneSampler;
    var sceneTextureWidth = 0;
    var sceneTextureHeight = 0;
    var clientReady = false;
    var effectsReady = false;
    var connecting = false;
    var activeEffects = [];      // was: var currentEffect = null;
    var lastEffectPath = '';
    var Thread;
    var Client;
    var StrEffect;
    var glMatrix;
    var projection;
    var modelView;
    var fog;
    var rendererBridge = {
      gl: null,
      getContext: function() {
        return this.gl;
      }
    };

    function updatePlayButton() {
      playButton.disabled = !clientReady || !effectsReady;
    }

    function createShader(type, source) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        var message = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(message || 'Could not compile the scene texture shader.');
      }
      return shader;
    }

    function createSceneResources() {
      var vertexShader = createShader(gl.VERTEX_SHADER, [
        'attribute vec2 aPosition;',
        'attribute vec2 aTexCoord;',
        'varying vec2 vTexCoord;',
        'void main(void) {',
        '  vTexCoord = aTexCoord;',
        '  gl_Position = vec4(aPosition, 0.0, 1.0);',
        '}'
      ].join('\n'));
      var fragmentShader = createShader(gl.FRAGMENT_SHADER, [
        'precision mediump float;',
        'uniform sampler2D uScene;',
        'varying vec2 vTexCoord;',
        'void main(void) {',
        '  gl_FragColor = texture2D(uScene, vTexCoord);',
        '}'
      ].join('\n'));

      sceneProgram = gl.createProgram();
      gl.attachShader(sceneProgram, vertexShader);
      gl.attachShader(sceneProgram, fragmentShader);
      gl.linkProgram(sceneProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      if (!gl.getProgramParameter(sceneProgram, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(sceneProgram) || 'Could not link the scene texture shader.');
      }

      scenePosition = gl.getAttribLocation(sceneProgram, 'aPosition');
      sceneTexCoord = gl.getAttribLocation(sceneProgram, 'aTexCoord');
      sceneSampler = gl.getUniformLocation(sceneProgram, 'uScene');
      sceneBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, sceneBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1, 0, 0,
        1, -1, 1, 0,
        -1, 1, 0, 1,
        1, 1, 1, 1
      ]), gl.STATIC_DRAW);

      sceneTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, sceneTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }

    function drawSceneTexture() {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, sceneTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      try {
        if (sceneTextureWidth !== gameCanvas.width || sceneTextureHeight !== gameCanvas.height) {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, gameCanvas);
          sceneTextureWidth = gameCanvas.width;
          sceneTextureHeight = gameCanvas.height;
        }
        else {
          gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, gameCanvas);
        }
      }
      finally {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      }

      gl.disable(gl.DEPTH_TEST);
      gl.disable(gl.BLEND);
      gl.depthMask(false);
      gl.useProgram(sceneProgram);
      gl.uniform1i(sceneSampler, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, sceneBuffer);
      gl.enableVertexAttribArray(scenePosition);
      gl.enableVertexAttribArray(sceneTexCoord);
      gl.vertexAttribPointer(scenePosition, 2, gl.FLOAT, false, 16, 0);
      gl.vertexAttribPointer(sceneTexCoord, 2, gl.FLOAT, false, 16, 8);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.disableVertexAttribArray(scenePosition);
      gl.disableVertexAttribArray(sceneTexCoord);
      gl.depthMask(true);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clear(gl.DEPTH_BUFFER_BIT);
    }

    // ---- CHANGE 2: playEffect now spawns a new instance instead of replacing ----
    // Small random offset so simultaneous instances don't perfectly overlap.
    // Set INSTANCE_SPREAD = 0 to spawn every instance at the exact same spot.
    var INSTANCE_SPREAD = 10;

    function randomOffset() {
      return [
        (Math.random() - 0.5) * INSTANCE_SPREAD,
        (Math.random() - 0.5) * INSTANCE_SPREAD,
        0,
      ];
    }

    function playEffectAt(filename, x, y, spread) {
      if (!filename) {
        setStatus('Choose an STR effect from the list or provide a valid effect ID.');
        return false;
      }
      if (!clientReady || !Client || !StrEffect) {
        setStatus('Connect the client before playing an STR effect.');
        console.error('Cannot play STR effect before the client is ready.');
        return false;
      }

      playButton.disabled = true;
      setStatus('Loading ' + filename + '…');
      Client.loadFile(filename, function(data) {
        if (!data) {
          playButton.disabled = false;
          setStatus('Could not load ' + filename + '. Check the client root and browser console.');
          return;
        }
        try {
          var spawnPosition = Number.isFinite(x) && Number.isFinite(y)
            ? { x: x, y: y }
            : getSpawnPosition ? getSpawnPosition() : { x: 0, y: 0 };
          var offset = spread ? randomOffset() : [0, 0, 0];
          var effect = new StrEffect(filename, [
            spawnPosition.x + offset[0] - 0.5,
            0,
            -(spawnPosition.y + offset[1]),
          ], Date.now());
          effect.init(gl);
          activeEffects.push({ effect: effect, path: filename });
          lastEffectPath = filename;
          playButton.disabled = false;
          setStatus('Playing ' + filename + ' (' + activeEffects.length + ' active).');
        }
        catch (error) {
          console.error('STR effect initialization failed:', error);
          playButton.disabled = false;
          setStatus('Failed to initialize ' + filename + ': ' + error.message);
          return;
        }
      }, function(error) {
        playButton.disabled = false;
        setStatus('Failed to load ' + filename + ': ' + (error || 'unknown error'));
      });
      return true;
    }

    function playEffect() {
      return playEffectAt(effectList.value, NaN, NaN, true);
    }

    function getEffectIds() {
      if (configuredEffectIds) {
        return configuredEffectIds;
      }
      if (window.effectIds) {
        return window.effectIds;
      }
      return typeof effectIds !== 'undefined' ? effectIds : null;
    }

    function playEffectInCoordinates(effectId, x, y) {
      var ids = getEffectIds();
      var filename = ids && ids[effectId];
      if (typeof filename !== 'string' || !filename) {
        setStatus('Unknown STR effect ID: ' + effectId);
        console.error('Unknown STR effect ID "' + effectId + '". Add it to effectIds.');
        return false;
      }
      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        setStatus('STR effect coordinates must be finite numbers.');
        console.error('STR effect coordinates must be finite numbers.', { x: x, y: y });
        return false;
      }
      return playEffectAt(filename, x, y, false);
    }

    function startClient() {
      if (connecting || clientReady) {
        return;
      }
      var remoteClient = rootInput.value.trim();
      if (!remoteClient) {
        setStatus('Enter the URL of your client asset root.');
        return;
      }
      if (remoteClient.charAt(remoteClient.length - 1) !== '/') {
        remoteClient += '/';
      }
      if (typeof window.require !== 'function' || typeof window.define !== 'function') {
        setStatus('The STR module bundle did not load. Check the game page network requests.');
        return;
      }
      connecting = true;
      connectButton.disabled = true;
      threadMode.disabled = true;
      setStatus('Connecting client loader (' + threadMode.value + ' mode)…');
      window.ROConfig = window.ROConfig || { development: false };
      window.ROConfig.remoteClient = remoteClient;
      window.ROConfig.threadWorker = new URL('https://planktonfun.github.io/3d-objects/Exports/ragnarok_mini_adventure_sprites/js/ThreadEventHandler.js', window.location.href).href;
      window.ROConfig.threadMode = threadMode.value;

      window.define('Renderer/Renderer', [], function() {
        return rendererBridge;
      });
      window.require.onError = function(error) {
        console.error('roBrowser STR module load failed:', error);
        setStatus('roBrowser module load failed: ' + error.message);
        connectButton.disabled = false;
        threadMode.disabled = false;
        connecting = false;
      };
      window.require({
        baseUrl: '../src/',
        paths: {
          text: 'Vendors/text.require',
          jquery: 'Vendors/jquery-1.9.1'
        }
      }, [
        'Core/Thread',
        'Core/Configs',
        'Core/Client',
        'Utils/gl-matrix',
        'Renderer/Effects/StrEffect',
        'Renderer/Renderer'
      ], function(thread, configs, client, matrix, strEffect, renderer) {
        Thread = thread;
        Client = client;
        glMatrix = matrix;
        StrEffect = strEffect;
        configs.set('remoteClient', remoteClient);
        configs.set('threadMode', threadMode.value);
        configs.set('threadWorker', window.ROConfig.threadWorker);
        if (typeof Thread.configure === 'function') {
          Thread.configure(threadMode.value, window.ROConfig.threadWorker);
        }
        else if (threadMode.value === 'main') {
          connecting = false;
          connectButton.disabled = false;
          threadMode.disabled = false;
          setStatus('This STR bundle does not support main-thread loading. Rebuild and redeploy str-canvas.bundle.js together with str-effects.js.');
          return;
        }
        StrEffect.setBlendMode(blendMode.value);
        rendererBridge = renderer;
        rendererBridge.gl = gl;
        projection = glMatrix.mat4.create();
        modelView = glMatrix.mat4.create();
        fog = {
          use: false,
          exist: true,
          near: 180,
          far: 30,
          factor: 1,
          color: new Float32Array([1, 1, 1])
        };

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        StrEffect.init(gl);

        Thread.hook('THREAD_READY', function() {
          Client.onFilesLoaded = function() {
            clientReady = true;
            connecting = false;
            connectButton.textContent = 'Client connected';
            updatePlayButton();
            setStatus(effectsReady
              ? 'Client and effects ready. Choose an effect and press Play STR.'
              : 'Client ready; loading effects.txt…');
          };
          Thread.hook('THREAD_ERROR', function(error) {
            console.error('roBrowser client worker error:', error);
            connecting = false;
            connectButton.disabled = false;
            setStatus('Client worker error. See the browser console.');
          });
          Thread.hook('THREAD_LOG', function(message) {
            console.warn('roBrowser client asset warning:', message);
          });
          Client.init([]);
        });
        try {
          Thread.init();
        }
        catch (error) {
          console.error('roBrowser client worker could not start:', error);
          connecting = false;
          connectButton.disabled = false;
          threadMode.disabled = false;
          setStatus('Could not start the client loader: ' + error.message);
        }
      });
    }

    try {
      host.insertBefore(effectsCanvas, panel);
      gl = effectsCanvas.getContext('webgl', {
        alpha: true,
        depth: true,
        stencil: false,
        antialias: true,
        premultipliedAlpha: false
      }) || effectsCanvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL is unavailable; the game will continue using its 2D canvas.');
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clearDepth(1);
      createSceneResources();
    }
    catch (error) {
      console.error('STR WebGL setup failed:', error);
      setStatus(error.message);
      effectsCanvas.remove();
      loadEffectList();
      return {
        render: function() {},
        dispose: function() {
          panel.remove();
        }
      };
    }

    blendMode.addEventListener('change', function() {
      if (StrEffect) {
        StrEffect.setBlendMode(blendMode.value);
      }
    });
    connectButton.addEventListener('click', startClient);
    playButton.addEventListener('click', playEffect);
    nextButton.addEventListener('click', ()=>{
      const select = panel.querySelector('[data-str-effect]');

      if (select && select.selectedIndex < select.options.length - 1) {
        select.selectedIndex++;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }

      playEffect();
    });
    backButton.addEventListener('click', ()=>{
      const select = panel.querySelector('[data-str-effect]');

      if (select && select.selectedIndex > 0) {
        select.selectedIndex--;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }

      playEffect();
    });
    loadEffectList();
    startClient();
    // ---- CHANGE 3: render loops over every live instance ----
    function render() {
      if (!gl || gl.isContextLost()) {
        return;
      }
      var width = Math.max(1, gameCanvas.width);
      var height = Math.max(1, gameCanvas.height);
      if (effectsCanvas.width !== width || effectsCanvas.height !== height) {
        effectsCanvas.width = width;
        effectsCanvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      try {
        drawSceneTexture();
        gameCanvas.style.visibility = 'hidden';
      }
      catch (error) {
        console.error('STR scene texture upload failed:', error);
        gameCanvas.style.visibility = '';
        effectsCanvas.style.display = 'none';
        setStatus('Could not upload the game canvas to WebGL: ' + error.message);
        return;
      }

      if (!activeEffects.length) {
        return;
      }

      var view = getCameraTransform ? getCameraTransform() : null;
      var zoom = view && Number.isFinite(view.zoom) && view.zoom > 0 ? view.zoom : 1;
      var rotation = view && view.rotation ? view.rotation : { a: 1, b: 0, c: 0, d: 1 };
      var pivot = view && view.pivot ? view.pivot : { x: 0, y: 0 };
      var cameraX = view && Number.isFinite(view.x) ? view.x : 0;
      var cameraY = view && Number.isFinite(view.y) ? view.y : 0;
      var pixelRatio = 1 / 35;
      var originX = pivot.x - rotation.a * pivot.x - rotation.c * pivot.y - cameraX;
      var originY = pivot.y - rotation.b * pivot.x - rotation.d * pivot.y - cameraY;

      glMatrix.mat4.ortho(
        projection,
        0,
        width / (35 * zoom),
        0,
        height / (35 * zoom),
        -100,
        100
      );
      glMatrix.mat4.identity(modelView);
      modelView[0] = rotation.a * pixelRatio;
      modelView[1] = -rotation.b * pixelRatio;
      modelView[4] = rotation.c * pixelRatio;
      modelView[5] = -rotation.d * pixelRatio;
      modelView[8] = 0;
      modelView[9] = 0;
      modelView[12] = originX * pixelRatio;
      modelView[13] = height / (35 * zoom) - originY * pixelRatio;

      var now = Date.now();
      var batchReady = true;
      try {
        StrEffect.beforeRender(gl, modelView, projection, fog, now);
      }
      catch (error) {
        batchReady = false;
        console.error('STR batch setup failed:', error);
        setStatus('STR effect rendering failed: ' + error.message);
      }

      if (batchReady) {
        for (var i = activeEffects.length - 1; i >= 0; i--) {
          var entry = activeEffects[i];
          try {
            entry.effect.render(gl, now);
          }
          catch (error) {
            console.error('STR effect rendering failed:', error);
            try {
              entry.effect.free(gl);
            }
            catch (cleanupError) {
              console.error('STR effect cleanup failed:', cleanupError);
            }
            activeEffects.splice(i, 1);
            setStatus('STR effect rendering failed: ' + error.message);
          }
        }
      }

      try {
        StrEffect.afterRender(gl);
      }
      catch (error) {
        console.error('STR state cleanup failed:', error);
      }

      // Retire instances that finished playing.
      var finished = 0;
      for (var j = activeEffects.length - 1; j >= 0; j--) {
        var done = activeEffects[j];
        if (done.effect.needCleanUp) {
          done.effect.free(gl);
          activeEffects.splice(j, 1);
          finished++;
        }
      }
      if (finished && !activeEffects.length) {
        setStatus(lastEffectPath + ' finished.');
      }
    }

    effectsCanvas.addEventListener('webglcontextlost', function(event) {
      event.preventDefault();
      gameCanvas.style.visibility = '';
      effectsCanvas.style.display = 'none';
      setStatus('WebGL context was lost. The game is visible on its 2D canvas.');
    });

    window.playEffectInCoordinates = playEffectInCoordinates;
    return {
      render: render,
      playEffectInCoordinates: playEffectInCoordinates,
      dispose: function() {
        if (gl && !gl.isContextLost()) {
          for (var i = activeEffects.length - 1; i >= 0; i--) {
            try {
              activeEffects[i].effect.free(gl);
            }
            catch (error) {
              console.error('STR effect cleanup failed:', error);
            }
          }
          activeEffects.length = 0;
          if (StrEffect) {
            StrEffect.free(gl);
          }
        }
        activeEffects.length = 0;
        gameCanvas.style.visibility = '';
        effectsCanvas.remove();
        panel.remove();
        if (window.playEffectInCoordinates === playEffectInCoordinates) {
          delete window.playEffectInCoordinates;
        }
      }
    };
  }

  window.StrCanvasEffects = { create: create };
}());
