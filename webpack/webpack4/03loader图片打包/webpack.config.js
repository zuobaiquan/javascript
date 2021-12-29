// http://nodejs.cn/api/path.html#path_path
const path=require('path')

module.exports={
  mode:'development', // mode是 development时，webpack不会压缩的；是production时会压缩
  entry:'./src/index.js',
  module:{
    rules:[
      {
        test:/\.(jpg|png)$/,
        use:{
          loader:'file-loader',
          options:{
            // placeholder占位符
            // name:'[name].[ext]', //设置打包文件的名称
            name:'[name]_[hash].[ext]', //设置打包文件的名称
            outputPath: 'images',
          }
        }
      }
    ]
  },
  output:{
    filename:'bundle.js',
    // path.resolve 绝对路径
    // __dirname 绝对路径
    path:path.resolve(__dirname,'dist')
  }
}
