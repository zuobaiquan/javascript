// const getPersonInfo =(person:{name:string})=>{
//   console.log(person.name);
// }
// const setPersonInfo =(person:{name:string},name:string)=>{
//   person.name = name
// }

type Person1 = {
  name: string
}
// interface 对 对象的形状进行描叙
// 通用的类型 的 集合 用 interface 表示出来，防止重复写
interface Person {
  // readonly name: string; // readonly只能读，不能写
  name: string; // name属性 必须有
  age?: number; // age属性 可有可无
  [propName: string]: any; // 其他额外的参数 也可能会有，如果不这么写，自变量类型的话，会提示错误
  say(): string; //say方法，返回string类型
}
let zuo1: Person = {
  name: 'baiquan',
  say() {
    return '1'
  }
}


// type（类型别名 ）和 interface 区别不大，但 interface 一般是对象或者函数，不能代表基本类型
// 但是还是有点区别的，在typescript中，通用的规范是 能够用interface 来表示一些类型 就用 interface
const getPersonInfo = (person: Person): void => {
  console.log(person.name);
}
const setPersonInfo = (person: Person, name: string): void => {
  person.name = name
}

// 调用
const person = {
  name: 'zuobaiquan',
  say() {
    return '122'
  }
};
getPersonInfo(person)
setPersonInfo(person, '111')
getPersonInfo({
  name: 'zuobaiquan',
  sex: 'male',
  say() {
    return '122'
  }
})
// implements 类属性约束
// 实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能
class User implements Person {
  name: 'zuobaiquan';
  say() {
    return '1'
  }
}

// 继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法
interface Teacher extends Person {
  teach(): string;
}

const setTeacherInfo = (person: Teacher, name: string): void => {
  person.name = name
}

setTeacherInfo({
  name: 'zuobaiquan',
  say() {
    return '122'
  },
  teach() {
    return 'teach'
  }
}, '111')

//定义方法
interface SayHi {
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return word;
};