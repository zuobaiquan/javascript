// const getPersonInfo =(person:{name:string})=>{
//   console.log(person.name);
// }
// const setPersonInfo =(person:{name:string},name:string)=>{
//   person.name = name
// }

type Person1 = {
  name:string
}
// 通用的类型 的 集合 用 interface 表示出来，防止重复写
interface Person {
  // readonly name: string;
  name:string, // name属性 必须有
  age?: number, // age属性 可有可无
  [propName: string]: any, // 其他额外的参数 也可能会有，如果不这么写，自变量类型的话，会提示错误
}
// type（类型别名 ）和 interface 区别不大，但 interface 一般是对象或者函数，不能代表基本类型
// 但是还是有点区别的，在typescript中，通用的规范是 能够用interface 来表示一些类型 就用 interface
const getPersonInfo =(person:Person):void=>{
  console.log(person.name);
}
const setPersonInfo =(person:Person,name:string):void=>{
  person.name = name
}

// 调用
const person = {
  name: 'zuobaiquan',
};
getPersonInfo(person)
setPersonInfo(person,'111')
getPersonInfo({
  name: 'zuobaiquan',
  sex:'male'
})