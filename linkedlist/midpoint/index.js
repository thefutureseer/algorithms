//Two pointers: one moves fast (advace by two) other pointer moves slow (advance by one).
// Function containing two variables pointing to the head, a while
// loop to advance each pointer variable and return the slow pointer value half way through.

function midpoint(list) {
 let slow = list.getFirst();
 let fast = list.getFirst();
 while (fast.next && fast.next.next){
   slow = slow.next;
   fast = fast.next.next;
}
   return slow;
 
}

module.exports = midpoint;