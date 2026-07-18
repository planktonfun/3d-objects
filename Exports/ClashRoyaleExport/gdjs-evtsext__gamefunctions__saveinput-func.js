
if (typeof gdjs.evtsExt__GameFunctions__SaveInput !== "undefined") {
  gdjs.evtsExt__GameFunctions__SaveInput.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__SaveInput = {};
gdjs.evtsExt__GameFunctions__SaveInput.idToCallbackMap = new Map();


gdjs.evtsExt__GameFunctions__SaveInput.userFunc0x8e7c60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const input = eventsFunctionContext.getArgument('Input').toJSObject();
const frame = eventsFunctionContext.getArgument('Frame');

gdjs.__inputBuffer.set(frame, input);
};
gdjs.evtsExt__GameFunctions__SaveInput.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GameFunctions__SaveInput.userFunc0x8e7c60(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__GameFunctions__SaveInput.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__GameFunctions__Initialize.func(runtimeScene, eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__GameFunctions__SaveInput.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GameFunctions__SaveInput.func = function(runtimeScene, Input, Frame, parentEventsFunctionContext) {
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
if (argName === "Input") return Input;
if (argName === "Frame") return Frame;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameFunctions__SaveInput.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GameFunctions__SaveInput.registeredGdjsCallbacks = [];