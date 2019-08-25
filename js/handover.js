//点击后移动的封装

;(function($){
	$.fn.handover = function(options){
		//获得图片显示框的宽度
		var showBox =  $(options.showBox).width()
		//先获取单个的宽度
		var singleWidth = $(options.single).outerWidth()
		//获得单个图片的个数
		var singleLength = $(options.single).length
		//设置content 的宽度 = 单个图片的长度 * 单个图片的个数
		var contenWidth = singleWidth * singleLength
		$(options.content).css({
			width: contenWidth
		})
		//获取content 的left
		var leftVal = $(options.content).css('left')
		//将获取的left字符串转换为数字
		leftVal = parseInt(leftVal)
		//给左边按钮添加点击事件
		$(options.leftBtn).click(function(){
			$(options.rightBtn).removeClass(options.overClass)
			//判断当前是否含有某类名，有就return
			if($(options.leftBtn).hasClass(options.overClass)){
				return
			}
			//按钮点击一次left的值减少单个的宽度
			leftVal = leftVal - singleWidth
			//将left的值添加到属性
			$(options.content).css({
				left: leftVal
			})
			//如果滑动到头了，就给按钮添加一个类名改变样式
			if(leftVal<=(showBox-contenWidth)){
				$(options.leftBtn).addClass(options.overClass)
			}else{
				$(options.leftBtn).removeClass(options.overClass)
			}
		})
		$(options.rightBtn).addClass(options.overClass)
		//给右边按钮添加点击事件
		$(options.rightBtn).click(function(){
			$(options.leftBtn).removeClass(options.overClass)
			if(leftVal>-singleWidth){
				//将left的值添加到属性
				$(options.rightBtn).addClass(options.overClass)
			}else{
				$(options.rightBtn).removeClass(options.overClass)
			}
			//判断是否含有某个类名
			if($(options.rightBtn).hasClass(options.overClass)){
				return
			}
			//按钮点击一侧，left的值就增加一个单个的宽度
			leftVal = leftVal + singleWidth
			//将left的值添加到属性
			$(options.content).css({
				left: leftVal
			})
			//当滑到0 的时候添加一个类名改变其样式
			if(leftVal>-singleWidth){
				//将left的值添加到属性
				$(options.rightBtn).addClass(options.overClass)
			}else{
				$(options.rightBtn).removeClass(options.overClass)
			}
		})
	}
})(jQuery)
