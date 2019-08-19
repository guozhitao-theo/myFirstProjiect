//jQuery的tab切换方法
/*@param 定义一个tab切换方法 
 *tabBtn参数为点击的按钮
 * fatherBox为按钮和盒子的共同的父级
 * tabBox参数为需要切换的盒子
 */
function Tabchange(tabBtn,fatherBox,tabBox){
	$(tabBtn).mouseenter(function() {
		//添加类名用addClass
		$(this).addClass('on')
		//获取同级盒子.siblings()
		//删除类名removeClass
		$(this).siblings().removeClass('on')
		
		//获取当前元素的下标
		var index = $(this).index()
		//找到祖先盒子，parent找一个，parents('类名')
		var parent = $(this).parents(fatherBox)
		//在parent内使用find 找到当前下标的box并且移除所有的兄弟标签上面的active类名
		parent.find(tabBox).eq(index).siblings().removeClass('active')
		//当前下标添加active标签
		parent.find(tabBox).eq(index).addClass('active')
		
	})
}

