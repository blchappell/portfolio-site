$(".scrolling").scrollFlight();

$("h1, h3").on("arrived",function(e) {
  $(this).addClass("on-page");
});

$(".iframe-cover").on("arriving",function(e) {
	$(this).addClass("appeared");
});