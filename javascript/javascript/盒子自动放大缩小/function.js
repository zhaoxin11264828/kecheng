		
	function  zidong(max,min,name){
		var divs=$(name);
		//var divs=document.getElementsByTagName('div')[0];
		var flag=true;
   	 	var t;
   	 	var objw=parseInt(getstyle(divs,"width"));
   	 	var objh=parseInt(getstyle(divs,"height"));
   	 	var widths=objw;
   	 	var heights=objh;
   	 	var speed=10;
    document.documentElement.onclick=function(){	
	
	if(flag){
	    t=setInterval(function(){
	    	if(widths>=max){
	    		widths=max;
	    		heights=max;
	    		speed=-speed;
	    	}else if(heights<=min){
	    		widths=min;
	    		heights=min;
	    		speed=10;
	    	}
	    	widths+=speed;
	    	heights+=speed;
		divs.style.width=widths+'px';
		divs.style.height=heights+'px';
	},200)
		flag=false;
	}else{
		clearInterval(t)
		flag=true;
	}
	
}
function getstyle(obj,attr){
			// return getComputedStyle(obj,null)[attr];
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,null)[attr];
			}
		}

		//区分 类名 id名 标签名的函数
		// var aa=$(".one");
		//如何区分
		// #one
		// .one
		// div
		//<div> 创建一个div
		// alert(aa)
		function $(selecter,ranges){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//返回在指定位置的字符串
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//截取字符串 substring(起始，结束)不包括结束位置
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//类函数
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//匹配名字是否符合标准//正则表达式
				return ranges.getElementsByTagName(selecter);

			}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
				return ranges.createElement(selecter.slice(1,-1));
			}
			}
			

			
	function getClass(className,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(className);

	}else{
		var all=range.getELementsByTagName('*');
		var newarr=[];
		for(var i=0;i<all.length;i++){
// 			if(all[i].className==className)
			if(checkClass(all[i],className))//检查class名中有没有要找的class名字符串
			{
					newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
}