//积分商城的逻辑

//倒计时调用

//定义一个存放时间的数组
let timeT = ['2019-9-20 19:20:20',
				'2019-9-2 19:20:20',
				'2019-9-3 19:20:20',
				'2019-9-4 19:20:20',
				'2019-9-5 19:20:20',
			]
//for 循环分别调用定时器方法
for(let i =0;i<timeT.length;i++){
	//获取需要添加倒计时的盒子
	var  intergralDownTime = document.querySelectorAll('.down-time')
	var countInterval =  setInterval(countDownT(timeT[i]),1000)
	intergralDownTime[i].innerHTML=countDownT(timeT[i])
	
}



function countDownT(timeT){
	var countDownDateTime = countDownDate(timeT)
	if(parseInt(countDownDateTime)<=0){
		clearInterval(countInterval)
	}
	countDownDateTime = countDownDateTime.split('')
	var html = 
		`<span> ${countDownDateTime[0]}${countDownDateTime[1]}${countDownDateTime[2]}天${countDownDateTime[3]}${countDownDateTime[4]}时${countDownDateTime[5]}${countDownDateTime[6]}分${countDownDateTime[7]}${countDownDateTime[8]}秒后结束</span>`
	return html	
}