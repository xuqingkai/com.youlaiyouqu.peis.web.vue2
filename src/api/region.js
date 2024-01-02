import request from '@/utils/request'

export function index(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function query(query) {
  return request({
    url: '/region/query',
    method: 'get',
    params: query
  })
}
export function subsets(query) {
  return request({
    url: '/region/subsets',
    method: 'get',
    params: query
  })
}
export function read(query) {
  return request({
    url: '/region/read',
    method: 'get',
    params: query
  })
}
