
//Class Node function to hold all nodes in the tree data structure
class Node {
  constructor(data) {
   this.data = data;
   this.left = null;
   this.right = null;
  }

  //Find the proper place to fit the data
  insert(data) {
    //Check if the given data is less than this.data of the Node
    //and if the Node has a left side
    if (data < this.data && this.left) {
       //Recurse the left side of each node until no left side found
       this.left.insert(data);
       //Check if the final left node has no left node 
       //and set left to new Node
    } else if (data < this.data) {
       this.left = new Node(data);
    }

   else if (data > this.data && this.right) {
        this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }

  }
}

module.export = Node;