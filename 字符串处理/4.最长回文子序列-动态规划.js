// https://mp.weixin.qq.com/s/zNai1pzXHeB2tQE6AdOXTA
// 最长回文子序列
// 回文的其他问题
// https://leetcode-cn.com/problems/palindromic-substrings/
/*
int longestPalindromeSubseq(string s) {
    int n = s.size();
    // dp 数组全部初始化为 0
    vector<vector<int>> dp(n, vector<int>(n, 0));
    // base case
    for (int i = 0; i < n; i++)
        dp[i][i] = 1;
    // 反着遍历保证正确的状态转移
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            // 状态转移方程
            if (s[i] == s[j])
                dp[i][j] = dp[i + 1][j - 1] + 2;
            else
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
        }
    }
    // 整个 s 的最长回文子串长度
    return dp[0][n - 1];
}
*/

function longestPalindromeSubseq(s) {
  const n = s.length
  const dp = new Array(n).fill(0).map(item => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // 状态转移方程
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      }
      else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp)
  // 整个 s 的最长回文子串长度
  return dp[0][n - 1]
}

console.log(longestPalindromeSubseq('bbbab'))
