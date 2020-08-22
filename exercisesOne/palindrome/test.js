const [longest_palindrome, is_Palindrome] = require('./longestPalindrome');

test("is_Palindrome is a function", () => {
 expect(typeof is_Palindrome).toEqual('function');
});

test( "longest_palindrome function is defined", () => {
 expect(typeof longest_palindrome).toEqual('function');
});

test("Get the longest Palindrome within the string: abracadabra", () => {
 expect(longest_palindrome("abracadabra")).toBe('aca');
});

test("Get the longest Palindrome within the string: HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE", () => { expect(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")).toBe('12345678987654321');
});

