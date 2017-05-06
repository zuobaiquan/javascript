var login = cls(document,"login")[0];
var baby = cls(document,"baby")[0];
login.onclick = function(e){
	baby.style['visibility'] = "visible";
	this.onmouseover = function(){this.style.cursor = "default";}
}

var nav = cls(document,"nav")[0];
var nav_li = nav.getElementsByTagName("li");
var special = cls(document,"special")[0];
var i = 0;
for(i = 1;i<nav_li.length;i++){
    nav_li[i].onmouseover = function(){
			 var a = this.children[0];
	         var dl = this.children[1];
	         this.className = 'li_light';
	         a.className = "a_light";
	         dl.style.display="block";
	         move(dl,{opacity:100})
	         move(special,{paddingTop:43},10)	
		}
	nav_li[i].onmouseout = function(){ 
			 var a = this.children[0];
	         var dl = this.children[1];     
	         this.className = '';
	         a.className = "";
	         dl.style.display="none";
		     move(dl,{opacity:0})
		     move(special,{paddingTop:23},10)	    
		}
}

var teacher = cls(document,"teacher")[0];
var pics = teacher.getElementsByTagName("li");
var ul_pic = pics[0].parentNode;
var ul_height = parseInt(getStyle(ul_pic,"height"));
var pic_timer = null;
function change(){
		 var top = parseInt(getStyle(ul_pic,"top"));
		 ul_pic.style.top = top-1+'px';
		 if(Math.abs(top)>=ul_height/2){  
		 	 ul_pic.style.top = '0';
		 }
}
	   
pic_timer = setInterval(change,30);
ul_pic.onmouseover = function(){
		clearInterval(pic_timer);
}
ul_pic.onmouseout = function(){
		pic_timer = setInterval(change,30);
}





