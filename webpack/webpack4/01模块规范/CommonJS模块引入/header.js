function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerText = 'header';
  dom.append(header);
}
//导出模块的方式  module.exports是 commonJs的规范
module.exports= Header
