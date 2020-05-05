class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    
  }
  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    } else {
      let node = this.head;
      while(node) {
        if (!node.next) {
          return node;
        }
        node = node.next;
      }
    }
  }
  clear() {
    this.head = null;
  };
}

// const fnlo = new Node(0);

// const hd = new LinkedList();
// hd.head = fnlo;
// hd.insertFirst(1);
// hd.insertFirst(2);
// hd.insertFirst(3);
// hd.insertFirst(4);

module.exports = { Node, LinkedList };