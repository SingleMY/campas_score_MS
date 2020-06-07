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

export function scoreApplyDelete(data) {
  return request({
    url: '/scoreapply/delete',
    method: 'post',
    data
  })
}

export function scoreApplyUpdate(data) {
  return request({
    url: '/scoreapply/update',
    method: 'post',
    data
  })
}

export function getActivityList(params) {
  return request({
    url: '/activity/list',
    method: 'get',
    params
  })
}

export function ActivityUpdate(data) {
  return request({
    url: '/activity/update',
    method: 'post',
    data
  })
}
export function ActivityDelete(data) {
  return request({
    url: '/activity/delete',
    method: 'post',
    data
  })
}

export function getProductionList(params) {
  return request({
    url: '/production/list',
    method: 'get',
    params
  })
}

export function ProductionUpdate(data) {
  return request({
    url: '/production/update',
    method: 'post',
    data
  })
}
export function ProductionDelete(data) {
  return request({
    url: '/production/delete',
    method: 'post',
    data
  })
}

export function getStudentList(params) {
  return request({
    url: '/student/list',
    method: 'get',
    params
  })
}

export function StudentUpdate(data) {
  return request({
    url: '/student/update',
    method: 'post',
    data
  })
}
export function StudentDelete(data) {
  return request({
    url: '/student/delete',
    method: 'post',
    data
  })
}

export function getBusinessList(params) {
  return request({
    url: '/business/list',
    method: 'get',
    params
  })
}

export function BusinessUpdate(data) {
  return request({
    url: '/business/update',
    method: 'post',
    data
  })
}
export function BusinessDelete(data) {
  return request({
    url: '/business/delete',
    method: 'post',
    data
  })
}
