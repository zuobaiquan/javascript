/*
字典： 应用
判断字符串的括号是否有效

*/

/*
20. 有效的括号
https://leetcode-cn.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 如果字符串长度是奇数，不闭合 直接return false
  if (s.length % 2 == 1) {
    return false
  }
  const stack = []

  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      const topStack = stack[stack.length - 1] //栈顶元素
      if (map.get(topStack) == c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
isValid("{[]}")