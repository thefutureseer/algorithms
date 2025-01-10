//Compare to python:

class BinaryHeap {
  constructor() {
    // def __init__(self):
    this.heap = []; // Initialize an empty list to store heap elements
  }

  // def _heapify_up(self, index):
  heapify_up(index) {
    // """Maintain heap property after insertion."""

    // parent_index = (index - 1) // 2
    const parent_index = Math.floor((index - 1) / 2);

    // if index > 0 and self.heap[index] < self.heap[parent_index]:
    if (index > 0 && this.heap[index] < this.heap[parent_index]) {
      // Swap child and parent if child is smaller
      // self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
      [this.heap[index], this.heap[parent_index]] = [this.heap[parent_index], this.heap[index]];

      // self._heapify_up(parent_index)  # Recursively heapify up
      this.heapify_up(parent_index);
    }
  }

  // def _heapify_down(self, index):
  heapify_down(index) {
    // """Maintain heap property after deletion."""

    // smallest = index
    let smallest = index;

    // left_child = 2 * index + 1
    const left_child = 2 * index + 1;

    // right_child = 2 * index + 2
    const right_child = 2 * index + 2;

    // Compare with left child
    // if left_child < len(self.heap) and self.heap[left_child] < self.heap[smallest]:
    if (left_child < this.heap.length && this.heap[left_child] < this.heap[smallest]) {
      smallest = left_child;
    }

    // Compare with right child
    // if right_child < len(self.heap) and self.heap[right_child] < self.heap[smallest]:
    if (right_child < this.heap.length && this.heap[right_child] < this.heap[smallest]) {
      smallest = right_child;
    }

    // If the smallest is not the current index, swap and continue heapifying
    // if smallest != index:
    if (smallest !== index) {
      // self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

      // self._heapify_down(smallest)
      this.heapify_down(smallest);
    }
  }

  // def insert(self, value):
  insert(value) {
    // """Insert a value into the heap."""

    // self.heap.append(value)  # Add the value to the end of the list
    this.heap.push(value);

    // self._heapify_up(len(self.heap) - 1)  # Maintain heap property
    this.heapify_up(this.heap.length - 1);
  }

  // def extract_min(self):
  extract_min() {
    // """Remove and return the smallest element."""

    // if len(self.heap) == 0:
    //     raise IndexError("Heap is empty")
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    // root = self.heap[0]  # Get the root (min element)
    const root = this.heap[0];

    // self.heap[0] = self.heap.pop()  # Move the last element to the root and shrink the heap
    this.heap[0] = this.heap.pop();

    // self._heapify_down(0)  # Maintain heap property
    this.heapify_down(0);

    // return root
    return root;
  }

  // def peek(self):
  peek() {
    // """Return the smallest element without removing it."""

    // if len(self.heap) == 0:
    //     raise IndexError("Heap is empty")
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    // return self.heap[0]
    return this.heap[0];
  }

  // def size(self):
  size() {
    // """Return the number of elements in the heap."""
    // return len(self.heap)
    return this.heap.length;
  }

  // def is_empty(self):
  is_empty() {
    // """Check if the heap is empty."""
    // return len(self.heap) == 0
    return this.heap.length === 0;
  }
}

// # Example Usage
const heap = new BinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(7);

console.log("Heap:", heap.heap); // Output: [5, 7, 10, 20]
console.log("Extract Min:", heap.extract_min()); // Output: 5
console.log("Heap After Extraction:", heap.heap); // Output: [7, 20, 10]
console.log("Peek:", heap.peek()); // Output: 7