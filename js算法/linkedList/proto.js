/*
原型链简介
原型链的本质就是 链表

原型链上的节点是各种原型对象 (prototype的值)
比如：Function.prototype、Object.prototype...

原型链通过 _proto_ 属性连接各种原型对象，但链表通过 next 属性值 来连接的

obj -> Object.prototype -> null

func > Function.prototype -> Object.prototype -> null

arr -> Array.prototype -> Object.prototype -> null


*/

const obj = {}
// obj.__proto__===Object.prototype

const func = () => { }
// func.__proto__===Function.prototype
// func.__proto__.__proto__===Object.prototype

const arr = []
// arr.__proto__===Array.prototype
// arr.__proto__.__proto__===Object.prototype
/*

100 instanceof Number    //false

var a = new Number(100);
a instanceof Number // true

// 分析
instanceof 判断一个对象是否是另一个对象的实例，而数字 100 是基本数据类型，不是对象
var a = new Number(100)；是通过包装类Number把数字 100 转换成对象，你可以用typeof a，和typeof 100，看看他们返回的值

*/
