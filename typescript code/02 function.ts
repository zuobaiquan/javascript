function fun1() {}
const fun2 = function hello() {};
const fun3 = () => {};

function add(first: number, second: number): number {
  return first + second;
}
const total2 = add(1, 2);

function sayHello(): void {
  console.log(1);
}

// function addObj({first:number,second:number}):number{
//   return first+second
// }
// 结构赋值
function addObj({ first, second }: { first: number; second: number }): number {
  return first + second;
}
addObj({ first: 1, second: 2 });

function getNumber({ first }: { first: number }): number {
  return first;
}
getNumber({ first: 1 });
