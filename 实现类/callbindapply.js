// func.call(asThis, args)
Function.prototype.myCall = function (asThis, ...args) {
  const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  asThis = asThis || window // 如果没有传入this，默认绑定window
  asThis[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
  const result = asThis[fn](...args) // 执行当前函数
  delete asThis[fn] // 删除 fn 属性, 不更改传入的值
  return result
}

// func.apply(asThis, [argsArray])
Function.prototype.myApply = function (asThis, args) {
  const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  asThis = asThis || window // 如果没有传入this，默认绑定window
  asThis[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
  const result = asThis[fn](...args) // 执行当前函数
  delete asThis[fn] // 删除 fn 属性, 不更改传入的值
  return result
}
// function.bind(asThis, arg1, arg2, ...)
Function.prototype.myBind = function (asThis, ...args1) {
  let fn = this
  if (typeof fn !== 'function') {
    throw new Error('只有函数才能调用 bind！')
  }
  function resultFn(...args2) {
    /* 是不是用 new 调用的
    如果是 new 调用的，new 会传进来一个临时对象 temp，作为 this，要使用 new 的 this
      怎么知道一个函数是不是被 new 调用的？

      let fn = function() {console.log(this)}
      fn() // this => Window
      new fn() // this => fn{}

       => 当前函数 是不是 resultFn 构造出来的

        是  - 返回 this
        不是 - 返回asThis
     */
    return fn.apply(this instanceof resultFn ? this
      : asThis, ...args1, ...args2)
  }
  // 绑定原型上的函数
  resultFn.prototype = fn.prototype;
  return resultFn;
}
// ======================= bind new ========================
let fn = function (a) {
  this.a = a
}
console.log(new fn('x')) // {a: 'x'}
/*
当你写 new 的时候，实际上是写了 4 行代码：
  var obj = {};
  obj.__proto__ = fn.prototype;
  fn.call(obj, 'x'); // 生成的临时对象作为 this 调用 fn
  return this // 把 fn 的返回值作为 this，返回出去

  new 会重写 this，所以我们在 bind 中写不写this都一样
* */
let fn2 = fn.bind(undefined, 'y')
console.log(new fn2) // {a: 'y'}
// ======================= new ===========================
// https://muyiy.vip/blog/3/3.5.html#%E5%AE%9A%E4%B9%89
function newFunc(father, ...rest) {
  let result = {};
  result.__proto__ = father.prototype;
  let result2 = father.apply(result, rest);
  if ((typeof result2 === 'object' || typeof result2 === 'function') && result2 !== null) {
    return result2;
  }
  return result;
}
// ======================= 箭头函数 =========================
/*
箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异：

1、函数体内的 this 对象，就是定义时所在的作用域中的 this 值，而不是使用时。

2、不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

3、不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

4、不可以使用 new 命令，因为：

没有自己的 this，无法调用 call，apply。
没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__
* */
// ======================= 下面是测试 =======================
//变更函数调用者示例
function foo() {
  console.log(this.name)
}
// 测试
const obj = {
  name: '写代码像蔡徐抻'
}
foo.myCall(obj)
foo.myApply(obj, [])
console.log(obj)
