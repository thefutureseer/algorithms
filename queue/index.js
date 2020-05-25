//Create a Queue "First in first out stack" with add and remove functions.
class Queue {
  constructor() {
   this.data = [];
}
  //Only Add integers to the top 
  add(record) {
    this.data.unshift(record)
  }

  //Remove integers from the bottom only
  remove() {
    return this.data.pop()
  }
}

//Export the file for testing
module.exports = Queue;