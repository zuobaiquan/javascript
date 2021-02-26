const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const resolve = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    /*
    amd: 异步模块定义，用于像RequestJS这样的模块加载器。
    cjs: CommonJS,适用于Node或Browserify/webpack。
    es: 将软件包保存为ES模块文件。
    iife: 一个自动执行的功能，适合作为script标签这样的，只能在浏览器中运行。
    umd: 通用模块定义，以amd、cjs和iife为一体。
    system: SystemJS加载器格式。
    */
    format: 'umd'
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    })
  ],
}