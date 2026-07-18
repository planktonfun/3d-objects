
if (typeof gdjs.evtsExt__JsonLoader__IsJSFileLoaded !== "undefined") {
  gdjs.evtsExt__JsonLoader__IsJSFileLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JsonLoader__IsJSFileLoaded = {};
gdjs.evtsExt__JsonLoader__IsJSFileLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__JsonLoader__IsJSFileLoaded.userFunc0x19412d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const url = eventsFunctionContext.getArgument("URL");

eventsFunctionContext.returnValue = window.loadedJS[url];
};
gdjs.evtsExt__JsonLoader__IsJSFileLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__JsonLoader__IsJSFileLoaded.userFunc0x19412d8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__JsonLoader__IsJSFileLoaded.func = function(runtimeScene, URL, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("JsonLoader"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("JsonLoader"),
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
if (argName === "URL") return URL;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__JsonLoader__IsJSFileLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__JsonLoader__IsJSFileLoaded.registeredGdjsCallbacks = [];