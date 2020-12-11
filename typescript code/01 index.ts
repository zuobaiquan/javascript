// 基础类型 null, undefined, symbol, boolean, void

const count: number = 2020;

console.log(count.toFixed(2));

const myName: string = 'zuobaiquan';

// 对象类型
const person:{
  name:string,
  age:number
} = {
  name:'zuobaiquan',
  age:20
}

const numbers: number[] = [12, 4];

class Person {}

const zuo: Person = new Person();

const getTotal:()=>number =()=>{
  return 12
}

// 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解
function numberPlus(firstNumber:number, secondNumber: number) {
  return firstNumber + secondNumber;
}

const total = numberPlus(1, 2);

