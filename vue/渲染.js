// 1. vue 模板到真实 DOM 渲染的过程
/*
<div id="app">
  {{ message }}
</div>
相当于我们编写如下 render 函数：
render: function (createElement) {
  return createElement('div', {
     attrs: {
        id: 'app'
      },
  }, this.message)
}
*/

function createElement(type, config, children) {
  const props = {};

  for (let propName in config) {
    // 如果对象本身存在该属性值，就copy
    if (Object.prototype.hasOwnProperty.call(config, propName)) {
      props[propName] = config[propName];
    }
  }
}

export default {
  createElement,
}

/*

===============================
中间有一个环节是把模板编译成 render 函数，这个过程我们把它称作编译。
编译过程首先就是对模板做解析，生成 AST
parse：
目标是把 template 模板字符串转换成 AST 树，它是一种用 JavaScript 对象的形式来描述整个模板。

AST 元素节点总共有 3 种类型，
普通元素、表达式、纯文本。

当 AST 树构造完毕，下一步就是 optimize 优化这颗树。

optimize：
为什么要有优化过程，因为我们知道 Vue 是数据驱动，是响应式的，
但是我们的模板并不是所有数据都是响应式的，也有很多数据是首次渲染后就永远不会变化的，
那么这部分数据生成的 DOM 也不会变化，我们可以在 patch 的过程跳过对他们的比对。

codegen：
编译的最后一步就是把优化后的 AST 树转换成可执行的代码

===============================
 最终是通过执行 createElement 方法并返回 vNode，它是一个虚拟 Node。

 Vue 2.0 相比 Vue 1.0 最大的升级就是利用了 Virtual DOM。因此在分析 createElement 的实现前，我们先了解一下 Virtual DOM 的概念。

 Virtual DOM 除了它的数据结构的定义，
 映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。
===============================
_update 把 VNode 渲染成真实的 DOM

* */

// 2.
