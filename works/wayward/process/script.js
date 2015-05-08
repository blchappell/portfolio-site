$(".scrolling").scrollFlight();

// MENU OFFSET
var lastTop = $(window).scrollTop();
$(window).on("scroll",function(e) {
    var offset = $(window).scrollTop();
    var diff = offset - lastTop;
    if(diff > 0) {
      $(".menu,.gradient").addClass("hide");
    } else if(diff < 0) {
      $(".menu,.gradient").removeClass("hide");
    }
    lastTop = offset;
});
