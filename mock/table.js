const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    exam_no:'23053110000',
    today_no:'1',
    exam_idcard_no:'@id',
    exam_status:'10/15',
    wenzhn_status:'√',
      
      
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['成功', '待上传', '失败'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
