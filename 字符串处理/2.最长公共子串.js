// 最长公共子串
/*
  dp[n][m]
*/

function longestCommonSubsequence(str1, str2) {
  const n = str1.length
  const m = str2.length
  const dp = new Array(n + 1).fill(0).map(item => new Array(m + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // 注意这里
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[n][m]
}

console.log(longestCommonSubsequence('abc', 'def'))
