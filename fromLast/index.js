//Node link
class Node{
  constructor(data, next = null) {
  this.data = data,
  this.next = next
  }
};

//Head of list
class LinkedList {
  constructor() {
    this.head = null
  }

  //Create my own linked list methods

  insertFirst(data) {
  //Add a head to a new node & point linked list head to it as well
  this.head = new Node(data, this.head);
  }

////////////////////////MOST METHODS WILL USE A WHILE LOOP AS SEEN BELOW//////////////////////////////////  
  //Start at the head traverse next and keep track with a counter
  size() {
    let counter = 0
    //Start by assigning a variable to the head
    let node = this.head;
    //While node is a truthy value
    while (node) {
      counter ++;
      //Traverse by assigning variable to next property
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    //Check if there is a head 
    if (!this.head) {
      return null;
    }
    //Traverse the list untill null
    let node = this.head;
    while (node) {
      //Check if there is not a next key value send the node value
      if (!node.next) {
        return node;
      }
      //If next key has a value go to the value and continue the loop
      node = node.next;
    }
  }

  //Clear an entire linked list
  clear() {
    //If the linked list is assigned to null, as far as its concerned there is no list, no nodes.
    this.head = null;
  }

  //Remove the first node in a linked list
  removeFirst() {
    //If theres no head, function is done
    if (!this.head) {
      return;
    }
    //Set head to next node after first. As far as linked list is concerned the next node is the first one
    this.head = this.head.next;
  }

  //Remove the last node of a linked list
  removeLast() {
    //If no first node this function is done
    if (!this.head) {
      return;
    }
    //If no second node, remove first node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    //Find the last node and get the node before it to point it at null
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
}

module.exports = { Node, LinkedList };