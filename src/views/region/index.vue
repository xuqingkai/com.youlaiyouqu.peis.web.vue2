<template>
  <div class="app-container">
    <el-button-group>
      <el-button type="primary" @click="saveData('')">新建</el-button>
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
      <el-table-column align="center" label="所属单位">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="55" type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline>
            <el-form-item label="身高体重">{{ scope.$index }}</el-form-item>
            <el-form-item label="血压">√</el-form-item>
            <el-form-item label="中医体质辨识">√</el-form-item>
            <el-form-item label="自理能力评估">√</el-form-item>
            <el-form-item label="认知功能评估">√</el-form-item>
            <el-form-item label="情感状态评估">√</el-form-item>
            <el-form-item label="心电">√</el-form-item>
            <el-form-item label="B超">√</el-form-item>
            <el-form-item label="尿常规">√</el-form-item>
            <el-form-item label="血常规">√</el-form-item>
            <el-form-item label="血生化">√</el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { region_query, region } from '@/api'

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
  mounted() {
  },
  methods: {
    listData() {
      this.listLoading = true
      region.query({
        code: '370831001'
      }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
