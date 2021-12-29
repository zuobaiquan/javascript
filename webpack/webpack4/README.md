webpack 中文文档 https://www.webpackjs.com/concepts/

webpack 英文文档 https://webpack.js.org/concepts/

npm info webpack 查看webpack历史版本

webpack 默认配置文件 webpack.config.js
如果想修改默认配置文件名称为 webpackconfig.js ，只需要执行命令： npx webpack --config webpackconfig.js


file-loader 配置 https://webpack.js.org/loaders/file-loader/#root
url-loader 配置 https://www.webpackjs.com/loaders/url-loader/
sass-loader 配置 https://webpack.js.org/loaders/sass-loader/
postcss-loader 配置 https://webpack.js.org/loaders/postcss-loader/

打包 es6 使用babel  https://www.babeljs.cn/setup#installation

file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着你可以管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。

url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。
