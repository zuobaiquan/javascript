/**
 * @method z 字型图案
 * rowNum   cycle     cycle        cycle
 * 		0	0	      8		       16
 * 		1	1	  7   9		   15  17
 * 		2	2   6     10	14	   18
 * 		3	3 5	      11 13	   	   19
 * 		4	4	      12		   20
 *
 * @param {string} s   0 1 2 3 .. 20
 * @param {number} numRows 3
 * @return {string}	   0 8 16 ... 20
 **/  
var convert = function(s, numRows) {
    var len = s.length;
    if(numRows <= 1 || len < 3 || len <= numRows) {
    	return s;
    }
    var s2 = [];
    var cycle = numRows * 2 - 2;
    var midIndex = 0;
    for (var i = 0; i < numRows; i++) {
    	for (var j = i; j < len; j += cycle) {
			s2.push(s[j]);  
			// 第 0 行和最后一行 cycle 直接没有值，
			midIndex = cycle + j - 2 * i;
            if (i != 0 && i != numRows - 1 && midIndex < len) {
            	s2.push(s[midIndex]); 
            } 
    	}
    }
    return s2.join('');  
};

console.log(convert('', 1));
console.log(convert('PAYPALISHIRING', 3));
