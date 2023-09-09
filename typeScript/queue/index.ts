// "use strict";
// interface Name {
//   name: string;
// }

//add and delete names
class Queue<T> {
  name: T[];
  
  constructor() {
    this.name = [];
  }

  // add(name:T): Queue<T> {
  //   //push into front of root
  //   this.name=[...this.name, name];
  //   return this;
  // }
  // delete(data): string{
  //   //pop or unshift take out back end of root
  // }
};
module.exports = Queue;
