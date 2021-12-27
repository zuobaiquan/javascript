function moveDiv(div, fps) {
    var left = 0;
    var param = 1;
    function loop () {
        update();
        draw();
    }
    function update() {
        left += param * 2;
        if (left > 300) {
            left = 300;
            param = -1;
        } else if (left < 0) {
            left = 0;
            param = 1;
        }
    }
    function draw() {
        div.style.left = left + "px";
    }
    setInterval(loop, 1000 / fps);
}
moveDiv(document.getElementById("div"), 60);