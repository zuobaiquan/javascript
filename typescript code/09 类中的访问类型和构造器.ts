// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

class Person {
  private name: string;
  public sayHi() {
    this.name;
    console.log('hi');
  }
  private sayABC() {
    this.name;
  }
}


const person = new Person();
// person.name = 'dell';
// console.log(person.name);
person.sayHi();

class Teacher extends Person {
  public sayBye() {
    // this.name;
    this.sayHi();
  }
}

class Person1{
  //   // 传统写法
  //   // public name: string;
  //   // constructor(name: string) {
  //   //   this.name = name;
  //   // }
  //   // 简化写法
    constructor(public name: string) {}
}
const person1 = new Person1('zuo')
console.log(person1.name);


class Teacher1 extends Person1 {
  constructor(public age: number) {
    // 如果子类有构造器，父类也有构造器，这个时候子类就一定要手动的调用下父类的构造器
    super('zuobaiquan');
  }
}

const teacher1 = new Teacher1(1)
console.log(teacher1);