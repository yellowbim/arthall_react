$(document).ready(function(){
// 메인 슬라이드
	$(".mainVisual .visual > div").on("mouseenter", function(){
		var idx = $(this).index();
		$(this).children().addClass("on");

		$(".mainVisual .visualView > div").removeClass("show");
		$(".mainVisual .visualView > div").eq(idx).siblings().css({
			'width':"0%"
		});
		$(".mainVisual .visualView > div").eq(idx).css({
			'width': '100%',
			'left': '0%'
		});
		$(".mainVisual .visualView > div").eq(idx).addClass("show");
	});

	$(".mainVisual .visual > div").on("mouseleave", function(){
		$(this).children().removeClass("on");

		$(".mainVisual .visualView > div").removeClass("show");
		$(".mainVisual .visualView > div").siblings().css({
			'width':"20%"
		});
		for(let i=1; i<6; i++){
			$(".mainVisual .visualView > div").eq(i).css({
				'left' : i*20+'%' 
			});
		}
		
	});
});