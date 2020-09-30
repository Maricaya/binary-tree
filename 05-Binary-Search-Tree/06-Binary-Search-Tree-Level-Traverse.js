// 广度优先的遍历：维护一个队列
// O(n)
function leverOrder (node) {
    // 队列
    const queue = [];
    queue.push(node);
    while(queue.length > 0) {
        // 每次取出第一个
        const currentNode = queue.shift();
        // 操作当前 node
        console.log(currentNode.val);
        if (currentNode.left) {
            queue.push(currentNode.left);
        } 
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
}
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
leverOrder(tree)
  
