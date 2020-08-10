// 算出一共有几个和为 k 的子串。
/*
https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484488&amp;idx=1&amp;sn=848f76e86fce722e70e265d0c6f84dc3&source=41#wechat_redirect

  给定一个整数数组和一个整数 k，找到该数组中和为 k 的连续子数组个数。
*/

function subarraySum1(nums, k) {
  const n = nums.length
  // 构造前缀和
  // 第 i 项： 0 到 i 的前缀和
  const sum = []
  sum[0] = 0
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }
  let ans = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (sum[i] - sum[j] === k) {
        ans++
      }
    }
  }
  return ans
}

function subarraySum(nums, k) {
  const n = nums.length
  // 前缀和 -> 该前缀出现的次数
  const preSum = new Map()
  preSum.set(0, 1)

  let ans = 0, sum0_i = 0
  for (let i = 0; i < n; i++) {
    sum0_i += nums[i]
    // 剩下的值
    let sum0_j = sum0_i - k
    if (preSum.has(sum0_j)) {
      ans += preSum.get(sum0_j)
    }
    preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1)
  }
  console.log(preSum)
  return ans
}
console.log(subarraySum([1, 1, 1], 2))
