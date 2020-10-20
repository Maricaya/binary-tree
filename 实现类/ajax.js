// 简洁版 jsonp
ajax({
  url: 'http://ux.lezhixing.com.cn/mock/373/table',
  method: 'GET',
  data: {},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()

ajax({
  url: 'http://ux.lezhixing.com.cn/mock/385/region/schedule/role/add.do',
  method: 'POST',
  data: {userId: 1,role: 1},
  timeout: 2000
}).then((data) => {
  console.log(data)
}).catch()
/**
 * `http`请求
 * @dec 适用`GET`和`POST`一样的拼接参数传参
 * @param {"GET"|"POST"} method 请求方法
 * @param {string} url 请求地址
 * @param {object} data 请求参数
 * @param {number} timeout 超时时间
 */
function ajax({method, url, data, timeout }) {
  const XHR = new XMLHttpRequest();
  /** 请求参数 */
  let sendData = "";
  // 解析对象传参 &a=1&b=2&c=3
  for (const key in data) {
    sendData += "&" + key + "=" + data[key];
  }
  switch (method) {
    case "GET":
      url = `${url}?${sendData}`;
      sendData = null;
      break;
    case "POST":
      if (sendData) {
        sendData = sendData.slice(1);
      }
      break;
  }
  return new Promise(((resolve, reject) => {
    XHR.open(method, url, true);
    XHR.timeout = timeout;
    XHR.onreadystatechange = function () {
      if (XHR.readyState === 4) {
        if ((XHR.status >= 200 && XHR.status < 300) || XHR.status === 304) {
          resolve(XHR.response);
        } else {
          reject(XHR);
        }
      }
    }
    XHR.send(sendData);
  }))
}

