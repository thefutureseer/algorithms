class BinaryHeap:
    def __init__(self):
        self.heap = []  # Initialize an empty list to store heap elements

    def _heapify_up(self, index):
        """Maintain heap property after insertion."""
        parent_index = (index - 1) // 2
        if index > 0 and self.heap[index] < self.heap[parent_index]:
            # Swap child and parent if child is smaller
            self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
            self._heapify_up(parent_index)  # Recursively heapify up

    def _heapify_down(self, index):
        """Maintain heap property after deletion."""
        smallest = index
        left_child = 2 * index + 1
        right_child = 2 * index + 2

        # Compare with left child
        if left_child < len(self.heap) and self.heap[left_child] < self.heap[smallest]:
            smallest = left_child

        # Compare with right child
        if right_child < len(self.heap) and self.heap[right_child] < self.heap[smallest]:
            smallest = right_child

        # If the smallest is not the current index, swap and continue heapifying
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self._heapify_down(smallest)

    def insert(self, value):
        """Insert a value into the heap."""
        self.heap.append(value)  # Add the value to the end of the list
        self._heapify_up(len(self.heap) - 1)  # Maintain heap property

    def extract_min(self):
        """Remove and return the smallest element."""
        if len(self.heap) == 0:
            raise IndexError("Heap is empty")
        
        root = self.heap[0]  # Get the root (min element)
        self.heap[0] = self.heap.pop()  # Move the last element to the root and shrink the heap
        self._heapify_down(0)  # Maintain heap property
        return root

    def peek(self):
        """Return the smallest element without removing it."""
        if len(self.heap) == 0:
            raise IndexError("Heap is empty")
        return self.heap[0]

    def size(self):
        """Return the number of elements in the heap."""
        return len(self.heap)

    def is_empty(self):
        """Check if the heap is empty."""
        return len(self.heap) == 0

# Example Usage
heap = BinaryHeap()
heap.insert(10)
heap.insert(20)
heap.insert(5)
heap.insert(7)

print("Heap:", heap.heap)          # Output: [5, 7, 10, 20]
print("Extract Min:", heap.extract_min())  # Output: 5
print("Heap After Extraction:", heap.heap) # Output: [7, 20, 10]
print("Peek:", heap.peek())        # Output: 7