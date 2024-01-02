import request from '@/utils/request'

export const tt = {
  name1: 'zhao',
  function1: function(query1) {
    return request({
      url: '/region/subsets',
      method: 'get',
      params: query1
    })
  }
}

