//找回密码页的逻辑

//第一页点击下一页
firstStep()
function firstStep(){
	//获取点击下一步按钮
	$('.first-step-btn').click(function(){
		$(this).closest('.first-foot').css({
			display: 'none'
		})
		$('.second-foot').css({
			display: 'block'
		})
	})
}
//第二步
secondStep()
function secondStep(){
	//获取点击下一步按钮
	$('.second-step-btn').click(function(){
		$(this).closest('.second-foot').css({
			display: 'none'
		})
		$('.third-foot').css({
			display: 'block'
		})
	})
}


//5秒钟倒计时
function delayer(){
	var index = 5
	setInterval(function(){
		$('.complete-detail .time-down span').html(index +'S ')
		index--
		if(index<=0){
			window.location ='login&registe.html'
			clearInterval()
		}
		
	},1000)
	

}
jQuery(document).ready(function(){
	$('.second-step-btn').click(function(){
//	 setTimeout('delayer()', 5000);
	 //这里实现延迟5秒跳转
	 delayer()
	})
});