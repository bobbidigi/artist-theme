var $thumbOverlay = $('.thumb-overlay');

$thumbOverlay.waypoint(function (direction) {
  if (direction == 'down') {
    $thumbOverlay.addClass('animate');
  } else {
    $thumbOverlay.removeClass('animate'); 
  }
}, { offset: '25%' });