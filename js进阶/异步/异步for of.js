// ## for...of

// 定时算乘法
function multiple(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

// // 使用 forEach ，是 1s 之后打印出所有结果，即 3 个值是一起被计算出来的
// function test1 () {
//     const nums = [1, 2, 3];
//     nums.forEach(async x => {
//         const res = await multiple(x);
//         console.log(res);
//     })
// }
// test1();

// 使用 for...of ，可以让计算挨个串行执行
async function test2() {
  const nums = [1, 2, 3];
  for (let x of nums) {
    // 在 for...of 循环体的内部，遇到 await 会挨个串行计算
    const res = await multiple(x)
    console.log(res)
  }
}
test2()