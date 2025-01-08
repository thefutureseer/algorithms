# Representations of tree data structures
## 1. Node-based
- Each node is represented as an object with pointers to its children.

## 2. Parent Array Representation  
- Each index in the array represents a node, and the value at that index points to its parent.  
- Root node is identified with a special marker (e.g., -1).

## 3. Array
 
``` [1, 2, 3, 4, 5, 6, 7] ```  

- There are no explicit pointers like in the node-based implementation. Instead, the array indices implicitly represent the hierarchical relationships between nodes (parent, left child, right child). The "pointers" are effectively replaced by index calculations. 

### How Array Indices Represent Relationships:
1. index 0 = root
2. nodes are added level by level first left then right and accross one by one
3. for a node at index i:  
  - Its left child is added at index 2 * i + 1
  - Its right child is added at index 2 * i + 2


