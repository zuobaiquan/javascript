// 执行 async 函数，返回的是 Promise 对象
async function f1() {
  return 100  // 相当于 return Promise.resolve(100)
}
const res1 = f1()
console.log('res1', res1)  // res1 Promise {<fulfilled>: 100}
res1.then(data => {
  console.log('data', data)
})