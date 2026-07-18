
if (typeof gdjs.evtsExt__CrazyGamesAdApi__UserSignIn !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__UserSignIn = {};
gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.userFunc0x1acf280 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
console.log("Checking if the user is signed in start");

async function getUser() {
    const isAvailable = CrazyGames.SDK.user.isUserAccountAvailable;
    console.log("User account system available:", isAvailable);

    try {
        const user = await CrazyGames.SDK.user.getUser();
        if (user) {
            console.log("User info:", user);
            // Example: Display the user's username in the game
            gdjs._crazyGamesExtension.userSignedIn = true;
            gdjs._crazyGamesExtension.username = user.username;
            gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
            eventsFunctionContext.task.resolve();
            console.log("Checking user is signed in done");
        } else {
            console.log("No user is signed in.");
            // Optionally, prompt the user to sign in
            gdjs._crazyGamesExtension.userSignedIn = false;
            gdjs._crazyGamesExtension.username = null;
            gdjs._crazyGamesExtension.profilePictureUrl = null;
            eventsFunctionContext.task.resolve();
            console.log("Checking user is signed in done");
        }
    } catch (error) {
        console.error("Error retrieving user info:", error);
        gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
        eventsFunctionContext.task.resolve();
        console.log("Checking user is signed in done");
    }
}

getUser();
};
gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.userFunc0x1acf280(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__UserSignIn.registeredGdjsCallbacks = [];