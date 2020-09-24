// 二叉搜索树
// 查找问题
// 二分查找法 binary search
// 只有有序数组，才可以使用二分查找
// 排序经常做为其他算法的子过程
// 处理有序数组比无序数组容易很多
// 时间复杂度 Olog(n)
// 需要会白板写

function binarySearch(arr, target) {
  // 在 arr[l... r] 之间查找 target
  const n = arr.length
  let l = 0,r = n -1;
  while(l<=r) {
    // let mid = parseInt(( l + r )/2)
    // 这里会出现bug，l+r 可能会超出范围，所以不使用 + 使用 -
    // 最小值 + 范围
    let mid = parseInt( l + (r - l)/2)
    if (arr[mid] === target) {
      return mid
    }
    // 请注意这里是 mid - 1
    // 到这里是在 arr[l... mid-1] 之间查找 target
    if (target < arr[mid]) {
      r = mid - 1;
    }
    // 到这里是在 arr[mid+1... r] 之间查找 target
    else  {
      l = mid + 1;
    }
  }
  return -1;
}
