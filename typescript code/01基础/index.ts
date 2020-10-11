// 基础类型 null, undefined, symbol, boolean, void

const count: number = 2020;
const myName: string = 'zuobaiquan';

// 对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: 'zuobaiquan',
  age: 20,
};

const numbers: number[] = [12, 4];

class Person {}

const zuo: Person = new Person();

const getTotal: () => number = () => {
  return 12;
};
