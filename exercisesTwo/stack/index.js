//A stack data structure
//A stack should be a class with methods push to add an element to the stack
//pop to remove an element and peek to look at the next one to be removed.
//adding an element to the stack should store it until it is removed

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop(record) {
   return this.data.pop(record);
  }

  peek() {
    return this.data[this.data.length-1];
  }
}
module.exports = Stack;