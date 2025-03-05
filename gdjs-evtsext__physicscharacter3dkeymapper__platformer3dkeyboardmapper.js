
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper || {};

/**
 * Behavior generated from 3D platformer keyboard mapper
 */
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper = class Platformer3DKeyboardMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.Jump = behaviorData.Jump !== undefined ? behaviorData.Jump : "Space";
    this._behaviorData.Up = behaviorData.Up !== undefined ? behaviorData.Up : "w";
    this._behaviorData.Left = behaviorData.Left !== undefined ? behaviorData.Left : "a";
    this._behaviorData.Down = behaviorData.Down !== undefined ? behaviorData.Down : "s";
    this._behaviorData.Right = behaviorData.Right !== undefined ? behaviorData.Right : "d";
    this._behaviorData.CameraAngle = Number("0") || 0;
    this._behaviorData.LockedCameraAngle = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCharacter3D !== newBehaviorData.PhysicsCharacter3D)
      this._behaviorData.PhysicsCharacter3D = newBehaviorData.PhysicsCharacter3D;
    if (oldBehaviorData.Jump !== newBehaviorData.Jump)
      this._behaviorData.Jump = newBehaviorData.Jump;
    if (oldBehaviorData.Up !== newBehaviorData.Up)
      this._behaviorData.Up = newBehaviorData.Up;
    if (oldBehaviorData.Left !== newBehaviorData.Left)
      this._behaviorData.Left = newBehaviorData.Left;
    if (oldBehaviorData.Down !== newBehaviorData.Down)
      this._behaviorData.Down = newBehaviorData.Down;
    if (oldBehaviorData.Right !== newBehaviorData.Right)
      this._behaviorData.Right = newBehaviorData.Right;
    if (oldBehaviorData.CameraAngle !== newBehaviorData.CameraAngle)
      this._behaviorData.CameraAngle = newBehaviorData.CameraAngle;
    if (oldBehaviorData.LockedCameraAngle !== newBehaviorData.LockedCameraAngle)
      this._behaviorData.LockedCameraAngle = newBehaviorData.LockedCameraAngle;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    Jump: this._behaviorData.Jump,
    Up: this._behaviorData.Up,
    Left: this._behaviorData.Left,
    Down: this._behaviorData.Down,
    Right: this._behaviorData.Right,
    CameraAngle: this._behaviorData.CameraAngle,
    LockedCameraAngle: this._behaviorData.LockedCameraAngle,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.Jump !== undefined)
      this._behaviorData.Jump = networkSyncData.props.Jump;
    if (networkSyncData.props.Up !== undefined)
      this._behaviorData.Up = networkSyncData.props.Up;
    if (networkSyncData.props.Left !== undefined)
      this._behaviorData.Left = networkSyncData.props.Left;
    if (networkSyncData.props.Down !== undefined)
      this._behaviorData.Down = networkSyncData.props.Down;
    if (networkSyncData.props.Right !== undefined)
      this._behaviorData.Right = networkSyncData.props.Right;
    if (networkSyncData.props.CameraAngle !== undefined)
      this._behaviorData.CameraAngle = networkSyncData.props.CameraAngle;
    if (networkSyncData.props.LockedCameraAngle !== undefined)
      this._behaviorData.LockedCameraAngle = networkSyncData.props.LockedCameraAngle;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getJump() {
    return this._behaviorData.Jump !== undefined ? this._behaviorData.Jump : "Space";
  }
  _setJump(newValue) {
    this._behaviorData.Jump = newValue;
  }
  _getUp() {
    return this._behaviorData.Up !== undefined ? this._behaviorData.Up : "w";
  }
  _setUp(newValue) {
    this._behaviorData.Up = newValue;
  }
  _getLeft() {
    return this._behaviorData.Left !== undefined ? this._behaviorData.Left : "a";
  }
  _setLeft(newValue) {
    this._behaviorData.Left = newValue;
  }
  _getDown() {
    return this._behaviorData.Down !== undefined ? this._behaviorData.Down : "s";
  }
  _setDown(newValue) {
    this._behaviorData.Down = newValue;
  }
  _getRight() {
    return this._behaviorData.Right !== undefined ? this._behaviorData.Right : "d";
  }
  _setRight(newValue) {
    this._behaviorData.Right = newValue;
  }
  _getCameraAngle() {
    return this._behaviorData.CameraAngle !== undefined ? this._behaviorData.CameraAngle : Number("0") || 0;
  }
  _setCameraAngle(newValue) {
    this._behaviorData.CameraAngle = newValue;
  }
  _getLockedCameraAngle() {
    return this._behaviorData.LockedCameraAngle !== undefined ? this._behaviorData.LockedCameraAngle : false;
  }
  _setLockedCameraAngle(newValue) {
    this._behaviorData.LockedCameraAngle = newValue;
  }
  _toggleLockedCameraAngle() {
    this._setLockedCameraAngle(!this._getLockedCameraAngle());
  }
}

/**
 * Shared data generated from 3D platformer keyboard mapper
 */
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.SharedData = class Platformer3DKeyboardMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsCharacter3DKeyMapper_Platformer3DKeyboardMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsCharacter3DKeyMapper_Platformer3DKeyboardMapperSharedData = new gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsCharacter3DKeyMapper_Platformer3DKeyboardMapperSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(-(90));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(90);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(180);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(-(135));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(-(45));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(45);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(135);
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraAngle());
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isForwardAngleAround(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() + 180, 67.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentForwardSpeed(-((gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentForwardSpeed())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardAngle(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateForwardKey();
}
}}

}


};gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLockedCameraAngle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraAngle(gdjs.evtTools.camera.getCameraRotation(runtimeScene, (gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLockedCameraAngle(false);
}
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TargetAngle", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUp());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDown());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeft());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRight());
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJump());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


};

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
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

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext = {};
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLockedCameraAngle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngle = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
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

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.LockedCameraAngleContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext = {};
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLockedCameraAngle(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLockedCameraAngle(true);
}
}}

}


};

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngle = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DKeyMapper"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper.prototype.SetLockedCameraAngleContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsCharacter3DKeyMapper::Platformer3DKeyboardMapper", gdjs.evtsExt__PhysicsCharacter3DKeyMapper__Platformer3DKeyboardMapper.Platformer3DKeyboardMapper);
