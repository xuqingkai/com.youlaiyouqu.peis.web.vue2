<template>
  <div class="app-container">
    <el-form ref="form" label-width="120px">
      <el-form-item label="机构名称">
        <el-input v-model="detail.name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="机构编码">
        <el-input v-model="detail.code" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="电话">
        <el-input v-model="detail.telephone" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="地址">
        <el-input v-model="detail.address" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="区域代码">
        <el-input v-model="detail.region_code" />
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
      doctors: [],
      detail: {
        key: '',
        name: '',
        code: '',
        telephone: '',
        address: '',
        region_code: ''
      }
    }
  },
  mounted() { },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      api.org.read().then(response => {
        if (response.data) {
          this.detail = response.data
        }
      })
    },
    saveData() {
      api.org.save({
        name: this.detail.name,
        code: this.detail.code,
        telephone: this.detail.telephone,
        address: this.detail.address,
        region_code: this.detail.region_code
      }, {
        key: this.detail.org_key
      }).then(response => {
        this.$message.success(response.message)
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

