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
    if (this.count === 0) return undefined;

    let toRemove = this.items[this.count - 1];
    this.count--;
    console.log(`stack[${this.count}]: ${toRemove} Removed`);
    return toRemove;
  }

  peek() {
    console.log(
      `stack[peek> ${this.count - 1}]: ${this.items[this.count - 1]}`
    );
    return this.items[this.count - 1];
  }

  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }

  size() {
    console.log(`Stack size: ${this.count}`);
    return this.count;
  }

  print() {
    const printStack = this.items.toString();

    console.log(`${printStack}`);
    return printStack;
  }

  clear() {
    // this.items = [];
    this.items.splice(0, this.items.length);
    this.count = 0;
    console.log("Reset Stack Complete");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push("apple");
stack.push("banana");
stack.push("coconut");

stack.pop();
stack.pop();

stack.isEmpty();
stack.peek();

stack.push("banana");
stack.peek();

stack.size();
stack.print();

stack.clear();
stack.size();
stack.print();
