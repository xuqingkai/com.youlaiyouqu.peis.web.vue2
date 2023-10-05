import request from '@/utils/request'

export function query(query) {
  return request({
    url: '/diabetes/query',
    method: 'get',
    params: query
  })
}
export function save(data, params = null) {
  return request({
    url: '/diabetes/save',
    method: 'post',
    params: params,
    data: data
  })
}
export function read(params) {
  return request({
    url: '/diabetes/read',
    method: 'get',
    params: params
  })
}
