## js中的变量提升与函数提升

前言：在一段js代码拿过来真正一句一句运行之前，浏览器已经做了一些“准备工作”，其中就包括对变量的声明，而不是赋值。变量赋值是在赋值语句执行的时候进行的。可用下图模拟：

![](http://files.cnblogs.com/files/zuobaiquan01/221744084828533.bmp)

先看看一个简单的代码

```javascript
var str='Hello World';
alert(str);//弹出 Hello World 
```

再看一段代码：

```javascript
var v='Hello World';
(function(){
    alert(v);
})()
//和我们预期的一样，还是弹出 Hello World 
```

那么铺垫完了，继续code...

```javascript
var str='Hello World';
(function(){
    alert(str);
    var str='I love coding...';
})()

//出乎我们的意料，弹出 undefined ，蜜汁尴尬了哈 
```

来来来...

继续蜜汁尴尬，

```javascript
var foo = 1;
function bar() {
   if (!foo) {
   		var foo = 10;
   }
   alert(foo);
}
bar();// 10
```

再来：

```javascript
var a = 1;
function b() {
   a = 10;
   return;
   function a() {}
}
b();
alert(a); //1
```

### **1.变量提升**

就是把变量提升提到函数的top的地方。同时需要注意的是变量提升只是提升变量的声明，并不会把赋值也提升上来。比如：

```javascript
(function(){
    var a='One';
    var b='Two';
    var c='Three';
})()
```

实际上它是这样子的：

```javascript
(function(){
    var a,b,c;
    a='One';
    b='Two';
    c='Three';
})()
```

那么现在我们分析下刚才出现很尴尬的结果

```javascript
var str='Hello World';
(function(){
    alert(str);
    var str='I love coding...';
})()
```

其实，根据我么根据上面变量提升原件以及js的作用域（块级作用域）的分析，得知 上面代码真正变成如下：

```javascript
var str='Hello World';
(function(){
    var str;
    alert(str);
    str='I love you';
})()
```

所以，才会提示说 undefined 

这里，我们应该受到启发：我们在写js code 的时候，我们需要把变量放在函数级作用域的顶端，比如我在上面所举的例子：var a,b,c;。以防止出现意外。

### **2.函数提升**

函数提升是把整个函数都提到前面去。在我们写js code 的时候，我们有两种写法，一种是函数表达式，另外一种是函数声明方式。我们需要重点注意的是，只有函数声明形式才能被提升。例子说明：

```javascript
//函数声明方式提升【成功】
function myTest(){
    foo();
    function foo(){
        alert("我来自 foo");
    }
}
myTest();// 我来自 foo
```

```javascript
//函数表达式方式提升【失败】
function myTest(){
   foo();
   var foo =function(){
        alert("我来自 foo");
    }
}
myTest();//Uncaught TypeError: foo is not a function
```

>我们总结一下，在“准备工作”中完成了哪些工作：
>
>在执行代码之前，把将要用到的所有的变量都事先拿出来，有的直接赋值了，有的先用undefined占个空。
>
>- 变量、函数表达式——变量声明，默认赋值为undefined；
>- this——赋值；
>- 函数声明——赋值；
>
>这三种数据的准备情况我们称之为“执行上下文”或者“执行上下文环境”。



### 3.作用域链**

#### 3.1变量必须先声明后使用，函数可以先使用、后声明

原因是：函数有预加载的过程（函数声明先于其他执行代码进入内存）。本质还是函数的声明在前，使用在后。

```javascript
console.log(subject);//undefined
var subject="javascript";
//var命令会发生”变量提升“现象，
//即变量可以在声明之前使用，值为undefined

//函数可以先使用、后声明
f1();//I am f1 function
function f1(){
	console.log("I am f1 function");
}
```

注意：同名变量和同名函数同时存在的时候，分析其执行顺序即可，函数声明第一个执行，其他代码顺序执行。

```javascript
//同名变量和同名函数同时存在的时候，
//分析其执行顺序即可，函数声明第一个执行，
//其他代码顺序执行。
var f1="subject";
f1();
function f1(){
	console.log("I am f1 function");
}
//Uncaught TypeError: f1 is not a function
```

```javascript
f1();//I am f1 function
var f1="subject";
console.log(f1);//subject
function f1(){
	console.log("I am f1 function");
}
```

#### 3.2 内部环境可以访问外部环境的变量，反之亦然。

环境：每一个函数内部都是一个环境，最外边是全局变量

两种类型：函数环境、全局环境

```javascript
var week="Sunday";
function f1(){
	var weather="sunshine";
	console.log("星期："+week); //星期：Sunday
}
f1();
console.log("气候："+weather);//Uncaught ReferenceError: weather is not defined
```

#### 3.3 变量的作用域是声明时决定的，而不是运行时。

```javascript
//变量的作用域是声明时决定的，而不是运行时

//全局变量，可以同时给f1和f2访问
var week="Sunday";
function f1(){
	console.log("星期："+week);
}
function f2(){
	//局部变量，只能给f2本身子级访问
	var week="Monday";
	f1();//该f1无论在任何地方访问，都只能访问到Sunday的信息
}
f2();//星期：Sunday
```

```javascript
//变量的作用域是声明时决定的，而不是运行时

//全局变量，可以同时给f1和f2访问
var week="Sunday";
function f1(){
	console.log("星期："+week);
}
week="Monday";
f1();//星期：Monday
```

#### 3.4 执行环境可以访问变量的类型和优先级

```javascript
//执行环境可以访问变量的类型和优先级
//形参<外部变量   //形参优先级高
var week="Sunday";//外部变量
function f1(){
	function f2(week){//形参
		console.log("星期："+week);
	}
	f2("Monday");
}
f1();//星期：Monday
```





