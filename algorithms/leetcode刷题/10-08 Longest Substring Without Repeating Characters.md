题目链接：https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

问题描叙：

Given a string, find the length of the **longest substring** without repeating characters.

**Examples:**

Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is `"wke"`, with the length of 3. Note that the answer must be a **substring**, `"pwke"` is a *subsequence*and not a substring.



 解决方案

```javascript
//网上的解决方案

var str="abcabcbb";
var lengthOfLongestSubstring = function(s) {
  var maxLen,l,r;
  if (s.length < 2) {
    return s.length;
  }
  maxLen = 0;
  for (l = 0, r = 1; r < s.length; r++) {
    i = s.lastIndexOf(s[r], r-1);
    if (i >= 0) {
      maxLen = Math.max(maxLen, r - l);
      l = Math.max(l, i + 1);
    }
  }
  return Math.max(maxLen, r - l);
};
console.log(lengthOfLongestSubstring(str));

/*
This solution applies the same algorithm seen in many solutions. (Scan the string while keeping track of left and right indices of the current longest substring without repeating characters. If the current char is a repeat, move the left index directly to the right of the previous instance and update the max length.)

Instead of using a hash, however, this solution uses the String.prototype.lastIndexOf() function. I found it to be much faster than checking for the existence of a field in a hash object and updating it.
*/


/*
1.使用一个vector来标记窗口里面的元素；

2.给定一个start和end，每次计算end-start的值；

3.对于start值的确定，每次遇到与集合内相同的元素的时候改变，更改后的值应该是与集合中重复的那个元素的后一个值；

4.对于end值的确定，每次都会加一来扩大窗口的大小。
*/



//解法二:
var longestPalindrome = function(s) {
    let res = ""
    function checkPalindrome(l, r){
        while (l >= 0 && r < s.length){
            if (s[l] == s[r]){
                l -= 1;
                r += 1;
            } else{
                break;
            }}
        l += 1;
        r -= 1;
        if (r - l + 1 > res.length){
            res = s.substring(l, r + 1);
            }
    }
    for (let i = 0; i < s.length; i++){
        if (i > 0 && s[i] == s[i - 1]){
            checkPalindrome(i - 1, i);
        }
        checkPalindrome(i, i);
    }
    return res;
};
```

