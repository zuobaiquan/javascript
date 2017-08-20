function animate(element, json, fun) {

	clearInterval(element.timer);
	var isStop = false;
	element.timer = setInterval(function () {
		isStop = true;
		for (var key in json){
			var target = json[key];

			var current;
			if (key == 'opacity') {
				//当动画的类型为透明度时  获取的值应该是浮点类型
				current = parseFloat(getStyle(element, key)) || 1;
			} else {
				//其他情况  用整数类型
				current = parseInt(getStyle(element, key)) || 0;
			}
			
			var step = (target - current) / 10;
			if (key != 'opacity') {
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
			}
			current += step;


			if (key == 'opacity') {
				if (Math.abs(target - current) > 0.01) {
					isStop = false;
				} else {
					current = target;
				}

				element.style.opacity = current + '';
			} else {
				if (Math.abs(target - current) > Math.abs(step)) {
					isStop = false;
				} else {
					current = target;
				}
				if (key == 'zIndex'){
					element.style.zIndex = Math.round(current);
				} else {
					element.style[key] = current + 'px';
				}	
			}
		}
		if (isStop) {
			clearInterval(element.timer);
			console.log('动画完成');
			if (typeof fun == 'function') {
				fun();
			}
		}
	}, 30);
}



function getStyle(element, styleName) {
		
		if (element.currentStyle) {
			return element.currentStyle[styleName];
		} else {
			var computedStyle =  window.getComputedStyle(element, null);
			return computedStyle[styleName];
		}
	}