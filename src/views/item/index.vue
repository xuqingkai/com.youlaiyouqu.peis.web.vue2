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
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          <span @click="showData(scope.row.item_key)">{{ scope.row.item_key }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="英文名">
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
          {{ scope.row.alias_name }}
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
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.item_key)" />
            <el-button type="danger" size="small" icon="el-icon-delete" />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50" />
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
      api.item.list().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'item.save', query: { key: key }})
    }
  }
}
</script>
