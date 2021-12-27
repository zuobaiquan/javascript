/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var res = [-1, -1];
    if(nums.length === 0) {
        return res;
    }
    var ll = 0;
    var lr = nums.length - 1;
    while (ll <= lr) {
        var m = parseInt((ll + lr) / 2);
        if(nums[m] < target) {
            ll = m + 1;
        } else {
            lr = m - 1;
        }
    }
	if (ll >= nums.length) {
		return res;
	}
    var rl = 0;
    var rr = nums.length - 1;
    while(rl <= rr) {
        var m = parseInt((rl + rr) / 2);
        if(nums[m] <= target) {
            rl = m + 1;
        } else {
            rr = m - 1;
        }
    }
	if (rr <= 0) {
		return res;
	}
    if(ll <= rr)
    {
        res[0] = ll;
        res[1] = rr;
    }
    return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
