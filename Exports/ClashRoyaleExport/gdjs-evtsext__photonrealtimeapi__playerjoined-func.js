
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined = {};
gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.userFunc0x9d3740 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = gdjs._photonClientExtension.data.actorJoined
};
gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.userFunc0x9d3740(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhotonRealtimeAPI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhotonRealtimeAPI"),
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


gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PhotonRealtimeAPI__PlayerJoined.registeredGdjsCallbacks = [];