// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// answer

var containsDuplicate = function(nums) {
  for(let i = 0; i< nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] === nums[j]) return true;
      }
  }
  return false;
};


// 문제 자체는 어렵지 않아서 위의 방법으로 빠르게 풀었으나, 
// detail을 보았을 때 그렇게 빠른 방법은 아니였음
// 아래는 sort 메소드를 이용해 최적화한 코드이다.

// unshift에 데인 뒤에, sort를 이용하면 시간 복잡도가 더 높아질 것이라는 생각을
// 무의식적으로 하게 되어, 사용하기를 기피했는데
// 잘못된 고정관념이였던걸로^^;


var containsDuplicate2 = function(nums) {
  nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false
};

