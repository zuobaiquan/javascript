/*
链表：多个元素组成的列表

元素存储不连续，用 next 指针连在一起

JavaScript中没有链表，但我们可以用 Object中模拟链表

数组和链表

数组：增加和删除首尾元素时，往往需要移动元素
链表：增加和删除首尾元素时，不需要移动元素，只需要更改 next 指向就行了

*/

const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;


// 遍历链表
let p = a
while (p) {
  console.log(p.val)
  p = p.next
}

// 插入 插入 c 和 d之间
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;
