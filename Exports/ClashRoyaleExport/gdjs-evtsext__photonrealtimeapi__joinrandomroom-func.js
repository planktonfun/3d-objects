
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom = {};
gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.userFunc0x1896830 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._photonClientExtension.client.isInLobby()) {
    gdjs._photonClientExtension.client.joinRandomOrCreateRoom();
    gdjs._photonClientExtension.log("Joining random room...");
} else {
    gdjs._photonClientExtension.log("Not connected yet!");
}
};
gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.userFunc0x1896830(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PhotonRealtimeAPI__IsConnected.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__JoinRandomRoom.registeredGdjsCallbacks = [];