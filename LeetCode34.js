//Find First and Last Position of Element in Sorted Array
/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109 */

//Solution:

nums = [5, 7, 7, 8, 8, 10];
target = 8;

const rangeSearch = (nums, target) => {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let leftBound = -1;
  let rightBound = -1;

  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (nums[midIndex] == target && nums[midIndex - 1] !== target) {
      leftBound = midIndex;
    }
    if (nums[midIndex] === target && nums[midIndex + 1] !== target) {
      rightBound = midIndex;
    }
    if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return [leftBound, rightBound];
};

console.log(rangeSearch(nums, target));
console.log(rangeSearch([], 0));
console.log(rangeSearch([5, 7, 7, 8, 8, 10], 6));
