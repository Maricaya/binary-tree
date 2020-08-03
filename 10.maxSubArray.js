/*
算法题：给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
现在需要你找出数列a的所有区间中, X值最大的那个区间;
如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
*/

function maxSubArray1(nums) {
  let res = -Number.MAX_VALUE
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    prev = Math.max(prev + currentNum, currentNum)
    res = Math.max(res, prev)
  }
  return res
}

function maxSubArray (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let dp = [];
  // base case
  // 第一个元素前面没有子数组
  dp[0] = nums[0];
  // 状态转移方程
  for (let i = 1; i < n; i++) {
      dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  // 得到 nums 的最大子数组
  let res = nums[0];
  for (let i = 0; i < n; i++) {
      res = Math.max(res, dp[i]);
  }
  return res;
}

console.log(maxSubArray([3, 1, 6, 4, 5, 2]))
