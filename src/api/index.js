import request from '../utils/request'

export const Login = (params) => {
  return request({
    method: 'post',
    url: '/login',
    data: params
  })
}