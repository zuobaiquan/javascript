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




const teacherInfo2: (number | string)[] = [1, '1', '222'];
// 元组 tuple

// 元组 长度固定，数组每一项类型也固定，具体定义数组每个位置的类型
const teacherInfo: [string, string, number] = ['zuobaiquan', 'male', 18];
// 元组 还是一个数组，可以使用数组的方法，注意只能添加选定类型的一种，比如我们限定 string 和number,就只能 push 类型string 和number
teacherInfo.push(true)


// csv
const teacherList: [string, string, number][] = [
  ['zuobaiquan', 'male', 19],
  ['qingqin', 'female', 26],
  ['jeny', 'female', 38]
];



