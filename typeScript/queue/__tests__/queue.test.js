// queue.test.js
// import Queue from '../index.ts'; // Import without ".default"

// describe('Queue', () => {
//   it('should initialize with an empty array', () => {
//     // Arrange
//     const queue = new Queue(); // Instantiate the class directly
//     // Assert
//     expect(queue.name).toEqual([]);
//   });
// });

// import Queue from '../index';
const Queue = require("../index");
// import {describe, expect, test} from '@jest/globals';
describe("typeScript stuff",()=>{
  test("Is Queue a constructor?", () => {
    const isFuncti = typeof Queue;
    console.log(isFuncti, "Is Queue a constructor?");
    expect(isFuncti).toBe("object");
  });
})
// import { Queue } from '../index';
// describe('Queue', () => {
//   it('should initialize an empty queue', () => {
//     const queue = new Queue<number>();
//     expect(queue.name).toEqual([]);
//   });
// Add more test cases here
// });
// test("add something to the queue :)", ()=>{
//   const queue = new Queue();
//   const addThis = "myName";
//   const helloMe = queue.add(addThis);
//   expect(helloMe).toBe("myName");
// })
