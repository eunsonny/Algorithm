
//  Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// answer

var reverseString = function (s) {
  // s.reverse()
  const length = s.length;

  for (let i = 0; i < length - 1; i++) {
    s.push(s[length - 2 - i])
  }
  s.splice(0, length - 1)
};
