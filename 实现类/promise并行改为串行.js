// 并行改为串行
// 方法1
function runPromiseByQueue(myPromises) {
  return myPromises.reduce((res, cur) =>
    res.then(() =>
      cur()
    ), Promise.resolve())
}
// 方法2
async function runPromiseByQueue_1(myPromises) {
  for (const value of myPromises) {
    await value()
  }
}

const createPromise = (time, id) => () => 
  new Promise(resolve => 
    setTimeout(() => {
      console.log('promise', id)
      resolve()
    }, time)
)

runPromiseByQueue([
  createPromise(3000, 4),
  createPromise(2000, 2),
  createPromise(1000, 1)
])

runPromiseByQueue_1([
  createPromise(3000, 4),
  createPromise(2000, 2),
  createPromise(1000, 1)
])
