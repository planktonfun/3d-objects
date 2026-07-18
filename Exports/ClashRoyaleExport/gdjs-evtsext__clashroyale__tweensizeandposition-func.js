
if (typeof gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition !== "undefined") {
  gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition = {};
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3= [];
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects4= [];


gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Destroy");
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("TweenObject"), gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


};gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.asyncCallback28527244 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.idToCallbackMap.set(28527244, gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.asyncCallback28527244);
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1) asyncObjectsList.addObject("TweenObject", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.getArgument("Seconds")), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.asyncCallback28527244(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28527244, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("TweenObject"), gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectPositionTween2("p", eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectHeightTween2("h", eventsFunctionContext.getArgument("Height"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectWidthTween2("w", eventsFunctionContext.getArgument("Width"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("RequiredBehavior")).addObjectAngleTween2("a", eventsFunctionContext.getArgument("Angle"), "linear", eventsFunctionContext.getArgument("Seconds"), false);
}
}

{ //Subevents
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.func = function(runtimeScene, TweenObject, RequiredBehavior, X, Y, Width, Height, Angle, Seconds, Destroy, parentEventsFunctionContext) {
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
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "Angle") return Angle;
if (argName === "Seconds") return Seconds;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects4.length = 0;

gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.GDTweenObjectObjects4.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ClashRoyale__TweenSizeAndPosition.registeredGdjsCallbacks = [];