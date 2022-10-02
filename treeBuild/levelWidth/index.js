//Given the root node of a tree, return an array where each element
//is the width of the tree at each level

function levelWidth(root) {

    const arrToProcess = [root, "s"];
    let counter = [0];

    while(arrToProcess.length > 1) {
      const nodeToProcess = arrToProcess.shift();
      //If row/level is only "S" then the row is done
      if (nodeToProcess === "s") {
        //Counter goes to zero to begin counting the next row
        counter.push(0);
        arrToProcess.push("s")
      } else {
      arrToProcess.push(...nodeToProcess.children);
      counter[counter.length - 1]++;
    }
  }
 return counter;
};

module.exports = levelWidth;