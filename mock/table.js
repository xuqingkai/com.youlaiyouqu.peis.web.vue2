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
    manbing:'高、糖、肺、精、脑、冠',
    exam_status:'10/15',
    wenzhen_status:'√',
    upload_status: 'success',
    upload_status_text: '成功',
    exam_time:'2023-05-31 08:16:17',

    zhongyi_score:19,
    zhongyi_shi:'气虚质',
    zhongyi_maosi:'阳虚质、	湿热质',

    zili_shuxi:1,
    zili_chuanyi:2,
    zili_jincan:3,
    zili_ruce:4,
    zili_huodong:5,
    zili_score:15,
    zili_result:'可自理',

    renzhi_dingxiang:1,
    renzhi_jiyi:2,
    renzhi_zhuyi:3,
    renzhi_huiyi:4,
    renzhi_yuyan:5,
    renzhi_score:16,
    renzhi_result:'阳性',

    qinggan_1:3,
    qinggan_score:16,
    qinggan_result:'阳性',

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
