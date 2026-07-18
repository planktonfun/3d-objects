
if (typeof gdjs.evtsExt__GameFunctions__FrameLengthening !== "undefined") {
  gdjs.evtsExt__GameFunctions__FrameLengthening.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__FrameLengthening = {};
gdjs.evtsExt__GameFunctions__FrameLengthening.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__FrameLengthening.userFunc0x8f0d30 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function convertFrame(frame, sourceFrameRate = 30, targetFrameRate = 60) {
  // Calculate time in seconds
  const timeInSeconds = frame / sourceFrameRate;
  // Convert to frame number at target frame rate
  return Math.round(timeInSeconds * targetFrameRate);
}

function slowByFrame(frame, frameRate=60, lowerFrameRate=10) {
    return convertFrame(convertFrame(frame,frameRate,lowerFrameRate),lowerFrameRate,frameRate);
}


const frame = eventsFunctionContext.getArgument('Frame');
const frameRate = eventsFunctionContext.getArgument('FrameRate');
const reducedFrameRate = eventsFunctionContext.getArgument('ReducedFrameRate');
eventsFunctionContext.returnValue = slowByFrame(frame, frameRate, reducedFrameRate);
};
gdjs.evtsExt__GameFunctions__FrameLengthening.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__GameFunctions__FrameLengthening.userFunc0x8f0d30(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__GameFunctions__FrameLengthening.func = function(runtimeScene, Frame, FrameRate, ReducedFrameRate, parentEventsFunctionContext) {
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
if (argName === "Frame") return Frame;
if (argName === "FrameRate") return FrameRate;
if (argName === "ReducedFrameRate") return ReducedFrameRate;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__FrameLengthening.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__GameFunctions__FrameLengthening.registeredGdjsCallbacks = [];