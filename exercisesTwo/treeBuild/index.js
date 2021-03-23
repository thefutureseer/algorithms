//Instructions
//create a node class
//Its constructor should accept an argument that gets assigned to the data property
//and initialize an empty array for storing children
//class Node function should have add and remove functions within 


class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }  
  
  add(data) {
    this.children.push(new Node(data))
  }  
  
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });  
  }  
}  


//Create a tree class function
//Its constructor should initialize a root property to null

class Tree {
  constructor() {
    this.root = null;
  }

  //Traverse Breadth first
  traverseBF(fn) {
    //First put the root node into an array  
    const arr = [this.root];
    //While there are nodes in the array
    while ( arr.length ) {
      //Take out the first in the array
      const node = arr.shift();
      //Put all of the shifted nodes children into the array right after
      arr.push(...node.children);
      fn(node);
    } 
  }
  //ONly a subtle difference from Breadth first traversing 
  traverseDF(fn) {
   //Same: Create an array for traversing with only the root
   const nodeToProcess = [this.root];
   //Same: as long as the array has something in it loop through it
   while (nodeToProcess.length) {
     //Same: Take out the first thing in the array
     const childToProcess = nodeToProcess.shift();
     //DIFFERENT: put all the children of the shifted data into the front of the array for processing in the same order as above.
     nodeToProcess.unshift(...childToProcess.children);
     //Same: recursion part, put shifted node into the argument function for processing.
     fn(childToProcess);
   }
  }

}


module.exports = { Tree, Node };



//Create a Node class its constructor should accept an argument that gets assigned to the data property and 
//initialize an empty array to store children. The Node class should have methods Add & Remove

//Create a Tree class. The Tree constructor should initialize a root property to null.
//Implement traverseBF (Breadth First) & traverseDF (Depth First) on the Tree class. Each method should accept a function that
//gets called with every element in the tree

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.children = [];
//   }

//   //Push data into Nodes children array
//   add(data) {
//     //Create a new Node with given data inside
// // const node = new Node(data);
//     //Push into the current nodes children array
// // this.children.push(node);
//     //Two above lines Condensed to one line:
//     this.children.push(new Node(data));
//   }

//   //Remove children or unset them
//   remove(data) {
//     //Find a match and unset it whithin the tree
//     //Traverse through every node/Children in array check for data given & modify this.children array
//     this.children = this.children.filter(node => {
//       //Return all data not equal to data given in order to remove the one given
//       return node.data !== data;
//     });
//   }

// }

// class Tree{
//   constructor() {
//     this.root = null;
//   }
//   //Breadth first function takes in the arguement
//   //TRAVERSEBF  
//   //Do math or Add to each node in a tree
//     traverseBF(fn) {
//       //Create an array to use as a container where we add 10 to each child
//       //Start with the head put head node in array 
//       const nodeArray = [this.root];
//       //while theres an element in the array take out the first element
//       while (nodeArray.length) {
//         //Remove the first element from the array and put it into a variable array
//         const node = nodeArray.shift();
//         //Take all the children of the shifted node and put into array. Take all the children out of children array and add them to this array
//         nodeArray.push(...node.children);
//         //Same as spread operator but with a for loop instead
//         // for (let childrens of node.children) {
//         //   nodeArray.push(node.children);
//         // }
        
//         //Take the node we are working on and pass it to out iterator function provided as an argument to traverseBF function
//         //Call function on the individual node we are looking
//         fn(node);
//         //Then throw away each node after processing
    
//       }
//   }
// }

// module.exports = {Node, Tree};




// class Node {
//   constructor(data) {
//     data = this.data;
//     children = [];

//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }
// }

// module.exports = {Node, Tree};