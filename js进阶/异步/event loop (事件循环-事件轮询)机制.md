
js 是单线程运行的

异步要基于回调来实现

event loop 就是异步回调的实现原理


js 如何执行

1.从前到后，一行一行的执行
2.如果某一行执行报错，则停止下面代码的执行
3.先把同步代码执行完，再执行异步


event loop执行过程
1.同步代码，一行一行执行放在 Call Stack 执行
2.遇到异步，先记录下，等待时机（定时、网络请求等）
3.时机到了，就移到 Callback Queue

如果 Call Stack 为空（即同步代码执行完）Event loop开始工作
轮询查询 Callback Queue，如有则移到 Call Stack 执行
然后继续轮询查找（永动机一样）

```js
console.log('Hi')

setTimeout(function cb1() {
  console.log('cb1') // cb 即 callback
}, 5000)

console.log('Bye')
```