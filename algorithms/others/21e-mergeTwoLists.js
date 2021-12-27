/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (l1 && l1.length === 0) {
		return l2;
	}
	if (l2 && l2.length === 0) {
		return l1;
	}

	var ret = [];

	for(var i = 0, j = 0; i < l1.length; i++) {
		for (; j < l2.length; j++) {
			if (l2[j] < l1[i]) {
				ret.push(l2[j]);
			} else {
				ret.push(l1[i]);
				break;
			}
		}
	}
	var leftArr = i === l1.length ? l2.slice(j) : l1.slice(i);
	return ret.concat(leftArr);
};

console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([1, 2], [2, 4]));
