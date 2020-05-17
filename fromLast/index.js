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
       return null;
    }
    //Set head to next node after first. As far as linked list is concerned the next node is the first one
    this.head = this.head.next;
  }

  //Remove the last node of a linked list. Find the last node and get the node before it to point it at null
  removeLast() {
    //If no first node this function is done
    if (!this.head) {
       return null;
    }
    //If no second node, remove first node
    if (!this.head.next) {
       this.head = null;
       return null;
    }
    //Set one local variable to the head/first node and one to the second node in the list
    let previous = this.head;
    let node = this.head.next;
    //While the node has a "next" value continue to loop
    while (node.next) {
      previous = node;
      node = node.next;
    }
    //Once next equals null set previous to null
    previous.next = null;
  }

  //Insert a node at the end of the list
  insertLast(data) {
    //Set a variable to my method getLast to have the last node readily available
    const last = this.getLast(); 
    //If there are existing nodes in out chain
    if (last) {
       last.next = new Node(data);
    } else {
    //If the chain is empty
        this.head = new Node(data);
    }
  }

  //Get node at index or integer number given
  getAt(integer) {
    //Temperary variables 
    //Pointer to traverse through the list looking for the index matching the counter to return the data 
    //If theres no head data theres no linked list. 1) It never begins looping and 2) with no linked list it returns null 
    let node = this.head;
    //Counter to compare with index integer 
    let counter = 0;
    //Loop through linked list to find a specific node by index
    while (node) {
      //Once we match the counter to the index we want to find return node info
      if (counter === integer) {
         return node;
      }
      //If we don't find a match we continue the loop 
      counter++;
      //Traversing through each node by looking at next
      node = node.next;
    }
    //If the loop is never entered or if we complete the loop and never find the exact number index return null
    return null;
  }

  //Remove given index node then seal the chain back together
  removeAt(integer) {
    //If theres no head return null
    if (!this.head) {
       return null;
    }
    //If the integer recieved is 0 set head to the second node on the chain and pointing at null is fine too 
    if (integer === 0) {
       return this.head = this.head.next;
      
    }

    //Grab the node before the chosen node
    let previous = this.getAt(integer - 1);

    //To handle out of bounds requests: If given number is passed the last node return;
    if (!previous || !previous.next) {
       return;
    }
    //Link the prior node and the node after chosen node to each other
    previous.next = previous.next.next;
  }

}
module.exports = { Node, LinkedList };