import request from '@/utils/request'

export function query(query) {
  return request({
    url: '/package/query',
    method: 'get',
    params: query
  })
}
export function save(data, params = null) {
  return request({
    url: '/package/save',
    method: 'post',
    params: params,
    data: data
  })
}
export function read(params) {
  return request({
    url: '/package/read',
    method: 'get',
    params: params
  })
}
