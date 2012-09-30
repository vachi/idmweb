$(function() {
	$("#sliderlinks a").click(function(e) {
		var oldSlider = $(".slider.active");
		var newSlider = $(e.target.hash);

		oldSlider.fadeOut().removeClass("active");
		newSlider.fadeIn().addClass("active");
	});
});

$(window).resize(function() {
	console.log('resize');
});