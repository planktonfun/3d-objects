
if (typeof gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser = {};
gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.idToCallbackMap = new Map();


gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.userFunc0x14ccf10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
console.log("Retrieving user start");
async function authenticate() {
    const isAvailable = CrazyGames.SDK.user.isUserAccountAvailable;
    console.log("User account system available:", isAvailable);

    try {
        const user = await CrazyGames.SDK.user.getUser();
        if (user) {
            console.log("User info:", user);

            const data = await getUserSession();
            gdjs._crazyGamesExtension.userId = data.userId;
            gdjs._crazyGamesExtension.username = user.username;
            gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
            gdjs._crazyGamesExtension.userToken = await CrazyGames.SDK.user.getUserToken();

            eventsFunctionContext.task.resolve();
            console.log("Retrieving user done");
        } else {
            console.log("No user is signed in.");
            // Optionally, prompt the user to sign in
            await showAuthPrompt();

        }
    } catch (error) {
        console.error("Error retrieving user info:", error);
        gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
        eventsFunctionContext.task.resolve();
        console.log("Retrieving user done");
    }
}

async function showAuthPrompt() {
    try {
        const user = await CrazyGames.SDK.user.showAuthPrompt();
        if (user) {
            console.log("User signed in:", user);
            // Proceed with authenticated user
            const data = await getUserSession();
            gdjs._crazyGamesExtension.userId = data.userId;
            gdjs._crazyGamesExtension.username = user.username;
            gdjs._crazyGamesExtension.profilePictureUrl = user.profilePictureUrl;
            eventsFunctionContext.task.resolve();
        } else {
            console.log("User dismissed the auth prompt.");
            // Handle the case where the user cancels the sign-in process
            eventsFunctionContext.task.resolve();
        }
    } catch (error) {
        console.error("Error during auth prompt:", error);
        gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
        eventsFunctionContext.task.resolve();
    }
}


async function getUserSession() {
    let token = null;

    try {
        console.log("Requesting a user token.");
        token = await CrazyGames.SDK.user.getUserToken();

    } catch (error) {
        console.error("Error retrieving new user token:", error);
        gdjs._crazyGamesExtension.lastErrorDescription = JSON.stringify(error);
        return null;
    }

    return decodeJWT(token);
}

// Decode in a lambda or server if you have one as decoding in clientside is not secure
function decodeJWT(token) {

    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((char) => {
        return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

async function handleLoggedInUser(user) {
    const userToken = await CrazyGames.getUserToken();

    // Check if the CrazyGames account is linked to an in-game account
    const isLinked = await checkIfAccountIsLinked(userToken);

    if (isLinked) {
        // Case: There is a game account linked to this CrazyGames account
        const gameData = await fetchGameData(userToken);
        startGameWithData(gameData);
    } else {
        // Check if the user is logged into your in-game account
        const isLoggedIntoGameAccount = await checkIfLoggedIntoGameAccount();

        if (isLoggedIntoGameAccount) {
            // Case: User is logged into in-game account but not linked to CrazyGames
            showLinkAccountButton();
        } else {
            // Case: No in-game account exists, create a new one linked to CrazyGames
            const newGameData = await createNewGameAccount(userToken);
            startGameWithData(newGameData);
        }
    }
}

authenticate();
};
gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.userFunc0x14ccf10(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__AuthenticateUser.registeredGdjsCallbacks = [];