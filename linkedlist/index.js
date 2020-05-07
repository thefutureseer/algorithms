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
      } else {
            //the chain is empty
            this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
         return node;
      } 
      counter ++;
      node = node.next;
    }
    return null;
  }

  //remove element at index given by user
  removeAt(index) {
    if (!this.head) {
       return;
    }
    if (index === 0) {
       this.head = this.head.next;
       return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
       return;
    }
       //Set the next property
       previous.next = previous.next.next;
    }

  insertAt(data, index) {
    //If no zero index insert new node
    if (!this.head) {
       this.head = new Node(data);
       return;
    }
    //If zero node insert a new one after head.
    if (index === 0) {
       this.head = new Node(data, this.head);
       return;
    }
      const previous = this.getAt(index -1) || this.getLast();
      const node = new Node(data, previous.next);
      previous.next = node;
  }
}
module.exports = { Node, LinkedList };