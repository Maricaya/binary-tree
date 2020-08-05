// 01bag
// 变体
// 1. 斐波那契数列
/**
 * @param {number} N
 * @return {number}
 */
// 时间复杂度 O(n)
var fib1 = function(N) {
    let dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log(N, dp)
    return dp[N]
};

// 方法二
var fib = function(N) {
    if (N === 0) return 0
    if(N === 2 || N ===1) return 1
    
    let prevent = 1, current = 1
    for (let i = 3; i <= N; i++) {
        let sum = prevent + current
        prevent = current
        current = sum
    }
    return current
};
console.log(fib(3))
