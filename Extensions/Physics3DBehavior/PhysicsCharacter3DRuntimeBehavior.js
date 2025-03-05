var gdjs;(function(h){const F=class extends h.RuntimeBehavior{constructor(e,t,a){super(e,t,a);this._physics3D=null;this.character=null;this._destroyedDuringFrameLogic=!1;this._slopeClimbingFactor=1;this._slopeClimbingMinNormalZ=Math.cos(Math.PI/4);this._forwardAngle=0;this._hasPressedForwardKey=!1;this._hasPressedBackwardKey=!1;this._hasPressedRightKey=!1;this._hasPressedLeftKey=!1;this._hasPressedJumpKey=!1;this._hasUsedStick=!1;this._stickAngle=0;this._stickForce=0;this._currentForwardSpeed=0;this._currentSidewaysSpeed=0;this._currentFallSpeed=0;this._canJump=!1;this._currentJumpSpeed=0;this._timeSinceCurrentJumpStart=0;this._jumpKeyHeldSinceJumpStart=!1;this._hasReallyMoved=!1;this._oldPhysicsPosition=[0,0];this._wasLeftKeyPressed=!1;this._wasRightKeyPressed=!1;this._wasForwardKeyPressed=!1;this._wasBackwardKeyPressed=!1;this._wasJumpKeyPressed=!1;this._wasStickUsed=!1;this._dontClearInputsBetweenFrames=!1;this.owner3D=a,this._physics3DBehaviorName=t.physics3D,this._sharedData=h.Physics3DSharedData.getSharedData(e.getScene(),t.Physics3D),this.collisionChecker=new h.PhysicsCharacter3DRuntimeBehavior.CharacterCollisionChecker(this),this.charactersManager=h.PhysicsCharacter3DRuntimeBehavior.CharactersManager.getManager(e),this._slopeMaxAngle=0,this.setSlopeMaxAngle(t.slopeMaxAngle),this._forwardAcceleration=t.forwardAcceleration,this._forwardDeceleration=t.forwardDeceleration,this._forwardSpeedMax=t.forwardSpeedMax,this._sidewaysAcceleration=t.sidewaysAcceleration,this._sidewaysDeceleration=t.sidewaysDeceleration,this._sidewaysSpeedMax=t.sidewaysSpeedMax,this._gravity=t.gravity,this._maxFallingSpeed=t.fallingSpeedMax,this._jumpSustainTime=t.jumpSustainTime,this._jumpSpeed=this.getJumpSpeedToReach(t.jumpHeight),this._shouldBindObjectAndForwardAngle=t.shouldBindObjectAndForwardAngle,this._stairHeightMax=t.stairHeightMax===void 0?20:t.stairHeightMax,this._canBePushed=t.canBePushed===void 0?!0:t.canBePushed}getVec3(e,t,a){const o=this._sharedData._tempVec3;return o.Set(e,t,a),o}getPhysics3D(){if(this._destroyedDuringFrameLogic)return null;if(this._physics3D)return this._physics3D;const e=this.owner.getBehavior(this._physics3DBehaviorName),t=e._sharedData,a=t.jolt,o=new Jolt.ExtendedUpdateSettings,s=new Jolt.DefaultBroadPhaseLayerFilter(a.GetObjectVsBroadPhaseLayerFilter(),h.Physics3DSharedData.dynamicBroadPhaseLayerIndex),r=new Jolt.DefaultObjectLayerFilter(a.GetObjectLayerPairFilter(),e.getBodyLayer()),i=new Jolt.BodyFilter,c=new Jolt.ShapeFilter;return this._physics3D={behavior:e,extendedUpdateSettings:o,broadPhaseLayerFilter:s,objectLayerFilter:r,bodyFilter:i,shapeFilter:c},this.setStairHeightMax(this._stairHeightMax),t.registerHook(this),e.bodyUpdater=new h.PhysicsCharacter3DRuntimeBehavior.CharacterBodyUpdater(this),e.collisionChecker=this.collisionChecker,e.recreateBody(),this._forwardAngle=this.owner.getAngle(),this._physics3D}updateFromBehaviorData(e,t){return e.gravity!==t.gravity&&this.setGravity(t.gravity),e.maxFallingSpeed!==t.maxFallingSpeed&&this.setMaxFallingSpeed(t.maxFallingSpeed),e.forwardAcceleration!==t.forwardAcceleration&&this.setForwardAcceleration(t.forwardAcceleration),e.forwardDeceleration!==t.forwardDeceleration&&this.setForwardDeceleration(t.forwardDeceleration),e.forwardSpeedMax!==t.forwardSpeedMax&&this.setForwardSpeedMax(t.forwardSpeedMax),e.sidewaysAcceleration!==t.sidewaysAcceleration&&this.setSidewaysAcceleration(t.sidewaysAcceleration),e.sidewaysDeceleration!==t.sidewaysDeceleration&&this.setSidewaysDeceleration(t.sidewaysDeceleration),e.sidewaysSpeedMax!==t.sidewaysSpeedMax&&this.setSidewaysSpeedMax(t.sidewaysSpeedMax),e.jumpSustainTime!==t.jumpSustainTime&&this.setJumpSustainTime(t.jumpSustainTime),e.jumpHeight!==t.jumpHeight&&this.setJumpSpeed(this.getJumpSpeedToReach(t.jumpHeight)),e.shouldBindObjectAndForwardAngle!==t.shouldBindObjectAndForwardAngle&&this.setShouldBindObjectAndForwardAngle(t.shouldBindObjectAndForwardAngle),e.stairHeightMax!==t.stairHeightMax&&this.setStairHeightMax(t.stairHeightMax),!0}getNetworkSyncData(){return this._dontClearInputsBetweenFrames=!1,{...super.getNetworkSyncData(),props:{fwa:this._forwardAngle,fws:this._currentForwardSpeed,sws:this._currentSidewaysSpeed,fs:this._currentFallSpeed,js:this._currentJumpSpeed,cj:this._canJump,lek:this._wasLeftKeyPressed,rik:this._wasRightKeyPressed,upk:this._wasForwardKeyPressed,dok:this._wasBackwardKeyPressed,juk:this._wasJumpKeyPressed,us:this._wasStickUsed,sa:this._stickAngle,sf:this._stickForce,tscjs:this._timeSinceCurrentJumpStart,jkhsjs:this._jumpKeyHeldSinceJumpStart}}}updateFromNetworkSyncData(e){super.updateFromNetworkSyncData(e);const t=e.props;this._forwardAngle=t.fwa,this._currentForwardSpeed=t.fws,this._currentSidewaysSpeed=t.sws,this._currentFallSpeed=t.fs,this._currentJumpSpeed=t.js,this._canJump=t.cj,this._hasPressedForwardKey=t.upk,this._hasPressedBackwardKey=t.dok,this._hasPressedLeftKey=t.lek,this._hasPressedRightKey=t.rik,this._hasPressedJumpKey=t.juk,this._hasUsedStick=t.us,this._stickAngle=t.sa,this._stickForce=t.sf,this._timeSinceCurrentJumpStart=t.tscjs,this._jumpKeyHeldSinceJumpStart=t.jkhsjs,this._dontClearInputsBetweenFrames=!0}getPhysicsPosition(e){const t=this.getPhysics3D();if(!t)return e.Set(0,0,0),e;const{behavior:a}=t;return e.Set(this.owner3D.getCenterXInScene()*this._sharedData.worldInvScale,this.owner3D.getCenterYInScene()*this._sharedData.worldInvScale,this.owner3D.getZ()*this._sharedData.worldInvScale+a._shapeHalfDepth),e}getPhysicsRotation(e){const t=e.sEulerAngles(this.getVec3(0,0,h.toRad(this.owner3D.getAngle())));return e.Set(t.GetX(),t.GetY(),t.GetZ(),t.GetW()),Jolt.destroy(t),e}moveObjectToPhysicsPosition(e){const t=this.getPhysics3D();if(!t)return;const{behavior:a}=t;this.owner3D.setCenterXInScene(e.GetX()*this._sharedData.worldScale),this.owner3D.setCenterYInScene(e.GetY()*this._sharedData.worldScale),this.owner3D.setZ((e.GetZ()-a._shapeHalfDepth)*this._sharedData.worldScale)}moveObjectToPhysicsRotation(e){const t=this.owner3D.get3DRendererObject();t.quaternion.x=e.GetX(),t.quaternion.y=e.GetY(),t.quaternion.z=e.GetZ(),t.quaternion.w=e.GetW();const a=new THREE.Euler(0,0,0,"ZYX");a.setFromQuaternion(t.quaternion),this.owner3D.setAngle(h.toDegrees(a.z))}onDeActivate(){this.collisionChecker.clearContacts()}onActivate(){}onDestroy(){this._destroyedDuringFrameLogic=!0,this.onDeActivate(),this._destroyCharacter()}_destroyCharacter(){if(this.character&&(this._canBePushed&&this.charactersManager.removeCharacter(this.character),Jolt.destroy(this.character),this.character=null,this._physics3D)){this._physics3D.behavior._body=null;const{extendedUpdateSettings:e,broadPhaseLayerFilter:t,objectLayerFilter:a,bodyFilter:o,shapeFilter:s}=this._physics3D;Jolt.destroy(e),Jolt.destroy(t),Jolt.destroy(a),Jolt.destroy(o),Jolt.destroy(s),this._physics3D=null}}doStepPreEvents(e){this.getPhysics3D()}doBeforePhysicsStep(e){if(!this.activated())return;const t=this.getPhysics3D();if(!t)return;const{behavior:a,extendedUpdateSettings:o,broadPhaseLayerFilter:s,objectLayerFilter:r,bodyFilter:i,shapeFilter:c}=t;if(!this.character||!a._body)return;const n=this._sharedData.worldInvScale,d=this.character.GetPosition().GetX(),C=this.character.GetPosition().GetY(),S=this.character.GetPosition().GetZ();this._shouldBindObjectAndForwardAngle&&(this._forwardAngle=this.owner.getAngle()),this.updateCharacterSpeedFromInputs(e),this._currentJumpSpeed>0&&(this._timeSinceCurrentJumpStart+=e),this._hasPressedJumpKey||(this._jumpKeyHeldSinceJumpStart=!1),this._canJump&&this._hasPressedJumpKey&&!this._jumpKeyHeldSinceJumpStart&&(this._currentJumpSpeed=this._jumpSpeed,this._currentFallSpeed=0,this._canJump=!1,this._jumpKeyHeldSinceJumpStart=!0,this._timeSinceCurrentJumpStart=0),this.isOnFloor()||(this._jumpKeyHeldSinceJumpStart&&this._timeSinceCurrentJumpStart<this._jumpSustainTime||(this._currentJumpSpeed=Math.max(0,this._currentJumpSpeed-this._gravity*e)),this._currentFallSpeed=Math.min(this._maxFallingSpeed,this._currentFallSpeed+this._gravity*e));let v=0,M=0,A=0;if(this.character.IsSupported()&&this.updateGroundVelocity(a,e)){const _=this.character.GetGroundVelocity();v=_.GetX(),M=_.GetY(),A=_.GetZ()}let p=this._currentForwardSpeed,m=this._currentSidewaysSpeed;if(m!==0&&p!==0){const u=Math.hypot(p/this._forwardSpeedMax,m/this._sidewaysSpeedMax);u>1&&(p/=u,m/=u)}p*=n,m*=n;const y=h.toRad(this._forwardAngle),f=Math.cos(y),g=Math.sin(y),w=p*f-m*g,P=p*g+m*f;if(this.character.SetLinearVelocity(this.getVec3(v+w,M+P,(this._currentJumpSpeed-this._currentFallSpeed)*n)),this.isOnFloor()){const u=Math.max(Math.hypot(this.character.GetPosition().GetX()-this._oldPhysicsPosition[0],this.character.GetPosition().GetY()-this._oldPhysicsPosition[1]),Math.hypot(this.character.GetLinearVelocity().GetX(),this.character.GetLinearVelocity().GetY())*e);this._oldPhysicsPosition[0]=this.character.GetPosition().GetX(),this._oldPhysicsPosition[1]=this.character.GetPosition().GetY();const _=Math.max(-.01+1.01*Math.min(-u*this._slopeClimbingFactor,A*e),-this._maxFallingSpeed*n*e);o.mStickToFloorStepDown.Set(0,0,_)}else o.mStickToFloorStepDown.Set(0,0,0);this.character.ExtendedUpdate(e,this.character.GetUp(),o,s,r,i,c,this._sharedData.jolt.GetTempAllocator()),this.collisionChecker.updateContacts(),this.isOnFloor()&&(this._canJump=!0,this._currentFallSpeed=0,this._currentJumpSpeed=0),this._wasForwardKeyPressed=this._hasPressedForwardKey,this._wasBackwardKeyPressed=this._hasPressedBackwardKey,this._wasRightKeyPressed=this._hasPressedRightKey,this._wasLeftKeyPressed=this._hasPressedLeftKey,this._wasJumpKeyPressed=this._hasPressedJumpKey,this._wasStickUsed=this._hasPressedJumpKey,this._dontClearInputsBetweenFrames||(this._hasPressedForwardKey=!1,this._hasPressedBackwardKey=!1,this._hasPressedRightKey=!1,this._hasPressedLeftKey=!1,this._hasPressedJumpKey=!1,this._hasUsedStick=!1),this._hasReallyMoved=Math.abs(this.character.GetPosition().GetX()-d)>F.epsilon||Math.abs(this.character.GetPosition().GetY()-C)>F.epsilon||Math.abs(this.character.GetPosition().GetZ()-S)>F.epsilon}updateCharacterSpeedFromInputs(e){let t=0;this._hasPressedBackwardKey!==this._hasPressedForwardKey?this._hasPressedBackwardKey?t=-this._forwardSpeedMax:this._hasPressedForwardKey&&(t=this._forwardSpeedMax):this._hasUsedStick&&(t=-this._forwardSpeedMax*this._stickForce*Math.sin(h.toRad(this._stickAngle))),this._currentForwardSpeed=F.getAcceleratedSpeed(this._currentForwardSpeed,t,this._forwardSpeedMax,this._forwardAcceleration,this._forwardDeceleration,e);let a=0;this._hasPressedLeftKey!==this._hasPressedRightKey?this._hasPressedLeftKey?a=-this._sidewaysSpeedMax:this._hasPressedRightKey&&(a=this._sidewaysSpeedMax):this._hasUsedStick&&(a=this._sidewaysSpeedMax*this._stickForce*Math.cos(h.toRad(this._stickAngle))),this._currentSidewaysSpeed=F.getAcceleratedSpeed(this._currentSidewaysSpeed,a,this._sidewaysSpeedMax,this._sidewaysAcceleration,this._sidewaysDeceleration,e)}static getAcceleratedSpeed(e,t,a,o,s,r){let i=e;return t<0?e<=t?i=Math.min(t,e+s*r):e<=0?i-=Math.max(-a,o*r):i=Math.max(t,e-Math.max(o,s)*r):t>0?e>=t?i=Math.max(t,e-s*r):e>=0?i=Math.min(a,e+o*r):i=Math.min(t,e+Math.max(o,s)*r):(e<0&&(i=Math.min(e+s*r,0)),e>0&&(i=Math.max(e-s*r,0))),i}updateGroundVelocity(e,t){if(!this.character||!e._body)return!1;const o=this._sharedData.worldInvScale;if(!this.character.IsSupported())return!1;const s=this._sharedData.physicsSystem.GetBodyLockInterface().TryGetBody(this.character.GetGroundBodyID()),r=s.IsKinematic()&&s.GetLinearVelocity().Equals(Jolt.Vec3.prototype.sZero())&&s.GetAngularVelocity().Equals(Jolt.Vec3.prototype.sZero());if(r){const n=s.gdjsAssociatedBehavior;if(n){const d=1/t;s.SetLinearVelocity(this.getVec3((n.owner3D.getX()-n._objectOldX)*o*d,(n.owner3D.getY()-n._objectOldY)*o*d,(n.owner3D.getZ()-n._objectOldZ)*o*d)),s.SetAngularVelocity(this.getVec3(0,0,h.toRad(h.evtTools.common.angleDifference(n.owner3D.getAngle(),n._objectOldRotationZ))*d))}}this.character.UpdateGroundVelocity();const i=s.GetAngularVelocity().GetZ();if(i!==0){const n=i*t;this.character.SetRotation(Jolt.Quat.prototype.sEulerAngles(this.getVec3(0,0,this.character.GetRotation().GetRotationAngle(Jolt.Vec3.prototype.sAxisZ())+n))),this._forwardAngle+=h.toDegrees(n)}r&&(s.SetLinearVelocity(Jolt.Vec3.prototype.sZero()),s.SetAngularVelocity(Jolt.Vec3.prototype.sZero()));const c=1*Math.PI/180;return Math.abs(s.GetAngularVelocity().GetX())<c&&Math.abs(s.GetAngularVelocity().GetY())<c}doStepPostEvents(e){}onObjectHotReloaded(){}getSlopeMaxAngle(){return this._slopeMaxAngle}setSlopeMaxAngle(e){e<0||e>=90||(this._slopeMaxAngle=e,e===45?this._slopeClimbingFactor=1:this._slopeClimbingFactor=Math.max(1/1024,Math.tan(h.toRad(e))),this._slopeClimbingMinNormalZ=Math.min(Math.cos(h.toRad(e)),1-1/1024))}getStairHeightMax(){return this._stairHeightMax}setStairHeightMax(e){this._stairHeightMax=e;const t=this.getPhysics3D();if(!t)return;const{extendedUpdateSettings:a}=t,o=e*this._sharedData.worldInvScale;a.mWalkStairsStepUp=this.getVec3(0,0,o),a.mWalkStairsMinStepForward=.02/.4*o,a.mWalkStairsStepForwardTest=.15/.4*o}getGravity(){return this._gravity}setGravity(e){this._gravity=e}getMaxFallingSpeed(){return this._maxFallingSpeed}setMaxFallingSpeed(e,t=!1){if(t&&!this.isOnFloor()){const a=this._currentFallSpeed-e;a>0&&(this._currentFallSpeed-=a,this._currentJumpSpeed=Math.max(0,this.getCurrentJumpSpeed()-a))}this._maxFallingSpeed=e}getForwardAcceleration(){return this._forwardAcceleration}setForwardAcceleration(e){this._forwardAcceleration=e}getForwardDeceleration(){return this._forwardDeceleration}setForwardDeceleration(e){this._forwardDeceleration=e}getForwardSpeedMax(){return this._forwardSpeedMax}setForwardSpeedMax(e){this._forwardSpeedMax=e}getSidewaysAcceleration(){return this._sidewaysAcceleration}setSidewaysAcceleration(e){this._sidewaysAcceleration=e}getSidewaysDeceleration(){return this._sidewaysDeceleration}setSidewaysDeceleration(e){this._sidewaysDeceleration=e}getSidewaysSpeedMax(){return this._sidewaysSpeedMax}setSidewaysSpeedMax(e){this._sidewaysSpeedMax=e}getJumpSpeed(){return this._jumpSpeed}setJumpSpeed(e){this._jumpSpeed=e}getJumpSustainTime(){return this._jumpSustainTime}setJumpSustainTime(e){this._jumpSustainTime=e}getForwardAngle(){return this._forwardAngle}setForwardAngle(e){this._forwardAngle=e,this._shouldBindObjectAndForwardAngle&&this.owner.setAngle(e)}isForwardAngleAround(e,t){return Math.abs(h.evtTools.common.angleDifference(this._forwardAngle,e))<=t}shouldBindObjectAndForwardAngle(){return this._shouldBindObjectAndForwardAngle}setShouldBindObjectAndForwardAngle(e){this._shouldBindObjectAndForwardAngle=e}getCurrentForwardSpeed(){return this._currentForwardSpeed}setCurrentForwardSpeed(e){this._currentForwardSpeed=e}getCurrentSidewaysSpeed(){return this._currentSidewaysSpeed}setCurrentSidewaysSpeed(e){this._currentSidewaysSpeed=e}getCurrentFallSpeed(){return this._currentFallSpeed}setCurrentFallSpeed(e){this._currentFallSpeed=h.evtTools.common.clamp(e,0,this._maxFallingSpeed)}getCurrentJumpSpeed(){return this._currentJumpSpeed}setCurrentJumpSpeed(e){this._currentJumpSpeed=Math.max(0,e)}canJump(){return this._canJump}setCanJump(){this._canJump=!0}setCanNotAirJump(){(this.isJumping()||this.isFalling())&&(this._canJump=!1)}abortJump(){this.isJumping()&&(this._currentFallSpeed=0,this._currentJumpSpeed=0)}simulateForwardKey(){this._hasPressedForwardKey=!0}wasForwardKeyPressed(){return this._wasForwardKeyPressed}simulateBackwardKey(){this._hasPressedBackwardKey=!0}wasBackwardKeyPressed(){return this._wasBackwardKeyPressed}simulateRightKey(){this._hasPressedRightKey=!0}wasRightKeyPressed(){return this._wasRightKeyPressed}simulateLeftKey(){this._hasPressedLeftKey=!0}wasLeftKeyPressed(){return this._wasLeftKeyPressed}simulateJumpKey(){this._hasPressedJumpKey=!0}wasJumpKeyPressed(){return this._wasJumpKeyPressed}simulateStick(e,t){this._hasUsedStick=!0,this._stickAngle=e,this._stickForce=Math.max(0,Math.min(1,t))}wasStickUsed(){return this._wasStickUsed}getStickAngle(){return this._wasStickUsed?this._stickAngle:0}getStickForce(){return this._wasStickUsed?this._stickForce:0}isOnFloor(){return this.character?this.character.IsSupported()&&this.character.GetGroundNormal().GetZ()>=this._slopeClimbingMinNormalZ&&this._currentJumpSpeed<=this._currentFallSpeed:!1}isOnFloorObject(e){return!e._body||!this.character||!this.isOnFloor()?!1:this.character.GetGroundBodyID().GetIndexAndSequenceNumber()===e._body.GetID().GetIndexAndSequenceNumber()}isJumping(){return this._currentJumpSpeed>0}isFallingWithoutJumping(){return!this.isOnFloor()&&!this.isJumping()}isFalling(){return this.isFallingWithoutJumping()||this.isJumping()&&this._currentFallSpeed>this._currentJumpSpeed}isMovingEvenALittle(){return this._hasReallyMoved&&this._currentForwardSpeed!==0||this._currentJumpSpeed!==0||this._currentFallSpeed!==0}getJumpSpeedToReach(e){e=-Math.abs(e);const t=this._gravity,a=this._maxFallingSpeed,o=this._jumpSustainTime,s=a/t,r=n=>Math.sqrt(-n*t*2),i=n=>-t*o+a+Math.sqrt(t*t*o*o-2*n*t-a*a);let c=0,l=0;return s>o?(c=-t*o+Math.sqrt(2*t*t*o*o-4*e*t),l=(t*o+c)/(2*t),l<o?c=r(e):l>s&&(c=i(e))):(c=r(e),l=c/t,l>s&&(c=i(e))),c}};let b=F;b.epsilon=2**-20,h.PhysicsCharacter3DRuntimeBehavior=b,h.registerBehavior("Physics3D::PhysicsCharacter3D",h.PhysicsCharacter3DRuntimeBehavior),function(a){class D{constructor(s){this.characterVsCharacterCollision=new Jolt.CharacterVsCharacterCollisionSimple}static getManager(s){return s.charactersManager||(s.charactersManager=new h.PhysicsCharacter3DRuntimeBehavior.CharactersManager(s)),s.charactersManager}addCharacter(s){this.characterVsCharacterCollision.Add(s),s.SetCharacterVsCharacterCollision(this.characterVsCharacterCollision)}removeCharacter(s){this.characterVsCharacterCollision.Remove(s)}destroy(){Jolt.destroy(this.characterVsCharacterCollision)}}a.CharactersManager=D,h.registerRuntimeSceneUnloadedCallback(function(o){h.PhysicsCharacter3DRuntimeBehavior.CharactersManager.getManager(o).destroy()});class e{constructor(s){this.characterBehavior=s}createAndAddBody(){const s=this.characterBehavior.getPhysics3D();if(!s)return null;const{behavior:r}=s,{_slopeMaxAngle:i,owner3D:c,_sharedData:l}=this.characterBehavior,n=r.createShape(),d=new Jolt.CharacterVirtualSettings;d.mInnerBodyLayer=this.characterBehavior._canBePushed?0:r.getBodyLayer(),d.mInnerBodyShape=n,d.mMass=n.GetMassProperties().get_mMass(),d.mMaxSlopeAngle=h.toRad(i),d.mShape=n,d.mUp=Jolt.Vec3.prototype.sAxisZ(),d.mBackFaceMode=Jolt.EBackFaceMode_CollideWithBackFaces;const C=c.getDepth()*l.worldInvScale,S=c.getWidth()*l.worldInvScale,v=c.getHeight()*l.worldInvScale,M=C/2,A=Math.sqrt(S*v)/2;d.mSupportingVolume=new Jolt.Plane(Jolt.Vec3.prototype.sAxisZ(),M-A*(1-Math.cos(h.toRad(Math.min(i+20,70)))));const p=new Jolt.CharacterVirtual(d,this.characterBehavior.getPhysicsPosition(l.getRVec3(0,0,0)),r.getPhysicsRotation(l.getQuat(0,0,0,1)),l.physicsSystem),m=l.physicsSystem.GetBodyLockInterface().TryGetBody(p.GetInnerBodyID());if(this.characterBehavior.character=p,this.characterBehavior._canBePushed){this.characterBehavior.charactersManager.addCharacter(p);const y=new Jolt.CharacterContactListenerJS;y.OnAdjustBodyVelocity=(f,g,w,P)=>{},y.OnContactValidate=(f,g,w)=>!0,y.OnCharacterContactValidate=(f,g,w)=>{const P=Jolt.wrapPointer(f,Jolt.CharacterVirtual),u=Jolt.wrapPointer(g,Jolt.CharacterVirtual),_=l.physicsSystem.GetBodyLockInterface().TryGetBody(P.GetInnerBodyID()),B=l.physicsSystem.GetBodyLockInterface().TryGetBody(u.GetInnerBodyID()),J=_.gdjsAssociatedBehavior,j=B.gdjsAssociatedBehavior;return!J||!j?!0:J.canCollideAgainst(j)},y.OnContactAdded=(f,g,w,P,u,_)=>{},y.OnCharacterContactAdded=(f,g,w,P,u,_)=>{},y.OnContactSolve=(f,g,w,P,u,_,B,J,j)=>{},y.OnCharacterContactSolve=(f,g,w,P,u,_,B,J,j)=>{},p.SetListener(y)}return m}updateObjectFromBody(){const{character:s}=this.characterBehavior;!s||(this.characterBehavior.moveObjectToPhysicsPosition(s.GetPosition()),this.characterBehavior.moveObjectToPhysicsRotation(s.GetRotation()))}updateBodyFromObject(){const s=this.characterBehavior.getPhysics3D();if(!s)return;const{behavior:r}=s,{character:i,owner3D:c,_sharedData:l}=this.characterBehavior;!i||((r._objectOldX!==c.getX()||r._objectOldY!==c.getY()||r._objectOldZ!==c.getZ())&&this.updateCharacterPosition(),(r._objectOldRotationX!==c.getRotationX()||r._objectOldRotationY!==c.getRotationY()||r._objectOldRotationZ!==c.getAngle())&&i.SetRotation(this.characterBehavior.getPhysicsRotation(l.getQuat(0,0,0,1))))}updateCharacterPosition(){const{character:s,_sharedData:r}=this.characterBehavior;!s||s.SetPosition(this.characterBehavior.getPhysicsPosition(r.getRVec3(0,0,0)))}recreateShape(){const s=this.characterBehavior.getPhysics3D();if(!s)return;const{behavior:r,broadPhaseLayerFilter:i,objectLayerFilter:c,bodyFilter:l,shapeFilter:n}=s,{character:d,_sharedData:C}=this.characterBehavior;if(!d)return;const S=r.createShape();!d.SetShape(S,Number.MAX_VALUE,i,c,l,n,C.jolt.GetTempAllocator())||(d.SetInnerBodyShape(S),d.SetMass(S.GetMassProperties().get_mMass()),this.updateCharacterPosition())}destroyBody(){this.characterBehavior._destroyCharacter()}}a.CharacterBodyUpdater=e;class t{constructor(s){this._currentContacts=[];this._previousContacts=[];this.characterBehavior=s}clearContacts(){this._previousContacts.length=0,this._currentContacts.length=0}updateContacts(){const s=this._previousContacts;this._previousContacts=this._currentContacts,this._currentContacts=s,this._currentContacts.length=0;const{character:r,_sharedData:i}=this.characterBehavior;if(!r)return;const c=r.GetActiveContacts();for(let l=0;l<c.size();l++){const n=c.at(l),S=i.physicsSystem.GetBodyLockInterface().TryGetBody(n.mBodyB).gdjsAssociatedBehavior;S&&this._currentContacts.push(S)}}isColliding(s){const{character:r}=this.characterBehavior;return r?this._currentContacts.some(i=>i.owner===s):!1}hasCollisionStartedWith(s){const{character:r}=this.characterBehavior;return r?this._currentContacts.some(i=>i.owner===s)&&!this._previousContacts.some(i=>i.owner===s):!1}hasCollisionStoppedWith(s){const{character:r}=this.characterBehavior;return r?!this._currentContacts.some(i=>i.owner===s)&&this._previousContacts.some(i=>i.owner===s):!1}}a.CharacterCollisionChecker=t}(b=h.PhysicsCharacter3DRuntimeBehavior||(h.PhysicsCharacter3DRuntimeBehavior={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=PhysicsCharacter3DRuntimeBehavior.js.map
