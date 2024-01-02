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
      <el-table-column align="center" label="体检号" width="120" fixed="left">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.exam_key)">{{ scope.row.exam_no }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="完成度" width="100">
        <template slot-scope="scope">
          {{ scope.row.finish }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.exam_key)">{{ scope.row.real_name }}</el-link>
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
      <el-table-column align="center" label="所属">
        <template slot-scope="scope">
          {{ scope.row.region ? scope.row.region.name : scope.row.region_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="100" label="生日">
        <template slot-scope="scope">
          {{ scope.row.birthday }}
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link @click="showElder(scope.row.exam_key)">健康体检表</el-link>
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
      api.exam.elder.list({ page: this.current_page, page_size: this.per_page }).then(response => {
        this.total = response.data.total
        this.per_page = response.data.per_page
        this.current_page = response.data.current_page
        this.list = response.data.data
        this.listLoading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'exam.elder.save', query: { key: key }})
    },
    showElder(exam_key) {
      this.$message(exam_key)
      this.$router.push({ name: 'elder.save', query: { exam_key: exam_key }})
    }
  }
}
</script>
