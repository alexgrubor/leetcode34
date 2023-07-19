# Find First and Last Position of Element in Sorted Array

This repository contains a JavaScript implementation of an algorithm to find the starting and ending position of a given target value in a sorted array of integers. The algorithm aims to achieve a runtime complexity of O(log n).

## Problem Description

Given an array of integers `nums` sorted in non-decreasing order, the task is to find the starting and ending position of a given target value. If the target is not found in the array, the function should return `[-1, -1]`.

### Example 1:

Input: `nums = [5, 7, 7, 8, 8, 10]`, `target = 8`

Output: `[3, 4]`

### Example 2:

Input: `nums = [5, 7, 7, 8, 8, 10]`, `target = 6`

Output: `[-1, -1]`

### Example 3:

Input: `nums = []`, `target = 0`

Output: `[-1, -1]`

## Constraints

- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`
- `nums` is a non-decreasing array.
- `-109 <= target <= 109`

## Solution

The solution to this problem is implemented in JavaScript using the binary search algorithm. The function `rangeSearch(nums, target)` takes an array `nums` and the target value as input and returns an array `[leftBound, rightBound]` representing the starting and ending positions of the target value in the input array. If the target value is not found, it returns `[-1, -1]`.

```javascript
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

console.log(rangeSearch(nums, target)); // Output: [3, 4]
console.log(rangeSearch([], 0)); // Output: [-1, -1]
console.log(rangeSearch([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
```

Please make sure you have Node.js or any JavaScript runtime environment installed to run the provided code.

Feel free to use and contribute to this repository to enhance the algorithm or address any issues.
