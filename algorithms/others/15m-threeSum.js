/**
 * @method threeSum , 第一层遍历， 0-nums[i], 变成 twoSum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	var res = [];
	var sum = 0;
	var _sum = 0;
	var len = nums.length;
	for (var i = 0, r = 0, l = 0; i < len; i++) {
		if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
			sum = 0 - nums[i];
			l = i + 1;
			r = len - 1;
			while (l < r) {
				_sum = nums[l] + nums[r];
				if (sum == _sum) {
					res.push([nums[i], nums[l], nums[r]]);
					while (nums[l] == nums[l + 1]) {
						l++;
					}
					while (nums[r] == nums[r - 1]) {
						r--;
					}
					l++;
					r--;
				} else if (sum < _sum) {
					r--;
				} else {
					l++;
				}
			}
		}
	}
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
