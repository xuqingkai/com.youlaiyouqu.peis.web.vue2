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
      <el-table-column align="center" label="所属区域">
        <template slot-scope="scope">
          <el-link @click="showData(scope.row.code)">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="责任医生">
        <template slot-scope="scope">
          <label v-for="item in scope.row.doctors" :key="item.id" :label="item.user_key">{{ item.nick_name }} </label>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button size="small" icon="el-icon-top" />
            <el-button size="small" icon="el-icon-bottom" />
            <el-button type="primary" size="small" icon="el-icon-edit" @click="showData(scope.row.code)" />
            <el-button type="danger" size="small" icon="el-icon-delete" />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { region } from '@/api/index'

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
      list: [
        {
          doctors: []
        }
      ],
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
      region.list({
        code: '370831001'
      }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    showData(code) {
      this.$message(code)
      this.$router.push({ name: 'region.save', query: { code: code }})
    }
  }
}
</script>
