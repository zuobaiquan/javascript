// 异步本质

//await 是同步写法，但本质还是异步调用。


async function async1() {
  console.log('async1 start')
  await async2()
  // 下面三行都是异步回调 callback的内容

  console.log('async1 end')
  await async3()
  console.log('async1 end 2')

}

async function async2() {
  console.log('async2')
}

async function async3() {
  console.log('async3')
}

console.log('script start')
async1()
console.log('script end')