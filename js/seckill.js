/*秒杀页面的逻辑*/

//倒计时
countDownT()
var countInterval =  setInterval(countDownT,1000 )
function countDownT(){
	var countDownTime = countDown('2019-8-22 20:24:00')
	if(parseInt(countDownTime)<=0){
		clearInterval(countInterval)
	}
	countDownTime = countDownTime.split('')
	var html = 
		`
		<span class="iconfont icon-daojishi font-weight font-36 countdown"></span>
		<span class="font-28 font-weight margin-5-left">今日限购</span>
		<span class="margin-5-left">本场还剩</span>
		<span class="timer font-24 margin-10-left">${countDownTime[0]}</span>
		<span class="timer font-24">${countDownTime[1]}</span>
		<span class="font-24">:</span>
		<span class="timer font-24">${countDownTime[2]}</span>
		<span class="timer font-24">${countDownTime[3]}</span>
		<span class="font-24">:</span>
		<span class="timer font-24">${countDownTime[4]}</span>
		<span class="timer font-24">${countDownTime[5]}</span>
		`
	document.querySelector('.seckill-countdown-content').innerHTML = html
}