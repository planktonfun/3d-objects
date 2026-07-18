
if (typeof gdjs.evtsExt__ParameterTuner__TuneMidValue !== "undefined") {
  gdjs.evtsExt__ParameterTuner__TuneMidValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParameterTuner__TuneMidValue = {};
gdjs.evtsExt__ParameterTuner__TuneMidValue.idToCallbackMap = new Map();


gdjs.evtsExt__ParameterTuner__TuneMidValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3), eventsFunctionContext.getArgument("Id")));
if (isConditionTrue_0) {
{gdjs.evtsExt__ParameterTuner__SetBounds.func(runtimeScene, 0, 4, eventsFunctionContext.getArgument("Id"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = Math.round((eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getChild(eventsFunctionContext.getArgument("Id")).getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.getArgument("Id")).getAsNumber()) / 2);}
}

}


};

gdjs.evtsExt__ParameterTuner__TuneMidValue.func = function(runtimeScene, Id, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ParameterTuner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ParameterTuner"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ParameterTuner__TuneMidValue.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ParameterTuner__TuneMidValue.registeredGdjsCallbacks = [];