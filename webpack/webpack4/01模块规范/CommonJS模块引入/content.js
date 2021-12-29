function Content() {
  var dom = document.getElementById('root');
  var content = document.createElement('div');
  content.innerText = 'content';
  dom.append(content);
}

//导出模块的方式  module.exports是 commonJs的规范
module.exports= Content
