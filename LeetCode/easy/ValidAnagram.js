// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


// answer

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sArr = Array.from(s).sort();
  const tArr = Array.from(t).sort();
  for (let i = 0; i < s.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false
    }
  }
  return true
};
