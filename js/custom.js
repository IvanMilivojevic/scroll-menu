
jQuery(document).ready(function(){

	var homeSections = [];
	jQuery(".main-menu a").each(function(){
		var section = jQuery(this).attr("href");
		homeSections.push(section);
	});

	jQuery(".main-menu a").click(function(event){
		jQuery(window).off("scroll");
		event.preventDefault();
		
		var clickedEl = jQuery(this);
		var pageScroll = jQuery(window).scrollTop();
		var clickedSection = jQuery(this).attr("href");
		var sectionOffset = jQuery(clickedSection).offset().top - 70;
		jQuery("html, body").animate({ scrollTop: sectionOffset}, function(){
			jQuery(".main-menu li").removeClass("active");
			jQuery(clickedEl).parent().addClass("active");
			jQuery(window).scroll(function(){
				classicScroll();
			});
		});
	});

	function classicScroll() {
		var pageScroll = jQuery(window).scrollTop();
		var windowH = jQuery(window).height();
		var documentH = jQuery(document).height();

		if(pageScroll == 0) {
			jQuery(".main-menu li").removeClass("active");
			jQuery(".main-menu li").first().addClass("active");
		}
		else if(pageScroll + windowH == documentH) {
			jQuery(".main-menu li").removeClass("active");
			jQuery(".main-menu li").last().addClass("active");
		}
		else {
			jQuery.each(homeSections, function(index, element){
				if(pageScroll >= jQuery(element).offset().top - 70) {
					jQuery(element).siblings().removeClass("active");
					jQuery(element).addClass("active");
					jQuery(".main-menu li").removeClass("active");
					jQuery(".main-menu li").eq(index).addClass("active");
				}
			});
		}
	}

	jQuery(window).scroll(function(){
		classicScroll();
	});

	jQuery(window).scroll();

	jQuery(".mobile-button").click(function(){
		jQuery(".main-menu").toggle();
	});

});
