# Basic Heap

The term **"basic heap"** is often used to describe either a **min-heap** or a **max-heap**.  
The word "basic" doesn't refer to a specific type of heap but instead indicates a general heap structure that maintains the **"heap property"**:

- The value of each parent node is either:
  - **Greater than or equal to** (max-heap) or
  - **Less than or equal to** (min-heap) its child nodes.
- A "basic heap" might refer to either implementation depending on the problem's needs.

---

## Key Differences in Usage

| **Aspect**       | **Min-Heap**                          | **Max-Heap**                          |
|-------------------|---------------------------------------|---------------------------------------|
| **Root Node**     | Smallest element                     | Largest element                       |
| **Priority**      | Lower values = higher priority       | Higher values = higher priority       |
| **Use Case**      | Dijkstra's algorithm, A*, event scheduling | Sorting in descending order, leaderboards |

---

# Heap Structure

The **heap structure** is a type of binary tree that satisfies the **heap property**.

## Key Characteristics of a Heap

### Binary Tree
- A heap is a **complete binary tree**, meaning all levels are fully filled except possibly the last level, which is filled from left to right.

### Heap Property
- **Min-Heap**: The value of a parent node is **less than or equal to** the values of its children.
  - The smallest value is at the root.
- **Max-Heap**: The value of a parent node is **greater than or equal to** the values of its children.
  - The largest value is at the root.

---

## Types of Heap

### Min-Heap
- The root contains the smallest element, and all child nodes are greater or equal to their parent.

### Max-Heap
- The root contains the largest element, and all child nodes are smaller or equal to their parent.

---

## Representation of a Heap

### 1. Array Representation
- The heap is often stored as an array where:
  - **Parent node** is at index `i`.
  - **Left child** is at index `2 * i + 1`.
  - **Right child** is at index `2 * i + 2`.
- This representation is memory efficient since no explicit pointers are needed.

### 2. Node-Based Representation
- Each node is represented as an object containing:
  - Its value.
  - A pointer to the left child.
  - A pointer to the right child.

---

## Example of Heap (Array Representation)

**Min-Heap Array**: `[1, 3, 6, 5, 9, 8]`

This array corresponds to the following tree:

```
    1
   / \
  3   6
 / \  /
5   9 8
```

# other heap reps: 

## Besides **array representation** and **node-based representation**, there are other less common ways to represent heaps, depending on the use case or the underlying data structure. Here are some additional options:

---

### 3. **Binary Heap with Implicit Links**
- Instead of explicitly storing child or parent pointers, the heap can be stored in a structure that allows implicit navigation.
- Example: **Balanced Binary Trees with Indices**
  - Index-based traversal (like array representation) but used with custom data structures like **linked lists** or **trees** that support efficient reordering or rebalancing.

---

### 4. **Pointer-Based Trees**
- A **pointer-based binary heap** stores nodes in memory using pointers between parent and children.
  - Similar to the node-based representation, but explicitly uses pointers (e.g., in C or languages with manual memory management).
  - Provides flexibility in dynamic memory allocation.

---

### 5. **Implicit Binary Trees with Bit Manipulation**
- When the heap is represented as an array, the **heap structure** can be navigated using bit manipulation:
  - Parent index: `(i - 1) >> 1`
  - Left child: `(i << 1) + 1`
  - Right child: `(i << 1) + 2`
- This method optimizes calculations for parent/child relationships in hardware-accelerated environments.

---

### 6. **Fibonacci Heaps**
- A more advanced representation used in specific algorithms (e.g., Dijkstra's algorithm).
- Characteristics:
  - It allows more flexible and efficient operations, such as merging two heaps in \( O(1) \) time.
  - Instead of a strict binary tree, it uses a collection of heap-ordered trees.
  - Good for applications requiring frequent merges or decreases in priority.

---

### 7. **Binomial Heaps**
- A collection of **binomial trees** that satisfy the heap property.
- Used for more complex priority queue implementations.
- Supports operations like merge, insert, delete, and decrease key efficiently.

---

### 8. **Ternary Heaps or Multi-Way Heaps**
- Instead of a binary structure, heaps can have more than two children per node:
  - **Ternary Heap**: Each parent has three children.
  - Generalized **d-ary heaps** (where \( d > 2 \)) allow \( d \)-children per node.
  - Useful for reducing tree height in applications like heap-based priority queues.

---

### 9. **Indexed Heaps**
- Combines a heap with an **index map** to allow direct access to elements by a key.
- Common in algorithms that need priority changes (e.g., Prim’s or Dijkstra’s algorithm).
- Example:
  - The heap is stored as an array, but an additional hash map or dictionary maintains element positions.

---

### 10. **Implicit Key-Based Heaps**
- Useful in distributed or sharded systems:
  - Represent the heap using a combination of unique keys and implicit relationships, often stored across multiple nodes or devices.
