题目链接：https://leetcode.com/problems/two-sum/description/

问题描叙：

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

**Example:**

```javascript
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

 解决方案

```javascript
var newArr=[2, 2, 4, 6,7,5],tg=9;

//方法一
var twoSum1 = function(arr, target) {
  for(var i in arr){
    var index=arr.indexOf(target-arr[i]);
    if(index!==-1){
      return [parseInt(i),index];
    }
  }
}
console.log(twoSum1(newArr,tg));

//方法二,第二种方法挺好的
var twoSum2 = function(arr, target) {
  var resArr= {};
  for(var i = 0; i<arr.length; i++) {
    var cur = arr[i];//当前数组的值
    var diff = target-cur;//差值
    if(diff in resArr) {
      return [resArr[diff], i];
    }
    resArr[cur] = i;
  }
  return null;
};
console.log(twoSum2(newArr,tg));

//方法三
var twoSum3 = function(arr, target){
  var newObj={};
  var res=[];
  for(i=0; i< arr.length; i++){
    if(newObj.hasOwnProperty(arr[i])){
      res[0] = newObj[arr[i]] + 1
      res[1]= i + 1;
      return res;
    }
    newObj[target - arr[i]] = i
  }
}
console.log(twoSum3(newArr,tg));
```

