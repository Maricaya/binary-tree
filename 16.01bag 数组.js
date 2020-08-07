/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
https://leetcode.com/problems/partition-equal-subset-sum/

  Input: [1, 5, 11, 5]

  Output: true

  Explanation: The array can be partitioned as [1, 5, 5] and [11].
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
给一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。

现在让你装物品，是否存在一种装法，能够恰好将背包装满？

dp[物品数量 len][背包可以装的数量 sum]

1. base case
dp[0][j] = false  没有东西，一定为空
dp[i][0] = true   背包可装数量为0，一定是满的

2. 状态转移
第 i 个东西要不要装入背包

如果不把 nums[i] 算入子集，或者说你不把这第 i 个物品装入背包，那么是否能够恰好装满背包，取决于上一个状态 dp[i-1][j]，继承之前的结果。
如果把 nums[i] 算入子集，或者说你把这第 i 个物品装入了背包，那么是否能够恰好装满背包，取决于状态 
dp[i-1][j-nums[i-1]]。// 没装第 i 个物品，剩下的重量

不装
dp[i][j] = dp[i - 1][j]
装
dp[i][j] = dp[i-1][j-nums[i - 1]] || dp[i-1][j]
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, val) => acc + val, 0)
  if (sum % 2) {
    return false
  }
  sum /= 2
  // 注意要遍历赋值，否则是同一个 array，互相影响
  let dp = new Array(nums.length + 1).fill(0).map(val => new Array(sum + 1).fill(false))
  //dp[0][j] = false, dp[i][0]=true
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true
  }
  console.log(dp)
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j < nums[i - 1])
        dp[i][j] = dp[i - 1][j]
      else {
        dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - nums[i - 1]])
      }
    }
  }
  return dp[nums.length][sum]
};

// console.log(canPartition([1, 3]))
console.log(canPartition([1, 1, 2]))

/*
[1,1,2]
dp num.length sum
    0    1    2
0  true
1  true
2  true
3  true
*/
