// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.



// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// answer

var isPalindrome = function (s) {
  const newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const length = newS.length

  if (length % 2 === 0) {
    for (let i = 0; i < length / 2; i++) {
      if (newS[i] !== newS[length - 1 - i]) {
        return false;
      }
    }
    return true
  } else {
    for (let i = 0; i < length / 2 - 1; i++) {
      if (newS[i] !== newS[length - 1 - i]) {
        console.log(i)
        return false;
      }
    }
    return true
  }
};
