// BFS by layer, and only add the last one of each layer into the result array

// 二叉树的右视图 遍历二叉树，把右侧放入结果中
const rightSideView = function(root) {
  const result = [];
  const queue = [];

  if (root === null) return result;

  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      if (i === size - 1) result.push(n.val);
      if (n.left !== null) queue.push(n.left);
      if (n.right !== null) queue.push(n.right);
    }
  }

  return result;
};
const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
};
console.log(rightSideView(tree));
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
