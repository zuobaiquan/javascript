function getStyle(obj,attr){
  if(obj.currentStyle)  { return obj.currentStyle[attr];}
  return getComputedStyle(obj,false)[attr];
}

function id(name){return document.getElementById(name);}
function tag(name){return document.getElementsByTagName(name);}
function cls(parentNode,className){
    parentNode = parentNode || document;
    var arr = [];
    var res = parentNode.getElementsByTagName("*");
    for(var i = 0;i<res.length;i++){
       if(res[i].className == className ){
         arr.push(res[i]);
       }
    } 
    return arr;
}


function move(obj,json,time,fn){
  time = time || 30;
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
      var isstop = true;
      for(var attr in  json){
        var cur = null;
        if(attr == "opacity"){
           cur = parseInt(getStyle(obj,attr)*100);
        }else
        {
           cur = parseInt(getStyle(obj,attr));
            
        }
        var speed = (json[attr]-cur)/5;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);  //>0向上取整  <0向下取整
        if(cur!=json[attr])  isstop = false;
        if(attr == "opacity"){
           obj.style.opacity = (cur+speed)/100;
           obj.style.filter = "alpha(opacity="+cur+speed+")";
        }else{
           obj.style[attr] = cur+speed+'px';
        }    
      }
      if(isstop){
        clearInterval(obj.timer);
        fn&&fn();
      }
    },time)
}
