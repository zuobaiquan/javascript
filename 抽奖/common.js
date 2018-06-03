
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
//(function () {
//var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
//    var width = window.innerWidth;
    /* 640 100  320 50 */
//    var fontSize = 100/750*width;
    /*设置fontsize*/
//    html.style.fontSize = fontSize +'px';
//调整页面尺寸大小
//    window.onresize = function(){
//        var html = document.getElementsByTagName('html')[0];
        /*取到屏幕的宽度*/
//        var width = window.innerWidth;
        /* 640 100  320 50 */
//       var fontSize = 100/750 * width;
        /*设置fontsize*/
//       html.style.fontSize = fontSize +'px';
//    }
//})()

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);