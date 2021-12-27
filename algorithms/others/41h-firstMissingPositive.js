/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	nums.sort(function (a, b) {
		return a - b;
	});
	for(var i = 0, len = nums.length; i < len; i++) {
		if (nums[0] < 0) {
			nums.shift();
		} else {
			break;
		}
	}
	var res = 0;
	if (nums[0] !== 0) {
		nums.unshift(0);
	}
	for (var i = 1, len = nums.length; i < len; i++) {
	   if (nums[i] == nums[i - 1]) continue; // 重复元素
	   if (nums[i] - res != 1) {
		   return res + 1;
	   } else {
		    res = nums[i];
	   }
   }
   return res + 1;
};

console.log(firstMissingPositive([1, 7, 2, 2, 3]));
console.log(firstMissingPositive([1, 0]));
console.log(firstMissingPositive([-10,-3,-100,-1000,-239,1]));
console.log(firstMissingPositive([]));
