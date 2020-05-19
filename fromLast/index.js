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
  //Two pointers one traversing through and second one following it which will become the "new last node" after removal of the "current last node"
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

  //Take in an integer to find the link at the matching index
  getAt(index) {
     //If theres no list then theres nothing to do just return
     if (!this.head) {
       return null;
     }
     //Need two temperary local variables
     //One to count the links on the chain
     //One to start at the head and traverse through
     let counter = 0;
     let node = this.head;
     //While there is a node
     while (node) {
       //If the sought index matches the counter return node
       if (index === counter) {
         return node;
        }
        //If no match then Increment the counter by one
        counter++;
        //Traverse the chain
        node = node.next;
     }
     //If the index sought is higher than the links in the chain it will exit the loop and return null
     return null;
  }

  //Using 'get at' function I created above
  //Given a number to seek, remove the link at that index number. If other nodes seal up the chain as needed
  removeAt(number) {
    //Corner case: Return null if there are no links on the linked list
    if (!this.head) {
       return null;
    }
    //Corner case: If the given number is the first node:
    if (number === 0) {
       //Set head to the second node therefore deactivating/ignoring the first node and making the second node, the head/first node 
       this.head = this.head.next;
    }
    //
    //The node before the one we are looking for
    let previous = this.getAt(number - 1);

    //If trying to remove a node which is past the last node
    if (!previous || !previous.next) {
      return null;
    }
    //Reconnect the chain by setting the previous link to the link after link being removed
    return previous.next = previous.next.next;
  }



}
module.exports = { Node, LinkedList };