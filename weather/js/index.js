function myFun(result){
  var cityName = result.name.split("市")[0];
  $.ajax({
    url: "http://api.map.baidu.com/telematics/v3/weather?location=" + cityName + "&output=json&ak=E577a29e33bc8df7619f6c364501fd09",
    dataType: "jsonp",
    callback: "callback",
    success: function(ret){
      console.log(ret);
      //今天天气
      var container = ["#today","#next1","#next2","#next3"];
      var result = ret.results[0];
      var weather_data = result.weather_data;
      
      //城市、风力
	  var weather_today = result.weather_data[0].weather;
      $("#location").html(result.currentCity);
      $("#weather").html(weather_today);
      $("#wind").html(result.weather_data[0].wind);

	  //根据天气替换背景
	  if(/雨/.test(weather_today)){
          $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4l2hvg9j211y0lce5s.jpg')"});
      }else if(/雪/.test(weather_today)){
		  $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4wzmvmtj211y0lchdt.jpg')"});
	  }else if(/多云|阴/.test(weather_today)){
          $("body").css({"background-image":"url('http://ww1.sinaimg.cn/mw690/62d95157gw1ezb4kyvuzmj211y0lcahf.jpg')"});
      }
      
      //天气情况
      for(var i in weather_data){
          $(container[i] + " img").attr("src",weather_data[i].dayPictureUrl);
          $(container[i] + " .temp").html(weather_data[i].temperature);
      }
    }
  });
}

var myCity = new BMap.LocalCity();
myCity.get(myFun);

var width = window.screen.availWidth;
var height = window.screen.availHeight;
if(height > width){
  //手机屏幕适配
  $(".container").css({"margin-top": "40%"});
}

