function calculate(num) {
  num.sort((a, b) => a - b);
  console.log(num);

  let max = 0;
  for (let i = 1; i <= 4; i++) {
    max += num[num.length - i];
  }
  console.log(max);

  let mini = 0;
  for (let i = 0; i < 4; i++) {
    mini += num[i];
  }
  console.log(mini);
}

let arr = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
calculate(arr);
calculate(arr2);

//================================//

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function create(ar) {
  if (ar.length === 0) {
    return;
  }

  let head = new ListNode(ar[0]);
  let current = head;

  for (let i = 1; i < ar.length; i++) {
    current.next = new ListNode(ar[i]);
    current = current.next;
  }

  return head;
}

function reverse(head) {
  let prev = null;

  for (let current = head; current !== null; ) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function print(head) {
  let value = [];
  for (let current = head; current !== null; current = current.next) {
    value.push(current.val);
  }
  console.log(value.join(" "));
}

let ar = [1, 2, 3, 4, 5];
let head = create(ar);
print(head);

let reversedHead = reverse(head);
print(reversedHead);
