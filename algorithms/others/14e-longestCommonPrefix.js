/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length < 2) {
		return strs[0] || '';
	}
	strs = strs.sort();
	var prefix = ''
	for (var str1 = strs[0] || '', i = str1.length; i > 0; i--) {
		prefix = str1.substring(0, i);
		for (var len = strs.length - 1; len > 0; len--) {
			if (strs[len].substring(0, i) !== prefix) {
				prefix = '';
				break;
			}
		}
		if (prefix) {
			return prefix;
		}
	}
	return prefix;
};

console.log(longestCommonPrefix(['aa', 'a', 'aaabddd']));
console.log(longestCommonPrefix(['a', 'b'
console.log(longestCommonPrefix([]));
