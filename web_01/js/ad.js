/*ad*/
var  adwrap = cls(document,"adwrap")[0];
var  ali = adwrap.getElementsByTagName("ul")[0].getElementsByTagName("li");
var  btns = cls(adwrap,"li_btn")[0].children;
var  btn_L = cls(adwrap,'tripple_L')[0];
var  btn_R = cls(adwrap,"tripple_R")[0];

var num = 0;
var ad_timer = null;
var i  = 0;
for(i = 0;i<btns.length;i++){
	btns[i].index = i;
	btns[i].onclick = function()
	{
		 num = this.index;
		 tab();
	}
}
function tab(){
	 for(var j = 0;j<btns.length;j++){
		 	btns[j].children[0].className ="";
		 	ali[j].style['opacity'] = 0;
		 	ali[j].style["zIndex"] = 0;
     }
     btns[num].children[0].className  = "active";
     ali[num].style["zIndex"] = num+1;
     move(ali[num],{opacity:100});
}
function autoplay(){
	num++;
    if(num>=ali.length){num=0;}
	tab();
}

adwrap.children[0].onmouseover = function(){
	clearInterval(ad_timer);
}
adwrap.children[0].onmouseout = function(){
	ad_timer = setInterval(autoplay,4000);
}

btn_L.onclick = function(){
	num--;
	if(num<0) num = ali.length-1;
	tab();
}
btn_R.onclick = function(){
	num++;
	if(num>ali.length-1) num = 0;
	tab();
}


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
