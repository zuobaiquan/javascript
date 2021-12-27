/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 **/
var twoSum = function(nums, target) {
    if (!nums || nums.length < 2) {
        return null;
    }
    var _nums = nums.concat();
    _nums.sort(function(a, b) {
        return a - b;
    }); // 先排序
    var l = 0; // left 索引
    var r = _nums.length - 1; // right 索引
    var _res = [];
    var res = [];
    var _sums = 0;
    while(l < r) {
    	_sums = _nums[l] + _nums[r];
    	if (_sums == target) {
    		_res.push(_nums[l]);
    		_res.push(_nums[r]);
            break;
    	} else if (_sums < target) { // 两数之和小于 target，则 left 向右移
    		l++;
    	} else { // 两数之和大于 target，则 right 向左移
    		r--;
    	}
    }

    if (_res.length === 2) {
        for (var i = 0, len = nums.length; i < len; i++) {

            if (nums[i] === _res[0]) {
                res.push(i);
                _res.shift();
            } else if (nums[i] === _res[1]) {
                res.push(i);
                _res.pop();
            }

            if (res.length === 2) {
                return res;
            }
        }
    }
    return null;
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
