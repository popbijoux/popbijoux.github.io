//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SPECIFIC PAGES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//IF NOT PLACED ADD RIGHT BELOW PHONE SCREEN DIV
//DICTIONARY PAGE
var page04Dictionary = $("#page04Dictionary");
//LOCATION PAGE
var page02Location = $("#page02Location");
//PROFILE PAGE
var page03Profile = $("#page03Profile");
//CALL OUT PAGE
var pageCallOUt = $("#pageCallOut");
//CHANNELS PAGE
var page01Channels = $("#page01Channels");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//NAV BARS & NAV BUTTONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//holds all nav buttons
var topNav = $(".topNav");
//second Top Nav
var secondTopNav = $("#topNavSecondLayer");
//holds the visible nav buttons on the top row
var topButtonContainer = $(".topHorizontalButtonRow");
//bottomNav
var bottomNav = $(".navBarBottom");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS: TOP NAV
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//top nav buttons
var btnBackBlue = $(".buttonSelectionBackBlue");
var btnRedBack = $(".buttonRedBack");
//var btnsNotRedBack = $('div').not(".buttonRedBack");

var btnMegaphone = $(".buttonMegaphone");
var btnPlusserLogo = $(".buttonPlusserLogo");
var btnChannelWhite = $(".buttonChannelWhite");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS: BOTTOM NAV
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//bottom nav buttons
var btnWhiteDictionary = $(".buttonWhiteDictionary");
var btnCallOutLocationWhite = $(".buttonCallOutLocationWhite");
var btnHomeGirl = $(".buttonHomeGirl");
var btnLocation = $(".buttonLocationProfile");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS: CHANNEL PAGE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SECONDARY CHANNEL PAGE BUTTONS
var btnShowChannels = $(".buttonRoundChannelWhite");
var btnShowComments = $(".buttonRoundComments");
var btnViewAnimsWhite03 = $(".buttonViewAnimsWhiteThree");

var btnAddAnims = $(".buttonRoundVoiceToAnimWhite");
var animTitle = $("#animTitle")
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS PROFILE PAGE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//profile page, second page, bottom buttons
var btnContainerBottomWide = $(".buttonWide");
var btnSelectionBackWhite = $(".buttonSelectionBackWhite");
var btnChainBlue = $(".buttonChainBlue");
var btnChainWhite = $(".buttonChainWhite");
var btnSearchAnimsWhite = $(".buttonSearchAnimsWhite");
var btnSearchLaterAnimsWhite = $(".buttonSearchLaterAnimsWhite");
var btnRoundDictionaryWhite = $(".buttonRoundDictionaryWhite");
//profile page
//secondary page buttons
var btnMoreWhite = $(".buttonMoreWhite");//hidden
var btnMoreBlue = $(".buttonMoreBlue");//hidden
var btnSelectionBlue = $(".buttonSelectionBlue");//hidden
var btnSelectionWhite = $(".buttonSelectionWhite");//hidden
var animContainerChannels = $("#killingEyelinerSmallAnims");//hidden
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS: ANIMS CALL-OUT
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>an
//animCallOut
var btnPlayBlue = $(".buttonPlayBlue");
var btnStopRed = $(".buttonStopRed");
var btnDeleteGreen = $(".buttonDeleteGreen");
var btnVidChainBlue = $(".buttonVideoChainBlue");
var btnVidChainWhite = $(".buttonVideoChainWhite");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS CONTAINER TOP: CALL-OUT
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var callOutOneTop = $("#callOutOneTop");
var btnRoundVoiceToAnimBlue = $(".buttonRoundVoiceToAnimBlue");
var btnRoundVoiceToTextBlue = $(".buttonRoundVoiceToTextBlue");
var btnCloseRed = $(".buttonCloseRed");
var btnCloseBlue = $(".buttonCloseBlue");
//var btnCloseRedTwo = $(".buttonCloseRedTwo");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS CONTAINER BOTTOM: ANIMS-INFO
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var animsInfoOneBottom = $("#animsInfoOneBottom");
var btnRoundDictionaryBlue = $(".buttonRoundDictionaryBlue");
var btnRoundStarBlue = $(".buttonRoundStarBlue");
var btnRoundStarWhite = $(".buttonRoundStarWhite");
var btnNextBlueOne = $(".buttonNextBlueOne");
var btnNextBlueTwo = $(".buttonNextBlueTwo");
var btnNextBlueThree = $(".buttonNextBlueThree");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTON CONTAINER BOTTOM: DICTIONARY
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var dictionaryOneBottom = $(".dictionaryOneBottom");
var btnRoundDictionaryBlue = $(".buttonRoundDictionaryBlue");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTON CONTAINER BOTTOM: CALL OUT PAGE 02
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var btnContainerBottom  = $(".buttonContainerBottom ");
var callOutTwoBottom = $("#callOutTwoBottom");
var btnRoundDictionaryBlue = $(".buttonChatWithCallOut");
var btnChatWithFriend = $(".buttonChatWithFriend");
var btnChatWithFriendConfirmation = $(".buttonChatWithFriendConfirmation");
var btnChatWithChannel = $(".buttonChatWithChannel");
var btnChatWithChannelConfirmation = $(".buttonChatWithChannelConfirmation");
var btnChatWithCallOut = $(".buttonChatWithCallOut");
var btnChatWithCallOutConfirmation = $(".buttonChatWithCallOutConfirmation");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTON CONTAINER BOTTOM: CALL OUT PAGE 01
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var callOutOneBottom = $("#callOutOneBottom");
var btnCameraBlue = $(".buttonCameraBlue");
var btnUploadBlue = $(".buttonUploadBlue");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL PAGE ELEMENTS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var animCallOut = $(".animContainerCallOut");
//SMALL STRIP THAT SHOWS ALL CLICKABLE CHANNELS
var smallChannelStrip = $("#smallChannelStrip");
var smlVidPoster = $(".unitSmallVidPoster");
var vidPosterContainer = $(".videoPosterContainer");
var vidTitleText = $(".vidTitleText");


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: KILLING THE EYELINER CHANNEL
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Killing The Eyeliner Game
var channelPosterEyeliner = $("#eyelinerGameChannelPoster");
var vidPosterEyeliner = $("#killingTheEyelinerPosterLg");
var videoKillingTheEyelinerGame = $("#videoKillingTheEyelinerGame");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: BEST SPEECHES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Speeches
var channelPosterSpeeches = $("#bestSpeechesChannelPoster");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: PARIS IS BURNING
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Paris is Burning
var channelPosterParis = $("#parisIsBurningChannelPoster");
var channelParisIsBurningAllPosters = $("#parisIsBurningAllVideoPosters");
var videoParisIWentToABall = $("#videoParisIWentToABall");
var videoParisIsBurningICameISaw = $("#videoParisIsBurningICameISaw");
var videoParisIsBurningGetIntoTheSuits = $("#videoParisIsBurningGetIntoTheSuits");
var videoParisIsBurningSchool = $("#videoParisIsBurningSchool");
var vidPosterParisIWentToABall = $("#vidPosterParisIWentToABall");
var vidPosterParisBusinessman = $("#vidPosterParisBusinessman");
var vidPosterParisICameISaw = $("#vidPosterParisICameISaw");
var vidPosterParisSchool = $("#vidPosterParisSchool");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: TOWNHALLS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Townhalls
var channelPosterTownhalls = $("#townhallsChannelPoster");
var vidPosterTownhalls = $("#townhallsPostersLg");
var videoTownhallsJustSayNo = $("#videoTownhallsJustSayNo");
var vidPosterTownhallsSpecialInvestigation = $("#vidPosterTownhallsSpecialInvestigation");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: SIXTIES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Sixties
var channelPosterSixties = $("#theSixtiesChannelPoster");
var vidPosterSixties = $("#sixtiesvidPostersLg");
var vidPosterSixtiesMLKAllMen = $("#vidPosterSixtiesMLKAllMen");//done
var vidPosterSixtiesJackieMourning = $("#vidPosterSixtiesJackieMourning");//done
var vidPosterSixtiesKennedySpeech = $("#vidPosterSixtiesKennedySpeech");//done
var vidPosterSixtiesJohnJr = $("#vidPosterSixtiesJohnJr");//done
var vidPosterSixtiesWarhol = $("#vidPosterSixtiesWarhol");//done
//var vidPosterSixtiesCandyDarling = $("#vidPosterSixtiesCandyDarling");
var videoSixtiesMLKThisNation = $("#videoSixtiesMLKThisNation");//done
//var videoSixtiesFreedomRiders = $("#videoSixtiesFreedomRiders");
var videoSixtiesJackieMourning = $("#videoSixtiesJackieMourning");//done
var videoSixtiesJohnJrSalutes = $("#videoSixtiesJohnJrSalutes");//done
//var videoSixtiesKennedyParade = $("#videoSixtiesKennedyParade");
var videoSixtiesKennedySpeech = $("#videoSixtiesKennedySpeech");//done
var videoSixtiesWarhol = $("#videoSixtiesWarhol");//done
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: LES SIXTIES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Les Sixties
var channelPosterLesSixties =  $("#lesSixtiesFranceChannelPoster");
var vidPosterLesSixties = $("#lesSixtiesFrancevidPostersLg");
var vidPosterLesSixtiesGainsbourgBardot = $("#vidPosterLesSixtiesGainsbourgBardot");
var vidPosterLesSixtiesFranceGall = $("#vidPosterLesSixtiesFranceGall");
var videoLesSixtiesBardotGainsbourg = $("#videoLesSixtiesBardotGainsbourg");
var videoLesSixtiesFranceGall = $("#videoLesSixtiesFranceGall");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL: AIRPORT PROTESTS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Airport
var videoAirportWeAreThePeople = $("#videoAirportWeAreThePeople");
var videoAirportNoBanNoWall = $("#videoAirportNoBanNoWall");
var videoAirportTearItDown = $("#videoAirportTearItDown");
var videoAirportTearItDown_01 = $("#videoAirportTearItDown");
var videoAirportTearItDown_02 = $("#videoAirportTearItDown");
var channelPosterAirports = $("#airportProtestsChannelPoster");
var channelAirportProtests = $("#channelAirportProtests");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//PROFILE PAGE CLICK ANY IMAGE NAVIGATE TO SECONDARY PAGE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//img divs
var profAnims01 = $("#profileAnims01");
var profAnims02 = $("#profileAnims02");
var profAnims03 = $("#profileAnims03");
var profAnims04 = $("#profileAnims04");
var profAnims05 = $("#profileAnims05");
var profAnims06 = $("#profileAnims06");
var profAnims07 = $("#profileAnims07");
var profAnims08 = $("#profileAnims08");

var secondContainerBottom = $("#secondContainerBottom");
var textMarquee = $(".testMarqueeRight");

var navBarBottomSecond = $(".navBarBottomSecondary");
var btnTextWhite = $(".buttonTextWhite");
var animTextBox = $("#animTextBox");

$( function() {
   $( ".draggableAnim" ).draggable();
 } );

 $( function() {
   $( ".resizable" ).resizable();
 } );


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ONCE PAGE LOADS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//when page loads
//only the channel page is visible
$(document).ready(function(){
page01Channels.show().find(vidPosterContainer).hide();
animCallOut.hide();
page04Dictionary.hide().find("*").hide();
//secondTopNav.hide();
page02Location.hide().find("*").hide();
page03Profile.hide().find("*").hide();
navBarBottomSecondary.hide().find("*").hide();
secondTopNav.show();



});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON CHANNEL BUTTON >>> SHOW CHANNEL PAGE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//click on small channel button
//toggle class show hide channels
btnShowChannels.click(function() {
smallChannelStrip.toggle();
animCallOut.hide();

});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON PLUSSER LOGO >>> HIDE OTHER BUTTONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnPlusserLogo.click(function() {
btnChannelWhite.toggle();
btnMegaphone.toggle();
bottomNav.toggle();
btnBackBlue.toggle();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON ADD ANIMS >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnAddAnims.click(function() {
animCallOut.show().not("img").show().css("background-color", "transparent");
smallChannelStrip.hide();
topNav.hide();
animCallOut.show().not("img").show().find(animTitle).hide().find(animTextBox).show();
callOutOneBottom.show().find("*").hide();
btnNextBlueOne.show();
callOutOneTop.show().find(".buttonRoundVoiceToTextWhite, .buttonRoundVoiceToAnimBlue, .buttonCloseRed ").show();
//animTextBox.show();
vidTitleText.hide();


});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON MEGAPHONE BUTTONS >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnMegaphone.click(function() {
page01Channels.hide().find("*").hide();
page04Dictionary.hide().find("*").hide();
page02Location.hide().find("*").hide();
page03Profile.hide().find("*").hide();
topNav.hide();
animCallOut.css("background-color", "rgba(0,0,0,0.6)");
animCallOut.show().find(".buttonRoundStarWhite, .buttonRoundStarBlue, .buttonChainWhite, .buttonChainBlue, #animTitle").hide().find(".buttonContainerBottom").show().find("#animTextBox").show();
callOutOneTop.show().find(".buttonRoundVoiceToTextWhite, .buttonRoundVoiceToAnimBlue, .buttonCloseRed ").show();


//callOutOneBottom.show();

btnCameraBlue.show();
btnUploadBlue.show();
btnNextBlueOne.show();
//btnVoiceAnimBlue.show();
btnVoiceTextWhite.show();
//btnRoundStarWhite.hide();
//btnRoundStarBlue.hide();
//btnChainWhite.hide();
//btnChainBlue.hide();
//callOutOneTop.show().find(buttonCloseRedTwo).show();
animTitle.hide();
//animTextBox.show();


});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//NEXT BLUE BUTTON ONE >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnNextBlueOne.click(function() {
btnCameraBlue.hide();
btnUploadBlue.hide();
btnNextBlueOne.hide();
btnNextBlueTwo.show();
btnChatWithFriend.show();
btnChatWithChannel.show();
btnChatWithCallOut.show();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//NEXT BLUE BUTTON TWO>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnNextBlueTwo.click(function() {
btnNextBlueTwo.hide();
btnNextBlueThree.show();
btnChatWithFriend.hide();
btnChatWithFriendConfirmation.hide();
btnChatWithChannel.hide();
btnChatWithChannelConfirmation.hide();
btnChatWithCallOut.hide();
btnChatWithCallOutConfirmation.hide();

});




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHAT WITH FRIEND BUTTON >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnChatWithFriend.click(function() {
btnChatWithFriend.toggle();
//secondTopNav.hide();
btnChatWithFriendConfirmation.toggle();

});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ADD TO CHANNEL BUTTON >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnChatWithChannel.click(function() {
btnChatWithChannel.toggle();
//secondTopNav.hide();
btnChatWithChannelConfirmation.toggle();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ADD TO CALL OUT >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
btnChatWithCallOut.click(function() {
btnChatWithCallOut.toggle();
//secondTopNav.hide();
btnChatWithCallOutConfirmation.toggle();

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTON CHAIN WHITE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnRoundStarWhite.click(function() {
btnRoundStarWhite.hide();
btnRoundStarBlue.toggle();

});



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTON CLOSE RED >>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Plusser Logo
//hides all other nav buttons
  btnCloseRed.click(function() {
  page01Channels.show().find("*").show();
  page04Dictionary.hide().find("*").hide();
  //secondTopNav.hide();
  page02Location.hide().find("*").hide();
  page03Profile.hide().hide("*").hide();
  topNav.show();
  animCallOut.hide();
  smallChannelStrip.hide();


  });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SEE SMALL CHANNELS>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Channel Nav Button
//shows channel page, hides all others
btnChannelWhite.click(function() {
page01Channels.show().find("*").show();
animCallOut.hide();
page04Dictionary.hide().find("*").hide();
//secondTopNav.show();
page02Location.hide().find("*").hide();
page03Profile.hide().find("*").hide();
  smallChannelStrip.hide();
  secondTopNav.show();

});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//WHITE DICTIONARY BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking on the Dictionary Nav Button
//shows Dictionary page, hides all others
btnWhiteDictionary.click(function() {
page01Channels.hide().find("*").hide();
animCallOut.hide();
page04Dictionary.show().find("*").show();
secondTopNav.toggle();
page02Location.hide().find("*").hide();
page03Profile.hide().find("*").hide();

});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//LOCATION BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnLocation.click(function() {
page01Channels.hide().find("*").hide();
animCallOut.hide();
page04Dictionary.hide().find("*").hide();
secondTopNav.toggle();
page02Location.show().find("*").show();
page03Profile.hide().find("*").hide();

});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//PROFILE BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnHomeGirl.click(function() {
page01Channels.hide().find("*").hide();
animCallOut.hide();
page04Dictionary.hide().find("*").hide();
secondTopNav.toggle();
page02Location.hide().find("*").hide();
page03Profile.show().find("*").show();


});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: KILLING THE EYELINER CHANNEL
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//killing the eyeliner game
//clicking on small channel image
channelPosterEyeliner.click(function() {
vidPosterEyeliner.show().siblings().hide().find("#smallChannelStrip").hide();
killingEyelinerSmallAnims.show();
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: PARIS IS BURNING
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//paris is burning
//small channels
//paris is burning all posters
channelPosterParis.click(function() {
channelParisIsBurningAllPosters.show().siblings().not("#smallChannelStrip").hide();

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: TOWNHALLS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Townhalls
//Townhalls small channel
//Townhalls Channel All Videos
channelPosterTownhalls.click(function() {
vidPosterTownhalls.show().siblings().not("#smallChannelStrip").hide();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: SIXTIES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//the sixties
channelPosterSixties.click(function() {
vidPosterSixties.show().siblings().not("#smallChannelStrip").hide();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: LES SIXTIES
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//les sixties
//les Sixties Channel Poster
//les Sixties Video Poster
channelPosterLesSixties.click(function() {
vidPosterLesSixties.show().siblings().not("#smallChannelStrip").hide();

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CHANNEL-CLICK: AIRPORT PROTESTS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
channelPosterAirports.click(function() {
channelAirportProtests.show().siblings().not("#smallChannelStrip").hide();

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//PROFILE PAGE SELECTION BACK WHITE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//profile page
//returns to first layer of page
      btnBackBlue.click(function() {
      page03Profile.show().children().show();
      topNav.show().find(secondTopNav).hide();
      btnSelectionBlue.hide();
      btnSelectionWhite.hide();
      btnMoreWhite.hide();
      btnMoreBlue.hide();
      btnBackBlue.hide();
      btnWhiteDictionary.show();
      btnCallOutLocationWhite.show();
      btnHomeGirl.show();
      btnShowChannels.hide();
      btnLocation.show();

      bottomNav.show();
      topButtonContainer.show();




    btnViewAnimsWhite03.hide();
     btnAddAnims.hide();

      //topButtonContainer.hide();
      animCallOut.hide().find(animTextBox).show().find(animTitle).hide().find(".buttonContainerBottom").hide();

//      if ( $("img.resizableAnim:visible").length <= 3 )  {
//              $("#videoSaintEtienne").show();
//              $("#videoSaintEtienne").siblings().hide();
//      }


});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//PROFILE PAGE CLICK ANY IMAGE NAVIGATE TO SECONDARY PAGE
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//clicking anywhere on the first page
$("#profileAnims01, #profileAnims02, #profileAnims03, #profileAnims04, #profileAnims05, #profileAnims06, #profileAnims07, #profileAnims08").click(function() {
//if profile button is visible
if( btnHomeGirl.is(':visible') ) {
        $(this).siblings().hide();
        btnBackBlue.show();
        btnMoreWhite.show();
        btnSelectionBlue.show();
        btnWhiteDictionary.hide();
        btnCallOutLocationWhite.hide();
        btnHomeGirl.hide();
        btnLocation.hide();
        topButtonContainer.hide();

        }

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON SELECTION BUTTON, HIDE OTHER IMAGES, ONE AT AT TIME
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnSelectionBlue.click(function() {
      if( profAnims08.is(':visible') ) {//paris is burning button
      profAnims01.show();
      profAnims08.hide();
    } else if( profAnims01.is(':visible') )  {
      profAnims02.show();
      profAnims01.hide();
    } else if( profAnims02.is(':visible') )  {
      profAnims03.show();
      profAnims02.hide();
    } else if( profAnims03.is(':visible') )  {
      profAnims04.show();
      profAnims03.hide();
    } else if( profAnims04.is(':visible') )  {
      profAnims05.show();
      profAnims04.hide();
    } else if( profAnims05.is(':visible') )  {
      profAnims06.show();
      profAnims05.hide();
    } else if( profAnims06.is(':visible') )  {
      profAnims07.show();
      profAnims06.hide();
    } else if( profAnims07.is(':visible') )  {
      profAnims08.show();
      profAnims07.hide();
    }

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON MORE INFORMATION WHITE BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnMoreWhite.click(function() {
btnMoreBlue.show();
btnMoreWhite.hide();
btnNextBlueOne.hide();
topNav.hide();
//btnRoundStarWhite.show();


//btnRoundStarWhite.show();
//btnRoundStarBlue.hide();
btnCameraBlue.hide();
btnUploadBlue.hide();
btnChainBlue.show();
btnSearchAnimsWhite.show();
btnSelectionBlue.hide();
callOutOneBottom.show().find(".buttonChatWithCallOut, .buttonChatWithCallOutConfirmation, .buttonChatWithFriend, .buttonChatWithFriendConfirmation, .buttonChatWithChannel, .buttonChatWithChannelConfirmation, .buttonNextBlueTwo, .buttonNextBlueOne, .buttonNextBlueThree ").hide();
btnMoreBlue.show();
btnCloseBlue.show();
 animTitle.show();

callOutOneTop.show().find(".buttonRoundVoiceToAnimBlue, .buttonRoundVoiceToTextWhite, .buttonCloseRed").hide();
animCallOut.show().find( animTextBox).hide();


if (  btnRoundStarWhite.is(":visible") ) {
  btnRoundStarBlue.hide();
} else {
  btnRoundStarBlue.show();
}



if (  profAnims07.is(":visible") ) {
tearItDown.show().siblings("img").hide();
profAnims07.hide();
animTitle.attr('value', 'TEAR IT DOWN');

    } else if (  profAnims08.is(":visible") ) {
    parisIsBurningButton.show().siblings("img").hide();
    profAnims08.hide();
    animTitle.attr('value', 'PARIS IS BURNING');

  } else if (  profAnims01.is(":visible") ) {
      muslimBan.show().siblings("img").hide();
      profAnims01.hide();
      animTitle.attr('value', 'MUSLIM BAN');
      } else if (  profAnims02.is(":visible") ) {
      killingTheEyelinerGame.show().siblings("img").hide();
      profAnims02.hide();
      animTitle.attr('value', 'KILLING THE EYELINER GAME');

    } else if (  profAnims03.is(":visible") ) {
      blockTheWall.show().siblings("img").hide();
      profAnims03.hide();
        animTitle.attr('value', 'BLOCK THE WALL');
    } else if (  profAnims04.is(":visible") ) {
      ourStory.show().siblings("img").hide();
      profAnims04.hide();
      animTitle.attr('value', 'OUR STORY');

    } else if (  profAnims05.is(":visible") ) {
      noBaloons.show().siblings("img").hide();
      profAnims05.hide();
      animTitle.attr('value', 'NO');

    } else if (  profAnims06.is(":visible") ) {
      iCameISawIConquered.show().siblings("img").hide();
      profAnims06.hide();
      animTitle.attr('value', 'I CAME, I SAW, I CONQUERED');

    }
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//RED BACK BUTTON CLICK
//HIDE THE VIDEO AND SHOW THE ANIMATION
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnRedBack.click(function() {
        btnSearchAnimsWhite.toggle();
        btnChainBlue.toggle();
        btnRoundStarWhite.toggle();
        //btnMoreWhite.toggle();
        //btnMoreBlue.toggle();
        //btnSelectionBlue.toggle();
        //btnMoreWhite.toggle();
        btnRedBack.toggle();
        //btnBackBlue.toggle();
        btnMoreBlue.toggle();
        //
        topNav.toggle();
        bottomNav.toggle();
        topButtonContainer.show().find(".buttonChannelWhite, .buttonPlusserLogo, .buttonMegaphone").toggle();

        secondTopNav.toggle();
        callOutOneTop.toggle();
        //hide the current page
        page03Profile.toggle().find("*").toggle();



//done video reverts back to animation BUT buttons need to be
//figured out further
 if ( videoParisIWentToABall.is(":visible") ) {
        animCallOut.show();
        parisIsBurningButton.show();
        //these steps show how to connect specific videos
        //show channel page
        page01Channels.hide();
        //select the channel where the video is located within that page
        channelParisIsBurningAllPosters.hide().find("*").hide();
        //select actual video
        videoParisIWentToABall.hide().siblings().hide();

  }
  //done video reverts back to animation BUT buttons need to be
  //figured out further

else if ( videoAirportTearItDown_01.is(":visible") ) {
        animCallOut.show();
        tearItDown.show();
        //show channel page
        page01Channels.hide();
        //select the channel where the video is located within that page
        channelAirportProtests.hide().find("*").hide();
        //select actual video
        videoAirportTearItDown_01.hide().siblings().hide();

}



else if ( videoAirportNoBanNoWall.is(":visible") ) {
        animCallOut.show();
        muslimBan.show();
        page01Channels.hide();
        //select the channel where the video is located within that page
        channelAirportProtests.hide().find("*").hide();
        //select actual video
        videoAirportNoBanNoWall.hide().siblings().hide();
    }
//come back here and re-org

else if (  videoKillingTheEyelinerGame.is(":visible") ) {
        animCallOut.show();
        killingTheEyelinerGame.show();
        page01Channels.hide();
        //select the channel where the video is located within that page
        vidPosterEyeliner.hide().find("*").hide();
        //select actual video
        videoKillingTheEyelinerGame.hide().siblings().hide();

   }

   //come back here and re-org
else if ( videoAirportTearItDown_02.is(":visible") ) {
     animCallOut.show();
     blockTheWall.show();
     page01Channels.hide();
     //select the channel where the video is located within that page
      channelAirportProtests.hide().find("*").hide();
     //select actual video
      videoAirportTearItDown_02.hide().siblings().hide();

   }


   else if ( videoAirportWeAreThePeople.is(":visible") ) {
     animCallOut.show();
     ourStory.show();
     page01Channels.hide();
     //select the channel where the video is located within that page
      channelAirportProtests.hide().find("*").hide();
     //select actual video
      videoAirportWeAreThePeople.hide().siblings().hide();
   }

   else if ( videoTownhallsJustSayNo.is(":visible") ) {
     animCallOut.show();
     noBaloons.show();
     page01Channels.hide();
     //select the channel where the video is located within that page
      vidPosterTownhalls.hide().find("*").hide();
     //select actual video
      videoTownhallsJustSayNo.hide().siblings().hide();



   }



   else if (  videoParisIsBurningICameISaw.is(":visible") ) {
     animCallOut.show();
     iCameISawIConquered.show();
     page01Channels.show();
     //select the channel where the video is located within that page
     channelParisIsBurningAllPosters.hide().find("*").hide();
     //select actual video
     videoParisIsBurningICameISaw.hide().siblings().hide();
   }

});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BLUE CHAIN CLICK
//THIS IS HOW YOU SHOW A VIDEO CONNECTED TO AN ANIMATION!!!!!!!!!!!!!!!!!!!!!
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnChainBlue.click(function() {

  btnSearchAnimsWhite.toggle();
  //btnMoreWhite.toggle();
  btnMoreBlue.toggle();
  btnSelectionBlue.toggle();
  btnRedBack.toggle();
  btnChainBlue.toggle();
   //btnBackBlue.toggle();
   btnRoundStarWhite.toggle();


  topNav.toggle();
   bottomNav.toggle();
   topButtonContainer.toggle().find(".buttonChannelWhite, .buttonPlusserLogo, .buttonMegaphone").toggle();

   secondTopNav.toggle();

   callOutOneTop.toggle();
   //hide the current page
 page03Profile.toggle().find("*").toggle();



 if (  parisIsBurningButton.is(":visible") ) {
  animCallOut.hide();
    parisIsBurningButton.hide();
  //these steps show how to connect specific videos
    //show channel page
    page01Channels.show();
    //select the channel where the video is located within that page
    channelParisIsBurningAllPosters.show().find("*").show();
    //select actual video
    videoParisIWentToABall.show().siblings().hide();

  }


  else if (  tearItDown.is(":visible") ) {
  animCallOut.hide();
  tearItDown.hide();


  page01Channels.show();
  //select the channel where the video is located within that page
   channelAirportProtests.show().find("*").show();
  //select actual video
   videoAirportTearItDown_01.show().siblings().hide();

}


else if (  muslimBan.is(":visible") ) {
    animCallOut.hide();
    muslimBan.hide();
    //profAnims01.show();
    page01Channels.show();
    //select the channel where the video is located within that page
     channelAirportProtests.show().find("*").show();
    //select actual video
     videoAirportNoBanNoWall.show().siblings().hide();
    }


    else if (  killingTheEyelinerGame.is(":visible") ) {
   animCallOut.hide();
   killingTheEyelinerGame.hide();
   page01Channels.show();
   //select the channel where the video is located within that page
     vidPosterEyeliner.show().find("*").show();
   //select actual video
     videoKillingTheEyelinerGame.show().siblings().hide();

   }

   else if (  blockTheWall.is(":visible") ) {
     animCallOut.hide();
     blockTheWall.hide();
     page01Channels.show();
     //select the channel where the video is located within that page
      channelAirportProtests.show().find("*").show();
     //select actual video
      videoAirportTearItDown_02.show().siblings().hide();

   }


   else if (  ourStory.is(":visible") ) {
     animCallOut.hide();
     ourStory.hide();
     page01Channels.show();
     //select the channel where the video is located within that page
      channelAirportProtests.show().find("*").show();
     //select actual video
      videoAirportWeAreThePeople.show().siblings().hide();
   }

   else if (  noBaloons.is(":visible") ) {
     animCallOut.hide();
     noBaloons.hide();
     profAnims05.show();
     page01Channels.show();
     //select the channel where the video is located within that page
      vidPosterTownhalls.show().find("*").show();
     //select actual video
      videoTownhallsJustSayNo.show().siblings().hide();



   }



   else if (  iCameISawIConquered.is(":visible") ) {
     animCallOut.hide();
     iCameISawIConquered.hide();
     page01Channels.show();
     //select the channel where the video is located within that page
     channelParisIsBurningAllPosters.show().find("*").show();
     //select actual video
     videoParisIsBurningICameISaw.show().siblings().hide();
   }

});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//NEXT: CREATE A CLICK EVENT PER VIDEO AND PER ANIMATION SINCE A VIDEO WILL HAVE MORE THAN ONE ANIMATION CONNECTED TO IT.

//CREATE BACK BUTTON RED

//CREATE SEPARATE VARIABLES FOR EACH ONE SO THAT THERE IS NO CONFUSION WHEN THE BACK BUTTON IS CLICKED.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ANIM TITLE CLICK
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

animTitle.click(function() {
btnSearchAnimsWhite.hide();
btnMoreWhite.show();
btnMoreBlue.hide();
btnSelectionBlue.show();
topNav.show();
 bottomNav.show();
 topButtonContainer.hide();
 callOutOneTop.show();
   btnBackBlue.show();
if (  tearItDown.is(":visible") ) {
animCallOut.hide();
tearItDown.hide();
profAnims07.show();
    } else if (  parisIsBurningButton.is(":visible") ) {
  animCallOut.hide();
    parisIsBurningButton.hide();
    profAnims08.show();
  } else if (  muslimBan.is(":visible") ) {
      animCallOut.hide();
      muslimBan.hide();
      profAnims01.show();
      } else if (  killingTheEyelinerGame.is(":visible") ) {
      animCallOut.hide();
      killingTheEyelinerGame.hide();
      profAnims02.show();
    } else if (  blockTheWall.is(":visible") ) {
      animCallOut.hide();
      blockTheWall.hide();
      profAnims03.show();
    } else if (  ourStory.is(":visible") ) {
      animCallOut.hide();
      ourStory.hide();
      profAnims04.show();
    } else if (  noBaloons.is(":visible") ) {
      animCallOut.hide();
      noBaloons.hide();
      profAnims05.show();
    } else if (  iCameISawIConquered.is(":visible") ) {
      animCallOut.hide();
      iCameISawIConquered.hide();
      profAnims06.show();
    }
});
//>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON MORE INFORMATION BLUE BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


btnMoreBlue.click(function() {
btnSearchAnimsWhite.hide();
btnMoreWhite.show();
btnMoreBlue.hide();
btnSelectionBlue.show();
topNav.show();
 bottomNav.show();
 topButtonContainer.hide();
 callOutOneTop.show();

 //btnCloseBlue.hide();




//animCallOut.hide();

if (  tearItDown.is(":visible") ) {
animCallOut.hide();
tearItDown.hide();
profAnims07.show();
    } else if (  parisIsBurningButton.is(":visible") ) {
  animCallOut.hide();
    parisIsBurningButton.hide();
    profAnims08.show();
  } else if (  muslimBan.is(":visible") ) {
      animCallOut.hide();
      muslimBan.hide();
      profAnims01.show();
      } else if (  killingTheEyelinerGame.is(":visible") ) {
      animCallOut.hide();
      killingTheEyelinerGame.hide();
      profAnims02.show();
    } else if (  blockTheWall.is(":visible") ) {
      animCallOut.hide();
      blockTheWall.hide();
      profAnims03.show();
    } else if (  ourStory.is(":visible") ) {
      animCallOut.hide();
      ourStory.hide();
      profAnims04.show();
    } else if (  noBaloons.is(":visible") ) {
      animCallOut.hide();
      noBaloons.hide();
      profAnims05.show();
    } else if (  iCameISawIConquered.is(":visible") ) {
      animCallOut.hide();
      iCameISawIConquered.hide();
      profAnims06.show();
    }
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CLICK ON WHITE SELECTION BUTTON
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnSelectionWhite.click(function() {
btnMoreBlue.hide();
btnMoreWhite.show();
btnSelectionBlue.show();
btnSelectionWhite.hide();
if (  tearItDown.is(":visible") ) {
animCallOut.hide();
tearItDown.hide();
profAnims07.show();
    } else if (  parisIsBurningButton.is(":visible") ) {
    animCallOut.hide();
    parisIsBurningButton.hide();
    profAnims08.show();
  } else if (  muslimBan.is(":visible") ) {
      animCallOut.hide();
      muslimBan.hide();
      profAnims01.show();
      } else if (  killingTheEyelinerGame.is(":visible") ) {
      animCallOut.hide();
      killingTheEyelinerGame.hide();
      profAnims02.show();
    } else if (  blockTheWall.is(":visible") ) {
      animCallOut.hide();
      blockTheWall.hide();
      profAnims03.show();
    } else if (  ourStory.is(":visible") ) {
      animCallOut.hide();
      ourStory.hide();
      profAnims04.show();
    } else if (  noBaloons.is(":visible") ) {
      animCallOut.hide();
      noBaloons.hide();
      profAnims05.show();
    } else if (  iCameISawIConquered.is(":visible") ) {
      animCallOut.hide();
      iCameISawIConquered.hide();
      profAnims06.show();
    }
});


//LIST OF ALL ANIMATIONS USED IN THE VOICE AREA

var blockTheWall = $("#blockTheWall_001");
var button1960s = $("#button1960s_002");
var buttonPolitics = $("#buttonPolitics_003");
var buttonWeAreThePeople = $("#buttonwearethepeople_004");
var eggsAndBacon = $("#eggsandbacon_005");
var hotDog = $("#hotdog_006");
var iCameISawIConquered = $("#IcameIsawIconquered_007");
var iCame = $("#Icame_008");
var iSaw = $("#Isaw_009");
var jackieFlowers = $("#jackie_010");
var justSayNo = $("#justsayno_011");
var killingTheEyelinerGame = $("#killingtheeyelinergame_012");
//13 missing
var noBaloons = $("#nobaloons_014");
var nope = $("#nope_015");
var muslimBan = $("#muslimBan_016");
var tearItDown = $("#tearitdown_017");
var toast = $("#toast_018");
var weGotAStory = $("#wegotastory_019");
var ourStory = $("#ourStory_020");
var parisIsBurningButton = $("#parisIsBurningButton_021");
var sandwich = $("#sandwich_022");
var townhallsButton = $("#townHallsButton_023");
var weAreThePeopleButton = $("#WeAreThePeopleButton_024");
//24-27 missing

$( function() {
  $( ".drag" ).draggable();
} );

// Configure artyom
var UserDictation = artyom.newDictation({
    continuous: true, // Don't stop never because i have https connection
    onResult: function (text) {
        /**
         * Set the recognized text as value of the text input
        **/
        $("#artyom-redirect-output").val(text);
    },
    onStart: function () {
        console.log("Dictation started by the user");
    },
    onEnd: function () {
        alert("Dictation stopped by the user");
    }
});

var btnVoiceAnimWhite = $(".buttonRoundVoiceToAnimWhite");
var btnVoiceAnimBlue = $(".buttonRoundVoiceToAnimBlue");
var btnVoiceTextWhite = $(".buttonRoundVoiceToTextWhite");
var btnVoiceTextBlue = $(".buttonRoundVoiceToTextBlue");

btnAnimWhite.click(function () {
    btnAnimBlue.show();
    btnAnimWhite.hide();
});

btnAnimBlue.click(function () {
    btnAnimWhite.show();
    btnAnimBlue.hide();
});

// Start recognition with the Recognize text button
btnVoiceTextWhite.click(function () {
    // Start recognition
    UserDictation.start();

    btnVoiceTextBlue.show();
    btnVoiceTextWhite.hide();
});

// Stop recognition with the Stop recognition button
btnVoiceTextBlue.click(function () {
    // Stop recognition
    UserDictation.stop();

    btnVoiceTextWhite.show();
    btnVoiceTextBlue.hide();
});
//end of artyom


//annyang start
if (annyang) {
// Let's define our first command. First the text we expect, and then the function it should call
var commands = {
'block (the wall)': function() {
  $("#blockTheWall_001").show().delay(4000).fadeOut();
},

'no wall': function() {
  $("#blockTheWall_001").show().delay(4000).fadeOut();
},


'sixties': function() {
$("#button1960s_002").show().delay(10000).fadeOut();
                            },

'eggs (and bacon)': function() {
$("#eggsandbacon_005").show().delay(12000).fadeOut();
                          },

'bacon': function() {
$("#eggsandbacon_005").show().delay(12000).fadeOut();
                        },

'(no) ban': function() {
$("#muslimBan_016").show().delay(8000).fadeOut();
                        },

'nope': function() {
$("#nope_015").show().delay(12000).fadeOut();
                        },

'toast': function() {
$("#toast_018").show().delay(12000).fadeOut();
                      },

'(our) story': function() {
$("#ourStory_020").show().delay(8000).fadeOut();
                      },

'just say (no)': function() {
$("#justsayno_011").show().delay(8000).fadeOut();
                      },

'politics': function() {
$("#buttonPolitics_003").show().delay(8000).fadeOut();
                      },

'(we are) the people': function() {
$("#buttonwearethepeople_004").show().delay(8000).fadeOut();
                  },

'hot dog': function() {
$("#hotdog_006").show().delay(8000).fadeOut();
                  },

'I came I saw I conquered': function() {
$("#IcameIsawIconquered_007").show().delay(8000).fadeOut();
                },

'I came': function() {
$("#Icame_008").show().delay(8000).fadeOut();
                  },

'I saw': function() {
$("#Isaw_009").show().delay(8000).fadeOut();
                },

'jackie': function() {
$("#jackie_010").show().delay(8000).fadeOut();
                },

              'jackie': function() {
              $("#jackie_010").show().delay(8000).fadeOut();
                              },

'killing the eyeliner game': function() {
$("#killingtheeyelinergame_012").show().delay(8000).fadeOut();
              },

'no way': function() {
$("#nobaloons_014").show().delay(8000).fadeOut();
                },

'tear it down': function() {
$("#tearitdown_017").show().delay(8000).fadeOut();
              },
  //------------------
'we got a story': function() {
$("#wegotastory_019").show().delay(8000).fadeOut();
                },

'killing (the eyeliner game)': function() {
$("#killingtheeyelinergame_012").show().delay(8000).fadeOut();
              },

'sandwich': function() {
$("#sandwich_022").show().delay(8000).fadeOut();
                },

'town halls': function() {
$("#townHallsButton_023").show().delay(8000).fadeOut();
              },

'we are the people': function() {
$("#WeAreThePeopleButton_024").show().delay(8000).fadeOut();
              },

                      };


// Add our commands to annyang
annyang.addCommands(commands);
// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}
//annyang end


//below is just a test to check if vid posters work. (Yes it does:)
//$("#vidPosterLargeKilling").click( function (){

//  $(".videoPosterContainer").hide();
//});

/*var btnAnimWhite = $(".buttonRoundVoiceToAnimWhite");
var btnAnimBlue = $(".buttonRoundVoiceToAnimBlue");
var btnVoiceTextWhite = $(".buttonRoundVoiceToTextWhite");
var btnVoiceTextBlue = $(".buttonRoundVoiceToTextBlue");

btnAnimWhite.click(function () {
    btnAnimBlue.show();
    btnAnimWhite.hide();
});

btnAnimBlue.click(function () {
    btnAnimWhite.show();
    btnAnimBlue.hide();
});*/
