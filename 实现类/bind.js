// 1. bind 最简单实现
// function bind (asThis) {
//     const fn = this
//     return function() {
//         return fn.call(asThis)
//     }
// }
// 2. 绑定参数
// function bind (asThis, ...args) {
//     const fn = this
//     return function(...arg2) {
//         return fn.call(asThis, ...args, ...arg2)
//     }
// }
// 3. 看 MDN 上的答案，兼容 IE
// - 不支持 const: 使用 var
// - 不支持 ... 使用 slice 获取
// var slice = Array.prototype.slice;
// function bind (asThis) {
//     var args = slice.call(arguments, 1);
//     var fn = this;
//     if (typeof fn !== 'function') {
//         throw new Error('只有函数才能调用 bind！')
//     }
//     return function() {
//         var args2 = slice.call(arguments, 0);
//         return fn.apply(asThis, args.concat(args2))
//     }
// }
// 4. 支持 new 
// 当你写 new 的时候，实际上是写了 4 行代码：
/* 
var temp = {};
temp.__proto__ = fn.prototype;
fn.call(temp, 'x'); // 生成的临时对象作为 this 调用 fn
return this // 把 fn 的返回值作为 this，返回出去
*/
var slice = Array.prototype.slice;
function bind (asThis) {
    var args = slice.call(arguments, 1);
    var fn = this;
    if (typeof fn !== 'function') {
        throw new Error('只有函数才能调用 bind！')
    }
    function resultFn() {
        var args2 = slice.call(arguments, 0);
        // 是不是用 new 调用的，当前函数 是不是 resulFn 构造出来的
        //  ? this : asThis
        return fn.apply(
            this instanceof resultFn
            ? this
            : asThis,
            args.concat(args2))
    }
    // 绑定原型上的函数
    resultFn.prototype = fn.prototype;
    return resultFn;
}
Function.prototype.bind2 = bind

// 1. 测试代码
const fn1 = function() {
    return this;
}
const newFn1 = fn1.bind2({name: 'frank'});
console.log(newFn1())
// 2. 测试代码
const fn2 = function(...args) {
    return [this, ...args];
}
const newFn2 = fn2.bind2({name: 'frank'}, 1, 2);
console.log(newFn2())
// 3. 连续传参
const antherFn2 =  fn2.bind({name: 'frank'}, 1, 2, 3)
console.log(antherFn2(4))
// 4. new
const fn4 = function(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
}
const fn5 = fn4.bind(undefined, 'x', 'y')
const object = new fn5();
console.log(object)
console.log(global.p1)
