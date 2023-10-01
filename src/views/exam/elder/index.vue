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
      <el-table-column align="center" label="体检类型" width="80" fixed="left">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="体检号" width="120" fixed="left">
        <template slot-scope="scope">
          {{ scope.row.exam_no }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="完成度" width="100">
        <template slot-scope="scope">
          {{ scope.row.finish }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.real_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="年龄">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="100" label="生日">
        <template slot-scope="scope">
          {{ scope.row.birthday }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="所属">
        <template slot-scope="scope">
          {{ scope.row.region.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="180" label="证件">
        <template slot-scope="scope">
          {{ scope.row.idcard_no }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="体检日期" width="200">
        <template slot-scope="scope">
          {{ scope.row.exam_date }}
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
import { query } from '@/api/exam_elder'

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
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      query().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
