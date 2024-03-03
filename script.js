//Level 1:
onEvent("startButton", "click", function( ) {
  setScreen("level1");
});
onEvent("taskOnePhoto", "change", function( ) {
  setImageURL("taskOnePicture", getImageURL("taskOnePhoto"));
});
onEvent("completeOne", "click", function( ) {
  createRecord("Images", {taskOne:(getImageURL("taskOnePicture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("lavender1");
});

//Level 2:
onEvent("lavenderOneNext", "click", function( ) {
  setScreen("level2");
});
onEvent("taskTwoPhoto", "change", function( ) {
  setImageURL("taskTwoPicture", getImageURL("taskTwoPhoto"));
});
onEvent("completeTwo", "click", function( ) {
  createRecord("images", {taskTwo:(getImageURL("taskTwoPicture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("lavender2");
});

//Level 3
onEvent("lavenderTwoNext", "click", function( ) {
  setScreen("level3");
});
onEvent("taskThreePhoto", "change", function( ) {
  setImageURL("taskThreePicture", getImageURL("taskThreePhoto"));
});
onEvent("completeThree", "click", function( ) {
  createRecord("images", {taskThree:(getImageURL("taskThreePicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender3");
});

//Level 4
onEvent("lavenderThreeNext", "click", function( ) {
  setScreen("level4");
});
onEvent("taskFourPhoto", "change", function( ) {
  setImageURL("taskFourPicture", getImageURL("taskFourPhoto"));
});
onEvent("completeFour", "click", function( ) {
  createRecord("images", {taskFour:(getImageURL("taskFourPicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender4");
});

//Level 5
onEvent("lavenderFourNext", "click", function( ) {
  setScreen("level5");
});
onEvent("taskFivePhoto", "change", function( ) {
  setImageURL("taskFivePicture", getImageURL("taskFivePhoto"));
});
onEvent("completeFive", "click", function( ) {
  createRecord("images", {taskFive:(getImageURL("taskFivePicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender5");
});

//Level 6
onEvent("lavenderFiveNext", "click", function( ) {
  setScreen("level6");
});
onEvent("taskSixPhoto", "change", function( ) {
  setImageURL("taskSixPicture", getImageURL("taskSixPhoto"));
});
onEvent("completeSix", "click", function( ) {
  createRecord("images", {taskSix:(getImageURL("taskSixPicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender6");
});

//Level 7
onEvent("lavenderSixNext", "click", function( ) {
  setScreen("level7");
});
onEvent("taskSevenPhoto", "change", function( ) {
  setImageURL("taskSevenPicture", getImageURL("taskSevenPhoto"));
});
onEvent("completeSeven", "click", function( ) {
  createRecord("images", {taskSeven:(getImageURL("taskSevenPicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender7");
});

//Level 8
onEvent("lavenderSevenNext", "click", function( ) {
  setScreen("level8");
});
onEvent("taskEightPhoto", "change", function( ) {
  setImageURL("taskEightPicture", getImageURL("taskEightPhoto"));
});
onEvent("complete8", "click", function( ) {
  createRecord("images", {taskEight:(getImageURL("taskEightPicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender8");
});

//Level 9
onEvent("lavenderEightNext", "click", function( ) {
  setScreen("level9");
});
onEvent("taskNinePhoto", "change", function( ) {
  setImageURL("taskNinePicture", getImageURL("taskNinePhoto"));
});
onEvent("completeNine", "click", function( ) {
  createRecord("images", {taskNine:(getImageURL("taskNinePicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender9");
});

//Level 10
onEvent("lavenderNineNext", "click", function( ) {
  setScreen("level10");
});
onEvent("taskTenPhoto", "change", function( ) {
  setImageURL("taskTenPicture", getImageURL("taskTenPhoto"));
});
onEvent("completeTen", "click", function( ) {
  createRecord("images", {taskTen:(getImageURL("taskTenPicture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("lavender10");
});

//Lavender Info
onEvent("lavenderTenNext", "click", function( ) {
  setScreen("lavenderInfo");
});
onEvent("lavenderGrow", "click", function( ) {
  setScreen("lavenderHowtoGrow");
});

//Level 11
onEvent("nextButton2", "click", function( ) {
  setScreen("level11");
});
onEvent("nextButton2.5", "click", function( ) {
  setScreen("level11");
});
onEvent("task11Photo", "change", function( ) {
  setImageURL("task11Picture", getImageURL("task11Photo"));
});
onEvent("complete11", "click", function( ) {
  createRecord("images", {task11:(getImageURL("task11Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower1");
});

//Level 12:
onEvent("flower1Next", "click", function( ) {
  setScreen("level12");
});
onEvent("task12Photo", "change", function( ) {
  setImageURL("task12Picture", getImageURL("task12Photo"));
});
onEvent("complete12", "click", function( ) {
  createRecord("images", {task12:(getImageURL("task12Picture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("flower2");
});

//Level 13
onEvent("flower2Next", "click", function( ) {
  setScreen("level13");
});
onEvent("task13Photo", "change", function( ) {
  setImageURL("task13Picture", getImageURL("task13Photo"));
});
onEvent("complete13", "click", function( ) {
  createRecord("images", {task13:(getImageURL("task13Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower3");
});

//Level 14
onEvent("flower3Next", "click", function( ) {
  setScreen("level14");
});
onEvent("task14Photo", "change", function( ) {
  setImageURL("task14Picture", getImageURL("task14Photo"));
});
onEvent("complete14", "click", function( ) {
  createRecord("images", {task14:(getImageURL("task14Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower4");
});

//Level 15
onEvent("flower4Next", "click", function( ) {
  setScreen("level15");
});
onEvent("task15Photo", "change", function( ) {
  setImageURL("task15Picture", getImageURL("task15Photo"));
});
onEvent("complete15", "click", function( ) {
  createRecord("images", {task15:(getImageURL("task15Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower5");
});

//Level 16
onEvent("flower5Next", "click", function( ) {
  setScreen("level16");
});
onEvent("task16Photo", "change", function( ) {
  setImageURL("task16Picture", getImageURL("task16Photo"));
});
onEvent("complete16", "click", function( ) {
  createRecord("images", {task16:(getImageURL("task16Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower6");
});

//Level 17
onEvent("flower6Next", "click", function( ) {
  setScreen("level17");
});
onEvent("task17Photo", "change", function( ) {
  setImageURL("task17Picture", getImageURL("task17Photo"));
});
onEvent("complete17", "click", function( ) {
  createRecord("images", {task17:(getImageURL("task17Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower7");
});

//Level 18
onEvent("flower7Next", "click", function( ) {
  setScreen("level18");
});
onEvent("task18Photo", "change", function( ) {
  setImageURL("task18Picture", getImageURL("task18Photo"));
});
onEvent("complete18", "click", function( ) {
  createRecord("images", {task18:(getImageURL("task18Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower8");
});

//Level 19
onEvent("flower8Next", "click", function( ) {
  setScreen("level19");
});
onEvent("task19Photo", "change", function( ) {
  setImageURL("task19Picture", getImageURL("task19Photo"));
});
onEvent("complete19", "click", function( ) {
  createRecord("images", {task19:(getImageURL("task19Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower9");
});

//Level 20
onEvent("flower9Next", "click", function( ) {
  setScreen("level20");
});
onEvent("task20Photo", "change", function( ) {
  setImageURL("task20Picture", getImageURL("task20Photo"));
});
onEvent("complete20", "click", function( ) {
  createRecord("images", {task20:(getImageURL("task20Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("flower10");
});

//Rose Info
onEvent("flower10Next", "click", function( ) {
  setScreen("flowerInfo");
});
onEvent("flowerGrow", "click", function( ) {
  setScreen("flowerHowtoGrow");
});
onEvent("nextButton1", "click", function( ) {
  setScreen("level21");
});
onEvent("nextButton1.5", "click", function( ) {
  setScreen("level21");
});

//Level 21
onEvent("nextButton2", "click", function( ) {
  setScreen("level21");
});
onEvent("nextButton2.5", "click", function( ) {
  setScreen("level21");
});
onEvent("task21Photo", "change", function( ) {
  setImageURL("task21Picture", getImageURL("task21Photo"));
});
onEvent("complete21", "click", function( ) {
  createRecord("images", {task21:(getImageURL("task21Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold1");
});

//Level 22:
onEvent("marigold1Next", "click", function( ) {
  setScreen("level22");
});
onEvent("task22Photo", "change", function( ) {
  setImageURL("task22Picture", getImageURL("task22Photo"));
});
onEvent("complete22", "click", function( ) {
  createRecord("images", {task22:(getImageURL("task22Picture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("marigold2");
});

//Level 23
onEvent("marigold2Next", "click", function( ) {
  setScreen("level23");
});
onEvent("task23Photo", "change", function( ) {
  setImageURL("task23Picture", getImageURL("task23Photo"));
});
onEvent("complete23", "click", function( ) {
  createRecord("images", {task23:(getImageURL("task23Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold3");
});

//Level 24
onEvent("marigold3Next", "click", function( ) {
  setScreen("level24");
});
onEvent("task24Photo", "change", function( ) {
  setImageURL("task24Picture", getImageURL("task24Photo"));
});
onEvent("complete24", "click", function( ) {
  createRecord("images", {task24:(getImageURL("task24Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold4");
});

//Level 25
onEvent("marigold4Next", "click", function( ) {
  setScreen("level25");
});
onEvent("task25Photo", "change", function( ) {
  setImageURL("task25Picture", getImageURL("task25Photo"));
});
onEvent("complete25", "click", function( ) {
  createRecord("images", {task25:(getImageURL("task25Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold5");
});

//Level 26
onEvent("marigold5Next", "click", function( ) {
  setScreen("level26");
});
onEvent("task26Photo", "change", function( ) {
  setImageURL("task26Picture", getImageURL("task26Photo"));
});
onEvent("complete26", "click", function( ) {
  createRecord("images", {task26:(getImageURL("task26Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold6");
});

//Level 27
onEvent("marigold6Next", "click", function( ) {
  setScreen("level27");
});
onEvent("task27Photo", "change", function( ) {
  setImageURL("task27Picture", getImageURL("task27Photo"));
});
onEvent("complete27", "click", function( ) {
  createRecord("images", {task27:(getImageURL("task27Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold7");
});

//Level 28
onEvent("marigold7Next", "click", function( ) {
  setScreen("level28");
});
onEvent("task28Photo", "change", function( ) {
  setImageURL("task28Picture", getImageURL("task28Photo"));
});
onEvent("complete28", "click", function( ) {
  createRecord("images", {task28:(getImageURL("task28Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold8");
});

//Level 29
onEvent("marigold8Next", "click", function( ) {
  setScreen("level29");
});
onEvent("task29Photo", "change", function( ) {
  setImageURL("task29Picture", getImageURL("task29Photo"));
});
onEvent("complete29", "click", function( ) {
  createRecord("images", {task29:(getImageURL("task29Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold9");
});

//Level 30
onEvent("marigold9Next", "click", function( ) {
  setScreen("level30");
});
onEvent("task30Photo", "change", function( ) {
  setImageURL("task30Picture", getImageURL("task30Photo"));
});
onEvent("complete30", "click", function( ) {
  createRecord("images", {task30:(getImageURL("task30Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("marigold10");
});

//Marigold Info
onEvent("marigold10Next", "click", function( ) {
  setScreen("marigoldInfo");
});
onEvent("marigoldGrow", "click", function( ) {
  setScreen("marigoldHowtoGrow");
});
onEvent("nextButton3", "click", function( ) {
  setScreen("level31");
});
onEvent("nextButton3.5", "click", function( ) {
  setScreen("level31");
});

//Level 31
onEvent("task31Photo", "change", function( ) {
  setImageURL("task31Picture", getImageURL("task31Photo"));
});
onEvent("complete31", "click", function( ) {
  createRecord("images", {task31:(getImageURL("task31Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus1");
});

//Level 32:
onEvent("hibiscus1Next", "click", function( ) {
  setScreen("level32");
});
onEvent("task32Photo", "change", function( ) {
  setImageURL("task32Picture", getImageURL("task32Photo"));
});
onEvent("complete32", "click", function( ) {
  createRecord("images", {task32:(getImageURL("task32Picture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("hibiscus2");
});

//Level 33
onEvent("hibiscus2Next", "click", function( ) {
  setScreen("level33");
});
onEvent("task33Photo", "change", function( ) {
  setImageURL("task33Picture", getImageURL("task33Photo"));
});
onEvent("complete33", "click", function( ) {
  createRecord("images", {task33:(getImageURL("task33Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus3");
});

//Level 34
onEvent("hibiscus3Next", "click", function( ) {
  setScreen("level34");
});
onEvent("task34Photo", "change", function( ) {
  setImageURL("task34Picture", getImageURL("task34Photo"));
});
onEvent("complete34", "click", function( ) {
  createRecord("images", {task34:(getImageURL("task34Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus4");
});

//Level 35
onEvent("hibiscus4Next", "click", function( ) {
  setScreen("level35");
});
onEvent("task35Photo", "change", function( ) {
  setImageURL("task35Picture", getImageURL("task35Photo"));
});
onEvent("complete35", "click", function( ) {
  createRecord("images", {task35:(getImageURL("task35Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus5");
});

//Level 36
onEvent("hibiscus5Next", "click", function( ) {
  setScreen("level36");
});
onEvent("task36Photo", "change", function( ) {
  setImageURL("task36Picture", getImageURL("task36Photo"));
});
onEvent("complete36", "click", function( ) {
  createRecord("images", {task36:(getImageURL("task36Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus6");
});

//Level 37
onEvent("hibiscus6Next", "click", function( ) {
  setScreen("level37");
});
onEvent("task37Photo", "change", function( ) {
  setImageURL("task37Picture", getImageURL("task37Photo"));
});
onEvent("complete37", "click", function( ) {
  createRecord("images", {task37:(getImageURL("task37Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus7");
});

//Level 38
onEvent("hibiscus7Next", "click", function( ) {
  setScreen("level38");
});
onEvent("task38Photo", "change", function( ) {
  setImageURL("task38Picture", getImageURL("task38Photo"));
});
onEvent("complete38", "click", function( ) {
  createRecord("images", {task38:(getImageURL("task38Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus8");
});

//Level 39
onEvent("hibiscus8Next", "click", function( ) {
  setScreen("level39");
});
onEvent("task39Photo", "change", function( ) {
  setImageURL("task39Picture", getImageURL("task39Photo"));
});
onEvent("complete39", "click", function( ) {
  createRecord("images", {task39:(getImageURL("task39Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus9");
});

//Level 40
onEvent("hibiscus9Next", "click", function( ) {
  setScreen("level40");
});
onEvent("task40Photo", "change", function( ) {
  setImageURL("task40Picture", getImageURL("task40Photo"));
});
onEvent("complete40", "click", function( ) {
  createRecord("images", {task40:(getImageURL("task40Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("hibiscus10");
});

//Hibiscus Info
onEvent("hibiscus10Next", "click", function( ) {
  setScreen("hibiscusInfo");
});
onEvent("hibiscusGrow", "click", function( ) {
  setScreen("hibiscusHowtoGrow");
});
onEvent("nextButton4", "click", function( ) {
  setScreen("level41");
});
onEvent("nextButton4.5", "click", function( ) {
  setScreen("level41");
});

//Level 41
onEvent("task41Photo", "change", function( ) {
  setImageURL("task41Picture", getImageURL("task41Photo"));
});
onEvent("complete41", "click", function( ) {
  createRecord("images", {task41:(getImageURL("task41Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile1");
});

//Level 42:
onEvent("chamomile1Next", "click", function( ) {
  setScreen("level42");
});
onEvent("task42Photo", "change", function( ) {
  setImageURL("task42Picture", getImageURL("task42Photo"));
});
onEvent("complete42", "click", function( ) {
  createRecord("images", {task42:(getImageURL("task42Picture"))}, function() {
    console.log("Image Uploaded!");
  });
  setScreen("chamomile2");
});

//Level 43
onEvent("chamomile2Next", "click", function( ) {
  setScreen("level43");
});
onEvent("task43Photo", "change", function( ) {
  setImageURL("task43Picture", getImageURL("task43Photo"));
});
onEvent("complete43", "click", function( ) {
  createRecord("images", {task43:(getImageURL("task43Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile3");
});

//Level 44
onEvent("chamomile3Next", "click", function( ) {
  setScreen("level44");
});
onEvent("task44Photo", "change", function( ) {
  setImageURL("task44Picture", getImageURL("task44Photo"));
});
onEvent("complete44", "click", function( ) {
  createRecord("images", {task44:(getImageURL("task44Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile4");
});

//Level 45
onEvent("chamomile4Next", "click", function( ) {
  setScreen("level45");
});
onEvent("task45Photo", "change", function( ) {
  setImageURL("task45Picture", getImageURL("task45Photo"));
});
onEvent("complete45", "click", function( ) {
  createRecord("images", {task45:(getImageURL("task45Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile5");
});

//Level 46
onEvent("chamomile5Next", "click", function( ) {
  setScreen("level46");
});
onEvent("task46Photo", "change", function( ) {
  setImageURL("task46Picture", getImageURL("task46Photo"));
});
onEvent("complete46", "click", function( ) {
  createRecord("images", {task46:(getImageURL("task46Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile6");
});

//Level 47
onEvent("chamomile6Next", "click", function( ) {
  setScreen("level47");
});
onEvent("task47Photo", "change", function( ) {
  setImageURL("task47Picture", getImageURL("task47Photo"));
});
onEvent("complete47", "click", function( ) {
  createRecord("images", {task47:(getImageURL("task47Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile7");
});

//Level 48
onEvent("chamomile7Next", "click", function( ) {
  setScreen("level48");
});
onEvent("task48Photo", "change", function( ) {
  setImageURL("task48Picture", getImageURL("task48Photo"));
});
onEvent("complete48", "click", function( ) {
  createRecord("images", {task48:(getImageURL("task48Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile8");
});

//Level 49
onEvent("chamomile8Next", "click", function( ) {
  setScreen("level49");
});
onEvent("task49Photo", "change", function( ) {
  setImageURL("task49Picture", getImageURL("task49Photo"));
});
onEvent("complete49", "click", function( ) {
  createRecord("images", {task49:(getImageURL("task49Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile9");
});

//Level 50
onEvent("chamomile9Next", "click", function( ) {
  setScreen("level50");
});
onEvent("task50Photo", "change", function( ) {
  setImageURL("task50Picture", getImageURL("task50Photo"));
});
onEvent("complete50", "click", function( ) {
  createRecord("images", {task50:(getImageURL("task50Picture"))}, function() {
    console.log("Image Uploaded");
  });
  setScreen("chamomile10");
});

//Chamomile Info
onEvent("chamomile10Next", "click", function( ) {
  setScreen("chamomileInfo");
});
onEvent("chamomileGrow", "click", function( ) {
  setScreen("chamomileHowtoGrow");
});
onEvent("nextButton5", "click", function( ) {
  setScreen("finishedScreen");
});
onEvent("nextButton5.5", "click", function( ) {
  setScreen("finishedScreen");
});

//Finished
onEvent("startOver","click", function() {
  setScreen("homeScreen");
});

