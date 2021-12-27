/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	var res = [];
	var cur = [];
	candidates.sort(function (a, b) {
		return a - b;
	});

	combinationSumDFS(candidates, target, 0, cur);

	function combinationSumDFS(candidates, target, start, cur) {
		if (target < 0) {
			return ;
		} else if (target === 0) {
			res.push(cur.concat());
		} else {
			for (var i = start; i < candidates.length; i++) {
				cur.push(candidates[i]);
				combinationSumDFS(candidates, target - candidates[i], i, cur);
				cur.pop();
			}
		}
	}
	return res;
};

console.log(combinationSum([1, 2, 3, 4], 6));
