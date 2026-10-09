(function() {
  'use strict';

  function create(options) {
    var gameCanvas = options.canvas;
    var host = options.host;
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

    function loadEffectList() {
      fetch(new URL('./effects.txt', window.location.href))
        .then(function(response) {
          if (!response.ok) {
            throw new Error('HTTP ' + response.status + ' loading effects.txt');
          }
          return response.json();
        })
        .then(function(paths) {
          if (!Array.isArray(paths)) {
            throw new Error('effects.txt must contain a JSON array of STR paths.');
          }
          paths = paths.filter(function(path) {
            return typeof path === 'string' && /\.str$/i.test(path);
          });
          if (!paths.length) {
            throw new Error('effects.txt contains no STR paths.');
          }

          effectList.textContent = '';
          paths.forEach(function(path) {
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
        })
        .catch(function(error) {
          console.error('STR effect list failed to load:', error);
          effectList.textContent = '';
          var option = document.createElement('option');
          option.textContent = 'Could not load effects.txt';
          effectList.appendChild(option);
          effectList.disabled = true;
          updatePlayButton();
          setStatus(error.message);
        });
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
    var currentEffect = null;
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

    function playEffect() {
      var filename = effectList.value;
      if (!filename) {
        setStatus('Choose an STR effect from the list.');
        return;
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
          if (currentEffect) {
            currentEffect.free(gl);
          }
          currentEffect = new StrEffect(filename, [0, 0, 0], Date.now());
          currentEffect.init(gl);
          lastEffectPath = filename;
          playButton.disabled = false;
          setStatus('Playing ' + filename + '.');
        }
        catch (error) {
          console.error('STR effect initialization failed:', error);
          currentEffect = null;
          playButton.disabled = false;
          setStatus('Failed to initialize ' + filename + ': ' + error.message);
        }
      }, function(error) {
        playButton.disabled = false;
        setStatus('Failed to load ' + filename + ': ' + (error || 'unknown error'));
      });
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
      window.ROConfig.threadWorker = new URL('ThreadEventHandler.js', window.location.href).href;
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

      if (!currentEffect) {
        return;
      }
      glMatrix.mat4.perspective(15, width / height, 1, 1000, projection);
      glMatrix.mat4.identity(modelView);
      glMatrix.mat4.translate(modelView, modelView, [0, -3, -50]);
      glMatrix.mat4.rotateX(modelView, modelView, 50 / 180 * Math.PI);
      var effectError = null;
      try {
        StrEffect.beforeRender(gl, modelView, projection, fog, Date.now());
        currentEffect.render(gl, Date.now());
      }
      catch (error) {
        effectError = error;
      }
      finally {
        try {
          StrEffect.afterRender(gl);
        }
        catch (error) {
          if (effectError) {
            console.error('STR state cleanup failed:', error);
          }
          else {
            effectError = error;
          }
        }
      }
      if (effectError) {
        console.error('STR effect rendering failed:', effectError);
        var failedEffect = currentEffect;
        currentEffect = null;
        try {
          failedEffect.free(gl);
        }
        catch (error) {
          console.error('STR effect cleanup failed:', error);
        }
        setStatus('STR effect rendering failed: ' + effectError.message);
        return;
      }

      if (currentEffect && currentEffect.needCleanUp) {
        currentEffect.free(gl);
        currentEffect = null;
        setStatus(lastEffectPath + ' finished.');
      }
    }

    effectsCanvas.addEventListener('webglcontextlost', function(event) {
      event.preventDefault();
      gameCanvas.style.visibility = '';
      effectsCanvas.style.display = 'none';
      setStatus('WebGL context was lost. The game is visible on its 2D canvas.');
    });

    return {
      render: render,
      dispose: function() {
        if (currentEffect && gl && !gl.isContextLost()) {
          currentEffect.free(gl);
          currentEffect = null;
        }
        if (StrEffect && gl && !gl.isContextLost()) {
          StrEffect.free(gl);
        }
        gameCanvas.style.visibility = '';
        effectsCanvas.remove();
        panel.remove();
      }
    };
  }

  window.StrCanvasEffects = { create: create };
}());
