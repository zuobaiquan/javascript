---
title: js创建类对象的几种方法
date: 2016-07-21 16:01:49
tags: JavaScript
comments: false
---

```javascript
// 第一种：对象  
var person = {};// 或者var obj = new Object();  
person.name = "king";  
person.age = 20;  
person.Introduce = function () {  
    alert("My name is " + this.name + ". My age is " + this.age);  
};  
person.Introduce();  
  
// 第二种：json格式的对象  
var person = {  
    name: "king",  
    age: 20,  
    Introduce: function () {   
        alert("My name is " + this.name + ". My age is " + this.age);   
    }  
};  
person.Introduce();   
alert(person.name);// king  
  
// 第三种（1）：类，类似于默认构造函数  
var Person = function () {  
    this.name = "king";  
    this.age = 20;  
    this.Introduce = function () {  
        alert("My name is " + this.name + ". My age is " + this.age);  
    };  
};  
var person = new Person();// 或者var person = Person();  
person.Introduce();  
alert(person.name);// 输出：king  
alert(person["name"]);// 也可以使用json的访问方式，说明使用function定义类与第二种是等效的  
alert(person.age);// 输出：20  
  
// 第三种（2）：区别仅在于第一行的声明  
function Person () {  
    this.name = "king";  
    this.age = 20;  
    this.Introduce = function () {  
        alert("My name is " + this.name + ". My age is " + this.age);  
    };  
};  
var person = new Person();  
person.Introduce();  
alert(person.name);// 输出：king  
alert(person.age);// 输出：20  
  
// 第四种（1）：可定制的类，类似构造函数  
var Person = function (name, age) {  
    this.name = name;  
    this.age = age;  
    this.Introduce = function () {  
        alert("My name is " + this.name + ". My age is " + this.age);  
    };  
};  
var person = new Person("king", 20);  
person.Introduce();  
alert(person.name);// 输出：king  
alert(person.age);// 输出：20  
  
// 第四种（2）：  
function Person (name, age) {  
    this.name = name;  
    this.age = age;  
    this.Introduce = function () {  
        alert("My name is " + this.name + ". My age is " + this.age);  
    };  
};  
var person = new Person("king", 20);  
person.Introduce();  
alert(person.name);// 输出：king  
alert(person.age);// 输出：20  
  
// 第五种：变量的封装，将其改为私有。采用了闭包。  
// 在function中用this引用当前对象，通过对属性的赋值来声明属性。即this定义的为公有  
// 如果用var声明变量，则该变量为局部变量，只允许在类定义中调用。即var定义的为私有，不用var则为全局  
var Person = function (name, age) {  
    var name = name;  
    var age = age;  
    this.GetName = function () {  
        return name;  
    }  
    this.GetAge = function () {  
        return age;  
    }  
    this.Introduce = function () {  
        alert("My name is " + name + ". My age is " + age);  
    };  
};  
var person = new Person("king", 20);  
alert(person["name"]);// undefined  
alert(person.GetName());// king  
  
// 第五种（2）：可参考第三种（2）和第四种（2）  
  
// 第六种（1）：在函数体中创建一个对象（使用第二种），声明其属性再返回  
function Person() {  
    var obj =  
    {  
        'age':20,  
        'name':'king'  
    };  
    return obj;  
}  
var person = new Person();  
alert(person.age);// 输出：20  
alert(person.name);// 输出：king  
  
// 第六种（2）：函数体内创建对象时使用第一种方法  
function Person() {  
    var obj = new Object();  
    obj.age = 20;  
    obj.name = 'king';  
    return obj;  
}  
var person = new Person();  
alert(person.age);// 输出：20  
alert(person.name);// 输出：king  
```

小结：上述第一种、第二种方法为直接创建一个对象字面量。第二种到第六种方法相当于提供了类，使用new操作符（可省略）创建对象实例。



原文：http://blog.csdn.net/kingzone_2008/article/details/8461307