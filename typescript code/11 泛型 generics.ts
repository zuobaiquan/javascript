function echo(args) {
  return args
}
const res1 = echo(123)  //我们发现 res1 返回的any 类型

// 我们想 传入的和返回的统一

function echo2<T>(args: T): T {
  return args
}
const res2 = echo2(123)
const res22 = echo2('str')


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 针对数组的，有length属性
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])


// 只要是有 length 属性就可以用
interface IWithLength {
  length: number
}
// 必须有 length 属性，否则报错，，extends 约束泛型
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const str2 = echoWithLength('str')
const obj2 = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])

const newNum = echoWithLength(123) // 报错


class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
  key: T
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: "string" }
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }
let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

