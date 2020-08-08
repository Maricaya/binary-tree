// [5,3,1,6] 9
// 时间复杂度还是 O(N)，而排序的时间复杂度是 O(NlogN)，所以这个函数的时间复杂度是 O(NlogN)。
function twoSumTarget(num, start, target) {
  const result = []
  // 左指针改为从 start 开始，其他不变
  let left = start, right = num.length - 1
  while (left < right) {
    const leftValue = num[left]
    const rightValue = num[right]
    const sum = leftValue + rightValue
    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else {
      result.push([num[left], num[right]])
      // 跳过所有重复的元素
      while (left < right && num[left] == leftValue) {left++;}
      while (left < right && num[right] == rightValue) {right--;}
    }
  }
  return result
}

function threeSumTarget (nums, target) {
  num.sort()
  const n = nums.length
  const res = []
  // 穷举 threeSum 第一个数
  for (let i = 0; i < n; i++) {
    // 对 target - nums[i] 计算 twoSum
    // 元组 tuples
    const tuples = twoSumTarget(nums, i+1, target - nums[i])
    // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
    for (const tuple of tuples) {
      tuple.push(nums[i])
      res.push(tuple)
    }
    // 跳过第一个数字重复的情况，否则会出现重复结果
    while(i<n-1&&nums[i] === nums[i+1]) {i++}
  }
}
// O(N^2)
console.log(threeSumTarget([1, 3, 1, 2, 2, 3], 4))

// 总结一下
/* 注意：调用这个函数之前一定要先给 nums 排序 */
function nSumTarget(nums, n, start, target) {
  const len = nums.length
  const res = []
  // 至少是 2Sum，且数组不应该大于 n
  if (n < 2 || len < n) {return res}
  // 2 Sum 是 base case
  if (n === 2) {
    // 双指针操作那一堆
    // 左指针改为从 start 开始，其他不变
    let left = start, right = num.length - 1
    while (left < right) {
      const leftValue = num[left]
      const rightValue = num[right]
      const sum = leftValue + rightValue
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        result.push([num[left], num[right]])
        // 跳过所有重复的元素
        while (left < right && num[left] == leftValue) {left++;}
        while (left < right && num[right] == rightValue) {right--;}
      }
    }
  } else {
    // n > 2 时，递归计算 (n-1)Sum 的结果
    for (let i = start; i < len; i++) {
      const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const arr of sub) {
        arr.push(nums[i])
        res.push(arr)
      }
      while(i < len - 1 && nums[i] === nums[i+1]) {i++}
    }
  }
}

function fourSum(nums, target) {
  nums.sort();
  // n 为 4，从 nums[0] 开始计算和为 target 的四元组
  return nSumTarget(nums, 4, 0, target);
}
