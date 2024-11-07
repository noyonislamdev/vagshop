(function($) {
  
	"use strict";  

	//Preloader js{ 
		$('.preloader').fadeOut();
		$('.status-mes').delay(350).fadeOut('slow'); 
	
	// Active Slick Nav 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#header-area').addClass('sticky');
		} else {
			$('#header-area').removeClass('sticky');
		}
	});


		$('.category_slider').owlCarousel({
			loop: true,
			item:6,
			margin: 10,
			nav: true,
			responsive: {
				440: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 5
				}
			}
		});
		
	}(jQuery));


