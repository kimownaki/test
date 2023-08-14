$(document).ready(function(){

	// 메뉴 슬라이드
	var slidebar_width  = 100; //slidebar width + padding size
	var slide_bar       = $(".side-menu-wrapper"); //slidebar
	var slide_open_btn  = $(".slide-menu-open"); //slidebar close btn
	var slide_close_btn = $(".menu-close"); //slidebar close btn
	var overlay         = $(".side-menu-overlay"); //slidebar close btn
	
	slide_open_btn.click(function(e){
		e.preventDefault();
		slide_bar.css( {"right": "0px"}); //change to "right" for right positioned menu
		overlay.css({"opacity":"1", "width":"100%"});
	});
	slide_close_btn.click(function(e){
		e.preventDefault();
		slide_bar.css({"right": "-"+ slidebar_width + "%"}); //change to "right" for right positioned menu
		overlay.css({"opacity":"0", "width":"0"});  
	});
	
	$(".navMenu li .navMenuBg").on("click",function() {
		$('.navMenuBg').removeClass("on");
		$(this).addClass("on");
		$('.navMenu .subMenu dl').slideUp();
		$('.subMenu p').removeClass("active");
	})
	
	$(".navMenu li .menu01").on("click",function() {
		$('.sm01').addClass("on");
		$('.sm02').removeClass("on");
		$('.sm03').removeClass("on");
		$('.sm04').removeClass("on");
	})
	
	$(".navMenu li .menu02").on("click",function() {
		$('.sm01').removeClass("on");
		$('.sm02').addClass("on");
		$('.sm03').removeClass("on");
		$('.sm04').removeClass("on");
	})
	
	$(".navMenu li .menu03").on("click",function() {
		$('.sm01').removeClass("on");
		$('.sm02').removeClass("on");
		$('.sm03').addClass("on");
		$('.sm04').removeClass("on");
	})
	
	$(".navMenu li .menu04").on("click",function() {
		$('.sm01').removeClass("on");
		$('.sm02').removeClass("on");
		$('.sm03').removeClass("on");
		$('.sm04').addClass("on");
	})
	
	//이미지 슬라이드
	var slider = $('.mvSlider').bxSlider({
		auto:true,
		pause:6000,
		controls:true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: '',
		autoHover:false,
		mode:'fade',
		infiniteLoop: true,
		pager:false,
		onSlideAfter: function() {
            slider.startAuto()
        }
		
	});
	
	$('.prSlider').bxSlider({
		auto:true,
		pager:false,
		controls:false
	});
	
	
	
	// Use the conventional $ prefix for variables that hold jQuery objects.
	var $slider;
	
	// If the only purpose of the windowWidth() function is to set the slide variables,
	// it can be renamed and rewritten to supply the full configuration object instead.
	function buildSliderConfiguration() {
	  // When possible, you should cache calls to jQuery functions to improve performance.
	  var windowWidth = $(window).width();
	  var numberOfVisibleSlides;
	  var slideWidthVar;
	  var slideMarginVar;
	  var moveSlidesVar;
	  
	
	  if (windowWidth < 740) {
		numberOfVisibleSlides = 0;
		slideWidthVar = 0;
		slideMarginVar = 0;
		moveSlidesVar = 1;
	  }
	  else {
		numberOfVisibleSlides = 3;
		slideWidthVar = 320;
		slideMarginVar = 20;
		moveSlidesVar = 1;
	  }
	
	  return {
		slideWidth: slideWidthVar,
		minSlides: numberOfVisibleSlides,
		maxSlides: numberOfVisibleSlides,
		slideMargin: slideMarginVar,
		moveSlides: moveSlidesVar,
		auto:true,
		pager:false,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: ''
	  };
	}
	
	$('.top > .menu').on("mousemove",function() {
		$('.dropMenuWrap').slideDown(100)
	});
	$('.topWrap').on("mouseleave",function() {
		$('.dropMenuWrap').slideUp(100)
	});
	
	// This function can be called either to initialize the slider for the first time
	// or to reload the slider when its size changes.
	function configureSlider() {
	  var config = buildSliderConfiguration();
	
	  if ($slider && $slider.reloadSlider) {
		// If the slider has already been initialized, reload it.
		$slider.reloadSlider(config);
	  }
	  else {
		// Otherwise, initialize the slider.
		$slider = $('.exclusiveSlider').bxSlider(config);
	  }
	}
	
	$('#slider-prev').click(function () {
	  var current = $slider.getCurrentSlide();
	  $slider.goToPrevSlide(current) - 1;
	});
	$('#slider-next').click(function () {
	  var current = $slider.getCurrentSlide();
	  $slider.goToNextSlide(current) + 1;
	});
	
	// Configure the slider every time its size changes.
	$(window).on("orientationchange resize", configureSlider);
	// Configure the slider once on page load.
	configureSlider();
	
	
	
	$('.exclusiveSlider1').bxSlider({
		slideWidth: 320,
		minSlides: 1,
		maxSlides: 3,
		slideMargin: 20,
		moveSlides: 1,
		auto:true,
		pager:false,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: ''
	});
	
	//주요실적 모바일용 검색부
	var windowWidth = $(window).width();	  
	
	if (windowWidth < 740) {
	
		$('.bizSearch .sortWrap li .sortTitle').on("click",function() {
			$(this).next(".sort").toggle(100)
		});
	
	}
	else {
	
	}
	
	return {
	
	};

	
	// 탭
		
	$(function() {
		$( ".tabCon" ).tabs();
	});
	
	$(function() {
		$( ".tjTab" ).tabs();
	});
	
	var subId = '';
	var subIdTop = 0;
	$(".quick a").on("click",function(){
		
		subId 		= $(this).attr('href').replace('#','');
		
		if(subId == 'top'){
			subIdTop = 0;
		}else{
			subIdTop = $("#"+subId).offset().top;
		}
		
		$('html, body').animate({scrollTop:subIdTop});
		return false;
		
	});
	
	
	
	$(".faqList > li > .askTitle").on("click",function() {
	  if($(this).hasClass("on")) {
		  $(this).next(".answer").slideUp(100)
		  $(this).removeClass("on");
	  }else{
		  $(this).next(".answer").slideDown(100)
		  $(this).addClass("on");
	  }
	})
});
