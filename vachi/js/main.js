$(window).ready(function(){
	// alert("window is ready ");
	$(".slidernav").click(function() {
  		var sliderChange = $(this).attr("href");
  		$(".active").fadeOut().removeClass("active");
  		// sliderChange = sliderChange.replace("#", "");
  		$(sliderChange).fadeIn().addClass("active");
	});
});	

$(window).resize(function(){
	// alert("we resized");

});	