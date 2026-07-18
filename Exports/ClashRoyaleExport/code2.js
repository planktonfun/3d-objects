gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDBattleButtonObjects1= [];
gdjs.MenuCode.GDBattleButtonObjects2= [];
gdjs.MenuCode.GDBattleButtonObjects3= [];
gdjs.MenuCode.GDguideObjects1= [];
gdjs.MenuCode.GDguideObjects2= [];
gdjs.MenuCode.GDguideObjects3= [];
gdjs.MenuCode.GDSudoFontObjects1= [];
gdjs.MenuCode.GDSudoFontObjects2= [];
gdjs.MenuCode.GDSudoFontObjects3= [];
gdjs.MenuCode.GDBackgroundPatternObjects1= [];
gdjs.MenuCode.GDBackgroundPatternObjects2= [];
gdjs.MenuCode.GDBackgroundPatternObjects3= [];
gdjs.MenuCode.GDIconsObjects1= [];
gdjs.MenuCode.GDIconsObjects2= [];
gdjs.MenuCode.GDIconsObjects3= [];
gdjs.MenuCode.GDArenasObjects1= [];
gdjs.MenuCode.GDArenasObjects2= [];
gdjs.MenuCode.GDArenasObjects3= [];
gdjs.MenuCode.GDPlayerNameObjects1= [];
gdjs.MenuCode.GDPlayerNameObjects2= [];
gdjs.MenuCode.GDPlayerNameObjects3= [];
gdjs.MenuCode.GDClanNameObjects1= [];
gdjs.MenuCode.GDClanNameObjects2= [];
gdjs.MenuCode.GDClanNameObjects3= [];
gdjs.MenuCode.GDArenaRatingObjects1= [];
gdjs.MenuCode.GDArenaRatingObjects2= [];
gdjs.MenuCode.GDArenaRatingObjects3= [];
gdjs.MenuCode.GDGemAmountObjects1= [];
gdjs.MenuCode.GDGemAmountObjects2= [];
gdjs.MenuCode.GDGemAmountObjects3= [];
gdjs.MenuCode.GDCoinAmountObjects1= [];
gdjs.MenuCode.GDCoinAmountObjects2= [];
gdjs.MenuCode.GDCoinAmountObjects3= [];
gdjs.MenuCode.GDExpAmountObjects1= [];
gdjs.MenuCode.GDExpAmountObjects2= [];
gdjs.MenuCode.GDExpAmountObjects3= [];
gdjs.MenuCode.GDBannersObjects1= [];
gdjs.MenuCode.GDBannersObjects2= [];
gdjs.MenuCode.GDBannersObjects3= [];
gdjs.MenuCode.GDShadowObjects1= [];
gdjs.MenuCode.GDShadowObjects2= [];
gdjs.MenuCode.GDShadowObjects3= [];
gdjs.MenuCode.GDLightSourceObjects1= [];
gdjs.MenuCode.GDLightSourceObjects2= [];
gdjs.MenuCode.GDLightSourceObjects3= [];
gdjs.MenuCode.GDAnimatedIconsObjects1= [];
gdjs.MenuCode.GDAnimatedIconsObjects2= [];
gdjs.MenuCode.GDAnimatedIconsObjects3= [];
gdjs.MenuCode.GDNotificationCountObjects1= [];
gdjs.MenuCode.GDNotificationCountObjects2= [];
gdjs.MenuCode.GDNotificationCountObjects3= [];
gdjs.MenuCode.GDNotificationCount2Objects1= [];
gdjs.MenuCode.GDNotificationCount2Objects2= [];
gdjs.MenuCode.GDNotificationCount2Objects3= [];
gdjs.MenuCode.GDNotificationCount3Objects1= [];
gdjs.MenuCode.GDNotificationCount3Objects2= [];
gdjs.MenuCode.GDNotificationCount3Objects3= [];
gdjs.MenuCode.GDLoadingBarObjects1= [];
gdjs.MenuCode.GDLoadingBarObjects2= [];
gdjs.MenuCode.GDLoadingBarObjects3= [];
gdjs.MenuCode.GDCancelButtonObjects1= [];
gdjs.MenuCode.GDCancelButtonObjects2= [];
gdjs.MenuCode.GDCancelButtonObjects3= [];
gdjs.MenuCode.GDSearchingForOpponentsObjects1= [];
gdjs.MenuCode.GDSearchingForOpponentsObjects2= [];
gdjs.MenuCode.GDSearchingForOpponentsObjects3= [];
gdjs.MenuCode.GDTipObjects1= [];
gdjs.MenuCode.GDTipObjects2= [];
gdjs.MenuCode.GDTipObjects3= [];
gdjs.MenuCode.GDTipDescObjects1= [];
gdjs.MenuCode.GDTipDescObjects2= [];
gdjs.MenuCode.GDTipDescObjects3= [];
gdjs.MenuCode.GDSearchingOpponentBarObjects1= [];
gdjs.MenuCode.GDSearchingOpponentBarObjects2= [];
gdjs.MenuCode.GDSearchingOpponentBarObjects3= [];
gdjs.MenuCode.GDLoadingBar2Objects1= [];
gdjs.MenuCode.GDLoadingBar2Objects2= [];
gdjs.MenuCode.GDLoadingBar2Objects3= [];
gdjs.MenuCode.GDLoadingBar3Objects1= [];
gdjs.MenuCode.GDLoadingBar3Objects2= [];
gdjs.MenuCode.GDLoadingBar3Objects3= [];
gdjs.MenuCode.GDReplaySpriteObjects1= [];
gdjs.MenuCode.GDReplaySpriteObjects2= [];
gdjs.MenuCode.GDReplaySpriteObjects3= [];


gdjs.MenuCode.asyncCallback29352844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Battle", false);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(29352844, gdjs.MenuCode.asyncCallback29352844);
gdjs.MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback29352844(runtimeScene, asyncObjectsList)), 29352844, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback29352412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtsExt__ClashRoyale__PlaySfxUsingId.func(runtimeScene, "AttackButton", null);
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(29352412, gdjs.MenuCode.asyncCallback29352412);
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.MenuCode.asyncCallback29352412(runtimeScene, asyncObjectsList)), 29352412, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.func(runtimeScene, "MenuMusic", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BattleButton"), gdjs.MenuCode.GDBattleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBattleButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBattleButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBattleButtonObjects1[k] = gdjs.MenuCode.GDBattleButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBattleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__ClashRoyale__PlaySfxUsingId.func(runtimeScene, "sound_press_battle_button", null);
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBattleButtonObjects1.length = 0;
gdjs.MenuCode.GDBattleButtonObjects2.length = 0;
gdjs.MenuCode.GDBattleButtonObjects3.length = 0;
gdjs.MenuCode.GDguideObjects1.length = 0;
gdjs.MenuCode.GDguideObjects2.length = 0;
gdjs.MenuCode.GDguideObjects3.length = 0;
gdjs.MenuCode.GDSudoFontObjects1.length = 0;
gdjs.MenuCode.GDSudoFontObjects2.length = 0;
gdjs.MenuCode.GDSudoFontObjects3.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects1.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects2.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects3.length = 0;
gdjs.MenuCode.GDIconsObjects1.length = 0;
gdjs.MenuCode.GDIconsObjects2.length = 0;
gdjs.MenuCode.GDIconsObjects3.length = 0;
gdjs.MenuCode.GDArenasObjects1.length = 0;
gdjs.MenuCode.GDArenasObjects2.length = 0;
gdjs.MenuCode.GDArenasObjects3.length = 0;
gdjs.MenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDClanNameObjects1.length = 0;
gdjs.MenuCode.GDClanNameObjects2.length = 0;
gdjs.MenuCode.GDClanNameObjects3.length = 0;
gdjs.MenuCode.GDArenaRatingObjects1.length = 0;
gdjs.MenuCode.GDArenaRatingObjects2.length = 0;
gdjs.MenuCode.GDArenaRatingObjects3.length = 0;
gdjs.MenuCode.GDGemAmountObjects1.length = 0;
gdjs.MenuCode.GDGemAmountObjects2.length = 0;
gdjs.MenuCode.GDGemAmountObjects3.length = 0;
gdjs.MenuCode.GDCoinAmountObjects1.length = 0;
gdjs.MenuCode.GDCoinAmountObjects2.length = 0;
gdjs.MenuCode.GDCoinAmountObjects3.length = 0;
gdjs.MenuCode.GDExpAmountObjects1.length = 0;
gdjs.MenuCode.GDExpAmountObjects2.length = 0;
gdjs.MenuCode.GDExpAmountObjects3.length = 0;
gdjs.MenuCode.GDBannersObjects1.length = 0;
gdjs.MenuCode.GDBannersObjects2.length = 0;
gdjs.MenuCode.GDBannersObjects3.length = 0;
gdjs.MenuCode.GDShadowObjects1.length = 0;
gdjs.MenuCode.GDShadowObjects2.length = 0;
gdjs.MenuCode.GDShadowObjects3.length = 0;
gdjs.MenuCode.GDLightSourceObjects1.length = 0;
gdjs.MenuCode.GDLightSourceObjects2.length = 0;
gdjs.MenuCode.GDLightSourceObjects3.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects1.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects2.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects3.length = 0;
gdjs.MenuCode.GDNotificationCountObjects1.length = 0;
gdjs.MenuCode.GDNotificationCountObjects2.length = 0;
gdjs.MenuCode.GDNotificationCountObjects3.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects1.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects2.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects3.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects1.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects2.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects3.length = 0;
gdjs.MenuCode.GDLoadingBarObjects1.length = 0;
gdjs.MenuCode.GDLoadingBarObjects2.length = 0;
gdjs.MenuCode.GDLoadingBarObjects3.length = 0;
gdjs.MenuCode.GDCancelButtonObjects1.length = 0;
gdjs.MenuCode.GDCancelButtonObjects2.length = 0;
gdjs.MenuCode.GDCancelButtonObjects3.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects1.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects2.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects3.length = 0;
gdjs.MenuCode.GDTipObjects1.length = 0;
gdjs.MenuCode.GDTipObjects2.length = 0;
gdjs.MenuCode.GDTipObjects3.length = 0;
gdjs.MenuCode.GDTipDescObjects1.length = 0;
gdjs.MenuCode.GDTipDescObjects2.length = 0;
gdjs.MenuCode.GDTipDescObjects3.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects1.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects2.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects3.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects1.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects2.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects3.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects1.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects2.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects3.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects1.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects2.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDBattleButtonObjects1.length = 0;
gdjs.MenuCode.GDBattleButtonObjects2.length = 0;
gdjs.MenuCode.GDBattleButtonObjects3.length = 0;
gdjs.MenuCode.GDguideObjects1.length = 0;
gdjs.MenuCode.GDguideObjects2.length = 0;
gdjs.MenuCode.GDguideObjects3.length = 0;
gdjs.MenuCode.GDSudoFontObjects1.length = 0;
gdjs.MenuCode.GDSudoFontObjects2.length = 0;
gdjs.MenuCode.GDSudoFontObjects3.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects1.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects2.length = 0;
gdjs.MenuCode.GDBackgroundPatternObjects3.length = 0;
gdjs.MenuCode.GDIconsObjects1.length = 0;
gdjs.MenuCode.GDIconsObjects2.length = 0;
gdjs.MenuCode.GDIconsObjects3.length = 0;
gdjs.MenuCode.GDArenasObjects1.length = 0;
gdjs.MenuCode.GDArenasObjects2.length = 0;
gdjs.MenuCode.GDArenasObjects3.length = 0;
gdjs.MenuCode.GDPlayerNameObjects1.length = 0;
gdjs.MenuCode.GDPlayerNameObjects2.length = 0;
gdjs.MenuCode.GDPlayerNameObjects3.length = 0;
gdjs.MenuCode.GDClanNameObjects1.length = 0;
gdjs.MenuCode.GDClanNameObjects2.length = 0;
gdjs.MenuCode.GDClanNameObjects3.length = 0;
gdjs.MenuCode.GDArenaRatingObjects1.length = 0;
gdjs.MenuCode.GDArenaRatingObjects2.length = 0;
gdjs.MenuCode.GDArenaRatingObjects3.length = 0;
gdjs.MenuCode.GDGemAmountObjects1.length = 0;
gdjs.MenuCode.GDGemAmountObjects2.length = 0;
gdjs.MenuCode.GDGemAmountObjects3.length = 0;
gdjs.MenuCode.GDCoinAmountObjects1.length = 0;
gdjs.MenuCode.GDCoinAmountObjects2.length = 0;
gdjs.MenuCode.GDCoinAmountObjects3.length = 0;
gdjs.MenuCode.GDExpAmountObjects1.length = 0;
gdjs.MenuCode.GDExpAmountObjects2.length = 0;
gdjs.MenuCode.GDExpAmountObjects3.length = 0;
gdjs.MenuCode.GDBannersObjects1.length = 0;
gdjs.MenuCode.GDBannersObjects2.length = 0;
gdjs.MenuCode.GDBannersObjects3.length = 0;
gdjs.MenuCode.GDShadowObjects1.length = 0;
gdjs.MenuCode.GDShadowObjects2.length = 0;
gdjs.MenuCode.GDShadowObjects3.length = 0;
gdjs.MenuCode.GDLightSourceObjects1.length = 0;
gdjs.MenuCode.GDLightSourceObjects2.length = 0;
gdjs.MenuCode.GDLightSourceObjects3.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects1.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects2.length = 0;
gdjs.MenuCode.GDAnimatedIconsObjects3.length = 0;
gdjs.MenuCode.GDNotificationCountObjects1.length = 0;
gdjs.MenuCode.GDNotificationCountObjects2.length = 0;
gdjs.MenuCode.GDNotificationCountObjects3.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects1.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects2.length = 0;
gdjs.MenuCode.GDNotificationCount2Objects3.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects1.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects2.length = 0;
gdjs.MenuCode.GDNotificationCount3Objects3.length = 0;
gdjs.MenuCode.GDLoadingBarObjects1.length = 0;
gdjs.MenuCode.GDLoadingBarObjects2.length = 0;
gdjs.MenuCode.GDLoadingBarObjects3.length = 0;
gdjs.MenuCode.GDCancelButtonObjects1.length = 0;
gdjs.MenuCode.GDCancelButtonObjects2.length = 0;
gdjs.MenuCode.GDCancelButtonObjects3.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects1.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects2.length = 0;
gdjs.MenuCode.GDSearchingForOpponentsObjects3.length = 0;
gdjs.MenuCode.GDTipObjects1.length = 0;
gdjs.MenuCode.GDTipObjects2.length = 0;
gdjs.MenuCode.GDTipObjects3.length = 0;
gdjs.MenuCode.GDTipDescObjects1.length = 0;
gdjs.MenuCode.GDTipDescObjects2.length = 0;
gdjs.MenuCode.GDTipDescObjects3.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects1.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects2.length = 0;
gdjs.MenuCode.GDSearchingOpponentBarObjects3.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects1.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects2.length = 0;
gdjs.MenuCode.GDLoadingBar2Objects3.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects1.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects2.length = 0;
gdjs.MenuCode.GDLoadingBar3Objects3.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects1.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects2.length = 0;
gdjs.MenuCode.GDReplaySpriteObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
