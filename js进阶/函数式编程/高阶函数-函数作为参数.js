// 高阶函数
// 1、可以把函数作为参数传递给另外一个函数
// 2、可以把函数作为另外一个函数的返回结果

// 1、函数作为参数
// 实现 forEach

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i])
  }
}

// 实现 filter
function filter(arr, fn) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}
// 实现 map
function map(arr, fn) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]))
  }
  return res
}