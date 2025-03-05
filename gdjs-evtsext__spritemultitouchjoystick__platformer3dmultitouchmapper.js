
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper = gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper || {};

/**
 * Behavior generated from 3D platformer multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper = class Platformer3DMultitouchMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.JoystickIdentifier = behaviorData.JoystickIdentifier !== undefined ? behaviorData.JoystickIdentifier : "Primary";
    this._behaviorData.JumpButton = behaviorData.JumpButton !== undefined ? behaviorData.JumpButton : "A";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCharacter3D !== newBehaviorData.PhysicsCharacter3D)
      this._behaviorData.PhysicsCharacter3D = newBehaviorData.PhysicsCharacter3D;
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.JoystickIdentifier !== newBehaviorData.JoystickIdentifier)
      this._behaviorData.JoystickIdentifier = newBehaviorData.JoystickIdentifier;
    if (oldBehaviorData.JumpButton !== newBehaviorData.JumpButton)
      this._behaviorData.JumpButton = newBehaviorData.JumpButton;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    ControllerIdentifier: this._behaviorData.ControllerIdentifier,
    JoystickIdentifier: this._behaviorData.JoystickIdentifier,
    JumpButton: this._behaviorData.JumpButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.ControllerIdentifier !== undefined)
      this._behaviorData.ControllerIdentifier = networkSyncData.props.ControllerIdentifier;
    if (networkSyncData.props.JoystickIdentifier !== undefined)
      this._behaviorData.JoystickIdentifier = networkSyncData.props.JoystickIdentifier;
    if (networkSyncData.props.JumpButton !== undefined)
      this._behaviorData.JumpButton = networkSyncData.props.JumpButton;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._behaviorData.JoystickIdentifier !== undefined ? this._behaviorData.JoystickIdentifier : "Primary";
  }
  _setJoystickIdentifier(newValue) {
    this._behaviorData.JoystickIdentifier = newValue;
  }
  _getJumpButton() {
    return this._behaviorData.JumpButton !== undefined ? this._behaviorData.JumpButton : "A";
  }
  _setJumpButton(newValue) {
    this._behaviorData.JumpButton = newValue;
  }
}

/**
 * Shared data generated from 3D platformer multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.SharedData = class Platformer3DMultitouchMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_Platformer3DMultitouchMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_Platformer3DMultitouchMapperSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_Platformer3DMultitouchMapperSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardAngle(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtTools.camera.getCameraRotation(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateStick(-(90), gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonPressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::Platformer3DMultitouchMapper", gdjs.evtsExt__SpriteMultitouchJoystick__Platformer3DMultitouchMapper.Platformer3DMultitouchMapper);
