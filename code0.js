gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects4= [];
gdjs.Game_32SceneCode.GDCoinObjects1= [];
gdjs.Game_32SceneCode.GDCoinObjects2= [];
gdjs.Game_32SceneCode.GDCoinObjects3= [];
gdjs.Game_32SceneCode.GDCoinObjects4= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects4= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects3= [];
gdjs.Game_32SceneCode.GDSkyboxObjects4= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects3= [];
gdjs.Game_32SceneCode.GDJoystickObjects4= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects4= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects1= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects2= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects3= [];
gdjs.Game_32SceneCode.GDControlsToggleObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDControlsToggleObjects1, gdjs.Game_32SceneCode.GDControlsToggleObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects2[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Touch");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].activateBehavior("MultitouchButton", true);
}
}}

}


{



}


{

/* Reuse gdjs.Game_32SceneCode.GDControlsToggleObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Keyboard");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].activateBehavior("MultitouchButton", false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDControlsToggleObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDControlsToggleObjects1[i].HasJustBeenToggled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDControlsToggleObjects1[k] = gdjs.Game_32SceneCode.GDControlsToggleObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Object3D").setRotationY(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getRotationY()), -(90), 90));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.evtTools.common.clamp((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), -(90), 90), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__IsMoving.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetCameraRotation(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").RotationAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (180 * gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetElevationAngleOffset(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").ElevationAngleOffset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (90 * gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) < 90);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetTargetedRotationAngle(180 - (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").getForwardAngle()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("ThirdPersonCamera").TargetedRotationAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 90, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0))) > 90);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects3Objects = Hashtable.newFrom({"Joystick": gdjs.Game_32SceneCode.GDJoystickObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects2Objects = Hashtable.newFrom({"Joystick": gdjs.Game_32SceneCode.GDJoystickObjects2});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects3Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJoystickObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects3[i].TeleportAndPress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects2Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJumpButtonObjects2[k] = gdjs.Game_32SceneCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11247332);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJoystickObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJoystickObjects1[k] = gdjs.Game_32SceneCode.GDJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJoystickObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects2[i].ActivateControl(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Touch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects = Hashtable.newFrom({"ControlsToggle": gdjs.Game_32SceneCode.GDControlsToggleObjects2});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11215652);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.Game_32SceneCode.GDControlsToggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDControlsToggleObjects2Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("ThirdPersonCamera").SetRotationHalfwayDuration(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Keyboard");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 50, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\PickupCoin.wav", false, 25, gdjs.randomFloatInRange(1.1, 1.3));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].rotate(35, runtimeScene);
}
}}

}


{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList2(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList9(runtimeScene);
}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList10(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects1.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects2.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects3.length = 0;
gdjs.Game_32SceneCode.GDControlsToggleObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
