/*
 * ajaxPackage 封装ajax请求，希望请求多次调用 不同的地方已参数形式传入
 *@params  options obj
 * dateType  Json string
 * success 回调函数
 * */
function ajaxPackage(options){
	//定义一个ajax请求方法
	var request	= new XMLHttpRequest
	//打开请求
	request.open(options.method || 'get',options.url, options.ansyc || true)
	//发送请求
	request.send(options.data || null)
	//请求监听
	request.onreadystatechange = function(){
		//判断状态是否为4 并且 status 
		if(request.readyState == 4 && request.status == 200){
			//获得后台数据
			var data = request.responseText
			if(options.type = 'json'){
				data = JSON.parse(data)
			}
			options.success(data)
		}
	}
}
