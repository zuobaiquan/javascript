"use strict";

var map = new BMap.Map("allmap");
var point = new BMap.Point(110,34.5);
map.enableScrollWheelZoom();
map.centerAndZoom(point, 6);

function ComplexCustomOverlay(point, item){
  this._point = point;
  this._text = item.name;
  this._child = item.id
  this._number=item.number
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
  var that=this
  that._map = map;
  let div = that._div = document.createElement("div");
  //div.style.zIndex = BMap.Overlay.getZIndex(that._point.lat);
  div.setAttribute('data-id', that._child);
  div.setAttribute('class', 'map-circle');
  div.setAttribute('data-lng', that._point.lng);
  div.setAttribute('data-lat', that._point.lat);
  let pname = document.createElement("p");
  pname.setAttribute('class', 'map-areaname');
  pname.appendChild(document.createTextNode(that._text));
  div.appendChild(pname);

  let pnum = document.createElement("p");
  pnum.setAttribute('class', 'map-areanumber');
  div.appendChild(pnum);
  pnum.appendChild(document.createTextNode(`${that._number}个`));
  // div.onmouseover = function(){
  //   this.style.zIndex = 9999;
  // }
  // div.onmouseout = function(){
  //   this.style.zIndex = BMap.Overlay.getZIndex(that._point.lat);
  // }
  if(that._number==0){
    let tipspan = document.createElement("span");
    tipspan.setAttribute('class', 'map-nodatatips');
    tipspan.appendChild(document.createTextNode("暂无数据"));
    div.appendChild(tipspan);
    let itips = document.createElement("i");
    itips.setAttribute('class', 'map-itips');
    tipspan.appendChild(itips);
  }
  div.onclick=function(){
    if(that._number==0){
      return ;
    }
    let curlng=parseInt(div.getAttribute('data-lng'))
    let curlat=parseInt(div.getAttribute('data-lat'))
    map.clearOverlays();
    //let point1 = new BMap.Point(curlng,curlat);
    let point1 = new BMap.Point("123","42");
    map.enableScrollWheelZoom();
    map.centerAndZoom(point1, 9);
    let districtData=[
      {"lng":123.848569,"lat":42.302504,"name":'西大标准件大全批发商店'},
      {"lng":124.848569,"lat":42.302504,"name":'测试地点111'},
      {"lng":122.28569,"lat":42.22504,"name":'测试地点222'},
      {"lng":122.29569,"lat":42.3504,"name":'测试地点333'}
    ]
    for (let i = 0; i < districtData.length; i++) {
      let temp2=districtData[i]
      let myCompOverlay2 = new ComplexCustomOverlay2(new BMap.Point(temp2.lng,temp2.lat), temp2);
      map.addOverlay(myCompOverlay2);
    }
  }
  map.getPanes().labelPane.appendChild(div);
  return div;
}
ComplexCustomOverlay.prototype.draw = function(){
  var map = this._map;
  var pixel = map.pointToOverlayPixel(this._point);
  this._div.style.left = pixel.x + "px";
  this._div.style.top  = pixel.y + "px";
}


function ComplexCustomOverlay2(point, item){
  this._point = point;
  this._text = item.name;
  this._child = item.id;
}
ComplexCustomOverlay2.prototype = new BMap.Overlay();
ComplexCustomOverlay2.prototype.initialize = function(map){
  this._map = map;
  let div2 = this._div2 = document.createElement("a");
  // div2.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
  div2.setAttribute('href', `www.baidu.com`);
  div2.setAttribute('class', 'circlebox');
  div2.setAttribute('target', '_blank');
  let div2Child1 = document.createElement("div");
  div2Child1.setAttribute('class', 'bg-circle');
  div2.appendChild(div2Child1);

  let div2Child2 = document.createElement("div");
  div2Child2.setAttribute('class', 'sm-circle');
  div2.appendChild(div2Child2);

  let div2Child3 = document.createElement("div");
  div2Child3.setAttribute('class', 'line');
  div2.appendChild(div2Child3);

  let div2Child4 = document.createElement("div");
  div2Child4.setAttribute('class', 'ctx');
  div2Child4.setAttribute('title', '点击查看详情');
  div2Child4.appendChild(document.createTextNode(this._text));
  div2.appendChild(div2Child4);

  div2.onmouseover = function(){
    div2.setAttribute('class', 'circlebox hoverbox');
  }
  div2.onmouseout = function(){
    div2.setAttribute('class', 'circlebox');
  }
  map.getPanes().labelPane.appendChild(div2);
  return div2;
}
ComplexCustomOverlay2.prototype.draw = function(){
  var map2 = this._map;
  var pixel2 = map2.pointToOverlayPixel(this._point);
  this._div2.style.left = pixel2.x + "px";
  this._div2.style.top  = pixel2.y + "px";
}






function initMap(){
  let proviceData=[
    {"lng":116.405289,"lat":39.904987,"name":"北京","id":1,"number":123},
    {"lng":121.472641,"lat":31.231707,"name":"上海","id":21,"number":0},
    {"lng":117.190186,"lat":39.125595,"name":"天津","id":42,"number":0},
    {"lng":106.504959,"lat":29.533155,"name":"重庆","id":62,"number":223},
    {"lng":117.283043,"lat":31.861191,"name":"安徽","id":104,"number":223},
    {"lng":119.306236,"lat":26.075302,"name":"福建","id":227,"number":243},
    {"lng":103.823555,"lat":36.058041,"name":"甘肃","id":322,"number":87},
    {"lng":113.28064,"lat":23.125177, "name":"广东","id":423,"number":1},
    {"lng":108.320007,"lat":22.82402,"name":"广西","id":566,"number":86},
    {"lng":106.713478,"lat":26.578342,"name":"贵州","id":690,"number":90},
    {"lng":106.884789,"lat":39.441528,"name":"海南","id":788,"number":45},
    {"lng":117.201569,"lat":39.156631,"name":"河北","id":814,"number":67},
    {"lng":113.665413,"lat":34.757977,"name":"河南","id":998,"number":0},
    {"lng":126.642464,"lat":45.756966,"name":"黑龙江","id":1176,"number":12},
    {"lng":114.298569,"lat":30.584354,"name":"湖北","id":1320,"number":87},
    {"lng":112.982277,"lat":28.19409,"name":"湖南","id":1436,"number":90},
    {"lng":125.324501,"lat":43.886841,"name":"吉林","id":1573,"number":0},
    {"lng":118.76741,"lat":32.041546,"name":"江苏","id":1643,"number":2},
    {"lng":115.892151,"lat":28.676493,"name":"江西","id":1763,"number":0},
    {"lng":123.429092,"lat":41.796768,"name":"辽宁","id":1874,"number":23},
    {"lng":111.670799,"lat":40.81831,"name":"内蒙古","id":1989,"number":23},
    {"lng":106.278175,"lat":38.46637,"name":"宁夏","id":2103,"number":7},
    {"lng":101.778915,"lat":36.623177,"name":"青海","id":2130,"number":0},
    {"lng":117.000923,"lat":36.675808,"name":"山东","id":2182,"number":823},
    {"lng":112.549248,"lat":37.857014,"name":"山西","id":2340,"number":22},
    {"lng":108.948021,"lat":34.263161,"name":"陕西","id":2471,"number":0},
    {"lng":104.065735,"lat":30.659462,"name":"四川","id":2589,"number":100},
    {"lng":91.13221,"lat":29.66036,"name":"西藏","id":2792,"number":22},
    {"lng":87.617729,"lat":43.792816,"name":"新疆","id":2873,"number":0},
    {"lng":102.71225,"lat":25.040609,"name":"云南","id":2987,"number":44},
    {"lng":120.15358,"lat":30.287458,"name":"浙江","id":3133,"number":98},
    {"lng":114.173355,"lat":22.320047,"name":"香港","id":3235,"number":0},
    {"lng":113.549088,"lat":22.198952,"name":"澳门","id":3239,"number":98},
    {"lng":121.509064,"lat":25.044333,"name":"台湾","id":3242,"number":34}
  ]
  for (let i = 0; i < proviceData.length; i++) {
    let temp=proviceData[i]
    let myCompOverlay = new ComplexCustomOverlay(new BMap.Point(temp.lng,temp.lat),temp);
    map.addOverlay(myCompOverlay);
  }
}
initMap()

var scrollFunc=function(e){
  e=e || window.event;
  var t1=document.getElementById("allmap");
  let zommValue=map.getZoom();
  if(zommValue<8){
    map.clearOverlays();
    new BMap.Point(110,35.2);
    map.centerAndZoom(point, 6);
    initMap()
  }
 }
 if(document.addEventListener){
   document.addEventListener('DOMMouseScroll',scrollFunc,false);
 }
 window.onmousewheel=document.onmousewheel=scrollFunc;
