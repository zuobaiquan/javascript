var tabs=function(){
  function tag(name,elem){
      return (elem||document).getElementsByTagName(name);
  }
  //获得相应ID的元素
  function id(name){
      return document.getElementById(name);
  }
  function first(elem){
      elem=elem.firstChild;
      return elem&&elem.nodeType==1? elem:next(elem);
  }
  function next(elem){
    do{
        elem=elem.nextSibling; 
    }while(
        elem&&elem.nodeType!=1 
    )
    return elem;
  }
  return {
      set:function(elemId,tabId){
        var elem=tag("li",id(elemId));
        var tabs=tag("div",id(tabId));
        var listNum=elem.length;
        var tabNum=tabs.length;
        for(var i=0;i<listNum;i++){
            elem[i].onclick=(function(i){
                return function(){
                    for(var j=0;j<tabNum;j++){
                        if(i==j){
                            tabs[j].style.display="block";
                            //alert(elem[j].firstChild);
                            elem[j].firstChild.className="selected";
                        }
                        else{
                            tabs[j].style.display="none";
                            elem[j].firstChild.className="";
                        }
                    }
                }
            })(i)
        }
      }
  }
}();
tabs.set("nav","menu_con");//执行