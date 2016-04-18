 
// 选项卡函数
// items：鼠标移过的盒子
// downmenus:鼠标移过时要出现的盒子
 function optioncard(items,downMenus){
	 	for(var i=0;i<items.length;i++){
	 		items[i].index=i;//添加属性 存放i 每次循环的值
		items[i].onmouseover=function(){//在事件触发时 函数才开始执行

			for(var j=0;j<items.length;j++){
				downMenus[j].style.display='none';
			}
			downMenus[this.index].style.display='block';
			
		}
		items[i].onmouseout=function(){
			for(var j=0;j<items.length;j++){
				downMenus[j].style.display='none';
			}
		}
	}
}


function optioncard2(items,downMenus){
	 	for(var i=0;i<items.length;i++){
	 		items[i].index=i;//添加属性 存放i 每次循环的值
		items[i].onmouseover=function(){//在事件触发时 函数才开始执行
            this.classList.add("selected");
			for(var j=0;j<items.length;j++){
				downMenus[j].style.display='none';
			}
			downMenus[this.index].style.display='block';
			
		}
		items[i].onmouseout=function(){
			this.classList.remove("selected");
			for(var j=0;j<items.length;j++){
				downMenus[j].style.display='none';
			}
		}
	}
}