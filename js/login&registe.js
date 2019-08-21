//登录界面的逻辑
toRegiste()
backLogin()
//登录界面跳注册界面
function toRegiste(){
	$('.registe-right-now').click(function(){
		
		$(this).closest('.login').css({
			display: 'none'
		})
		$('.registe').css({
			display: 'block'
		})
	})
}

//注册界面返回登录界面
function backLogin(){
	$('.longin-right-now').click(function(){
		
		$(this).closest('.registe').css({
			display: 'none'
		})
		$('.login').css({
			display: 'block'
		})
	})
}


//信息验证的逻辑
//先将jquery.validate的的messages的内容覆盖
$.extend($.validator,{
	messages: {
		required: "该字段不能为空",
		remote: "Please fix this field.",
		email: "请输入正确的邮箱",
		url: "请输入正确的地址.",
		date: "请输入有效的时间",
		dateISO: "请输入有效的时间 (ISO).",
		number: "请输入一个整数",
		digits: "请输入一个数字",
		equalTo: "请输入相同的密码",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "请您输入{0} 到 {1} 个数字" ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	}
})
//表单调用validator方法
//登录
$('.loginform').validate({
	//验证规则
	rules:{
		email:{
			required:true,
			email:true
		},
		password: {
			required:true,
			rangelength:[6,8]
		},
		tel: {
			required:true,
			tel:true
		}
		
	}
})
$('.registeforme').validate({
	//验证规则
	rules:{
		email:{
			required:true,
			email:true
		},
		password: {
			required:true,
			rangelength:[6,8]
		},
		repassword:{
			equalTo:$('[name=password]')
		},
		tel: {
			required:true,
			tel:true
		}
		
	}
})
//自定义验证$.validator.addMethod(验证名字，验证的方法，验证的错误信息)
$.validator.addMethod('tel',function(value,element){
	//定义一个正则表达式
	var reg = /^1[435678]\d{9}$/
	return reg.test(value)
	
},'请输入手机号')
