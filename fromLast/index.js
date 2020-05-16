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
      //Check if there is not a next key, if not send the node value
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
