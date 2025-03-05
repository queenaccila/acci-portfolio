
if (typeof gdjs.evtsExt__MousePointerLock__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__MousePointerLock__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__onScenePostEvents = {};


gdjs.evtsExt__MousePointerLock__onScenePostEvents.userFunc0xb3bb78 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const { handler } = gdjs._MousePointerLockExtension;

handler.resetMovement();

};
gdjs.evtsExt__MousePointerLock__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLock__onScenePostEvents.userFunc0xb3bb78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isEmulatingPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__SetMovementX.func(runtimeScene, (gdjs.evtsExt__MousePointerLock__TouchX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber()) * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MousePointerLock__SetMovementY.func(runtimeScene, (gdjs.evtsExt__MousePointerLock__TouchY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsNumber()) * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtsExt__MousePointerLock__TouchX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(gdjs.evtsExt__MousePointerLock__TouchY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(-(1));
}}

}


};

gdjs.evtsExt__MousePointerLock__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLock__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__MousePointerLock__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MousePointerLock__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__MousePointerLock__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__MousePointerLock__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
