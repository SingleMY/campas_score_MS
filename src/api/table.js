import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getScoreApplyList(params) {
  return request({
    url: '/score/applylist',
    method: 'get',
    params
  })
}
