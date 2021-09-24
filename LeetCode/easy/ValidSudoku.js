// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.


// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// answer

var isValidSudoku = function (board) {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const check = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (!nums.includes(arr[i])) {
        return false
      } else {
        if (arr[i] !== '.'
          && arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
          return false
      }
    }
    return true;
  }

  const total = [...board,]
  for (let i = 0; i < 9; i++) {
    let arr = [];
    for (let j = 0; j < 9; j++) {
      arr.push(board[j][i])
    }
    total.push(arr)
  }

  const indexArr = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]

  const squareArr = (numArr) => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        arr.push(board[numArr[0] + i][numArr[1] + j])
      }
    }
    total.push(arr)
  }

  indexArr.forEach((item) => squareArr(item))
  const result = total.map((arr) => check(arr))
  return result.every(value => value === true)
};
