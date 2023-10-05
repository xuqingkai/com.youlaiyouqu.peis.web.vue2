<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="代码">
        <el-input v-model="detail.code" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="detail.name" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="性别要求">
        <el-radio-group v-model="detail.gender">
          <el-radio label="">全部</el-radio>
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="年龄下限(含)">
        <el-input v-model="detail.min_age" />
      </el-form-item>
      <el-form-item label="年龄上限(含)">
        <el-input v-model="detail.max_age" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="排序">
        <el-input v-model="detail.sortid" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="detail.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="组合">
        <el-transfer
          v-model="detail.combo_keys"
          filterable
          :filter-method="filterMethod"
          :titles="['待选组合', '已选组合']"
          filter-placeholder="请输入关键字"
          :data="combo_list">
          <span slot-scope="{ option }">{{ option.name }}({{ option.code }})</span>
        </el-transfer>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="saveData">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { read, save } from '@/api/package'
import { query } from '@/api/combo'

export default {
  data() {
    return {
      detail: {},
      combo_list: [
        { key: 'combo1', name: '体征', code: 'body' },
        { key: 'combo2', name: '血压', code: 'blood_pressure' },
        { key: 'combo3', name: '血常规', code: 'urine' },
        { key: 'combo4', name: '尿常规', code: 'blood' }
      ],
      filterMethod(query, item) {
        for (var i in item) {
          if (item[i].indexOf(query) > -1) { return true }
        }
        return false
      }
    }
  },
  created() {
    // this.loadCombo()
    this.readData()
  },
  methods: {
    loadCombo() {
      this.loading = true
      query().then(response => {
        this.combo_list = response.data
        this.loading = false
      })
    },
    readData() {
      this.loading = true
      var query = this.$route.query
      read({ key: query.key, combo: 'keys' }).then(response => {
        this.detail = response.data
        this.loading = false
      })
    },
    saveData() {
      save(this.detail, { key: this.detail.package_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

