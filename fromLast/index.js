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

  //Get node at index or integer number given
  //While One pointer loops through add a tick to the counter check if the counter matches the given integer. 
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
    //If 1) the while loop is never entered or 2) if we complete the loop and 
    //keep going because we never find a match to the integer /index then return null
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
    //getAt method also checks to see if the integer is less than one or more than the size of the linked list
    let previous = this.getAt(integer - 1);

    //To handle out of bounds requests: If given number is passed the last node then just return;
    if (!previous || !previous.next) {
       return null;
    }
    //After getting the chosen node, link the prior node and the node after the chosen node to each other
    previous.next = previous.next.next;
  }

  //Make new node, point previous node to the new node and set new node next key value to 
  //the next node in line or null if no node
  insertAt(data, index) {
    
    //Insert first node if there are no nodes
    if (!this.head) {
       //Point head at new node 
       this.head = new Node(data);
       return;
    }
    //Insert first node if there are other nodes
    //New node has a next key pointing at the old head node
    if (index === 0) {
       this.head = new Node(data, this.head);
       return;
    }
    //Insert a new node anywhere in the middle of the linked list
    //Insert a new node if the index is past the last node
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }  

}
module.exports = { Node, LinkedList };