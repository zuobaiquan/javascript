const arr = [12, 322, 0, 12, 12, 78, 12, 32]

// function unique1(array) {
//   const result = []
//   for (let i = 0; i < array.length; i++) {
//     if (result.indexOf(array[i]) == -1)
//       result.push(array[i])
//   }
//   return result;
// }
// console.log(unique1(arr))

// es6方法数组去重
// console.log([...new Set(arr)])
// console.log(Array.from(new Set(arr)))  //Array.from()能把set结构转换为数组


// function unique4(arrry) {
//   const result = []
//   const tmp = {}
//   for (var i = 0; i < arrry.length; i++) {
//     if (!tmp[arrry[i]]) {
//       tmp[arrry[i]] = 1
//       result.push(arrry[i])
//     }
//   }
//   return result
// }
// console.log(unique4(arr))

function unique5(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) == index
  })
}
console.log(unique5(arr))