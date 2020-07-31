//  电话号码问题 https://leetcode.com/problems/letter-combinations-of-a-phone-number
let res = [];

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  let path = ''
  go(digits, 0, path);
  return res;
}

function go(digits, i, path) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  if (path.length === digits.length) {
    console.log('digits', digits, 'path', path)
    res.push(path);
    return;
  }
  const currentString = map[digits[i]]
  for (let j = 0; j < currentString.length; j++) {
    const currentChar = currentString[j]
    // 进下一层决策树
    go(digits, i + 1, path + currentChar);
  }
}

console.log(letterCombinations('23'))
