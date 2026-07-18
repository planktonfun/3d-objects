
if (typeof gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL !== "undefined") {
  gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL = {};
gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.idToCallbackMap = new Map();


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.userFunc0x9539c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async () => {
    const SceneVariableName = await fetchJSON(eventsFunctionContext.getArgument("URL"));
    console.log({SceneVariableName});

    eventsFunctionContext
    .getArgument("SceneVariable")
    .fromJSObject(SceneVariableName);
})();

};
gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.userFunc0x9539c8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.func = function(runtimeScene, URL, SceneVariable, parentEventsFunctionContext) {
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
if (argName === "SceneVariable") return SceneVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__JsonLoader__LoadJSONFileFromURL.registeredGdjsCallbacks = [];