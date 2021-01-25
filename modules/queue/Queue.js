class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
        this.last = null;
    }
    return node.value;
  }

  length() {
    if (this.first === null) {
      return;
    }
    let count = 0;
    let current = this.first;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  all() {
    if (this.first === null) {
      return;
    }
    const array = [];
    let current = this.first;

    while (current !== null) {
      array.push(current);
      current = current.next;
    }

    return array;
  }
}

module.exports = Queue;
