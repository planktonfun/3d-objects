
if (typeof gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition !== "undefined") {
  gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition = {};
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects3= [];


gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.asyncCallback28267804 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.idToCallbackMap.set(28267804, gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.asyncCallback28267804);
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.getArgument("Seconds")), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.asyncCallback28267804(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28267804, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Destroy");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1, gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectAngleTween2("a", eventsFunctionContext.getArgument("Angle"), "linear", eventsFunctionContext.getArgument("Seconds"), true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Destroy");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1, gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectAngleTween2("a", eventsFunctionContext.getArgument("Angle"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("TweenObject"), gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectPositionTween2("p", eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectScaleTween3("s", eventsFunctionContext.getArgument("Scale"), "linear", eventsFunctionContext.getArgument("Seconds"), false, true);
}
}

{ //Subevents
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func = function(runtimeScene, TweenObject, RequiredBehavior, X, Y, Scale, Angle, Seconds, Destroy, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"TweenObject": TweenObject
},
  _objectArraysMap: {
"TweenObject": gdjs.objectsListsToArray(TweenObject)
},
  _behaviorNamesMap: {
"RequiredBehavior": RequiredBehavior
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Scale") return Scale;
if (argName === "Angle") return Angle;
if (argName === "Seconds") return Seconds;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects3.length = 0;

gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.GDTweenObjectObjects3.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.registeredGdjsCallbacks = [];