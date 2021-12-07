// type alias
//ts 有 boolean、number、string 等基本类型。
// 如果我们想声明高级类型，我们就需要使用类型别名。
let sum: (x: number, y: number) => number
const result = sum(1, 2)


type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 3)

// 联合类型 |
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

interface IName {
  name: string
}
// 交叉类型 合并 &
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }





