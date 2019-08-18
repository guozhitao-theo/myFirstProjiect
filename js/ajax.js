//网络请求



//获取需要改变的内容的父级盒子
var carsolBox = document.querySelector('.carsol-img')
//新建一个xml对象
var request = new XMLHttpRequest
//定义一个地址前缀
var requestUrl = 'http://127.0.0.1:3001/' 
//打开请求
request.open("GET",'http://127.0.0.1:3001/getbanner',true)

//发送请求到后台
request.send(null)
//请求监听
request.onreadystatechange = function(){
	//打印当前状态
	console.log(request.readyState)
	//看是否到4状态
	if(request.readyState == 4){
		//将json字符串转成对象
		var carsol = JSON.parse(request.responseText)
		//判断后台请求是否发送成功
		if(carsol.success){
			//取出对象内的数组
			 var lists = carsol.list
			 //定义模板字符串,并且添加轮播图的第一张图片
			 var html = `<img class="carsol-img-img" src="${requestUrl+lists[lists.length-1].img}"/> `
			 
			 //给轮播图盒子循环添加图片
			 for(i=0;i<lists.length;i++){
			 	html += `<img class="carsol-img-img" src="${requestUrl+lists[i].img}"/> `
			 }
			 //添加轮播图最后一张图片
			 html +=  `<img class="carsol-img-img" src="${requestUrl+lists[0].img}"/> `
			 
			 //更改图片
			 
			 
			carsolBox.innerHTML = html
			
		}
		
	}
}

