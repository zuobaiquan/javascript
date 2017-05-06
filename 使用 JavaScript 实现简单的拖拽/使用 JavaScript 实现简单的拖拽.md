# 使用 JavaScript 实现简单的拖拽

 步骤

使用 JavaScript 实现拖拽的步骤：

- 让元素捕获事件（mousedown, mousemove & mouseup）
- 单击并不释放，触发 mousedown，标记开始拖拽，并获取元素和鼠标的位置
- 拖动鼠标，触发 mousemove，不断的获取鼠标的位置，并通过计算重新确定元素的位置
- 释放师表，触发 mouseup，结束拖拽，确定元素位置并更新

**被拖拽的元素必须是相对父元素定位，或者是绝对定位**

## 实现

### 绑定事件

首先，对拖拽的元素绑定 mousedown 时间，使其触发对应的函数，获取元素与鼠标的位置。在 document 对象上绑定 mousemove 和 mouseup 事件，不在拖拽的元素上绑定是因为当鼠标移动太快而超出元素的范围时会停止拖拽，而绑定在 document 上则可以避免这样的事情发生。拖拽再快都不会超出 document 的范围。

绑定事件：

```
var box = document.getElementById('box');

box.onmousedown = down;
document.onmousemove = move;
document.onmouseup = up;
```

## 获取鼠标位置

鼠标位置可以在 event 对象中获得，常用的属性有：

- clientX / clientY : 相对浏览器窗口坐标
- offsetX / offsetY : 相对事件目标对象坐标
- pageX / pageY : 相对 document 对象坐标

一般鼠标的位置使用 `pageX / pageY` 获取，但是 IE 不支持这两个属性。所以在 IE 中使用 `event.clientX + document.body.scrollLeft - document.body.clientLeft;` 获取鼠标的位置。

获取鼠标位置的函数：

```
function getMouseXY(e) {
  var x = 0, y = 0;
  e = e || window.event;
  if (e.pageX) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
    y = e.clientY + document.body.scrollTop - document.body.clientTop;
  }
  return {
    x: x,
    y: y
  };
}
```

### 事件触发函数

#### mousedown

当鼠标移动到元素内并点击元素不放时，触发 mousedown 事件。按照上面的步骤，这一步是获取元素与鼠标的位置，用于触发 mousemove 时计算元素的位置。

mousedown 触发的函数：

```
function down(e) {
  dragging = true;
  boxX = box.offsetLeft;
  boxY = box.offsetTop;
  mouseX = parseInt(getMouseXY(e).x);
  mouseY = parseInt(getMouseXY(e).y);
  offsetX = mouseX - boxX;
  offsetY = mouseY - boxY;
}
```

`boxX / boxY` 为元素左上角相对于已定位的父元素（相对或者绝对定位的父元素）的偏移的像素值，即元素左上角的坐标。

`mouseX / mouseY` 是通过 `getMouseXY` 函数获得的鼠标的坐标。

`offsetX/ offsetY` 是鼠标相对于元素坐标（左上角坐标）的坐标。

#### mousemove

当鼠标移动时，不断的获取鼠标的位置，并计算元素的新坐标修改元素的位置样式。

```
function move(e) {
  if (dragging) {
    var x = getMouseXY(e).x - offsetX;
    var y = getMouseXY(e).y - offsetY;
    var width = document.documentElement.clientWidth - box.offsetWidth;
    var height = document.documentElement.clientHeight - box.offsetHeight;

    x = Math.min(Math.max(0, x), width);
    y = Math.min(Math.max(0, y), height);

    box.style.left = x + 'px';
    box.style.top = y + 'px';
  }
}
```

变量 `width / height` 表示可移动的位置的大小，这里是 document 减去元素的大小（元素不会超出可移动的范围）。

`Math.min` 使得元素不会超出可移动访问的右边界（元素 x 坐标不会超过 width），`Math.max` 使得元素不会超出可移动范围的左边界（元素的 x 坐标不小于 0）。

最后将改变后的元素 `left` 与 `top` 值应用当元素上，即修改元素的样式。

#### mouseup

拖拽结束，取消拖拽的标记。使其触发 mousemove 事件，但不做任何处理。

```
function up(e) {
  dragging = false;
}
```

## 总结

上面使用的简单的 JavaScript 代码实现了元素的拖拽，但并没有对兼容性问题全面考虑，也没有对性能优化，有不必要的事件触发。

