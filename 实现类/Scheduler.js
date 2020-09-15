// 实现一个带并发限制的异步调度器 `Scheduler`
// 保证同时运行的任务最多有两个完善 `Scheduler` 类
class Scheduler {
  constructor() {
    this.tasks = [], // 待运行的任务
    this.usingTask = [] // 正在运行的任务
  }
  // promiseCreator 是一个异步函数，return Promise
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      // 挂载 resolve
      promiseCreator.resolve = resolve
      if (this.usingTask.length < 2) {
        this.usingRun(promiseCreator)
      } else {
        this.tasks.push(promiseCreator)
      }
    })
  }

  usingRun(promiseCreator) {
    // 推入顺序
    this.usingTask.push(promiseCreator)
    // time 之后
    promiseCreator().then(() => {
      promiseCreator.resolve()
      this.usingMove(promiseCreator)
      if (this.tasks.length > 0) {
        this.usingRun(this.tasks.shift())
      }
    })
  }

  usingMove(promiseCreator) {
    let index = this.usingTask.findIndex(promiseCreator)
    this.usingTask.splice(index, 1)
  }
}

const scheduler = new Scheduler()

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(400, 4)
addTask(200, 2)
addTask(300, 3)
addTask(100, 1)

// 2, 4, 3, 1
