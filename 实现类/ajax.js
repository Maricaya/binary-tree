// 简洁版 jsonp
ajax({
  url: 'http://ux.lezhixing.com.cn/mock/286/jw/schedule/filter/query.do',
  method: 'GET',
  data: {type: 'student'},
  timeout: 2000
}).then((data) => {
  console.log(data)
})

ajax({
  url: 'http://ux.lezhixing.com.cn/mock/385/region/schedule/role/add.do',
  method: 'POST',
  data: {userId: 1, role: 1},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()

// //请求数据
ajax({
  url: 'https://photo.sina.cn/aj/index',
  method: 'JSONP',
  data: {page: 1, cate: 'recommend'}
}).then(data => {
  console.log(data)
})

function handleData (data) {
  let sendData = ''
  for (const dataKey in data) {
    sendData += `&${dataKey}=${data[dataKey]}`
  }
  sendData = sendData.slice(1)
  return sendData
}

function ajax({url, method, data, timeout, callback = 'callback'}) {
  // a=123&b=456
  if (method === 'JSONP') {
    data.callback = callback
    let sendData = handleData(data)
    let script = document.createElement('script')
    script.src = url + '?' + sendData
    console.log(script) // https://photo.sina.cn/aj/index?page=1&cate=recommend&callback=jsoncallback
    document.body.appendChild(script)
    return new Promise((resolve, reject) => {
      window[callback] = (value) => {
        resolve(value)
        //移除script元素
        script.parentNode.removeChild(script)
      }
    })
  }
  return new Promise(((resolve, reject) => {
    let sendData = handleData(data)
    if (method === 'GET') {
      url += '?' + sendData
      sendData = null
    }
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.timeout = timeout
    xhr.send(sendData);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) { resolve(xhr.response) } else { reject(xhr) }
      }
    }
  }))
}

