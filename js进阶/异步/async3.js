// 异步本质

//await 是同步写法，但本质还是异步调用。


async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end') // 关键在这一步，await 后面相当于放在 callback内容，即异步，最后执行
}

async function async2() {
  console.log('async2')
}

console.log('script start')
async1()
console.log('script end')