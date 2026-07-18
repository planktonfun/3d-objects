
gdjs.evtsExt__ClashRoyale__TowerHpBar = gdjs.evtsExt__ClashRoyale__TowerHpBar || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar = class TowerHpBar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Team = objectData.content.Team !== undefined ? objectData.content.Team : "red";
    this._objectData.MaxHealth = objectData.content.MaxHealth !== undefined ? objectData.content.MaxHealth : Number("100") || 0;
    this._objectData.Health = objectData.content.Health !== undefined ? objectData.content.Health : Number("100") || 0;
    this._objectData.HealthbarWidth = Number("145") || 0;
    this._objectData.MainHpBar = objectData.content.MainHpBar !== undefined ? objectData.content.MainHpBar : false;
    
    this._animator = new gdjs.SpriteAnimator(
        objectData.animatable.animations,
        gdjs.CustomRuntimeObject2DRenderer.getAnimationFrameTextureManager(
            parentInstanceContainer.getGame().getImageManager()));


    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Team !== newObjectData.content.Team)
      this._objectData.Team = newObjectData.content.Team;
    if (oldObjectData.content.MaxHealth !== newObjectData.content.MaxHealth)
      this._objectData.MaxHealth = newObjectData.content.MaxHealth;
    if (oldObjectData.content.Health !== newObjectData.content.Health)
      this._objectData.Health = newObjectData.content.Health;
    if (oldObjectData.content.HealthbarWidth !== newObjectData.content.HealthbarWidth)
      this._objectData.HealthbarWidth = newObjectData.content.HealthbarWidth;
    if (oldObjectData.content.MainHpBar !== newObjectData.content.MainHpBar)
      this._objectData.MainHpBar = newObjectData.content.MainHpBar;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getTeam() {
    return this._objectData.Team !== undefined ? this._objectData.Team : "red";
  }
  _setTeam(newValue) {
    this._objectData.Team = newValue;
  }
  _getMaxHealth() {
    return this._objectData.MaxHealth !== undefined ? this._objectData.MaxHealth : Number("100") || 0;
  }
  _setMaxHealth(newValue) {
    this._objectData.MaxHealth = newValue;
  }
  _getHealth() {
    return this._objectData.Health !== undefined ? this._objectData.Health : Number("100") || 0;
  }
  _setHealth(newValue) {
    this._objectData.Health = newValue;
  }
  _getHealthbarWidth() {
    return this._objectData.HealthbarWidth !== undefined ? this._objectData.HealthbarWidth : Number("145") || 0;
  }
  _setHealthbarWidth(newValue) {
    this._objectData.HealthbarWidth = newValue;
  }
  _getMainHpBar() {
    return this._objectData.MainHpBar !== undefined ? this._objectData.MainHpBar : false;
  }
  _setMainHpBar(newValue) {
    this._objectData.MainHpBar = newValue;
  }
  _toggleMainHpBar() {
    this._setMainHpBar(!this._getMainHpBar());
  }

  
  //  gdjs.Animatable interface implementation
  getAnimator() {
    return this._animator;
  }
  getAnimationIndex() {
    return this._animator.getAnimationIndex();
  }
  setAnimationIndex(animationIndex) {
    this._animator.setAnimationIndex(animationIndex);
  }
  getAnimationName() {
    return this._animator.getAnimationName();
  }
  setAnimationName(animationName) {
    this._animator.setAnimationName(animationName);
  }
  hasAnimationEnded() {
    return this._animator.hasAnimationEnded();
  }
  isAnimationPaused() {
    return this._animator.isAnimationPaused();
  }
  pauseAnimation() {
    this._animator.pauseAnimation();
  }
  resumeAnimation() {
    this._animator.resumeAnimation();
  }
  getAnimationSpeedScale() {
    return this._animator.getAnimationSpeedScale();
  }
  setAnimationSpeedScale(ratio) {
    this._animator.setAnimationSpeedScale(ratio);
  }
  getAnimationElapsedTime() {
    return this._animator.getAnimationElapsedTime();
  }
  setAnimationElapsedTime(time) {
    this._animator.setAnimationElapsedTime(time);
  }
  getAnimationDuration() {
    return this._animator.getAnimationDuration();
  }


  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].MainHpBar(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].Health(eventsFunctionContext) < (gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].MaxHealth(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icons"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MainIcon"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("blueHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("redHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].MainHpBar(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icons"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MainIcon"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("blueHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("redHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].Team(eventsFunctionContext) == "red" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("blueHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("redHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getObjects("Object")[0]._getHealth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((eventsFunctionContext.getObjects("Object")[0]._getHealth() / eventsFunctionContext.getObjects("Object")[0]._getMaxHealth()) * eventsFunctionContext.getObjects("Object")[0]._getHealthbarWidth());
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].Team(eventsFunctionContext) == "blue" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("blueHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("redHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getObjects("Object")[0]._getHealth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((eventsFunctionContext.getObjects("Object")[0]._getHealth() / eventsFunctionContext.getObjects("Object")[0]._getMaxHealth()) * eventsFunctionContext.getObjects("Object")[0]._getHealthbarWidth());
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].MainHpBar(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].Health(eventsFunctionContext) == (gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i].MaxHealth(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icons"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MainIcon"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("blueHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("redHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1[i].hide(false);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.Update = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.UpdateContext.GDMainIconObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getTeam();}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.Team = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.TeamContext.GDMainIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setTeam(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeam = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetTeamContext.GDMainIconObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getMaxHealth();}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MaxHealthContext.GDMainIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setMaxHealth(eventsFunctionContext.getArgument("Value"))
}
{eventsFunctionContext.getObjects("Object")[0]._setHealth(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMaxHealthContext.GDMainIconObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getHealth();}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.Health = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.HealthContext.GDMainIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BldgHp"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setHealth(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1[i].setAnimationFrame(0);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetHealthContext.GDMainIconObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1[i].SetHealth(eventsFunctionContext.getObjects("Object")[0]._getMaxHealth(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.onCreatedContext.GDMainIconObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getMainHpBar();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBar = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.MainHpBarContext.GDMainIconObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext = {};
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects2= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects1= [];
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects2= [];


gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setMainHpBar(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setMainHpBar(true)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1[i].Update(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBar = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDblueHpObjectsList = [...runtimeScene.getObjects("blueHp")];
var GDblueHpObjects = Hashtable.newFrom({"blueHp": thisGDblueHpObjectsList});
var thisGDredHpObjectsList = [...runtimeScene.getObjects("redHp")];
var GDredHpObjects = Hashtable.newFrom({"redHp": thisGDredHpObjectsList});
var thisGDBldgHpObjectsList = [...runtimeScene.getObjects("BldgHp")];
var GDBldgHpObjects = Hashtable.newFrom({"BldgHp": thisGDBldgHpObjectsList});
var thisGDIconsObjectsList = [...runtimeScene.getObjects("Icons")];
var GDIconsObjects = Hashtable.newFrom({"Icons": thisGDIconsObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDMainIconObjectsList = [...runtimeScene.getObjects("MainIcon")];
var GDMainIconObjects = Hashtable.newFrom({"MainIcon": thisGDMainIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "blueHp": GDblueHpObjects
, "redHp": GDredHpObjects
, "BldgHp": GDBldgHpObjects
, "Icons": GDIconsObjects
, "Background": GDBackgroundObjects
, "MainIcon": GDMainIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "blueHp": thisGDblueHpObjectsList
, "redHp": thisGDredHpObjectsList
, "BldgHp": thisGDBldgHpObjectsList
, "Icons": thisGDIconsObjectsList
, "Background": thisGDBackgroundObjectsList
, "MainIcon": thisGDMainIconObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ClashRoyale"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ClashRoyale"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDblueHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDredHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBldgHpObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDIconsObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.SetMainHpBarContext.GDMainIconObjects2.length = 0;


return;
}

gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
this._animator.step(this.getElapsedTime() / 1000);
};


gdjs.registerObject("ClashRoyale::TowerHpBar", gdjs.evtsExt__ClashRoyale__TowerHpBar.TowerHpBar);
