import request from '@/utils/request'

export class region {
  query(query) {
    return request({
      url: '/region/subsets',
      method: 'get',
      params: query
    })
  }
}

export function region_query(query) {
  return request({
    url: '/region/subsets',
    method: 'get',
    params: query
  })
}
export function region_subsets(query) {
  return request({
    url: '/region/subsets',
    method: 'get',
    params: query
  })
}
export function region_doctor(query) {
  return request({
    url: '/region/doctor',
    method: 'get',
    params: query
  })
}
