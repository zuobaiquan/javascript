import { demo } from './lib/demo'
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];
console.log(result);
demo()

async function initDemo() {
  let data = await demo();
  console.log(data);
}
initDemo()
const a = {
  b: '1',
  c: {
    d: 1
  }
}
console.log(a?.b?.c)