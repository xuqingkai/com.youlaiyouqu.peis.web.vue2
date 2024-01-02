<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="标识">
        <el-input v-model="detail.item_key" />
      </el-form-item>
      <el-form-item label="代码">
        <el-input v-model="detail.code" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="detail.name" />
      </el-form-item>
      <el-form-item label="简称">
        <el-input v-model="detail.alias_name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="单位名称/符号">
        <el-input v-model="detail.unit_name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="正常值下限">
        <el-input v-model="detail.min_normal_value" />
      </el-form-item>
      <el-form-item label="正常值上限">
        <el-input v-model="detail.max_normal_value" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="测量值下限">
        <el-input v-model="detail.min_value" />
      </el-form-item>
      <el-form-item label="测量值上限">
        <el-input v-model="detail.max_value" />
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
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as api from '@/api'
export default {
  data() {
    return {
      detail: {}
    }
  },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      this.loading = true
      var query = this.$route.query
      api.item.read({ key: query.key }).then(response => {
        this.detail = response.data
        this.loading = false
      })
    },
    saveData() {
      api.item.save(this.detail, { key: this.$route.query.key }).then(response => {
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

