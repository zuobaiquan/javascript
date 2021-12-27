/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	var result = [];
	var key = [];
	nums = nums.sort(function (a, b) {
		return a - b;
	});
	var _nums = nums.slice(0);
	result.push(_nums);
	key.push(_nums.join(''));
	getPermute(0);
	return result;

	function getPermute(index){

		if(index === nums.length - 1){
			var _nums = nums.slice(0);
			var _key = _nums.join('');
			for(var i = key.length - 1; i >= 0; i--) {
				if (_key === key[i]) {
					break;
				}
			}
			if (i < 0) {
				result.push(_nums);
				key.push(_key);
				return;
			}
		}

		for(var i = index; i < nums.length; i++){
			if (nums[i] != nums[index]){
				switchNum(i, index);
				getPermute(index + 1);
				switchNum(i, index);
			} else {
				getPermute(index + 1);
			}
		}
	}
	function switchNum(i, j){
		if(i === j) return;
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}
};

// console.log(permuteUnique([1,2,1]));
// console.log(permuteUnique([1,2,3]));
