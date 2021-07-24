// 宏任务(macroTask) 和 微任务 (microTask)

// 宏任务：setTimeout、setInterval、ajax、Dom事件
// 微任务：Promise async/await

// 微任务执行时机比宏任务早

console.log(100)
setTimeout(() => {
  console.log(200)
})
Promise.resolve().then(() => {
  console.log(300)
})
console.log(400)
// 100 400 300 200


