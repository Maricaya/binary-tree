/**
 * - 使用一个队列放置array
- 依次遍历队列，每次取出队列首个对象item
- 先找到parent为null的对象，放入tree中。如果不是，放入队列尾部
- 根据item的parent，找到tree中的id，在此id的children中插入item
- 如果暂时没有，放入队列尾部
 */

const array = [
  { id: 9, name: "前端基础设施组", parent: 8 },
  { id: 10, name: "前端业务组", parent: 8 },
  { id: 7, name: "后端开发部门", parent: 5 },
  { id: 8, name: "前端开发部门", parent: 5 },
  { id: 1, name: "CEO", parent: null },
  { id: 2, name: "运营部", parent: 1 },
  { id: 3, name: "财务部", parent: 1 },
  { id: 4, name: "人事部", parent: 1 },
  { id: 5, name: "技术部", parent: 1 },
  { id: 6, name: "产品部", parent: 1 }
]

const array2tree = arr => {
  const tree = {}
  const arrTemp = [...arr]
  while (arrTemp.length > 0) {
    // 拿出第一个
    const currentObj = arrTemp.shift()
    // 尝试插入,如果不能插入就放入 arrTemp 队尾
    if (!insert(tree, currentObj)) {
      console.log('插入失败，放入队尾，继续下一个')
      arrTemp.push(currentObj)
    }
  }
  return tree;
}
const insert = (tree, item) => {
  if (item.parent === null) {
    // 找到根节点，创建根节点
    // 不能写 tree = createNode，因为会改变 tree 的指向
    // 改了就无法操作原来的 tree 了
    const newNode = createNode(item)
    Object.assign(tree, newNode)
    return true
  } else {
    // 不是根节点，找父节点
    const parentNode = findNodeById(tree, item.parent)
    // 存在父节点，插入成功
    if (parentNode) {
      const newNode = createNode(item)
      parentNode.children.push(newNode)
      return true
    }
    // 不存在，插入失败
    return false
  }
}
const findNodeById = (tree, id) => {
  if (tree.id === id) {
    return tree
  } else if (tree.children) {
    const {children} = tree
    for (let i = 0; i < children.length; i++) {
      // 递归子节点，找 node
      const result = findNodeById(children[i], id)
      if (result) {return result}
    }
  }
  return null
}
const createNode = item => {
  return {
    ...item,
    children: []
  }
}
console.log(array2tree(array))