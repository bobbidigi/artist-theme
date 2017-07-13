var $thumbOverlay = $('.thumb-overlay');

$thumbOverlay.waypoint(function (direction) {
  if (direction == 'down') {
    $thumbOverlay.addClass('animate-thumb');
  } else {
    $thumbOverlay.removeClass('animate-thumb'); 
  }
}, { offset: '25%' });