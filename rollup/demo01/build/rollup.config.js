const path = require('path');
// 将rollup和babel进行了完美结合
const babel = require('rollup-plugin-babel');

//安装 rollup.js 编译ES6代码基础插件 模块
const buble = require('@rollup/plugin-buble');
const resolve = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'iife'
  },
  plugins: [
    babel({
      babelrc: false,
      plugins: ['@babel/plugin-proposal-optional-chaining'],
      exclude: 'node_modules/**'
    }),
    buble()
  ],
}