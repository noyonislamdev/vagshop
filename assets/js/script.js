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

	$(document).ready(function(){
		$('#menu').slicknav({
			label: 'MENU', 
			duration: 200, 
			easingOpen: "easeOutBounce", 
			easingClose: "easeInBounce", 
			prependTo: 'body',
			closeOnClick: true, 
			allowParentLinks: true,
		});
	});
	
	//On Scroll Functionality
	$('.main_menu').onePageNav({
		currentClass: 'current',
		changeHash: true,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function(jQuerycurrentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
		/* Nivo Lightbox 
	  ========================================================*/
	  $('.lightbox').nivoLightbox({
		  effect: 'fadeScale',
		  keyboardNav: true,
		});
		
		  
	});      
  
	$(document).ready(function(){
		$('.counter-value').each(function(){
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			},{
				duration: 3500,
				easing: 'swing',
				step: function (now){
					$(this).text(Math.ceil(now));
				}
			});
		});
	});


		
	}(jQuery));

	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
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
					items: 3
				}
			}
		});
	});

	
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'vertical',
		loop: true,
	
		// If we need pagination
		pagination: {
		el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		scrollbar: {
		el: '.swiper-scrollbar',
		},
	});

	function openCity(evt, cityName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
		  tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(cityName).style.display = "block";
		evt.currentTarget.className += " active";
	  }



