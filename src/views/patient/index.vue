<template>
  <div class="app-container">
    <el-button-group>
      <el-button type="primary" @click="showData('')">新建</el-button>
    </el-button-group>
    <el-table
      v-loading="loading"
      :data="list"
      element-loading-text="Loading"
      :stripe="true"
      max-height="800"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" type="selection" width="60" />
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.package_key)">{{ scope.row.real_name }}</el-link>
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
          {{ scope.row.region?scope.row.region.name:scope.row.region_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="180" label="证件">
        <template slot-scope="scope">
          {{ scope.row.idcard_no }}
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
    <el-pagination layout="prev, pager, next" :page-size="per_page" :total="total" :current-page="current_page" @current-change="loadData" />
  </div>
</template>

<script>
import { query } from '@/api/patient'

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
      loading: true
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData(page) {
      this.current_page = page
      this.loading = true
      query({ page: this.current_page, page_size: this.per_page }).then(response => {
        this.list = response.data.data
        this.loading = false
      })
    },
    showData(key) {
      this.$message(key)
      this.$router.push({ name: 'patient.save', query: { key: key }})
    }
  }
}
</script>
