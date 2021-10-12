// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

// answer

var myAtoi = function (s) {
  const trimWord = Array.from(s.trim());
  let mark = "";
  let answer = "";

  if (trimWord[0] === "-" || trimWord[0] === "+") {
    mark = trimWord[0];
    trimWord.shift();
  }

  for (let i = 0; i < trimWord.length; i++) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers.includes(trimWord[i])) {
      answer = answer + trimWord[i];
    } else {
      answer = answer + ".";
    }
  }

  answer = answer.split(".")[0];

  if (answer.length > 0) {
    if (mark === "+" || mark === "") {
      answer = Number(answer);
    }
    if (mark === "-") {
      answer = Number(answer) * -1;
    }
    if (Number(answer) < -2147483648) {
      answer = -2147483648;
    }
    if (Number(answer) > 2147483647) {
      answer = 2147483647;
    }
  } else {
    answer = 0;
  }

  return answer;
};
