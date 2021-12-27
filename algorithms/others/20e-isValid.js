/**
 * @method () {} [] 是否合法, 堆栈，左符号入栈，栈顶元素和新元素匹配出栈
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var len = s.length;
	if (len === 0) {
		return true;
	}
	var chars = [];

	for(var i = 0; i < len; i++) {
		if (isLeftChar(s[i])){
			chars.push(s[i]);
		} else if (match(chars[chars.length - 1], s[i])) {
			chars.pop();
		} else {
			return false;
		}
	}
	return !chars.length;
};

function match(a, b) {
   return a == '(' && b == ')'
	   || a == '[' && b == ']'
	   || a == '{' && b == '}';
}

function isLeftChar(a) {
   return a == '('
	   || a == '['
	   || a == '{' ;
}
