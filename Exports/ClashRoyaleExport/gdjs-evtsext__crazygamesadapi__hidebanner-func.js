
if (typeof gdjs.evtsExt__CrazyGamesAdApi__HideBanner !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__HideBanner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__HideBanner = {};
gdjs.evtsExt__CrazyGamesAdApi__HideBanner.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__HideBanner.userFunc0x19ce220 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const bannerName = eventsFunctionContext.getArgument("BannerName");
CrazyGames.SDK.banner.clearBanner(bannerName);

};
gdjs.evtsExt__CrazyGamesAdApi__HideBanner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__HideBanner.userFunc0x19ce220(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__HideBanner.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__HideBanner.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__HideBanner.func = function(runtimeScene, BannerName, parentEventsFunctionContext) {
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
if (argName === "BannerName") return BannerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__HideBanner.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CrazyGamesAdApi__HideBanner.registeredGdjsCallbacks = [];