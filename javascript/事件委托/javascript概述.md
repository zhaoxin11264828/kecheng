#javascript 是什么

>程序语言

#程序语言是什么

>和计算机交流的语言

#计算机是什么？  能做什么？

>计算机就是用来做计算的
程序语言就是一条条的人类可读的指令 告诉计算机去怎么做计算

#举例：如菜谱 (告诉怎么做)
> 材料 （提前准备的）
> 工具  (要用到的)方法
> 步骤
> 一个好的程序  就像菜谱 一样   考虑所有可能出现的情况  并告诉如何解决

程序语言就像一份指令或者一份菜谱
详细描述了计算机应该怎么去计算

一门程序语言必须具备一些能力，才能和计算机交流明白

#必须能很清楚的告诉计算机 怎么去做逻辑操作
#必须能很清楚的告诉计算机 怎么去存储数据

## javascript 中的逻辑运算
+ - * / % && || ！
= == === ！== ！=== <= >= < >  (esLint)(检查代码规范)
（1、不使用==  会做类型转换 ）
* if(){}
* if(){}else{}
* if(){}else if(){}else if{}else{} (效率高)
* switch(val){
	case 1;
	xxxxxx;
	break;
	case 1;
	xxxxxx;
	break;
	default;
	xxxxxx;
	break;
}
(规范2、运算符前后加 空格 ;后加空格)
* for(var i = 0; i < 100; i++){
	
}
* while(i < 20){
	i++;
}
*先执行  再判断
do{
	i++
}while(i < 300)

## 数据存储
变量 即地址
var x = 1 ;				 Number
var x = "aaa"; 			 String
var x = [1,2,3,"aa"];    Array
var x ={a:1,b:2} ;       Object
var x = function(){};    function
var x = undefined;       undefined
var x = null;            null
var x = true;            Boolean

数据内部结构null
console.dir(x) 控制台 查看数据结构
var x = new String("absdc"); 定义新的字符串类型
console.dir (x)  查看数据结构
alert () 查看  执行的是toString 方法
console.log() 执行的是valueOf 方法

Number  undefined null Boolean  特殊  非类似表格的形式 存储
String  Array Object function  以类似表格的形式 存储
length  __proto__  键值  不能枚举 也就是 不能遍历


### String 类型
```String
0: "a"
1: "s"
2: "f"
3: "f"
4: "g"
5: "f"
6: "g"
length: 7
proto__: String
```

### Array 类型
```Array[5]
0: 1
1: 2
2: 3
3: "ss"
4: "bb"
length: 5
__proto__: Array[0]
```


### Object 类型  无length __proto__: Array[0] 键值
```Object
2: "nn"
a: 1
b: 2
__proto__: Object
```

### function 类型 有以下键值
 ```function fn()
arguments: null
caller: null
length: 0
name: ""
prototype: fn
__proto__: ()
```

## 从函数对象说起
var fn = function(){
	alert(1);
	console.log(1);
	return 1;
}
## 写在函数体中的代码去哪里了？

函数对象会用一个不可见的属性“调用”来存储函数体中的代码
{"调用"：console.log(1)；return 1;}
函数这个对象相比其他对象的特殊之处就是在于它可以被调用
函数名()  可以调用并执行函数

定义函数的时候发生了什么？
要把代表函数的那张表构建完全
1、"调用"这个属性要赋值，函数体内部的字符串
2、需要把当前可见范围内的所有的变量，由近到远的记录到一个链条中，形成一条作用域链


调用函数的时候： 函数对象会去读取自己身上的"调用"这个属性的值，取出来一些字符串，把这些字符串交给js解析器去当做javascript代码区执行，
于此同时还会取出函数的作用域链，用来辅助这段代码的执行


## 在函数中 this 是什么？

只有在函数中才有this 这个东西

函数在调用的时候 根据调用的不同情况，来决定this 变成什么

# 到底有哪些不同的调用情况

```javascript
<!-- 正常的定义一个函数  单纯的只是定义一个函数-->
var da = function(){
var fn = function(){
	console.log(this);
}
<!-- 正常的调用一个函数 -->
fn();
<!-- Window {external: Object, chrome: Object, document: document, configData: Object, x: String…} -->
}
da();
```
正常的定义一个函数，不把函数作为某个对象的属性
正常的调用一个函数（使用()的方式调用函数）

this 指向window 对象 


把函数定义为一个对象的键值 
```javascript
var obj={
	a:1,
	b:2,
	c:function(){
	console.log(this);
}
}
obj.c();


this 指向obj对象 指向它的宿主对象
```
var el = document.getElementById("aa");
el.onclick = function(){
	console.log(this);
}
```

```javascript
如果我们需要把this 换成 任何我们想要的对象，
我们需要借助函数对象身上的call 哈 apply 方法
var obj = {a:1,b:2};
obj.c = function(){
	console.log(this);
}
obj.c();  this依然指向obj对象

obj.c.call([1,2,3,4,5]) this 指向call方法中的第一个参数
```

例如：
```
var obj = {};
var fn = function(){
	console.log(this);
}
fn(); this 指向window
obj.c=fn; 
obj.c();  this 指向obj (宿主对象)
fn.call([1,2,4]);  this 指向[1,2,4] 数组
obj.c.call("12334",4); this  指向"12334" String
call 方法可以传其它的参数
obj.c.apply([1,2,3,4],[3,4,5])  参数必需以数组的形式传入
```

## 当我们写好一份清单后，计算机在处理的过程中发生了什么？
对照代码从上往下开始解析
var el = document.getElementById("id");

# 用在展示信息的web页面中
# 用在web app 中（）



localStorage.setItem("d","xx") 给本地添加一条数据 值为字符串
localStorage.getItem("d") 从本地中获取一条数据 返回的是字符串
localStorage.removeItem("d")  从本地中删除一条数据
JSON.stringify()  把对象转换成字符串
ISON.parse()  把符合规则的字符串重新转回对象