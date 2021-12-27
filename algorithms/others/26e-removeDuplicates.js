/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var arr = [];
	for (var i = 0; i < nums.length; i++) {
		if (arr.length === 0 || [arr.length - 1] !== nums[i]) {
			arr.push(nums[i]);
		}
	}
	return arr;
};
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 1, 2]));
