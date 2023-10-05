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
          <span @click="readData(scope.row.item_key)">{{ scope.row.item_key }}</span>
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
      <el-table-column align="center" label="简称">
        <template slot-scope="scope">
          {{ scope.row.abbr_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="单位">
        <template slot-scope="scope">
          {{ scope.row.unit_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="正常值范围">
        <template slot-scope="scope">
          {{ scope.row.min_normal_value }} - {{ scope.row.max_normal_value }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="测量值范围">
        <template slot-scope="scope">
          {{ scope.row.min_value }} - {{ scope.row.max_value }}
        </template>
      </el-table-column>
      <el-table-column label="备注" width="55">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { query } from '@/api/item'

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
      query().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    readData(key) {
      this.$message(key)
      this.$router.push({ name: 'item.save', query: { key: key }})
    }
  }
}
</script>
