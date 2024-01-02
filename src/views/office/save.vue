<template>
  <div class="app-container">
    <el-form ref="form" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="detail.name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="代码">
        <el-input v-model="detail.code" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="联系人">
        <el-input v-model="detail.contact_name" />
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
        name: '',
        code: '',
        contact_name: '',
        telephone: '',
        address: ''
      }
    }
  },
  mounted() { },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      api.office.read({
        key: this.$route.query.key
      }).then(response => {
        if (response.data) {
          this.detail = response.data
        }
      })
    },
    saveData() {
      api.office.save(this.detail, {
        key: this.$route.query.key
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

