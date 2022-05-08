// 高阶函数
// 1、可以把函数作为参数传递给另外一个函数
// 2、可以把函数作为另外一个函数的返回结果

// 2、函数作为返回值

function makeFn() {
  let msg = 'hello world'
  return function () {
    console.log('msg:', msg)
  }
}
// makeFn()()
const fn = makeFn()
fn()

// once 对函数只执行一次。执行多次只执行一次
function once(fn) {
  let done = false
  return function () {
    if (!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}
const pay = once(function (money) {
  console.log('支付money', money)
})
pay(100)
pay(100)
pay(100)
pay(100)



