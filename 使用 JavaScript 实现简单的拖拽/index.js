
(function () {
  var dragging = false;
  var boxX, boxY, mouseX, mouseY, offsetX, offsetY;

  var box = document.getElementById('box');

  box.onmousedown = down;
  document.onmousemove = move;
  document.onmouseup = up;

  function down(e) {
    dragging = true;
    boxX = box.offsetLeft;
    boxY = box.offsetTop;
    mouseX = parseInt(getMouseXY(e).x);
    mouseY = parseInt(getMouseXY(e).y);
    offsetX = mouseX - boxX;
    offsetY = mouseY - boxY;
  }

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

  function up(e) {
    dragging = false;
  }

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
})()