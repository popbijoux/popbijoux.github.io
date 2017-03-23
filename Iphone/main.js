
  $( function() {
    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
      drag: function( event, ui ) {
        $( this )
          .addClass( ".removeImg" );
      }
    });
  } );

var canvas;

$(function () {
    canvas = window._canvas = new fabric.Canvas('canvas');
    canvas.backgroundColor = '';
    canvas.isDrawingMode= 1;
    canvas.freeDrawingBrush.color = "white";
    canvas.freeDrawingBrush.width = 6;
    canvas.renderAll();

document.getElementById('colorpicker').addEventListener('click', function (e) {
        console.log(e.target.value);
        canvas.freeDrawingBrush.color = e.target.value;
    });
});


function handleRemove() {
canvas.clear().renderAll(); // Here is your clear canvas function
}



$(".buttonTextWhite").click(function() {
  $(".buttonTextBlue").show();
  $(".buttonTextWhite").hide();
    $("textarea").show();
 $(".buttonColumnRightTop").hide();
 $(".buttonPaintingWhiteBrush").show();
        $(".buttonPaintingBlueBrush").hide();
});

$(".buttonTextBlue").click(function() {
  $(".buttonTextWhite").show();
  $(".buttonTextBlue").hide();
    $("textarea").hide();
});


$(".buttonPaintingWhiteBrush").click(function() {
    $(".buttonPaintingBlueBrush").show();
      $(".buttonColumnRightTop").show();
      $(".buttonColumnRightTopDisplayNone").show();


            $(".canvas").show();
        $(".buttonPaintingWhiteBrush").hide();
        $(".stickerHide").hide();


});

$(".buttonPaintingBlueBrush").click(function() {
  $(".buttonPaintingWhiteBrush").show();
         $(".buttonPaintingBlueBrush").hide();
             $(".buttonColumnRightTop").hide();



});


$(".buttonStickersWhite").click(function() {
  $(".buttonStickersWhite").hide();
    $(".buttonStickersBlue").show();

                        $(".stickerContainer").show();
                        $(".stickerWrapper").show();
                        $(".stickerDisplayNone").show();
                         $("canvas").show();



});

$(".buttonStickersBlue").click(function() {
  $(".buttonStickersBlue").hide();
       $(".stickerHide").hide();

              $(".buttonStickersWhite").show();


});

$(".stickerContainer").click(function() {
 $(this).removeClass("stickerHide");
 $(this).addClass("resizable");

});


/*
$(".volumeOnSmallLeftTop").click(function(){
 $(".volumeOnSmallLeftTop").hide();
 $(".volumeOffSmallLeftTop").show();
});
/*
$(".volumeOnSmallRightMid").click(function(){
 $(".volumeOnSmallRightMid").hide();
 $(".volumeOffSmallRightMid").show();
});
*/
/*
$(".volumeOnSmallLeftBottom").click(function(){
 $(".volumeOnSmallLeftBottom").hide();
 $(".volumeOffSmallLeftBottom").show();
});
/*
$(".volumeOnSmallRightBottom").click(function(){
 $(".volumeOnSmallRightBottom").hide();
 $(".volumeOffSmallRightBottom").show();
});


//David Hockney's love & disaster advice


$("video").prop('muted', true);

 $(".volumeOnSmallRightMid, .volumeOffSmallRightMid").click( function (){
   if( $("video.davidHockney").prop('muted') ) {
         $("video.davidHockney").prop('muted', false);
          $(".volumeOffSmallRightMid").show();
          $(".volumeOnSmallRightMid").hide();
   } else {
     $("video.davidHockney").prop('muted', true);
     $(".volumeOffSmallRightMid").hide();
     $(".volumeOnSmallRightMid").show();
   }
 });



//Paris is Burning video:  "I came, I saw, I conquered."



 $(".volumeOnSmallRightBottom, .volumeOffSmallRightBottom").click( function (){
   if( $("video.parisIsBurning1").prop('muted') ) {
         $("video.parisIsBurning1").prop('muted', false);
          $(".volumeOffSmallRightBottom").show();
          $(".volumeOnSmallRightBottom").hide();
   } else {
     $("video.parisIsBurning1").prop('muted', true);
     $(".volumeOffSmallRightBottom").hide();
     $(".volumeOnSmallRightBottom").show();
   }
 });


 //Nick Cave Video

  $(".volumeOnSmallLeftBottom, .volumeOffSmallLeftBottom").click( function (){
    if( $("video.nickCave").prop('muted') ) {
          $("video.nickCave").prop('muted', false);
           $(".volumeOffSmallLeftBottom").show();
           $(".volumeOnSmallLeftBottom").hide();
    } else {
      $("video.nickCave").prop('muted', true);
      $(".volumeOffSmallLeftBottom").hide();
      $(".volumeOnSmallLeftBottom").show();
    }
  });
*/
   //David Hockney video, click on the first page view button and hide everything else.
 $("#davidHockneyCollapseViewButton, #davidHockneyCollapseViewButtonBlue").click(function(){
    if ( $("#davidHockneyCollapseViewButton").is(':visible') ) {
        $(".showContentDavidHockneyCollapseViewButton").hide();
           $("#davidHockneyCollapseViewButton").hide();
               $("#davidHockneyCollapseViewButtonBlue").show();
       } else {
          $("#davidHockneyCollapseViewButtonBlue").hide();
              $("#davidHockneyCollapseViewButton").show();
                  $(".hideContentDavidHockneyCollapseViewButton").hide();
                      $(".showContentDavidHockneyCollapseViewButton").show();
        }
    });
   //Paris Girl video, click on the first page view button and hide everything else.
    $("#parisGirlViewButton, #parisGirlViewButtonBlue").click(function(){
       if ( $("#parisGirlViewButton").is(':visible') ) {
           $(".showContentParisGirlViewButton").hide();
              $("#parisGirlViewButton").hide();
                  $("#parisGirlViewButtonBlue").show();
          } else {
             $("#parisGirlViewButtonBlue").hide();
                 $("#parisGirlViewButton").show();
                     $(".hideContentParisGirlViewButton").hide();
                         $(".showContentParisGirlViewButton").show();
           }
       });

//Nick Cave video, click on the first page view button and hide everything else.
//please add back button on Nick's vertical view

       $("#nickCaveViewButton, #nickCaveViewButtonBlue").click(function(){
          if ( $("#nickCaveViewButton").is(':visible') ) {
              $(".hideContentNickCaveViewButton").hide();
                 $("#nickCaveViewButton").hide();
                  $(".nickCave").hide();
                     $(".nickCaveVerticalVideoContainer").show();
             } else {
                $("#nickCaveViewButtonBlue").hide();
                    $("#nickCaveViewButton").show();
                     $(".nickCave").show();
                      $(".nickCaveVerticalVideoContainer").hide();
                            $(".hideContentNickCaveViewButton").show();
              }
          });

//Paris is Burning video, click on the first page view button and hide everything else.

     $("#parisIsBurningConqueredViewButton, #parisIsBurningConqueredViewButtonBlue").click(function(){
        if ( $("#parisIsBurningConqueredViewButton").is(':visible') ) {
            $(".hideContentNickCaveViewButton").hide();
               $("#parisIsBurningConqueredViewButton").hide();
                $(".parisIsBurning1").hide();
                   $(".parisIsBurning1VerticalVideoContainer").show();
           } else {
              $("#nickCaveViewButtonBlue").hide();
                  $("#nickCaveViewButton").show();
                   $(".nickCave").show();
                    $(".nickCaveVerticalVideoContainer").hide();
                          $(".hideContentNickCaveViewButton").show();
            }
        });

            $(".videoContainerCallOut").hover(function(){
                $( ".floatingMessage" ).slideDown( "slow" );

        });
