/**
 * @param {number[][]} matrix
 * @return new Arr
 */
var rotate = function(matrix) {
	var len = matrix.length;
	var ret = [];
	for (var i = 0; i < len; i++ ) {
		ret.push([]);
		for (var j = len - 1; j >= 0; j-- ) {
			ret[i].push(matrix[j][i]);
		}
	}
	return ret;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
// 	var len = matrix.length;
//
// };

// 1 2 3        5 4 3       7 8 1
// 8 9 4    ->  6 9 2   ->  6 9 2
// 7 6 5        7 8 1       5 4 3
