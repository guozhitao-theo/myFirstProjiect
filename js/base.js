//存放顶部、底部、侧边栏的逻辑（脚本）

//<---------侧边栏---------------------->
//获取按键
 var bar_move = document.querySelectorAll('.bar-move')
//循环写入按键事件
for(i=0;i<bar_move.length;i++){
	//添加鼠标移动事件
	bar_move[i].onmouseenter = function(){
		//获取第二个子盒子
		var move_body = this.children[1]
		var right=45
		//设置定时器
		var timer = setInterval(function(){
			right=right-1
			if(right<=34){
				//清除定时器
				clearInterval(timer)
			}else{move_body.style.right = right+'px'}
		},20)
	}
}


//返回顶部
document.querySelector('.return-top').onclick = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	var timer = setInterval(function(){
		scrollTop=scrollTop-150
		document.body.scrollTop = scrollTop
		document.documentElement.scrollTop = scrollTop
		if(scrollTop<0){
			clearInterval(timer)
		}
	},10)
//	var scrolltop = document.body.scrollTop = 0
//	var scrolltop = document.documentElement.scrollTop = 0
	
}



//点击控件 购物车以及客服滑出
//获取按键
//var slideBars = document.querySelectorAll('.slide-bar')
////获得要滑动的窗口
//var asideSlide = document.querySelector('.aside-slide')
////给按钮添加点击事件
//for(var i= 0;i<slideBars.length;i++){
//	slideBars[i].onclick = function(){
//		//定时器实现窗口慢慢滑动出来
//		var right = '';
//		//判断读取内容的工具
//		
//		if(asideSlide.currentStyle){
//			right = asideSlide.currentStyle
//		}else{
//			right = getComputedStyle(asideSlide, false).right
//		}
//		var speed = 0
//		right = parseInt(right)
//		if(right>-264){
//			speed = -12
//		}else{
//			speed = 12
//		}
//	 	var timer = setInterval(function(){
//			right+=speed;
//			asideSlide.style.right=right+'px'
//			if((right>=35 && speed>0) || (right<=-264 && speed<0)){
//				clearInterval(timer)
//				
//				//根据速度判断终点  赋值
//				if(speed > 0) {
//					asideSlide.style.right = 35 + 'px'
//				}else {
//					asideSlide.style.right = -264 + 'px'
//				}
//			}
//		},10)
//	}
//}
//


//<----------------------客服及购物车滑出更新版----------------------------->

//获取按钮
 var slideBar = document.querySelectorAll('.slide-bar')
 //按键点击之后要移动外面的盒子，就要获得盒子的属性
 var asideSlide = document.querySelector('.aside-slide')

 //获取购物车
 var slideCart =document.querySelector('.slide-shopping-cart')
 //获取客服
 var slideService =document.querySelector('.slide-service')
  //给按键添加点击功能
 for(let i=0;i<slideBar.length;i++){
 	slideBar[i].onclick = function(){
 		//
   		if(this.classList.contains('showc')===true){
 			for(let j = 0;j<slideBar.length;j++){
 				slideBar[j].classList.remove('showc')
 			}	
 		}else{
 			slideBar[i].classList.add('showc')
 		}
 		
 		
 			
 		//获取盒子 的位置 和移动的距离即属性right值用于判断盒子的进出
 		//定义right初始值
 		var right = 0 
 		//获取right两种方法 。。浏览器兼容 asideSlide.currentStyle获取ie浏览器的 getcomputStyle获取其他浏览器的
 		//如果asideSlide.currentStyle不为空就获取值 否则采用getcomputstyle方法
 		if(asideSlide.currentStyle){
 			right = asideSlide.currentStyle
 		}else{
 			right = getComputedStyle(asideSlide, false).right
 		}
 		//初始化速度值
 		var slideSpeed = 0 
 		//给点击按钮对应显示内容添加一个标记  --添加一个类名 on --
 		//判断是否 包含有on这个类名
 		//首先要获取当前点击元素（slideBar[i]）的类名
 		className = this.className
		//判断		
		if(className.indexOf('on')>=0){
			slideSpeed = -12
			//清除on
			this.classList.remove('on')
			
		}else{
			this.classList.add('on')
			slideSpeed = 12
			//判断点的是哪个按钮
			if(className.indexOf('shopping-cart')>=0){
				//获取下一个兄弟元素
				this.nextElementSibling.classList.remove('on')
				slideCart.style.display = 'block'
				slideService.style.display = 'none'
				
			}else{
				//获取上一个兄弟元素
				this.previousElementSibling.classList.remove('on')
				slideService.style.display = 'block'
				slideCart.style.display = 'none'
			}
			
			
			
			
		}
		 
 		
 		//得到的right是一个字符串需要将其转换成number类型
 		right = parseInt(right)
		//使用定时器来实现盒子逐渐滑动效果
		var timer = setInterval(function(){
			
			right+=slideSpeed
			
			//盒子没有运动到位置时不停止运动结束后停止计时器
			if(right>35 || right<-265){
				clearInterval(timer)
				
			}else{
				asideSlide.style.right = right + 'px'
			}
		},10 )
 		
 	}
 }
