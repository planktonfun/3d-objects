
if (typeof gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion !== "undefined") {
  gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion = {};
gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.idToCallbackMap = new Map();


gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.userFunc0x1906f40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function getBestRegion(timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone) {

    const asiaPatterns = [
        /^Asia\//,
        /^Indian\//,
        /^Australia\//,
        /^NZ/, // Matches NZ and NZ-CHAT
        // Many Pacific island time zones in Oceania:
        /^Pacific\/(Guam|Saipan|Palau|Fiji|Apia|Chuuk|Efate|Enderbury|Fakaofo|Funafuti|Gambier|Guadalcanal|Kanton|Kiritimati|Marquesas|Nauru|Niue|Norfolk|Noumea|Rarotonga|Samoa|Tahiti|Wallis|Auckland|Bougainville|Chatham|Kosrae|Kwajalein|Majuro|Pitcairn|Pohnpei|Ponape|Port_Moresby|Tarawa|Tongatapu|Truk|Yap)/,
        // Common abbreviations in Asia/Oceania:
        /^(Hongkong|Japan|Singapore|PRC|ROK|ROC)$/,
        // Assign all Antarctic zones to Asia (closest via Australia)
        /^Antarctica\//,
        // Kwajalein (often seen standalone)
        /^Kwajalein$/
    ];

    const euPatterns = [
        /^Europe\//,
        /^Africa\//,
        // Atlantic islands and territories considered closest to Europe:
        /^Atlantic\/(Canary|Madeira|Azores|Reykjavik|St_Helena|Faeroe|Faroe|Jan_Mayen|Cape_Verde|South_Georgia|Stanley|Bermuda)$/,
        // Common European abbreviations/identifiers:
        /^(CET|EET|WET|Eire|GB|GB-Eire|Poland|Portugal|Turkey|Israel|Iran|Egypt|Iceland|Libya|Greenwich|MET|W-SU)$/,
        // Arctic region (Longyearbyen is in Svalbard, Norway)
        /^Arctic\/Longyearbyen$/,
        // Legacy GMT/UTC patterns (assigned here as Europe)
        /^(Etc\/.*|UTC|UCT|Universal|Zulu|GMT.*)$/,
        /^Pacific\/(Galapagos|Wake)$/
    ];

    const usPatterns = [
        /^America\//,
        /^US\//,
        /^Canada\//,
        /^Brazil\//,
        /^Chile\//,
        /^Mexico\//,
        // Common US abbreviations:
        /^(EST|CST6CDT|PST8PDT|MST7MDT|MST|Cuba|Navajo|HST|Jamaica)$/,
        /^EST5EDT$/,
        // US-affiliated Pacific territories (plus Easter Island for Chile)
        /^Pacific\/(Honolulu|Midway|Johnston|Pago_Pago|Easter)$/
    ];

    // Helper: check if timeZone matches any pattern in the array
    function matchesAny(patterns) {
        return patterns.some(pat => pat.test(timeZone));
    }

    if (matchesAny(asiaPatterns)) {
        return "ASIA";
    } else if (matchesAny(euPatterns)) {
        return "EU";
    } else if (matchesAny(usPatterns)) {
        return "US";
    }

    // Default (should no longer be hit)
    return "OTHER";
}

eventsFunctionContext.returnValue = getBestRegion();
};
gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.userFunc0x1906f40(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PhotonRealtimeAPI__GetBestRegion.registeredGdjsCallbacks = [];