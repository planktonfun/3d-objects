
gdjs.evtsExt__ClashRoyale__Emotes = gdjs.evtsExt__ClashRoyale__Emotes || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__ClashRoyale__Emotes.Emotes = class Emotes extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.EmoteType = objectData.content.EmoteType !== undefined ? objectData.content.EmoteType : "goodgame";
    this._objectData.Team = objectData.content.Team !== undefined ? objectData.content.Team : "blue";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.EmoteType !== newObjectData.content.EmoteType)
      this._objectData.EmoteType = newObjectData.content.EmoteType;
    if (oldObjectData.content.Team !== newObjectData.content.Team)
      this._objectData.Team = newObjectData.content.Team;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getEmoteType() {
    return this._objectData.EmoteType !== undefined ? this._objectData.EmoteType : "goodgame";
  }
  _setEmoteType(newValue) {
    this._objectData.EmoteType = newValue;
  }
  _getTeam() {
    return this._objectData.Team !== undefined ? this._objectData.Team : "blue";
  }
  _setTeam(newValue) {
    this._objectData.Team = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects5= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects6= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects7= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects5= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects6= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects7= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects5= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects6= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects7= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects5= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects6= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects7= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects5= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects6= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects7= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesPlaceHolderObjects1Objects = Hashtable.newFrom({"EmotesPlaceHolder": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesTextObjects1Objects = Hashtable.newFrom({"EmotesText": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28337396 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EmotesPlaceHolder"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionTween2("p", 42, 75, "linear", 0.16666, false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("s", 1, "linear", 0.16666, false, true);
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28337396, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28337396);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1) asyncObjectsList.addObject("EmotesPlaceHolder", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28337396(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28337396, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesPlaceHolderObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesTextObjects1Objects, 0, 0, "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1.length !== 0 ? gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1[0] : null), (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length !== 0 ? gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[0] : null));
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0]._getEmoteType());
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(0.411);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionTween2("p", 15, 75, "linear", 0.15, false);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween3("s", 1.197, "linear", 0.15, false, true);
}
}

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects1Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384844 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28384844, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384844);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects6Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects6});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList2 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("EmotesImage"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects6);


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects6Objects, eventsFunctionContext.getBehaviorName("Tween"), 232, 133, 34 / 171, 0, 0.1166666667, true, eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384844(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28384844, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384348 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList2(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28384348, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384348);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects5Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects5});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList3 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("EmotesImage"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects5);


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
/* Don't save EmotesImage as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects5Objects, eventsFunctionContext.getBehaviorName("Tween"), 140, 68, 187 / 171, 0, 0.1, false, eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28384348(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28384348, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28383236 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList3(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28383236, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28383236);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList4 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
/* Don't save EmotesImage as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.533333333), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28383236(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28383236, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28382540 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList4(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28382540, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28382540);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects3Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects3});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList5 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("EmotesImage"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects3);


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
/* Don't save EmotesImage as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects3Objects, eventsFunctionContext.getBehaviorName("Tween"), 150, 75, 173 / 171, 0, 0.08333333333, false, eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28382540(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28382540, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28380924 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList5(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28380924, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28380924);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects2Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects2});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList6 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("EmotesImage"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects2);


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
/* Don't save EmotesImage as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects2Objects, eventsFunctionContext.getBehaviorName("Tween"), 154, 78, 167 / 171, 0, 0.08333333333, false, eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28380924(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28380924, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28375380 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList6(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.idToCallbackMap.set(28375380, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28375380);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects1Objects = Hashtable.newFrom({"EmotesImage": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1) asyncObjectsList.addObject("EmotesImage", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__ClashRoyale__TweenScaleAndPosition.func(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects1Objects, eventsFunctionContext.getBehaviorName("Tween"), 135, 65, 206 / 171, 0, 0.1666666667, false, eventsFunctionContext), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.asyncCallback28375380(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28375380, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546UpdateContext_9546GDEmotesImageObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0]._getEmoteType());
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(71 / 171);
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1[i].setPosition(0,0);
}
}

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i].Team(eventsFunctionContext) == "blue" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i].Team(eventsFunctionContext) == "red" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "Text");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Type") == "Image");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.Update = function(Type, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects7.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.eventsList9(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDObjectObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesPlaceHolderObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesTextObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDIndicatorObjects7.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects5.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects6.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.UpdateContext.GDEmotesImageObjects7.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects2= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Indicator"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.onCreatedContext.GDEmotesImageObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachIndex2 = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachObjects2 = [];

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachTemporary2 = null;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachTotalCount2 = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects4= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects4= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546doStepPostEventsContext_9546GDEmotesTextObjects2Objects = Hashtable.newFrom({"EmotesText": gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2});
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[i].Team(eventsFunctionContext) == "red" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[i].Team(eventsFunctionContext) == "blue" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3);

{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("EmotesPlaceHolder"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1);

for (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachIndex2 = 0;gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachIndex2 < gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length;++gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("EmotesText"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length = 0;


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachTemporary2 = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachIndex2];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.push(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595ClashRoyale_9595_9595Emotes_9546Emotes_9546prototype_9546doStepPostEventsContext_9546GDEmotesTextObjects2Objects, (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length !== 0 ? gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale((( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()) * (1.29));
}
}
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2[i].setCenterPositionInScene((( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2[0].getCenterXInScene()),(( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2[0].getCenterYInScene()));
}
}

{ //Subevents: 
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("EmotesPlaceHolder"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("EmotesText"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].getVariableNumber(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].getVariables().get("LifeTime")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].getVariableNumber(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].getVariables().get("LifeTime")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1 */
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].returnVariable(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].getVariables().get("LifeTime")).sub(1);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].returnVariable(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].getVariables().get("LifeTime")).sub(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("EmotesPlaceHolder"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("EmotesText"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].getVariableNumber(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].getVariables().get("LifeTime")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].getVariableNumber(gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].getVariables().get("LifeTime")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[k] = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1 */
/* Reuse gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects4.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesPlaceHolderObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesTextObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDIndicatorObjects4.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPostEventsContext.GDEmotesImageObjects4.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects2= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getEmoteType();}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteType = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.EmoteTypeContext.GDEmotesImageObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects3= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects3= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.userFunc0xa6bf58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const key = eventsFunctionContext.getArgument("Value").toString();
const soundFile = eventsFunctionContext.sceneVariablesForExtension._variables.get('EmoteSoundMap').getChild(key).getAsString();

if(soundFile == '0') return;

gdjs.evtTools.sound.playSound(runtimeScene, soundFile, 0, 100, 1);
};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{



}


{


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.userFunc0xa6bf58(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.asyncCallback28363508 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.idToCallbackMap.set(28363508, gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.asyncCallback28363508);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1666666667 * 2), (runtimeScene) => (gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.asyncCallback28363508(runtimeScene, eventsFunctionContext, asyncObjectsList)), 28363508, asyncObjectsList);
}
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.getArgument("Value"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2[i].Update("Text", eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), eventsFunctionContext.getArgument("Value"));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2[i].Update("Image", eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2), eventsFunctionContext.getArgument("Value"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setEmoteType(eventsFunctionContext.getArgument("Value"))
}

{ //Subevents
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteType = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects3.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesPlaceHolderObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesTextObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDIndicatorObjects3.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetEmoteTypeContext.GDEmotesImageObjects3.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects2= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getTeam();}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.Team = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.TeamContext.GDEmotesImageObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects2= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setTeam(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeam = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.SetTeamContext.GDEmotesImageObjects2.length = 0;


return;
}
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext = {};
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects2= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects1= [];
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects2= [];


gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1[i].SetEmoteType(eventsFunctionContext.getArgument("Type"), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.Animate = function(Type, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEmotesPlaceHolderObjectsList = [...runtimeScene.getObjects("EmotesPlaceHolder")];
var GDEmotesPlaceHolderObjects = Hashtable.newFrom({"EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList});
var thisGDEmotesTextObjectsList = [...runtimeScene.getObjects("EmotesText")];
var GDEmotesTextObjects = Hashtable.newFrom({"EmotesText": thisGDEmotesTextObjectsList});
var thisGDIndicatorObjectsList = [...runtimeScene.getObjects("Indicator")];
var GDIndicatorObjects = Hashtable.newFrom({"Indicator": thisGDIndicatorObjectsList});
var thisGDEmotesImageObjectsList = [...runtimeScene.getObjects("EmotesImage")];
var GDEmotesImageObjects = Hashtable.newFrom({"EmotesImage": thisGDEmotesImageObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EmotesPlaceHolder": GDEmotesPlaceHolderObjects
, "EmotesText": GDEmotesTextObjects
, "Indicator": GDIndicatorObjects
, "EmotesImage": GDEmotesImageObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EmotesPlaceHolder": thisGDEmotesPlaceHolderObjectsList
, "EmotesText": thisGDEmotesTextObjectsList
, "Indicator": thisGDIndicatorObjectsList
, "EmotesImage": thisGDEmotesImageObjectsList
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
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects2.length = 0;

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesPlaceHolderObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesTextObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDIndicatorObjects2.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects1.length = 0;
gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.AnimateContext.GDEmotesImageObjects2.length = 0;


return;
}

gdjs.evtsExt__ClashRoyale__Emotes.Emotes.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("ClashRoyale::Emotes", gdjs.evtsExt__ClashRoyale__Emotes.Emotes);
