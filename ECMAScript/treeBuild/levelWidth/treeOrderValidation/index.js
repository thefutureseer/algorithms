function validate(node, min = null, max = null) {
  if (node.val == min || node.val == max) {
      return false;
  }
  if (max !== null && node.val > max) {
      return false;
  }
  
  if (min !== null && node.val < min) {
      return false;
  }
  
  if (node.left && !validate(node.left, min, node.val)) { return false; }
  
  if (node.right && !validate(node.right, node.val, max)) { return false; }
 
     return true;
 }

module.exports = validate;