/*
 删除排序链表中的重复元素-83
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let p = head
  while (p && p.next) {
    if (p.val == p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
};