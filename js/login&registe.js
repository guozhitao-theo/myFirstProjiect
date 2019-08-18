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