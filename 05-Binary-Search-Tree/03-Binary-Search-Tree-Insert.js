// 插入新的节点
// 比如：在下面二叉树中插入 60

/**
 *          41
 *         /  \
 *       22   58
 *      / \   /
 *    15  33 50
 * 
 */

 /**
  * 第一步：把 60 插入以 41 为根的二叉搜索树中
  * 比较 60 和 41，60 > 41 应该插入的右子树
  * 第二步：把 60 插入以 58 为根的二叉搜索树中
  * 比较 60 和 58，60 > 58 应该插入的右子树
  * 58 右子树为空，插入成功。
  * 
  * 如果插入的节点树中存在，那么更新二叉树的值。
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
  insert (key, value) {
    this.root = this._insert(this.root, key, value)
  }
  // 以 node 为根的二叉搜索树，插入节点 (key, value)
  // 返回插入新节点后的二叉搜索树的根
  _insert(node, key, value) {
    if (node === null) {
      this.count++
      return new Node(key, value)
    }

    if(key === node.key) {
      node.value = value
    } else if (key < node.key) {
      node.right = this._insert(node.left, key, value)
    } else {
      node.left = this._insert(node.right, key, value)
    }
  }
}
