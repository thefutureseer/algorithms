function validate(node, min=null, max=null) {
  if (max !== null && node.data < max  ) {
      return false;
  }

  if (min !== null && node.data > min) {
      return false;
  }

  


}

module.exports = validate;