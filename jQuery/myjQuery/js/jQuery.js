// (function(){
// 	var chuli = function(str){
// 	return selector = '.'+str;
// }
// var $ = function(selector){
// 	if(document.querySelector){
// 		str = chuli(selector)
// 		return document.querySelector(str);
// 	}

// }
// window.$ = $;
// })()


// 1、用闭包函数 解决 变量污染问题  只污染一个变量
// 2、 解决了兼容性问题
// 3、 使用简单 代码量减少 更方便

// window.$ = $ ; window上的方法可以在任何时候使用 
// 将方法给到window上 相当于将函数内部的方法全局化 任何时候都可以调用

(function(){
	
	var __j  = function(selector){
        var els = document.querySelectorAll(selector);
        for(var i = 0;i <els.length;i ++){
        	this[i] = els[i]
        }
        this.length = els.length;			
	}

	__j.prototype.addclass = function(str){
		for(var i = 0;i<this.length;i++){
			this[i].classList.add(str);e
		}

	}

	var jQuery = function(selector){
		return new __j(selector);
	}

	window.$ = jQuery;
})()

