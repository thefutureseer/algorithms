//Create a node class its constructor should accept an argument 

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  //Push data into Nodes children array
  add(data) {
    //Create a new Node with given data inside
// const node = new Node(data);
    //Push into the current nodes children array
// this.children.push(node);
    //Condensed to one line:
    this.children.push(new Node(data));
  }

  //Remove children or unset them
  remove(data) {
    //Find a match and unset it whithin the tree
    //Traverse through every node/Children in array check for data given & modify this.children array
    this.children = this.children.filter(node => {
      //Return all data not equal to data given in order to remove the one given
      return node.data !== data;
    });
  }
}

class Tree{
  constructor(root) {
    root = this.root
    this.root = null;
  }

  traverseBFS() {

  }
}

module.exports = {Node, Tree};