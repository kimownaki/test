$(document).ready(function(){
	
	$(".nav-btn").on("click",function() {
		$(this).toggleClass("on");
		$(".topMenuWrap").toggleClass("on");
	});
	
	//�̹��� �����̵�
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
	

	// ��
		
	$(function() {
		$( ".roomtype" ).tabs();
	});
	
});
