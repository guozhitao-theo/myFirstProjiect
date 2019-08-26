//帮助中心的逻辑
$('.lists-title').click(function(){
	console.log($(this).find('.icon-xiangyou'))
	if($(this).find('.icon-xiangyou').hasClass('on')){
		$(this).find('.icon-xiangxia1').addClass('on')
		$(this).find('.icon-xiangxia1').siblings().removeClass('on')
	}else 
	{
		$(this).find('.icon-xiangyou').addClass('on')
		$(this).find('.icon-xiangxia1').removeClass('on')
	}
	$(this).closest('.help-center-left-order-box').find('.help-center-left-order-lists').slideToggle()
	$(this).closest('.help-center-left-order-box').siblings('.help-center-left-order-box').find('.help-center-left-order-lists').slideUp()
	$(this).closest('.help-center-left-order-box').siblings('.help-center-left-order-box').find('.icon-xiangyou').removeClass('on')
	$(this).closest('.help-center-left-order-box').siblings('.help-center-left-order-box').find('.icon-xiangxia1').addClass('on')
})

