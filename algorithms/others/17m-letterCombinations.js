/**
 * @method the telephone buttons
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	var phoneNum = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	var item = '';
	var ret = [];
	var _r = [];
	digits += '';
	for (var i = 0, j = 0, r = 0; i < digits.length; i++) {
		item = phoneNum[digits[i]];
		if (ret.length === 0) {
			for (j = item.length - 1; j >= 0; j--) {
				ret.unshift(item[j]);
			}
		} else {
			for(r = ret.length - 1 ; r >= 0; r--) {
				_r = '' + ret.pop();
				for (j = item.length - 1; j >= 0; j--) {
					ret.unshift(_r + item[j]);
				}
			}
		}
	}
	return ret;
};

console.log(letterCombinations('123'));
console.log(letterCombinations('23'));
