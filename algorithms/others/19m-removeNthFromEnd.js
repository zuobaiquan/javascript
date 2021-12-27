/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	if ( n > head.length || n < 0 || head.length == 0) {
		return head;
	}
	// return head.splice(-n);
	var rightArr = [];
	var _popItem = null;
	for (var i = 0; i < n; i++) {
		_popItem = head.pop();
		if (i < n - 1) {
			rightArr.push(_popItem);
		}
	}
	return head.concat(rightArr);
};

console.log(removeNthFromEnd([1], 1));
console.log(removeNthFromEnd([1, 2, 3, 4], 2));
console.log(removeNthFromEnd([], 1));
