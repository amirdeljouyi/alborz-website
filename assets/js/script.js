const swiper = new Swiper('.slider', {
	slidesPerView: 1,    // Equivalent to slidesToShow
	slidesPerGroup: 1,   // Equivalent to slidesToScroll
	autoplay: {
		delay: 5000,      // Equivalent to autoplay: true (adjust delay if needed)
		disableOnInteraction: false, // Keep autoplay running after user interaction
	},
	loop: true,          // Add if you want infinite loop like Slick
	pagination: {
		el: '.swiper-pagination',
		clickable: true,  // Enables dots (pagination)
	},
	navigation: false,   // No arrows (equivalent to arrows: false)
});

// // Preloader js
// $(window).on('load', function () {
// 	$('.preloader').addClass('d-none');
// });
//
// (function($) {
// 	'use strict';
//
// 	//slider
// 	$('.slider').not('.slick-initialized').slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: true,
// 		arrows: false
// 	});
//
// })(jQuery);
//
// $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
//   if (!$(this).next().hasClass('show')) {
//     $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
//   }
//   var $subMenu = $(this).next('.dropdown-menu');
//   $subMenu.toggleClass('show');
//
//
//   $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
//     $('.dropdown-submenu .show').removeClass('show');
//   });
//
//
//   return false;
// });
//
// $(document).ready(function() {
//   $("a").on('click', function(event) {
//
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1500, function() {
//
//         window.location.hash = hash;
//       });
//     }
//   });
// });