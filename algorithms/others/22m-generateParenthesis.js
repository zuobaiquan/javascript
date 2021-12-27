/**
 * @method 插空 （）看作一个整体
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var _a = [];
	var keyStr = '';
	addChar('()', n);
	return _a;

	function addChar(curChars) {

		if (curChars.length === 2 * n) {
			if ( _a.join(',').indexOf(curChars) === -1){
				_a.push(curChars);
			}
			return;
		}

		for (var i = 0; i < curChars.length; i++) {
			if (curChars[i] === '('){
				// 左括号之前 和 之后加完整的括号
				var lAddStr = curChars.slice(0, i) + '()' + curChars.slice(i);
				var rAddStr = curChars.slice(0, i + 1) + '()' + curChars.slice(i + 1);
				// if (keyStr.indexOf(lAddStr) === -1) {
				// 	keyStr += lAddStr + ',';
					addChar(lAddStr);
				// }
				// if (keyStr.indexOf(rAddStr) === -1) {
					// keyStr += rAddStr + ',';
					addChar(rAddStr);
				// }
			}
		}
	}
};

// 对于（）， 只有左右两侧
// （） （）， 有三个空
// （） （） （） 数值满了，不需要补空缺
