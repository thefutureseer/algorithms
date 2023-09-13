//min heap and max heap. A tree most commonly 
//represented as an array
//insert and put in order, remove and put in order.

//we can just compute the parent child relationship:
//equation to find the parent = i / 2 & round down
//equation to find the left child i * 2
//equation to find the right child i * 2 + 1


const minHeap = function() {
 //array first index always set to null
 var heapArr = [null];
  
 this.insert = function(num) {
 //push into heap
 //The newest number is added on left and the tree
 //is filled from left to right untill the level is filled up
 heapArr.push(num);
 //condtional/ternary to order the children and parents by min 
 //check if the heap has at least one parent and 1 child in it
 if(heapArr.length > 2) {
  //variable to look at the last item in the array
  var i = heapArr.length - 1;
  //while the child is less than the parent 
  //we need to move it up:
  while(heapArr[i] < heapArr[Math.floor(i/2)]) {
    //if its on the second number of the array or higher
    if(heapArr[i] >= 1) {
    [heapArr[i], heapArr[Math.floor(i/2)]] = [heapArr[Math.floor(i/2)], heapArr[i]];
    //check if we are not on the root node:
    if(Math.floor(i/2) > 1){
      //set the index to the parent node and do the same process
      i = Math.floor(i/2);
    } else {
      break;
    }
    }

  }
  // checks if its parent is a lower number or equal
  //if the parent is a higher number it bubbles up until
  //the heap is in order

 }

  }

}