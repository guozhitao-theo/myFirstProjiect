//网络请求方法
//一共传1个参数 requestUrl,需要请求的服务器地址
bannerBox()
merchandiseBox0()
merchandiseBox1()
//轮播图渲染
function bannerBox(){
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
//		console.log(request.readyState)
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
}

//渲染第一个盒子的内容
function merchandiseBox0(){
	//定义一个图片路径的地址前缀
	var prefix = 'http://127.0.0.1:3001/'
	//获得需要添加内容的父级盒子
	var merchandiseBox = document.querySelector('.merchandise-classify-box0')
	//定义一个公共变量 接受返还值
	var resoultList = ''
	//新建一个XMl对象
	var request = new XMLHttpRequest
	//打开请求
	request.open("GET","http://127.0.0.1:3001/lists",true)
	//发送请求到后台
	request.send(null)
	//请求监听
	request.onreadystatechange = function(){
		//打印当前状态
	//	console.log(request1.readyState)
		//判断状态是否为4
		if(request.readyState == 4){
			//打印回复的字符串
	//		console.log(request1.responseText)
			//将响应的字符串转成对象
			var resoult = JSON.parse(request.responseText)
			
			//判断请求是否发送成功
			if(resoult.success){
				//取出数组内的对象
				resoultList = resoult.list
				//将获取的数组填充到页面
				var html = ''
				for(i=0;i<resoultList.length;i++){
					//定义一个模板字符串
					 html += `
						<li class="merchandise-classify-lists">
							<img class="merchandise-img" src="${prefix+resoultList[i].img}"/>
							<div class="merchandise-text font-14px text-hidden">
								${resoultList[i].title}
							</div>
							<div class="merchandise-price font-14 font-red">
								¥${resoultList[i].price}
							</div>
						</li>	
						`
					
					
				}
				merchandiseBox.innerHTML = html
			}
		}
		
	}

}
//渲染第二个盒子的内容
function merchandiseBox1(){
	//定义一个图片路径的地址前缀
	var prefix = 'http://127.0.0.1:3001/'
	//获得需要添加内容的父级盒子
	var merchandiseBox = document.querySelector('.merchandise-classify-box1')
	//定义一个公共变量 接受返还值
	var resoultList = ''
	//新建一个XMl对象
	var request = new XMLHttpRequest
	//打开请求
	request.open("GET","http://127.0.0.1:3001/lists?id=1",true)
	//发送请求到后台
	request.send(null)
	//请求监听
	request.onreadystatechange = function(){
		//打印当前状态
	//	console.log(request1.readyState)
		//判断状态是否为4
		if(request.readyState == 4){
			//打印回复的字符串
	//		console.log(request1.responseText)
			//将响应的字符串转成对象
			var resoult = JSON.parse(request.responseText)
			
			//判断请求是否发送成功
			if(resoult.success){
				//取出数组内的对象
				resoultList = resoult.list
				//将获取的数组填充到页面
				var html = ''
				for(i=0;i<resoultList.length;i++){
					//定义一个模板字符串
					 html += `
						<li class="merchandise-classify-lists">
							<img class="merchandise-img" src="${prefix+resoultList[i].img}"/>
							<div class="merchandise-text font-14px text-hidden">
								${resoultList[i].title}
							</div>
							<div class="merchandise-price font-14 font-red">
								¥${resoultList[i].price}
							</div>
						</li>	
						`
					
					console.log(typeof resoultList[i].price)
				}
				merchandiseBox.innerHTML = html
			}
		}
		
	}

}



//jQ ajax方法





