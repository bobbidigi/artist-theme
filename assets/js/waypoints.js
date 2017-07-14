//adds animate-thumb class when in view
//adds fadeout-thumb after 3 s
var $thumbOverlay = $('.thumb-overlay');

$thumbOverlay.waypoint(function (direction) {
  if (direction == 'down') {
    $thumbOverlay.addClass('animate-thumb');
    setTimeout(function() {
    $thumbOverlay.addClass('fadeout-thumb');
    },3000);  
  } else {
    $thumbOverlay.removeClass('animate-thumb');  
    $thumbOverlay.removeClass('fadeout-thumb');  
  }
     
}, { offset: '65%' });

