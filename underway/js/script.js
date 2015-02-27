$(document).ready(function() {

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	
	if (scroll >= 600) {
		$('#topnav').slideDown('400');
	} else {
		$('#topnav').slideUp('400');
	}
	
});

});