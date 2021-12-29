// http://nodejs.cn/api/path.html#path_path
const path=require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports={
  mode:'development', // mode是 development时，webpack不会压缩的；是production时会压缩
  entry:'./src/index.js',
  // production devtool: 'cheap-module-source-map',
  devtool: 'cheap-module-eval-source-map',
  module:{
    rules:[
      {
        test:/\.(jpg|png)$/,
        use:{
          loader:'url-loader',
          options:{
            // placeholder占位符
            // name:'[name].[ext]', //设置打包文件的名称
            name:'[name]_[hash].[ext]', //设置打包文件的名称
            outputPath: 'images',
            limit:1024*10  //意思是 超过10K 就输出文件，否则base64输出
          }
        }
      },
      {
        test:/\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // css-loader 需要用  sass-loader 和 postcss-loader加载器
              modules: false  //产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名。这就是 CSS Modules 的做法。
            }
          },
          'sass-loader',
          'postcss-loader'
        ] //loader是有先后顺序的，从下到上，从右到左
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader', // 文件转换
          options: {
            outputPath: 'font/'
          }
        },
      },
      // https://www.babeljs.cn/setup#installation
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin()],
  output:{
    filename:'bundle.js',
    // path.resolve 绝对路径
    // __dirname 绝对路径
    // publicPath: 'http://cdn.com.cn', // 添加资源地址前缀
    // publicPath: '/', // 添加资源地址前缀
    path:path.resolve(__dirname,'dist')
  }
}
