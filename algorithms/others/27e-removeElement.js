/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 var removeElement = function(nums, val) {
 	var ret = [];
	var index = 0;
	var len = nums.length;
 	for (var i = 0; i < len; i++) {
 		if (nums[i] != val) {
 			ret[index] = nums[i];
			index++;
 		}
 	}
 	return ret;
 };
 // var removeElement = function(nums, val) {
 //
 // 	var str = nums.join(',') + ',';
 // str = str.replace(eval('/' + val + ',/g'), '');
 // str = str.replace(/,,/g, '');
 // if (str[str.length - 1] === ',') {
 // 	str = str.slice(0, str.length - 1);
 // }
 // nums = str.split(',');
 // 	return nums;
 // };

// var removeElement = function(nums, val) {
// 	for (var i = nums.length; i >= 0; i--) {
// 		if (nums[i] == val) {
// 			nums.splice( i, 1 );
// 		}
// 	}
// 	return nums;
// };
console.log(removeElement([3,2,2,3], 3));
