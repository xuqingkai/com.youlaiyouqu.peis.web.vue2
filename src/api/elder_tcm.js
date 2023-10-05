import request from '@/utils/request'

export function query(query) {
  return request({
    url: '/elder_tcm/query',
    method: 'get',
    params: query
  })
}
export function save(data, params = null) {
  return request({
    url: '/elder_tcm/save',
    method: 'post',
    params: params,
    data: data
  })
}
export function read(params) {
  return request({
    url: '/elder_tcm/read',
    method: 'get',
    params: params
  })
}
