## js面向对象

### 1.封装

在javascript里边，封装只体现public、private

①public公开的，在构造函数里面通过this关键字声明的成员都是公开的，函数内部、外部都可以调用；

②private私有的，在构造函数里面声明局部变量，就是私有成员。

```javascript
//封装特性
function Dog(){
    //私有成员(局部变量)
    var weight=120; //私有成员属性
    var run =function(){ //私有成员方法
        return "每天跑5公里";
    }
    //私有成员允许在构造函数内部访问

    //可以制作对外公开的方法间接访问私有成员
    this.fight=function(){
        console.log('我的体重是：'+weight+',并且我还'+run()+'');
    }
    this.mingzi="旺财";
    this.hobby="看书";
    this.leg=4;
}
var black=new Dog();
console.log(black.fight());
//我的体重是：120,并且我还每天跑5公里
```

### 2.继承

在javascript里边:（构造）函数可以继承另外一个对象，构造函数实例化出来的对象除了本身成员外还有拥有被继承对象的成员。

原型继承关键字：prototype.

```javascript
var cat={
    mignzi:'Kitty',
    climb:function(){
        console.log(this.mingzi+"会爬山！");
    }
}
function tiger(){
    this.color='yellow';
    this.leg=4;
    this.act="猛虎下山";
}
//构造函数去继承对象
tiger.prototype=cat;
var north=new tiger();
console.log(north);
```

![](http://files.cnblogs.com/files/zuobaiquan01/QQ%E6%88%AA%E5%9B%BE20170516232303.bmp)

#### 2.1实现原型继承

1、函数.prototype.成员名称=值;   //继承单一成员

2、函数.prototype=对象;           //继承一个对象

```javascript
function tiger(){
	this.color='yellow';
	this.leg=4;
	this.act="猛虎下山";
}
//原型继承：继承单一成员
//可以同时继承多个
tiger.prototype.weight=230;
tiger.prototype.run=function(){
	console.log("在森林里奔跑！");
}
var north=new tiger();
console.log(north);//对象成员：本身的+继承的
north.run();
```

注意：

① 本身和继承对象拥有同名成员，要使用本身成员；

② 单一成员和对象同时继承，需要先继承对象后继承单一成员；

③ 同时继承多个对象，后者覆盖前者。

```javascript
//① 本身和继承对象拥有同名成员，要使用本身成员；
var pig={weight:120,hobby:'sleep'};
function Dog(){
    this.name="旺财";
    this.color="gray";
    this.hobby="看家";
}
Dog.prototype=pig;//继承
var black=new Dog();
console.log(black.hobby); //看家   而不是sleep
```

```javascript
//② 单一成员和对象同时继承，需要先继承对象后继承单一成员；
var pig={weight:120,hobby:'sleep'};
function Dog(){
    this.name="旺财";
    this.color="gray";
    this.hobby="看家";
}
Dog.prototype=pig;//继承对象  ///位置1
Dog.prototype.run="在跑步";//继承单一成员  ///位置2
var black=new Dog();
console.log(black);
//如果是先继承对象后继承单一成员，对象成员：本身的+继承对象的+单一成员的
//如果是先继承单一成员后继承对象，对象成员：本身的+继承对象的。即位置2在位置1前时，无run单一成员
```

```javascript
//③ 同时继承多个对象，后者覆盖前者。
var pig={weight:120,hobby:'sleep'};
var cat={climb:function(){console.log("在爬树");}};
var tiger={act:"猛虎下山"};
function Dog(){
    this.name="旺财";
    this.color="gray";
    this.hobby="看家";
}
Dog.prototype=pig;//继承对象
Dog.prototype=cat;//继承对象
Dog.prototype=tiger;//继承对象
var black=new Dog();
console.log(black); //对象成员：本身的+继承tiger对象的（后者覆盖前者）
```

#### 2.2对象遍历

```javascript
var pig={weight:120,hobby:'sleep'};
function Dog(){
    this.name="旺财";
    this.color="gray";
    this.hobby="看家";
}
Dog.prototype=pig;//继承对象
var black=new Dog();
//for 成员变量 in 对象{}遍历成员
for(var k in black){
    //区分本身的成员和继承的成员
    //对象.hasOwnProperty(成员名称) 判断该成员是否是本身所拥有，返回boolean值
    if(black.hasOwnProperty(k)){
        console.log("自己的属性"+k+"====="+black[k]);
    }
    else{
        console.log("继承的属性"+k+"====="+black[k]);
    }
}
```

#### 2.3复制继承--原型衍生继承

```javascript
//复制继承
//该继承在juqery框架有大量应用
//该继承特点/好处:继承非常灵活，可以根据实际情况需要
//为对象去继承成员，如果有的对象不需要额外的成员，就
//不继承即可，同时该继承允许同时继承多个对象
var cat={color:'white',weapon:'伶牙俐齿',climb:function(){console.log('在爬树');}};
function Dog(){
    this.color="gray";
    this.leg=4;
}
Dog.prototype.extend=function(obj){
    //this代表调用该方法的当前对象
    //遍历obj，获取具体成员，并赋予给black(this)对象
    for(var k in obj){
        //继承本身不存在的成员
        if(!this.hasOwnProperty(k)){
            this[k]=obj[k];//直接为this对象丰富成员
        }
    }
}
var black=new Dog();
//使得black对象去继承cat对象
black.extend(cat);
console.log(black);
```

#### 2.4静态成员

如果在一个类里边，有这样的属性，其值不随便发生变化，全部对象都共用一个值，该属性就声明为static静态的，其在内存中无论创建多少个对象（或者说与其具体对象无关）都只占据一份空间。

为什么要使用静态成员：

① 静态成员归属到类本身，可以明显的加快访问速度（无需实例化对象）

② 节省空间

一个类，每实例化一个对象，在堆空间都要给每个成员分配内存空间，如果有一个成员无论创建多少个对象其信息值也不发生变化，为了节省内存空间，就把这样的成员设置为“静态成员”。其在内存中就只占据一份空间。