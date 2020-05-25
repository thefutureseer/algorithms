//Make a Queue data structure (first in first out) with three functions; add, remove and peek.  
class Queue {
  constructor(data) {
   this.data = [];
  }

  //Add integers always added to the top
  add(record) {
   this.data.unshift(record);
  }

  //Remove integers first in gets removed first
  remove() {
   return this.data.pop();
  }
  
  //Show the "first in" peice of data
  peek() {

   return this.data[this.data.length -1];
  }
}

module.exports = Queue;