
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent = {};
gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.userFunc0x1a64d70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(gdjs._photonClientExtension.data.eventStack.length > 0) {
    gdjs._photonClientExtension.data.hasEvent = true;
    const {content, code, actorNr} = gdjs._photonClientExtension.data.eventStack.shift();
    gdjs._photonClientExtension.data.content = content;
    gdjs._photonClientExtension.data.code = code;
    gdjs._photonClientExtension.data.actorNr = actorNr;
} else {
    gdjs._photonClientExtension.data.hasEvent = false;
}

eventsFunctionContext.returnValue = gdjs._photonClientExtension.data.hasEvent;
};
gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.userFunc0x1a64d70(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PhotonRealtimeAPI__OnPhotonEvent.registeredGdjsCallbacks = [];