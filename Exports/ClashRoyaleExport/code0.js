gdjs.InitializeCode = {};
gdjs.InitializeCode.localVariables = [];
gdjs.InitializeCode.idToCallbackMap = new Map();
gdjs.InitializeCode.GDBackgroundObjects1= [];
gdjs.InitializeCode.GDBackgroundObjects2= [];
gdjs.InitializeCode.GDlogoObjects1= [];
gdjs.InitializeCode.GDlogoObjects2= [];
gdjs.InitializeCode.GDLoadingBarObjects1= [];
gdjs.InitializeCode.GDLoadingBarObjects2= [];
gdjs.InitializeCode.GDLoadingTextObjects1= [];
gdjs.InitializeCode.GDLoadingTextObjects2= [];
gdjs.InitializeCode.GDReplaySpriteObjects1= [];
gdjs.InitializeCode.GDReplaySpriteObjects2= [];


gdjs.InitializeCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.InitializeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__JsonLoader__LoadJSONToVariable.func(runtimeScene, "configs\\music.json", runtimeScene.getGame().getVariables().getFromIndex(2), null);
}
{gdjs.evtsExt__JsonLoader__LoadJSONToVariable.func(runtimeScene, "configs\\sounds.json", runtimeScene.getGame().getVariables().getFromIndex(3), null);
}
{gdjs.evtsExt__ClashRoyale__PlaySfxUsingId.func(runtimeScene, "sound_supercell_jingle", null);
}

{ //Subevents
gdjs.InitializeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.InitializeCode.GDlogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InitializeCode.GDlogoObjects1.length;i<l;++i) {
    if ( gdjs.InitializeCode.GDlogoObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.InitializeCode.GDlogoObjects1[k] = gdjs.InitializeCode.GDlogoObjects1[i];
        ++k;
    }
}
gdjs.InitializeCode.GDlogoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading", false);
}
}

}


};

gdjs.InitializeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InitializeCode.GDBackgroundObjects1.length = 0;
gdjs.InitializeCode.GDBackgroundObjects2.length = 0;
gdjs.InitializeCode.GDlogoObjects1.length = 0;
gdjs.InitializeCode.GDlogoObjects2.length = 0;
gdjs.InitializeCode.GDLoadingBarObjects1.length = 0;
gdjs.InitializeCode.GDLoadingBarObjects2.length = 0;
gdjs.InitializeCode.GDLoadingTextObjects1.length = 0;
gdjs.InitializeCode.GDLoadingTextObjects2.length = 0;
gdjs.InitializeCode.GDReplaySpriteObjects1.length = 0;
gdjs.InitializeCode.GDReplaySpriteObjects2.length = 0;

gdjs.InitializeCode.eventsList1(runtimeScene);
gdjs.InitializeCode.GDBackgroundObjects1.length = 0;
gdjs.InitializeCode.GDBackgroundObjects2.length = 0;
gdjs.InitializeCode.GDlogoObjects1.length = 0;
gdjs.InitializeCode.GDlogoObjects2.length = 0;
gdjs.InitializeCode.GDLoadingBarObjects1.length = 0;
gdjs.InitializeCode.GDLoadingBarObjects2.length = 0;
gdjs.InitializeCode.GDLoadingTextObjects1.length = 0;
gdjs.InitializeCode.GDLoadingTextObjects2.length = 0;
gdjs.InitializeCode.GDReplaySpriteObjects1.length = 0;
gdjs.InitializeCode.GDReplaySpriteObjects2.length = 0;


return;

}

gdjs['InitializeCode'] = gdjs.InitializeCode;
