import request from '@/utils/request'

export function query(query) {
  return request({
    url: '/elder/query',
    method: 'get',
    params: query
  })
}
export function save(data) {
  return request({
    url: '/elder/save',
    method: 'post',
    params: null,
    data: data
  })
}
