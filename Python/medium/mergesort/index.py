# Complexity:
# Time Complexity: (O(n log n))
# Space Complexity: (O(n)), due to the additional space used during merging.

def merge_sort(arr):
    # Base case: if the array has 1 or 0 elements, it is already sorted
    if len(arr) <= 1:
        return arr
    
    # Step 1: Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Step 2: Recursively sort both halves
    sorted_left = merge_sort(left_half)
    sorted_right = merge_sort(right_half)
    
    # Step 3: Merge the sorted halves
    return merge(sorted_left, sorted_right)

def merge(left, right):
    # Create an empty list to store the merged result
    sorted_list = []
    i = j = 0
    
    # Step 4: Compare elements from both halves and add the smaller one to the sorted list
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_list.append(left[i])
            i += 1
        else:
            sorted_list.append(right[j])
            j += 1
    
    # Step 5: Add any remaining elements from the left or right half
    sorted_list.extend(left[i:])
    sorted_list.extend(right[j:])
    
    return sorted_list

# Example usage:
arr = [38, 27, 43, 3, 9, 82, 10]
print("Unsorted array:", arr)
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)