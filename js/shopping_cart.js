//购物车js逻辑语言


//获取全选按钮
var shoppingCheckAll = $('.chooseall')
//获取需要全选的按钮
var shoppingCheck = $('.shoppingCarDetialCheck')
console.log(shoppingCheck)
//给form表单添加内容改变事件
shoppingCheckAll.change(function(){
	//判断当前复选框是否选中
	if(this.checked){
		shoppingCheck.prop('checked',true)
	}else{
		shoppingCheck.prop('checked',false)
	}
})






	
//-<-------------------------删除-------------------------------->
//调用添加删除方法
deletFun('.shoppingCart')
