<template>
  <div class="app-container">
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
      <el-table-column align="center" label="标识">
        <template slot-scope="scope">
          <span @click="readData(scope.row.combo_key)">{{ scope.row.combo_key }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="排序">
        <template slot-scope="scope">
          {{ scope.row.sortid }}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="55" type="expand">
        <template slot-scope="scope">
          <span v-for="(item, index) in scope.row.item" :key="'item' + index">
            {{ item.name }}【{{ item.code }}】
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { query } from '@/api/combo'

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
      query({ item: 1 }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    readData(key) {
      this.$message(key)
      this.$router.push({ name: 'combo.save', query: { key: key }})
    }
  }
}
</script>
