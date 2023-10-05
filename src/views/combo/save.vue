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
    <el-form-item label="排序">
      <el-input v-model="detail.sortid" />
    </el-form-item>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="detail.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="项目">
        <el-transfer
          v-model="detail.item_keys"
          filterable
          :filter-method="filterMethod"
          :titles="['待选项目', '已选项目']"
          filter-placeholder="请输入关键字"
          :data="items">
          <span slot-scope="{ option }">{{ option.name }}({{ option.key }})</span>
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
import { read, save } from '@/api/combo'
import { query } from '@/api/item'

export default {
  data() {
    return {
      detail: {},
      items: [
        { key: 'body_height', name: '身高', code: 'HEIGHT' },
        { key: 'body_weight', name: '体重', code: 'WEIGHT' },
        { key: 'body_waistline', name: '腰围', code: 'WAISTLINE' }
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
    // this.loadItem()
    this.readData()
  },
  methods: {
    loadItem() {
      this.loading = true
      query().then(response => {
        this.items = response.data
        this.loading = false
      })
    },
    readData() {
      this.loading = true
      var query = this.$route.query
      read({ key: query.key, item: 'keys' }).then(response => {
        this.detail = response.data
        this.loading = false
      })
    },
    saveData() {
      save(this.detail, { key: this.detail.combo_key }).then(response => {
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

