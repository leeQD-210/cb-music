import axios from 'axios'
import { message } from 'antd'
export const request = axios.create({
  baseURL: 'http://123.207.32.32:9001/',
  timeout: 10000
})
// 请求拦截处理
request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)
// 相应拦截处理
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          message.error('请求发生错误')
          break
        case 401:
          message.error('访问未授权')
          break
        case 500:
          message.error('服务器错误')
          break
        default:
          message.error('未知错误')
      }
      return err
    }
  }
)
