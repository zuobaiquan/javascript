const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];
console.log(result);

const a = {
  b: '1',
  c: {
    d: 1
  }
}
console.log(a?.b?.c)