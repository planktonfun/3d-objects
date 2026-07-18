
if (typeof gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd = {};
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x1a81078 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");
const adType = eventsFunctionContext.getArgument("AdType");
const volume = runtimeScene.getSoundManager().getGlobalVolume();

try {
    CrazyGames.SDK.ad.requestAd(adType, {
        adStarted: () => {
            gdjs._crazyGamesExtension.isPlayingVideoAd = true;
            runtimeScene.getSoundManager().setGlobalVolume(0);
            gdjs._crazyGamesExtension.adHadAnError = false;
        },
        adFinished: () => {
            gdjs._crazyGamesExtension.hasVideoAdJustFinishedPlaying = true;
            gdjs._crazyGamesExtension.isPlayingVideoAd = false;
            gdjs._crazyGamesExtension.adHadAnError = false;
            if (runtimeScene.getSoundManager().getGlobalVolume() === 0) {
                runtimeScene.getSoundManager().setGlobalVolume(volume);
            }
            eventsFunctionContext.task.resolve();
        },
        adError: (error, errorData) => {
            gdjs._crazyGamesExtension.isPlayingVideoAd = false;
            gdjs._crazyGamesExtension.hasVideoAdJustFinishedPlaying = true;
            gdjs._crazyGamesExtension.adHadAnError = true;
            gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
            if (runtimeScene.getSoundManager().getGlobalVolume() === 0) {
                runtimeScene.getSoundManager().setGlobalVolume(volume);
            }
            //logger.error(`Error ${adType} ad (callback): `, JSON.stringify(error), errorData); // causes a blocker error
            eventsFunctionContext.task.resolve();
        },
    });

} catch (e) {
    console.error("Unexpected error displaying ad:", e);
    eventsFunctionContext.task.resolve();
}
};
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x1a81078(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.func = function(runtimeScene, AdType, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "AdType") return AdType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks = [];