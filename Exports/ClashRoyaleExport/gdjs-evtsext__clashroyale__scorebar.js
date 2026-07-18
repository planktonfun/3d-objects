
gdjs.evtsExt__ClashRoyale__ScoreBar = gdjs.evtsExt__ClashRoyale__ScoreBar || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar = class ScoreBar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Score = objectData.content.Score !== undefined ? objectData.content.Score : Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Score !== newObjectData.content.Score)
      this._objectData.Score = newObjectData.content.Score;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getScore() {
    return this._objectData.Score !== undefined ? this._objectData.Score : Number("0") || 0;
  }
  _setScore(newValue) {
    this._objectData.Score = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext = {};
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects2= [];


gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreIconsObjectsList = [...runtimeScene.getObjects("ScoreIcons")];
var GDScoreIconsObjects = Hashtable.newFrom({"ScoreIcons": thisGDScoreIconsObjectsList});
var thisGDScoreBlueDescObjectsList = [...runtimeScene.getObjects("ScoreBlueDesc")];
var GDScoreBlueDescObjects = Hashtable.newFrom({"ScoreBlueDesc": thisGDScoreBlueDescObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreIcons": GDScoreIconsObjects
, "ScoreBlueDesc": GDScoreBlueDescObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreIcons": thisGDScoreIconsObjectsList
, "ScoreBlueDesc": thisGDScoreBlueDescObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.onCreatedContext.GDScoreBlueDescObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext = {};
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects2= [];


gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getScore();}
}

}


};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.Score = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreIconsObjectsList = [...runtimeScene.getObjects("ScoreIcons")];
var GDScoreIconsObjects = Hashtable.newFrom({"ScoreIcons": thisGDScoreIconsObjectsList});
var thisGDScoreBlueDescObjectsList = [...runtimeScene.getObjects("ScoreBlueDesc")];
var GDScoreBlueDescObjects = Hashtable.newFrom({"ScoreBlueDesc": thisGDScoreBlueDescObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreIcons": GDScoreIconsObjects
, "ScoreBlueDesc": GDScoreBlueDescObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreIcons": thisGDScoreIconsObjectsList
, "ScoreBlueDesc": thisGDScoreBlueDescObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.ScoreContext.GDScoreBlueDescObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext = {};
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects2= [];


gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setScore(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreIconsObjectsList = [...runtimeScene.getObjects("ScoreIcons")];
var GDScoreIconsObjects = Hashtable.newFrom({"ScoreIcons": thisGDScoreIconsObjectsList});
var thisGDScoreBlueDescObjectsList = [...runtimeScene.getObjects("ScoreBlueDesc")];
var GDScoreBlueDescObjects = Hashtable.newFrom({"ScoreBlueDesc": thisGDScoreBlueDescObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreIcons": GDScoreIconsObjects
, "ScoreBlueDesc": GDScoreBlueDescObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreIcons": thisGDScoreIconsObjectsList
, "ScoreBlueDesc": thisGDScoreBlueDescObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.SetScoreContext.GDScoreBlueDescObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext = {};
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects3= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects3= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects1= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects2= [];
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects3= [];


gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1, gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2[i].hide();
}
}
}

}


{

/* Reuse gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i].getVariableNumber(gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i].getVariables().get("ID")) <= eventsFunctionContext.getObjects("Object")[0]._getScore() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[k] = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i].hide(false);
}
}
}

}


};gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ScoreIcons"), gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i].getVariableString(gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i].getVariables().get("Type")) == "Crown" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[k] = gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.Update = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScoreIconsObjectsList = [...runtimeScene.getObjects("ScoreIcons")];
var GDScoreIconsObjects = Hashtable.newFrom({"ScoreIcons": thisGDScoreIconsObjectsList});
var thisGDScoreBlueDescObjectsList = [...runtimeScene.getObjects("ScoreBlueDesc")];
var GDScoreBlueDescObjects = Hashtable.newFrom({"ScoreBlueDesc": thisGDScoreBlueDescObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ScoreIcons": GDScoreIconsObjects
, "ScoreBlueDesc": GDScoreBlueDescObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "ScoreIcons": thisGDScoreIconsObjectsList
, "ScoreBlueDesc": thisGDScoreBlueDescObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects3.length = 0;

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreIconsObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.UpdateContext.GDScoreBlueDescObjects3.length = 0;


return;
}

gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("ClashRoyale::ScoreBar", gdjs.evtsExt__ClashRoyale__ScoreBar.ScoreBar);
