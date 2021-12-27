/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

	var res = [];
	var cur = [];
	var keyMap = '';
	candidates.sort(function (a, b) {
		return a - b;
	});

	combinationSumDFS2(candidates, target, 0, cur);

	function combinationSumDFS2(candidates, target, start, cur) {
		if (target < 0) {
			return ;
		} else if (target === 0) {
			var key = cur.join();
			if (keyMap.indexOf(key) === -1) {
				keyMap += ';' + cur.join();
				res.push(cur.concat());
			}
		} else {
			for (var i = start; i < candidates.length; i++) {
				cur.push(candidates[i]);
				combinationSumDFS2(candidates, target - candidates[i], i + 1, cur);
				cur.pop();
			}
		}
	}
	return res;
};
// console.log(combinationSum2([1, 2, 3, 4], 6));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
