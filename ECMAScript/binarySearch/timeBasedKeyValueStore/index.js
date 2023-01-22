//BINARY SEARCH algorithm (for the sorted input)

//From LeetCode.com :
// 981. "Time Based Key-Value Store"
// Medium
// 3.8K
// 362
// Companies

// QUESTION:
// Design a time-based key-value data structure that can store 
// multiple values for the same key at different time stamps and 
// retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the 
//key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that 
//set was called previously, with timestamp_prev <= timestamp. 
//If there are multiple such values, it returns the value 
//associated with the largest timestamp_prev. If there are no 
//values, it returns "".

//Psuedo code
//create a map to use
// set object
// see where the tmestamp is,
// if the timestamp is to high but lower than the next one
//get the one underneath it

// FINAL final
// const AVLTree = require('avl-tree-js'); // import the AVLTree library

// class TimeMap {
//     constructor() {
//         this.map = new Map(); // create a new Map object and store it in the map property
//     }

//     set(key, value, timestamp) {
//         if (!this.map.has(key)) { // check if the key already exists in the map
//             this.map.set(key, new AVLTree()); // if not, create a new AVLTree object and set it as the value for the key in the map
//         }
//         this.map.get(key).insert({timestamp, value}); // insert the timestamp and value in the AVLTree object
//     }

//     get(key, timestamp) {
//         if (!this.map.has(key)) { // check if the key exists in the map
//             return null; // if not, return null
//         }
//         const node = this.map.get(key).floor({timestamp}); // find the node with the largest key less



var TimeMap = function() {
  this.map = {};
};

// * @param {string} key 
// * @param {string} value 
// * @param {number} timestamp
// * @return {void} 

TimeMap.prototype.set = function(key, value, timestamp) {
//set both values to one key of the object

var list = this.map[key];
  //if no key
  if (list === undefined) this.map[key] = [];
  
  this.map[key].push([timestamp, value]);
};

TimeMap.prototype.get = function( key, timestamp) {
  //get value same way as above
  var list = this.map[key];

  if (list === undefined) return "";

  //begin binary search
var n = list.length;
  if(timestamp >= list[n-1][0]) {
      return list[n-1][1];
  } else if(timestamp < list[0][0]) {
      return "";   
  }
  
var l = 0, r = n;    
while (l<r) {
 var mid = Math.floor((l+n)/2);
 if(list[mid][0] == timestamp) {return list[mid][1]};
 if(list[mid][0] < timestamp) l = mid + 1;
  else r = mid - 1
}
return list[l][1];
};

module.exports = TimeMap;

// time complexity 
// of O(log n) for the get operation, where n is 
// the total number of key-value pairs and O(1) for 
// the set operation. 
// The space complexity 
//  O(n) where n is the total number of key-value pairs.