/*
删除链表中的节点-237
https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

*/
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};