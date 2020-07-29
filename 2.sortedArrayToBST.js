// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树
  // 然后运用“树的递归性质”递归完成操作即可。
  if(nums.length === 0) return null;
  const mid = nums.length >> 1;
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root;
};

const arr =  [-10,-3,0,5,9]
console.log(sortedArrayToBST(arr))