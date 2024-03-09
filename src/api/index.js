import request from '@/utils/request'

export const utils = {
  name: '基础',
  path: '/utils',
  ethno: function() {
    return request({
      url: this.path + '/ethno',
      method: 'get'
    })
  }
}
export const exam = {
  name: '体检',
  path: '/exam',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  save: function save(data) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: null,
      data: data
    })
  },
  elder: {
    name: '老年人体检',
    path: '/exam_elder',
    list: function(params) {
      return request({
        url: this.path + '/query',
        method: 'get',
        params: params
      })
    },
    read: function(query) {
      return request({
        url: this.path + '/read',
        method: 'post',
        params: query
      })
    },
    save: function(data, query) {
      return request({
        url: this.path + '/save',
        method: 'post',
        params: query,
        data: data
      })
    }
  }
}

export const patient = {
  name: '病人',
  path: '/patient',
  list: function(query) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: query
    })
  },
  save: function(data) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: null,
      data: data
    })
  },
  elder: {
    name: '老年病人',
    path: '/patient_elder',
    list: function(params) {
      return request({
        url: this.path + '/query',
        method: 'get',
        params: params
      })
    },
    save: function save(data) {
      return request({
        url: this.path + '/save',
        method: 'post',
        params: null,
        data: data
      })
    }
  }
}

export const elder = {
  name: '老年人问卷',
  path: '/elder',
  list: function(query) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: query
    })
  },
  save: function(data, params = null) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: params,
      data: data
    })
  },
  read: function(params) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: params
    })
  },
  tcm: {
    name: '老年人中医体质辨识',
    path: '/elder_tcm',
    list: function(params) {
      return request({
        url: this.path + '/query',
        method: 'get',
        params: params
      })
    },
    save: function save(data) {
      return request({
        url: this.path + '/save',
        method: 'post',
        params: null,
        data: data
      })
    }
  },
  selfcare: {
    name: '老年人自理能力评估',
    path: '/elder_selfcare',
    list: function(params) {
      return request({
        url: this.path + '/query',
        method: 'get',
        params: params
      })
    },
    save: function save(data) {
      return request({
        url: this.path + '/save',
        method: 'post',
        params: null,
        data: data
      })
    }
  }
}

export const hypertension = {
  name: '高血压慢病随访',
  path: '/hypertension',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  save: function(data) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: null,
      data: data
    })
  }
}

export const diabetes = {
  name: '糖尿病慢病随访',
  path: '/diabetes',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  save: function(data) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: null,
      data: data
    })
  }
}

export const region = {
  name: '归属地',
  path: '/region',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  subsets: function(params) {
    return request({
      url: this.path + '/subsets',
      method: 'get',
      params: params
    })
  },
  read: function(params) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: params
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  }
}

export const user = {
  name: '用户',
  path: '/user',
  login: function(data) {
    return request({
      url: this.path + '/login',
      method: 'post',
      data: data
    })
  },
  logout: function() {
    return request({
      url: this.path + '/logout',
      method: 'get'
    })
  },
  list: function(query) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: query
    })
  },
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  }
}

export const org = {
  name: '机构',
  path: '/org',
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  }
}

export const office = {
  name: '科室',
  path: '/office',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  }
}

export const pkg = {
  name: '套餐',
  path: '/package',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  },
  delete: function(query) {
    return request({
      url: this.path + '/del',
      method: 'get',
      params: query
    })
  }
}

export const combo = {
  name: '组合',
  path: '/combo',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  },
  delete: function(query) {
    return request({
      url: this.path + '/del',
      method: 'get',
      params: query
    })
  },
  items: function(query) {
    return request({
      url: this.path + '/items',
      method: 'get',
      params: query
    })
  },
  item_save: function(data, query) {
    return request({
      url: this.path + '/item_save',
      method: 'post',
      params: query,
      data: data
    })
  },
  item_delete: function(query) {
    return request({
      url: this.path + '/item_delete',
      method: 'get',
      params: query
    })
  }
}

export const item = {
  name: '项目',
  path: '/item',
  list: function(params) {
    return request({
      url: this.path + '/query',
      method: 'get',
      params: params
    })
  },
  read: function(query) {
    return request({
      url: this.path + '/read',
      method: 'get',
      params: query
    })
  },
  save: function(data, query) {
    return request({
      url: this.path + '/save',
      method: 'post',
      params: query,
      data: data
    })
  }
}
