gdjs.BattleCode = {};
gdjs.BattleCode.localVariables = [];
gdjs.BattleCode.idToCallbackMap = new Map();
gdjs.BattleCode.forEachIndex6 = 0;

gdjs.BattleCode.forEachObjects6 = [];

gdjs.BattleCode.forEachTemporary6 = null;

gdjs.BattleCode.forEachTotalCount6 = 0;

gdjs.BattleCode.GDNewTextObjects1= [];
gdjs.BattleCode.GDNewTextObjects2= [];
gdjs.BattleCode.GDNewTextObjects3= [];
gdjs.BattleCode.GDNewTextObjects4= [];
gdjs.BattleCode.GDNewTextObjects5= [];
gdjs.BattleCode.GDNewTextObjects6= [];
gdjs.BattleCode.GDNewTextObjects7= [];
gdjs.BattleCode.GDNewTextObjects8= [];
gdjs.BattleCode.GDNewText2Objects1= [];
gdjs.BattleCode.GDNewText2Objects2= [];
gdjs.BattleCode.GDNewText2Objects3= [];
gdjs.BattleCode.GDNewText2Objects4= [];
gdjs.BattleCode.GDNewText2Objects5= [];
gdjs.BattleCode.GDNewText2Objects6= [];
gdjs.BattleCode.GDNewText2Objects7= [];
gdjs.BattleCode.GDNewText2Objects8= [];
gdjs.BattleCode.GDNewShapePainterObjects1= [];
gdjs.BattleCode.GDNewShapePainterObjects2= [];
gdjs.BattleCode.GDNewShapePainterObjects3= [];
gdjs.BattleCode.GDNewShapePainterObjects4= [];
gdjs.BattleCode.GDNewShapePainterObjects5= [];
gdjs.BattleCode.GDNewShapePainterObjects6= [];
gdjs.BattleCode.GDNewShapePainterObjects7= [];
gdjs.BattleCode.GDNewShapePainterObjects8= [];
gdjs.BattleCode.GDBuildingsObjects1= [];
gdjs.BattleCode.GDBuildingsObjects2= [];
gdjs.BattleCode.GDBuildingsObjects3= [];
gdjs.BattleCode.GDBuildingsObjects4= [];
gdjs.BattleCode.GDBuildingsObjects5= [];
gdjs.BattleCode.GDBuildingsObjects6= [];
gdjs.BattleCode.GDBuildingsObjects7= [];
gdjs.BattleCode.GDBuildingsObjects8= [];
gdjs.BattleCode.GDUnitsObjects1= [];
gdjs.BattleCode.GDUnitsObjects2= [];
gdjs.BattleCode.GDUnitsObjects3= [];
gdjs.BattleCode.GDUnitsObjects4= [];
gdjs.BattleCode.GDUnitsObjects5= [];
gdjs.BattleCode.GDUnitsObjects6= [];
gdjs.BattleCode.GDUnitsObjects7= [];
gdjs.BattleCode.GDUnitsObjects8= [];
gdjs.BattleCode.GDBackgroundObjects1= [];
gdjs.BattleCode.GDBackgroundObjects2= [];
gdjs.BattleCode.GDBackgroundObjects3= [];
gdjs.BattleCode.GDBackgroundObjects4= [];
gdjs.BattleCode.GDBackgroundObjects5= [];
gdjs.BattleCode.GDBackgroundObjects6= [];
gdjs.BattleCode.GDBackgroundObjects7= [];
gdjs.BattleCode.GDBackgroundObjects8= [];
gdjs.BattleCode.GDNewText3Objects1= [];
gdjs.BattleCode.GDNewText3Objects2= [];
gdjs.BattleCode.GDNewText3Objects3= [];
gdjs.BattleCode.GDNewText3Objects4= [];
gdjs.BattleCode.GDNewText3Objects5= [];
gdjs.BattleCode.GDNewText3Objects6= [];
gdjs.BattleCode.GDNewText3Objects7= [];
gdjs.BattleCode.GDNewText3Objects8= [];
gdjs.BattleCode.GDWallObjects1= [];
gdjs.BattleCode.GDWallObjects2= [];
gdjs.BattleCode.GDWallObjects3= [];
gdjs.BattleCode.GDWallObjects4= [];
gdjs.BattleCode.GDWallObjects5= [];
gdjs.BattleCode.GDWallObjects6= [];
gdjs.BattleCode.GDWallObjects7= [];
gdjs.BattleCode.GDWallObjects8= [];
gdjs.BattleCode.GDGuideObjects1= [];
gdjs.BattleCode.GDGuideObjects2= [];
gdjs.BattleCode.GDGuideObjects3= [];
gdjs.BattleCode.GDGuideObjects4= [];
gdjs.BattleCode.GDGuideObjects5= [];
gdjs.BattleCode.GDGuideObjects6= [];
gdjs.BattleCode.GDGuideObjects7= [];
gdjs.BattleCode.GDGuideObjects8= [];
gdjs.BattleCode.GDCharactersObjects1= [];
gdjs.BattleCode.GDCharactersObjects2= [];
gdjs.BattleCode.GDCharactersObjects3= [];
gdjs.BattleCode.GDCharactersObjects4= [];
gdjs.BattleCode.GDCharactersObjects5= [];
gdjs.BattleCode.GDCharactersObjects6= [];
gdjs.BattleCode.GDCharactersObjects7= [];
gdjs.BattleCode.GDCharactersObjects8= [];
gdjs.BattleCode.GDCursorObjects1= [];
gdjs.BattleCode.GDCursorObjects2= [];
gdjs.BattleCode.GDCursorObjects3= [];
gdjs.BattleCode.GDCursorObjects4= [];
gdjs.BattleCode.GDCursorObjects5= [];
gdjs.BattleCode.GDCursorObjects6= [];
gdjs.BattleCode.GDCursorObjects7= [];
gdjs.BattleCode.GDCursorObjects8= [];
gdjs.BattleCode.GDIconsObjects1= [];
gdjs.BattleCode.GDIconsObjects2= [];
gdjs.BattleCode.GDIconsObjects3= [];
gdjs.BattleCode.GDIconsObjects4= [];
gdjs.BattleCode.GDIconsObjects5= [];
gdjs.BattleCode.GDIconsObjects6= [];
gdjs.BattleCode.GDIconsObjects7= [];
gdjs.BattleCode.GDIconsObjects8= [];
gdjs.BattleCode.GDElixirDropObjects1= [];
gdjs.BattleCode.GDElixirDropObjects2= [];
gdjs.BattleCode.GDElixirDropObjects3= [];
gdjs.BattleCode.GDElixirDropObjects4= [];
gdjs.BattleCode.GDElixirDropObjects5= [];
gdjs.BattleCode.GDElixirDropObjects6= [];
gdjs.BattleCode.GDElixirDropObjects7= [];
gdjs.BattleCode.GDElixirDropObjects8= [];
gdjs.BattleCode.GDCardsObjects1= [];
gdjs.BattleCode.GDCardsObjects2= [];
gdjs.BattleCode.GDCardsObjects3= [];
gdjs.BattleCode.GDCardsObjects4= [];
gdjs.BattleCode.GDCardsObjects5= [];
gdjs.BattleCode.GDCardsObjects6= [];
gdjs.BattleCode.GDCardsObjects7= [];
gdjs.BattleCode.GDCardsObjects8= [];
gdjs.BattleCode.GDCardHolderObjects1= [];
gdjs.BattleCode.GDCardHolderObjects2= [];
gdjs.BattleCode.GDCardHolderObjects3= [];
gdjs.BattleCode.GDCardHolderObjects4= [];
gdjs.BattleCode.GDCardHolderObjects5= [];
gdjs.BattleCode.GDCardHolderObjects6= [];
gdjs.BattleCode.GDCardHolderObjects7= [];
gdjs.BattleCode.GDCardHolderObjects8= [];
gdjs.BattleCode.GDNextCardObjects1= [];
gdjs.BattleCode.GDNextCardObjects2= [];
gdjs.BattleCode.GDNextCardObjects3= [];
gdjs.BattleCode.GDNextCardObjects4= [];
gdjs.BattleCode.GDNextCardObjects5= [];
gdjs.BattleCode.GDNextCardObjects6= [];
gdjs.BattleCode.GDNextCardObjects7= [];
gdjs.BattleCode.GDNextCardObjects8= [];
gdjs.BattleCode.GDDragBoxObjects1= [];
gdjs.BattleCode.GDDragBoxObjects2= [];
gdjs.BattleCode.GDDragBoxObjects3= [];
gdjs.BattleCode.GDDragBoxObjects4= [];
gdjs.BattleCode.GDDragBoxObjects5= [];
gdjs.BattleCode.GDDragBoxObjects6= [];
gdjs.BattleCode.GDDragBoxObjects7= [];
gdjs.BattleCode.GDDragBoxObjects8= [];
gdjs.BattleCode.GDTimerIconObjects1= [];
gdjs.BattleCode.GDTimerIconObjects2= [];
gdjs.BattleCode.GDTimerIconObjects3= [];
gdjs.BattleCode.GDTimerIconObjects4= [];
gdjs.BattleCode.GDTimerIconObjects5= [];
gdjs.BattleCode.GDTimerIconObjects6= [];
gdjs.BattleCode.GDTimerIconObjects7= [];
gdjs.BattleCode.GDTimerIconObjects8= [];
gdjs.BattleCode.GDBuildingWallObjects1= [];
gdjs.BattleCode.GDBuildingWallObjects2= [];
gdjs.BattleCode.GDBuildingWallObjects3= [];
gdjs.BattleCode.GDBuildingWallObjects4= [];
gdjs.BattleCode.GDBuildingWallObjects5= [];
gdjs.BattleCode.GDBuildingWallObjects6= [];
gdjs.BattleCode.GDBuildingWallObjects7= [];
gdjs.BattleCode.GDBuildingWallObjects8= [];
gdjs.BattleCode.GDUIObjects1= [];
gdjs.BattleCode.GDUIObjects2= [];
gdjs.BattleCode.GDUIObjects3= [];
gdjs.BattleCode.GDUIObjects4= [];
gdjs.BattleCode.GDUIObjects5= [];
gdjs.BattleCode.GDUIObjects6= [];
gdjs.BattleCode.GDUIObjects7= [];
gdjs.BattleCode.GDUIObjects8= [];
gdjs.BattleCode.GDCheckpointsObjects1= [];
gdjs.BattleCode.GDCheckpointsObjects2= [];
gdjs.BattleCode.GDCheckpointsObjects3= [];
gdjs.BattleCode.GDCheckpointsObjects4= [];
gdjs.BattleCode.GDCheckpointsObjects5= [];
gdjs.BattleCode.GDCheckpointsObjects6= [];
gdjs.BattleCode.GDCheckpointsObjects7= [];
gdjs.BattleCode.GDCheckpointsObjects8= [];
gdjs.BattleCode.GDMinutesObjects1= [];
gdjs.BattleCode.GDMinutesObjects2= [];
gdjs.BattleCode.GDMinutesObjects3= [];
gdjs.BattleCode.GDMinutesObjects4= [];
gdjs.BattleCode.GDMinutesObjects5= [];
gdjs.BattleCode.GDMinutesObjects6= [];
gdjs.BattleCode.GDMinutesObjects7= [];
gdjs.BattleCode.GDMinutesObjects8= [];
gdjs.BattleCode.GDElixirExplodeObjects1= [];
gdjs.BattleCode.GDElixirExplodeObjects2= [];
gdjs.BattleCode.GDElixirExplodeObjects3= [];
gdjs.BattleCode.GDElixirExplodeObjects4= [];
gdjs.BattleCode.GDElixirExplodeObjects5= [];
gdjs.BattleCode.GDElixirExplodeObjects6= [];
gdjs.BattleCode.GDElixirExplodeObjects7= [];
gdjs.BattleCode.GDElixirExplodeObjects8= [];
gdjs.BattleCode.GDSlimeParticlesObjects1= [];
gdjs.BattleCode.GDSlimeParticlesObjects2= [];
gdjs.BattleCode.GDSlimeParticlesObjects3= [];
gdjs.BattleCode.GDSlimeParticlesObjects4= [];
gdjs.BattleCode.GDSlimeParticlesObjects5= [];
gdjs.BattleCode.GDSlimeParticlesObjects6= [];
gdjs.BattleCode.GDSlimeParticlesObjects7= [];
gdjs.BattleCode.GDSlimeParticlesObjects8= [];
gdjs.BattleCode.GDElixirMinusObjects1= [];
gdjs.BattleCode.GDElixirMinusObjects2= [];
gdjs.BattleCode.GDElixirMinusObjects3= [];
gdjs.BattleCode.GDElixirMinusObjects4= [];
gdjs.BattleCode.GDElixirMinusObjects5= [];
gdjs.BattleCode.GDElixirMinusObjects6= [];
gdjs.BattleCode.GDElixirMinusObjects7= [];
gdjs.BattleCode.GDElixirMinusObjects8= [];
gdjs.BattleCode.GDPlayerNameObjects1= [];
gdjs.BattleCode.GDPlayerNameObjects2= [];
gdjs.BattleCode.GDPlayerNameObjects3= [];
gdjs.BattleCode.GDPlayerNameObjects4= [];
gdjs.BattleCode.GDPlayerNameObjects5= [];
gdjs.BattleCode.GDPlayerNameObjects6= [];
gdjs.BattleCode.GDPlayerNameObjects7= [];
gdjs.BattleCode.GDPlayerNameObjects8= [];
gdjs.BattleCode.GDPlayerClanObjects1= [];
gdjs.BattleCode.GDPlayerClanObjects2= [];
gdjs.BattleCode.GDPlayerClanObjects3= [];
gdjs.BattleCode.GDPlayerClanObjects4= [];
gdjs.BattleCode.GDPlayerClanObjects5= [];
gdjs.BattleCode.GDPlayerClanObjects6= [];
gdjs.BattleCode.GDPlayerClanObjects7= [];
gdjs.BattleCode.GDPlayerClanObjects8= [];
gdjs.BattleCode.GDPlayerRatingObjects1= [];
gdjs.BattleCode.GDPlayerRatingObjects2= [];
gdjs.BattleCode.GDPlayerRatingObjects3= [];
gdjs.BattleCode.GDPlayerRatingObjects4= [];
gdjs.BattleCode.GDPlayerRatingObjects5= [];
gdjs.BattleCode.GDPlayerRatingObjects6= [];
gdjs.BattleCode.GDPlayerRatingObjects7= [];
gdjs.BattleCode.GDPlayerRatingObjects8= [];
gdjs.BattleCode.GDMobDropDescObjects1= [];
gdjs.BattleCode.GDMobDropDescObjects2= [];
gdjs.BattleCode.GDMobDropDescObjects3= [];
gdjs.BattleCode.GDMobDropDescObjects4= [];
gdjs.BattleCode.GDMobDropDescObjects5= [];
gdjs.BattleCode.GDMobDropDescObjects6= [];
gdjs.BattleCode.GDMobDropDescObjects7= [];
gdjs.BattleCode.GDMobDropDescObjects8= [];
gdjs.BattleCode.GDTowerHpBarObjects1= [];
gdjs.BattleCode.GDTowerHpBarObjects2= [];
gdjs.BattleCode.GDTowerHpBarObjects3= [];
gdjs.BattleCode.GDTowerHpBarObjects4= [];
gdjs.BattleCode.GDTowerHpBarObjects5= [];
gdjs.BattleCode.GDTowerHpBarObjects6= [];
gdjs.BattleCode.GDTowerHpBarObjects7= [];
gdjs.BattleCode.GDTowerHpBarObjects8= [];
gdjs.BattleCode.GDSlimeGroundObjects1= [];
gdjs.BattleCode.GDSlimeGroundObjects2= [];
gdjs.BattleCode.GDSlimeGroundObjects3= [];
gdjs.BattleCode.GDSlimeGroundObjects4= [];
gdjs.BattleCode.GDSlimeGroundObjects5= [];
gdjs.BattleCode.GDSlimeGroundObjects6= [];
gdjs.BattleCode.GDSlimeGroundObjects7= [];
gdjs.BattleCode.GDSlimeGroundObjects8= [];
gdjs.BattleCode.GDSlimeGasObjects1= [];
gdjs.BattleCode.GDSlimeGasObjects2= [];
gdjs.BattleCode.GDSlimeGasObjects3= [];
gdjs.BattleCode.GDSlimeGasObjects4= [];
gdjs.BattleCode.GDSlimeGasObjects5= [];
gdjs.BattleCode.GDSlimeGasObjects6= [];
gdjs.BattleCode.GDSlimeGasObjects7= [];
gdjs.BattleCode.GDSlimeGasObjects8= [];
gdjs.BattleCode.GDCrownObjects1= [];
gdjs.BattleCode.GDCrownObjects2= [];
gdjs.BattleCode.GDCrownObjects3= [];
gdjs.BattleCode.GDCrownObjects4= [];
gdjs.BattleCode.GDCrownObjects5= [];
gdjs.BattleCode.GDCrownObjects6= [];
gdjs.BattleCode.GDCrownObjects7= [];
gdjs.BattleCode.GDCrownObjects8= [];
gdjs.BattleCode.GDBuildingExplosionObjects1= [];
gdjs.BattleCode.GDBuildingExplosionObjects2= [];
gdjs.BattleCode.GDBuildingExplosionObjects3= [];
gdjs.BattleCode.GDBuildingExplosionObjects4= [];
gdjs.BattleCode.GDBuildingExplosionObjects5= [];
gdjs.BattleCode.GDBuildingExplosionObjects6= [];
gdjs.BattleCode.GDBuildingExplosionObjects7= [];
gdjs.BattleCode.GDBuildingExplosionObjects8= [];
gdjs.BattleCode.GDBuildingSmokeObjects1= [];
gdjs.BattleCode.GDBuildingSmokeObjects2= [];
gdjs.BattleCode.GDBuildingSmokeObjects3= [];
gdjs.BattleCode.GDBuildingSmokeObjects4= [];
gdjs.BattleCode.GDBuildingSmokeObjects5= [];
gdjs.BattleCode.GDBuildingSmokeObjects6= [];
gdjs.BattleCode.GDBuildingSmokeObjects7= [];
gdjs.BattleCode.GDBuildingSmokeObjects8= [];
gdjs.BattleCode.GDNoDropAreaObjects1= [];
gdjs.BattleCode.GDNoDropAreaObjects2= [];
gdjs.BattleCode.GDNoDropAreaObjects3= [];
gdjs.BattleCode.GDNoDropAreaObjects4= [];
gdjs.BattleCode.GDNoDropAreaObjects5= [];
gdjs.BattleCode.GDNoDropAreaObjects6= [];
gdjs.BattleCode.GDNoDropAreaObjects7= [];
gdjs.BattleCode.GDNoDropAreaObjects8= [];
gdjs.BattleCode.GDScoreBlueObjects1= [];
gdjs.BattleCode.GDScoreBlueObjects2= [];
gdjs.BattleCode.GDScoreBlueObjects3= [];
gdjs.BattleCode.GDScoreBlueObjects4= [];
gdjs.BattleCode.GDScoreBlueObjects5= [];
gdjs.BattleCode.GDScoreBlueObjects6= [];
gdjs.BattleCode.GDScoreBlueObjects7= [];
gdjs.BattleCode.GDScoreBlueObjects8= [];
gdjs.BattleCode.GDScoreRedObjects1= [];
gdjs.BattleCode.GDScoreRedObjects2= [];
gdjs.BattleCode.GDScoreRedObjects3= [];
gdjs.BattleCode.GDScoreRedObjects4= [];
gdjs.BattleCode.GDScoreRedObjects5= [];
gdjs.BattleCode.GDScoreRedObjects6= [];
gdjs.BattleCode.GDScoreRedObjects7= [];
gdjs.BattleCode.GDScoreRedObjects8= [];
gdjs.BattleCode.GDScoreIconsObjects1= [];
gdjs.BattleCode.GDScoreIconsObjects2= [];
gdjs.BattleCode.GDScoreIconsObjects3= [];
gdjs.BattleCode.GDScoreIconsObjects4= [];
gdjs.BattleCode.GDScoreIconsObjects5= [];
gdjs.BattleCode.GDScoreIconsObjects6= [];
gdjs.BattleCode.GDScoreIconsObjects7= [];
gdjs.BattleCode.GDScoreIconsObjects8= [];
gdjs.BattleCode.GDElixirSparksObjects1= [];
gdjs.BattleCode.GDElixirSparksObjects2= [];
gdjs.BattleCode.GDElixirSparksObjects3= [];
gdjs.BattleCode.GDElixirSparksObjects4= [];
gdjs.BattleCode.GDElixirSparksObjects5= [];
gdjs.BattleCode.GDElixirSparksObjects6= [];
gdjs.BattleCode.GDElixirSparksObjects7= [];
gdjs.BattleCode.GDElixirSparksObjects8= [];
gdjs.BattleCode.GDScoreBlueDescObjects1= [];
gdjs.BattleCode.GDScoreBlueDescObjects2= [];
gdjs.BattleCode.GDScoreBlueDescObjects3= [];
gdjs.BattleCode.GDScoreBlueDescObjects4= [];
gdjs.BattleCode.GDScoreBlueDescObjects5= [];
gdjs.BattleCode.GDScoreBlueDescObjects6= [];
gdjs.BattleCode.GDScoreBlueDescObjects7= [];
gdjs.BattleCode.GDScoreBlueDescObjects8= [];
gdjs.BattleCode.GDBlueScoreBarObjects1= [];
gdjs.BattleCode.GDBlueScoreBarObjects2= [];
gdjs.BattleCode.GDBlueScoreBarObjects3= [];
gdjs.BattleCode.GDBlueScoreBarObjects4= [];
gdjs.BattleCode.GDBlueScoreBarObjects5= [];
gdjs.BattleCode.GDBlueScoreBarObjects6= [];
gdjs.BattleCode.GDBlueScoreBarObjects7= [];
gdjs.BattleCode.GDBlueScoreBarObjects8= [];
gdjs.BattleCode.GDEmotesWordObjects1= [];
gdjs.BattleCode.GDEmotesWordObjects2= [];
gdjs.BattleCode.GDEmotesWordObjects3= [];
gdjs.BattleCode.GDEmotesWordObjects4= [];
gdjs.BattleCode.GDEmotesWordObjects5= [];
gdjs.BattleCode.GDEmotesWordObjects6= [];
gdjs.BattleCode.GDEmotesWordObjects7= [];
gdjs.BattleCode.GDEmotesWordObjects8= [];
gdjs.BattleCode.GDEmotesIconObjects1= [];
gdjs.BattleCode.GDEmotesIconObjects2= [];
gdjs.BattleCode.GDEmotesIconObjects3= [];
gdjs.BattleCode.GDEmotesIconObjects4= [];
gdjs.BattleCode.GDEmotesIconObjects5= [];
gdjs.BattleCode.GDEmotesIconObjects6= [];
gdjs.BattleCode.GDEmotesIconObjects7= [];
gdjs.BattleCode.GDEmotesIconObjects8= [];
gdjs.BattleCode.GDEmotesDescObjects1= [];
gdjs.BattleCode.GDEmotesDescObjects2= [];
gdjs.BattleCode.GDEmotesDescObjects3= [];
gdjs.BattleCode.GDEmotesDescObjects4= [];
gdjs.BattleCode.GDEmotesDescObjects5= [];
gdjs.BattleCode.GDEmotesDescObjects6= [];
gdjs.BattleCode.GDEmotesDescObjects7= [];
gdjs.BattleCode.GDEmotesDescObjects8= [];
gdjs.BattleCode.GDCardHolderBlankObjects1= [];
gdjs.BattleCode.GDCardHolderBlankObjects2= [];
gdjs.BattleCode.GDCardHolderBlankObjects3= [];
gdjs.BattleCode.GDCardHolderBlankObjects4= [];
gdjs.BattleCode.GDCardHolderBlankObjects5= [];
gdjs.BattleCode.GDCardHolderBlankObjects6= [];
gdjs.BattleCode.GDCardHolderBlankObjects7= [];
gdjs.BattleCode.GDCardHolderBlankObjects8= [];
gdjs.BattleCode.GDOpenEmojiIconObjects1= [];
gdjs.BattleCode.GDOpenEmojiIconObjects2= [];
gdjs.BattleCode.GDOpenEmojiIconObjects3= [];
gdjs.BattleCode.GDOpenEmojiIconObjects4= [];
gdjs.BattleCode.GDOpenEmojiIconObjects5= [];
gdjs.BattleCode.GDOpenEmojiIconObjects6= [];
gdjs.BattleCode.GDOpenEmojiIconObjects7= [];
gdjs.BattleCode.GDOpenEmojiIconObjects8= [];
gdjs.BattleCode.GDCloseEmojiIconObjects1= [];
gdjs.BattleCode.GDCloseEmojiIconObjects2= [];
gdjs.BattleCode.GDCloseEmojiIconObjects3= [];
gdjs.BattleCode.GDCloseEmojiIconObjects4= [];
gdjs.BattleCode.GDCloseEmojiIconObjects5= [];
gdjs.BattleCode.GDCloseEmojiIconObjects6= [];
gdjs.BattleCode.GDCloseEmojiIconObjects7= [];
gdjs.BattleCode.GDCloseEmojiIconObjects8= [];
gdjs.BattleCode.GDRedEmoteObjects1= [];
gdjs.BattleCode.GDRedEmoteObjects2= [];
gdjs.BattleCode.GDRedEmoteObjects3= [];
gdjs.BattleCode.GDRedEmoteObjects4= [];
gdjs.BattleCode.GDRedEmoteObjects5= [];
gdjs.BattleCode.GDRedEmoteObjects6= [];
gdjs.BattleCode.GDRedEmoteObjects7= [];
gdjs.BattleCode.GDRedEmoteObjects8= [];
gdjs.BattleCode.GDBlueEmoteObjects1= [];
gdjs.BattleCode.GDBlueEmoteObjects2= [];
gdjs.BattleCode.GDBlueEmoteObjects3= [];
gdjs.BattleCode.GDBlueEmoteObjects4= [];
gdjs.BattleCode.GDBlueEmoteObjects5= [];
gdjs.BattleCode.GDBlueEmoteObjects6= [];
gdjs.BattleCode.GDBlueEmoteObjects7= [];
gdjs.BattleCode.GDBlueEmoteObjects8= [];
gdjs.BattleCode.GDBannersObjects1= [];
gdjs.BattleCode.GDBannersObjects2= [];
gdjs.BattleCode.GDBannersObjects3= [];
gdjs.BattleCode.GDBannersObjects4= [];
gdjs.BattleCode.GDBannersObjects5= [];
gdjs.BattleCode.GDBannersObjects6= [];
gdjs.BattleCode.GDBannersObjects7= [];
gdjs.BattleCode.GDBannersObjects8= [];
gdjs.BattleCode.GDBannerTextWhiteObjects1= [];
gdjs.BattleCode.GDBannerTextWhiteObjects2= [];
gdjs.BattleCode.GDBannerTextWhiteObjects3= [];
gdjs.BattleCode.GDBannerTextWhiteObjects4= [];
gdjs.BattleCode.GDBannerTextWhiteObjects5= [];
gdjs.BattleCode.GDBannerTextWhiteObjects6= [];
gdjs.BattleCode.GDBannerTextWhiteObjects7= [];
gdjs.BattleCode.GDBannerTextWhiteObjects8= [];
gdjs.BattleCode.GDBannerTextYellowObjects1= [];
gdjs.BattleCode.GDBannerTextYellowObjects2= [];
gdjs.BattleCode.GDBannerTextYellowObjects3= [];
gdjs.BattleCode.GDBannerTextYellowObjects4= [];
gdjs.BattleCode.GDBannerTextYellowObjects5= [];
gdjs.BattleCode.GDBannerTextYellowObjects6= [];
gdjs.BattleCode.GDBannerTextYellowObjects7= [];
gdjs.BattleCode.GDBannerTextYellowObjects8= [];
gdjs.BattleCode.GDBannerShadowObjects1= [];
gdjs.BattleCode.GDBannerShadowObjects2= [];
gdjs.BattleCode.GDBannerShadowObjects3= [];
gdjs.BattleCode.GDBannerShadowObjects4= [];
gdjs.BattleCode.GDBannerShadowObjects5= [];
gdjs.BattleCode.GDBannerShadowObjects6= [];
gdjs.BattleCode.GDBannerShadowObjects7= [];
gdjs.BattleCode.GDBannerShadowObjects8= [];
gdjs.BattleCode.GDVsBadgeObjects1= [];
gdjs.BattleCode.GDVsBadgeObjects2= [];
gdjs.BattleCode.GDVsBadgeObjects3= [];
gdjs.BattleCode.GDVsBadgeObjects4= [];
gdjs.BattleCode.GDVsBadgeObjects5= [];
gdjs.BattleCode.GDVsBadgeObjects6= [];
gdjs.BattleCode.GDVsBadgeObjects7= [];
gdjs.BattleCode.GDVsBadgeObjects8= [];
gdjs.BattleCode.GDBannerBackgroundObjects1= [];
gdjs.BattleCode.GDBannerBackgroundObjects2= [];
gdjs.BattleCode.GDBannerBackgroundObjects3= [];
gdjs.BattleCode.GDBannerBackgroundObjects4= [];
gdjs.BattleCode.GDBannerBackgroundObjects5= [];
gdjs.BattleCode.GDBannerBackgroundObjects6= [];
gdjs.BattleCode.GDBannerBackgroundObjects7= [];
gdjs.BattleCode.GDBannerBackgroundObjects8= [];
gdjs.BattleCode.GDCenterTextObjects1= [];
gdjs.BattleCode.GDCenterTextObjects2= [];
gdjs.BattleCode.GDCenterTextObjects3= [];
gdjs.BattleCode.GDCenterTextObjects4= [];
gdjs.BattleCode.GDCenterTextObjects5= [];
gdjs.BattleCode.GDCenterTextObjects6= [];
gdjs.BattleCode.GDCenterTextObjects7= [];
gdjs.BattleCode.GDCenterTextObjects8= [];
gdjs.BattleCode.GDReplaySpriteObjects1= [];
gdjs.BattleCode.GDReplaySpriteObjects2= [];
gdjs.BattleCode.GDReplaySpriteObjects3= [];
gdjs.BattleCode.GDReplaySpriteObjects4= [];
gdjs.BattleCode.GDReplaySpriteObjects5= [];
gdjs.BattleCode.GDReplaySpriteObjects6= [];
gdjs.BattleCode.GDReplaySpriteObjects7= [];
gdjs.BattleCode.GDReplaySpriteObjects8= [];


gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDScoreBlueObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreRedObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreIconsObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreBlueDescObjects2ObjectsGDgdjs_9546BattleCode_9546GDBlueScoreBarObjects2Objects = Hashtable.newFrom({"ScoreBlue": gdjs.BattleCode.GDScoreBlueObjects2, "ScoreRed": gdjs.BattleCode.GDScoreRedObjects2, "ScoreIcons": gdjs.BattleCode.GDScoreIconsObjects2, "ScoreBlueDesc": gdjs.BattleCode.GDScoreBlueDescObjects2, "BlueScoreBar": gdjs.BattleCode.GDBlueScoreBarObjects2});
gdjs.BattleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueScoreBar"), gdjs.BattleCode.GDBlueScoreBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreBlue"), gdjs.BattleCode.GDScoreBlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreBlueDesc"), gdjs.BattleCode.GDScoreBlueDescObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreIcons"), gdjs.BattleCode.GDScoreIconsObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreRed"), gdjs.BattleCode.GDScoreRedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDScoreBlueObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreRedObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreIconsObjects2ObjectsGDgdjs_9546BattleCode_9546GDScoreBlueDescObjects2ObjectsGDgdjs_9546BattleCode_9546GDBlueScoreBarObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBlueScoreBarObjects2 */
/* Reuse gdjs.BattleCode.GDScoreBlueObjects2 */
/* Reuse gdjs.BattleCode.GDScoreBlueDescObjects2 */
/* Reuse gdjs.BattleCode.GDScoreIconsObjects2 */
/* Reuse gdjs.BattleCode.GDScoreRedObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDScoreBlueObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreRedObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreRedObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreIconsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreIconsObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreBlueDescObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueDescObjects2[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.BattleCode.GDBlueScoreBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBlueScoreBarObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects3Objects = Hashtable.newFrom({"BannerTextWhite": gdjs.BattleCode.GDBannerTextWhiteObjects3});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects3Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects3});
gdjs.BattleCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BattleCode.GDBannerTextWhiteObjects3, gdjs.BattleCode.GDBannerTextWhiteObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextWhiteObjects4.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextWhiteObjects4[i].getVariableString(gdjs.BattleCode.GDBannerTextWhiteObjects4[i].getVariables().getFromIndex(0)) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextWhiteObjects4[k] = gdjs.BattleCode.GDBannerTextWhiteObjects4[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextWhiteObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerTextWhiteObjects4 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerTextWhiteObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextWhiteObjects4[i].getBehavior("Text").setText("MikeWhoCheeseHarry");
}
}
}

}


{

/* Reuse gdjs.BattleCode.GDBannerTextWhiteObjects3 */
/* Reuse gdjs.BattleCode.GDBannersObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextWhiteObjects3.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextWhiteObjects3[i].getVariableString(gdjs.BattleCode.GDBannerTextWhiteObjects3[i].getVariables().getFromIndex(0)) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextWhiteObjects3[k] = gdjs.BattleCode.GDBannerTextWhiteObjects3[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextWhiteObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannersObjects3.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannersObjects3[i].getVariableString(gdjs.BattleCode.GDBannersObjects3[i].getVariables().getFromIndex(1)) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannersObjects3[k] = gdjs.BattleCode.GDBannersObjects3[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannersObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerTextWhiteObjects3 */
/* Reuse gdjs.BattleCode.GDBannersObjects3 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerTextWhiteObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextWhiteObjects3[i].getBehavior("Text").setText("You");
}
}
{for(var i = 0, len = gdjs.BattleCode.GDBannerTextWhiteObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextWhiteObjects3[i].setX((( gdjs.BattleCode.GDBannersObjects3.length === 0 ) ? 0 :gdjs.BattleCode.GDBannersObjects3[0].getAABBRight()) - (gdjs.BattleCode.GDBannerTextWhiteObjects3[i].getWidth()));
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects3Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects3});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects5ObjectsGDgdjs_9546BattleCode_9546GDBannerTextYellowObjects5ObjectsGDgdjs_9546BattleCode_9546GDIconsObjects5Objects = Hashtable.newFrom({"BannerTextWhite": gdjs.BattleCode.GDBannerTextWhiteObjects5, "BannerTextYellow": gdjs.BattleCode.GDBannerTextYellowObjects5, "Icons": gdjs.BattleCode.GDIconsObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BannerTextWhite"), gdjs.BattleCode.GDBannerTextWhiteObjects5);
gdjs.copyArray(runtimeScene.getObjects("BannerTextYellow"), gdjs.BattleCode.GDBannerTextYellowObjects5);
gdjs.copyArray(runtimeScene.getObjects("Icons"), gdjs.BattleCode.GDIconsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects5ObjectsGDgdjs_9546BattleCode_9546GDBannerTextYellowObjects5ObjectsGDgdjs_9546BattleCode_9546GDIconsObjects5Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextWhiteObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getVariableString(gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getVariables().get("Type")) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextWhiteObjects5[k] = gdjs.BattleCode.GDBannerTextWhiteObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextWhiteObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextYellowObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextYellowObjects5[i].getVariableString(gdjs.BattleCode.GDBannerTextYellowObjects5[i].getVariables().get("Type")) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextYellowObjects5[k] = gdjs.BattleCode.GDBannerTextYellowObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextYellowObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDIconsObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDIconsObjects5[i].getVariableString(gdjs.BattleCode.GDIconsObjects5[i].getVariables().get("Type")) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDIconsObjects5[k] = gdjs.BattleCode.GDIconsObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDIconsObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerTextWhiteObjects5 */
/* Reuse gdjs.BattleCode.GDBannerTextYellowObjects5 */
gdjs.copyArray(gdjs.BattleCode.GDBannersObjects4, gdjs.BattleCode.GDBannersObjects5);

/* Reuse gdjs.BattleCode.GDIconsObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerTextWhiteObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
for(var i = 0, len = gdjs.BattleCode.GDBannerTextYellowObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextYellowObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
for(var i = 0, len = gdjs.BattleCode.GDIconsObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDIconsObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.BattleCode.GDBannersObjects4 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects4[i].setX(gdjs.BattleCode.GDBannersObjects4[i].getVariables().getFromIndex(0).getAsNumber() + (gdjs.BattleCode.GDBannersObjects4[i].getWidth()));
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects5ObjectsGDgdjs_9546BattleCode_9546GDBannerTextYellowObjects5ObjectsGDgdjs_9546BattleCode_9546GDIconsObjects5Objects = Hashtable.newFrom({"BannerTextWhite": gdjs.BattleCode.GDBannerTextWhiteObjects5, "BannerTextYellow": gdjs.BattleCode.GDBannerTextYellowObjects5, "Icons": gdjs.BattleCode.GDIconsObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BannerTextWhite"), gdjs.BattleCode.GDBannerTextWhiteObjects5);
gdjs.copyArray(runtimeScene.getObjects("BannerTextYellow"), gdjs.BattleCode.GDBannerTextYellowObjects5);
gdjs.copyArray(runtimeScene.getObjects("Icons"), gdjs.BattleCode.GDIconsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects5ObjectsGDgdjs_9546BattleCode_9546GDBannerTextYellowObjects5ObjectsGDgdjs_9546BattleCode_9546GDIconsObjects5Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextWhiteObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getVariableString(gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getVariables().get("Type")) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextWhiteObjects5[k] = gdjs.BattleCode.GDBannerTextWhiteObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextWhiteObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannerTextYellowObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannerTextYellowObjects5[i].getVariableString(gdjs.BattleCode.GDBannerTextYellowObjects5[i].getVariables().get("Type")) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannerTextYellowObjects5[k] = gdjs.BattleCode.GDBannerTextYellowObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannerTextYellowObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDIconsObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDIconsObjects5[i].getVariableString(gdjs.BattleCode.GDIconsObjects5[i].getVariables().get("Type")) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDIconsObjects5[k] = gdjs.BattleCode.GDIconsObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDIconsObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerTextWhiteObjects5 */
/* Reuse gdjs.BattleCode.GDBannerTextYellowObjects5 */
gdjs.copyArray(gdjs.BattleCode.GDBannersObjects4, gdjs.BattleCode.GDBannersObjects5);

/* Reuse gdjs.BattleCode.GDIconsObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerTextWhiteObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextWhiteObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
for(var i = 0, len = gdjs.BattleCode.GDBannerTextYellowObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerTextYellowObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
for(var i = 0, len = gdjs.BattleCode.GDIconsObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDIconsObjects5[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.BattleCode.GDBannersObjects4 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects4[i].setX(gdjs.BattleCode.GDBannersObjects4[i].getVariables().getFromIndex(0).getAsNumber() - (gdjs.BattleCode.GDBannersObjects4[i].getWidth()));
}
}
}

}


};gdjs.BattleCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BattleCode.GDBannersObjects3, gdjs.BattleCode.GDBannersObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannersObjects4.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannersObjects4[i].getVariableString(gdjs.BattleCode.GDBannersObjects4[i].getVariables().getFromIndex(1)) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannersObjects4[k] = gdjs.BattleCode.GDBannersObjects4[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannersObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BattleCode.GDBannersObjects3, gdjs.BattleCode.GDBannersObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannersObjects4.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannersObjects4[i].getVariableString(gdjs.BattleCode.GDBannersObjects4[i].getVariables().getFromIndex(1)) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannersObjects4[k] = gdjs.BattleCode.GDBannersObjects4[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannersObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.BattleCode.GDBannersObjects3 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects3[i].getBehavior("Tween").addObjectPositionXTween2("x", gdjs.BattleCode.GDBannersObjects3[i].getVariables().getFromIndex(0).getAsNumber(), "easeOutExpo", 1.633, false);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects = Hashtable.newFrom({"Banners": gdjs.BattleCode.GDBannersObjects5});
gdjs.BattleCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(gdjs.BattleCode.GDBannersObjects5, gdjs.BattleCode.GDBannersObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannersObjects6.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannersObjects6[i].getVariableString(gdjs.BattleCode.GDBannersObjects6[i].getVariables().getFromIndex(1)) == "Upper" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannersObjects6[k] = gdjs.BattleCode.GDBannersObjects6[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannersObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannersObjects6 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects6.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects6[i].getBehavior("Tween").addObjectPositionYTween2("y", gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "StartBattleLayer", 0) - (gdjs.BattleCode.GDBannersObjects6[i].getHeight()), "easeOutExpo", 0.3, true);
}
}
}

}


{

/* Reuse gdjs.BattleCode.GDBannersObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDBannersObjects5.length;i<l;++i) {
    if ( gdjs.BattleCode.GDBannersObjects5[i].getVariableString(gdjs.BattleCode.GDBannersObjects5[i].getVariables().getFromIndex(1)) == "Lower" ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDBannersObjects5[k] = gdjs.BattleCode.GDBannersObjects5[i];
        ++k;
    }
}
gdjs.BattleCode.GDBannersObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannersObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects5[i].getBehavior("Tween").addObjectPositionYTween2("y", gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "StartBattleLayer", 0), "easeOutExpo", 0.3, true);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerShadowObjects5Objects = Hashtable.newFrom({"BannerShadow": gdjs.BattleCode.GDBannerShadowObjects5});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerBackgroundObjects5Objects = Hashtable.newFrom({"BannerBackground": gdjs.BattleCode.GDBannerBackgroundObjects5});
gdjs.BattleCode.asyncCallback30305084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CenterText"), gdjs.BattleCode.GDCenterTextObjects6);

{for(var i = 0, len = gdjs.BattleCode.GDCenterTextObjects6.length ;i < len;++i) {
    gdjs.BattleCode.GDCenterTextObjects6[i].getBehavior("Tween").addObjectScaleTween3("s", 0.01, "bounce", 0.3, false, true);
}
}
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30305084, gdjs.BattleCode.asyncCallback30305084);
gdjs.BattleCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDCenterTextObjects5) asyncObjectsList.addObject("CenterText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1666 + 0.4), (runtimeScene) => (gdjs.BattleCode.asyncCallback30305084(runtimeScene, asyncObjectsList)), 30305084, asyncObjectsList);
}
}

}


};gdjs.BattleCode.asyncCallback30303580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BannerBackground"), gdjs.BattleCode.GDBannerBackgroundObjects5);
gdjs.copyArray(runtimeScene.getObjects("BannerShadow"), gdjs.BattleCode.GDBannerShadowObjects5);
gdjs.copyArray(runtimeScene.getObjects("Banners"), gdjs.BattleCode.GDBannersObjects5);
gdjs.copyArray(runtimeScene.getObjects("CenterText"), gdjs.BattleCode.GDCenterTextObjects5);
gdjs.copyArray(asyncObjectsList.getObjects("VsBadge"), gdjs.BattleCode.GDVsBadgeObjects5);

{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects5[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDVsBadgeObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDVsBadgeObjects5[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDBannerShadowObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerShadowObjects5[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDBannerBackgroundObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerBackgroundObjects5[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCenterTextObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDCenterTextObjects5[i].getBehavior("Tween").addObjectScaleTween3("s", 0.01, "bounce", 0, false, true);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCenterTextObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDCenterTextObjects5[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCenterTextObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDCenterTextObjects5[i].getBehavior("Tween").addObjectScaleTween3("s", 1, "bounce", 0.1666, false, true);
}
}

{ //Subevents
gdjs.BattleCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30303580, gdjs.BattleCode.asyncCallback30303580);
gdjs.BattleCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save VsBadge as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.BattleCode.asyncCallback30303580(runtimeScene, asyncObjectsList)), 30303580, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("Banners"), gdjs.BattleCode.GDBannersObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects5Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannersObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects5[i].returnVariable(gdjs.BattleCode.GDBannersObjects5[i].getVariables().getFromIndex(0)).setNumber((gdjs.BattleCode.GDBannersObjects5[i].getPointX("")));
}
}

{ //Subevents
gdjs.BattleCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BannerShadow"), gdjs.BattleCode.GDBannerShadowObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerShadowObjects5Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerShadowObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerShadowObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerShadowObjects5[i].getBehavior("Tween").addObjectOpacityTween2("0", 0, "linear", 0.3, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BannerBackground"), gdjs.BattleCode.GDBannerBackgroundObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerBackgroundObjects5Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannerBackgroundObjects5 */
{for(var i = 0, len = gdjs.BattleCode.GDBannerBackgroundObjects5.length ;i < len;++i) {
    gdjs.BattleCode.GDBannerBackgroundObjects5[i].getBehavior("Tween").addObjectOpacityTween2("0", 0, "linear", 0.3, true);
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.BattleCode.asyncCallback30299292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);

{ //Subevents
gdjs.BattleCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30299292, gdjs.BattleCode.asyncCallback30299292);
gdjs.BattleCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDVsBadgeObjects3) asyncObjectsList.addObject("VsBadge", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.08333), (runtimeScene) => (gdjs.BattleCode.asyncCallback30299292(runtimeScene, asyncObjectsList)), 30299292, asyncObjectsList);
}
}

}


};gdjs.BattleCode.asyncCallback30298700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("VsBadge"), gdjs.BattleCode.GDVsBadgeObjects3);
{for(var i = 0, len = gdjs.BattleCode.GDVsBadgeObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDVsBadgeObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.BattleCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30298700, gdjs.BattleCode.asyncCallback30298700);
gdjs.BattleCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.633), (runtimeScene) => (gdjs.BattleCode.asyncCallback30298700(runtimeScene, asyncObjectsList)), 30298700, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BannerTextWhite"), gdjs.BattleCode.GDBannerTextWhiteObjects3);
gdjs.copyArray(runtimeScene.getObjects("Banners"), gdjs.BattleCode.GDBannersObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannerTextWhiteObjects3Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects3Objects);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Banners"), gdjs.BattleCode.GDBannersObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDBannersObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDBannersObjects3 */
{for(var i = 0, len = gdjs.BattleCode.GDBannersObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDBannersObjects3[i].returnVariable(gdjs.BattleCode.GDBannersObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.BattleCode.GDBannersObjects3[i].getPointX("")));
}
}

{ //Subevents
gdjs.BattleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.userFunc0x994940 = function GDJSInlineCode(runtimeScene) {
"use strict";
let seed = 12345; // Initial seed for deterministic random

// Linear Congruential Generator for deterministic random
function lcg() {
  seed = (1103515245 * seed + 12345) % 2147483647;
  return seed / 2147483647;
}

// Reduce angle modulo 2π
const TWO_PI = 6.283185307179586; // Approximation of 2π
function reduceAngle(x) {
  return x - TWO_PI * Math.floor(x / TWO_PI);
}

// Taylor series for sin(x), x in radians
function deterministicSin(x) {
  x = reduceAngle(x); // Keep x within [0, 2π)
  const x2 = x * x;
  let term = x;
  let sum = x;
  let n = 1;
  while (Math.abs(term) > 1e-10 && n < 100) {
    term *= -x2 / ((2 * n) * (2 * n + 1));
    sum += term;
    n++;
  }
  return sum;
}

// Taylor series for cos(x), x in radians
function deterministicCos(x) {
  x = reduceAngle(x); // Keep x within [0, 2π)
  const x2 = x * x;
  let term = 1;
  let sum = 1;
  let n = 1;
  while (Math.abs(term) > 1e-10 && n < 100) {
    term *= -x2 / ((2 * n - 1) * (2 * n));
    sum += term;
    n++;
  }
  return sum;
}

// Taylor series for exp(x)
function deterministicExp(x) {
  let term = 1;
  let sum = 1;
  let n = 1;
  while (Math.abs(term) > 1e-10 && n < 1000) {
    term *= x / n;
    sum += term;
    n++;
  }
  return sum;
}

// Deterministic tan(x) = sin(x) / cos(x)
function deterministicTan(x) {
  const sinX = deterministicSin(x);
  const cosX = deterministicCos(x);
  if (Math.abs(cosX) < 1e-10) {
    throw new Error("Tangent undefined at this point");
  }
  return sinX / cosX;
}

// Taylor series for natural logarithm ln(x)
function deterministicLog(x) {
  if (x <= 0) {
    throw new Error("Log undefined for non-positive values");
  }
  if (x < 1e-10) {
    return -Infinity; // Approximation for very small x
  }
  let result = 0;
  while (x > 2) {
    x /= 2;
    result += 0.69314718056; // ln(2)
  }
  while (x < 0.5) {
    x *= 2;
    result -= 0.69314718056; // -ln(2)
  }
  // Taylor series for ln(x) where x is between 0.5 and 2
  const z = (x - 1) / (x + 1);
  const z2 = z * z;
  let term = z;
  let sum = z;
  let n = 1;
  while (Math.abs(term) > 1e-10 && n < 1000) {
    term *= z2 * (2 * n - 1) / (2 * n + 1);
    sum += term;
    n++;
  }
  return 2 * sum + result;
}

// Newton's method for sqrt(x)
function deterministicSqrt(x) {
  if (x < 0) {
    throw new Error("Square root undefined for negative values");
  }
  if (x === 0) return 0;
  let guess = x / 2;
  const epsilon = 1e-10;
  let iterations = 0;
  while (Math.abs(guess * guess - x) > epsilon && iterations < 100) {
    guess = (guess + x / guess) / 2;
    iterations++;
  }
  return guess;
}

// Overwrite Math functions
Math.random = lcg;
Math.sin = deterministicSin;
Math.cos = deterministicCos;
Math.exp = deterministicExp;
Math.tan = deterministicTan;
Math.log = deterministicLog;
Math.sqrt = deterministicSqrt;

// Optional: Function to set a new seed
Math.setSeed = function(newSeed) {
  seed = newSeed >>> 0; // Ensure unsigned 32-bit integer
};
};
gdjs.BattleCode.userFunc0x9949a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
class RollbackManager {
  constructor(numPlayers, performanceBoost=false, bufferDelay=0, spectatorMode=false, maxFrameAdvantage = 8) {
    this.localFrame = 0;
    this.syncFrame = 0;
    this.numPlayers = numPlayers;
    this.maxFrameAdvantage = maxFrameAdvantage;
    this.inputHistory = {};
    this.predictedInputs = {};
    this.lastKnownInputs = Array(numPlayers).fill(null);
    this.remoteFrames = Array(numPlayers).fill(0);
    this.remoteFrames[0] = this.localFrame; // Local player
    this.alwaysRollback = true; // always rollback even with local inputs
    this.pauseToWaitForRemote = false; // false if you don't want to wait for players input
    this.enableInputPrediction = false; // will use last known input when given null
    this.pausedFor = 0; // custom implementation of pause
    this.bufferDelay = bufferDelay;
    this.fullRollback = false;
    this.processedFrames = [];
    this.playerName = crypto.randomUUID();
    this.players = new Set();
    this.playerId = 0;

    // boosts performance but doesn't work on all games
    if(performanceBoost) {
        this.alwaysRollback = false;
    }

    if(!spectatorMode) {
        this.__setupEventListeners();
    }
  }

  doFullRollback() {
    this.fullRollback = true;
  }

  addLocalInput(playerId, frame, input) {
    if (playerId !== 0) return; // Only player 0 is local
    if (!this.inputHistory[frame]) this.inputHistory[frame] = {};

    // no overwrites!
    if(this.inputHistory[frame][playerId]) return;
    // console.log(this.inputHistory[frame][playerId]);

    this.inputHistory[frame][playerId] = input;
    this.lastKnownInputs[playerId] = input;
    this.remoteFrames[0] = Math.max(this.remoteFrames[0], frame);

    // attempt rollback
    if (this.localFrame > frame) {
        this.syncFrame = Math.min(this.syncFrame, frame-1);
    }

    // always rollback once
    if (this.alwaysRollback && this.syncFrame >= this.localFrame) {
        this.syncFrame = Math.min(this.syncFrame, this.localFrame-1);
    }

    this.processedFrames.push(frame);
  }

  receiveRemoteInput(playerId, frame, input) {
    if (playerId === 0) return; // Player 0 is local

    if (!this.inputHistory[frame]) this.inputHistory[frame] = {};

    // no overwrites!
    if(this.inputHistory[frame][playerId]) return;
    // console.log(this.inputHistory[frame][playerId]);

    this.inputHistory[frame][playerId] = input;
    this.lastKnownInputs[playerId] = input;
    this.remoteFrames[playerId] = Math.max(this.remoteFrames[playerId], frame);

    // Check prediction
    if (this.predictedInputs[frame] && this.predictedInputs[frame][playerId] !== undefined) {
      if (this.predictedInputs[frame][playerId] !== input) {
        this.syncFrame = Math.min(this.syncFrame, frame);
      }
    }

    this.processedFrames.push(frame);
  }

  getNextCommand() {
    if (this.fullRollback) {
      this.fullRollback = false;
      const result = { type: "rollback", frame: 0 };
      return result;
    }

    if (this.localFrame > this.syncFrame && this.processedFrames.length > 0) {

        this.processedFrames.sort();
        const scopy = [...this.processedFrames ];
        const result = { type: "rollback", frame: scopy[0] };
        this.processedFrames=[];

        this.syncFrame = this.localFrame;
        return result;
    }

    // if remote don't send anything in maxFrameAdvantage(8) frames pause it
    if(this.pauseToWaitForRemote) {
        const minRemoteFrame = Math.min(...this.remoteFrames);
        const frameAdvantage = this.localFrame - minRemoteFrame;

        // console.log(this.localFrame, minRemoteFrame);

        if (frameAdvantage > this.maxFrameAdvantage) {
          return { type: "pause" };
        }
    }

    const inputs = Array(this.numPlayers).fill(null);
    for (let i = 0; i < this.numPlayers; i++) {
      if (this.inputHistory[this.localFrame] && this.inputHistory[this.localFrame][i]) {
        inputs[i] = this.inputHistory[this.localFrame][i];
      } else {
        if(this.enableInputPrediction) {
            inputs[i] = this.lastKnownInputs[i] || null;
        } else {
            inputs[i] = null;
        }
        if (i !== 0) {
          if (!this.predictedInputs[this.localFrame]) {
            this.predictedInputs[this.localFrame] = {};
          }
          this.predictedInputs[this.localFrame][i] = inputs[i];
        }
      }
    }

    if(this.processedFrames.indexOf(this.localFrame) > -1) {
        this.processedFrames.splice(this.processedFrames.indexOf(this.localFrame), 1);
    }

    this.localFrame++;
    this.syncFrame = this.localFrame;

    return { type: "normal", inputs };
  }

  // Added method to update syncFrame after rollback
  afterRollback() {
    this.syncFrame = this.localFrame;
  }

  isPaused() {
    if(this.pausedFor > 0) {
      this.pausedFor--;
      return true;
    }
    return false;
  }

  handleRecievedMessage(msg) {
      switch(msg.type) {
        case 1: // frame check every second, pause if you are ahead
          if(this.localFrame - msg.frame > 100) this.pausedFor = Math.max(this.pausedFor, this.localFrame - msg.frame);
        break;
        case 2:
          const m = new Map(msg.buffer);
          m.forEach((buff, key)=>{
              this.receiveRemoteInput(1, key, buff);
          });
        break;
        case 3:
          // send acknowledgement
          this.players.add(msg.player);
          this.broadcastMessages.push({ type: 4, player: this.playerName });          
          this.playerId = Array.from(this.players).sort().indexOf(this.playerName);
        break;
        case 4:
          // recieve ack
          this.players.add(msg.player);
          this.playerId = Array.from(this.players).sort().indexOf(this.playerName);
        break;
    }
  }

  __setupEventListeners() {
    this.broadcastMessages = [];

    // frame sync check every second
    setInterval(()=>{
        this.broadcastMessages.push({ type: 1, frame: this.localFrame });
    }, 1000);

    // announce player Name
    this.players.add(this.playerName);
    this.broadcastMessages.push({ type: 3, player: this.playerName });

    let buttons = {};
    let buffer = new Map();
    const sentFrames = new Set();

    this.sendInput = (inputThisFrame, additionalDelay=0) => {
        // overwrite same frames to latest
        const key = this.localFrame+additionalDelay+this.bufferDelay;

        if(!sentFrames.has(key)) {
            buffer.set(key, inputThisFrame);
            sentFrames.add(key);
        }
    }

    // send interval every 0.5 second
    setInterval(()=>{

        if(buffer.size == 0) return;

        buffer.forEach((buff, key)=>{
            this.addLocalInput(0, key, buff);
        });
        
        this.broadcastMessages.push({ type: 2, buffer: Array.from(buffer) });

        buffer = new Map();
        
    }, 32);

  }
}

window.RollbackManager = RollbackManager;

};
gdjs.BattleCode.userFunc0x17307a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function animateCrown(cx, cy, team=0, to) {
  const crownFrames = [
    { x: 28, y: 73, w: 76, h: 84 },
    { x: 29, y: 122, w: 79, h: 95 },
    { x: 49, y: 127, w: 92, h: 105 },
    { x: 40, y: 200, w: 99, h: 110 },
    { x: 45, y: 221, w: 110, h: 113 },
    { x: 45, y: 221, w: 110, h: 113 },
    { x: 45, y: 209, w: 110, h: 110 },
    { x: 45, y: 195, w: 109, h: 105 },
    { x: 41, y: 169, w: 104, h: 104 },
    { x: 41, y: 155, w: 100, h: 100 },
  ];
  const crown = runtimeScene.createObject('Crown');
  crown.setZOrder(1000);
  crown.setAnimationIndex(team);
  crown.setLayer('Layer');
  
  const tweenBehavior = crown.getBehavior('Tween');
  crown.setSize(crownFrames[0].w, crownFrames[0].h);
  crown.setPosition(cx - crownFrames[0].x, cy-crownFrames[0].y);
  for (let i = 0; i < crownFrames.length - 1; i++) {
    const current = crownFrames[i];
      setTimeout((current)=>{
          crown.setSize(current.w, current.h);
          crown.setPosition(cx - current.x, cy-current.y);
      }, i*32, current);
  }

  setTimeout(()=>{
    tweenBehavior.addObjectPositionTween2("sx", to.x, to.y, "linear", 26/30, false);
    tweenBehavior.addObjectWidthTween("wx", to.w, "linear", 26/30*1000, false)
    tweenBehavior.addObjectHeightTween("hx", to.h, "linear", 26/30*1000, true)
  }, 1.8*1000);
}


class Unit {
  constructor(type, x, y, animation="", flip=false, layer="", player=0, suffix=100, tinted= false) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.layer = layer;
    this.flip = flip;
    this.player = player;
    this.obj = null;
    this.update = true;
    this.suffix = suffix;
    this.initialized = false;
    this.tinted = tinted;
    this.offsets = {
        x: 0,
        y: 0,
    }
  }
  
  setTinted() {
      this.tinted = true;
      this.update = true;
  }

  setLayer(layer) {
      this.layer = layer;
      this.update = true;
  }
  
  setSuffix(suffix) {
      this.suffix = suffix;
      this.update = true;
  }

  setPosition(x,y) {
      this.x = x;
      this.y = y;
      this.update = true;
  }

  flipX(bool) {
      this.flip = bool;
      this.update = true;
  }

  setAnimationName(animation) {
      this.animation = animation;
      this.update = true;
  }

  remove() {
    if(this.obj) {
        runtimeScene.markObjectForDeletion(this.obj);
        this.obj = null;
    }
  }
    
  render() {

    const playerId = rollbackManager.playerId;
    const flipped = (playerId == 1);
    const team = (this.player != playerId) ? "red" : "blue";

    if(!this.obj) {
        this.obj = runtimeScene.createObject(this.type);
        this.initialized = false;
        this.update = true;

        if(this.type == "Units") {
            this.obj.setScale(1);
            // this.obj.setScale(2);
        } else if(this.type == "UI") {
            this.obj.setAnimationName(team + "_" + this.suffix);
        }
    }

    const flippedAnimationMap = {
        "ForwardRight": "BackRight",
        "ForwardRightAttack": "BackRightAttack",
        "BackRight": "ForwardRight",
        "BackRightAttack": "ForwardRightAttack",
        "Back": "Forward",
        "BackAttack": "ForwardAttack",
        "Right": "Right",
        "RightAttack": "RightAttack",
        "Forward": "Back",
        "ForwardAttack": "BackAttack",
    };

    if(this.update) {
        if(!this.initialized) {
            this.obj.setPosition(this.x + this.offsets.x, flipped ? game.height - this.y + this.offsets.y : this.y + this.offsets.y);
            this.initialized = true;
        }
        
        if(this.type == "UI") {
            this.obj.setAnimationName(team + "_" + this.suffix);
        } else {
            this.obj.setAnimationName((flipped && this.type=="Units") ? flippedAnimationMap[this.animation] : this.animation);
        }

        this.obj.flipX(this.flip);
        this.obj.setLayer(this.layer);

        if(this.tinted) {
            this.tinted = false;
            this.obj.setColor(team == "red"? "242;123;161": "155;197;245");
        } else {
            this.obj.setColor("255;255;255");
        }

        this.update = false;
    }
    
    const smoothness = 0.25/15;
    this.obj.setX(lerp(this.obj.getX(), this.x + this.offsets.x, smoothness));
    this.obj.setY(lerp(this.obj.getY(), flipped ? game.height - this.y + this.offsets.y: this.y + this.offsets.y, smoothness));
  }

  toJSON() {
    return {
        type: this.type,
        x: this.x,
        y: this.y,
        animation: this.animation,
        flip: this.flip,
        layer: this.layer,
        player: this.player,
        suffix: this.suffix,
        tinted: this.tinted,
    };
  }

  static fromJSON(obj) {
    return new Unit(obj.type, obj.x, obj.y, obj.animation, obj.flip, obj.layer, obj.player, obj.suffix, obj.tinted); // Deserialize reference
  }
}

class BldgHp extends Unit {
    constructor(type, positionId, player=0, health=500, maxhealth=500, main=false) {
        super(type, 0, 0, "", false, "", player, 100, false);
        this.positionId = positionId;
        this.maxhealth = maxhealth;
        this.health = health;
        this.main = main;
    }
    
    setMainHpBar(main) {
        this.main = main;
        this.update = true;
    }

    setHealth(health) {
        this.health = health;
        this.update = true;
    }

    render() {
        const positionsMap = {
            // Top
            "TopLeft":   {x: 94,  y: 79},
            "TopRight":  {x: 542, y: 79},
            "TopCenter": {x: 317, y:-92},

            // Bottom
            "BottomLeft":   {x: 94,  y: 799 },
            "BottomRight":  {x: 542, y: 799 },
            "BottomCenter": {x: 317, y: 1008 },
        };

        const flippedPositionsMap = {
            // Top
            "BottomLeft":   {x: 94,  y: 79},
            "BottomRight":  {x: 542, y: 79},
            "BottomCenter": {x: 317, y:-92},

            // Bottom
            "TopLeft":   {x: 94,  y: 799 },
            "TopRight":  {x: 542, y: 799 },
            "TopCenter": {x: 317, y: 1008 },
        };

        const playerId = rollbackManager.playerId;
        const flipped = (playerId == 1);
        const team = (this.player != playerId) ? "red" : "blue";

        if(!this.obj) {
            this.obj = runtimeScene.createObject(this.type);
            this.obj.SetTeam(team);
            this.obj.setSize(45,45);
            this.obj.setLayer(this.layer);
            this.update = true;
        }

        if(this.update) {
            this.obj.SetMaxHealth(this.maxhealth);
            this.obj.SetHealth(this.health);
            this.obj.SetMainHpBar(this.main);
            this.update = false;
        }
        
        const x = flipped ? flippedPositionsMap[this.positionId].x : positionsMap[this.positionId].x;
        const y = flipped ? flippedPositionsMap[this.positionId].y : positionsMap[this.positionId].y;

        this.obj.setPosition(x + this.offsets.x, y + this.offsets.y);
        this.obj.SetTeam(team);
    }

    toJSON() {
        return {
            type: this.type,
            positionId: this.positionId,
            player: this.player,
            health: this.health,
            maxhealth: this.maxhealth,
            main: this.main,
        };
    }

    static fromJSON(obj) {
        return new BldgHp(obj.type, obj.positionId, obj.player, obj.health, obj.maxhealth, obj.main); // Deserialize reference
    }
}

class Bldg extends Unit {
    scale = 0.6781;

    positionsMap = {
        // Top
        "TopLeft":   {x: 97,  y: 111},
        "TopRight":  {x: 545, y: 111},
        "TopCenter": {x: 312, y:-15},

        // Bottom
        "BottomLeft":   {x: 97,  y: 729 },
        "BottomRight":  {x: 545, y: 729 },
        "BottomCenter": {x: 312, y: 834 },
    };

    flippedPositionsMap = {
        // Top
        "BottomLeft":   {x: 97,  y: 111},
        "BottomRight":  {x: 545, y: 111},
        "BottomCenter": {x: 312, y:-15},

        // Bottom
        "TopLeft":   {x: 97,  y: 729 },
        "TopRight":  {x: 545, y: 729 },
        "TopCenter": {x: 312, y: 834 },
    };

    animationIndexMap = {
        // Top
        "TopLeft":   1,
        "TopRight":  1,
        "TopCenter": 0,

        // Bottom
        "BottomLeft":   3,
        "BottomRight":  3,
        "BottomCenter": 2,
    };

    flippedAnimationIndexMap = {
        // Top
        "BottomLeft":   1,
        "BottomRight":  1,
        "BottomCenter": 0,

        // Bottom
        "TopLeft":   3,
        "TopRight":  3,
        "TopCenter": 2,
    };

    layer = "";

    constructor(type, positionId, player=0) {
        super(type, 0, 0, "", false, "", player, 100, false);
        this.positionId = positionId;
    }

    render() {
        const playerId = rollbackManager.playerId;
        const flipped = (playerId == 1);
        const team = (this.player != playerId) ? "red" : "blue";

        if(!this.obj) {
            this.obj = runtimeScene.createObject(this.type);
            this.obj.setScale(this.scale);
            this.obj.setLayer(this.layer);
            this.obj.setZOrder(1000);
            this.update = true;
        }

        if(this.update) {
          this.update = false;
        }

        if(this.tinted) {
            this.tinted = false;
            this.obj.setColor(team == "red"? "242;123;161": "155;197;245");
        } else {
            this.obj.setColor("255;255;255");
        }

        const {x, y} = this.position;
        this.obj.setPosition(x + this.offsets.x, y + this.offsets.y);

        const animationIndex = flipped ? this.flippedAnimationIndexMap[this.positionId] : this.animationIndexMap[this.positionId];
        this.obj.setAnimationIndex(animationIndex);
    }

    get position() {
        const playerId = rollbackManager.playerId;
        const flipped = (playerId == 1);
        const x = flipped ? this.flippedPositionsMap[this.positionId].x : this.positionsMap[this.positionId].x;
        const y = flipped ? this.flippedPositionsMap[this.positionId].y : this.positionsMap[this.positionId].y;

        return {x,y};
    }

    toJSON() {
        return {
            type: this.type,
            positionId: this.positionId,
            player: this.player,
        };
    }

    static fromJSON(obj) {
        return new Bldg(obj.type, obj.positionId, obj.player); // Deserialize reference
    }
}

class BldgCharacter extends Unit {
    scale = 0.69;

    positionsMap = {
        // Top
        "TopLeft":   {x: 150,  y: 143.5, w: 60, h: 75},
        "TopRight":  {x: 598, y: 143.5, w: 60, h: 75},
        "TopCenter": {x: 381, y:10, w: 80, h: 100},

        // Bottom
        "BottomLeft":   {x: 163,  y: 749, w: 60, h: 65 },
        "BottomRight":  {x: 611, y: 749, w: 60, h: 65 },
        "BottomCenter": {x: 380, y: 866, w: 80, h: 86 },
    };

    flippedPositionsMap = {
        // Top
        "BottomLeft":   {x: 150,  y: 143.5, w: 60, h: 75},
        "BottomRight":  {x: 598, y: 143.5, w: 60, h: 75},
        "BottomCenter": {x: 381, y:10, w: 80, h: 100},

        // Bottom
        "TopLeft":   {x: 163,  y: 749, w: 60, h: 65 },
        "TopRight":  {x: 611, y: 749, w: 60, h: 65 },
        "TopCenter": {x: 380, y: 866, w: 80, h: 86 },
    };

    animationIndexMap = {
        // Top
        "TopLeft":   2,
        "TopRight":  2,
        "TopCenter": 0,

        // Bottom
        "BottomLeft":   3,
        "BottomRight":  3,
        "BottomCenter": 1,
    };

    flippedAnimationIndexMap = {
        // Top
        "BottomLeft":   2,
        "BottomRight":  2,
        "BottomCenter": 0,

        // Bottom
        "TopLeft":   3,
        "TopRight":  3,
        "TopCenter": 1,
    };

    layer = "";

    constructor(type, positionId, player=0) {
        super(type, 0, 0, "", false, "", player, 100, false);
        this.positionId = positionId;
    }

    render() {
        const playerId = rollbackManager.playerId;
        const flipped = (playerId == 1);
        const team = (this.player != playerId) ? "red" : "blue";

        if(!this.obj) {
            this.obj = runtimeScene.createObject(this.type);
            this.obj.setScale(this.scale);
            this.obj.setLayer(this.layer);
            this.obj.setZOrder(1001);
            this.update = true;
        }

        if(this.update) {
          this.update = false;
        }

        const {x, y} = this.position;
        this.obj.setPosition(x + this.offsets.x, y + this.offsets.y);

        const animationIndex = flipped ? this.flippedAnimationIndexMap[this.positionId] : this.animationIndexMap[this.positionId];
        this.obj.setAnimationIndex(animationIndex);
    }

    get position() {
        const playerId = rollbackManager.playerId;
        const flipped = (playerId == 1);
        const x = flipped ? this.flippedPositionsMap[this.positionId].x : this.positionsMap[this.positionId].x;
        const y = flipped ? this.flippedPositionsMap[this.positionId].y : this.positionsMap[this.positionId].y;

        return {x,y};
    }

    toJSON() {
        return {
            type: this.type,
            positionId: this.positionId,
            player: this.player,
        };
    }

    static fromJSON(obj) {
        return new BldgCharacter(obj.type, obj.positionId, obj.player); // Deserialize reference
    }
}

class UnitGroup {
  constructor(team, x, y, health=100, wait=0) {
    this.type = "unit";
    this.team = team;
    this.health = health;
    this.wait = wait; // just stand for a while before moving
    this.idleTime = 2;

    this.obj = new Unit('Units');
    this.ui = new Unit('UI');

    this._setPosition(x, y);

    this.obj.player = this.ui.player = team;
    this.ui.setLayer('Layer');
  }

  _setPosition(x, y) {
    const px = x * Game.scale;
    const py = y * Game.scale;
    this.obj.setPosition(px, py);
    this.ui.setPosition(px, py);
  }

  attack(anim, flip) {
    this.obj.setAnimationName(anim);
    this.obj.flipX(flip);
  }

  // call this via unit.move(5, 3, { anim: 'walk', flip: true }); or unit.move(5, 3, { anim: 'run' });
  move(nx,ny, { anim, flip } = {}) {
    // reposition
    this._setPosition(nx, ny);

    // animate
    if (anim != null) {
      this.obj.setAnimationName(anim);
      this.obj.flipX(flip);
    }
  }

  render() {
    this.obj.render();
    this.ui.render();
  }

  hurt() {
    this.ui.setSuffix(Math.floor(this.health/10)*10);
    this.obj.setTinted();
  }

  free() {
    this.obj.remove();
    this.ui.remove();
  }

  recreate(obj, ui) {
    // this.obj = Unit.fromJSON(game.grid[y][x].obj);
    // this.ui = Unit.fromJSON(game.grid[y][x].ui);

    this.obj = Unit.fromJSON(obj);
    this.ui = Unit.fromJSON(ui);
  }

  remove(nx,ny) {
    // create side effect
    if(this.obj.obj) {
        const sp = runtimeScene.createObject('SlimeParticles');
        sp.setLayer('Layer');
        sp.setScale(0.7)
        sp.setCenterPositionInScene(this.obj.obj.getCenterXInScene(),this.obj.obj.getCenterYInScene());

        const sgas = runtimeScene.createObject('SlimeGas');
        sgas.setLayer('Layer');
        sgas.setCenterPositionInScene(this.obj.obj.getCenterXInScene(),this.obj.obj.getCenterYInScene());

        const sg = runtimeScene.createObject('SlimeGround');
        sg.setLayer('Ground');
        sg.setScale(0.7)
        sg.setCenterPositionInScene(this.obj.obj.getCenterXInScene(),this.obj.obj.getCenterYInScene());
    }

    this.obj.remove();
    this.ui.remove();
  }

  toJSON() {
    return {
      type:     this.type,
      team:     this.team,
      health:   this.health,
      wait:     this.wait,
      idleTime: this.idleTime,
      obj:      this.obj.toJSON(),
      ui:       this.ui.toJSON()
    };
  }

  static fromJSON(obj) {
    const inst = new UnitGroup(obj.team, obj.x, obj.y, obj.health, obj.wait);
    inst.recreate(inst.obj, inst.ui);
    return inst;
  }
}

class BldgGroup extends UnitGroup {
    positionsMap = {
        // Top
        "TopLeft":   {x: 80,  y: 132, w: 161, h: 123},
        "TopRight":  {x: 518, y: 132, w: 161, h: 123},
        "TopCenter": {x: 297, y:20, w: 171, h: 131},

        // Bottom
        "BottomLeft":   {x: 80,  y: 750, w: 161, h: 123 },
        "BottomRight":  {x: 518, y: 750, w: 161, h: 123 },
        "BottomCenter": {x: 293, y: 861, w: 178, h: 136 },

        "ScoreTop": {x:686,y:398,w:77,h:63},
        "ScoreBottom": {x:686,y:575,w:77,h:63},
    };

    flippedPositionsMap = {
        // Top
        "BottomLeft":   {x: 80,  y: 132, w: 161, h: 123},
        "BottomRight":  {x: 518, y: 132, w: 161, h: 123},
        "BottomCenter": {x: 297, y:20, w: 171, h: 131},

        // Bottom
        "TopLeft":   {x: 80,  y: 750, w: 161, h: 123 },
        "TopRight":  {x: 518, y: 750, w: 161, h: 123 },
        "TopCenter": {x: 293, y: 861, w: 178, h: 136 },

        "ScoreBottom": {x:686,y:398,w:77,h:63},
        "ScoreTop": {x:686,y:575,w:77,h:63},
    };

    constructor(team, positionId, health=1000, wait=0, main=false) {
      super(team, 0, 0, health, wait);     // initialize base fields
      this.type = "building";
      this.positionId = positionId;

      // replace “obj” entirely with just a UI bar
      this.obj = new Bldg('Buildings', positionId, team);
      this.char = new BldgCharacter('Characters', positionId, team);
      this.ui  = new BldgHp('TowerHpBar', positionId, team, health, health, main);
      this.ui.setLayer('Layer');
    }

    attack() {
      // do nothing
    }

    move() {
      // do nothing
    }

    render() {
      this.ui.render();
      this.obj.render();
      this.char.render();
    }

    free() {
      this.ui.remove();
      this.obj.remove();
      this.char.remove();
    }

    recreate(ui, obj) {
      this.ui = BldgHp.fromJSON(ui);
      this.obj = Bldg.fromJSON(obj);
      this.char = BldgCharacter.fromJSON(obj);
    }

    hurt() {
      this.ui.setHealth(this.health);
      this.obj.setTinted();
    }

    remove(nx,ny) {
        const flipped = (rollbackManager.playerId == 1);
        const {x,y,w,h} = flipped ? this.flippedPositionsMap[this.positionId] : this.positionsMap[this.positionId];
        const crownScore = this.team == rollbackManager.playerId ? "ScoreTop" : "ScoreBottom";
        const cx = x + (w/2);
        const cy = y + (h/2);
        
        // todo: create destroyed building particles
        const wreckage = runtimeScene.createObject('Buildings');
        wreckage.setLayer('Ground');
        wreckage.setAnimationIndex((this.positionId == "TopCenter" || this.positionId == "BottomCenter")? 4:5);
        wreckage.setSize(w,h);
        wreckage.setPosition(x,y);
        const explosion = runtimeScene.createObject('BuildingExplosion');
        explosion.setLayer('Ground');
        explosion.setCenterPositionInScene(cx,cy);
        const smoke = runtimeScene.createObject('BuildingSmoke');
        smoke.setLayer('Ground');
        smoke.setCenterPositionInScene(cx,cy);
        animateCrown(cx,cy, this.team == rollbackManager.playerId ? 1 : 0, this.positionsMap[crownScore]);
      
        // ground shake
        runtimeScene.getVariables().get('CameraShake').setBoolean(true);

        this.free();

        // remove from path finding (todo: 2 x,y reference to 1 object, you need to find and delete the other one too)
        game.destinationsA = game.destinationsA.filter(obj => !(obj.x === nx && obj.y === ny));
        game.destinationsB = game.destinationsB.filter(obj => !(obj.x === nx && obj.y === ny));
        
        // if center is deleted delete every other building too
        const generalPosition = {
            "TopCenter": "Center",
            "TopLeft": "Left",
            "TopRight": "Right",
            "BottomCenter": "Center",
            "BottomLeft": "Left",
            "BottomRight": "Right",
        }
        game.variables[this.team == rollbackManager.playerId ? "blueLife": "redLife"] = 
            game.variables[this.team == rollbackManager.playerId ? "blueLife": "redLife"].filter(o=>o!=generalPosition[this.positionId]);

        game.variables[this.team == rollbackManager.playerId ? "redScore": "blueScore"]++;

        game.variables[this.team == rollbackManager.playerId ? "redScore": "blueScore"] = Math.min(3, game.variables[this.team == rollbackManager.playerId ? "redScore": "blueScore"]);
    }

    toJSON() {
      return {
        type:     this.type,
        team:     this.team,
        health:   this.health,
        wait:     this.wait,
        idleTime: this.idleTime,
        positionId: this.positionId,
        ui:  this.ui.toJSON(),
        obj: this.obj.toJSON(),
        char: this.char.toJSON(),
      };
    }

    static fromJSON(obj) {
      const inst = new BldgGroup(obj.team, obj.positionId, obj.health, obj.wait);
      inst.recreate(obj.ui);
      inst.recreate(obj.obj);
      inst.recreate(obj.char);
      return inst;
    }
}

window.UnitGroup = UnitGroup;
window.BldgGroup = BldgGroup;
};
gdjs.BattleCode.userFunc0x1730898 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Compute distances using BFS
function createFlowField(grid, destinations) {
    const gridHeight = grid.length, gridWidth = grid[0].length;
    const distances = Array(gridHeight).fill().map(() => Array(gridWidth).fill(Infinity));
    const queue = [];

    destinations.forEach(destination=>{
        distances[destination.y][destination.x] = 0;
        queue.push({ x: destination.x, y: destination.y });
    })

    const directions = [
        { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
        // { dx: 1, dy: -1 }, { dx: -1, dy: -1 }, { dx: 1, dy: 1 }, { dx: 1, dy: -1 }
    ];

    while (queue.length > 0) {
        const current = queue.shift();
        const dist = distances[current.y][current.x];
        for (const dir of directions) {
            const nx = current.x + dir.dx;
            const ny = current.y + dir.dy;
            if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight && grid[ny][nx] != 2 && grid[ny][nx] != 3 && distances[ny][nx] === Infinity) {
                distances[ny][nx] = dist + 1;
                queue.push({ x: nx, y: ny });
            }
        }
    }

    // Compute flow field
    const flowField = Array(gridHeight).fill().map(() => Array(gridWidth).fill(null));
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            if (distances[y][x] === Infinity) {
                flowField[y][x] = { dx: 0, dy: 0 };
            } else {
                let minDist = Infinity;
                let bestDir = { dx: 0, dy: 0 };
                for (const dir of directions) {
                    const nx = x + dir.dx;
                    const ny = y + dir.dy;
                    if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight && distances[ny][nx] < minDist) {
                        minDist = distances[ny][nx];
                        bestDir = dir;
                    }
                }
                flowField[y][x] = bestDir;
            }
        }
    }

    return flowField;
}

class Game {
    static scale = 20;

    // should be serializable
    variables = {};

    framesToTime(frames, fps) {
        const totalSeconds = Math.floor(frames / fps);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    seedRandom(seed) {
        var x = Math.sin(seed++) * 10000;
        this.seed++;
        return x - Math.floor(x);
    }

    get2DMouse(e) {
        const cameraYOffset = -220;
        
        // const x = Math.floor(runtimeScene.getGame().getInputManager().getCursorX());
        // const y = Math.floor(runtimeScene.getGame().getInputManager().getCursorY()+cameraYOffset);

        const ref = runtimeScene.getObjects('DragBox')[0];
        const x = ref.getX();
        const y = ref.getY();

        return {x,y};
    }

    getTimeLeft() {
        const fps = 10;
        const frame = this.frame;
        const timeLimit = 3*60*fps; // 3 mins

        return this.framesToTime(Math.max(0,timeLimit-frame), fps);
    }

    createUnit(x,y, wait, team) {
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
            if(this.grid[y][x]==0) {
                this.grid[y][x]= new UnitGroup(team, x, y, 100, wait);
                return true;
            }
        }

        return false;
    }

    createBldg(x, y, wait, team, health, positionId, mainHpBar) {
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
            this.grid[y][x]= new BldgGroup(team, positionId, health, wait, mainHpBar);
            return this.grid[y][x];
        }

        return false;
    }

    constructor() {
        this.mouseState = [
            { left: false, middle: false, right: false, x: 0, y: 0, player: 0},
            { left: false, middle: false, right: false, x: 0, y: 0, player: 0},
        ];
        this.seed = 0;
        Game.scale = Game.scale;//25;
        
        this.width = 760;
        this.height = 1020;
        this.gridWidth = Math.floor(this.width/Game.scale);
        this.gridHeight = Math.floor(this.height/Game.scale);
        this.grid = Array(this.gridHeight).fill().map(() => Array(this.gridWidth).fill(0));

        // create walls
        const walls = runtimeScene.getObjects('Wall');
        const buildings = runtimeScene.getObjects('BuildingWall');
        [...walls, ...buildings].forEach(wall=>{
            const x = Math.floor(wall.getX()/Game.scale);
            const y = Math.floor(wall.getY()/Game.scale);
            const width = Math.floor(wall.getWidth()/Game.scale);
            const height = Math.floor(wall.getHeight()/Game.scale);

            for (let dy = 0; dy < height; dy++) {
                for (let dx = 0; dx < width; dx++) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < this.gridWidth && ny >= 0 && ny < this.gridHeight) {
                        this.grid[ny][nx]=2;
                        // console.log(nx,ny)
                    }
                }
            }
        });
        
        this.variables = {
            redLife: ["Left", "Right", "Center"],
            redScore: 0,
            blueLife: ["Left", "Right", "Center"],
            blueScore: 0,
        }

        const checkpoints = runtimeScene.getObjects('Checkpoints').map(o=>({
            x:Math.floor(o.getX()/Game.scale),
            y:Math.floor(o.getY()/Game.scale),
            positionId: o.getVariables().get('PositionId').getAsString(),
            team: o.getVariables().get('Team').getAsNumber(),
            maxHealth: o.getVariables().get('MaxHealth').getAsNumber(),
        }));

        // create hp buildings
        const createdAlready = new Map();
        this.instanceMap = new Map();
        this.instanceMap.set('TopCenter',[]);
        this.instanceMap.set('BottomCenter',[]);
        checkpoints.forEach(o=>{
            const mainHpBar = (o.positionId == 'TopCenter' || o.positionId == 'BottomCenter');
            const topOrBottom = o.positionId.includes('Top') ? 'TopCenter' : 'BottomCenter';

            if(createdAlready.has(o.positionId)) {
                this.grid[o.y][o.x]=createdAlready.get(o.positionId);
                this.instanceMap.get(topOrBottom).push({x:o.x,y:o.y});
                return;
            }
            
            const inst = this.createBldg(o.x, o.y, 0, o.team, o.maxHealth, o.positionId, mainHpBar);
            createdAlready.set(o.positionId, inst);
            this.instanceMap.get(topOrBottom).push({x:o.x,y:o.y});
        });
        createdAlready.clear();

        this.destinationsA = checkpoints.filter(d=>d.team==1).map(d=>({x:d.x,y:d.y}));
        this.destinationsB = checkpoints.filter(d=>d.team==0).map(d=>({x:d.x,y:d.y}));

        this.computeCheckpoints();

        this.pending = [];
        this.computedChecksum = "";
        this.frame = 0;
        this.stateHistory = {};
        this.saveState(0);
    }

    computeCheckpoints(redTeam=[], blueTeam=[]) {
        // Create flow fields
        this.checkpointForTeamA = createFlowField(this.grid, [...this.destinationsA, ...redTeam]);
        this.checkpointForTeamB = createFlowField(this.grid, [...this.destinationsB, ...blueTeam]);
    }

    // Render grid using ImageData for batching
    render () {
        const gridHeight = this.gridHeight;
        const gridWidth = this.gridWidth;

        for (let y = gridHeight - 1; y >= 0; y--) {
            for (let x = 0; x !== gridWidth; x += 1) {
                if (this.grid[y][x] !== 0 && this.grid[y][x] !== 2) {
                    this.grid[y][x].render();
                }
            }
        }
    }

    gameOver (winningTeam) {
        const gridHeight = this.gridHeight;
        const gridWidth = this.gridWidth;

        for (let y = gridHeight - 1; y >= 0; y--) {
            for (let x = 0; x !== gridWidth; x += 1) {
                if (this.grid[y][x] !== 0 && this.grid[y][x] !== 2 && this.grid[y][x].team !== winningTeam) {
                    this.grid[y][x].remove();
                    this.grid[y][x] = 0;
                }
            }
        }
    }

    free () {
        const gridHeight = this.gridHeight;
        const gridWidth = this.gridWidth;

        for (let y = gridHeight - 1; y >= 0; y--) {
            for (let x = 0; x !== gridWidth; x += 1) {
                if (this.grid[y][x] !== 0 && this.grid[y][x] !== 2) {
                    this.grid[y][x].free();
                }
            }
        }
    }

    recreate () {
        const gridHeight = this.gridHeight;
        const gridWidth = this.gridWidth;

        for (let y = gridHeight - 1; y >= 0; y--) {
            for (let x = 0; x !== gridWidth; x += 1) {
                if (this.grid[y][x] !== 0 && this.grid[y][x] !== 2) {
                    if(this.grid[y][x].type=='unit') {
                        this.grid[y][x] = UnitGroup.fromJSON(this.grid[y][x]);
                    } else if(this.grid[y][x].type=='building') {
                        this.grid[y][x] = BldgGroup.fromJSON(this.grid[y][x]);
                    }
                }
            }
        }
    }

    step(inputs) {
        let inputsApplied = false;

        for(const player in inputs) {
            const input = inputs[player];

            if(!input) continue;
            inputsApplied = true;
        }

        if(inputsApplied) {
            const params = new URLSearchParams(window.location.search);
            this.computedChecksum = `(${params.get('user')}) Inputs applied at ${this.frame} checksum ${this.checksum()}`;
            console.log(this.computedChecksum);
        }

        const createCommand = [];

        for(const player in inputs) {
            const input = inputs[player];

            if(!input) continue;

            // console.log({input})
            // console.log(input[0]);
            switch (input[0]) {
                case "MOUSELEFT":
                    // this.setColor(1);
                    this.mouseState[0].left = true;
                    this.mouseState[0].x = input[2];
                    this.mouseState[0].y = input[3];
                    this.mouseState[0].player = input[1];
                break;
                case "MOUSEMIDDLE":
                    this.mouseState[0].middle = true;
                    this.mouseState[0].x = input[2];
                    this.mouseState[0].y = input[3];
                    this.mouseState[0].player = input[1];
                break;
                case "MOUSERIGHT":
                    // this.setColor(3);
                    this.mouseState[0].right = true;
                    this.mouseState[0].x = input[2];
                    this.mouseState[0].y = input[3];
                    this.mouseState[0].player = input[1];
                break;
                case "MOUSE_UP":
                    this.mouseState[0].left = false;
                    this.mouseState[0].middle = false;
                    this.mouseState[0].right = false;
                    this.mouseState[0].player = input[1];
                break;
                case "CREATE":
                    createCommand.push({
                        player: input[1],
                        x: input[2],
                        y: input[3],
                        spell: input[4],
                        wait: 7,
                        timer: true,
                    });
                break;
                case "EMOTE":
                    if(input[1]==rollbackManager.playerId) {
                        runtimeScene.getObjects('BlueEmote')[0].Animate(input[2]);
                    } else {
                        runtimeScene.getObjects('RedEmote')[0].Animate(input[2]);
                    }
                break;
            }
        }
        
        runtimeScene.getVariables().get('CreateCommand').fromJSObject(createCommand);
        runtimeScene.getVariables().get('Scale').setNumber(Game.scale);
        runtimeScene.getVariables().get('MouseState').fromJSObject(game.mouseState[0]);
    }

    hashString(handle) {
        const str = String(handle); // works with numbers or strings like "5e-324"
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash); // Ensure positive integer
    }

    checksum() {
        // return this.hashString(JSON.stringify(this.stateHistory[this.frame].snapshot));
        // return this.hashString(JSON.stringify(this.stateHistory[this.frame].mouseState)); // inconsistent state
        return this.hashString(JSON.stringify(this.stateHistory[this.frame % 300]));
    }

    saveState(frame) {
        this.stateHistory[frame % 300] = {
            grid: JSON.parse(JSON.stringify(this.grid)),
            mouseState: JSON.parse(JSON.stringify(this.mouseState)),
            seed: JSON.parse(JSON.stringify(this.seed)),
            pending: JSON.parse(JSON.stringify(this.pending)),
            variables: JSON.parse(JSON.stringify(this.variables)),
        }
    }

    loadState(frame) {
        const saved = this.stateHistory[frame % 300];
        if (!saved) {
            console.error(`No state found for frame ${frame}`);
            return;
        }

        this.free();
        this.grid = JSON.parse(JSON.stringify(saved.grid));
        this.recreate();

        this.mouseState = JSON.parse(JSON.stringify(saved.mouseState));
        this.seed = JSON.parse(JSON.stringify(saved.seed));
        this.pending = JSON.parse(JSON.stringify(saved.pending));
        this.variables = JSON.parse(JSON.stringify(saved.variables));
        this.frame = frame;
    }

    advance(inputs) {
        // console.log('advance', inputs, this.frame);
        this.step(inputs);
        // this.frame++;
        // this.saveState(this.frame);
    }

    save() {
        this.frame++;
        this.saveState(this.frame);
    }

}
window.Game = Game;
window.game = new Game();
};
gdjs.BattleCode.userFunc0x196e490 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.rollbackManager = new RollbackManager(2, true, 3);
window.bc = new BroadcastChannel("test_channel");
bc.onmessage = (event) => rollbackManager.handleRecievedMessage(event.data);

runtimeScene.getVariables().get('Ready').setBoolean(true);


// console.log(game.grid);

const debug = runtimeScene.getVariables().get('Debug').getAsBoolean();

if(debug) {
    // for faster testing spawn after 3 seconds
    var a = setInterval(()=>{
        rollbackManager.sendInput(['CREATE', 0, 496, 652, 'MultipleSkeletons'], 1);
        rollbackManager.sendInput(['CREATE', 0, 431, 736, 'MultipleSkeletons'], 2);
        rollbackManager.sendInput(['CREATE', 0, 471, 742, 'MultipleSkeletons'], 3);
        rollbackManager.sendInput(['CREATE', 0, 513, 744, 'MultipleSkeletons'], 4);

        rollbackManager.sendInput(['CREATE', 1, 496, 652, 'MultipleSkeletons'], 5);
        rollbackManager.sendInput(['CREATE', 1, 431, 736, 'MultipleSkeletons'], 6);
        rollbackManager.sendInput(['CREATE', 1, 471, 742, 'MultipleSkeletons'], 7);
        rollbackManager.sendInput(['CREATE', 1, 513, 744, 'MultipleSkeletons'], 8);

        rollbackManager.sendInput(['CREATE', 1, 150, 950, 'MultipleSkeletons'], 9);
        rollbackManager.sendInput(['CREATE', 0, 150, 950, 'MultipleSkeletons'], 10);
        rollbackManager.sendInput(['CREATE', 0, 700, 950, 'MultipleSkeletons'], 11);
        rollbackManager.sendInput(['CREATE', 1, 700, 950, 'MultipleSkeletons'], 12);

    }, 5000)

    setTimeout(()=>{
        clearInterval(a);
    }, 20000)
}

};
gdjs.BattleCode.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ClashRoyale__PlayMusicUsingId.func(runtimeScene, "BattleMusic", null);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Battle_ScoresLayout", 0, 0, 0);
}

{ //Subevents
gdjs.BattleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Battle_StartBattleLayout", 0, 0, 0);
}

{ //Subevents
gdjs.BattleCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Guide", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Background", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Layer", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Layer2", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Hidden", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "Ground", null);
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "EmoteLayer", null);
}
}

}


{



}


{


gdjs.BattleCode.userFunc0x994940(runtimeScene);

}


{


gdjs.BattleCode.userFunc0x9949a8(runtimeScene);

}


{


gdjs.BattleCode.userFunc0x17307a8(runtimeScene);

}


{


gdjs.BattleCode.userFunc0x1730898(runtimeScene);

}


{


gdjs.BattleCode.userFunc0x196e490(runtimeScene);

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDDragBoxObjects2Objects = Hashtable.newFrom({"DragBox": gdjs.BattleCode.GDDragBoxObjects2});
gdjs.BattleCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

};gdjs.BattleCode.asyncCallback30333084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects7);

{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects7[i].getBehavior("Tween").addObjectScaleTween3("s", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects7[i].getVariables().getFromIndex(1))), "linear", 0.1, false, true);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects7[i].getBehavior("Tween").addObjectPositionTween2("xy", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects7[i].getVariables().getFromIndex(2))), (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects7[i].getVariables().getFromIndex(0))), "bouncePast", 0.25, false);
}
}
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30333084, gdjs.BattleCode.asyncCallback30333084);
gdjs.BattleCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDCardsObjects6) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.18333 * runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() * 1), (runtimeScene) => (gdjs.BattleCode.asyncCallback30333084(runtimeScene, asyncObjectsList)), 30333084, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.BattleCode.GDCardsObjects6[i].getVariableNumber(gdjs.BattleCode.GDCardsObjects6[i].getVariables().getFromIndex(3)) == runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDCardsObjects6[k] = gdjs.BattleCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.BattleCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardsObjects6 */
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects6[i].getBehavior("Scale").setScale((gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects6[i].getVariables().getFromIndex(1))) / 4);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects6[i].setPosition(42,1241);
}
}

{ //Subevents
gdjs.BattleCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(12).add(1);
}
}

}


};gdjs.BattleCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects5);


for (gdjs.BattleCode.forEachIndex6 = 0;gdjs.BattleCode.forEachIndex6 < gdjs.BattleCode.GDCardsObjects5.length;++gdjs.BattleCode.forEachIndex6) {
gdjs.BattleCode.GDCardsObjects6.length = 0;


gdjs.BattleCode.forEachTemporary6 = gdjs.BattleCode.GDCardsObjects5[gdjs.BattleCode.forEachIndex6];
gdjs.BattleCode.GDCardsObjects6.push(gdjs.BattleCode.forEachTemporary6);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects6[i].returnVariable(gdjs.BattleCode.GDCardsObjects6[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
}

}


{


const repeatCount5 = runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber();
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.BattleCode.eventsList15(runtimeScene, asyncObjectsList);} //Subevents end.
}
}

}


};gdjs.BattleCode.asyncCallback30318636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}

{ //Subevents
gdjs.BattleCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30318636, gdjs.BattleCode.asyncCallback30318636);
gdjs.BattleCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save Cards as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.45), (runtimeScene) => (gdjs.BattleCode.asyncCallback30318636(runtimeScene, asyncObjectsList)), 30318636, asyncObjectsList);
}
}

}


};gdjs.BattleCode.asyncCallback30321556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CardHolder"), gdjs.BattleCode.GDCardHolderObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("NextCard"), gdjs.BattleCode.GDNextCardObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDCardHolderObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderObjects3[i].getBehavior("Tween").addObjectPositionYTween2("y", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardHolderObjects3[i].getVariables().get("InitialY"))), "linear", 0.15, false);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects3[i].getBehavior("Tween").addObjectPositionYTween2("y", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDNextCardObjects3[i].getVariables().get("InitialY"))), "linear", 0.15, false);
}
}

{ //Subevents
gdjs.BattleCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30321556, gdjs.BattleCode.asyncCallback30321556);
gdjs.BattleCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
/* Don't save CardHolder as it will be provided by the parent asyncObjectsList. */
/* Don't save Cards as it will be provided by the parent asyncObjectsList. */
/* Don't save NextCard as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.BattleCode.asyncCallback30321556(runtimeScene, asyncObjectsList)), 30321556, asyncObjectsList);
}
}

}


};gdjs.BattleCode.asyncCallback30321460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);

{ //Subevents
gdjs.BattleCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30321460, gdjs.BattleCode.asyncCallback30321460);
gdjs.BattleCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDCardHolderObjects1) asyncObjectsList.addObject("CardHolder", obj);
for (const obj of gdjs.BattleCode.GDCardsObjects1) asyncObjectsList.addObject("Cards", obj);
for (const obj of gdjs.BattleCode.GDNextCardObjects1) asyncObjectsList.addObject("NextCard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.016633), (runtimeScene) => (gdjs.BattleCode.asyncCallback30321460(runtimeScene, asyncObjectsList)), 30321460, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DragBox"), gdjs.BattleCode.GDDragBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("MobDropDesc"), gdjs.BattleCode.GDMobDropDescObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDMobDropDescObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDMobDropDescObjects2[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDDragBoxObjects2Objects, null);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CardHolder"), gdjs.BattleCode.GDCardHolderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextCard"), gdjs.BattleCode.GDNextCardObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDCardHolderObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderObjects1[i].returnVariable(gdjs.BattleCode.GDCardHolderObjects1[i].getVariables().get("InitialY")).setNumber((gdjs.BattleCode.GDCardHolderObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].returnVariable(gdjs.BattleCode.GDCardsObjects1[i].getVariables().get("InitialY")).setNumber((gdjs.BattleCode.GDCardsObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects1[i].returnVariable(gdjs.BattleCode.GDNextCardObjects1[i].getVariables().get("InitialY")).setNumber((gdjs.BattleCode.GDNextCardObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardHolderObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderObjects1[i].returnVariable(gdjs.BattleCode.GDCardHolderObjects1[i].getVariables().get("InitialX")).setNumber((gdjs.BattleCode.GDCardHolderObjects1[i].getPointX("")));
}
for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].returnVariable(gdjs.BattleCode.GDCardsObjects1[i].getVariables().get("InitialX")).setNumber((gdjs.BattleCode.GDCardsObjects1[i].getPointX("")));
}
for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects1[i].returnVariable(gdjs.BattleCode.GDNextCardObjects1[i].getVariables().get("InitialX")).setNumber((gdjs.BattleCode.GDNextCardObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardHolderObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderObjects1[i].returnVariable(gdjs.BattleCode.GDCardHolderObjects1[i].getVariables().get("InitialScale")).setNumber((gdjs.BattleCode.GDCardHolderObjects1[i].getBehavior("Scale").getScale()));
}
for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].returnVariable(gdjs.BattleCode.GDCardsObjects1[i].getVariables().get("InitialScale")).setNumber((gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Scale").getScale()));
}
for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects1[i].returnVariable(gdjs.BattleCode.GDNextCardObjects1[i].getVariables().get("InitialScale")).setNumber((gdjs.BattleCode.GDNextCardObjects1[i].getBehavior("Scale").getScale()));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardHolderObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderObjects1[i].setY(gdjs.BattleCode.GDCardHolderObjects1[i].getY() + ((gdjs.BattleCode.GDCardHolderObjects1[i].getHeight())));
}
for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].setY(gdjs.BattleCode.GDCardsObjects1[i].getY() + ((( gdjs.BattleCode.GDCardHolderObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDCardHolderObjects1[0].getHeight())));
}
for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects1[i].setY(gdjs.BattleCode.GDNextCardObjects1[i].getY() + ((( gdjs.BattleCode.GDCardHolderObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDCardHolderObjects1[0].getHeight())));
}
}

{ //Subevents
gdjs.BattleCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDOpenEmojiIconObjects1Objects = Hashtable.newFrom({"OpenEmojiIcon": gdjs.BattleCode.GDOpenEmojiIconObjects1});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesIconObjects1Objects = Hashtable.newFrom({"EmotesIcon": gdjs.BattleCode.GDEmotesIconObjects1});
gdjs.BattleCode.userFunc0x1981be8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
rollbackManager.sendInput(["EMOTE", rollbackManager.playerId, objects[0].getAnimationName()]);
};
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesIconObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesDescObjects1ObjectsGDgdjs_9546BattleCode_9546GDCardHolderBlankObjects1ObjectsGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects = Hashtable.newFrom({"EmotesWord": gdjs.BattleCode.GDEmotesWordObjects1, "EmotesIcon": gdjs.BattleCode.GDEmotesIconObjects1, "EmotesDesc": gdjs.BattleCode.GDEmotesDescObjects1, "CardHolderBlank": gdjs.BattleCode.GDCardHolderBlankObjects1, "CloseEmojiIcon": gdjs.BattleCode.GDCloseEmojiIconObjects1});
gdjs.BattleCode.eventsList22 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.BattleCode.GDEmotesIconObjects1, gdjs.BattleCode.GDEmotesIconObjects2);


const objects = gdjs.BattleCode.GDEmotesIconObjects2;
gdjs.BattleCode.userFunc0x1981be8(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("CardHolderBlank"), gdjs.BattleCode.GDCardHolderBlankObjects1);
gdjs.copyArray(runtimeScene.getObjects("CloseEmojiIcon"), gdjs.BattleCode.GDCloseEmojiIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmotesDesc"), gdjs.BattleCode.GDEmotesDescObjects1);
/* Reuse gdjs.BattleCode.GDEmotesIconObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EmotesWord"), gdjs.BattleCode.GDEmotesWordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesIconObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesDescObjects1ObjectsGDgdjs_9546BattleCode_9546GDCardHolderBlankObjects1ObjectsGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardHolderBlankObjects1 */
/* Reuse gdjs.BattleCode.GDCloseEmojiIconObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesDescObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesIconObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesWordObjects1 */
gdjs.copyArray(runtimeScene.getObjects("OpenEmojiIcon"), gdjs.BattleCode.GDOpenEmojiIconObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDEmotesWordObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesWordObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesIconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesDescObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesDescObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCardHolderBlankObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderBlankObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCloseEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCloseEmojiIconObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDOpenEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDOpenEmojiIconObjects1[i].hide(false);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1Objects = Hashtable.newFrom({"EmotesWord": gdjs.BattleCode.GDEmotesWordObjects1});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1Objects = Hashtable.newFrom({"EmotesWord": gdjs.BattleCode.GDEmotesWordObjects1});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesDescObjects1Objects = Hashtable.newFrom({"EmotesDesc": gdjs.BattleCode.GDEmotesDescObjects1});
gdjs.BattleCode.userFunc0x156fb70 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
rollbackManager.sendInput(["EMOTE", rollbackManager.playerId, objects[0].getAnimationName()]);
};
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesIconObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesDescObjects1ObjectsGDgdjs_9546BattleCode_9546GDCardHolderBlankObjects1ObjectsGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects = Hashtable.newFrom({"EmotesWord": gdjs.BattleCode.GDEmotesWordObjects1, "EmotesIcon": gdjs.BattleCode.GDEmotesIconObjects1, "EmotesDesc": gdjs.BattleCode.GDEmotesDescObjects1, "CardHolderBlank": gdjs.BattleCode.GDCardHolderBlankObjects1, "CloseEmojiIcon": gdjs.BattleCode.GDCloseEmojiIconObjects1});
gdjs.BattleCode.eventsList23 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.BattleCode.GDEmotesDescObjects1, gdjs.BattleCode.GDEmotesDescObjects2);


const objects = gdjs.BattleCode.GDEmotesDescObjects2;
gdjs.BattleCode.userFunc0x156fb70(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("CardHolderBlank"), gdjs.BattleCode.GDCardHolderBlankObjects1);
gdjs.copyArray(runtimeScene.getObjects("CloseEmojiIcon"), gdjs.BattleCode.GDCloseEmojiIconObjects1);
/* Reuse gdjs.BattleCode.GDEmotesDescObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EmotesIcon"), gdjs.BattleCode.GDEmotesIconObjects1);
/* Reuse gdjs.BattleCode.GDEmotesWordObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesIconObjects1ObjectsGDgdjs_9546BattleCode_9546GDEmotesDescObjects1ObjectsGDgdjs_9546BattleCode_9546GDCardHolderBlankObjects1ObjectsGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardHolderBlankObjects1 */
/* Reuse gdjs.BattleCode.GDCloseEmojiIconObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesDescObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesIconObjects1 */
/* Reuse gdjs.BattleCode.GDEmotesWordObjects1 */
gdjs.copyArray(runtimeScene.getObjects("OpenEmojiIcon"), gdjs.BattleCode.GDOpenEmojiIconObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDEmotesWordObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesWordObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesIconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesDescObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesDescObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCardHolderBlankObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderBlankObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCloseEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCloseEmojiIconObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDOpenEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDOpenEmojiIconObjects1[i].hide(false);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects = Hashtable.newFrom({"CloseEmojiIcon": gdjs.BattleCode.GDCloseEmojiIconObjects1});
gdjs.BattleCode.mapOfEmptyGDUnitsObjectsEmptyGDBuildingsObjectsEmptyGDSlimeParticlesObjectsEmptyGDElixirExplodeObjects = Hashtable.newFrom({"Units": [], "Buildings": [], "SlimeParticles": [], "ElixirExplode": []});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDDragBoxObjects2Objects = Hashtable.newFrom({"DragBox": gdjs.BattleCode.GDDragBoxObjects2});
gdjs.BattleCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NoDropArea"), gdjs.BattleCode.GDNoDropAreaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDNoDropAreaObjects2.length;i<l;++i) {
    if ( !(gdjs.BattleCode.GDNoDropAreaObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDNoDropAreaObjects2[k] = gdjs.BattleCode.GDNoDropAreaObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDNoDropAreaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleCode.GDDragBoxObjects1, gdjs.BattleCode.GDDragBoxObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDDragBoxObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDDragBoxObjects2[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BattleCode.GDDragBoxObjects1, gdjs.BattleCode.GDDragBoxObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDDragBoxObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDDragBoxObjects2[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BattleCode.GDDragBoxObjects1, gdjs.BattleCode.GDDragBoxObjects2);

{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDDragBoxObjects2Objects, 37, 30, 3, 6, null);
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber((( gdjs.BattleCode.GDDragBoxObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDDragBoxObjects2[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber((( gdjs.BattleCode.GDDragBoxObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDDragBoxObjects2[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MobDropDesc"), gdjs.BattleCode.GDMobDropDescObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDMobDropDescObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMobDropDescObjects1[i].hide(false);
}
}
}

}


};gdjs.BattleCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DragBox"), gdjs.BattleCode.GDDragBoxObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "NoDropZone");
}
{for(var i = 0, len = gdjs.BattleCode.GDDragBoxObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDDragBoxObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.BattleCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleCode.GDCardsObjects1, gdjs.BattleCode.GDCardsObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardsObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].hide(false);
}
}
}

}


};gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirDropObjects2Objects = Hashtable.newFrom({"ElixirDrop": gdjs.BattleCode.GDElixirDropObjects2});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirMinusObjects2Objects = Hashtable.newFrom({"ElixirMinus": gdjs.BattleCode.GDElixirMinusObjects2});
gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirDropObjects2Objects = Hashtable.newFrom({"ElixirDrop": gdjs.BattleCode.GDElixirDropObjects2});
gdjs.BattleCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.BattleCode.GDElixirDropObjects2 */
gdjs.BattleCode.GDElixirMinusObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirMinusObjects2Objects, 0, 0, "Layer");
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirMinusObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirMinusObjects2[i].setCenterPositionInScene((( gdjs.BattleCode.GDElixirDropObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDElixirDropObjects2[0].getCenterXInScene()),(( gdjs.BattleCode.GDElixirDropObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDElixirDropObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirMinusObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirMinusObjects2[i].getBehavior("Sticker").Stick(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirDropObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirMinusObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirMinusObjects2[i].getBehavior("Tween").addObjectOpacityTween2("a", 10, "linear", 0.4, false);
}
}
}

}


};gdjs.BattleCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.BattleCode.GDElixirDropObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDElixirDropObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber(), "Layer");
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirDropObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirDropObjects2[i].getBehavior("Resizable").setSize(44, 52);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirDropObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirDropObjects2[i].getBehavior("Tween").addObjectOpacityTween2("a", 10, "linear", 0.4, false);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDElixirDropObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDElixirDropObjects2[i].getBehavior("Tween").addObjectPositionYTween2("b", (gdjs.BattleCode.GDElixirDropObjects2[i].getPointY("")) - 50, "linear", 0.4, true);
}
}

{ //Subevents
gdjs.BattleCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.userFunc0x9a7ba0 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const {x,y} = game.get2DMouse();
rollbackManager.sendInput(["CREATE", rollbackManager.playerId,x,y, objects[0].getAnimationName()]);
};
gdjs.BattleCode.asyncCallback30334748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("NextCard"), gdjs.BattleCode.GDNextCardObjects4);

{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects4[i].setZOrder((( gdjs.BattleCode.GDNextCardObjects4.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects4[0].getZOrder()));
}
}
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30334748, gdjs.BattleCode.asyncCallback30334748);
gdjs.BattleCode.eventsList29 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDCardsObjects3) asyncObjectsList.addObject("Cards", obj);
/* Don't save NextCard as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.18333), (runtimeScene) => (gdjs.BattleCode.asyncCallback30334748(runtimeScene, asyncObjectsList)), 30334748, asyncObjectsList);
}
}

}


};gdjs.BattleCode.asyncCallback30410452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects3[i].getBehavior("Tween").addObjectScaleTween3("s", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects3[i].getVariables().getFromIndex(1))), "linear", 0.1, false, true);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects3[i].getBehavior("Tween").addObjectPositionTween2("xy", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects3[i].getVariables().getFromIndex(2))), (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects3[i].getVariables().getFromIndex(0))), "bouncePast", 0.5, false);
}
}

{ //Subevents
gdjs.BattleCode.eventsList29(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30410452, gdjs.BattleCode.asyncCallback30410452);
gdjs.BattleCode.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDCardsObjects2) asyncObjectsList.addObject("Cards", obj);
for (const obj of gdjs.BattleCode.GDNextCardObjects2) asyncObjectsList.addObject("NextCard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.18333), (runtimeScene) => (gdjs.BattleCode.asyncCallback30410452(runtimeScene, asyncObjectsList)), 30410452, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList31 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BattleCode.GDNextCardObjects2, gdjs.BattleCode.GDNextCardObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDNextCardObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDNextCardObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.mod((gdjs.BattleCode.GDNextCardObjects3[i].getBehavior("Animation").getAnimationIndex()) + 1, 1 + 1));
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BattleCode.GDCardsObjects1, gdjs.BattleCode.GDCardsObjects3);


const objects = gdjs.BattleCode.GDCardsObjects3;
gdjs.BattleCode.userFunc0x9a7ba0(runtimeScene, objects);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.BattleCode.GDCardsObjects1, gdjs.BattleCode.GDCardsObjects2);

gdjs.copyArray(runtimeScene.getObjects("NextCard"), gdjs.BattleCode.GDNextCardObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].setZOrder((( gdjs.BattleCode.GDNextCardObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects2[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].getBehavior("Scale").setScale((( gdjs.BattleCode.GDNextCardObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects2[0].getBehavior("Scale").getScale()));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].setPosition((( gdjs.BattleCode.GDNextCardObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects2[0].getPointX("")),(( gdjs.BattleCode.GDNextCardObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects2[i].getBehavior("Animation").setAnimationIndex((( gdjs.BattleCode.GDNextCardObjects2.length === 0 ) ? 0 :gdjs.BattleCode.GDNextCardObjects2[0].getBehavior("Animation").getAnimationIndex()));
}
}

{ //Subevents
gdjs.BattleCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber();
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardsObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Scale").setScale((gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(1))));
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Tween").addObjectPositionTween2("xy", (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(2))), (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(0))), "linear", 0.14, false);
}
}
}

}


};gdjs.BattleCode.userFunc0x9a6360 = function GDJSInlineCode(runtimeScene) {
"use strict";
if(!rollbackManager.isPaused()) {
    window.command = rollbackManager.getNextCommand();
    runtimeScene.getVariables().get('Command').fromJSObject(command);
} else {
    runtimeScene.getVariables().get('Command').fromJSObject({type: "pause"});
}

// simulate lag
setTimeout((messages)=>{
    messages.forEach(msg=>bc.postMessage(msg));
}, 0, rollbackManager.broadcastMessages)
// rollbackManager.broadcastMessages.forEach(msg=>bc.postMessage(msg));
rollbackManager.broadcastMessages = [];
};
gdjs.BattleCode.userFunc0x9a55d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
game.advance(command.inputs);
};
gdjs.BattleCode.userFunc0x9c40a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const gridHeight = game.gridHeight;
const gridWidth = game.gridWidth;
let iterations = 0;

const hasMoved = new Set();

function extractEntities(grid) {
  const redTeam = [];
  const blueTeam = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const cell = grid[y][x];

      if (cell?.team == 1) {
        redTeam.push({ x, y });
      } else if (cell?.team == 0) {
        blueTeam.push({ x, y });
      }
    }
  }

  return {
    redTeam,
    blueTeam
  };
}

// Define once at top‐level
const moveOptions = [
  { dx: +1, dy: -1, cond: (t,x,y) => t.y<y && t.x>x, anim: 'ForwardRight', flip: false }, // diagonal up right
  { dx: -1, dy: -1, cond: (t,x,y) => t.y<y && t.x<x, anim: 'ForwardRight', flip: true  }, // diagonal up left
  { dx: +1, dy: +1, cond: (t,x,y) => t.y>y && t.x>x, anim: 'BackRight',    flip: false }, // diagonal down right
  { dx: -1, dy: +1, cond: (t,x,y) => t.y>y && t.x<x, anim: 'BackRight',    flip: true  }, // diagonal down left
  { dx:  0, dy: +1, cond: (t,x,y) => t.y>y,          anim: 'Back',         flip: false }, // down
  { dx: +1, dy:  0, cond: (t,x,y) => t.x>x,          anim: 'Right',        flip: false }, // right
  { dx: -1, dy:  0, cond: (t,x,y) => t.x<x,          anim: 'Right',        flip: true  }, // left
  { dx:  0, dy: -1, cond: (t,x,y) => t.y<y,          anim: 'Forward',      flip: false }, // up
];

function tryAttackUnit(x, y, game, hasMoved) {
  for (const {dx, dy, cond, anim, flip} of moveOptions) {
    const nx = x + dx, ny = y + dy;
    const target = {x: nx, y: ny };

    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      game.grid[ny][nx] !== 0 &&
      game.grid[ny][nx] !== 2 &&
      game.grid[ny][nx].team !== game.grid[y][x].team &&
      cond(target, x, y)
    ) {
      const unit = game.grid[y][x];

      unit.attack(anim + "Attack", flip);
      // // animate
      // unit.obj.setAnimationName(anim + "Attack");
      // unit.obj.flipX(flip);

      // slow things down if its too fast
      unit.wait += unit.idleTime;

      // reduce health
      if(game.grid[ny][nx].health >= 0) {
        game.grid[ny][nx].health -= 50;
        game.grid[ny][nx].hurt();
        // if(game.grid[ny][nx].type == 'unit') {
        //   game.grid[ny][nx].ui.setSuffix(Math.floor(game.grid[ny][nx].health/10)*10);
        //   game.grid[ny][nx].obj.setTinted();
        // } else if(game.grid[ny][nx].type == 'building') {
        //   game.grid[ny][nx].ui.setHealth(game.grid[ny][nx].health);
        // }
      } else {
        if(
          game.grid[ny][nx].type == 'building' && 
          game.grid[ny][nx].positionId=='TopCenter' || game.grid[ny][nx].positionId=='BottomCenter'
        ) {
          game.gameOver(unit.team);
        } else {
          game.grid[ny][nx].remove(nx,ny);
        }
          
        // if(game.grid[ny][nx].type == 'unit') {
        //   // cost performance
        //   const slime = runtimeScene.createObject('Slime');
        //   // slime.setLayer('Ground');
        //   slime.setLayer('Layer');
        //   slime.setAnimationIndex(Math.floor(game.seedRandom(game.seed)*2));
        //   slime.setScale(0.7)
        //   slime.setCenterPositionInScene(nx*Game.scale,ny*Game.scale);

        //   game.grid[ny][nx].obj.remove();
        //   game.grid[ny][nx].ui.remove();
        // } else if(game.grid[ny][nx].type == 'building') {
        //   game.grid[ny][nx].ui.remove();
        //   game.destinationsA = game.destinationsA.filter(obj => !(obj.x === nx && obj.y === ny));
        //   game.destinationsB = game.destinationsB.filter(obj => !(obj.x === nx && obj.y === ny));
        // }

        game.grid[ny][nx] = 0; // Set to empty
      }

      // track
      hasMoved.add(`${x},${y}`);
      return true;
    }
  }

  return false;
}

// check if building can't move/cornered
function isUnitCornered(x, y, game) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1],[1, 1], [-1, -1], [-1, 1], [1, -1]];

  for (const d of directions) {
    const nx = x + d[0], ny = y + d[1];
    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      game.grid[ny][nx] === 0
    ) {
      return false;
    }
  }

  return true;
}

// The single mover
function tryMoveUnit(x, y, target, game, hasMoved) {
  for (const {dx, dy, cond, anim, flip} of moveOptions) {
    const nx = x + dx, ny = y + dy;
    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      cond(target, x, y) &&
      game.grid[ny][nx] === 0
    ) {
      let unit = game.grid[y][x];

      // slow things down if its too fast
      unit.wait += unit.idleTime;
      
      unit.move(nx, ny, { anim, flip });
      // // reposition
      // unit.obj.setPosition(nx * Game.scale, ny * Game.scale);
      // unit.ui.setPosition(nx * Game.scale, ny * Game.scale);

      // // animate
      // unit.obj.setAnimationName(anim);
      // unit.obj.flipX(flip);

      // update grid
      game.grid[ny][nx] = unit;
      game.grid[y][x] = 0;

      // track
      // hasMoved.add(`${x},${y}`);
      hasMoved.add(`${nx},${ny}`);
      return true;
    }
  }
  
  return false;
}

// Gather all units for path finding
const allUnits = extractEntities(game.grid);

// if(game.frame % 10 == 0)
  game.computeCheckpoints(
    allUnits.redTeam,
    allUnits.blueTeam
  );

function moveAlong(unit, path) {
  tryMoveUnit(unit.x, unit.y, path, game, hasMoved);
}


// bottom top
for (let y = gridHeight - 1; y >= 0; y--) {
    // Randomize left-to-right or right-to-left to avoid bias
    const leftToRight = game.seedRandom(game.seed) > 0.5;
    const startX = leftToRight ? 0 : gridWidth - 1;
    const endX = leftToRight ? gridWidth : -1;
    const step = leftToRight ? 1 : -1;

    for (let x = startX; x !== endX; x += step) {
        iterations++;

        // if(game.grid[y][x] === 2) console.log(y,x)
        if (game.grid[y][x] !== 0 && game.grid[y][x] !== 2 && !hasMoved.has(`${x},${y}`) && game.grid[y][x].type == 'unit') { // Any sand particle
            
            // wait 
            if(game.grid[y][x].wait > 0) {
              game.grid[y][x].wait--;
              continue;
            }

            // attack nearby units
            if(tryAttackUnit(x, y, game, hasMoved)) {
              continue;
            }

            // if unit can't move dont process path finding
            if(isUnitCornered(x, y, game)) {
              continue;
            }

            // go to main objective
            const target = (game.grid[y][x].team == 1) ? game.checkpointForTeamB[y][x] : game.checkpointForTeamA[y][x];

            // try three times with different x
            if(tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx+1, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx-1, y: y+target.dy }, game, hasMoved)) continue;
            
            if(game.grid[y][x].team == 1 && tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy+1 }, game, hasMoved)) continue;
            if(game.grid[y][x].team == 0 && tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy-1 }, game, hasMoved)) continue;

            if(tryMoveUnit(x, y, {x: x+target.dx+2, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx-2, y: y+target.dy }, game, hasMoved)) continue;
        }
    }
} 
};
gdjs.BattleCode.userFunc0x9c4128 = function GDJSInlineCode(runtimeScene) {
"use strict";
const createCommand = runtimeScene.getVariables().get('CreateCommand').toJSObject();

createCommand.forEach(mouseState => {
    // const mouseState = game.mouseState[0];
    const flipped = (mouseState.player == 1);

    const grid = game.grid;
    const gridHeight = game.gridHeight;
    const gridWidth = game.gridWidth;

    const x = Math.floor(mouseState.x/Game.scale);
    const flippedY = game.gridHeight - Math.floor(mouseState.y/Game.scale);
    const y = flipped ? flippedY : Math.floor(mouseState.y/Game.scale);

    function spawnUnits(x, y, count) {
        const maxRadius = 10; // max distance to search
        const offsets = [];

        // Generate all offsets within maxRadius
        for (let dy = -maxRadius; dy <= maxRadius; dy++) {
            for (let dx = -maxRadius; dx <= maxRadius; dx++) {
                const distanceSq = dx * dx + dy * dy;
                offsets.push({ dx, dy, distanceSq });
            }
        }

        // Sort offsets from closest to farthest (center-out)
        offsets.sort((a, b) => a.distanceSq - b.distanceSq);

        let created = 0;
        for (const { dx, dy } of offsets) {
            const nx = x + dx;
            const ny = y + dy;

            if (game.createUnit(nx,ny, mouseState.wait, mouseState.player)) {
                created++;
                if (created >= count) return;
            }
        }

        console.warn(`Only created ${created} of ${count} units near (${x}, ${y})`);
    }

    if(mouseState.spell == "MultipleSkeletons") {
        spawnUnits(x, y, 9);
    } else {
        spawnUnits(x, y, 1);
    }

    // display enemy spawn timer icon
    if(mouseState.player != rollbackManager.playerId) {
        const tim=runtimeScene.createObject('TimerIcon');
        tim.setAnimationIndex(1);
        tim.setPosition(x*Game.scale,flippedY*Game.scale);
        tim.setLayer("Layer");
    } else {
        const tim=runtimeScene.createObject('TimerIcon');
        tim.setAnimationIndex(0);
        tim.setPosition(x*Game.scale,mouseState.y);
        tim.setLayer("Layer");
    }

})


};
gdjs.BattleCode.eventsList34 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x9c4128(runtimeScene);

}


};gdjs.BattleCode.userFunc0x9a56f8 = function GDJSInlineCode(runtimeScene) {
"use strict";
game.save();
};
gdjs.BattleCode.eventsList35 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x9a55d0(runtimeScene);

}


{



}


{


gdjs.BattleCode.userFunc0x9c40a8(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(24)) > 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList34(runtimeScene);} //End of subevents
}

}


{


gdjs.BattleCode.userFunc0x9a56f8(runtimeScene);

}


};gdjs.BattleCode.userFunc0x9a5b38 = function GDJSInlineCode(runtimeScene) {
"use strict";
game.loadState(command.frame);

// for (let f = command.frame; f < rollbackManager.localFrame; f++) {
//     game.advance(rollbackManager.inputHistory[f]);
// }

runtimeScene.getVariables().get('F').setNumber(command.frame);
runtimeScene.getVariables().get('LatestFrame').setNumber(rollbackManager.localFrame);

};
gdjs.BattleCode.userFunc0x1a24188 = function GDJSInlineCode(runtimeScene) {
"use strict";
const f = runtimeScene.getVariables().get('F').getAsNumber();

game.advance(rollbackManager.inputHistory[f]);
};
gdjs.BattleCode.userFunc0x99bfa0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const gridHeight = game.gridHeight;
const gridWidth = game.gridWidth;
let iterations = 0;

const hasMoved = new Set();

function extractEntities(grid) {
  const redTeam = [];
  const blueTeam = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const cell = grid[y][x];

      if (cell?.team == 1) {
        redTeam.push({ x, y });
      } else if (cell?.team == 0) {
        blueTeam.push({ x, y });
      }
    }
  }

  return {
    redTeam,
    blueTeam
  };
}

// Define once at top‐level
const moveOptions = [
  { dx: +1, dy: -1, cond: (t,x,y) => t.y<y && t.x>x, anim: 'ForwardRight', flip: false }, // diagonal up right
  { dx: -1, dy: -1, cond: (t,x,y) => t.y<y && t.x<x, anim: 'ForwardRight', flip: true  }, // diagonal up left
  { dx: +1, dy: +1, cond: (t,x,y) => t.y>y && t.x>x, anim: 'BackRight',    flip: false }, // diagonal down right
  { dx: -1, dy: +1, cond: (t,x,y) => t.y>y && t.x<x, anim: 'BackRight',    flip: true  }, // diagonal down left
  { dx:  0, dy: +1, cond: (t,x,y) => t.y>y,          anim: 'Back',         flip: false }, // down
  { dx: +1, dy:  0, cond: (t,x,y) => t.x>x,          anim: 'Right',        flip: false }, // right
  { dx: -1, dy:  0, cond: (t,x,y) => t.x<x,          anim: 'Right',        flip: true  }, // left
  { dx:  0, dy: -1, cond: (t,x,y) => t.y<y,          anim: 'Forward',      flip: false }, // up
];

function tryAttackUnit(x, y, game, hasMoved) {
  for (const {dx, dy, cond, anim, flip} of moveOptions) {
    const nx = x + dx, ny = y + dy;
    const target = {x: nx, y: ny };

    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      game.grid[ny][nx] !== 0 &&
      game.grid[ny][nx] !== 2 &&
      game.grid[ny][nx].team !== game.grid[y][x].team &&
      cond(target, x, y)
    ) {
      const unit = game.grid[y][x];

      unit.attack(anim + "Attack", flip);
      // // animate
      // unit.obj.setAnimationName(anim + "Attack");
      // unit.obj.flipX(flip);

      // slow things down if its too fast
      unit.wait += unit.idleTime;

      // reduce health
      if(game.grid[ny][nx].health >= 0) {
        game.grid[ny][nx].health -= 50;
        game.grid[ny][nx].hurt();
        // if(game.grid[ny][nx].type == 'unit') {
        //   game.grid[ny][nx].ui.setSuffix(Math.floor(game.grid[ny][nx].health/10)*10);
        //   game.grid[ny][nx].obj.setTinted();
        // } else if(game.grid[ny][nx].type == 'building') {
        //   game.grid[ny][nx].ui.setHealth(game.grid[ny][nx].health);
        // }
      } else {
        if(
          game.grid[ny][nx].type == 'building' && 
          game.grid[ny][nx].positionId=='TopCenter' || game.grid[ny][nx].positionId=='BottomCenter'
        ) {
          game.gameOver(unit.team);
        } else {
          game.grid[ny][nx].remove(nx,ny);
        }
          
        // if(game.grid[ny][nx].type == 'unit') {
        //   // cost performance
        //   const slime = runtimeScene.createObject('Slime');
        //   // slime.setLayer('Ground');
        //   slime.setLayer('Layer');
        //   slime.setAnimationIndex(Math.floor(game.seedRandom(game.seed)*2));
        //   slime.setScale(0.7)
        //   slime.setCenterPositionInScene(nx*Game.scale,ny*Game.scale);

        //   game.grid[ny][nx].obj.remove();
        //   game.grid[ny][nx].ui.remove();
        // } else if(game.grid[ny][nx].type == 'building') {
        //   game.grid[ny][nx].ui.remove();
        //   game.destinationsA = game.destinationsA.filter(obj => !(obj.x === nx && obj.y === ny));
        //   game.destinationsB = game.destinationsB.filter(obj => !(obj.x === nx && obj.y === ny));
        // }

        game.grid[ny][nx] = 0; // Set to empty
      }

      // track
      hasMoved.add(`${x},${y}`);
      return true;
    }
  }

  return false;
}

// check if building can't move/cornered
function isUnitCornered(x, y, game) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1],[1, 1], [-1, -1], [-1, 1], [1, -1]];

  for (const d of directions) {
    const nx = x + d[0], ny = y + d[1];
    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      game.grid[ny][nx] === 0
    ) {
      return false;
    }
  }

  return true;
}

// The single mover
function tryMoveUnit(x, y, target, game, hasMoved) {
  for (const {dx, dy, cond, anim, flip} of moveOptions) {
    const nx = x + dx, ny = y + dy;
    if (
      ny >= 0 && ny < game.grid.length &&
      nx >= 0 && nx < game.grid[0].length &&
      cond(target, x, y) &&
      game.grid[ny][nx] === 0
    ) {
      let unit = game.grid[y][x];

      // slow things down if its too fast
      unit.wait += unit.idleTime;
      
      unit.move(nx, ny, { anim, flip });
      // // reposition
      // unit.obj.setPosition(nx * Game.scale, ny * Game.scale);
      // unit.ui.setPosition(nx * Game.scale, ny * Game.scale);

      // // animate
      // unit.obj.setAnimationName(anim);
      // unit.obj.flipX(flip);

      // update grid
      game.grid[ny][nx] = unit;
      game.grid[y][x] = 0;

      // track
      // hasMoved.add(`${x},${y}`);
      hasMoved.add(`${nx},${ny}`);
      return true;
    }
  }
  
  return false;
}

// Gather all units for path finding
const allUnits = extractEntities(game.grid);

// if(game.frame % 10 == 0)
  game.computeCheckpoints(
    allUnits.redTeam,
    allUnits.blueTeam
  );

function moveAlong(unit, path) {
  tryMoveUnit(unit.x, unit.y, path, game, hasMoved);
}


// bottom top
for (let y = gridHeight - 1; y >= 0; y--) {
    // Randomize left-to-right or right-to-left to avoid bias
    const leftToRight = game.seedRandom(game.seed) > 0.5;
    const startX = leftToRight ? 0 : gridWidth - 1;
    const endX = leftToRight ? gridWidth : -1;
    const step = leftToRight ? 1 : -1;

    for (let x = startX; x !== endX; x += step) {
        iterations++;

        // if(game.grid[y][x] === 2) console.log(y,x)
        if (game.grid[y][x] !== 0 && game.grid[y][x] !== 2 && !hasMoved.has(`${x},${y}`) && game.grid[y][x].type == 'unit') { // Any sand particle
            
            // wait 
            if(game.grid[y][x].wait > 0) {
              game.grid[y][x].wait--;
              continue;
            }

            // attack nearby units
            if(tryAttackUnit(x, y, game, hasMoved)) {
              continue;
            }

            // if unit can't move dont process path finding
            if(isUnitCornered(x, y, game)) {
              continue;
            }

            // go to main objective
            const target = (game.grid[y][x].team == 1) ? game.checkpointForTeamB[y][x] : game.checkpointForTeamA[y][x];

            // try three times with different x
            if(tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx+1, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx-1, y: y+target.dy }, game, hasMoved)) continue;
            
            if(game.grid[y][x].team == 1 && tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy+1 }, game, hasMoved)) continue;
            if(game.grid[y][x].team == 0 && tryMoveUnit(x, y, {x: x+target.dx, y: y+target.dy-1 }, game, hasMoved)) continue;

            if(tryMoveUnit(x, y, {x: x+target.dx+2, y: y+target.dy }, game, hasMoved)) continue;
            if(tryMoveUnit(x, y, {x: x+target.dx-2, y: y+target.dy }, game, hasMoved)) continue;
        }
    }
} 
};
gdjs.BattleCode.userFunc0x1a46978 = function GDJSInlineCode(runtimeScene) {
"use strict";
const createCommand = runtimeScene.getVariables().get('CreateCommand').toJSObject();

createCommand.forEach(mouseState => {
    // const mouseState = game.mouseState[0];
    const flipped = (mouseState.player == 1);

    const grid = game.grid;
    const gridHeight = game.gridHeight;
    const gridWidth = game.gridWidth;

    const x = Math.floor(mouseState.x/Game.scale);
    const flippedY = game.gridHeight - Math.floor(mouseState.y/Game.scale);
    const y = flipped ? flippedY : Math.floor(mouseState.y/Game.scale);

    function spawnUnits(x, y, count) {
        const maxRadius = 10; // max distance to search
        const offsets = [];

        // Generate all offsets within maxRadius
        for (let dy = -maxRadius; dy <= maxRadius; dy++) {
            for (let dx = -maxRadius; dx <= maxRadius; dx++) {
                const distanceSq = dx * dx + dy * dy;
                offsets.push({ dx, dy, distanceSq });
            }
        }

        // Sort offsets from closest to farthest (center-out)
        offsets.sort((a, b) => a.distanceSq - b.distanceSq);

        let created = 0;
        for (const { dx, dy } of offsets) {
            const nx = x + dx;
            const ny = y + dy;

            if (game.createUnit(nx,ny, mouseState.wait, mouseState.player)) {
                created++;
                if (created >= count) return;
            }
        }

        console.warn(`Only created ${created} of ${count} units near (${x}, ${y})`);
    }

    if(mouseState.spell == "MultipleSkeletons") {
        spawnUnits(x, y, 9);
    } else {
        spawnUnits(x, y, 1);
    }

    // display enemy spawn timer icon
    if(mouseState.player != rollbackManager.playerId) {
        const tim=runtimeScene.createObject('TimerIcon');
        tim.setAnimationIndex(1);
        tim.setPosition(x*Game.scale,flippedY*Game.scale);
        tim.setLayer("Layer");
    } else {
        const tim=runtimeScene.createObject('TimerIcon');
        tim.setAnimationIndex(0);
        tim.setPosition(x*Game.scale,mouseState.y);
        tim.setLayer("Layer");
    }

})


};
gdjs.BattleCode.eventsList36 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x1a46978(runtimeScene);

}


};gdjs.BattleCode.userFunc0x18ae308 = function GDJSInlineCode(runtimeScene) {
"use strict";
game.save();
};
gdjs.BattleCode.eventsList37 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x1a24188(runtimeScene);

}


{



}


{


gdjs.BattleCode.userFunc0x99bfa0(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(24)) > 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


gdjs.BattleCode.userFunc0x18ae308(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(19).add(1);
}
}

}


};gdjs.BattleCode.eventsList38 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x9a5b38(runtimeScene);

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.BattleCode.eventsList37(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.BattleCode.userFunc0x1a23620 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
objects[0].setText(game.computedChecksum + " PAUSED");
};
gdjs.BattleCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BattleCode.GDNewText2Objects5);

const objects = gdjs.BattleCode.GDNewText2Objects5;
gdjs.BattleCode.userFunc0x1a23620(runtimeScene, objects);

}


};gdjs.BattleCode.userFunc0x199b7e0 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
objects[0].setText(`
    ${game.computedChecksum}
    playerId: ${rollbackManager.playerId}
`);
};
gdjs.BattleCode.eventsList40 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BattleCode.GDNewText2Objects4);

const objects = gdjs.BattleCode.GDNewText2Objects4;
gdjs.BattleCode.userFunc0x199b7e0(runtimeScene, objects);

}


};gdjs.BattleCode.eventsList41 = function(runtimeScene) {

{


gdjs.BattleCode.userFunc0x9a6360(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("type").getAsString() == "normal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("type").getAsString() == "rollback");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList38(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("type").getAsString() == "pause");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList39(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("type").getAsString() != "pause");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList40(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.userFunc0x199b238 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
game.render();

objects[0].setText(game.getTimeLeft());


// update scores
const scoreRed = runtimeScene.getObjects('ScoreRed')[0];
scoreRed.setText(game.variables.redScore);
scoreRed.setCenterXInScene(725.5);

const scoreBlue = runtimeScene.getObjects('ScoreBlue')[0];
scoreBlue.setText(game.variables.blueScore);
scoreBlue.setCenterXInScene(725.5);

runtimeScene.getObjects('BlueScoreBar')[0].SetScore(game.variables.blueScore);

const latestScore = game.variables.blueScore + ":" + game.variables.redScore;

if(window.lastScores == undefined) {
    window.lastScores = {
        value: 0
    };

    window.lastScores.value = latestScore;
}

if(window.lastScores.value != latestScore) {
    window.lastScores.value = latestScore;
    runtimeScene.getVariables().get('LastScoreChanged').setBoolean(true);
} else {
    // console.log(latestScore)
    runtimeScene.getVariables().get('LastScoreChanged').setBoolean(false);
}

// update transparent thing
function getNumber(arr) {
    const map = {
        "Center,Left,Right": 0,
        "Center,Left": 1,
        "Center,Right": 2,
        "Center": 3,
        "Right": 3,
        "Left": 3,
        "": 3,
    };

    const index = arr.slice().sort().join(",");
    if (map[index] !== undefined) {  // <-- explicit check
        return map[index];
    } else {
        console.error("cannot find", index, arr);
        return 3;
    }
}

const animationIndex = getNumber(game.variables.redLife);
runtimeScene.getObjects('NoDropArea')[0].setAnimationIndex(animationIndex);

};
gdjs.BattleCode.asyncCallback30427268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.BattleCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BlueScoreBar"), gdjs.BattleCode.GDBlueScoreBarObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreBlue"), gdjs.BattleCode.GDScoreBlueObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreBlueDesc"), gdjs.BattleCode.GDScoreBlueDescObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreIcons"), gdjs.BattleCode.GDScoreIconsObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("ScoreRed"), gdjs.BattleCode.GDScoreRedObjects3);

{for(var i = 0, len = gdjs.BattleCode.GDScoreBlueObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueObjects3[i].getBehavior("Tween").addObjectOpacityTween2("o", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreRedObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreRedObjects3[i].getBehavior("Tween").addObjectOpacityTween2("o", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreIconsObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreIconsObjects3[i].getBehavior("Tween").addObjectOpacityTween2("o", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreBlueDescObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueDescObjects3[i].getBehavior("Tween").addObjectOpacityTween2("o", 0, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDBlueScoreBarObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDBlueScoreBarObjects3[i].getBehavior("Tween").addObjectOpacityTween2("o", 0, "linear", 0.5, false);
}
}
gdjs.BattleCode.localVariables.length = 0;
}
gdjs.BattleCode.idToCallbackMap.set(30427268, gdjs.BattleCode.asyncCallback30427268);
gdjs.BattleCode.eventsList43 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.BattleCode.localVariables);
for (const obj of gdjs.BattleCode.GDBlueScoreBarObjects2) asyncObjectsList.addObject("BlueScoreBar", obj);
for (const obj of gdjs.BattleCode.GDScoreBlueObjects2) asyncObjectsList.addObject("ScoreBlue", obj);
for (const obj of gdjs.BattleCode.GDScoreBlueDescObjects2) asyncObjectsList.addObject("ScoreBlueDesc", obj);
for (const obj of gdjs.BattleCode.GDScoreIconsObjects2) asyncObjectsList.addObject("ScoreIcons", obj);
for (const obj of gdjs.BattleCode.GDScoreRedObjects2) asyncObjectsList.addObject("ScoreRed", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.BattleCode.asyncCallback30427268(runtimeScene, asyncObjectsList)), 30427268, asyncObjectsList);
}
}

}


};gdjs.BattleCode.eventsList44 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("CurrentTime").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Delta").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("CurrentTime").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(3).getChild("LastTime").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("LastTime").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("CurrentTime").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Accumulator").add(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Delta").getAsNumber());
}
}

}


{



}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Accumulator").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(3).getChild("FixedTimeRate").getAsNumber());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Accumulator").sub(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("FixedTimeRate").getAsNumber());
}

{ //Subevents: 
gdjs.BattleCode.eventsList42(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Minutes"), gdjs.BattleCode.GDMinutesObjects2);

const objects = gdjs.BattleCode.GDMinutesObjects2;
gdjs.BattleCode.userFunc0x199b238(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(27).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueScoreBar"), gdjs.BattleCode.GDBlueScoreBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreBlue"), gdjs.BattleCode.GDScoreBlueObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreBlueDesc"), gdjs.BattleCode.GDScoreBlueDescObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreIcons"), gdjs.BattleCode.GDScoreIconsObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreRed"), gdjs.BattleCode.GDScoreRedObjects2);
{for(var i = 0, len = gdjs.BattleCode.GDScoreBlueObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueObjects2[i].getBehavior("Tween").addObjectOpacityTween2("o", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreRedObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreRedObjects2[i].getBehavior("Tween").addObjectOpacityTween2("o", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreIconsObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreIconsObjects2[i].getBehavior("Tween").addObjectOpacityTween2("o", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDScoreBlueDescObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDScoreBlueDescObjects2[i].getBehavior("Tween").addObjectOpacityTween2("o", 255, "linear", 0.5, false);
}
for(var i = 0, len = gdjs.BattleCode.GDBlueScoreBarObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDBlueScoreBarObjects2[i].getBehavior("Tween").addObjectOpacityTween2("o", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.BattleCode.eventsList43(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SlimeGround"), gdjs.BattleCode.GDSlimeGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("SlimeParticles"), gdjs.BattleCode.GDSlimeParticlesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDSlimeGroundObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDSlimeGroundObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDSlimeGroundObjects2[k] = gdjs.BattleCode.GDSlimeGroundObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDSlimeGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDSlimeParticlesObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDSlimeParticlesObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDSlimeParticlesObjects2[k] = gdjs.BattleCode.GDSlimeParticlesObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDSlimeParticlesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDSlimeGroundObjects2 */
/* Reuse gdjs.BattleCode.GDSlimeParticlesObjects2 */
{for(var i = 0, len = gdjs.BattleCode.GDSlimeGroundObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDSlimeGroundObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDSlimeParticlesObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDSlimeParticlesObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(26).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(26));
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.6, 1, 1, null);
}
}

}


};gdjs.BattleCode.eventsList45 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.BattleCode.eventsList44(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList46 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Guide", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Guide", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Background", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Background", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Layer", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Layer", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Layer2", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Layer2", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Hidden", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Hidden", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "Ground", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "Ground", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "NoDropZone", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "NoDropZone", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "EmoteLayer", 0) + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()), "EmoteLayer", 0);
}

{ //Subevents
gdjs.BattleCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DesiredHz").setNumber(10);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("FixedTimeRate").setNumber(1000 / runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DesiredHz").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("LastTime").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Accumulator").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("StartTime").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}

{ //Subevents
gdjs.BattleCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenEmojiIcon"), gdjs.BattleCode.GDOpenEmojiIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDOpenEmojiIconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDOpenEmojiIconObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDOpenEmojiIconObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDOpenEmojiIconObjects1[k] = gdjs.BattleCode.GDOpenEmojiIconObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDOpenEmojiIconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDOpenEmojiIconObjects1 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Battle_EmotesLayout", 0, runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber(), 0);
}
{for(var i = 0, len = gdjs.BattleCode.GDOpenEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDOpenEmojiIconObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EmotesIcon"), gdjs.BattleCode.GDEmotesIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesIconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDEmotesIconObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDEmotesIconObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDEmotesIconObjects1[k] = gdjs.BattleCode.GDEmotesIconObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDEmotesIconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EmotesDesc"), gdjs.BattleCode.GDEmotesDescObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmotesWord"), gdjs.BattleCode.GDEmotesWordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDEmotesWordObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDEmotesWordObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDEmotesWordObjects1[k] = gdjs.BattleCode.GDEmotesWordObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDEmotesWordObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesWordObjects1Objects, gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDEmotesDescObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseEmojiIcon"), gdjs.BattleCode.GDCloseEmojiIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleCode.mapOfGDgdjs_9546BattleCode_9546GDCloseEmojiIconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDCloseEmojiIconObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDCloseEmojiIconObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDCloseEmojiIconObjects1[k] = gdjs.BattleCode.GDCloseEmojiIconObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDCloseEmojiIconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CardHolderBlank"), gdjs.BattleCode.GDCardHolderBlankObjects1);
/* Reuse gdjs.BattleCode.GDCloseEmojiIconObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EmotesDesc"), gdjs.BattleCode.GDEmotesDescObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmotesIcon"), gdjs.BattleCode.GDEmotesIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmotesWord"), gdjs.BattleCode.GDEmotesWordObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpenEmojiIcon"), gdjs.BattleCode.GDOpenEmojiIconObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDEmotesWordObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesWordObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesIconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDEmotesDescObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEmotesDescObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCardHolderBlankObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardHolderBlankObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BattleCode.GDCloseEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCloseEmojiIconObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDOpenEmojiIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDOpenEmojiIconObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.BattleCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.BattleCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.BattleCode.GDNewText3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.BattleCode.mapOfEmptyGDUnitsObjectsEmptyGDBuildingsObjectsEmptyGDSlimeParticlesObjectsEmptyGDElixirExplodeObjects)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DragBox"), gdjs.BattleCode.GDDragBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("MobDropDesc"), gdjs.BattleCode.GDMobDropDescObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDDragBoxObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDDragBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleCode.GDMobDropDescObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDMobDropDescObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "NoDropZone");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.BattleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCursorObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.BattleCode.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDCardsObjects1[k] = gdjs.BattleCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDCardsObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Scale").setScale(Math.min((gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(1))), ((gdjs.BattleCode.GDCardsObjects1[i].getPointY(""))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.BattleCode.GDCardsObjects1[i].getVariables().getFromIndex(1)))));
}
}

{ //Subevents
gdjs.BattleCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.BattleCode.GDCardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDCardsObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDCardsObjects1[k] = gdjs.BattleCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.BattleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCursorObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.BattleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDCursorObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TimerIcon"), gdjs.BattleCode.GDTimerIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDTimerIconObjects1.length;i<l;++i) {
    if ( gdjs.BattleCode.GDTimerIconObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDTimerIconObjects1[k] = gdjs.BattleCode.GDTimerIconObjects1[i];
        ++k;
    }
}
gdjs.BattleCode.GDTimerIconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BattleCode.GDTimerIconObjects1 */
{for(var i = 0, len = gdjs.BattleCode.GDTimerIconObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDTimerIconObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList45(runtimeScene);} //End of subevents
}

}


};

gdjs.BattleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleCode.GDNewTextObjects1.length = 0;
gdjs.BattleCode.GDNewTextObjects2.length = 0;
gdjs.BattleCode.GDNewTextObjects3.length = 0;
gdjs.BattleCode.GDNewTextObjects4.length = 0;
gdjs.BattleCode.GDNewTextObjects5.length = 0;
gdjs.BattleCode.GDNewTextObjects6.length = 0;
gdjs.BattleCode.GDNewTextObjects7.length = 0;
gdjs.BattleCode.GDNewTextObjects8.length = 0;
gdjs.BattleCode.GDNewText2Objects1.length = 0;
gdjs.BattleCode.GDNewText2Objects2.length = 0;
gdjs.BattleCode.GDNewText2Objects3.length = 0;
gdjs.BattleCode.GDNewText2Objects4.length = 0;
gdjs.BattleCode.GDNewText2Objects5.length = 0;
gdjs.BattleCode.GDNewText2Objects6.length = 0;
gdjs.BattleCode.GDNewText2Objects7.length = 0;
gdjs.BattleCode.GDNewText2Objects8.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects1.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects2.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects3.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects4.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects5.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects6.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects7.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects8.length = 0;
gdjs.BattleCode.GDBuildingsObjects1.length = 0;
gdjs.BattleCode.GDBuildingsObjects2.length = 0;
gdjs.BattleCode.GDBuildingsObjects3.length = 0;
gdjs.BattleCode.GDBuildingsObjects4.length = 0;
gdjs.BattleCode.GDBuildingsObjects5.length = 0;
gdjs.BattleCode.GDBuildingsObjects6.length = 0;
gdjs.BattleCode.GDBuildingsObjects7.length = 0;
gdjs.BattleCode.GDBuildingsObjects8.length = 0;
gdjs.BattleCode.GDUnitsObjects1.length = 0;
gdjs.BattleCode.GDUnitsObjects2.length = 0;
gdjs.BattleCode.GDUnitsObjects3.length = 0;
gdjs.BattleCode.GDUnitsObjects4.length = 0;
gdjs.BattleCode.GDUnitsObjects5.length = 0;
gdjs.BattleCode.GDUnitsObjects6.length = 0;
gdjs.BattleCode.GDUnitsObjects7.length = 0;
gdjs.BattleCode.GDUnitsObjects8.length = 0;
gdjs.BattleCode.GDBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBackgroundObjects5.length = 0;
gdjs.BattleCode.GDBackgroundObjects6.length = 0;
gdjs.BattleCode.GDBackgroundObjects7.length = 0;
gdjs.BattleCode.GDBackgroundObjects8.length = 0;
gdjs.BattleCode.GDNewText3Objects1.length = 0;
gdjs.BattleCode.GDNewText3Objects2.length = 0;
gdjs.BattleCode.GDNewText3Objects3.length = 0;
gdjs.BattleCode.GDNewText3Objects4.length = 0;
gdjs.BattleCode.GDNewText3Objects5.length = 0;
gdjs.BattleCode.GDNewText3Objects6.length = 0;
gdjs.BattleCode.GDNewText3Objects7.length = 0;
gdjs.BattleCode.GDNewText3Objects8.length = 0;
gdjs.BattleCode.GDWallObjects1.length = 0;
gdjs.BattleCode.GDWallObjects2.length = 0;
gdjs.BattleCode.GDWallObjects3.length = 0;
gdjs.BattleCode.GDWallObjects4.length = 0;
gdjs.BattleCode.GDWallObjects5.length = 0;
gdjs.BattleCode.GDWallObjects6.length = 0;
gdjs.BattleCode.GDWallObjects7.length = 0;
gdjs.BattleCode.GDWallObjects8.length = 0;
gdjs.BattleCode.GDGuideObjects1.length = 0;
gdjs.BattleCode.GDGuideObjects2.length = 0;
gdjs.BattleCode.GDGuideObjects3.length = 0;
gdjs.BattleCode.GDGuideObjects4.length = 0;
gdjs.BattleCode.GDGuideObjects5.length = 0;
gdjs.BattleCode.GDGuideObjects6.length = 0;
gdjs.BattleCode.GDGuideObjects7.length = 0;
gdjs.BattleCode.GDGuideObjects8.length = 0;
gdjs.BattleCode.GDCharactersObjects1.length = 0;
gdjs.BattleCode.GDCharactersObjects2.length = 0;
gdjs.BattleCode.GDCharactersObjects3.length = 0;
gdjs.BattleCode.GDCharactersObjects4.length = 0;
gdjs.BattleCode.GDCharactersObjects5.length = 0;
gdjs.BattleCode.GDCharactersObjects6.length = 0;
gdjs.BattleCode.GDCharactersObjects7.length = 0;
gdjs.BattleCode.GDCharactersObjects8.length = 0;
gdjs.BattleCode.GDCursorObjects1.length = 0;
gdjs.BattleCode.GDCursorObjects2.length = 0;
gdjs.BattleCode.GDCursorObjects3.length = 0;
gdjs.BattleCode.GDCursorObjects4.length = 0;
gdjs.BattleCode.GDCursorObjects5.length = 0;
gdjs.BattleCode.GDCursorObjects6.length = 0;
gdjs.BattleCode.GDCursorObjects7.length = 0;
gdjs.BattleCode.GDCursorObjects8.length = 0;
gdjs.BattleCode.GDIconsObjects1.length = 0;
gdjs.BattleCode.GDIconsObjects2.length = 0;
gdjs.BattleCode.GDIconsObjects3.length = 0;
gdjs.BattleCode.GDIconsObjects4.length = 0;
gdjs.BattleCode.GDIconsObjects5.length = 0;
gdjs.BattleCode.GDIconsObjects6.length = 0;
gdjs.BattleCode.GDIconsObjects7.length = 0;
gdjs.BattleCode.GDIconsObjects8.length = 0;
gdjs.BattleCode.GDElixirDropObjects1.length = 0;
gdjs.BattleCode.GDElixirDropObjects2.length = 0;
gdjs.BattleCode.GDElixirDropObjects3.length = 0;
gdjs.BattleCode.GDElixirDropObjects4.length = 0;
gdjs.BattleCode.GDElixirDropObjects5.length = 0;
gdjs.BattleCode.GDElixirDropObjects6.length = 0;
gdjs.BattleCode.GDElixirDropObjects7.length = 0;
gdjs.BattleCode.GDElixirDropObjects8.length = 0;
gdjs.BattleCode.GDCardsObjects1.length = 0;
gdjs.BattleCode.GDCardsObjects2.length = 0;
gdjs.BattleCode.GDCardsObjects3.length = 0;
gdjs.BattleCode.GDCardsObjects4.length = 0;
gdjs.BattleCode.GDCardsObjects5.length = 0;
gdjs.BattleCode.GDCardsObjects6.length = 0;
gdjs.BattleCode.GDCardsObjects7.length = 0;
gdjs.BattleCode.GDCardsObjects8.length = 0;
gdjs.BattleCode.GDCardHolderObjects1.length = 0;
gdjs.BattleCode.GDCardHolderObjects2.length = 0;
gdjs.BattleCode.GDCardHolderObjects3.length = 0;
gdjs.BattleCode.GDCardHolderObjects4.length = 0;
gdjs.BattleCode.GDCardHolderObjects5.length = 0;
gdjs.BattleCode.GDCardHolderObjects6.length = 0;
gdjs.BattleCode.GDCardHolderObjects7.length = 0;
gdjs.BattleCode.GDCardHolderObjects8.length = 0;
gdjs.BattleCode.GDNextCardObjects1.length = 0;
gdjs.BattleCode.GDNextCardObjects2.length = 0;
gdjs.BattleCode.GDNextCardObjects3.length = 0;
gdjs.BattleCode.GDNextCardObjects4.length = 0;
gdjs.BattleCode.GDNextCardObjects5.length = 0;
gdjs.BattleCode.GDNextCardObjects6.length = 0;
gdjs.BattleCode.GDNextCardObjects7.length = 0;
gdjs.BattleCode.GDNextCardObjects8.length = 0;
gdjs.BattleCode.GDDragBoxObjects1.length = 0;
gdjs.BattleCode.GDDragBoxObjects2.length = 0;
gdjs.BattleCode.GDDragBoxObjects3.length = 0;
gdjs.BattleCode.GDDragBoxObjects4.length = 0;
gdjs.BattleCode.GDDragBoxObjects5.length = 0;
gdjs.BattleCode.GDDragBoxObjects6.length = 0;
gdjs.BattleCode.GDDragBoxObjects7.length = 0;
gdjs.BattleCode.GDDragBoxObjects8.length = 0;
gdjs.BattleCode.GDTimerIconObjects1.length = 0;
gdjs.BattleCode.GDTimerIconObjects2.length = 0;
gdjs.BattleCode.GDTimerIconObjects3.length = 0;
gdjs.BattleCode.GDTimerIconObjects4.length = 0;
gdjs.BattleCode.GDTimerIconObjects5.length = 0;
gdjs.BattleCode.GDTimerIconObjects6.length = 0;
gdjs.BattleCode.GDTimerIconObjects7.length = 0;
gdjs.BattleCode.GDTimerIconObjects8.length = 0;
gdjs.BattleCode.GDBuildingWallObjects1.length = 0;
gdjs.BattleCode.GDBuildingWallObjects2.length = 0;
gdjs.BattleCode.GDBuildingWallObjects3.length = 0;
gdjs.BattleCode.GDBuildingWallObjects4.length = 0;
gdjs.BattleCode.GDBuildingWallObjects5.length = 0;
gdjs.BattleCode.GDBuildingWallObjects6.length = 0;
gdjs.BattleCode.GDBuildingWallObjects7.length = 0;
gdjs.BattleCode.GDBuildingWallObjects8.length = 0;
gdjs.BattleCode.GDUIObjects1.length = 0;
gdjs.BattleCode.GDUIObjects2.length = 0;
gdjs.BattleCode.GDUIObjects3.length = 0;
gdjs.BattleCode.GDUIObjects4.length = 0;
gdjs.BattleCode.GDUIObjects5.length = 0;
gdjs.BattleCode.GDUIObjects6.length = 0;
gdjs.BattleCode.GDUIObjects7.length = 0;
gdjs.BattleCode.GDUIObjects8.length = 0;
gdjs.BattleCode.GDCheckpointsObjects1.length = 0;
gdjs.BattleCode.GDCheckpointsObjects2.length = 0;
gdjs.BattleCode.GDCheckpointsObjects3.length = 0;
gdjs.BattleCode.GDCheckpointsObjects4.length = 0;
gdjs.BattleCode.GDCheckpointsObjects5.length = 0;
gdjs.BattleCode.GDCheckpointsObjects6.length = 0;
gdjs.BattleCode.GDCheckpointsObjects7.length = 0;
gdjs.BattleCode.GDCheckpointsObjects8.length = 0;
gdjs.BattleCode.GDMinutesObjects1.length = 0;
gdjs.BattleCode.GDMinutesObjects2.length = 0;
gdjs.BattleCode.GDMinutesObjects3.length = 0;
gdjs.BattleCode.GDMinutesObjects4.length = 0;
gdjs.BattleCode.GDMinutesObjects5.length = 0;
gdjs.BattleCode.GDMinutesObjects6.length = 0;
gdjs.BattleCode.GDMinutesObjects7.length = 0;
gdjs.BattleCode.GDMinutesObjects8.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects1.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects2.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects3.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects4.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects5.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects6.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects7.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects8.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects1.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects2.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects3.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects4.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects5.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects6.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects7.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects8.length = 0;
gdjs.BattleCode.GDElixirMinusObjects1.length = 0;
gdjs.BattleCode.GDElixirMinusObjects2.length = 0;
gdjs.BattleCode.GDElixirMinusObjects3.length = 0;
gdjs.BattleCode.GDElixirMinusObjects4.length = 0;
gdjs.BattleCode.GDElixirMinusObjects5.length = 0;
gdjs.BattleCode.GDElixirMinusObjects6.length = 0;
gdjs.BattleCode.GDElixirMinusObjects7.length = 0;
gdjs.BattleCode.GDElixirMinusObjects8.length = 0;
gdjs.BattleCode.GDPlayerNameObjects1.length = 0;
gdjs.BattleCode.GDPlayerNameObjects2.length = 0;
gdjs.BattleCode.GDPlayerNameObjects3.length = 0;
gdjs.BattleCode.GDPlayerNameObjects4.length = 0;
gdjs.BattleCode.GDPlayerNameObjects5.length = 0;
gdjs.BattleCode.GDPlayerNameObjects6.length = 0;
gdjs.BattleCode.GDPlayerNameObjects7.length = 0;
gdjs.BattleCode.GDPlayerNameObjects8.length = 0;
gdjs.BattleCode.GDPlayerClanObjects1.length = 0;
gdjs.BattleCode.GDPlayerClanObjects2.length = 0;
gdjs.BattleCode.GDPlayerClanObjects3.length = 0;
gdjs.BattleCode.GDPlayerClanObjects4.length = 0;
gdjs.BattleCode.GDPlayerClanObjects5.length = 0;
gdjs.BattleCode.GDPlayerClanObjects6.length = 0;
gdjs.BattleCode.GDPlayerClanObjects7.length = 0;
gdjs.BattleCode.GDPlayerClanObjects8.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects1.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects2.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects3.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects4.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects5.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects6.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects7.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects8.length = 0;
gdjs.BattleCode.GDMobDropDescObjects1.length = 0;
gdjs.BattleCode.GDMobDropDescObjects2.length = 0;
gdjs.BattleCode.GDMobDropDescObjects3.length = 0;
gdjs.BattleCode.GDMobDropDescObjects4.length = 0;
gdjs.BattleCode.GDMobDropDescObjects5.length = 0;
gdjs.BattleCode.GDMobDropDescObjects6.length = 0;
gdjs.BattleCode.GDMobDropDescObjects7.length = 0;
gdjs.BattleCode.GDMobDropDescObjects8.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects1.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects2.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects3.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects4.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects5.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects6.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects7.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects8.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects1.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects2.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects3.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects4.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects5.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects6.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects7.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects8.length = 0;
gdjs.BattleCode.GDSlimeGasObjects1.length = 0;
gdjs.BattleCode.GDSlimeGasObjects2.length = 0;
gdjs.BattleCode.GDSlimeGasObjects3.length = 0;
gdjs.BattleCode.GDSlimeGasObjects4.length = 0;
gdjs.BattleCode.GDSlimeGasObjects5.length = 0;
gdjs.BattleCode.GDSlimeGasObjects6.length = 0;
gdjs.BattleCode.GDSlimeGasObjects7.length = 0;
gdjs.BattleCode.GDSlimeGasObjects8.length = 0;
gdjs.BattleCode.GDCrownObjects1.length = 0;
gdjs.BattleCode.GDCrownObjects2.length = 0;
gdjs.BattleCode.GDCrownObjects3.length = 0;
gdjs.BattleCode.GDCrownObjects4.length = 0;
gdjs.BattleCode.GDCrownObjects5.length = 0;
gdjs.BattleCode.GDCrownObjects6.length = 0;
gdjs.BattleCode.GDCrownObjects7.length = 0;
gdjs.BattleCode.GDCrownObjects8.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects1.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects2.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects3.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects4.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects5.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects6.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects7.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects8.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects1.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects2.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects3.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects4.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects5.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects6.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects7.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects8.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects1.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects2.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects3.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects4.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects5.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects6.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects7.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects8.length = 0;
gdjs.BattleCode.GDScoreBlueObjects1.length = 0;
gdjs.BattleCode.GDScoreBlueObjects2.length = 0;
gdjs.BattleCode.GDScoreBlueObjects3.length = 0;
gdjs.BattleCode.GDScoreBlueObjects4.length = 0;
gdjs.BattleCode.GDScoreBlueObjects5.length = 0;
gdjs.BattleCode.GDScoreBlueObjects6.length = 0;
gdjs.BattleCode.GDScoreBlueObjects7.length = 0;
gdjs.BattleCode.GDScoreBlueObjects8.length = 0;
gdjs.BattleCode.GDScoreRedObjects1.length = 0;
gdjs.BattleCode.GDScoreRedObjects2.length = 0;
gdjs.BattleCode.GDScoreRedObjects3.length = 0;
gdjs.BattleCode.GDScoreRedObjects4.length = 0;
gdjs.BattleCode.GDScoreRedObjects5.length = 0;
gdjs.BattleCode.GDScoreRedObjects6.length = 0;
gdjs.BattleCode.GDScoreRedObjects7.length = 0;
gdjs.BattleCode.GDScoreRedObjects8.length = 0;
gdjs.BattleCode.GDScoreIconsObjects1.length = 0;
gdjs.BattleCode.GDScoreIconsObjects2.length = 0;
gdjs.BattleCode.GDScoreIconsObjects3.length = 0;
gdjs.BattleCode.GDScoreIconsObjects4.length = 0;
gdjs.BattleCode.GDScoreIconsObjects5.length = 0;
gdjs.BattleCode.GDScoreIconsObjects6.length = 0;
gdjs.BattleCode.GDScoreIconsObjects7.length = 0;
gdjs.BattleCode.GDScoreIconsObjects8.length = 0;
gdjs.BattleCode.GDElixirSparksObjects1.length = 0;
gdjs.BattleCode.GDElixirSparksObjects2.length = 0;
gdjs.BattleCode.GDElixirSparksObjects3.length = 0;
gdjs.BattleCode.GDElixirSparksObjects4.length = 0;
gdjs.BattleCode.GDElixirSparksObjects5.length = 0;
gdjs.BattleCode.GDElixirSparksObjects6.length = 0;
gdjs.BattleCode.GDElixirSparksObjects7.length = 0;
gdjs.BattleCode.GDElixirSparksObjects8.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects1.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects2.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects3.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects4.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects5.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects6.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects7.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects8.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects1.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects2.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects3.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects4.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects5.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects6.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects7.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects8.length = 0;
gdjs.BattleCode.GDEmotesWordObjects1.length = 0;
gdjs.BattleCode.GDEmotesWordObjects2.length = 0;
gdjs.BattleCode.GDEmotesWordObjects3.length = 0;
gdjs.BattleCode.GDEmotesWordObjects4.length = 0;
gdjs.BattleCode.GDEmotesWordObjects5.length = 0;
gdjs.BattleCode.GDEmotesWordObjects6.length = 0;
gdjs.BattleCode.GDEmotesWordObjects7.length = 0;
gdjs.BattleCode.GDEmotesWordObjects8.length = 0;
gdjs.BattleCode.GDEmotesIconObjects1.length = 0;
gdjs.BattleCode.GDEmotesIconObjects2.length = 0;
gdjs.BattleCode.GDEmotesIconObjects3.length = 0;
gdjs.BattleCode.GDEmotesIconObjects4.length = 0;
gdjs.BattleCode.GDEmotesIconObjects5.length = 0;
gdjs.BattleCode.GDEmotesIconObjects6.length = 0;
gdjs.BattleCode.GDEmotesIconObjects7.length = 0;
gdjs.BattleCode.GDEmotesIconObjects8.length = 0;
gdjs.BattleCode.GDEmotesDescObjects1.length = 0;
gdjs.BattleCode.GDEmotesDescObjects2.length = 0;
gdjs.BattleCode.GDEmotesDescObjects3.length = 0;
gdjs.BattleCode.GDEmotesDescObjects4.length = 0;
gdjs.BattleCode.GDEmotesDescObjects5.length = 0;
gdjs.BattleCode.GDEmotesDescObjects6.length = 0;
gdjs.BattleCode.GDEmotesDescObjects7.length = 0;
gdjs.BattleCode.GDEmotesDescObjects8.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects1.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects2.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects3.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects4.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects5.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects6.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects7.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects8.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects1.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects2.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects3.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects4.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects5.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects6.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects7.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects8.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects1.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects2.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects3.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects4.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects5.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects6.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects7.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects8.length = 0;
gdjs.BattleCode.GDRedEmoteObjects1.length = 0;
gdjs.BattleCode.GDRedEmoteObjects2.length = 0;
gdjs.BattleCode.GDRedEmoteObjects3.length = 0;
gdjs.BattleCode.GDRedEmoteObjects4.length = 0;
gdjs.BattleCode.GDRedEmoteObjects5.length = 0;
gdjs.BattleCode.GDRedEmoteObjects6.length = 0;
gdjs.BattleCode.GDRedEmoteObjects7.length = 0;
gdjs.BattleCode.GDRedEmoteObjects8.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects1.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects2.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects3.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects4.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects5.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects6.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects7.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects8.length = 0;
gdjs.BattleCode.GDBannersObjects1.length = 0;
gdjs.BattleCode.GDBannersObjects2.length = 0;
gdjs.BattleCode.GDBannersObjects3.length = 0;
gdjs.BattleCode.GDBannersObjects4.length = 0;
gdjs.BattleCode.GDBannersObjects5.length = 0;
gdjs.BattleCode.GDBannersObjects6.length = 0;
gdjs.BattleCode.GDBannersObjects7.length = 0;
gdjs.BattleCode.GDBannersObjects8.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects1.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects2.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects3.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects4.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects5.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects6.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects7.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects8.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects1.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects2.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects3.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects4.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects5.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects6.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects7.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects8.length = 0;
gdjs.BattleCode.GDBannerShadowObjects1.length = 0;
gdjs.BattleCode.GDBannerShadowObjects2.length = 0;
gdjs.BattleCode.GDBannerShadowObjects3.length = 0;
gdjs.BattleCode.GDBannerShadowObjects4.length = 0;
gdjs.BattleCode.GDBannerShadowObjects5.length = 0;
gdjs.BattleCode.GDBannerShadowObjects6.length = 0;
gdjs.BattleCode.GDBannerShadowObjects7.length = 0;
gdjs.BattleCode.GDBannerShadowObjects8.length = 0;
gdjs.BattleCode.GDVsBadgeObjects1.length = 0;
gdjs.BattleCode.GDVsBadgeObjects2.length = 0;
gdjs.BattleCode.GDVsBadgeObjects3.length = 0;
gdjs.BattleCode.GDVsBadgeObjects4.length = 0;
gdjs.BattleCode.GDVsBadgeObjects5.length = 0;
gdjs.BattleCode.GDVsBadgeObjects6.length = 0;
gdjs.BattleCode.GDVsBadgeObjects7.length = 0;
gdjs.BattleCode.GDVsBadgeObjects8.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects5.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects6.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects7.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects8.length = 0;
gdjs.BattleCode.GDCenterTextObjects1.length = 0;
gdjs.BattleCode.GDCenterTextObjects2.length = 0;
gdjs.BattleCode.GDCenterTextObjects3.length = 0;
gdjs.BattleCode.GDCenterTextObjects4.length = 0;
gdjs.BattleCode.GDCenterTextObjects5.length = 0;
gdjs.BattleCode.GDCenterTextObjects6.length = 0;
gdjs.BattleCode.GDCenterTextObjects7.length = 0;
gdjs.BattleCode.GDCenterTextObjects8.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects1.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects2.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects3.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects4.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects5.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects6.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects7.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects8.length = 0;

gdjs.BattleCode.eventsList46(runtimeScene);
gdjs.BattleCode.GDNewTextObjects1.length = 0;
gdjs.BattleCode.GDNewTextObjects2.length = 0;
gdjs.BattleCode.GDNewTextObjects3.length = 0;
gdjs.BattleCode.GDNewTextObjects4.length = 0;
gdjs.BattleCode.GDNewTextObjects5.length = 0;
gdjs.BattleCode.GDNewTextObjects6.length = 0;
gdjs.BattleCode.GDNewTextObjects7.length = 0;
gdjs.BattleCode.GDNewTextObjects8.length = 0;
gdjs.BattleCode.GDNewText2Objects1.length = 0;
gdjs.BattleCode.GDNewText2Objects2.length = 0;
gdjs.BattleCode.GDNewText2Objects3.length = 0;
gdjs.BattleCode.GDNewText2Objects4.length = 0;
gdjs.BattleCode.GDNewText2Objects5.length = 0;
gdjs.BattleCode.GDNewText2Objects6.length = 0;
gdjs.BattleCode.GDNewText2Objects7.length = 0;
gdjs.BattleCode.GDNewText2Objects8.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects1.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects2.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects3.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects4.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects5.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects6.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects7.length = 0;
gdjs.BattleCode.GDNewShapePainterObjects8.length = 0;
gdjs.BattleCode.GDBuildingsObjects1.length = 0;
gdjs.BattleCode.GDBuildingsObjects2.length = 0;
gdjs.BattleCode.GDBuildingsObjects3.length = 0;
gdjs.BattleCode.GDBuildingsObjects4.length = 0;
gdjs.BattleCode.GDBuildingsObjects5.length = 0;
gdjs.BattleCode.GDBuildingsObjects6.length = 0;
gdjs.BattleCode.GDBuildingsObjects7.length = 0;
gdjs.BattleCode.GDBuildingsObjects8.length = 0;
gdjs.BattleCode.GDUnitsObjects1.length = 0;
gdjs.BattleCode.GDUnitsObjects2.length = 0;
gdjs.BattleCode.GDUnitsObjects3.length = 0;
gdjs.BattleCode.GDUnitsObjects4.length = 0;
gdjs.BattleCode.GDUnitsObjects5.length = 0;
gdjs.BattleCode.GDUnitsObjects6.length = 0;
gdjs.BattleCode.GDUnitsObjects7.length = 0;
gdjs.BattleCode.GDUnitsObjects8.length = 0;
gdjs.BattleCode.GDBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBackgroundObjects5.length = 0;
gdjs.BattleCode.GDBackgroundObjects6.length = 0;
gdjs.BattleCode.GDBackgroundObjects7.length = 0;
gdjs.BattleCode.GDBackgroundObjects8.length = 0;
gdjs.BattleCode.GDNewText3Objects1.length = 0;
gdjs.BattleCode.GDNewText3Objects2.length = 0;
gdjs.BattleCode.GDNewText3Objects3.length = 0;
gdjs.BattleCode.GDNewText3Objects4.length = 0;
gdjs.BattleCode.GDNewText3Objects5.length = 0;
gdjs.BattleCode.GDNewText3Objects6.length = 0;
gdjs.BattleCode.GDNewText3Objects7.length = 0;
gdjs.BattleCode.GDNewText3Objects8.length = 0;
gdjs.BattleCode.GDWallObjects1.length = 0;
gdjs.BattleCode.GDWallObjects2.length = 0;
gdjs.BattleCode.GDWallObjects3.length = 0;
gdjs.BattleCode.GDWallObjects4.length = 0;
gdjs.BattleCode.GDWallObjects5.length = 0;
gdjs.BattleCode.GDWallObjects6.length = 0;
gdjs.BattleCode.GDWallObjects7.length = 0;
gdjs.BattleCode.GDWallObjects8.length = 0;
gdjs.BattleCode.GDGuideObjects1.length = 0;
gdjs.BattleCode.GDGuideObjects2.length = 0;
gdjs.BattleCode.GDGuideObjects3.length = 0;
gdjs.BattleCode.GDGuideObjects4.length = 0;
gdjs.BattleCode.GDGuideObjects5.length = 0;
gdjs.BattleCode.GDGuideObjects6.length = 0;
gdjs.BattleCode.GDGuideObjects7.length = 0;
gdjs.BattleCode.GDGuideObjects8.length = 0;
gdjs.BattleCode.GDCharactersObjects1.length = 0;
gdjs.BattleCode.GDCharactersObjects2.length = 0;
gdjs.BattleCode.GDCharactersObjects3.length = 0;
gdjs.BattleCode.GDCharactersObjects4.length = 0;
gdjs.BattleCode.GDCharactersObjects5.length = 0;
gdjs.BattleCode.GDCharactersObjects6.length = 0;
gdjs.BattleCode.GDCharactersObjects7.length = 0;
gdjs.BattleCode.GDCharactersObjects8.length = 0;
gdjs.BattleCode.GDCursorObjects1.length = 0;
gdjs.BattleCode.GDCursorObjects2.length = 0;
gdjs.BattleCode.GDCursorObjects3.length = 0;
gdjs.BattleCode.GDCursorObjects4.length = 0;
gdjs.BattleCode.GDCursorObjects5.length = 0;
gdjs.BattleCode.GDCursorObjects6.length = 0;
gdjs.BattleCode.GDCursorObjects7.length = 0;
gdjs.BattleCode.GDCursorObjects8.length = 0;
gdjs.BattleCode.GDIconsObjects1.length = 0;
gdjs.BattleCode.GDIconsObjects2.length = 0;
gdjs.BattleCode.GDIconsObjects3.length = 0;
gdjs.BattleCode.GDIconsObjects4.length = 0;
gdjs.BattleCode.GDIconsObjects5.length = 0;
gdjs.BattleCode.GDIconsObjects6.length = 0;
gdjs.BattleCode.GDIconsObjects7.length = 0;
gdjs.BattleCode.GDIconsObjects8.length = 0;
gdjs.BattleCode.GDElixirDropObjects1.length = 0;
gdjs.BattleCode.GDElixirDropObjects2.length = 0;
gdjs.BattleCode.GDElixirDropObjects3.length = 0;
gdjs.BattleCode.GDElixirDropObjects4.length = 0;
gdjs.BattleCode.GDElixirDropObjects5.length = 0;
gdjs.BattleCode.GDElixirDropObjects6.length = 0;
gdjs.BattleCode.GDElixirDropObjects7.length = 0;
gdjs.BattleCode.GDElixirDropObjects8.length = 0;
gdjs.BattleCode.GDCardsObjects1.length = 0;
gdjs.BattleCode.GDCardsObjects2.length = 0;
gdjs.BattleCode.GDCardsObjects3.length = 0;
gdjs.BattleCode.GDCardsObjects4.length = 0;
gdjs.BattleCode.GDCardsObjects5.length = 0;
gdjs.BattleCode.GDCardsObjects6.length = 0;
gdjs.BattleCode.GDCardsObjects7.length = 0;
gdjs.BattleCode.GDCardsObjects8.length = 0;
gdjs.BattleCode.GDCardHolderObjects1.length = 0;
gdjs.BattleCode.GDCardHolderObjects2.length = 0;
gdjs.BattleCode.GDCardHolderObjects3.length = 0;
gdjs.BattleCode.GDCardHolderObjects4.length = 0;
gdjs.BattleCode.GDCardHolderObjects5.length = 0;
gdjs.BattleCode.GDCardHolderObjects6.length = 0;
gdjs.BattleCode.GDCardHolderObjects7.length = 0;
gdjs.BattleCode.GDCardHolderObjects8.length = 0;
gdjs.BattleCode.GDNextCardObjects1.length = 0;
gdjs.BattleCode.GDNextCardObjects2.length = 0;
gdjs.BattleCode.GDNextCardObjects3.length = 0;
gdjs.BattleCode.GDNextCardObjects4.length = 0;
gdjs.BattleCode.GDNextCardObjects5.length = 0;
gdjs.BattleCode.GDNextCardObjects6.length = 0;
gdjs.BattleCode.GDNextCardObjects7.length = 0;
gdjs.BattleCode.GDNextCardObjects8.length = 0;
gdjs.BattleCode.GDDragBoxObjects1.length = 0;
gdjs.BattleCode.GDDragBoxObjects2.length = 0;
gdjs.BattleCode.GDDragBoxObjects3.length = 0;
gdjs.BattleCode.GDDragBoxObjects4.length = 0;
gdjs.BattleCode.GDDragBoxObjects5.length = 0;
gdjs.BattleCode.GDDragBoxObjects6.length = 0;
gdjs.BattleCode.GDDragBoxObjects7.length = 0;
gdjs.BattleCode.GDDragBoxObjects8.length = 0;
gdjs.BattleCode.GDTimerIconObjects1.length = 0;
gdjs.BattleCode.GDTimerIconObjects2.length = 0;
gdjs.BattleCode.GDTimerIconObjects3.length = 0;
gdjs.BattleCode.GDTimerIconObjects4.length = 0;
gdjs.BattleCode.GDTimerIconObjects5.length = 0;
gdjs.BattleCode.GDTimerIconObjects6.length = 0;
gdjs.BattleCode.GDTimerIconObjects7.length = 0;
gdjs.BattleCode.GDTimerIconObjects8.length = 0;
gdjs.BattleCode.GDBuildingWallObjects1.length = 0;
gdjs.BattleCode.GDBuildingWallObjects2.length = 0;
gdjs.BattleCode.GDBuildingWallObjects3.length = 0;
gdjs.BattleCode.GDBuildingWallObjects4.length = 0;
gdjs.BattleCode.GDBuildingWallObjects5.length = 0;
gdjs.BattleCode.GDBuildingWallObjects6.length = 0;
gdjs.BattleCode.GDBuildingWallObjects7.length = 0;
gdjs.BattleCode.GDBuildingWallObjects8.length = 0;
gdjs.BattleCode.GDUIObjects1.length = 0;
gdjs.BattleCode.GDUIObjects2.length = 0;
gdjs.BattleCode.GDUIObjects3.length = 0;
gdjs.BattleCode.GDUIObjects4.length = 0;
gdjs.BattleCode.GDUIObjects5.length = 0;
gdjs.BattleCode.GDUIObjects6.length = 0;
gdjs.BattleCode.GDUIObjects7.length = 0;
gdjs.BattleCode.GDUIObjects8.length = 0;
gdjs.BattleCode.GDCheckpointsObjects1.length = 0;
gdjs.BattleCode.GDCheckpointsObjects2.length = 0;
gdjs.BattleCode.GDCheckpointsObjects3.length = 0;
gdjs.BattleCode.GDCheckpointsObjects4.length = 0;
gdjs.BattleCode.GDCheckpointsObjects5.length = 0;
gdjs.BattleCode.GDCheckpointsObjects6.length = 0;
gdjs.BattleCode.GDCheckpointsObjects7.length = 0;
gdjs.BattleCode.GDCheckpointsObjects8.length = 0;
gdjs.BattleCode.GDMinutesObjects1.length = 0;
gdjs.BattleCode.GDMinutesObjects2.length = 0;
gdjs.BattleCode.GDMinutesObjects3.length = 0;
gdjs.BattleCode.GDMinutesObjects4.length = 0;
gdjs.BattleCode.GDMinutesObjects5.length = 0;
gdjs.BattleCode.GDMinutesObjects6.length = 0;
gdjs.BattleCode.GDMinutesObjects7.length = 0;
gdjs.BattleCode.GDMinutesObjects8.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects1.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects2.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects3.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects4.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects5.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects6.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects7.length = 0;
gdjs.BattleCode.GDElixirExplodeObjects8.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects1.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects2.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects3.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects4.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects5.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects6.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects7.length = 0;
gdjs.BattleCode.GDSlimeParticlesObjects8.length = 0;
gdjs.BattleCode.GDElixirMinusObjects1.length = 0;
gdjs.BattleCode.GDElixirMinusObjects2.length = 0;
gdjs.BattleCode.GDElixirMinusObjects3.length = 0;
gdjs.BattleCode.GDElixirMinusObjects4.length = 0;
gdjs.BattleCode.GDElixirMinusObjects5.length = 0;
gdjs.BattleCode.GDElixirMinusObjects6.length = 0;
gdjs.BattleCode.GDElixirMinusObjects7.length = 0;
gdjs.BattleCode.GDElixirMinusObjects8.length = 0;
gdjs.BattleCode.GDPlayerNameObjects1.length = 0;
gdjs.BattleCode.GDPlayerNameObjects2.length = 0;
gdjs.BattleCode.GDPlayerNameObjects3.length = 0;
gdjs.BattleCode.GDPlayerNameObjects4.length = 0;
gdjs.BattleCode.GDPlayerNameObjects5.length = 0;
gdjs.BattleCode.GDPlayerNameObjects6.length = 0;
gdjs.BattleCode.GDPlayerNameObjects7.length = 0;
gdjs.BattleCode.GDPlayerNameObjects8.length = 0;
gdjs.BattleCode.GDPlayerClanObjects1.length = 0;
gdjs.BattleCode.GDPlayerClanObjects2.length = 0;
gdjs.BattleCode.GDPlayerClanObjects3.length = 0;
gdjs.BattleCode.GDPlayerClanObjects4.length = 0;
gdjs.BattleCode.GDPlayerClanObjects5.length = 0;
gdjs.BattleCode.GDPlayerClanObjects6.length = 0;
gdjs.BattleCode.GDPlayerClanObjects7.length = 0;
gdjs.BattleCode.GDPlayerClanObjects8.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects1.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects2.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects3.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects4.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects5.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects6.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects7.length = 0;
gdjs.BattleCode.GDPlayerRatingObjects8.length = 0;
gdjs.BattleCode.GDMobDropDescObjects1.length = 0;
gdjs.BattleCode.GDMobDropDescObjects2.length = 0;
gdjs.BattleCode.GDMobDropDescObjects3.length = 0;
gdjs.BattleCode.GDMobDropDescObjects4.length = 0;
gdjs.BattleCode.GDMobDropDescObjects5.length = 0;
gdjs.BattleCode.GDMobDropDescObjects6.length = 0;
gdjs.BattleCode.GDMobDropDescObjects7.length = 0;
gdjs.BattleCode.GDMobDropDescObjects8.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects1.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects2.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects3.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects4.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects5.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects6.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects7.length = 0;
gdjs.BattleCode.GDTowerHpBarObjects8.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects1.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects2.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects3.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects4.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects5.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects6.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects7.length = 0;
gdjs.BattleCode.GDSlimeGroundObjects8.length = 0;
gdjs.BattleCode.GDSlimeGasObjects1.length = 0;
gdjs.BattleCode.GDSlimeGasObjects2.length = 0;
gdjs.BattleCode.GDSlimeGasObjects3.length = 0;
gdjs.BattleCode.GDSlimeGasObjects4.length = 0;
gdjs.BattleCode.GDSlimeGasObjects5.length = 0;
gdjs.BattleCode.GDSlimeGasObjects6.length = 0;
gdjs.BattleCode.GDSlimeGasObjects7.length = 0;
gdjs.BattleCode.GDSlimeGasObjects8.length = 0;
gdjs.BattleCode.GDCrownObjects1.length = 0;
gdjs.BattleCode.GDCrownObjects2.length = 0;
gdjs.BattleCode.GDCrownObjects3.length = 0;
gdjs.BattleCode.GDCrownObjects4.length = 0;
gdjs.BattleCode.GDCrownObjects5.length = 0;
gdjs.BattleCode.GDCrownObjects6.length = 0;
gdjs.BattleCode.GDCrownObjects7.length = 0;
gdjs.BattleCode.GDCrownObjects8.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects1.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects2.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects3.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects4.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects5.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects6.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects7.length = 0;
gdjs.BattleCode.GDBuildingExplosionObjects8.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects1.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects2.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects3.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects4.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects5.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects6.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects7.length = 0;
gdjs.BattleCode.GDBuildingSmokeObjects8.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects1.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects2.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects3.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects4.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects5.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects6.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects7.length = 0;
gdjs.BattleCode.GDNoDropAreaObjects8.length = 0;
gdjs.BattleCode.GDScoreBlueObjects1.length = 0;
gdjs.BattleCode.GDScoreBlueObjects2.length = 0;
gdjs.BattleCode.GDScoreBlueObjects3.length = 0;
gdjs.BattleCode.GDScoreBlueObjects4.length = 0;
gdjs.BattleCode.GDScoreBlueObjects5.length = 0;
gdjs.BattleCode.GDScoreBlueObjects6.length = 0;
gdjs.BattleCode.GDScoreBlueObjects7.length = 0;
gdjs.BattleCode.GDScoreBlueObjects8.length = 0;
gdjs.BattleCode.GDScoreRedObjects1.length = 0;
gdjs.BattleCode.GDScoreRedObjects2.length = 0;
gdjs.BattleCode.GDScoreRedObjects3.length = 0;
gdjs.BattleCode.GDScoreRedObjects4.length = 0;
gdjs.BattleCode.GDScoreRedObjects5.length = 0;
gdjs.BattleCode.GDScoreRedObjects6.length = 0;
gdjs.BattleCode.GDScoreRedObjects7.length = 0;
gdjs.BattleCode.GDScoreRedObjects8.length = 0;
gdjs.BattleCode.GDScoreIconsObjects1.length = 0;
gdjs.BattleCode.GDScoreIconsObjects2.length = 0;
gdjs.BattleCode.GDScoreIconsObjects3.length = 0;
gdjs.BattleCode.GDScoreIconsObjects4.length = 0;
gdjs.BattleCode.GDScoreIconsObjects5.length = 0;
gdjs.BattleCode.GDScoreIconsObjects6.length = 0;
gdjs.BattleCode.GDScoreIconsObjects7.length = 0;
gdjs.BattleCode.GDScoreIconsObjects8.length = 0;
gdjs.BattleCode.GDElixirSparksObjects1.length = 0;
gdjs.BattleCode.GDElixirSparksObjects2.length = 0;
gdjs.BattleCode.GDElixirSparksObjects3.length = 0;
gdjs.BattleCode.GDElixirSparksObjects4.length = 0;
gdjs.BattleCode.GDElixirSparksObjects5.length = 0;
gdjs.BattleCode.GDElixirSparksObjects6.length = 0;
gdjs.BattleCode.GDElixirSparksObjects7.length = 0;
gdjs.BattleCode.GDElixirSparksObjects8.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects1.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects2.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects3.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects4.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects5.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects6.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects7.length = 0;
gdjs.BattleCode.GDScoreBlueDescObjects8.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects1.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects2.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects3.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects4.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects5.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects6.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects7.length = 0;
gdjs.BattleCode.GDBlueScoreBarObjects8.length = 0;
gdjs.BattleCode.GDEmotesWordObjects1.length = 0;
gdjs.BattleCode.GDEmotesWordObjects2.length = 0;
gdjs.BattleCode.GDEmotesWordObjects3.length = 0;
gdjs.BattleCode.GDEmotesWordObjects4.length = 0;
gdjs.BattleCode.GDEmotesWordObjects5.length = 0;
gdjs.BattleCode.GDEmotesWordObjects6.length = 0;
gdjs.BattleCode.GDEmotesWordObjects7.length = 0;
gdjs.BattleCode.GDEmotesWordObjects8.length = 0;
gdjs.BattleCode.GDEmotesIconObjects1.length = 0;
gdjs.BattleCode.GDEmotesIconObjects2.length = 0;
gdjs.BattleCode.GDEmotesIconObjects3.length = 0;
gdjs.BattleCode.GDEmotesIconObjects4.length = 0;
gdjs.BattleCode.GDEmotesIconObjects5.length = 0;
gdjs.BattleCode.GDEmotesIconObjects6.length = 0;
gdjs.BattleCode.GDEmotesIconObjects7.length = 0;
gdjs.BattleCode.GDEmotesIconObjects8.length = 0;
gdjs.BattleCode.GDEmotesDescObjects1.length = 0;
gdjs.BattleCode.GDEmotesDescObjects2.length = 0;
gdjs.BattleCode.GDEmotesDescObjects3.length = 0;
gdjs.BattleCode.GDEmotesDescObjects4.length = 0;
gdjs.BattleCode.GDEmotesDescObjects5.length = 0;
gdjs.BattleCode.GDEmotesDescObjects6.length = 0;
gdjs.BattleCode.GDEmotesDescObjects7.length = 0;
gdjs.BattleCode.GDEmotesDescObjects8.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects1.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects2.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects3.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects4.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects5.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects6.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects7.length = 0;
gdjs.BattleCode.GDCardHolderBlankObjects8.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects1.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects2.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects3.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects4.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects5.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects6.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects7.length = 0;
gdjs.BattleCode.GDOpenEmojiIconObjects8.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects1.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects2.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects3.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects4.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects5.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects6.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects7.length = 0;
gdjs.BattleCode.GDCloseEmojiIconObjects8.length = 0;
gdjs.BattleCode.GDRedEmoteObjects1.length = 0;
gdjs.BattleCode.GDRedEmoteObjects2.length = 0;
gdjs.BattleCode.GDRedEmoteObjects3.length = 0;
gdjs.BattleCode.GDRedEmoteObjects4.length = 0;
gdjs.BattleCode.GDRedEmoteObjects5.length = 0;
gdjs.BattleCode.GDRedEmoteObjects6.length = 0;
gdjs.BattleCode.GDRedEmoteObjects7.length = 0;
gdjs.BattleCode.GDRedEmoteObjects8.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects1.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects2.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects3.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects4.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects5.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects6.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects7.length = 0;
gdjs.BattleCode.GDBlueEmoteObjects8.length = 0;
gdjs.BattleCode.GDBannersObjects1.length = 0;
gdjs.BattleCode.GDBannersObjects2.length = 0;
gdjs.BattleCode.GDBannersObjects3.length = 0;
gdjs.BattleCode.GDBannersObjects4.length = 0;
gdjs.BattleCode.GDBannersObjects5.length = 0;
gdjs.BattleCode.GDBannersObjects6.length = 0;
gdjs.BattleCode.GDBannersObjects7.length = 0;
gdjs.BattleCode.GDBannersObjects8.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects1.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects2.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects3.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects4.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects5.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects6.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects7.length = 0;
gdjs.BattleCode.GDBannerTextWhiteObjects8.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects1.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects2.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects3.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects4.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects5.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects6.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects7.length = 0;
gdjs.BattleCode.GDBannerTextYellowObjects8.length = 0;
gdjs.BattleCode.GDBannerShadowObjects1.length = 0;
gdjs.BattleCode.GDBannerShadowObjects2.length = 0;
gdjs.BattleCode.GDBannerShadowObjects3.length = 0;
gdjs.BattleCode.GDBannerShadowObjects4.length = 0;
gdjs.BattleCode.GDBannerShadowObjects5.length = 0;
gdjs.BattleCode.GDBannerShadowObjects6.length = 0;
gdjs.BattleCode.GDBannerShadowObjects7.length = 0;
gdjs.BattleCode.GDBannerShadowObjects8.length = 0;
gdjs.BattleCode.GDVsBadgeObjects1.length = 0;
gdjs.BattleCode.GDVsBadgeObjects2.length = 0;
gdjs.BattleCode.GDVsBadgeObjects3.length = 0;
gdjs.BattleCode.GDVsBadgeObjects4.length = 0;
gdjs.BattleCode.GDVsBadgeObjects5.length = 0;
gdjs.BattleCode.GDVsBadgeObjects6.length = 0;
gdjs.BattleCode.GDVsBadgeObjects7.length = 0;
gdjs.BattleCode.GDVsBadgeObjects8.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects4.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects5.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects6.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects7.length = 0;
gdjs.BattleCode.GDBannerBackgroundObjects8.length = 0;
gdjs.BattleCode.GDCenterTextObjects1.length = 0;
gdjs.BattleCode.GDCenterTextObjects2.length = 0;
gdjs.BattleCode.GDCenterTextObjects3.length = 0;
gdjs.BattleCode.GDCenterTextObjects4.length = 0;
gdjs.BattleCode.GDCenterTextObjects5.length = 0;
gdjs.BattleCode.GDCenterTextObjects6.length = 0;
gdjs.BattleCode.GDCenterTextObjects7.length = 0;
gdjs.BattleCode.GDCenterTextObjects8.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects1.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects2.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects3.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects4.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects5.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects6.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects7.length = 0;
gdjs.BattleCode.GDReplaySpriteObjects8.length = 0;


return;

}

gdjs['BattleCode'] = gdjs.BattleCode;
