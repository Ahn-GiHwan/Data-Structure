class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`stack[${this.count}]: ${element} Added`);
    this.count++;
    return this.count - 1;
  }

  pop() {
    if (this.count == 0) return undefined;

    let toRemove = this.items[this.count - 1];
    this.count--;
    console.log(`stack[${this.count}]: ${toRemove} Removed`);
    return toRemove;
  }

  peek() {}
  isEmpty() {}
  size() {}
  clear() {}
}

const stack = new Stack();

stack.push("apple");
stack.push("banana");
stack.push("coconut");

stack.pop();
stack.pop();
