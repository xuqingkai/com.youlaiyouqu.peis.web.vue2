<template>
  <div class="app-container">
    <el-button-group>
      <el-button type="primary" @click="showData('')">新建</el-button>
    </el-button-group>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      :stripe="true"
      height="800"
      max-height="800"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" type="selection" width="60" />
      <el-table-column align="center" label="用户昵称">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.user_key)">{{ scope.row.nick_name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="真实姓名">
        <template slot-scope="scope">
          {{ scope.row.real_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录账号">
        <template slot-scope="scope">
          {{ scope.row.login_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录手机">
        <template slot-scope="scope">
          {{ scope.row.login_phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="登录邮箱">
        <template slot-scope="scope">
          {{ scope.row.login_email }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.user_key)" />
            <el-button type="danger" size="small" icon="el-icon-delete" />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as api from '@/api'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        wait: 'gray',
        fail: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      listLoading: false,
      list: []
    }
  },
  created() {
    this.listData()
  },
  mounted() {
  },
  methods: {
    listData() {
      api.user.list().then(response => {
        this.list = response.data
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'user.save', query: { key: key }})
    }
  }
}
</script>
