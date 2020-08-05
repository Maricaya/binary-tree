/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// https://leetcode.com/problems/coin-change/submissions/
// 分硬币问题
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            } 
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};
