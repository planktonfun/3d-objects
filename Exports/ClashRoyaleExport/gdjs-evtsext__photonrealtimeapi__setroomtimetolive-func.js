
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive = {};
gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.userFunc0x18794b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

const milliseconds = eventsFunctionContext.getArgument('Milliseconds');

gdjs._photonClientExtension.client.myRoom().setRoomTTL(milliseconds);
};
gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.userFunc0x18794b0(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PhotonRealtimeAPI__IsInRoom.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.func = function(runtimeScene, Milliseconds, parentEventsFunctionContext) {
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
if (argName === "Milliseconds") return Milliseconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__SetRoomTimeToLive.registeredGdjsCallbacks = [];