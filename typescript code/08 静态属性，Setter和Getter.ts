// getter and setter
class Person {
  constructor(private _name: string) {}
  get name() {
    return this._name + ' is my name';
  }
  set name(name: string) {
    const realName = name + ' update';
    this._name = realName;
  }
}
const person = new Person('zuobaiquan');
console.log(person.name);
person.name = 'qinqin';
console.log(person.name);



/**
* 单例模式，只允许有一个类的设计模式
* 不希望出现 const demo1 = new Demo()
* const demo2 = new Demo()
* 希望永远只有一个实例，要怎么限制
* private constructor(){}
*/

class Demo{
　　private static instance: Demo;
　　private constructor(public name:string){}
 
　　// static 表示这个方法直接挂在类傻上，而不是类的实例上面
　　static getInstance(){
　　　　if(!this.instance){
　　　　　　this.instance = new Demo('zuobaiquan')
　　　　}
　　　　return this.instance;
　　}
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name, demo2.name);
// 其实这两个是相等的，这样就创建了一个单例