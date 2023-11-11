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
    url: '/patient_elder/query',
    method: 'get',
    params: query
  })
}
export function save(data) {
  return request({
    url: '/patient_elder/save',
    method: 'post',
    params: null,
    data: data
  })
}
