/**
 * Definition for singly-linked list.
 **/
// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var _sum = 0;
	var _res = [];
	var len = 0;
	if (l1 && l1.length) {
	    len = l1.length;
	}
	if (l2 && l2.length && l2.length > len) {
	    len = l2.length;
	}
	if (len && (l1 || l2)) {
		for (var i = 0; i < len; i++) {
			_sum = (_sum / 10).toString().split('.')[0];
			if (l1[i]) {
				_sum += l1[i];
			}
			if (l2[i]) {
				_sum += l2[i];
			}
			_res.push(_sum % 10);
		}
		if (_sum / 10 === 1) {
			_res.push(1);
		}
	}
	return _res;

	// var c1 = l1;
	// var c2 = l2;
	// var sentinel = new ListNode(0);
	// var d = sentinel;
	// var _sum = 0;
	// while (c1 || c2) {
	// 	_sum /= 10;
	// 	if (c1) {
	// 		_sum += c1.val;
	// 		c1 = c1.next; 
	// 	}

	// 	if (c2) {
	// 		_sum += c2.val;
	// 		c2 = c2.next; 
	// 	}

	// 	d.next = new ListNode(0);
	// 	d = d.next;
	// }
 //    if (_sum / 10 == 1)
 //    	d.next = new ListNode(1);
    
 //    return sentinel.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));