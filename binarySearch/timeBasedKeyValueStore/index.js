//BINARY SEARCH algorithm (for the sorted input)

//create a map to use
// set object
// see where the tmestamp is,
// if the timestamp is to high but lower than the next one
//get the one underneath it


var TimeMap = function() {
  this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void} */

TimeMap.prototype.set = function(key, value, timestamp) {
//set both values to one key of the object

var list = this.map[key];
  //if no key
  if (list === undefined) this.map[key] = [];
  
  this.map[key].push([timestamp, value]);
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
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

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/