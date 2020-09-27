/**
 * 二分搜索树的优势
 * 高效：不仅可查找数据；
 * 还可以高效地插入、删除数据 - 动态维护数据
 * 
 * 二叉树
 * 每个节点的 键值 大于左孩子；
 * 每个节点的 键值 小于右孩子
 * 
 * 以左右孩子为根的子树仍为二分搜索树
 * 
 *          28
 *        /    \
 *       16    30
 *      /  \  /  \
 *     13  22 29 42
 * 二分搜索树不一定是一颗完全二叉树，
 * 所以用数组表示并不方便，一般用 Node 节点表示
 */

 /*
 Node {
    key,
    value,
    Node left,    
    Node right    
 }
 */

class Node {
  key
  value
  left
  right
  root = null
  count = 0
  constructor (key, value) {
    this.key = key
    this.value = value
    this.left = this.right = null
  }
  size () {
      return this.count;
  }
  isEmpty () {
      return this.count === 0;
  }
}
