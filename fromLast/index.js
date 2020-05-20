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
    //Forward thinking
    this.insertAt(data, 0);
    //Add a head to a new node & point linked list head to it as well
    // this.head = new Node(data, this.head);
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
    //Forward thinking and shortened by reusing other functions 
    return this.getAt(this.size()-1);

    //Long hand
    // //Check if there is a head 
    // if (!this.head) {
    //    return null;
    // }
    // //Traverse the list untill null
    // let node = this.head;
    // while (node) {
    //   //Check if there is not a next key value send the node value
    //   if (!node.next) {
    //      return node;
    //   }
    //   //If next key has a value go to the value and continue the loop
    //   node = node.next;
    // }
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
  //Given a number to seek, remove the link at that index number. If there are other nodes seal up the chain as needed
  removeAt(integer) {
    //If there are no nodes or no head set to anything at all return null
    if (!this.head) {
      return null;
    }
    //If the given number is zero then set the head to second node
    if (integer === 0 ) {
       //Set head to second /next node
       this.head = this.head.next;
       return;
    }
    //remove the given index and seal the chain with the privious index and the one after the removed
    const previous = this.getAt(integer -1);
    //If user is looking for a node which is out of bounds/ an index higher than the amount in the 
    //linked list or previous is null:
    if (!previous || !previous.next) {
      return null;
    }
    //Link the previous node with the node after the removed node
    previous.next = previous.next.next;
  }

  //Insert new Node with data at given index
  insertAt(data, index) {
    //If no nodes  
    if (!this.head) {
      //Set head/first node to new node with data
      this.head = new Node(data);
      return;
    }
    //If there are nodes insert the first node and make the first node the second node
    if (index === 0) {
      //Set the head to the new node and the new node set to the old first node/the old head
      this.head = new Node(data, this.head);
      return;
    }
    //Set a variable to get the node before the index where we want to insert a new node.
    //Also While searching for the index to insert a new node & we never find it so the loop goes past 
    //the entire linked list then insert as the last node
    const previous = this.getAt(index -1 ) || this.getLast();
    //Set a second variable to a new node and the 
    //new nodes next property is set to replace the current next property after the insertion
    const node = new Node(data, previous.next);
    //Set the previous node to the new node
    previous.next = node;
  }

  //For each funciton to do something to each node
  forEach(fn) {
    //Begin at the first node/head node
    let node = this.head;
    //Counter to act like index
    let counter = 0;
    //While loop iterates for each node until null
    while (node) {
      //Fn function takes in node/link and index
      fn(node, counter);
        //Traverse to the next node
        node = node.next;
        //Counter increments and then start loop over if theres a link to go to 
        counter++;    
    }
  }
  
  //Enable a for ..of loop to work with linked list
  //generator function with a key of Symbol.iterator
  *[Symbol.iterator]() {
    //Start at first node head
    let node = this.head;
    //Iterate through linked list with a while loop Check if theres a node to begin looping
    while (node) {
      //First yield will send node head and each loop will reveal each node
      yield node;
      //Traverse to the next property to go to the next node/link
      node = node.next;
    }
  }
    
}
module.exports = { Node, LinkedList };