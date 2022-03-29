// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
//   //create a third queue
//   const QueueThree = new Queue()
//   //loop through sourceOne and sourceTwo and stop at the length
//   //of the source continue with the alternate source.
//   //make sure either queue can be shorter.
//   while (sourceOne.peek() || sourceTwo.peek()) {
//   if (sourceOne.peek()) {
//     QueueThree.add(sourceOne.remove());
//   }
//   if (sourceTwo.peek()) {
//     QueueThree.add(sourceTwo.remove());
//   }
//     };
//     return QueueThree;
//   };

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  //add from both ques to this one
  const thirdQue = new Queue();

  //check Que source if there is data. if so, add it to third Queue 
  while (sourceOne.peek() || sourceTwo.peek()) {

    //check if data is in sourceOne
   if (sourceOne.peek()) {
     //remove data from the queue using the remove function
     thirdQue.add(sourceOne.remove());
   };
    //check if data is in sourceTwo
    if (sourceTwo.peek()) {
      //remove data from the queue by using the remove function
      thirdQue.add(sourceTwo.remove());
    };

  }
  return thirdQue;
}

module.exports = weave;