## js闭包

### **1.变量的作用域**

要理解闭包，首先必须理解Javascript特殊的变量作用域。

变量的作用域无非就是两种：全局变量和局部变量。

Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。

```javascript
var n=999;
function f1(){
	alert(n);
}
f1(); // 999
```

另一方面，在函数外部自然无法读取函数内的局部变量。

```javascript
function f1(){
　　var n=999;
}
alert(n); // error
```

这里有一个地方需要注意，函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！

```javascript
function f1(){
	n=999;
}
f1();
alert(n); // 999
```

### **2.如何从外部读取局部变量**

出于种种原因，我们有时候需要得到函数内的局部变量。但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。

那就是在函数的内部，再定义一个函数。

```javascript
function f1(){
	n=999;
	function f2(){
		alert(n); // 999
	}
}
```

在上面的代码中，函数f2就被包括在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。但是反过来就不行，f2内部的局部变量，对f1 就是不可见的。这就是Javascript语言特有的“链式作用域”结构（chain scope），

子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，我们不就可以在f1外部读取它的内部变量了吗！

```javascript
function f1(){
	n=999;
	function f2(){
		alert(n);
	}
	return f2;
}
var result=f1();
result(); // 999
```

### 3.简单闭包及特点

闭包就是一个函数，两个函数彼此嵌套，内部函数就是闭包。

形成闭包条件是内部函数需要通过return给返回出来。通俗地讲，子函数可以使用父函数中的局部变量，这种行为就叫闭包。

```javascript
//声明闭包
//闭包特点：闭包有权调用其父级环境的变量信息
function f1(){
	var week="Sunday";
	function f2(){
		console.log("星期"+week);
	}
	return f2;
}
var ff=f1();//f1执行后会返回f2函数，函数(对象)对ff进行赋值
//以上代码已经形成了一个闭包，其实是一个函数，就是ff
ff();//星期Sunday
//以上通过调用ff(),输出Sunday
//Sunday本身是week的局部变量信息，原则上不能在外部环境访问

//f2和ff是同一个function的两个不同名字，f2是局部变量，ff是全局变量
//因此，该function可以在“内部、外部”环境同时访问
//无论是内部。还是外部环境，只要function 执行，就与具体上下级环境没有直接关系
//内部的week永远都是我们自己AO活动对象的属性
//因此，只要该function能访问到，就无视内部变量的来源，其就是函数AO活动对象的属性
//是固化好了的
```

### 4.闭包使用规则

同一个闭包机制可以创建多个闭包函数出来，它们彼此没有联系，都是独立的。并且每个闭包可以保存自己个性化信息。

```javascript
//闭包使用规则
//同一个闭包机制可以创建多个闭包函数出来，
//它们彼此没有联系，都是独立的。并且每个闭包可以保存自己个性化信息。
function f1(num){
	//var num=100;
	function f2(){
		console.log("数字"+num);
	}
	return f2;
}
//闭包机制每调用一次，就生成一个(闭包)函数
var fa=f1(100); //100
var fb=f1(110); //110
fa();
fb();
```

```javascript
//闭包使用规则
function f1(){
	var num=200;
	function f2(){
		console.log("数字"+num++);
	}
	return f2;
}
//闭包机制每调用一次，就生成一个(闭包)函数
var fa=f1(); //数字200
fa();//数字201
fa();//数字202

//每个闭包可以保存自己个性化信息
var fb=f1(); //数字200
fb();//数字201

```

### 5.闭包案例

```javascript
//闭包案例--创建数组元素
var arr =new Array();
for(var i=0;i<4;i++){
	arr[i]=function(){
		console.log(i);
	}
	//arr[2]();
}
//位置1
arr[2](); //输出的结果为4
//这里没有输出理想的信息，而是4的信息
//原因：通过for 循环可以生成4个function，并且全部的function
//都访问i的变量，而系统里边，变量只有一个，就是全局变量；该变量
//在位置1就定格为4的信息，而每一个元素在其后调用，因此都调用4的信息

//故其等效的效果是
for(var i=0;i<4;i++){

}
arr[2]=function(){
	console.log(i);
}
//以上代码没有达到我们想要的效果
```

```javascript
//闭包案例--创建数组元素
//利用闭包实现制作多个独立的数组元素函数
var arr =new Array();
for(var i=0;i<4;i++){
	//arr[i]=闭包
	arr[i]=f1(i);//通过调用f1闭包机制，生成多个独立函数，并且每个函数i的变量都是不同值
}
function f1(n){
	function f2(){
		console.log(n);
	}
	return f2;
}
arr[2](); //2
```

### **6.使用闭包的注意点**

1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值

### **7.思考题**

```javascript
var name = "The Window";   
　　var object = {   
　　　　name : "My Object",   
　　　　getNameFunc : function(){   
　　　　　　return function(){   
　　　　　　　　return this.name;   
　　　　　};   
　　　　}   
};   
alert(object.getNameFunc()());  //The Window
```

JavaScript闭包例子

```javascript
function outerFun(){
    var a=0;
    function innerFun(){
       a++;
       alert(a);
    }    
 }
 innerFun();
```

上面的代码是错误的.innerFun()的作用域在outerFun()内部,所在outerFun()外部调用它是错误的.

改成如下,也就是闭包:

```javascript
function outerFun(){
   var a=0;
   function innerFun(){
      a++;
      alert(a);
   }
   return innerFun;  //注意这里
}
var obj=outerFun();
obj();  //结果为1
obj();  //结果为2
var obj2=outerFun();
obj2();  //结果为1
obj2();  //结果为2
```