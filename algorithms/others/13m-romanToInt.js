/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var T = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	};

	for (var i = s.length - 2, sum = T[s[i + 1]]; i >= 0; i--) {
		if (T[s[i]] < T[s[i + 1]]){
		   sum -= T[s[i]];
	   } else {
		   sum += T[s[i]];
	   }
	}
	return sum;
};

console.log(romanToInt('DCXXI'));
