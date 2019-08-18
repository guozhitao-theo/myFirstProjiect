//积分商城的逻辑

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
		`<span>${countDownDateTime[0]}${countDownDateTime[1]}${countDownDateTime[2]}天${countDownDateTime[3]}${countDownDateTime[4]}时${countDownDateTime[5]}${countDownDateTime[6]}分${countDownDateTime[7]}${countDownDateTime[8]}秒后结束</span>`
		var  intergralDownTime = document.querySelectorAll('.down-time')
		for(i=0;i<intergralDownTime.length-1;i++){
			intergralDownTime[i].innerHTML = html
		}
}