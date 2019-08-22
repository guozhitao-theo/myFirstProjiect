/*放大镜的封装*
 *@param  
 */
;(function($){
	$.fn.jqzoom = function(options){
		//获取需要放大的图片的地址
		var imgSrc = $(this).find('img').attr('src') 
		//获取当前需要放大的图片的宽和高
		var imgWidth = $(this).find('img').width()
		var imgHeight = $(this).find('img').height()
		
		//定义一个变量来传参
		var _this = this
		//定义一个模板字符串为需要添加的内部选择盒子
		var box = `<div class="jqzoom-child"
						style="
						
						position: absolute;
						top: 0;
						left:0;
						background: rgba(0,0,0,10%);
						z-index: 2">
					</div>`
		//定义一个模板字符串为需要显示放大的盒子
		var boxBig = `<div class="picture-enlargement" style="width: ${options.width}px;height: ${options.height}px; position: absolute;top: 0px;
							left: 430px;border: 1px solid #000;overflow: hidden;">
							<img src="${imgSrc}" style="position: absolute;top: 0;left: 0;" ;/>
						</div>`
	    var bigWidth = 0
	    var bigHeight = 0
		//添加鼠标移入事件
		$(this).mouseenter(function(){
			//鼠标移入时，给图片盒子添加一个图片内的选择的盒子
			$(_this).append(box)
			//鼠标移入时，添加一个显示放大的盒子
			$(_this).append(boxBig)
			//获取放大的图的宽高
			bigWidth = $('.picture-enlargement img').width() 
			bigHeight = $('.picture-enlargement img').height()
		})
		//添加鼠标移出事件，将盒子从图片上移出
		$(this).mouseleave(function(){
			$(_this).find('.jqzoom-child').remove()
			$(_this).find('.picture-enlargement').remove()
		})
		//添加鼠标移动事件，使选择框跟随鼠标移动
		$(_this).mousemove(function(event){
			//获取鼠标在当前页面的横坐标
			var pagex = event.pageX
			//获取鼠标在当前页面的纵坐标
			var pagey = event.pageY
			//获取当前的盒子（jqroom的位置）
			//获取当前的盒子的横坐标
			var offsetx = $(_this).offset().left
		    //获取当前的盒子的纵坐标
		    var offsety = $(_this).offset().top
		    //获取选择框的宽度
		    var selectorWidth = imgWidth/bigWidth*options.width
		    //获取选择框的高度
		    var selectorHeight = imgHeight/bigHeight*options.height
		    //设置选择框的宽高
		    $('.jqzoom-child').css({
		    	width:selectorWidth+'px',
		    	height:selectorHeight+'px'
		    })
		    //计算盒子的位置
		    var x = pagex - offsetx - selectorWidth/2
		    var y = pagey - offsety - selectorHeight/2
		    //判断鼠标移动的边界
		    x = x < 0 ? 0 : x
		    x = x > (imgWidth-selectorWidth) ? (imgWidth-selectorWidth) : x
		    y = y < 0 ? 0 : y
		    y = y > (imgHeight-selectorHeight) ? (imgHeight-selectorHeight) : y
		    //使选择框跟随鼠标移动而移动
		    $('.jqzoom-child').css({
		    	top:y,
		    	left:x
		    })
		    $(_this).find('.picture-enlargement img').css({
		    	left:-x*(bigWidth/imgWidth),
		    	top:-y*(bigHeight/imgHeight)
		    })
		    
		})
	}
})(jQuery)
