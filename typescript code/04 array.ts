const a: number[] = [1];
const b: (number | string)[] = [1, '1'];
const strArr: string[] = ['a', 'b', 'c'];

const objArr: { name: string; age: number }[] = [
  { name: 'zuobaiquan', age: 20 },
];

// type 类型别名
type User = { name: string; age: number };

const objArr2: User[] = [
  {
    name: 'zuobaiquan',
    age: 20,
  },
];

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
];




const teacherInfo2: (number | string)[] = [1, '1','222'];
// 元组 tuple

// 元组 长度固定，数组每一项类型也固定
const teacherInfo: [string, string, number] = ['zuobaiquan', 'male', 18];

// csv
const teacherList: [string, string, number][] = [
  ['zuobaiquan', 'male', 19], 
  ['qingqin', 'female', 26], 
  ['jeny', 'female', 38]
];



