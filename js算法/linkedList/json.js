const json = {
  a: { b: { c: 1 } },
  d: { e: 2 },
};

const path = ['a', 'b1', 'c'];

let p = json;
path.forEach((k) => {
  if (p[k]) {
    p = p[k];
  }
});
console.log('p', p)