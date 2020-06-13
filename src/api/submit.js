import request from '@/utils/request'

export function scoreApplyAdd(data) {
  return request({
    url: '/scoreapply/add',
    method: 'post',
    data
  })
}

export function ActivityAdd(data) {
  return request({
    url: '/activity/add',
    method: 'post',
    data
  })
}

export function ProductAdd(data) {
  return request({
    url: '/product/add',
    method: 'post',
    data
  })
}

export function UserAdd(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}

export function getMyInfor() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
export function EditAdmin(data) {
  return request({
    url: '/infor/update',
    method: 'post',
    data
  })
}
