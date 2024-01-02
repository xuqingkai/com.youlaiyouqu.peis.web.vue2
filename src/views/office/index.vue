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
      <el-table-column align="center" label="名称">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.office_key)">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="联系人">
        <template slot-scope="scope">
          {{ scope.row.contact_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="电话">
        <template slot-scope="scope">
          {{ scope.row.telephone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="地址">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="small" icon="el-icon-top" />
            <el-button size="small" icon="el-icon-bottom" />
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.office_key)" />
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
      this.listLoading = true
      api.office.list({ page: this.current_page, page_size: this.per_page }).then(response => {
        this.list = response.data.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'office.save', query: { key: key }})
    }
  }
}
</script>
