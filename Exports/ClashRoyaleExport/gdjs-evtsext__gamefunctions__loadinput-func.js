
if (typeof gdjs.evtsExt__GameFunctions__LoadInput !== "undefined") {
  gdjs.evtsExt__GameFunctions__LoadInput.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__LoadInput = {};
gdjs.evtsExt__GameFunctions__LoadInput.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__LoadInput.userFunc0x9bdda0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const frame = eventsFunctionContext.getArgument('Frame');

eventsFunctionContext.getArgument('Output').fromJSObject(gdjs.__inputBuffer.get(frame));
};
gdjs.evtsExt__GameFunctions__LoadInput.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GameFunctions__LoadInput.userFunc0x9bdda0(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__GameFunctions__LoadInput.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GameFunctions__Initialize.func(runtimeScene, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GameFunctions__LoadInput.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GameFunctions__LoadInput.func = function(runtimeScene, Output, Frame, parentEventsFunctionContext) {
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
if (argName === "Output") return Output;
if (argName === "Frame") return Frame;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__LoadInput.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GameFunctions__LoadInput.registeredGdjsCallbacks = [];