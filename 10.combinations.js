/**
77 组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res = []
var combine = function(nums, length) {
    let path = []
    go(nums, length, path, 1)
    return res
};
function go (nums, length, path, start) {
  if (path.length === length) {
    res.push(path)
    return
  }
  for (let i = start; i <= nums; i++) {
    go(nums, length, [...path, i], i+1)
  }
}

console.log(combine(4, 2))
