/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n == 0) {
		return 1;
	}
	if (n == 1) {
		return x;
	}
	if (n < 0) {
		n = -n;
		x = 1 / x;
	}
	return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
};
// x
// n 2 4 8 16 32 64
//    3 6
