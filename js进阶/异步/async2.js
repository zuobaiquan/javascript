
// 执行 async 函数，返回的是 Promise 对象
!(async function () {
  const p1 = Promise.resolve(100)
  const data = await p1 //  await 相当于 Promise then
  console.log('data', data)
})()


!(async function () {
  const data1 = await 100 // await Promise.resolve(100)
  console.log('data1', data1)
})()

async function f1() {
  return 100  // 相当于 return Promise.resolve(100)
}
!(async function () {
  const data2 = await f1() // await Promise.resolve(100)
  console.log('data2', data2)
})()

// try...catch 可捕获异常，代替了 Promise 的catch
!(async function () {
  const p4 = Promise.reject('err1')
  try {
    const res4 = await p4
    console.log('res4', res4)
  } catch (ex) {
    console.log('ex', ex)
  }
})()

!(async function () {
  const p5 = Promise.reject('err1')
  const res5 = await p5  // await 相当于 Promise 的 then
  console.log('res5', res5)  //不会执行
})()

