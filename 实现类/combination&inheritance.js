// 为什么会有类
// 不同对象的属性重复了，就有了类
// 为什么有继承
// 不同类的属性重复了，就有了继承
// 大部分编程技巧，都是为了解决重复。

// 继承
class EventEmitter {
    constructor() {}
    cache = []
    on() {}
    off() {}
}

class Person extends EventEmitter {
    constructor(name) {
        super()
    }
    sayHi(){}
}
const p1 = new Person('p1');
// 继承的问题：如果我需要更多功能怎么办？
// 1. 让 EventEmitter 继承其他类（很奇怪）
// 2. 让 Person 继承两个类 （在 js/java 中是不可以的，c++中可以）
//  都不太好

// 组合，没有固定的写法
class Person {
    eventEmitter = new EventEmitter()
    name
    on(eventName, fn) {
        this.eventEmitter.on(eventName, fn)
    }
}
// 优化代码
class Person {
    name
}
let person1 = new Person('frank')
mixin(person1, new EventEmitter())
// 这里是最简化的 mixin，实际情况会更复杂
function mixin(to, from) {
    for(let key in form) {
        to[key] = form[key]
    }
}
// 组合，不用 class 写 dog
// 一般用组合的时候不用class，组合的缺点是写法太灵活
// 比如 java 程序员认为组合是上面class写法，函数式编程程序员认为是下面这种写法
// 组合优于继承
const createWang = (state) => ({
    wangwang: () => {
        console.log(`汪汪，我是${state.name}`)
    }
})
const createRun = (state) => ({
    run: () => state.position += 1
})
const createDog = (name) => {
    const state = {name, position: 0}
    return Object.assign(
        {},
        createWang(state),
        createRun(state),
    )
}
const dog = createDog('小白')
