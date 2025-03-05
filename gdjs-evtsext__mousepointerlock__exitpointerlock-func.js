
if (typeof gdjs.evtsExt__MousePointerLock__ExitPointerLock !== "undefined") {
  gdjs.evtsExt__MousePointerLock__ExitPointerLock.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__ExitPointerLock = {};


gdjs.evtsExt__MousePointerLock__ExitPointerLock.userFunc0x998e70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

const { handler } = gdjs._MousePointerLockExtension;

handler.exitPointerLock();

};
gdjs.evtsExt__MousePointerLock__ExitPointerLock.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(-(1));
}}

}


{


gdjs.evtsExt__MousePointerLock__ExitPointerLock.userFunc0x998e70(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLock__ExitPointerLock.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
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
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
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


gdjs.evtsExt__MousePointerLock__ExitPointerLock.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__ExitPointerLock.registeredGdjsCallbacks = [];