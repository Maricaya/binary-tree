// 计算二叉树最小深度

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明: 叶子节点是指没有子节点的节点。

// 示例:

// 给定二叉树 [3,9,20,15,7],

// 计算从起点 start 到终点 target 的最近距离
// 我们写 BFS 算法都是用「队列」这种数据结构，每次将一个节点周围的所有节点加入队列。
// BFS 找到的路径一定是最短的，但代价就是空间复杂度比 DFS 大很多.

var minDepth = function (root) {
  if (!root) return 0; 
  let depth = 1; // 记录扩散的步数
  if (!root.left && !root.right) return depth;

  let queue = [root]; // 放入一个队列, 核心数据结构
  console.log(queue)

  while (queue.length > 0) {
    let queueLength = queue.length;
    /* 将当前队列中的所有节点向四周扩散 */
    for (let i = 0; i < queueLength; i++) {
      let currentNode = queue.shift();
      console.log(currentNode)
      /* 划重点：这里判断是否到达终点 */
      if (!currentNode.left && !currentNode.right) {
        return depth
      }
      /* 将 currentNode 的相邻节点加入队列 */
      else {
        if (currentNode.left) {
          queue.push(currentNode.left)
        };
        if (currentNode.right) {
          queue.push(currentNode.right)
        };
      }
    }
    /* 划重点：更新步数在这里 */
    depth++;
  }

  return depth;
};

const a = {
  val: 3,
  left: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 9,
    left: null,
    right: null
  }
}

console.log(minDepth(a))
