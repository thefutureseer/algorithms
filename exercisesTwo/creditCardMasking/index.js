//Take in a credit card number or a password and mask all number except the last 4.


function maskify(cc) {
  if ( cc.length <= 4 ) {
     return cc;
  } else {
  var mask = [];
  var inStArr = cc.toString().split("");
  var fourFromLastIndex = inStArr.length - 4;
  var lastFour = inStArr.splice(fourFromLastIndex).join('');
 
 for (let i = 1; i <= inStArr.length; i++) {
      mask.push('#');
 }
 
 var maskPlus = mask.join('') + lastFour;
 return maskPlus;
 }
 };

 //Big O(n) because you only use one manuel for loop to make an array everything else is constant time

 module.exports = maskify;