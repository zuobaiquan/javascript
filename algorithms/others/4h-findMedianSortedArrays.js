/**
 * @method 返回中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2);
    nums.sort(function(a, b) {
        return a - b;
    });
    var len = nums.length;
    if (len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2; 
    } else {
        var subLen = (len / 2).toString().split('.')[0];
        return nums[subLen]; 
    }
};

console.log(findMedianSortedArrays([1, 3], [2]))