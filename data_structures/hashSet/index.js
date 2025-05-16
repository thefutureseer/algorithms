
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexSet = new Set();
  
  for (let end = 0; end < s.length; end++) {
    while (charIndexSet.has(s[end])) {
      charIndexSet.delete(s[start]);
      start++;
    }
    charIndexSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
const str = "abcabcbb";
const result = lengthOfLongestSubstring(str);
console.log(result); // Output: 3