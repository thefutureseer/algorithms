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
    //Start at head
    let node = this.head;
    //Is node a truthy value or null
    while (node) {
      counter ++;
      //Traverse by assigning variable to next property
      node = node.next;

    }
    return counter;
  }

}

module.exports = { Node, LinkedList };
