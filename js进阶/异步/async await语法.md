async/await 用法
1.异步回调callback hell
2.Promise then catch链式调用，但也是基于回调函数
3.async/await 是同步语法，彻底消灭回调函数，但与 Promise并不互斥，反而，两者相辅相成

执行 async 函数，返回的是 Promise 对象 
await 相当于 Promise 的 then
try...catch 可捕获异常，代替了 Promise 的catch

异步的本质
aysnc/await 是消灭异步回调的终极武器
JS还是单线程，还得是有异步，还得是基于 event loop
aysnc/await只是一个语法糖



```js
async function fn(){
  return 100
}

(async function () {
  const a = fn()
  const b = await fn()
})()


```


```js
async function async1 () {
  console.log('async1 start')
  await async2() // 这一句会同步执行，返回 Promise ，其中的 `console.log('async2')` 也会同步执行
  console.log('async1 end') // 上面有 await ，下面就变成了“异步”，类似 callback 的功能（微任务）
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(function () { // 异步，宏任务
  console.log('setTimeout')
}, 0)

async1()

new Promise (function (resolve) { // 返回 Promise 之后，即同步执行完成，then 是异步代码
  console.log('promise1') // Promise 的函数体会立刻执行
  resolve()
}).then (function () { // 异步，微任务
  console.log('promise2')
})

console.log('script end')

// 同步代码执行完之后，屡一下现有的异步未执行的，按照顺序
// 1. async1 函数中 await 后面的内容 —— 微任务
// 2. setTimeout —— 宏任务
// 3. then —— 微任务
```