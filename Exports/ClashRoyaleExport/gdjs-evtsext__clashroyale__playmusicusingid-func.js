
if (typeof gdjs.evtsExt__ClashRoyale__PlayMusicUsingId !== "undefined") {
  gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ClashRoyale__PlayMusicUsingId = {};
gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.idToCallbackMap = new Map();


gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.userFunc0x18fafa0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const soundId = eventsFunctionContext.getArgument("SoundID").toString().trim();
const soundProperties = runtimeScene.getGame().getVariables().get('MusicFileMap').toJSObject();

if(soundProperties[soundId] == undefined) return;

// console.log(soundProperties[soundId])
const soundFile = soundProperties[soundId].FileName.replaceAll('/', '\\');
const loop = soundProperties[soundId].Loop == true ? true: false;
const volume = soundProperties[soundId].Volume;

gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, soundFile, 1, loop, volume, 1);

};
gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.userFunc0x18fafa0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.func = function(runtimeScene, SoundID, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
if (argName === "SoundID") return SoundID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.registeredGdjsCallbacks = [];