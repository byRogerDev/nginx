$( document ).ready(function() {

  var $stickyBan = $('#the-target');
  var $stickyStop = $('.page-ads');
  if (!!$stickyBan.offset()) {

    var generalSidebarHeight = $stickyBan.innerHeight();
    var stickyTop = $stickyBan.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyStop.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function(){
      var windowTop = $(window).scrollTop();
      if (stopPoint <= windowTop) {
          $stickyBan.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop+stickOffset) {
          $stickyBan.css({ position: 'fixed', top: stickOffset });
      } else {
          $stickyBan.css({position: 'absolute', top: 'initial'});
      }
    });

  }
});