/**
 * @method Given array A = [2,3,1,1,4] , The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	var ret = 0;
    var curMax = 0;
    var curRch = 0;
	
    for(var i = 0; i < nums.length; i ++) {
        if(curRch < i) {
            ret ++;
            curRch = curMax;
        }
        curMax = Math.max(curMax, nums[i]+i);
    }
    return ret;
};
