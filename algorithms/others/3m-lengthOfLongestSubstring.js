/**
 * @method 查找最长不重复字符的字符串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var len = s.length;
	if (len === 0 || len === 1) {
		return len;
	} 

	var charsArr = [''];
	var r = 0;
	var arr = s.split(''); // 将字符串拆分为数组
	var index = -1;
	var subLen = 0;
	for (var i = 0; i < len; i++) {
		index = charsArr[r].lastIndexOf(arr[i]);
		if (index === -1) {
			charsArr[r] += arr[i];
		} else {
			charsArr.push(charsArr[r].substring(index + 1) + arr[i]);
		} 	
		r = charsArr.length - 1;
		if (charsArr[r].length > subLen) {
			subLen = charsArr[r].length;
		}
	}
	return subLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('ohvhjdml'));
