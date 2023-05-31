const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    exam_no:'23053110001',
    today_no:'1',
    exam_type:'老年人查体',
    exam_name:'测试员',
    exam_sex:'男',
    exam_age:'66',
    exam_birthday:'1955-05-05',
    exam_region:'大张庄',
    exam_idcard_no:'@id',
    manbing:'高、糖、肺、神、脑、冠',
    exam_status:'10/15',
    wenzhen_status:'√',
    upload_status: 'success',
    upload_status_text: '成功',
    exam_time:'2023-05-31 08:16:17',
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
