$(window).ready(function(){
	//alert("window is ready"); // Popups alert window
	$(".slidernav").click(function() {
		var sliderChange = $(this).attr("href");
		//sliderChange = sliderChange.replace("#", ""); // Strip out the preceding hashtag
		$(".active").fadeOut().removeClass("active"); // Only one active div
		$(sliderChange).fadeIn().addClass("active");
	});
});

$(window).resize(function(){

});