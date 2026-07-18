
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation = gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation = class DeleteAfterAnimation extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.SharedData = class DeleteAfterAnimationSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ClashRoyale_DeleteAfterAnimationSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ClashRoyale_DeleteAfterAnimationSharedData = new gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.SharedData(
      initialData
    );
  }
  return instanceContainer._ClashRoyale_DeleteAfterAnimationSharedData;
}

// Methods:
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ClashRoyale::DeleteAfterAnimation", gdjs.evtsExt__ClashRoyale__DeleteAfterAnimation.DeleteAfterAnimation);
