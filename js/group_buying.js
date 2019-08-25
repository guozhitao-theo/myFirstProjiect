//团购界面的逻辑
//
var total = 0
//第一步先获取浏览器地址属性
var page = getBrow('page')
var count = getBrow('count')
//定义全局变量，用于传page
var index = 0

//定义一个地址
var requestUrl = 'http://192.168.97.231:3000/'
//第二步，ajax发送请求，数据为page和count
$.ajax({
	type: "get",
	url: requestUrl+"list",
	async: true,
	datatype: 'json',
	data: {
		page: page,
		count: count
	},
	success: function(res){
		//第三步，翻页效果添加页码
		//定义模板字符串
		var html = ''
		for(var i=0;i<res.total;i++ ){
			//判断是不是当前的页码，如果是就添加一个类名，now,来改变他的样式
			if(page==(i+1)){
				html += `
					<li><a href="group_buying.html?page=${i+1}&count=${count}" class="page-button now">${i+1}</a></li>
					`
			//不是就不用添加样式
			}else{
			html += `
			<li><a href="group_buying.html?page=${i+1}&count=${count}" class="page-button">${i+1}</a></li>
			`}
		}
		//将模板字符串写入
		$('.page-button.page-up').parent().after(html)
		total = res.total
		//如果当前页码大于或者等于总的页码数，设置样式使其，呈现不可点击状态
		if(page >=total) {
			$('.page-button.page-down').css({
				background: '#f2f2f2',
				cursor: 'not-allowed'
			})
		}
		//如果当前页码小于或着等于1，设置样式使其为不可点击
		if(page<=1) {
			$('.page-button.page-up').css({
				background: '#f2f2f2',
				cursor: 'not-allowed'
			})
		}
	
		
		//数据渲染
		if(res.success){
			//获取服务其中的内容
			var list = res.list
			//定义一个模板字符串
			var html = ''
			//循环添加数据
			for(i=0;i<list.length;i++){
				html+=`<div class="groupBuy-goods-list">
							<!--图片盒子-->
							<div class="groupBuy-goods-list-content">
								<div class="groupBuy-goods-list-incontent">
									<div class="groupBuy-goods-img">
										<img src="${requestUrl+list[i].img}"/>
									</div>
									<div class="groupBuy-goods-text">
										<p class="text-hidden-2">${list[i].title}</p>
										<!--库存-->
										<div class="surplus-box">
											<!--进度条-->
											<div class="progress-out">
												<div class="progress-in">
												</div>
											</div>
											<span class="margin-5-left">已有50人购买</span>
										</div>
									</div>
									
								</div>
							</div>
							<!--正常的状态-->
							<div class="goods-bottom">
								<span class="font-red font-16">${list[i].price}</span>
								<span class="font-gry">￥999</span>
								<span class="font-gry fr">商品产地</span>
							</div>
							<!--马上抢盒子-->
							<div class="snatch-box">
								<a class="snatch-btn">立即团购</a>
							</div>
						</div>`
			}
			$('.groupBuy-goods-box').append(html)
		}
	}
})

//先写入了所以要添加绑定事件
//第三步添加按钮点击事件
$('.page-box').on('click','.page-button',function(){
	//如果当前点击按钮为上一页则page-1
	if($(this).hasClass('page-up')){
		page--
		//如果页码小于1，就给他赋值1
		if(page<1){
			page = 1
			return
		}
		//跳转页面
		window.location = 'group_buying.html?page='+page+'&count='+count
		//如果有类名page-down就page+1
	}else if($(this).hasClass('page-down')){
		page++
		//如果page大于总的页码数，就把总数复制给页码
		if(page>total){
		page = total
		return
		}
		//页面跳转
		window.location = 'group_buying.html?page='+page+'&count='+count
	}
})

 function getBrow(name){
 	//获得浏览器的search属性内容
 	var search = window.location.search
 	//通过正则获得search里面的页码数量
 	//定义一个正则表达式
 	search  = search.substr(1) 
 	var  reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
 	//匹配页码和数量
 	var match = search.match(reg)
 	//如果有match 获取第二个括号里面的值，即等号后面的值,否则返回''
 	if(match){
 		return match[2]
 	}else{
 		return ''
 	}
 	
 }
