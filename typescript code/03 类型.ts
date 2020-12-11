// 基础类型, boolean, number, string, void, undefined, symbol, null
const a:number =12


// 对象类型, {}, Class, function, []
const func = (str: string) => {
  return parseInt(str, 10);
};

const func1 :(str:string)=>number = (str)=>{
  return parseInt(str)
}

const date:Date = new Date();


let temp: number | string = 111;
temp = '11';