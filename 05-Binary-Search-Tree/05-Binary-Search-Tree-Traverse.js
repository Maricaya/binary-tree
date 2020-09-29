// 前序遍历
// 前中后，前打印
function preOrder(node) {
  if (node !== null) {
    console.log(node.val)
    preOrder(node.left)
    preOrder(node.right)
  }
}
// 中序遍历
// 前中后，中打印，顺便排序了
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left)
    console.log(node.val)
    inOrder(node.right)
  }
}
// 后序遍历
// 前中后，后打印
// 特点，当前节点的左右子节点都遍历完成，才开始做他自己做的事情
// 这个特点很有用，比如释放二叉树
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.val)
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
