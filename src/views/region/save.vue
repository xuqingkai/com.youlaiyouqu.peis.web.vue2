<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="归属">
        <el-input v-model="detail.name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="编码">
        <el-input v-model="detail.code" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="医生">
        <el-checkbox-group v-model="detail.users_key">
          <el-checkbox v-for="item in doctors" :key="item.id" :label="item.user_key">{{ item.nick_name }}</el-checkbox>
        </el-checkbox-group>
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
        name: '',
        code: '',
        user_key: '',
        users_key: []
      }
    }
  },
  mounted() { },
  created() {
    this.initData()
    this.readData()
  },
  methods: {
    initData() {
      api.user.list({ page_size: 9999 }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.$data.doctors = response.data.data
        }
      })
    },
    readData() {
      api.region.read({
        code: this.$route.query.code
      }).then(response => {
        if (response.data) {
          this.detail = response.data
          this.detail.users_key = (this.detail.user_key + ',' + this.detail.users_key).split(',')
        }
      })
    },
    saveData() {
      api.region.save({
        code: this.detail.code,
        name: this.detail.name,
        users_key: this.detail.users_key
      }, {
        code: this.$route.query.code
      }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.$router.push({ path: '/admin/region' })
        }
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

