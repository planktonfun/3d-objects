gdjs.LoadingCode = {};
gdjs.LoadingCode.localVariables = [];
gdjs.LoadingCode.idToCallbackMap = new Map();
gdjs.LoadingCode.GDBackgroundObjects1= [];
gdjs.LoadingCode.GDBackgroundObjects2= [];
gdjs.LoadingCode.GDlogoObjects1= [];
gdjs.LoadingCode.GDlogoObjects2= [];
gdjs.LoadingCode.GDLoadingBarObjects1= [];
gdjs.LoadingCode.GDLoadingBarObjects2= [];
gdjs.LoadingCode.GDLoadingTextObjects1= [];
gdjs.LoadingCode.GDLoadingTextObjects2= [];
gdjs.LoadingCode.GDLoadingTipObjects1= [];
gdjs.LoadingCode.GDLoadingTipObjects2= [];
gdjs.LoadingCode.GDReplaySpriteObjects1= [];
gdjs.LoadingCode.GDReplaySpriteObjects2= [];


gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx\\scroll_loading_01.ogg", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round((( gdjs.LoadingCode.GDLoadingBarObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDLoadingBarObjects1[0].Value(null)))) + "%");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingBarObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingBarObjects1[i].SetValue(gdjs.evtTools.common.lerp((gdjs.LoadingCode.GDLoadingBarObjects1[i].Value(null)), 100, 0.025), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingBar"), gdjs.LoadingCode.GDLoadingBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.round((( gdjs.LoadingCode.GDLoadingBarObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDLoadingBarObjects1[0].Value(null))) == 100);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Battle", false);
}
}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDBackgroundObjects1.length = 0;
gdjs.LoadingCode.GDBackgroundObjects2.length = 0;
gdjs.LoadingCode.GDlogoObjects1.length = 0;
gdjs.LoadingCode.GDlogoObjects2.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTipObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTipObjects2.length = 0;
gdjs.LoadingCode.GDReplaySpriteObjects1.length = 0;
gdjs.LoadingCode.GDReplaySpriteObjects2.length = 0;

gdjs.LoadingCode.eventsList0(runtimeScene);
gdjs.LoadingCode.GDBackgroundObjects1.length = 0;
gdjs.LoadingCode.GDBackgroundObjects2.length = 0;
gdjs.LoadingCode.GDlogoObjects1.length = 0;
gdjs.LoadingCode.GDlogoObjects2.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects1.length = 0;
gdjs.LoadingCode.GDLoadingBarObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTipObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTipObjects2.length = 0;
gdjs.LoadingCode.GDReplaySpriteObjects1.length = 0;
gdjs.LoadingCode.GDReplaySpriteObjects2.length = 0;


return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
