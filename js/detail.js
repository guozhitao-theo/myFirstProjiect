//倒计时调用

countDownT()
var countInterval =  setInterval(countDownT,1000 )

function countDownT(){
	var countDownDateTime = countDownDate('2019-8-20 19:20:20')
	if(parseInt(countDownDateTime)<=0){
		clearInterval(countInterval)
	}
	countDownDateTime = countDownDateTime.split('')
	var html = 
		`<span class="iconfont icon-daojishi font-22 font-weight  "></span>
		<span class="font-18 font-orange">${countDownDateTime[0]}</span>
		<span class="font-18 font-orange">${countDownDateTime[1]}</span>
		<span class="font-18 font-orange">${countDownDateTime[2]}</span>
		<span class="font-14 ">天</span>
		<span class="font-18 font-orange">${countDownDateTime[3]}</span>
		<span class="font-18 font-orange">${countDownDateTime[4]}</span>
		<span class="font-14 ">时</span>
		<span class="font-18 font-orange">${countDownDateTime[5]}</span>
		<span class="font-18 font-orange">${countDownDateTime[6]}</span>
		<span class="font-14">分</span>
		<span class="font-18 font-orange">${countDownDateTime[7]}</span>
		<span class="font-18 font-orange">${countDownDateTime[8]}</span>
		<span class="font-14">秒</span>`
	document.querySelector('.count-down').innerHTML = html
}






/**数量加减方法
 * 
 * 
 **/
	var stockCount = document.querySelector('.stock-count')
	//定义一个变量将stockCoun的类型转换成number类型
	var stockNumber = parseInt(stockCount.innerHTML)
	var stockNumberChange = stockNumber
	//获取点击的input框
	var numberChange = document.querySelector('.number')
	//数字增加
	//获取点击增加按钮
	var numberAdd = document.querySelector('.number-add')
	 
	 	numberAdd.onclick = function(){
			var numberC = parseInt(numberChange.value)
			console.log(numberC)
			if(numberC>=stockNumber){
				numberChange.value =stockNumber
				stockCount.innerHTML = 1
			}else{
				numberC +=1
	 			numberChange.value = numberC
				stockNumberChange --
				stockCount.innerHTML = stockNumberChange
			}
	 	}
	//数字减少
	//获取点击按钮
	var numberSub = document.querySelector('.number-subtract')
		numberSub.onclick = function(){
			var numberC = parseInt(numberChange.value)
			numberC -=1
	 		numberChange.value = numberC
			stockNumberChange ++
			stockCount.innerHTML = stockNumberChange
			//判断当数量减为1的时候数字不减，库存不加
			if(numberC<=1){
				numberChange.value =1
				stockNumberChange = stockNumber
				stockCount.innerHTML = stockNumber
			}
			
		}
	
	
	//获取显示库存的数字值

	




/*
 *添加评论
*/
//第一个按钮添加事件如果已经购买商品就显示评论框
//获取评论框
var commentFirstBtn = $('.comments-btn')
commentFirstBtn.click(function(){
	$('.commenting-box').slideToggle()
	
})
showcoments()

function showcoments(){
	//获取发表评论按钮
	var commentBtn = $('.commenting-btn')
	//给按钮添加点击事件
	commentBtn.click(function(){
		//获取textarea
		var commentContentValue = $('.commenting-content').val()
		console.log(commentContentValue)
		//判断文本框里是否有内容
		if(commentContentValue){
			//弹出提示框是否确认提交
			if(confirm('是否发表评论')){
				var commentContent =  
					`<li class="clearfix">
					<!--左边用户头像-->
					<div class="user-avatar fl">
						<img class="user-avatar-img" src="img/dav.jpg"/>
						<p class="font-12">郭***涛</p>
					</div>
					<!--评论详情-->
					<div class="all-coment-detail fl font-12 padding-10-left">
						<p>好评 | 2019-20-12  16:20:10</p>
						<p class="text-hidden-2 margin-10-top detial-text-content">${commentContentValue}</p>
					</div>
					//将需要添加的盒子获取并将内容写入
					</li>`
				$('.all-conment-conten').prepend(commentContent)
				
				$('.commenting-content').val('')
				$('.commenting-box').css({
//					display: 'none'
				})
			}
		}
	})
}

//<---------放大镜-------------->
$('.jqzoom').jqzoom({
	width: 400,
	height:400
})
