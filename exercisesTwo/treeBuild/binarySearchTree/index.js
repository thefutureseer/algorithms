module.exports = class Node {
  constructor(data) {
    //Each node has the data value and places for left & 
    //& right nodes to hang off of it 
    this.data = data;
    this.left = null;
    this.right = null;
  }
 
  //function for recursing through the nodes
  insert(data) {
    //4 if/else statements to find the proper place for the insertion
    //if the given data is less than this.data of the Node and
    // the node has a this.left Node
    if (data < this.data && this.left) {
       //recurse through to find a place and insert to the left node
       this.left.insert(data);
    }
    //If given data is less than the data on the left nodes insert a new node
    else if (data < this.data) {
       this.left.push(new Node(data));
    }

  }




  // insert(data) {
  //   //if given argument "data" is less than this.data && thisleft has a node then do this
  //   if (data < this.data && this.left) {
  //    //Find the numerical order place for the new node
  //    this.left.insert(data);
  //   } else if (data < this.data) {
  //      this.left = new Node(data);
  //   } else if (data > this.data && this.right) {
  //      this.right.insert(data);
  //   } else if (data > this.data) {
  //     this.right = new Node(data);
  //   }
  // }
}

module.exports = class Node {
 constructor(data) {
   this.data = data;
   this.left = null;
   this.right = null;
 }
 
 //Data in decending order. Insert function for finding the proper place to store the data
 insert(data) {
   if (data < this.data && this.left) {
     //traverse the left side to find a place because thats where the lower numbers are
     this.left.insert(data)
   }
 }
}