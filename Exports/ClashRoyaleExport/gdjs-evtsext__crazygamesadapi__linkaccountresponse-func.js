
if (typeof gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse = {};
gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.userFunc0x1acf280 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = gdjs._crazyGamesExtension.linkAccountResponse;
};
gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.userFunc0x1acf280(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CrazyGamesAdApi"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CrazyGamesAdApi"),
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


gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CrazyGamesAdApi__LinkAccountResponse.registeredGdjsCallbacks = [];