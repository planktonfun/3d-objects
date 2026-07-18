
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents = {};
gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.userFunc0x15af720 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._photonClientExtension.data.positionRecieved = false;
gdjs._photonClientExtension.data.position = null;
gdjs._photonClientExtension.data.hasEvent = false;
gdjs._photonClientExtension.data.hasActorJoined = false;
gdjs._photonClientExtension.data.content = null;
gdjs._photonClientExtension.data.code = null;
gdjs._photonClientExtension.data.actorNr = null;
gdjs._photonClientExtension.data.actorJoined = null;
gdjs._photonClientExtension.data.hasActorLeft = false;
gdjs._photonClientExtension.data.actorLeft = null;
gdjs._photonClientExtension.data.roomUpdated = false;
};
gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.userFunc0x15af720(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__PhotonRealtimeAPI__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
