// 最长回文子串
/*
for 0 <= i < len(s):
找到以 s[i] 为中心的回文串
找到以 s[i] 和 s[i+1] 为中心的回文串
更新答案

str.slice(beginIndex[, endIndex]) 不会改动原数组
- beginIndex
从该索引（以 0 为基数）处开始提取原字符串中的字符。（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）
endIndex
可选。在该索引（以 0 为基数）处结束提取字符串。
如果省略该参数，slice() 会一直提取到字符串末尾。
如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度(例如，如果 endIndex 是 -3，则是, strLength - 3)。

str.substring(indexStart[, indexEnd])
indexStart、indexEnd 和 slice 一样
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 stringName.length，则被当作 stringName.length。
- 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。
*/

function longestPalindrome(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 穷举出所有连续回文串
    let s1 = palindrome(s, i, i) // 单数
    let s2 = palindrome(s, i, i + 1) // 双数
    // 比较长度
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }

  function palindrome(s, left, right) {
    while (left >= 0 && right <= s.length &&
      s[left] === s[right]) {
      left--;
      right++;
    }
    // 返回以 s[left] s[right] 为中心的最长回文串
    return s.slice(left + 1, right)
  }
  return res
}

console.log(longestPalindrome('abccccdd'))
