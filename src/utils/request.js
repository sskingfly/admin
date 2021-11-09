import axios from 'axios'
// import { Message } from 'element-ui'
// 配置aixos对象
const service = axios.create({
  // baseURL: '/api'
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
}, err => {
  Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use(response => {
  console.log(response)
  return response
}, err => {
  // Message({
  //   type: 'error',
  //   message: '网络请求失败'
  // })
  Promise.reject(err)
})

export default service