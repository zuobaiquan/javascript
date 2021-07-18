/*
如果 A 沿着 原型链 能找到 B.prototype，那么  A instanceof B 为 true
如果 在 A对象上没有找到 x 属性，那么沿着原型链 找 x 属性
*/

const obj = {}
Object.prototype.x = 'x'

console.log(obj.x)  // x
const func = () => { }
Function.prototype.y = 'y'

/*
instanceof 原理实现
*/
const instanceOf = (A, B) => {
  let p = A
  while (p) {
    if (p == B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

var arr = [1, 2, 3];
console.log(instanceOf(arr, Array)) // true
console.log(instanceOf(arr, Object)) // true
console.log(instanceOf(arr, Function)); // false
/*
对概念的误区
100 instanceof Number    //false

var a = new Number(100);
a instanceof Number // true

// 分析
instanceof 判断一个对象是否是另一个对象的实例，而数字 100 是基本数据类型，不是对象
var a = new Number(100)；是通过包装类Number把数字 100 转换成对象，你可以用typeof a，和typeof 100，看看他们返回的值

*/
