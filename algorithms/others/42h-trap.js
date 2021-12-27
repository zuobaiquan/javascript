/**
 * @method  短板原则
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

	if (height == null || height.length == 0)
        return 0;

    var  leftMax = height[0];
    var  rightMax = height[height.length - 1];
    var  res = 0;
    var  i = 1;
    var  j = height.length - 2;
    while (i <= j) {
        if (leftMax < rightMax) { // 短板原则
            res += Math.max(0, leftMax - height[i]);
            leftMax = Math.max(leftMax, height[i]);
            i++;
        } else {
            res += Math.max(0, rightMax - height[j]);
            rightMax = Math.max(rightMax, height[j]);
            j--;
        }
    }
    return res;
};
