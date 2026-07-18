
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString = {};
gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.userFunc0x15a7958 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function setPlayerProperty(actorId, propertyName, value) {
    const actor = gdjs._photonClientExtension.client.myRoomActors()[actorId];
    if (actor) {
        actor.setCustomProperty(propertyName, value);
    }
}

const actorId = eventsFunctionContext.getArgument('ActorId');
const propertyName = eventsFunctionContext.getArgument('PropertyName');
const value = eventsFunctionContext.getArgument('Value');

setPlayerProperty(actorId, propertyName, value);

};
gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.userFunc0x15a7958(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PhotonRealtimeAPI__IsConnected.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.func = function(runtimeScene, ActorId, PropertyName, Value, parentEventsFunctionContext) {
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
if (argName === "ActorId") return ActorId;
if (argName === "PropertyName") return PropertyName;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__SetPlayerPropertyString.registeredGdjsCallbacks = [];