// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// answer

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

// 위와 같은 방식으로 푸는 것은 금방 풀었으나
// 그다지 빠른? 좋은 방식은 아니였음
// sort 메소드를 이용해서 최적화 하는 방법을 생각해 보았지만
// 뽀족한 수가 생각나지 않았다.

// 아래의 코드는 솔루션 중, 내가 구현하고 자 한 방식과 의도가 거의 비슷한 솔루션이다.

var singleNumber2 = function (nums) {
  const array = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
      return array[i];
    }
  }
};
