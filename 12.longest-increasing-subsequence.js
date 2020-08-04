// 最长递增子序列（Longest Increasing Subsequence，简写 LIS）
// [10,9,2,5,3,7,101,18]
// 4 [2,3,7,101]
// https://leetcode.com/problems/longest-increasing-subsequence
function lengthOfLIS (nums) {
  if (nums.length === 0) {return 0}
  // 1、初始化 1
  const dp = Array(nums.length).fill(1)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]){
        // 找到状态转移方程
        // 假设 dp[0...i−1] 都已知，想办法求出 dp[i]
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
