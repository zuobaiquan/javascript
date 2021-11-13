

jQuery('#app') // 会报错

// 一般把 declare 文件 都放在 .d.ts文件，会自动检索，只是获取代码补全 接口提示
declare var jQuery: (selector: string) => any
// 使用第三方库，常用的会有 @types 类型定义
// @type 搜索 https://www.typescriptlang.org/dt/search?search=