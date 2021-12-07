// type inference 类型推论
let str = 'str'
str = 1 // 报错

// union types 联合类型
let numberOrString: number | string

// numberOrString = 'abc'
// numberOrString = 123
const s = numberOrString as string
s.length  //报错， 只能使用联合类型公共的方法

// as 断言
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

//type guard
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}