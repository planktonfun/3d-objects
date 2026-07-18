
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton = {};
gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.userFunc0x1a50600 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._photonClientExtension.client = new Photon.LoadBalancing.LoadBalancingClient(
    Photon.ConnectionProtocol.Wss,
    eventsFunctionContext.getArgument("AppID"),
    "1.0"
);

gdjs._photonClientExtension.client.onStateChange = function (state) {
    gdjs._photonClientExtension.data.photonStatus = Photon.LoadBalancing.LoadBalancingClient.StateToName(state);
    gdjs._photonClientExtension.log("State: " + gdjs._photonClientExtension.data.photonStatus);
};

gdjs._photonClientExtension.client.onError = function (errorCode, errorMsg) {
    gdjs._photonClientExtension.log(`Error ${errorCode}: ${errorMsg}`);
};

gdjs._photonClientExtension.client.onRoomListUpdate = function (rooms, roomsUpdated, roomsAdded, roomsRemoved) {
    gdjs._photonClientExtension.client.onRoomList(rooms)
};

gdjs._photonClientExtension.client.onRoomList = function (rooms) {
    gdjs._photonClientExtension.data.roomList = rooms;
    gdjs._photonClientExtension.data.roomUpdated = true;
};

gdjs._photonClientExtension.client.onJoinRoom = function () {
    gdjs._photonClientExtension.data.roomName = gdjs._photonClientExtension.client.myRoom().name;
    gdjs._photonClientExtension.data.myActorName = gdjs._photonClientExtension.client.myActor().actorNr;
    gdjs._photonClientExtension.log("Joined room: " + gdjs._photonClientExtension.client.myRoom().name);
};

gdjs._photonClientExtension.client.onActorJoin = function (actor) {
    gdjs._photonClientExtension.data.hasActorJoined = true;
    gdjs._photonClientExtension.data.actorJoined = actor.actorNr;
    gdjs._photonClientExtension.log("Actor joined: " + actor.actorNr);
};

gdjs._photonClientExtension.client.onActorLeave = function (actor) {
    gdjs._photonClientExtension.data.hasActorLeft = true;
    gdjs._photonClientExtension.data.actorLeft = actor.actorNr;
    gdjs._photonClientExtension.log("Actor left: " + actor.actorNr);
};

gdjs._photonClientExtension.client.onEvent = function (code, content, actorNr) {
    gdjs._photonClientExtension.data.hasEvent = true;
    gdjs._photonClientExtension.data.eventStack.push({
        code, content, actorNr
    });
};

gdjs._photonClientExtension.client.connectToRegionMaster(eventsFunctionContext.getArgument("Region"));
};
gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.userFunc0x1a50600(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.func = function(runtimeScene, AppID, Region, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhotonRealtimeAPI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhotonRealtimeAPI"),
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
if (argName === "AppID") return AppID;
if (argName === "Region") return Region;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PhotonRealtimeAPI__ConnectToPhoton.registeredGdjsCallbacks = [];