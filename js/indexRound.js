$(function(){
	var timer;
	var num = 0;
	//文字动画效果
//	$('.screen1').children('.title').removeClass('no');
	
	//点击侧导航事件
	$('.btnRound li').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top':-100*num+'%'},100);
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	
	//滚动事件
	$(document).mousewheel(function(e,d){
//		alert(d);
		clearTimeout(timer);
		timer = setTimeout(function(){
			num = num-d;
			if(num<0){num = 0}
			if(num>4){num = 4}
			$('section').stop().animate({'top':-100*num+'%'},500);
			$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
			$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
		},100)
	})
	
})
