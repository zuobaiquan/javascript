
```javascript
//下面代码什么时候会打印1？
var a=?;
if(a==1 && a==2 && a==3) {
    console.log(1)
}
```

1、利用对象的类型装换

```javascript
var a={
    num:1,
    toString:function(){
      return a.num++;
    }
}
if(a==1 && a==2 && a==3) {
    console.log("正确")
}else{
    console.log("错误")
}
```

备注：a==1 && a==2 && a==3，这是一个短路逻辑与运算符，这就表明只有左端条件为真能会继续往右端进行判断，否则立即整个判断像短路一样为假了，所以，a的第一个值必须是 a==1 为真之后才会进行第二步的 a==2 判断，由此推断a的值或者说是间接返回值（类型转换后的值）应该是可以自增长的！另外，这种 a==1 的判断，JavaScript中当遇到不同类型的值进行比较时，会根据类型转换规则试图将它们转为同一个类型再比较。比如 Object 类型与 Number 类型进行比较时，Object 类型会转换为 Number 类型。转换为时会尝试调用 Object.valueOf 和 Object.toString 来获取对应的数字基本类型。

在上述的代码中，逻辑转换先调用了valueOf方法，如果返回的还是对象，再接着调用toString()方法。每次比较都会先执行重写后的对象方法toString()，这个方法里先返回属性num的值再自增（区分：return a.num++表示先返回再自增，return ++a.num表示先自增再把结果返回）。知道了对象a的内部之后就能明白，执行a==1判断时，对象a调用toString()方法返回了属性num的值1，此时比较两个当然是相等的。与此类似，a==2 和 a==3 一样成立。

** 与数字、运算有关的用valueOf优先,其他都是toString优先


2、利用ES6的类来实现

```javascript
//传统函数写法
//定义内部变量，重写valueOf并返回一个可以增长的变量值
function fnA(){
    var num=1;
    this.valueOf=function(){    //只有对象的valueOf方法被调用时才执行
        return num++;
    }
}
 
//ES6的规范类写法
class clazzA{
    constructor(){
        this.num=0;  //类被调用创建对象就会执行构造函数，该变量会自增
        this.valueOf();
    }
    valueOf(){
        return this.num++;
    }
}
 
//let a=new fnA;  //此时valueOf并不会被调用
let a = new clazzA();  //构造函数调用了一次valueOf方法
if(a==1 && a==2 && a==3) {
    console.log("正确");
}else{
    console.log("错误");
}
```
备注：传统函数和ES6类都借助了Object自带的valueOf()方法，只是二者在处理时不一样：传统函数被调用时valueOf()并没有被立即调用，只是通过匿名函数的方式声明了函数，真正调用valueOf()还是在执行判断时隐式调用的；而ES6类则选择了再构造函数里直接调用在类里重写后的valueOf()方法。因此，两者在定义变量num的初始值时需要注意一下！

3、理由Object对象的defineProperty()方法定义属性并重写getter()方法
```javascript
var num=1;
Object.defineProperty(window,'a',{
    get:function(){
        return num++;
    }
})
 
if(a==1 && a==2 && a==3) {
    console.log("正确");
}else{
    console.log("错误");
}
```
备注：Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

首先，JavaScript的运行环境通常主要分为两种：客户端（浏览器）和服务端（node），这两种环境下的全局对象管理所有的变量和函数，客户端是window，node是global，在本例以window为参考。此时通过defineProperty()给window对象定义了一个a属性，a属性的值由get()方法返回后再自增。因此，当判断a==1时，实际上是获取省略掉window对象前缀的a的值后再比较。这个defineProperty()方法应当直接在 Object 构造器对象上调用此方法，而不是在任意一个 Object 类型的实例上调用。


4、利用数组的取值和类型转换
JavaScript里的数组真的是灵魂支柱，因为绝大多数的数据都在数组里操作，因此很多时候解决问题的巧妙思路也能从它着手。下面先上代码和运行结果：
```javascript
var a=[1,2,3,4];
a.join=a.shift;
if(a==1 && a==2 && a==3) {
    console.log("正确");
}else{
    console.log("错误");
}
```

备注：我们知道在JavaScript中一切皆对象，那么Array当然也是对象的子类了，同样继承了Object对象的方法valueOf()和toString()，而且重写了toString()方法，在调用数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成。所以在这里可以不重写toString()方法了，只需要对join()方法进行处理即可。那么join()方法作用扮演的是什么角色呢？没错，它用来将数组各项通过连接符拼接起来形成字符串，它不会改变原数组仅仅是取出元素连接起来。shift()方法是会将数组的第一个元素删除并返回被删除的元素，换言之就好像是直接将数组的第一个元素移出数组，因此它改变了原数组的结构和长度，但是自身不会创建新的数组。

让我们把目光聚焦到a.join=a.shift，这句话的意思是当数组调用toString()方法而间接调用join方法时，shift()方法替代了join方法，这样就相当于每次从a数组中截取第一个元素返回。所以当判断a==1时其实是从原数组截取了第一个元素的值返回后再判断，这样原数组就变成了[2,3]，接着a==2判断执行类似操作即可。