---
title: js日期格式转换的几种方法探讨
date: 2017-08-22 23:21:49
tags: JavaScript
---

提出问题： 如何将 2017年8月22日 转换成 2017-8-22 / 2017-08-22呢

```js
'2017年8月22日'.replace(/[年月日]/g,'-');

'2017年8月22日'.match(/\d+/g).join('-')
```

```js
'2017年8月22日'.replace(/[年月]/g,'-').replace('日','');
```
<!--more-->

点评 第一种形式  返回的是 

```js
 2017-8-22-
 //这时我们可以通过字符串截取来处理
 '2017年8月22日'.replace(/[年月日]/g,'-').slice(0,-1);
```

上面日期 如果小于10，补0 ，则需要用如下方法

```js
'2017年8月22日'.match(/\d+/g).map(n => +n < 10 ? '0'+n : n).join('-')

function format( str ) {
    var result = /^(\d+)年(\d+)月(\d+)日$/.exec(str)
    if( result ) {
        var y = result[ 1 ];
        var m = result[ 2 ];
        var d = result[ 3 ];
        m = Number( m ) < 10 ? '0' + m : m;
        d = Number( d ) < 10 ? '0' + d : d;
        return y + '-' + m + '-' + d;
    }
    return null;
}
console.log(format( '2017年8月22日'))
```

```js
'2017年8月22日'.match(/\d{1,4}/g).join('-').replace(/\d+/g, function(d) {
   return (d.length > 1)? d : ('0' + d);
})
     
'2017年8月22日'.replace(/(\d+)日/, function(_d, d) {
   return (d.length == 2)? ('-' + d) : ('-0' + d);
}).replace(/(\d+)月/, function(_m, m) {
   return (m.length == 2)? ('-' + m) : ('-0' + m);
}).replace(/(\d+)年/, function(_y, y) {
   return y;
})
     
'2017年8月22日'.replace(/(\d+)[年,月,日]/g, function(_d,d) {
   return (d.length > 1) ? d.length == 4 ? d : ('-' + d) : ('-0' + d);
})

'2017年8月22日'.replace(/(\d{4})年(\d{1,2})月(\d{1,2})日/, (a,b,c,d)=>{
   return `${b}-${c>9?c:'0'+c}-${d}`
 })
```

