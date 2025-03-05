
if (typeof gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded = {};


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x998e70 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
class PointerLockHandler {
    movementX = 0;
    movementY = 0;
    retried = false;
    /**
     * @type {gdjs.RuntimeGame}
     */
    game;

    /**
     * @param {gdjs.RuntimeGame} game
     */
    constructor(game) {
        this.game = game;
        const canvas = game.getRenderer().getCanvas();

        canvas.addEventListener("pointermove", event => {
            if (!!document.pointerLockElement) {
                this.movementX += event.movementX || 0;
                this.movementY += event.movementY || 0;
            }
        }, false);

        document.addEventListener("pointerlockerror", event => {
            if (!this.retried) {
                canvas.requestPointerLock();
                this.retried = true;
            }
        });
    }

    requestPointerLock() {
        const canvas = this.game.getRenderer().getCanvas();
        if (canvas.requestPointerLock && !document.pointerLockElement) {
            this.retried = false;
            canvas.requestPointerLock({ unadjustedMovement: true });
        }
    }

    exitPointerLock() {
        if (document.exitPointerLock) {
            document.exitPointerLock();
        }
    }

    isPointerLocked() {
        return !!document.pointerLockElement;
    }

    resetMovement() {
        this.movementX = 0;
        this.movementY = 0;
    }
};

gdjs._MousePointerLockExtension = { handler: new PointerLockHandler(runtimeScene.getGame()) };

};
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x998e70(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
