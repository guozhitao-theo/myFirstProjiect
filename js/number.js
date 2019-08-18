/**数量加减方法
 * 
 * 
 **/
	var stockCount = document.querySelector('.stock-count')
	//定义一个变量将stockCoun的类型转换成number类型
	var stockNumber = parseInt(stockCount.innerHTML)
	var stockNumberChange = stockNumber
	//获取点击的input框
	var numberChange = document.querySelectorAll('.number')
	//数字增加
	//获取点击增加按钮
	var numberAdd = document.querySelectorAll('.number-add')
	 for(i=0;i<numberAdd.length;i++){
	 	numberAdd[i].index=i
	 	numberAdd[i].onclick = function(){
			var numberC = parseInt(numberChange[this.index].value)
			if(numberC<stockNumber &&numberC>=1){
				numberC +=1
	 			numberChange[this.index].value = numberC
				stockNumberChange --
				stockCount.innerHTML = stockNumberChange
				
				
			}else{
				this.Index = stockNumber-1
				numberChange[this.Index].value =stockNumber
				stockCount.innerHTML = 0
			}
	 	}
	 }
	//数字减少
	//获取点击按钮
	var numberSub = document.querySelectorAll('.number-subtract')
	for(j=0;j<numberSub.length;j++){
		numberSub[j].Index = j
		numberSub[j].onclick = function(){
			var numberC = parseInt(numberChange[this.Index].value)
			numberC -=1
	 		numberChange[this.Index].value = numberC
			stockNumberChange ++
			stockCount.innerHTML = stockNumberChange
			//判断当数量减为1的时候数字不减，库存不加
			if(numberC<=1){
				numberChange[this.Index].value =1
				stockCount.innerHTML = stockNumber
			}
			
		}
	}
	//获取显示库存的数字值

	
	

