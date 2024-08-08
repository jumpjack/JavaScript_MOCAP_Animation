//TYPED.JS animation
$(function() {
	$(".type-text").typed({
		strings:["<br> ^300Press 'ENTER' to continue<br>"],
		typeSpeed: 150,
	});
});

//KEYPRESS LISTENER for ENTER --> about.html
$(document).keypress(function(e) {
	if (e.which == 13) {
		window.location = "animation.html";
	}
});
