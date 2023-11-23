


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  if (head && !head.next) {
    return head;
  }
  const map = new Map();
  let k = head;
  while (k.next) {
    const cur = k.val;
    if (!map.has(cur)) {
      map.set(cur, 1);
    } else {
      map.get(cur)++;
    }
  }
  let q = head;
  let p = head.next;
  while (p.next) {
    while (map.get(head.val) != 1) {
      q = head.next;
      head = head.next;
      p = head.next;
    }
    if (map.get(p.val) != 1) {
      q.next = p.next;
    }
    p = q.next;
  }
  return head;
};

head = [1,2,3,3,4,4,5];

console.log(deleteDuplicates(head));