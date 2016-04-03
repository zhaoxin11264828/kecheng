# javascript 概述

## 程序语言

* 基础逻辑处理部分

  *变量 数据类型     (数据存储)
  *分支和循环运算符  (逻辑操作)
  *函数(对语言的扩展)

  ### 变量类型
 ```javascript
 	var vr=1;          //num
 	var vr=1.2;        //num
 	var vr="11";       //string
 	var vr="abc";      //string
 	var vr=null;       //null
 	var vr=true;		//Boolean
 	var vr=undefined;  //undefined
 	var vr=[1,2,3]     //Array
 	var vr={a:1,b:2}   //object
 	var vr=function(){}//function
```
 ### 运算符
	+ - * / %
	===  !==   <   >  <=  >=  
	&&   ||   !

 ### 分支语句
 ```javascript
	if ()
	if()else()
	if()else if()else if()
	swith(x)(
		case1:
		break;
		case2:
		break;
		default:
		break
		)

 	
 	for(var i=0;i<10;i++){
 	alert(i);
 	}

 	var aa=[1,2,3,4];
 	for(var i in aa){
 	 alert(i);
 	}

 	while(var i=0;i=10;1++){
 	alert(i);
 	}

 	do{

 	}while()
 	```
 ### 函数
 	function xx(){

 	}
 	var fn=function(x1,x2){
		//arguments
 	}

 	fn(a,c)
 	```
 ### 函数的常用方法
 ### 字符串中的 常用方法
 ### 函数对象中的方法
 ### 对象的增删改查 原型链
 ### 数字对象身上的方法 toFixed()
 ### Math对象身上的方法
 	(以上需常回顾)
 	function A(c){
 	 this.x=c;
 	}
 	A.prototype.console=function(){
 		console.log(this.x)
 	}

## 针对特定用途的部分
> 当js来浏览器运行的那一刻
> 浏览器会创建一个window对象
> window对象中很多属性和方法
> 这些属性和方法不用加window.就可以使用
	
	dom对象
	dom集合

按照我们正常的编程思路
第一步就是找出元素
我们从document对象开始  利用它身上的方法
找出我们需要的元素（dom元素 dom集合）





### 选取元素
* var el=document.createElement
* var el=document.getElementById("") 返回拥有指定id名的一个对象引用
* var el=document.querySelector()   和 ById 类似
* var el=document.getElementsClassName("")返回拥有指定类名的对象的集合 存在兼容性问题 函数 getclass
* var el=document.getElementsTagName("")
返回拥有指定标签名的对象的集合
*var el=document.getElementByName() 表单对象\
* var el=document.querySelectorAll()


经过这一步我们会得到一个dom元素获dom集合
js 会用一个很大的对象来代表页面中我们看到的那个元素
 dom集合
 在一个类数组对象中存储dom对象构成一个集合



### 筛选元素
从一个dom对象开始，根据逻辑关系再去寻找dom对象
nextSibling
> 父元素
*el.parentNode
*el.parentElement
> 子元素
*el.childNodes
*el.children

*el.firstChild
*el.firstElementChild

*el.lastChild
*el.lastElementChild

>兄弟元素
* el.nextSibling
* el.nextElementSibling

* el.previousSibing
* el.previousElementSibing

### 操作属性(element)
* el.setAttribute()
* el.getAttribute()
* el.removeAttribute()
* el.hasAttribute()
* el.className
* el.id
* el.classlist


### 节点操作（node）
方法
* el.appendChild()
* el.insertBefore()
* el.removeChild()
* el.replaceChild()
* el.cloneNode()



### 操作样式
*el.style
el.style.color='red' 只能对行内样式进行获取 设置
*el.className="one"
兼容性问题获取 函数getstyle




###获取位置信息(htmlelement)
* el.offsetWidth
*  el.offsetHeight
* el.offsetTop
* el.offsetLeft
* el.offsetParent//具有定位属性的父元素
* el.innerHTML
* el.getBoundingClietRect() //计算距离浏览器窗口位置的
* getComputedStyle(el,null).width  //返回字符串
<!-- <!-- el.clientX
el.clientY
el.screenX
el.clientHeight
el.clientWidth
el.clientLeft
el.clientTop
el.getEventLeft
el.getEventTop -->

兼容性问题
el.layerX
el.layerY
offsetHeight
offsetWidth
offsetLeft
offsetTop

scrollHeight
scrollWidth
scrollLeft
scrollTop -->








### 节点操作
方法
* el.appendChild()
* el.insertBefore()
* el.removeChild()
* el.replaceChild()
* el.cloneNode()
nodeName
nodeValue
nodeType
createElement



###get 和set 在dom对象中的使用
var obj={a:1,b:2 ,
set c(x){console.log(222)},
get c(){return 234}}

console.dir(obj)
VM3015:2 Objecta: 1
b: 2
c: (...)
get c: c()
set c: c(x)
__proto__: Object

obj.c;
234
obj.c=890;
VM2950:3 222
890

### 获取元素信息
获取内容
innerHTML
innerText

textContent

* 三
* 四

### 声明

```javascript
var a=12;
var b=13;
var c=function(){
	alert(3);
}
```

### 定义对象
> var obj={"a":1,"b":2}  "a" 键值
> 定义对象时 键值一定用引号引
> 对象也是存储数据的一种方式
> 取值：obj.a ; obj["a "];(取属性a的值)
> 添加属性：obj["c"]=12; obj.c=12; 属性值可以是任意类型
> 删除属性：delete obj["a"];

> 中括号语法与点语法
> 非常明确 属性名时 delete obj.a;
> 不明确：属性名是用变量表示时  使用中括号 
> var cc=12; 变量作为键 属性名时 delete obj[cc];
> 修改属性值 obj["a"]=23;

