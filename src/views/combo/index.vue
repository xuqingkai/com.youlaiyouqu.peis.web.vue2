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
          <el-link @click="showData(scope.row.combo_key)">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="排序">
        <template slot-scope="scope">
          {{ scope.row.sortid }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="55" type="expand">
        <template slot-scope="scope">
          <span v-for="(item, index) in scope.row.item" :key="'item' + index">
            {{ item.name }}【{{ item.code }}】
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="small" icon="el-icon-top" />
            <el-button size="small" icon="el-icon-bottom" />
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.combo_key)" />
            <el-button type="primary" size="small" icon="el-icon-s-operation" @click="listItem(scope.row.combo_key)" />
            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteData(scope.row.combo_key)" />
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
      listLoading: true
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData(page) {
      this.current_page = page
      this.listLoading = true
      api.combo.list({ item: 1, page: this.current_page, page_size: this.per_page }).then(response => {
        this.list = response.data.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'combo.save', query: { key: key }})
    },
    listItem(key) {
      this.$message(key)
      this.$router.push({ name: 'combo.item', query: { key: key }})
    },
    deleteData(key) {
      api.combo.delete({ key: key }).then(response => {
        this.$message(response.message)
      })
      this.$router.push({ name: 'combo' })
    }
  }
}
</script>
