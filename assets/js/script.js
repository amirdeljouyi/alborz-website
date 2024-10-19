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