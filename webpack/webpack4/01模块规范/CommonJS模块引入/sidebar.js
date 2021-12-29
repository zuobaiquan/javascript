function Sidebar() {
  var dom = document.getElementById('root');
  var sidebar = document.createElement('div');
  sidebar.innerText = 'sidebar';
  dom.append(sidebar);
}
//导出模块的方式  module.exports是 commonJs的规范
module.exports= Sidebar
