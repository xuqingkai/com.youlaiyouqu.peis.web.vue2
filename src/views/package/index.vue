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
      <el-table-column align="center" label="名称">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.package_key)">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="年龄范围">
        <template slot-scope="scope">
          {{ scope.row.min_age }} - {{ scope.row.max_age }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="排序">
        <template slot-scope="scope">
          {{ scope.row.sortid }}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="55" type="expand">
        <template slot-scope="scope">
          <span v-for="(combo, index) in scope.row.combo" :key="'combo' + index">
            【{{ combo.name }}】
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="small" icon="el-icon-top" />
            <el-button size="small" icon="el-icon-bottom" />
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.package_key)" />
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
      list: null,
      listLoading: true
    }
  },
  created() {
    this.listData()
  },
  methods: {
    listData() {
      this.listLoading = true
      api.pkg.list({ combo: 1 }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'package.save', query: { key: key }})
    }
  }
}
</script>
