$('.menu_button').click(function(){
	$(this).toggleClass('active');
	$('aside').toggleClass('active');
	$('header').toggleClass('active');
})
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var header = $('header');

	if (scroll >= 200) {
		header.addClass('toggled');
	} else {
		header.removeClass('toggled');
	}
});
//about slider (only home page?)
var swiper1 = new Swiper(".slider_about", {
	slidesPerView: 1,
	watchOverflow: false,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".next_about",
		prevEl: ".prev_about",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// catalog slider
var swiper2 = new Swiper(".slider_catalog", {
	slidesPerView: 1.2,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 14,
	navigation: {
		nextEl: ".catalog_nav .next_catalog",
		prevEl: ".catalog_nav .prev_catalog",
	},
	breakpoints: {
		1400: {
			slidesPerView: 4,
			spaceBetween: 32,
	 },
		993: {
			slidesPerView: 3,
			spaceBetween: 22,
	 },
		576: {
			slidesPerView: 2.2,
			spaceBetween: 20,
	 },

	}
});

	// FAQ
	$('.faq_widget_item').each(function() {
		$(this).find('div:last').hide();
	});
	$('.faq_widget').each(function(){
		$(this).find('.faq_widget_item:first').addClass('active')
	})
	$(document).ready(function() {
		$(".faq_widget_item").each(function(index) {
			var $this = $(this);
			var $activeBlock = $this.find("div:last");
	
			if (index === 0) { 
				$this.find("div:last").show();
			} else {
				$activeBlock.hide();
			}
		});
	});
	
	$(".faq_widget_item").click(function() {
		var $this = $(this);
		var $activeBlock = $this.find("div:last");
		$this.siblings(".faq_widget_item").find("div:last").slideUp(function() {
			$(this).prev().removeClass("active");
		});
		$activeBlock.slideDown();	$('.faq_widget_item').removeClass('active')
		$this.addClass('active');
	});
	// product nav
	$(window).scroll(function() {
		var scroll_nav = $(window).scrollTop();
		var product_nav = $('.tabs_sections');
	
		if (scroll_nav >= 600) {
			product_nav.addClass('toggled');
		} else {
			product_nav.removeClass('toggled');
		}
	});
	// product nav current id
	var $navbarLinks = $('.product_nav a');

	$(window).scroll(function() {
			var scrollPosition = $(this).scrollTop();

			$navbarLinks.each(function() {
					var targetId = $(this).attr('href');
					var targetOffset = $(targetId).offset().top;

					// Проверяем, если мы всередине блока
					if (scrollPosition >= targetOffset - 50 && scrollPosition < targetOffset + $(targetId).outerHeight()) {
							$navbarLinks.removeClass('active');
							$(this).addClass('active');
					}
			});
	});
	// product single slider
	var swiper3 = new Swiper(".product_thumb_slider", {
		loop: true,
		spaceBetween: 12,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper4 = new Swiper(".product_slider", {
		loop: true,
		spaceBetween: 4,
		navigation: {
			nextEl: ".product_next",
			prevEl: ".product_prev",
		},
		thumbs: {
			swiper: swiper3,
		},
	});
	//search
	// $(".search_toggle").click(function(){
	// 	$(this).next().show()
	// 	$(this).css('opacity','0','visibility','hidden')
	// })
	// fancybox
	Fancybox.bind('[data-fancybox="gallery"]', {
		// Your custom options
	});

