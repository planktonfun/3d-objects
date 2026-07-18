
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject = {};
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.idToCallbackMap = new Map();
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects1= [];
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects2= [];


gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.userFunc0x1a320a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
gdjs._photonClientExtension.logObject = objects[0];

gdjs._photonClientExtension.log = function(message) {
    const lastMessage = objects[0].getString();
    objects[0].setString(lastMessage + "\n" + message);
}
};
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("TextObject"), gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects1);

const objects = gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects1;
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.userFunc0x1a320a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.func = function(runtimeScene, TextObject, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"TextObject": TextObject
},
  _objectArraysMap: {
"TextObject": gdjs.objectsListsToArray(TextObject)
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

gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects1.length = 0;
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects2.length = 0;

gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects1.length = 0;
gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.GDTextObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__SetLogObject.registeredGdjsCallbacks = [];