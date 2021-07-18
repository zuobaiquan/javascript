/*
两个数组的交集-349
https://leetcode-cn.com/problems/intersection-of-two-arrays/

要求
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};

// 复杂度 (n * n)  或者  m * n 