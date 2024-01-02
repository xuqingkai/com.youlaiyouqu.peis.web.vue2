<template>
  <div class="app-container">
    <el-form ref="form" label-width="120px">
      <el-form-item label="用户名称">
        <el-input v-model="detail.nick_name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="真实姓名">
        <el-input v-model="detail.real_name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="登录账号">
        <el-input v-model="detail.login_name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="登录手机">
        <el-input v-model="detail.login_phone" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="登录邮箱">
        <el-input v-model="detail.login_email" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="账号密码">
        <el-input v-model="detail.password" placeholder="如不修改请留空" />
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
      listLoading: false,
      doctors: [],
      detail: {
        user_key: '',
        nick_name: '',
        real_name: '',
        login_name: '',
        login_phone: '',
        login_email: '',
        password: ''
      }
    }
  },
  mounted() { },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      api.user.read({
        key: this.$route.query.key
      }).then(response => {
        if (response.data) {
          this.detail = response.data
        }
      })
    },
    saveData() {
      api.user.save(this.detail, {
        key: this.detail.user_key
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

