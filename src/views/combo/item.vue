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
          {{ scope.row.item_key }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="英文名">
        <template slot-scope="scope">
          <el-input v-model="scope.row.item_code" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.item_name" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="别称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.alias_name" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="单位" width="auto">
        <template slot-scope="scope">
          <el-input v-model="scope.row.unit_name" style="width: 80px" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="正常值下限">
        <template slot-scope="scope">
          <el-input v-model="scope.row.min_normal_value" style="width: 100px" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="正常值上限">
        <template slot-scope="scope">
          <el-input v-model="scope.row.max_normal_value" style="width: 100px" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="small" icon="el-icon-top" />
            <el-button size="small" icon="el-icon-bottom" />
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.combo_key)" />
            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteData(scope.row.combo_key)" />
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
      detail: [],
      list: [],
      listLoading: true
    }
  },
  created() {
    this.listData()
  },
  methods: {
    listData() {
      this.listLoading = true
      api.combo.read({ key: this.$route.query.key, item: 1 }).then(response => {
        this.detail = response.data
        this.list = response.data.item
        this.listLoading = false
      })
    },
    showData(key) {
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
