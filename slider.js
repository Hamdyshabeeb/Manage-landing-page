const swiper = new Swiper('.swiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	spaceBetween: 30,
	grabCursor: true,
	breakpoints: {
		600: {
			slidesPerView: 2,
			pagination: {
				enabled: false,
				el: '.swiper-pagination',
			},
		},
		900: {
			slidesPerView: 3,
			pagination: {
				enabled: false,
				el: '.swiper-pagination',
			},
		},
	},
});
