// The function
var background_image_parallax = function($object, multiplier){
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
	$(window).scroll(function(){
	  var from_top = $doc.scrollTop(),
	      bg_css = '0px ' +(multiplier * from_top) + 'px';
	  $object.css({"background-position" : bg_css });
  });
};

$( document ).ready(function() {

	//right fixed
	 $(window).scroll(function() {
		var distanceFromTop =  $(document).scrollTop();
		var begin_fixed 	= ($('.right_content_ct').offset().top     + $('.right_content_ct').outerHeight(true));
		
		//console.log(distanceFromTop);
		//console.log(end_fixed);

		if (distanceFromTop > begin_fixed && distanceFromTop < end_fixed){
			
			$('.secondary').addClass('fixed');
			$('.secondary').removeClass('affix-pause');
			$('.secondary').css('top','');
		}

	});
	
});