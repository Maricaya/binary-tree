// const findAll = arr => arr.reduce((total, current) => getResult(total, current), []);

// const getResult = (arrA, arrB) => {
//   // if (!Array.isArray(arrA) || !Array.isArray(arrB)) {s
//   //   return
//   // }
//   console.log('arrA, arrB', arrA, arrB)
//   if (arrA.length === 0) {
//     return arrB
//   }
//   if (arrB.length === 0) {
//     return arrA
//   }
//   let result = [];
//   for (let i = 0; i < arrA.length; i++) {
//     for (let j = 0; j < arrB.length; j++) {
//       result.push(String(arrA[i]) + String(arrB[j]))
//     }
//   }
//   console.log('reuslt', result)
//   return result
// };

// console.log('findAll', findAll([
//   ['A', 'B'],
//   ['a', 'b'],
//   [1, 2]
// ]))

let res = [];

function letterCombinations(multiArr) {
  if (multiArr.length === 0) return [];
  let path = ''
  go(multiArr, path, 0);
  return res;
}

function go(multiArr, path, i) {
  if (path.length === multiArr.length) {
    res.push(path);
    return;
  }
  const currentArray = multiArr[i]
  for (let j = 0; j < currentArray.length; j++) {
    const current = currentArray[j]
    // 进下一层决策树
    go(multiArr, path + current, i + 1);
  }
}
console.log(letterCombinations([
  ['A', 'B'],
  ['a', 'b'],
  [1, 2]
]))
