'use strict'
/* Two Sum 
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

// Solution 1: Brute Force
const twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
}

// Solution 2: Hash Map (not synchronized, good for unthreaded) Hash Table is synchronized (use for threaded applications)
const twoSum2 = function (nums, target) {
  let hash = new Map()
  for (let i = 0; i < nums.length; i++) {
      hash.set(nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
      let foundIndex = hash.get(target - nums[i])
      if (foundIndex && foundIndex !== i) {
          return [i, foundIndex]
      }
  }
}

/* Single Number 
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.
*/

// Solution 1: Brute Force
function singleNumber (nums) {
  let single
  let dupFound = false
  for (let i = 0; i < nums.length; i++) {
      single = nums[i]
      dupFound = false
      for (let j = 0; j < nums.length; j++) {
          if (j !== i && single === nums[j]) {
              dupFound = true
              break
          }
      }
      if (dupFound === false) {
          break
      }
  }  
  return single
}

const test1 = [4,1,2,1,2]
const test2 = [1, 0, 1]
console.log('single number is: ', singleNumber(test1))
console.log('single number is: ', singleNumber(test2))



