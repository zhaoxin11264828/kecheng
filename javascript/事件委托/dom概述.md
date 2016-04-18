# dom 是什么

Document Object Modal(文档对象模型)

> 我们在页面中看到的 div span p h1 等等元素或文字
> 在javascript 眼中都是一个对象


# 从一个web 应用的开发说起

> 第一步 ，从页面中去选取一个元素出来
> 当我们的代码在浏览器运行时，
> 浏览器已经帮我们创建了很多对象，
> 对象中有很多方法可供我们使用
> 这些东西都在一个叫做window的全局变量里

> window 对象中的属性 可以省略window 去调用
> 选取元素，我们从window.document 开始

> 选取元素的方式

> 快速从document中取出dom对象的办法

* document.body
* document.head
* docuemnt.title
* document.documentElement  代表了整个html标签的一个dom对象


* document.querySelector("选择器")
* document.getElementById("id名")

* document.querySelectorAll("选择器")
* document.getElementsByClassName("类名")
* document.getElementsByTagName("标签名")
* document.getElementsByName("name")




> 这些方法的返回结果是什么？
> 前两个的返回结果是一个代表了页面中某个元素的对象  我们叫dom对象
> 后四个的返回结果是一个类数组对象
> 我们把它叫做dom集合


##  dom对象常用的属性和方法

### Object

var arr = [1,2,3];  
方法
* 对象.toString();
* 对象.valueOf();

### EventTarget事件源

* 对象.addEventListener("事件类型"，函数，布尔值)
* 对象.removeEventListener(事件名)
* 对象.dispatchEvent(事件名)
* textContent

### EventElement


### Node

> 描述节点 所有的dom 对象都是一个节点 用这个三个属性来描述节点
* nodeName
* nodeType
* nodeValue

> 每个dom对象身上都可以获取到自己的相邻或父或子节点
> 我们能从每个dom对象身上取到自己的相邻或父或子节点（用的时候 调用方法获取）

3 2 2
> 取父节点中的
* childNodes   dom集合 （NodeList）
* firstChild   dom对象
* lastChild    dom对象

> 取子节点的
* parentElement  dom对象
* parentNode    dom对象


> 获取节点的文本内容（会自动过滤掉标签）
* textContent



> 每个dom对象中都提供了一些操作节点的方法

采用父dom对象.appendChild(dom对象)这种方式的

* appendChiild()   父dom对象.appendChild(dom对象)  执行完之后  返回 dom对象 可以使用dom对象的属性和方法 
* insertBefore()   父dom对象.insertBefore('dom对象','位置') 返回 你插入的dom对象
* 对象.replaceChild(替换的新对象，被替换的对象)    返回值 替换成的dom 对象
* 对象.removeChild(要移除的对象)      返回值   被移除掉的dom 对象

box.appendChild(el).insertBefore(el2,el.firstChild).appendChild()
var tmp = box.removeChild(el);

* 对象.hasChildNodes(子节点)  返回值  布尔类型  el.children.length
* 对象.contains(子节点)   返回值 布尔类型  判断一个节点中包不包含另一个节点  box.contains(h3);


* 对象.cloneNode()   返回值 dom对象 (true 包括复制文本  false 复制结构)
对象.cloneNode();只克隆结构       对象.cloneNode(true);克隆结构及内容 


### Element

> 元素 节点 的区别：
> 带标签的 既是元素 又是节点
> 不带标签的，比如div 内容的文字，比如注释，他们只是节点 不是元素


> 对象.children 取一个dom对象的所有子元素 不包括节点
 <!-- 对象.childNodes 获取所有节点 -->
 * 对象.firstElementChild;
 * 对象.lastElementChild

 * nextElementSibling
 * preciousElementsSibling

 > 对元素属性的操作  （html 元素的属性 就是头标签里的那些k='' 中的k）
 * 对象.classList="类名"
 * 对象.className  可读写
 * 对象.id    可读写
 * 对象.getAttribute()   $0.getAttribute("data-role")
 * 对象.setAttribute()  没有返回值  只是做一个操作
 * 对象.hasAttribute()  判断元素头标签中有没有某个属性
 * 对象.removeAttribute()
 * outerHTML
 * tagName


> 获取该元素的视窗位置 或其他与位置相关的信息
* 对象.getBoundingClientRect() ;
```返回值 ：
ClientRect {
bottom: 210
height: 202
left: 8
right: 590
top: 8
width: 582
}```


* scrollLeft
* scrollTop  可读写的
* clientWidth  一般用来结合document.documentElement.clientWidth
* clientHeight


> 从某个dom对象开始 可以缩小范围去查找
* 元素.querySelector()
* 元素.querySelectorAll()
* 元素.getElementByClassName()
* 元素.getElementByTagName()

## HTMLElement

* innerHTML   可读写的   能设置某个dom对象内部的html结构
> warning : 不要用这种方式  追加元素 el.innerHTML+= "<div></div>"
* innerText  剥离标签 直接获取文本

实时获取元素信息
* offsetHeight  返回值   不带单位  px 的值
* offsetWidth
* offsetTop
* offsetLeft
* offsetParent  只有定位属性（非static）的祖先元素  返回值 dom对象


操作元素的行内样式
* style  可读写的 读的时候获取元素的行内样式的值 ，不会去计算css文件中定义的属性
对象.style.float="left";

## HTML xxx Element

* value
* checked
* src





## 添加事件的两种方式及其区别

> 我们给dom对象的onclick属性赋值，值为一个函数
> 这次赋值和普通的对象赋值不太一样
> js会告诉浏览器，密切关注这个元素，如果有人点击它
> 帮我帮这个函数运行一下
> 运行函数的时候给我传一个参数，参数为一个对象
> 对象中要详细记录这次点击的一些信息 这个对象被称为事件对象

```javascript
//使用on xxx
var el = docuemnt.getElementById("box");
el.style.color = 'red';
el.onclick = [].slice;
el.onclick = function(e){
	
}
el.onclick = (function(){
	return function(){

}
})

给事件赋值一个函数即可 不论什么方式
// 使用addEventListener
el.addEventListener("事件类型",函数,false)

el.addEventListener("click",function(){
	
},false)  

yi.addEventListener("click",function(){
			console.log("yi")
		},true);


事件冒泡  事件捕获
true  事件捕获
false  事件冒泡
false 说明事件  从内到外  还是 从外到内


区别：
1、一些H5事件并没有onxxx这个版本
2、 onxx 再赋值一次  会覆盖上次赋值的那个函数，addEventListener 没有这个问题，它可以给一个事件添加多个函数，事件触发的时候，按照添加顺序，逐个调用处理函数。



### 自定义事件
click dblclick  自定义 threeclick 事件

```javascript
<!-- 自定义事件 -->
		var threeclick = new Event("threeclick");
		san.addEventListener("threeclick",function(){
			console.log("事件触发了")
		})
		san.addEventListener("click",(function(){
			var num = 0;
			return function(){
				num += 1;
				if(num === 3){
					san.dispatchEvent(threeclick)//分发事件
				}
				setTimeout(function(){
					num = 0;
				},500)
			}
		})())		
		```
### 阻止事件冒泡

1、从页面结构上去调整，让元素之间不再是包含关系
2、 使用事件对象身上的 stopPropagation()这个函数
e.stopPropagation();

```
san.addEventListener("click",function(e){
			console.log("san")
			e.stopPropagation();
		});
		```


### 阻止事件的默认行为

> 要从事件的根源去阻止默认行为

* e.preventDefault();
* onclick  document.onclick =  null;
```
document.addEventListener("mousedown",function(e){
				e.preventDefault();
		})
```



### 回调函数
> 当我们把函数x作为参数传给函数y
> 函数y 内部有对函数x的调用
> 我们把函数x叫做回调函数
Array.prototype.myForEach = function(fn){
			for(var i = 0;i<this.length;i++){
				fn.call(this,this[i]);
			}
		}
		var arr = [1,2,3,4,5,6];
		arr.myForEach(function(v){
			console.log(this,v)
		})


filter

如果 就是数组 我们遍历的时候可以使用
	var arr = [1,2,3,4]
	arr.forEach(function(v){
		console.log(v)
		})
如果是类数组的对象 我们遍历的时候可以使用
	var arr = [];
	forEach = arr.forEach;
	filter =  arr.filter;
	var els = document.querySelectorAll("div")
	forEach.call(els,function(v){
	console.log(v)  v就是dom集合中的dom对象
			})
	filter.call(els,function(v){
	console.log(v)  v就是dom集合中的dom对象
			})