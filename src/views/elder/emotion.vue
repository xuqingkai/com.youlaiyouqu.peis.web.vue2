<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      stripe="true"
      height="800"
      max-height="800"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" type="selection" width="60"></el-table-column>
      <el-table-column align="center" label="体检号" fixed="left">
        <template slot-scope="scope">
          {{ scope.row.exam_no }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="体检类型">
        <template slot-scope="scope">
          {{ scope.row.exam_type }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.exam_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="scope">
          {{ scope.row.exam_sex }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="年龄">
        <template slot-scope="scope">
          {{ scope.row.exam_age }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="生日">
        <template slot-scope="scope">
          {{ scope.row.exam_birthday }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="所属">
        <template slot-scope="scope">
          {{ scope.row.exam_region }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="180" label="证件">
        <template slot-scope="scope">
          {{ scope.row.exam_idcard_no }}
        </template>
      </el-table-column>
      <el-table-column  align="center" label="得分">
        <template slot-scope="scope">
          {{ scope.row.qinggan_score }}
        </template>
      </el-table-column>
      <el-table-column  align="center" label="结果">
        <template slot-scope="scope">
          {{ scope.row.qinggan_result }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="上传" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.upload_status | statusFilter">{{ scope.row.upload_status_text }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="体检日期" width="200">
        <template slot-scope="scope">
          {{ scope.row.exam_time }}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="55" type="expand">
        <template slot-scope="scope">
            <el-form label-position="left" inline>
                <el-form-item label="得分">{{ scope.row.qinggan_1 }}</el-form-item>
            </el-form>
        </template>
    </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

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
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
