
if (typeof gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData = {};
gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.userFunc0x156b8e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Storing Persistent User Data
async function saveUserData(key, value) {
    try {
        await CrazyGames.SDK.data.setItem(key, value);
        console.log(`Data saved: ${key} = ${value}`);
    } catch (error) {
        console.error("Error saving user data:", error);
        gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
    }
}

const key = eventsFunctionContext.getArgument('Id').toString();
const value = eventsFunctionContext.getArgument('Value').valueOf();

saveUserData(key, value);
};
gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.userFunc0x156b8e8(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.func = function(runtimeScene, Id, Value, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CrazyGamesAdApi__SaveSessionData.registeredGdjsCallbacks = [];