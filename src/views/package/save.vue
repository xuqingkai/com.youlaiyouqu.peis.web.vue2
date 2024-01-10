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
    <el-form ref="form" label-width="120px">
      <el-form-item label="性别要求">
        <el-radio-group v-model="detail.gender">
          <el-radio label="">全部</el-radio>
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="年龄下限(含)">
        <el-input v-model="detail.min_age" />
      </el-form-item>
      <el-form-item label="年龄上限(含)">
        <el-input v-model="detail.max_age" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="排序">
        <el-input v-model="detail.sortid" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="detail.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="组合">
        <el-transfer
          v-model="detail.combo_keys"
          filterable
          target-order="push"
          :titles="['待选组合', '已选组合']"
          :data="combo_list" />
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
        combo_keys: [],
        remark: ''
      },
      combo_list: []
    }
  },
  created() {
    this.loadCombo()
    this.loadData()
  },
  methods: {
    loadCombo() {
      this.loading = true
      api.combo.list({ page_size: 9999}).then(response => {
        this.combo_list = response.data.data.map(item => ({ key: item.combo_key, label: '' + item.name + '(' + item.code + ')' }))
        this.loading = false
      })
    },
    loadData() {
      this.loading = true
      var query = this.$route.query
      api.pkg.read({ key: query.key, combo: 'keys' }).then(response => {
        this.detail = response.data
        this.loading = false
      })
    },
    saveData() {
      api.pkg.save(this.detail, { key: this.detail.package_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

