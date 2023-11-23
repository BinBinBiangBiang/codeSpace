// 82.给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// var deleteDuplicates = function (head) {
//     if (!head) {
//         return head;
//     }
//     // if (head && !head.next) {
//     //     return head;
//     // }
//     const map = new Map();
//     let k = head;
//     while (k) {
//         const cur = k.val;
//         if (!map.has(cur)) {
//             map.set(cur, 1);
//         } else {
//             map.set(cur, map.get(cur) + 1);
//         }
//         k = k.next;
//     }
//     // 创建一个哑节点dummy，可以避免头节点被删除的特殊处理
//     const dummy = new ListNode(0, head);
//     let p = dummy;
//     while (p.next) {
//         if (map.get(p.next.val) > 1) {
//             // 如果当前节点的值重复，删除当前节点
//             p.next = p.next.next;
//         } else {
//             p = p.next;
//         }
//     }
//     return dummy.next;
// };

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  const dummy = new ListNode(0, head);

  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};



head = [1, 2, 3, 3, 4, 4, 5];

console.log(deleteDuplicates(head));