import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/csms/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/csms/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/csms/user/logout',
    method: 'post'
  })
}
