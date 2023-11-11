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
      <el-table-column align="center" label="体检号">
        <template slot-scope="scope">
          {{ scope.row.exam ? scope.row.exam.exam_no : '' }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          <span @click="saveData(scope.row.hypertension_key)">{{ scope.row.patient.real_name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.patient.gender }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="年龄">
        <template slot-scope="scope">
          {{ scope.row.exam ? scope.row.exam.age : '' }}
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
      <el-table-column align="center" prop="created_at" label="随访日期" width="200">
        <template slot-scope="scope">
          {{ scope.row.followup_visit_date }}
        </template>
      </el-table-column>
      <el-table-column label="结果" width="55">
        <template slot-scope="scope">{{ scope.row.followup_visit_result }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { query } from '@/api/hypertension'

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
    saveData(key) {
      this.$message(key)
      this.$router.push({ name: 'hypertension.save', query: { key: key }})
    }
  }
}
</script>
