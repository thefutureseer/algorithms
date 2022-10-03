// --- Directions
// Implement a Queue datastructure using two stacks
// without creating an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  //always adds new data/record to the top of first stack
  add(record) {
    this.first.push(record);
  }
  
  remove() {  
    //using peek from the Stack functionality
   //put all data from first stack into second stack then
   //take off the top of second stack then put all back to 1st stack
   while(this.first.peek()) {
    this.second.push(this.first.pop())
  }
  //make a variable of the top so we can return it after we put
  //everything else back into the first stack
  const recordData = this.second.pop();
  //put everything else back 
  while(this.second.peek()) {
    this.first.push(this.second.pop());
  }
  return recordData;
}

peek() {
  //look at the last record/data in a stack
  while(this.first.peek()) {
    this.second.push(this.first.pop())
  }
  const recordData = this.second.peek();

  while(this.second.peek()) {
    this.first.push(this.second.pop())
  }

  return recordData;
}

}

module.exports = Queue;