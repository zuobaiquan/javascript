webpack性能优化

1、小图片base64编码
2、bundle加hash
3、懒加载
4、提取共用代码
5、IngorePlugin （例如 忽略 moment 下的 /locale 目录）
6、使用cdn加速 （publicPath 修改静态资源url前缀地址，然后上传静态资源到cdn，使地址可访问）
7、mode开启production
8、自动开启代码压缩，自动删除调式代码
9、启动 tree shaking （ES6 Module 才能让tree shaking生效，commonjs不行）
10.Scope Hosting（让多个函数合并一个函数，减少作用域，执行更快）


ES6 Module 才能让tree shaking生效，commonjs不行
原因 
ES6 Module是静态引入，编译时引入
Commonjs动态引入 ，执行时引入
只有ES6 Module才能静态分析，实现Tree-shaking


什么是动态引入，什么是静态引入

let apiList = require('../api/index.js')
if(isDev){
  // 可以动态引入，执行时引入
  apiList = require('../api/index_dev.js')
}

import apiList = from '../api/index.js'
if(isDev){
  // 编译时报错，只能静态引入
  import apiList = from '../api/index_dev.js'
}

Scope Hosting原来：
将所有的模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
可以减少函数声明代码和内存开销

production mode默认开启 scope Hoisting
new webpack.optimize.ModuleConcatenationPlugin()插件
配置： https://blog.csdn.net/qq_39207948/article/details/113842168


DllPlugin 动态链接库

webpack 已内置DllPugin支持
DllPlugin 打包出dll文件
DllReferencePlugin 使用dll文件


满足以下条件：

1、前端框架如 Vue React 体积大、构建慢

2、较稳定、不常升级的版本

3、同一个版本只构建一次即可，不用每次都重新构建


