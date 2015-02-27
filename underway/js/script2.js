$(document).ready(function() {

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	
	if (scroll >= 300) {
		$('#project-social').slideDown('400');
	} else {
		$('#project-social').slideUp('400');
	}
	
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	
	if (scroll >= 100) {
		$('#hire').slideDown('400');
	} else {
		$('#hire').slideUp('400');
	}
	
});


});