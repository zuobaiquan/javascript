(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fail"],{"0673":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"exception"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.config[t.type].img}})]),a("div",{staticClass:"content"},[a("h1",[t._v(t._s(t.config[t.type].title))]),a("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),a("div",{staticClass:"action"},[a("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},n=[],r={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或无权访问"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},s=r,o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:s}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},c=o,l=(a("68e6"),a("2877")),d=Object(l["a"])(c,i,n,!1,null,"60f63fb6",null);e["default"]=d.exports},"0dbc":function(t,e,a){"use strict";a("c5b9")},"0eb6":function(t,e,a){"use strict";a("1ba2")},"0f07":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.screen-areabox[data-v-81fb157a]{background:#070a2d;position:relative;border:1px solid #216dfd}.screen-areabox .arrow-bottom[data-v-81fb157a]:after,.screen-areabox .arrow-bottom[data-v-81fb157a]:before,.screen-areabox .arrow-top[data-v-81fb157a]:after,.screen-areabox .arrow-top[data-v-81fb157a]:before{content:"";position:absolute;top:-2px;display:inline-block;width:20px;height:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAMElEQVQ4jWNk+PPzPwMVARM1DQMBFiQ2IzUMpLoLRw0cNXDUwFEDRw1kYGBgYGAAAD48Ax+kktTYAAAAAElFTkSuQmCC) no-repeat;background-size:100%}.screen-areabox .arrow-bottom[data-v-81fb157a]:before,.screen-areabox .arrow-top[data-v-81fb157a]:before{left:-2px}.screen-areabox .arrow-bottom[data-v-81fb157a]:after,.screen-areabox .arrow-top[data-v-81fb157a]:after{right:-2px;transform:rotate(90deg)}.screen-areabox .arrow-bottom[data-v-81fb157a]:after,.screen-areabox .arrow-bottom[data-v-81fb157a]:before{top:auto;bottom:-2px}.screen-areabox .arrow-bottom[data-v-81fb157a]:before{transform:rotate(-90deg)}.screen-areabox .arrow-bottom[data-v-81fb157a]:after{transform:rotate(-180deg)}',""])},"1ba2":function(t,e,a){var i=a("4f14");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("62bdc859",i,!0,{sourceMap:!1,shadowMode:!1})},"2f0c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width,margin:"0 auto"},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=(a("817d"),{mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,dataList:[]}},watch:{data:{handler:function(t,e){this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id),"macarons")},initChart:function(){this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",textStyle:{color:"#fff",fontSize:14}},series:[{name:"死亡人口分布",type:"pie",radius:["20%","70%"],center:["50%","40%"],roseType:"area",data:this.data}]})}}}),l=c,d=a("2877"),f=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},"4a53":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.className,"screen-title"]},[a("div",{staticClass:"inner-box"},[a("span",[t._t("default")],2)])])},n=[],r={name:"TitleBox",props:{className:{type:String,default:""}},methods:{}},s=r,o=(a("0dbc"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,"20a7cc5a",null);e["default"]=c.exports},"4d99":function(t,e,a){var i=a("0f07");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("0e11678d",i,!0,{sourceMap:!1,shadowMode:!1})},"4f14":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".chart-container[data-v-fcf29af6]{position:relative;width:100%;padding-bottom:1px;background:#070a2d;height:100vh;box-sizing:border-box;display:-ms-flexbox;display:flex;padding-bottom:30px;-ms-flex-direction:column;flex-direction:column}.chart-container .date-box[data-v-fcf29af6]{position:absolute;right:40px;top:40px;color:#19d1ff;font-size:18px}.chart-container .date-box-left[data-v-fcf29af6]{position:absolute;left:40px;top:40px;color:#19d1ff;font-size:18px}.chart-container .screen-header[data-v-fcf29af6]{width:100%}.chart-container .screen-box[data-v-fcf29af6]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;margin:0 30px}.chart-container .unit-title[data-v-fcf29af6]{position:absolute;right:10px;top:15px;color:#fff;font-size:15px}.chart-container .screen-left[data-v-fcf29af6]{width:430px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:90%}.chart-container .screen-left .left-box[data-v-fcf29af6]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;padding:8px 20px;box-sizing:border-box;margin-top:30px}.chart-container .chart-box[data-v-fcf29af6]{-ms-flex:1;flex:1}.chart-container .screen-center[data-v-fcf29af6]{margin:0 30px;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:90%}.chart-container .screen-center .screen-map[data-v-fcf29af6]{margin-top:30px;padding:0 20px;-ms-flex:1;flex:1}.chart-container .screen-center .center-box[data-v-fcf29af6]{padding:8px 20px}.chart-container .screen-right[data-v-fcf29af6]{width:430px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:90%}.chart-container .screen-right .right-box[data-v-fcf29af6]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:8px 20px;margin-top:30px;text-align:center}.chart-container .death-list[data-v-fcf29af6]{list-style:none;font-size:0;margin:0;padding:0}.chart-container .death-list li[data-v-fcf29af6]{display:inline-block;font-size:15px;color:#19d1ff;width:33.33%;margin:5px 0}.chart-container .death-list li span[data-v-fcf29af6]{color:#fff;font-size:14px}.chart-container .wg-list[data-v-fcf29af6]{list-style:none;font-size:0;margin:0;padding:0;text-align:left;padding-left:10px}.chart-container .wg-list li[data-v-fcf29af6]{display:inline-block;font-size:15px;width:33.33%;margin:5px 0;color:#fff}.chart-container .wg-list li span[data-v-fcf29af6]{margin-right:12px;color:#fff;font-size:14px;background:#19d1ff;border-radius:2px;display:inline-block;padding:1px 5px}",""])},"51f3":function(t,e,a){var i=a("81d4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("19fd8d28",i,!0,{sourceMap:!1,shadowMode:!1})},"58f0":function(t,e,a){t.exports=a.p+"img/screenheader.2fe3910e.png"},"68e6":function(t,e,a){"use strict";a("51f3")},"6ebb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=a("cebe"),l=a.n(c),d=a("5a0c"),f=a.n(d),h={mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"400px"},data:{type:Object,default:function(){return{x:[],y:[]}}}},data:function(){return{chart:null,dataObj:{x:[],y:[]}}},watch:{data:{handler:function(t,e){this.dataObj.x=t.x||[],this.dataObj.y=t.y||[],this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{moment:f.a,init:function(){var t=this;this.chart=s.a.init(document.getElementById(this.id)),l.a.get("/map.json").then((function(e){s.a.registerMap("huaian",e.data),t.initChart()}))},initChart:function(){this.chart.setOption({title:{text:"公墓墓穴使用率分布",textStyle:{color:"white"}},grid:{top:"0%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item",formatter:function(t){return t.name+"<br/>总数："+t.value+"<br/> 使用数："+t.data.useNum+"<br/> 使用率："+t.data.usePercent+"%"}},visualMap:{left:"right",min:0,max:1e4,text:["High","Low"],realtime:!1,calculable:!0,inRange:{color:["lightskyblue","yellow","orangered"]},textStyle:{color:"white"}},series:[{type:"map",mapType:"huaian",label:{show:!0},itemStyle:{normal:{areaColor:"rgb(50,96,141)",borderColor:"rgb(110,126,141,0.99)",label:{show:!0,textStyle:{color:"blue",fontSize:14}}}},data:this.data,nameMap:{"板桥镇":"板桥镇","大莫古镇":"大莫古镇","芳华镇":"芳华镇","陆良华侨管理区":"陆良华侨管理区","活水乡":"活水乡","龙海乡":"龙海乡","马街镇":"马街镇","中枢镇":"中枢镇","召夸镇":"召夸镇","小百户镇":"小百户镇","三岔河镇":"三岔河镇"}}]})}}},u=h,p=a("2877"),m=Object(p["a"])(u,i,n,!1,null,null,null);e["default"]=m.exports},"81d4":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".exception[data-v-60f63fb6]{min-height:500px;height:80%;-ms-flex-align:center;align-items:center;text-align:center;margin-top:150px}.exception .img[data-v-60f63fb6]{display:inline-block;padding-right:52px;zoom:1}.exception .img img[data-v-60f63fb6]{height:360px;max-width:430px}.exception .content[data-v-60f63fb6]{display:inline-block;-ms-flex:auto;flex:auto}.exception .content h1[data-v-60f63fb6]{color:#434e59;font-size:72px;font-weight:600;line-height:72px;margin-bottom:24px}.exception .content .desc[data-v-60f63fb6]{color:rgba(0,0,0,.45);font-size:20px;line-height:28px;margin-bottom:16px}.mobile .exception[data-v-60f63fb6]{margin-top:30px}.mobile .exception .img[data-v-60f63fb6]{padding-right:unset}.mobile .exception .img img[data-v-60f63fb6]{height:40%;max-width:80%}",""])},a2a1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width,margin:"0 auto"},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=(a("817d"),{mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,dataList:[]}},watch:{data:{handler:function(t,e){this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id),"macarons")},initChart:function(){this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,textStyle:{color:"#fff",fontSize:14}},series:[{name:"死亡类型",type:"pie",radius:["50%","70%"],center:["50%","60%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:this.data}]})}}}),l=c,d=a("2877"),f=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},ace5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=(a("eee0"),{mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"2000px"},height:{type:String,default:"200px"},data:{type:Object,default:function(){return{x:[],y:[]}}}},data:function(){return{chart:null,dataObj:{years:[],total:[]}}},watch:{data:{handler:function(t,e){this.dataObj.years=t.years||[],this.dataObj.total=t.total||[],this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id),"helianthus")},initChart:function(){this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"10%",left:"2%",right:"2%",bottom:"1%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,axisTick:{show:!0},axisLine:{show:!0},axisLabel:{margin:6,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:400}},data:this.dataObj.years}],yAxis:[{type:"value",show:!0,minInterval:1,axisLine:{show:!0,lineStyle:{width:1}},axisLabel:{margin:6,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:400},formatter:function(t,e){return t.toFixed(0)}},splitLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}}}],series:[{type:"bar",barWidth:35,showBackground:!1,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#fff",fontSize:16}}}},data:this.dataObj.total}]})}}}),l=c,d=a("2877"),f=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},c5b9:function(t,e,a){var i=a("f6e3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("200a1d98",i,!0,{sourceMap:!1,shadowMode:!1})},cc89:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("exception-page",{attrs:{type:"404"}})},n=[],r=a("0673"),s={components:{ExceptionPage:r["default"]}},o=s,c=a("2877"),l=Object(c["a"])(o,i,n,!1,null,"3c8fc1bd",null);e["default"]=l.exports},d3d3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width,margin:"0 auto"},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=(a("817d"),{mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,dataList:[]}},watch:{data:{handler:function(t,e){var a=[];if(this.data.length>0)for(var i=0;i<this.data.length;i++){var n=this.data[i];a.push({value:n.value,name:n.name,label:{color:"#fff"}})}this.dataList=a,this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id),"macarons")},initChart:function(){this.chart.setOption({grid:{top:"0",left:"0",right:"0",bottom:"0",containLabel:!0},legend:{bottom:"0",textStyle:{color:"#fff",fontSize:14}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"举报类型",type:"pie",radius:"50%",top:0,bottom:30,data:this.dataList,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}}}),l=c,d=a("2877"),f=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},dadb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chart-container"},[i("img",{staticClass:"screen-header",attrs:{src:a("58f0")}}),i("div",{staticClass:"screen-box"},[i("div",{staticClass:"date-box-left"}),i("div",{staticClass:"date-box"},[t._v("\n      "+t._s(t.dataTime.dateYear)+" "+t._s(t.dataTime.dateWeek)+" "+t._s(t.dataTime.dateDay)+"\n    ")]),i("div",{staticClass:"screen-left"},[i("area-box",{staticClass:"left-box"},[i("span",{staticClass:"unit-title"},[t._v("单位：人")]),i("title-box",[t._v("全县死亡人数统计")]),i("div",{staticClass:"chart-box"},[i("barChart",{staticStyle:{flex:"1"},attrs:{id:"barDeath",width:"100%",height:"100%",data:t.barData}})],1)],1),i("area-box",{staticClass:"left-box"},[i("span",{staticClass:"unit-title"},[t._v("单位：人")]),i("title-box",[t._v("死亡人口分布")]),i("div",{staticClass:"chart-box"},[i("pieChart2",{staticStyle:{flex:"1"},attrs:{id:"pieChart2",data:t.pieData2,width:"400px",height:"100%"}})],1)],1)],1),i("div",{staticClass:"screen-center"},[i("div",{staticClass:"screen-map"},[i("mapChart",{staticStyle:{flex:"1"},attrs:{id:"mapChartbox",width:"100%",height:"100%",data:t.mapData}})],1),i("area-box",{staticClass:"center-box"},[i("span",{staticClass:"unit-title"},[t._v("单位：人")]),i("title-box",[t._v("  "+t._s(t.moment(new Date).format("YYYY"))+"年死亡人口走势")]),i("div",{staticClass:"chart-box"},[i("lineChart",{staticStyle:{flex:"1"},attrs:{id:"sylhBox",width:"100%",height:"180px",data:t.lineData}})],1)],1)],1),i("div",{staticClass:"screen-right"},[i("area-box",{staticClass:"right-box"},[i("span",{staticClass:"unit-title"},[t._v("单位：人")]),i("title-box",[t._v("死亡类型分布")]),i("div",{staticClass:"chart-box"},[i("pieChart3",{staticStyle:{flex:"1"},attrs:{id:"pieChart3",data:t.pieData3,width:"400px",height:"100%"}})],1)],1),i("area-box",{staticClass:"right-box"},[i("span",{staticClass:"unit-title"},[t._v("单位：件")]),i("title-box",[t._v("违规类型分布")]),i("div",{staticClass:"chart-box"},[i("pieChart",{staticStyle:{flex:"1"},attrs:{id:"pieChart",data:t.pieData,width:"400px",height:"100%"}})],1)],1)],1)])])},n=[],r=a("e327"),s=a("ace5"),o=a("efa2"),c=a("d3d3"),l=a("6ebb"),d=a("2f0c"),f=a("a2a1"),h=a("fda7"),u=a("4a53"),p=a("ca00"),m=a("5a0c"),b=a.n(m),x=a("4ec3");function g(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=y(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,r=t},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw r}}}}function y(t,e){if(t){if("string"===typeof t)return v(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var C={name:"DistributeChart",components:{lineChart:r["default"],barChart:s["default"],pieChart:c["default"],barChart2:o["default"],mapChart:l["default"],areaBox:h["default"],titleBox:u["default"],pieChart2:d["default"],pieChart3:f["default"]},data:function(){var t;return t={interfaceOptimizeList:[],interfaceHistoryCop:{},interfaceHistoryOpen:{},cycle_time:"",lineData:{x:[],y:[]},barData:{},mapData:[],curTime:"",dataTime:{dateDay:null,dateYear:null,dateWeek:null,weekday:["周日","周一","周二","周三","周四","周五","周六"]},dataWeather:{city:"北京市",dayweather:"晴",nightweather:"多云",weathertemp:"晴",nighttemp:"3℃",daytemp:"15℃",peraturetemp:"3℃~15℃",icontemp:"https://cdn.heweather.com/cond_icon/100.png"},pieData:[],pieData2:[],pieData3:[]},w(t,"mapData",[]),w(t,"lineData",{}),t},created:function(){this.getDateTime(),this.statisticsDeadByYear(),this.statisticsDeadByArea(),this.statisticsDeathType(),this.statisticsCemetery(),this.statisticsDeadByNowMonth(),this.statisticsReportByType(),this.getData(),Object(p["a"])(document.body,"screen-bg")},destroyed:function(){Object(p["t"])(document.body,"screen-bg")},methods:{statisticsDeadByYear:function(){var t=this;Object(x["Ec"])().then((function(e){var a,i=[],n=[],r=g(e.result);try{for(r.s();!(a=r.n()).done;){var s=a.value;i.push(s.years+"年"),n.push(s.total)}}catch(o){r.e(o)}finally{r.f()}t.barData={years:i,total:n}}))},statisticsDeadByArea:function(){var t=this;Object(x["Cc"])().then((function(e){var a,i=g(e.result);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.pieData2.push({value:n.total,name:n.districtName})}}catch(r){i.e(r)}finally{i.f()}}))},statisticsDeathType:function(){var t=this;Object(x["Fc"])().then((function(e){var a,i=g(e.result);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.pieData3.push({value:n.total,name:n.deathType})}}catch(r){i.e(r)}finally{i.f()}}))},statisticsCemetery:function(){var t=this;Object(x["Bc"])().then((function(e){for(var a=["板桥镇","大莫古镇","芳华镇","陆良华侨管理区","活水乡","龙海乡","马街镇","中枢镇","召夸镇","小百户镇","三岔河镇"],i=0,n=a;i<n.length;i++){var r,s=n[i],o=0,c=0,l=0,d=g(e.result);try{for(d.s();!(r=d.n()).done;){var f=r.value;if("中枢街道"!==f.districtName&&"同乐街道"!==f.districtName||(f.districtName="中枢镇"),f.districtName===s){o=f.zongNum,c=f.useNum,l=f.usePercent;break}}}catch(h){d.e(h)}finally{d.f()}t.mapData.push({value:o,name:s,useNum:c,usePercent:l})}}))},statisticsDeadByNowMonth:function(){var t=this;Object(x["Dc"])().then((function(e){var a,i=[],n=[],r=g(e.result);try{for(r.s();!(a=r.n()).done;){var s=a.value;i.push(s.months+"月"),n.push(s.total)}}catch(o){r.e(o)}finally{r.f()}t.lineData={x:i,y:n}}))},statisticsReportByType:function(){var t=this;Object(x["Gc"])().then((function(e){var a,i=g(e.result);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.pieData.push({value:n.total,name:n.violationType})}}catch(r){i.e(r)}finally{i.f()}}))},moment:b.a,parseTime:p["o"],formatTime2:p["i"],getData:function(){},getDateTime:function(){var t=this;setInterval((function(){t.dataTime.dateYear=Object(p["i"])(new Date,"yyyy-MM-dd"),t.dataTime.dateWeek=t.dataTime.weekday[(new Date).getDay()],t.dataTime.dateDay=Object(p["i"])(new Date,"HH: mm: ss")}),1e3)},requestGetWeather:function(){var t=this;this.axios({method:"get",url:"https://api.asilu.com/weather_v2/",dataType:"jsonp"}).then((function(e){if(alert("又进来"),"1"===e.status){var a=(new Date).getHours(),i=e.forecasts[0].casts[0],n=e.forecasts[0].city,r=i.daytemp+"℃",s=i.nighttemp+"℃",o="",c="";a>=6&&a<18?(o=i.dayweather,c=i.nighttemp+"℃~"+i.daytemp+"℃"):(o=i.nightweather,c=i.daytemp+"℃~"+i.nighttemp+"℃");var l="https://cdn.heweather.com/cond_icon/"+weatherOption.weatherCode[o]+".png";t.dataWeather={city:n,daytemp:r,nighttemp:s,weathertemp:o,peraturetemp:c,icontemp:l}}}))}}},S=C,_=(a("0eb6"),a("2877")),O=Object(_["a"])(S,i,n,!1,null,"fcf29af6",null);e["default"]=O.exports},e327:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c={mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"400px"},data:{type:Object,default:function(){return{x:[],y:[]}}}},data:function(){return{chart:null,dataObj:{x:[],y:[]}}},watch:{data:{handler:function(t,e){this.dataObj.x=t.x||[],this.dataObj.y=t.y||[],this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id))},initChart:function(){this.chart.setOption({grid:{top:"8%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:[{type:"category",boundaryGap:!0,axisTick:{show:!0},axisLine:{lineStyle:{color:"#093F71"}},axisLabel:{margin:10,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:400}},data:this.dataObj.x}],yAxis:[{type:"value",scale:!0,min:0,minInterval:1,axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.2)"}},axisLabel:{margin:10,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:400},formatter:function(t,e){return t.toFixed(0)}},splitLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}}}],series:[{type:"line",smooth:!1,symbol:"circle",symbolSize:12,showSymbol:!0,lineStyle:{normal:{color:"rgba(0, 78, 137, 1)",width:2}},itemStyle:{normal:{color:"#19D1FF"}},data:this.dataObj.y}]})}}},l=c,d=a("2877"),f=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=f.exports},efa2:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},n=[],r=a("313e"),s=a.n(r),o=a("f42c"),c=a("ca00"),l={mixins:[o["a"]],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Object,default:function(){return{x:[],y:[]}}}},data:function(){return{chart:null,dataObj:{x:[],y:[]}}},watch:{data:{handler:function(t,e){var a=Object(c["e"])(t.x||[]),i=Object(c["e"])(t.y||[]);this.dataObj.x=a.reverse(),this.dataObj.y=i.reverse(),this.initChart()},deep:!0}},mounted:function(){this.init()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{init:function(){this.chart=s.a.init(document.getElementById(this.id))},initChart:function(){this.chart.setOption({grid:{top:"12px",left:"2%",right:"8%",bottom:"0",containLabel:!0},xAxis:[{type:"value",show:!1}],yAxis:[{show:!0,type:"category",position:"left",axisTick:{show:!1},splitArea:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:400}},splitLine:{show:!1},data:this.dataObj.x}],color:"#19D1FF",series:[{type:"bar",barCategoryGap:"50%",label:{normal:{show:!0,position:"right",textStyle:{color:"#fff",fontSize:16}}},data:this.dataObj.y}]})}}},d=l,f=a("2877"),h=Object(f["a"])(d,i,n,!1,null,null,null);e["default"]=h.exports},f42c:function(t,e,a){"use strict";var i=a("ca00");e["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){this.initListener()},activated:function(){this.$_resizeHandler||this.initListener(),this.resize()},beforeDestroy:function(){this.destroyListener()},deactivated:function(){this.destroyListener()},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},initListener:function(){var t=this;this.$_resizeHandler=Object(i["d"])((function(){t.resize()}),100),window.addEventListener("resize",this.$_resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},destroyListener:function(){window.removeEventListener("resize",this.$_resizeHandler),this.$_resizeHandler=null,this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},resize:function(){var t=this.chart;t&&t.resize()}}}},f6e3:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.screen-title[data-v-20a7cc5a]{display:block;text-align:center}.screen-title .inner-box[data-v-20a7cc5a]{position:relative;display:inline-block;border:1.5px solid #216dfd;border-radius:12px;padding:2px 4px}.screen-title .inner-box[data-v-20a7cc5a]:after,.screen-title .inner-box[data-v-20a7cc5a]:before{content:"";position:absolute;left:-5px;top:50%;transform:translateY(-50%);width:6px;height:24px;z-index:1;background:#070a2d;display:inline-block}.screen-title .inner-box[data-v-20a7cc5a]:after{left:auto;right:-5px}.screen-title span[data-v-20a7cc5a]{display:inline-block;color:hsla(0,0%,100%,.75);font-size:14px;padding:4px 30px;border-radius:6px;background:rgba(0,78,137,.8)}',""])},f82d:function(t,e,a){"use strict";a("4d99")},fda7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.className,"screen-areabox"]},[a("i",{staticClass:"arrow-top"}),a("i",{staticClass:"arrow-bottom"}),t._t("default")],2)},n=[],r={name:"AreaBox",props:{className:{type:String,default:""}},methods:{}},s=r,o=(a("f82d"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,"81fb157a",null);e["default"]=c.exports}}]);