window.onload=function(){
    var win=document.querySelector(".window1");
	var imgs=$("a",win);
	var ul=document.querySelector(".nav_trriger_warp");
	var liss=$("li",ul);
	// var btns=$(".btn",win);
	var num=0;
	liss[0].className='eva-switchable-active';
	var t=setInterval(move,1000);
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1000);
	}
	for(var i=0;i<imgs.length;i++){
		liss[i].index=i;
		// alert(this.index)
		liss[i].onclick=function(){
			num=this.index;
			for(var i=0;i<imgs.length;i++){
			//添加动画
			animate(imgs[i],{opacity:0},500);
			// imgs[i].style.zIndex=0;#BBC4D2
			// colorAnimate (liss[i],"background","#BBC4D2",100)
			liss[i].className='';
		}
		animate(imgs[this.index],{opacity:1},500);
		// imgs[this.index].style.zIndex=3;
		// colorAnimate (liss[this.index],"background","#74586F",100)
		liss[this.index].className='eva-switchable-active';
		}
	}
	



//banner 上一个覆盖下一个
	function move(){
		//改变当前下标
		num++;
		//限定范围
		if(num==imgs.length){
			num=0;

		}
		//所有层级都降低
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},500);
			// imgs[i].style.zIndex=0;
			colorAnimate (liss[i],"background","#BBC4D2",100)
			// liss[i].className='hots';
		}
		//当前的层级调高
		animate(imgs[num],{opacity:1},500);
		// imgs[num].style.zIndex=3;colorAnimate (liss[num],"background","#E525288",500)
		colorAnimate (liss[num],"background","#74586F",100)
		// liss[num].className='hotss';
	
	}



}

function $(selecter,ranges){
			if(typeof selecter=="string"){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//返回在指定位置的字符串
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//截取字符串 substring(起始，结束)不包括结束位置
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//类函数
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//匹配名字是否符合标准//正则表达式
				console.log(ranges)
				console.log(selecter)
				return ranges.getElementsByTagName(selecter);

			}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
				//判断输入的是一个<div>新的div时
				return ranges.createElement(selecter.slice(1,-1));
			}
		}else if(typeof selecter=='function'){
				addEvent(window,"load",selecter)
			}
		}
