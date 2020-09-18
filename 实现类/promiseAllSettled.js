const task1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 300)
})
const task2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 300)
})
const task3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3)
  }, 300)
})

Promise.allSettled2 = function (promiseList) {
  const x = (promiseList) =>
    promiseList.map(promise => promise.then((value) => ({
      status: 'ok',
      value
    }), (reason) => ({
      status: 'not ok',
      reason
    })))
  return Promise.all(x(promiseList))
}

Promise.allSettled2([
  task1(), task2(), task3()
]).then(result => {
  console.log(result)
}, reason => {
  console.log(reason)
})
