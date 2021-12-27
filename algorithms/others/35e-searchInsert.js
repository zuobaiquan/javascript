/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if (nums.length == 0) {
		return 0;
	}
	var l = 0;
	var r = nums.length - 1;
	var m = 0;
	while (l <= r) {
		m = parseInt((l + r) / 2);
		if (nums[m] < target) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	if (l <= nums.length) {
		return l;
	}
	return l + 1;
};
console.log(searchInsert([1, 2, 3], 2));
