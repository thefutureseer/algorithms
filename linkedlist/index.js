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
  }

  removeFirst() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    var previous = this.head;
    var node = this.head.next;
      while (node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
  }
  insertLast(data) {

    const last = this.getLast();
     if (last) {
       //there are existing nodes in chain
         last.next = new Node(data)
       } else if (!last) {
       //the chain is empty
         last.next = new Node(data);

    }
  }
}

module.exports = { Node, LinkedList };

