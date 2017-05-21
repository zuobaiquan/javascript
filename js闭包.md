## js闭包

### 1简单闭包及特点

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

### 2闭包使用规则

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

### 3闭包案例

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





