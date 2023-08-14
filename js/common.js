$(document).ready(function(){
	
	$(".nav-btn").on("click",function() {
		$(this).toggleClass("on");
		$(".topMenuWrap").toggleClass("on");
	});
	
	//이미지 슬라이드
	var slider = $('.interiorSlider').bxSlider({
		auto:false,
		pause:6000,
		controls:false,
		nextText: '',
		prevText: '',
		autoHover:false,
		infiniteLoop: true,
		adaptiveHeight:true,
		pagerType:1/2
		
	});

    $('#moviePopUP').popup({
        pagecontainer: '.container',
        transition: 'all 0.3s',
		opacity: 0.8
    });
	

	// 탭
		
	$(function() {
		$( ".roomtype" ).tabs();
	});
	
});
