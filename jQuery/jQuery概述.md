jQuery

对javascript语言的扩展 是一个库 用来解决兼容性问题

前端开发在开始写代码之前 一般首先要解决的两个问题
1、解决js 本身的兼容性问题 es5shim
2、解决dom扩展部分的兼容性问题 jQuery

```html
第一个引入的js库用来解决兼容性问题

<script src = "jQuery.js"></script>
<script src = "index.js"></script>


<script src = "header.js"></script>
<script src = "my.js"></script>
引用多个js时  需要考虑全局变量  是否冲突
````

> 公开引用的js文件一定要解决的一个问题
> 不能污染全局作用域


```javascript

var getEle = function(selector){
	if(document.querySelector){
	return document.querySelector(selector);
}else{
	console.error("请更换浏览器");
	console.warnning("请更换浏览器");
}
}
```


```javascript
var el = getElement('.abc');
var getElement = function(){
	
};
```




上面的这种写法 的两个问题
1、用户需要学习一门全新的语法
2、用户需要避开那个库中的全局变量




1、用闭包函数 解决 变量污染问题  只污染一个变量
2、 解决了兼容性问题
3、 使用简单 代码量减少 更方便

window.$ = $ ; window上的方法可以在任何时候使用 
将方法给到window上 相当于将函数内部的方法全局化 任何时候都可以调用


```jQuery.js
(function(){
	var chuli = function(str){
	return selector = '.'+str;
}
var $ = function(selector){
	if(document.querySelector){
		str = chuli(selector)
		return document.querySelector(str);
	}

}
window.$ = $;
})()
```


```index.js
$("test").addEventListener("click",function(){
	console.log(1);
})
```


## 实现原理

DOM对象

```javascript
var el = {
	offsetWidth:12,
	 __proto__:(HTMLDivElement)
	  title:'a',
	   __proto__:HTMLElement
	    src:'xxx.png'
	      __proto__:Element
	       getAttribute:fn,
	        __proto__:Node
	         nodeName:'IMG'
	          __proto__:

}```

DOM集合

````javascript
var els{
	0:el,
	1:el,
	2:el
	length:3,
	__proto__:
}```


jQuery 对象集合
```javascript
var els{
	0:el,
	1:el,
	2:el
	length:3,
	__proto__:
	  addclass:fn,
	  removeClass:fn,
	  toggleClass:fn,
	  css:fn,
	  prop:fn
	  ...
}
```


jQuery 是一个解决兼容性问题的javascript库

库可以简单的理解成一堆以某种方式组织起来的，方便，易用的函数的函数集合

jQuery库的优点

1、全面解决了pc端的兼容性问题
2、语法精炼 性能好 插件库庞大

jQuery版本号之间的区别
1.xx - > 1.12 支持ie6-8
2.0 彻底放弃了对ie<10 的支持 ，转向移动端

##  jQuery 原理

选取元素 并直接操作  并解决了兼容性问题 
$().addclass("red");  使用


理解jQuery 的关键点
1、new的时候发生了什么
    新建了一个空的对象 并
2、对象的原型链
3、函数对象身上一个属性（prototype)和一个方法（call）
4、this的指向

核心原理
```javascript
(function(){
	var jquery = function(selector){
      var els  = document.querySelecor(selector);
      for(var i=0;i<els.length;i++){
			this[i] = els[i];
      }
      this.length = els.length;
	}
	jQuery.assclass = function(str){
	 for(var i=0;i<this.length;i++){
	    this[i].classList.add(str);
	 }

	}
	var jQuery = function(){
	return new jquery(selector);
	}
	window.$ = jQuery;
})()
```


```
var mao = function(){
			this.zhuazi = 4,
			this.erduo = 1
		}

函数对象的属性方法
function mao()
arguments:null
caller:null
length:0
name:""
prototype:Object 函数对象的属性
__proto__:()
<function scope>



$ 函数能接受的参数类型以及对应的返回值

* null  jQuery对象 
$(null);  j…y.fn.init {}

* 数组，对象  处理过的jQuery对象
$([1,2,3]);
[1, 2, 3]

$({a:1,b:2});
[Object
a: 1
b: 2
__proto__: Object]
console.dir($({a:1,b:2}))
VM1049:2 jQuery.fn.init[1]
* 选择器
* html标签  var a = $("<div><h3>mimi</h3></div>")[0];
* DOM对象
$(document.querySelector(".test"))
[<ul id=​"test" class=​"test">​…​</ul>​<li class=​"item">​</li>​<li class=​"item">​</li>​<li class=​"item">​</li>​<li class=​"item">​</li>​</ul>​]
console.dir($(document.querySelector(".test")))
VM1133:2 jQuery.fn.init[1]

* DOM集合
* 函数  在页面加载完之后  执行函数


jQuery中的大多数方法都会返回一个jQuery集合
* 操作集合的方法返回的就是原集合
* 对集合做过过滤或者导致集合改变的一些方法返回改变后的jQuery集合
* $ .append  这一类方法，当涉及到创建dom对象时，他们会返回创建完成后的一个jQuery集合

所以在jQuery中链式调用很常见

```javascript
$('#selectors h1')
.width(100)
.height(200)
.css({color:'red'})
.offset(); 
```
offset()  position()  等返回的是object{top:90,left:80}  不能再接着链


## jQuery中能使用的选择器

jQuery中的选择器使用一个叫sizzle.js的库

.a p h1 > .class:hover
从后往前找 （在树中，找父元素只需要一次查找，找子元素需要遍历）

* parent > child 子选择器 父元素下的直接子元素
* A B后代选择器
* prev + next 相邻一个选择器
* prev ~ next 相邻所有选择器

### Basic Filters

$($0).next().find('li:even')

:eq()  指向第几个小标
:even   获取下标为偶数的
：first   获取第一个下标为0
：gt(index)  大于index 下标的
：last   获取最后一个
：lt()   获取小于index 的
:odd    获取下标为奇数的
：header  获取从h1~h6的
：lang(值) 找出属性中有lang的元素
:target   链接 找到原来的html index.html#A
:root 找html
：not()  可以接受简单的选择器 从选中的元素中剔除符合规则的


### content Filters

* ：contains()  过滤内容中包含某个字符的元素
* ：empty    $('p:empty')  没有内容的元素
* ：has()   过滤是否含有某个子元素的元素
            括号中可以接受一个简单的选择器 判断已选中的元素的子元素是个包含某个规则的元素

* ：parent   选中元素中包含子元素的


### 显示隐藏过滤
  
* ：visible  留下元素中可见的元素
* ：hidden    留下元素中不可见的元素

### 属性

* [attr]   筛选出有attr这个属性的
* [attr=aa] 精确等于
* [attr != aa]

* [attr |= aa] aa || aa-xxxx
* [attr *= aa]  含aa  baac  属性中包含aa
* [attr ^= aa]   aabbcc aa-cc aa-ax  以aa开头的
* [attr ~= aa]   class= 'xx aa zz' aa 
* [attr $= aa]   xxx-aa yyy-aa  以aa结尾的
 


 * :nth-child()  判断依据 选中的元素是不是父元素下的第几个
 * ：nth-last-child()   反数
 * :first-child
 * :last-child

 * :nth-of-type()   判断依据 选中的元素是不是