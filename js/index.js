//存放首页的逻辑

window.onload = function(){
	changeBanner()
}
function changeBanner(){
		//获取最大盒子
	var bannerBox = document.querySelector('.img-banner')
	//获取carsole盒子
	var carsolBox = document.querySelector('.carsol-img')
	//获取图片
	var  carsolimg = document.querySelectorAll('.carsol-img-img')
	//得到图片的宽度
	var carsolWidth = carsolimg[0].offsetWidth
	//定义图片顺序
	var index = 1;
	//获取按钮
	var bannerBtn = document.querySelectorAll('.banner-btn')
	//判断是哪个按钮】
	var autoInterval = null
	var speed = 0
	//获取按钮图片下面的点
 	var bannerDot = document.querySelectorAll('.banner-dot li')
//<----------------给盒子设置宽度------------------------------------->
	//计算盒子宽度
	var carsolBoxWidth = carsolWidth * carsolimg.length
	//设置盒子的宽度
	carsolBox.style.width = carsolBoxWidth + 'px'
//<---------------让图品移动实现轮播--------------------------------------------->
//1.定时器让图片动起来
//2.让图片循环运动
//3.判断当图片轮播完了之后将index的值改为0；将left的值也改为0

	//调用方法
	
	autoanimate()
//判断是哪个按钮

	

//封装图片暂停运动定时器
function autoanimate(){
		//使用定时器让图片两秒动一次
 autoInterval = setInterval(function(){
		
		animate(-20)
		
	},2000)
}
//<-------------------将图片运动的方法封装起来----------------------------------------------->
//右滑动
function animate(speed){
	changeDot(speed)
	var timer = setInterval(function(){
		
		//定义left让图片每10毫秒运动到left -20 的位置
		var left = carsolBox.offsetLeft +speed
		carsolBox.style.left = left + 'px'
		
		var carsolIndex = 0
		//speed大于0框向左移看右边的图片
		if(speed<0){
			carsolIndex = index+1
		}else{
			carsolIndex = index-1
		}
		//判断轮播图暂停、当left小于第二张移动的长度后清除定时器
		if( (left<= -carsolIndex * carsolWidth && speed<0 ) ||( left >= -carsolIndex * carsolWidth && speed >0 )){
			clearInterval(timer)
			index = carsolIndex
			
			//判断最后一张，如果是最后一张就返回第一张，如果是第一张就要调到最后一张
			if(index >= carsolimg.length-1){
				index = 1
				
				carsolBox.style.left = -carsolWidth + 'px'
			}else if( index <=0 ){
				index = carsolimg.length-2
				
				carsolBox.style.left = -index*carsolWidth + 'px'

			}
			
			
		}
		//将left的值设置给图片盒子
		
	},10)
}
//鼠标移入时不轮播
bannerBox.onmouseenter = function(){
	clearInterval(autoInterval)
}
//鼠标悬停时
bannerBox.onmouseover = function(){
	clearInterval(autoInterval)
}
//鼠标移出时轮播
bannerBox.onmouseleave = function(){
	autoanimate()
}

//点击左右按钮
for(i=0;i<bannerBtn.length;i++){
		bannerBtn[i].onclick = function(){
			var className = this.className
			
			if(className.indexOf('prev') >=0 ){
				animate(20)
				//左按钮
			}else{
				//右按钮直接调用之前的animate（）方法
				animate(-20)
				
			}
		}
}
//让按钮随着图片变化改变颜色
var dotIndex = 0
//定义一个改变的方法
 function changeDot(speed){
 	if(speed<0){
 		dotIndex++
 	}
 	else{
 		dotIndex--
 	}
 	//如果运动到最后一个则回到第一个
 	if(dotIndex>bannerDot.length-1){
 		dotIndex = 0
 	}
 	//如果向左移动移动到前一个则回到最后一个
 	if(dotIndex<0){
 		dotIndex = bannerDot.length-1
 	}
 	//用for循环清除所有的on,并且当图片序号等于dotIndex+1时给按钮添加“on”类名
 	for(i=0;i<bannerDot.length;i++){
 		bannerDot[i].classList.remove('on')
 	}
 	bannerDot[dotIndex].classList.add('on')
 	
 }

//点击下方按钮
//浏览器
document.addEventListener('webkitvisibilitychange',function(){
	var isHidden = document.webkitVisibilityState;
	if(isHidden == 'hidden'){
		clearInterval(autoInterval)
	}else{
		autoanimate()
	}
})
//给按钮添加事件
for(i=0;i<bannerDot.length;i++){
	bannerDot[i].dot = i
	bannerDot[i].onclick = function(){
		if(this.dot<dotIndex){
			speed = Math.abs(speed)
			index = this.dot+2
			dotIndex = this.dot+1
			animate(20)
		}else if(this.dot>dotIndex){
			speed = -Math.abs(speed)
			index = this.dot
			dotIndex = this.dot-1
			animate(-20)
		}
		
		
	}
}
}	
//<----------倒计时------------------------->
countDownT()
var countInterval =  setInterval(countDownT,1000 )
function countDownT(){
	var countDownTime = countDown('2019-8-10 20:24:00')
	if(parseInt(countDownTime)<=0){
		clearInterval(countInterval)
	}
	countDownTime = countDownTime.split('')
	var html = 
		`
		<span class="timer">${countDownTime[0]}</span>
		<span class="timer">${countDownTime[1]}</span>
		<span>:</span>
		<span class="timer">${countDownTime[2]}</span>
		<span class="timer">${countDownTime[3]}</span>
		<span>:</span>
		<span class="timer">${countDownTime[4]}</span>
		<span class="timer">${countDownTime[5]}</span>`
	document.querySelector('.discount-down').innerHTML = html
}
//<--------三商品推荐的tab切换------------>
//TabExample('.tab-box')
//TabExample('.tab-box2')
//TabExample('.tab-box3')
//TabExample('.tab-box4')
Tabchange('.table-title','.tab-box','.tab-lists')
Tabchange('.table-title','.tab-box2','.tab-lists')
Tabchange('.table-title','.tab-box3','.tab-lists')
Tabchange('.table-title','.tab-box4','.tab-lists')
//<----------从服务器获取内容渲染网页------>

//为了方便图片的地址调用定义一个地址的前缀



