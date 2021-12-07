// 比较 interface
// type，interface 都允许拓展（extends）
// type 可以声明基本类型别名，联合类型，元组等类型，interface不能

// interface 能够声明合并，被限制为对象类型
// interface 只能表示对象类型，
// 如果想表示 JS 中的原始类型（undefined, null, boolean, string，number）
// 只能使用 type


// type 声明的类型不能重名，interface 声明的重命名会合并在一块
interface User1 {
  name: string
  age: number
}

interface User1 {
  sex: string
}

/*
User1 接口为 {
  name: string
  age: number
  sex: string
}
*/


// interface extends interface

interface Name1 {
  name: string;
}
interface User1 extends Name1 {
  age: number;
}
// type extends type
type Name2 = {
  name: string;
}
type User2 = Name2 & { age: number }

// interface extends type
type Name3 = {
  name: string;
}
interface User3 extends Name3 {
  age: number;
}

// type extends interface
interface Name4 {
  name: string;
}
type User4 = Name4 & {
  age: number;
}



