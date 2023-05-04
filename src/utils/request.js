import axios from 'axios'
import { Message } from 'element-ui'

// const baseUrl = 'http://www.shein-shop.top/api'
const baseUrl = 'http://dx.sansheng01.top'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 3 * 1000
})

service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type': 'application/json'
  }

  // const token = window.localStorage.getItem('token');
  // if(token){
  // config.params = {'token':token} //如果要求携带在参数中
  // config.headers.token= token; //如果要求携带在请求头中
  // }
  return config
}, error => {
  Promise.reject(error)
})
 
service.interceptors.response.use(response => {
  //接收到响应数据并成功后的一些共有的处理，关闭loading等
 
  return response
}, error => {
  /***** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message = '连接服务器失败'
  }
 
  Message.error(error.message)
  /***** 处理结束 *****/
  return Promise.resolve(error.response)
})

export default service