const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const del = require('rollup-plugin-delete');

const resolve = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    del({ targets: 'dist/*' }),
    babel({
      presets: ['@babel/preset-env']
    }),
  ],
}