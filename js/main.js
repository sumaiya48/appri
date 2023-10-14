(function ($) {
"use strict";

	// data -background
	$("[data-background]").each(function(){
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");

	})

	

	$('.testimonial-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.test-img-active'
	  });
	  $('.test-img-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimonial-active',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
	  });

	  $('.brand-active').owlCarousel({
		loop:true,
		margin:50,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

})(jQuery);