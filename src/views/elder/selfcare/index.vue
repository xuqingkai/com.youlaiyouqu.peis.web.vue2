<template>
  <div class="app-container">
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
      <el-table-column align="center" label="体检号">
        <template slot-scope="scope">
          <span @click="showData(scope.row.elder_key)">{{ scope.row.exam.exam_no }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.patient.real_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.patient.gender }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="年龄">
        <template slot-scope="scope">
          {{ scope.row.exam.age }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="生日">
        <template slot-scope="scope">
          {{ scope.row.patient.birthday }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="180" label="证件">
        <template slot-scope="scope">
          {{ scope.row.patient.idcard_no }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="体检日期" width="200">
        <template slot-scope="scope">
          {{ scope.row.exam.exam_date }}
        </template>
      </el-table-column>
      <el-table-column label="得分" width="55">
        <template slot-scope="scope">{{ scope.row.score }}</template>
      </el-table-column>
      <el-table-column label="结果" width="55">
        <template slot-scope="scope">{{ scope.row.result }}</template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :page-size="per_page" :total="total" :current-page="current_page" @current-change="loadData" />
  </div>
</template>

<script>
import { query } from '@/api/elder_selfcare'

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
      query({ page: this.current_page, page_size: this.per_page }).then(response => {
        this.list = response.data.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'elder.selfcare.save', query: { key: key }})
    }
  }
}
</script>
