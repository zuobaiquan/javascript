/**
 * @method 数字反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	if (x == 0) {
		return x;
	}
    var oper = x > 0 ? '' : '-';
    x = x + '';
    var arr = x.split('');

    if (arr[0] == '-' || arr[0] == '+') {
    	arr.shift();
    } 
    arr = arr.reverse();
    x =  + ( oper + arr.join(''));
    if (x < -2147483648 || x > 2147483647) { // 32 bit ,最高位符号位，0正1负， Math.pow(2, 31) -1, 
        x = 0;
    }
    return x;
};

console.log(reverse(0));
console.log(reverse(10));
console.log(reverse(+10));
console.log(reverse(-10));