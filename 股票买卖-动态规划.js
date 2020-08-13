/* 买卖股票

每天都有三种「选择」：买入、卖出、无操作
1. 定义 dp
dp[i][k][0 or 1]
0 <= i <= n-1, 1 <= k <= K
n 为天数，大 K 为最多交易数
此问题共 n × K × 2 种状态，全部穷举就能搞定。

for 0 <= i < n:
    for 1 <= k <= K:
        for s in {0, 1}:
            dp[i][k][s] = max(buy, sell, rest)


2. 状态转移
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
              max(   选择 rest  ,             选择 sell      )

解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
              max(   选择 rest  ,           选择 buy         )

解释：今天我持有着股票，有两种可能：
要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

3. base case
dp[-1][k][0] = 0
解释：因为 i 是从 0 开始的，所以 i = -1 意味着还没有开始，这时候的利润当然是 0 。
dp[-1][k][1] = -infinity
解释：还没开始的时候，是不可能持有股票的，用负无穷表示这种不可能。
dp[i][0][0] = 0
解释：因为 k 是从 1 开始的，所以 k = 0 意味着根本不允许交易，这时候利润当然是 0 。
dp[i][0][1] = -infinity
解释：不允许交易的情况下，是不可能持有股票的，用负无穷表示这种不可能。
*/

/*
dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) 
            = max(dp[i-1][1][1], -prices[i])
解释：k = 0 的 base case，所以 dp[i-1][0][0] = 0。

现在发现 k 都是 1，不会改变，即 k 对状态转移已经没有影响了。
可以进行进一步化简去掉所有 k：
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
dp[i][1] = max(dp[i-1][1], -prices[i])
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length;
  const dp = new Array(n).fill(0).map(item => new Array(2).fill(0))
  dp[0][0] = 0
    // 解释：
    //   dp[i][0]
    // = max(dp[-1][0], dp[-1][1] + prices[i])
    // = max(0, -infinity + prices[i]) = 0
  dp[0][1] = -prices[0]
    //   dp[i][1] 
    // = max(dp[-1][1], dp[-1][0] - prices[i])
    // = max(-infinity, 0 - prices[i]) 
    // = -prices[i]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], -prices[i])
  }
  return dp[n - 1][0]
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

/*
1. https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/
k = 1
 */
var maxProfit1 = function(prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(item => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[1]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], -prices[i])
  }
  return dp[n-1][0]
}

console.log(maxProfit1([7,1,5,3,6,4])) // 5

/*
2. https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
k = infinity
 */
var maxProfit2 = function(prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(item => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[1]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[n-1][0]
}
console.log(maxProfit2([7,1,5,3,6,4])) // 7

/*第三题，k = +infinity with cooldown
*/
