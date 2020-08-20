var backtrack = function(nums) {
  const n = nums.length
  const result = []
  go([])

  function go(path) {
    if (path.length === n) {
      result.push(path)
      return
    }
    for (let i = 0; i < n; i++) {
      if (path.indexOf(nums[i]) > -1) {
        continue
      }
      go([nums[i], ...path])
    }
  }
  return result
};

console.log(backtrack([1,2,3]))
