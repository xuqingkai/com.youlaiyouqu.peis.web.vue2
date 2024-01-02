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
    <el-pagination layout="prev, pager, next" :page-size="per_page" :total="total" :current-page="current_page" @current-change="loadData" />
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
      total: 0,
      per_page: 0,
      current_page: 0,
      list: [],
      listLoading: false
    }
  },
  created() {
    this.loadData()
  },
  mounted() {
  },
  methods: {
    loadData(page) {
      this.current_page = page
      api.user.list({ page: this.current_page, page_size: this.per_page }).then(response => {
        this.list = response.data.data
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'user.save', query: { key: key }})
    }
  }
}
</script>
