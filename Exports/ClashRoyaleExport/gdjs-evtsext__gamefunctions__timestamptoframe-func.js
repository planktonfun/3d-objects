
if (typeof gdjs.evtsExt__GameFunctions__TimestampToFrame !== "undefined") {
  gdjs.evtsExt__GameFunctions__TimestampToFrame.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__TimestampToFrame = {};
gdjs.evtsExt__GameFunctions__TimestampToFrame.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__TimestampToFrame.userFunc0x156b8e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function getFrameFromTimestamps(startTimestamp, currentTimestamp, frameRate) {
  const elapsed = currentTimestamp - startTimestamp;
  return Math.floor(elapsed / (1000 / frameRate));
}

const start = eventsFunctionContext.getArgument("StartTimestamp");       // ms
const now = eventsFunctionContext.getArgument("CurrentTimestamp");        // ms
const frameRate = eventsFunctionContext.getArgument("FrameRate");

eventsFunctionContext.returnValue = getFrameFromTimestamps(start, now, frameRate);

};
gdjs.evtsExt__GameFunctions__TimestampToFrame.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__GameFunctions__TimestampToFrame.userFunc0x156b8e8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GameFunctions__TimestampToFrame.func = function(runtimeScene, FrameRate, StartTimestamp, CurrentTimestamp, parentEventsFunctionContext) {
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
if (argName === "FrameRate") return FrameRate;
if (argName === "StartTimestamp") return StartTimestamp;
if (argName === "CurrentTimestamp") return CurrentTimestamp;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__TimestampToFrame.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__GameFunctions__TimestampToFrame.registeredGdjsCallbacks = [];