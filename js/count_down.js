//倒计时逻辑
//@param countDown倒计时方法里面 
//@param future 定时器结束时间，histry 定时器开始时间


//小时倒计时
function  countDown(future,histry ){
	//判断是否有histry,如果有就计算出到1970年的毫秒数
	//如果没有就计算当前时间到1970的毫秒数
	if(!histry){
		histry = new Date().getTime()
		
	}else{
		histry = new Date(histry).getTime()
	}
	//获取倒计时的结束日期到1970年的毫秒数
	future = new Date(future).getTime()
	//计算两个时间之间的毫秒数
	var distance = future - histry
	
	if(distance <= 0) {
		return '000000'
	}
	//计算倒计时的小时数
	var hours = Math.floor(distance/(60*60*1000)) 
	//计算倒计时的分钟数
	var minutes = Math.floor((distance - hours*60*60*1000)/(60*1000))
	//计算倒计时的秒数
	var seconds = Math.floor((distance - hours*60*60*1000 - minutes*60*1000)/1000)
	
	//调用方法改变位数
	
	return changeLength(hours)+changeLength(minutes)+changeLength(seconds)
	
}






//天数倒计时
function  countDownDate(future,histry ){
	//判断是否有histry,如果有就计算出到1970年的毫秒数
	//如果没有就计算当前时间到1970的毫秒数
	if(!histry){
		histry = new Date().getTime()
		
	}else{
		histry = new Date(histry).getTime()
	}
	//获取倒计时的结束日期到1970年的毫秒数
	future = new Date(future).getTime()
	//计算两个时间之间的毫秒数
	var distance = future - histry
	if(distance <= 0) {
		return '000000000'
	}
	//计算天数
	var dates = Math.floor(distance/(24*60*60*1000)) 
	//计算倒计时的小时数
	var hours = Math.floor((distance-dates*24*60*60*1000)/(60*60*1000)) 
	//计算倒计时的分钟数
	var minutes = Math.floor((distance-dates*24*60*60*1000 - hours*60*60*1000)/(60*1000))
	//计算倒计时的秒数
	var seconds = Math.floor((distance-dates*24*60*60*1000 - hours*60*60*1000 - minutes*60*1000)/1000)
	//调用方法改变位数
	return changeLengthToThree(dates)+changeLength(hours)+changeLength(minutes)+changeLength(seconds)
	
}



//改变数字的长度 将1位数改为两位数 并将输入的类型转换成字符串
//@param num不能为空 
function changeLength(num){
	
	//先将其转换成字符串
	num = String(num)
	//判断值的长度
	if(num.length<2){
		num = '0'+num
	}
	return num
}
//改变数字的长度 将1位数改为两位数 并将输入的类型转换成字符串
//@param num不能
function changeLengthToThree(num){
	
	//先将其转换成字符串
	num = String(num)
	//判断值的长度
	if(num.length<2){
		num = '00'+num
	}
	if(num.length<3){
		num = '0'+num
	}
	return num
}