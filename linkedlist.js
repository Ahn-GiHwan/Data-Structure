class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
    console.log(`LL: ${data} inserted first`);
  }

  insertLast(data) {
    const NewNode = new Node(data);
    let current;

    if (!this.head) {
      this.head = NewNode;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = NewNode;
      console.log(`LL: ${data} inserted last`);
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return false;
    }

    if (index === 0) {
      this.insertFirst(data);
      return true;
    }

    const NewNode = new Node(data);
    let cur;
    let prev;

    cur = this.head;
    let count = 0;

    while (count < index) {
      prev = cur;
      count++;
      cur = cur.next;
    }

    NewNode.next = cur;
    prev.next = NewNode;

    console.log(
      `LL: new Node ${data} inserted in front of ${NewNode.next.data}`
    );

    this.size++;
  }
}

const LLinst = new LinkedList();

LLinst.insertFirst(11);
LLinst.insertLast(12);
LLinst.insertLast(13);
LLinst.insertLast(14);

LLinst.insertAt(15, 2);
LLinst.insertAt(16, 2);
