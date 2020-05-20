//FROM LAST
//Given a linked list and an integer N
//Return the N number of links from the last node
//Do not call the size method
//ASSUME N is always less than the length of the linked list

//Two variable pointers labeled fast and slow both set to the head node
//The first move is to move the fast pointer N number of links 
//Then move both pointers together one link at a time until fast pointer reaches the end of the chain
//Return what the slow pointer is looking at as the link N away from the end

function fromLast(list, n) {
  //Make two variable pointers and set them both to the first node
  let fast = list.getFirst();
  let slow = list.getFirst();

  //Move "fast" pointer forward n times
  while (n > 0) {
     fast = fast.next;
     n--;
    }

  //Advance both pointer by one link until the fast pointer reaches the end
  while (fast.next) {
   fast = fast.next;
   slow = slow.next;
  }
  return slow;
}

module.exports = fromLast;