
if (typeof gdjs.evtsExt__GameFunctions__Initialize !== "undefined") {
  gdjs.evtsExt__GameFunctions__Initialize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__Initialize = {};
gdjs.evtsExt__GameFunctions__Initialize.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__Initialize.userFunc0x8e5230 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(gdjs.__snapshotBuffer) return;

class RingBuffer {
    constructor(size) {
        this.size = size;
        this.buffer = Array(size);
    }
    set(frame, data) {
        this.buffer[frame % this.size] = { frame, data };
    }
    get(frame) {
        const entry = this.buffer[frame % this.size];
        return entry?.frame === frame ? entry.data : null;
    }
}

const MAX_FRAMES = 300;

gdjs.__snapshotBuffer = new RingBuffer(MAX_FRAMES);
gdjs.__inputBuffer = new RingBuffer(MAX_FRAMES);
};
gdjs.evtsExt__GameFunctions__Initialize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GameFunctions__Initialize.userFunc0x8e5230(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GameFunctions__Initialize.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameFunctions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameFunctions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__Initialize.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GameFunctions__Initialize.registeredGdjsCallbacks = [];