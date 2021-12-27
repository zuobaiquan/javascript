/**
 * @method 正则匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	var reg = eval('/' + p + '/');
    return reg.test(s);
};

console.log(isMatch("aa","a"));
console.log(isMatch("aa","aa"));
console.log(isMatch("aaa","aa"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aa", ".*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));