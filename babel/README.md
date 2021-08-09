
Babel 是一个 JavaScript 编译器，不关心模块化（webpack做的）


https://github.com/zloirock/core-js

Ployfill  是补丁
core-js 和 regenerator

core-js 标准库(standard library)，集中es6 es7 新语法的ployfill (补丁)

regenerator 比如core-js 不支持generator函数 ，regenerator用来填补 core-js 不足

babel-polyfill 是 core-js 和regenerator 的集合

Babel7.4之后启用 babel-polyfill，推荐直接使用 core-js 和 regenerator

npx babel ./src/index.js


babel-polyfill 按需引入

`
"presets": [
  [
      "@babel/preset-env"
  ]
]
`


`
const sum = (a, b) => a + b

// 新的 API
Promise.resolve(100).then(data => data);

// 新的 API
[10, 20, 30].includes(20)
`
npx babel ./src/index.js
之后变成 
`
"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.includes.js");

`


问题：单纯的 babel-polyfill 会污染全局环境
window.Promise = function() {}
Array.prototype.includes = function () {}

使用方
window.Promise = 'abc'
Array.prototype.includes = 10


解决问题：
安装
@babel/plugin-transform-runtime
@babel/runtime


配置
`
"plugins": [
  [
    "@babel/plugin-transform-runtime",
    {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
    }
  ]
]
`
