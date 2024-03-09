<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="代码">
        <el-input v-model="detail.code" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="detail.name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="排序">
        <el-input v-model="detail.sortid" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="医生">
        <el-checkbox-group v-model="detail.user_keys">
          <el-checkbox v-for="item in doctors" :key="item.id" :label="item.user_key">{{ item.nick_name }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="项目">
        <el-transfer
          v-model="detail.item_keys"
          filterable
          target-order="push"
          :titles="['待选项目', '已选项目']"
          :data="item_list" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="detail.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="saveData">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as api from '@/api'

export default {
  data() {
    return {
      detail: {
        code: '',
        name: '',
        sortid: 0,
        user_keys: [],
        item_keys: [],
        remark: ''
      },
      item_list: [],
      doctors: [{ id: '', user_key: '', nick_name: '' }]
    }
  },
  created() {
    this.loadItem()
    this.loadDoctors()
    this.readData()
  },
  methods: {
    loadItem() {
      this.loading = true
      api.item.list({ page_size: 9999 }).then(response => {
        this.item_list = response.data.data.map(item => ({ key: item.item_key, label: '' + item.name + '(' + item.code + ')' }))
      })
    },
    loadDoctors() {
      api.user.list({ page_size: 11111 }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.doctors = response.data.data
        }
      })
    },
    readData() {
      this.loading = true
      var query = this.$route.query
      if (query.key) {
        api.combo.read({ key: query.key }).then(response => {
          this.detail = response.data
        })
      }
    },
    saveData() {
      api.combo.save(this.detail, { key: this.$route.query.key }).then(response => {
        this.$message(response.message)
      })
    }
  }
}
</script>

<style scoped>
.el-transfer-panel{
  width: 400px;
}
</style>

