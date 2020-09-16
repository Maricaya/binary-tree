/**
 * 最近碰到的一道笔试题，题目大概如下：

请实现一个cacheRequest方法，保证当前ajax请求相同资源时，真实网络层中，实际只发出一次请求（假设已经存在request方法用于封装ajax请求）

一开始看到第一感觉是，设个Http Headercache-control，把expire调大，不就自然会找浏览器缓存拿了。但是看到后面说提供自带的request方法和只发起一次ajax。那估计是想让笔者在业务层自己用代码解决这个cache问题。
接下来，我们抛开实际场景价值，思考下怎样实现。
一般我们很简单的就可以得出以下思路：

利用闭包或者模块化的设计，引用一个Map，存储对应的缓存数据。
每次请求检查缓存，有则返回缓存数据，无则发起请求。
请求成功后，再保存缓存数据并返回，请求失败则不缓存。

 */
// 构建Map，用作缓存数据
const dict = new Map()
// 这里简单的把url作为cacheKey
const cacheRquest = (url) => {
  if (dict.has(url)) {
    return Promise.resolve(dict.get(url))
  } else {
    // 无缓存，发起真实请求，成功后写入缓存
    return request(url).then(res => {
      dict.set(url, res)
      return res
    }).catch(err => Promise.reject(err))
  }
}
