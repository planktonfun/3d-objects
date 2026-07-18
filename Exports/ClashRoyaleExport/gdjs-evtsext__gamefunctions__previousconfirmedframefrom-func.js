
if (typeof gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom !== "undefined") {
  gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom = {};
gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.userFunc0x8ee1d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let rollbackStart = eventsFunctionContext.getArgument("RollbackFrame");

while (!gdjs.__confirmed.has(rollbackStart) && rollbackStart > 0) rollbackStart--;

eventsFunctionContext.returnValue = rollbackStart;
};
gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.userFunc0x8ee1d0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.func = function(runtimeScene, RollbackFrame, parentEventsFunctionContext) {
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
if (argName === "RollbackFrame") return RollbackFrame;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__GameFunctions__PreviousConfirmedFrameFrom.registeredGdjsCallbacks = [];