import request from '@/utils/request'

export function index(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function query(params) {
  return request({
    url: '/exam_elder/query',
    method: 'get',
    params
  })
}
export function save(data) {
  return request({
    url: '/exam_elder/save',
    method: 'post',
    params: null,
    data: data
  })
}
