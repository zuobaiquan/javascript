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
  const map = new Map()
  nums1.forEach(v => {
    map.set(v, true)
  })
  const res = []
  nums2.forEach(v => {
    if (map.get(v)) {
      res.push(v)
      map.delete(v)
    }
  })
  return res
};

// 复杂度  m + n 