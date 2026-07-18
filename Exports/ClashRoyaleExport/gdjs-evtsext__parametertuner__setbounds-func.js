
if (typeof gdjs.evtsExt__ParameterTuner__SetBounds !== "undefined") {
  gdjs.evtsExt__ParameterTuner__SetBounds.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParameterTuner__SetBounds = {};
gdjs.evtsExt__ParameterTuner__SetBounds.idToCallbackMap = new Map();


gdjs.evtsExt__ParameterTuner__SetBounds.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.getArgument("Id")).setNumber(eventsFunctionContext.getArgument("MaxValue"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getChild(eventsFunctionContext.getArgument("Id")).setNumber(eventsFunctionContext.getArgument("MinValue"));
}
}

}


};

gdjs.evtsExt__ParameterTuner__SetBounds.func = function(runtimeScene, MinValue, MaxValue, Id, parentEventsFunctionContext) {
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
if (argName === "MinValue") return MinValue;
if (argName === "MaxValue") return MaxValue;
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ParameterTuner__SetBounds.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ParameterTuner__SetBounds.registeredGdjsCallbacks = [];