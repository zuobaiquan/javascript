中文网：https://www.rollupjs.com/

webpack 和rollup  对比
https://www.cnblogs.com/zuobaiquan01/p/14452270.html

https://github.com/chenshenhai/rollupjs-note/blob/master/note/chapter01/04.md


format 输出文件类型
amd: 异步模块定义，用于像RequestJS这样的模块加载器。
cjs: CommonJS,适用于Node或Browserify/webpack。
es: 将软件包保存为ES模块文件。
iife: 一个自动执行的功能，适合作为script标签这样的，只能在浏览器中运行。
umd: 通用模块定义，以amd、cjs和iife为一体。
system: SystemJS加载器格式。

编译ES6代码基础插件 模块
npm i --save-dev @rollup/plugin-buble

ES6+编译
npm i --save-dev @rollup/plugin-babel @babel/core @babel/preset-env
@rollup/plugin-babel 模块是rollup.js支持babel官方编译插件模块
@babel/core 是官方 babel 编译核心模块
@babel/preset-env 是官方 babel 编译解析ES6+ 语言的扩展模块

开发模式和生产模式
## 安装 rollup.js 编译本地开发服务插件
npm i --save-dev rollup-plugin-serve


## 安装 rollup.js 编译代码混淆插件
npm i --save-dev rollup-plugin-uglify

## 安装 rollup-plugin-delete 删除指定目录
npm i --save-dev rollup-plugin-delete




