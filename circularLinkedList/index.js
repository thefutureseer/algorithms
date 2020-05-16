//Take a circular linked list and find out if its circular

//Use two pointers set them both to the head
//pointer one is slow (it moves one link at a time) one is fast (moves two links at a time)
//If they ever are on the same link at the same time you definately have a circular linked list

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
   slow = slow.next;
   fast = fast.next.next;

   if (slow === fast) {
      return true;
   } 
  }
  return false;
}
module.exports = circular;