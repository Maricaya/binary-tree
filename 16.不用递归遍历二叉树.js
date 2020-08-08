const node = (value, left, right) => {
  return {
    value,
    left,
    right
  };
};

const binaryTree = 
node("A", 
  node("B", node("D"), undefined), 
  node("C", 
    node("E", undefined, node("G")), 
    node("F", node("H"), node("J"))
  )
);

const traverseRoodMiddle = (bTree, fn) =>{
  const stack = []
  let current = bTree
  while(stack.length>0 || current){
    if(current){
      // 先一个一个放入 stack
      stack.push(current)
      current = current.left
    }else{
      // 再一个一个拿出来
      current = stack.pop()
      // 在这里搞事情
      fn(current.value)
      current = current.right
    }
  }
}

const result2 = []
traverseRoodMiddle(binaryTree, (v) => {
  result2.push(v)
})
console.log(result2)
