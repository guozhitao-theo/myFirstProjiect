//删除和添加的方法
//@param 参数parent为包含着需要删除或者添加的盒子的父级


//定义父级
var parent = ''

//添加方法

function addFun(parents){
	//先在html文件里面获取parent
	var parentDom = document.querySelector(parents)
	//获得添加按钮
	var addBtn = parentDom.querySelectorAll('.add-button')
}



//删除的方法
//@param 参数parent为包含着需要删除的盒子的父级
function deletFun(parents) {
	//先在document内获取parent
	var parentDom = document.querySelector(parents)
	//获取删除的按钮
	var deletBtn = parentDom.querySelectorAll('.delet-button')
	//获取需要删除或者添加的盒子
//	var deletBox = parentDom.querySelectorAll('.deletadd-box')
//	console.log(deletBox)
	//给删除按钮添加点击事件
	for(i=0;i<deletBtn.length;i++){
		deletBtn[i].onclick = function(){
			var deletBox = this.parentNode.className
			getparent(this)
			parentDom.removeChild(parent)
		}
	}
}




//获取祖先中含有deletadd-box类名的方法
function getparent(element){
	var aNode = element
	for(i=0;i<20;i++){
		aNode = aNode.parentNode
		if(aNode.className.indexOf('deletadd-box')>=0 ){
			parent = aNode
			return;
			
		}
	}

	
}
