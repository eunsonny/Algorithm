// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

// answer

var plusOne = function(digits) {
  const length = digits.length;
  let i = length -1;
  let count = 0;
  while (digits[i] === 9) {
    count++;
    i--;
  }
   if (count === 0) {
     digits[length-1] = digits[length-1] +1
   } else {
     for (let j = 1; j <= count; j++) {
       digits[length-j] = 0;
     }
     length === count
      ? digits.unshift(1)
     :digits[length-count-1] = digits[length-count-1] +1;
   }
   return digits
 };

 // 뒷자리부터 체크하여 9가 몇 개 있는 지를 체크한다.
 // 그리고 배열의 길이와 9의 갯수에 따라, 처리 방식을 정리한다.

 // 사실 이 방법 말고, 자리마다 십의 제곱수를 곱하여
 // 숫자를 연산하여 구하는 방법도 생각했으나, 숫자가 커지면
 // JS가 연산할 수 있는 범위의 수를 벗어나기 때문에 해당 방식은 포기했다.