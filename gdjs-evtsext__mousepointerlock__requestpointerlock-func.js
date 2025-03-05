
if (typeof gdjs.evtsExt__MousePointerLock__RequestPointerLock !== "undefined") {
  gdjs.evtsExt__MousePointerLock__RequestPointerLock.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__RequestPointerLock = {};


gdjs.evtsExt__MousePointerLock__RequestPointerLock.userFunc0x104a540 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const { handler } = gdjs._MousePointerLockExtension;

handler.requestPointerLock();

};
gdjs.evtsExt__MousePointerLock__RequestPointerLock.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber() == -(1));
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, 0));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtsExt__MousePointerLock__TouchX.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(gdjs.evtsExt__MousePointerLock__TouchY.func(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


gdjs.evtsExt__MousePointerLock__RequestPointerLock.userFunc0x104a540(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLock__RequestPointerLock.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLock__RequestPointerLock.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__RequestPointerLock.registeredGdjsCallbacks = [];