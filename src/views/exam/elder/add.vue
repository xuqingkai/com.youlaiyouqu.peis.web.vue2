<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="体检类型">
        <el-select v-model="exam.type" placeholder="请选择">
          <el-option label="一般查体" value="health" />
          <el-option label="老年人查体" value="elder" />
        </el-select>
      </el-form-item>
      <el-form-item label="体检套餐">
        <el-select v-model="exam.package" placeholder="请选择">
          <el-option label="老年人公卫" value="elder" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="exam.real_name" />
      </el-form-item>
      <el-form-item label="所属">
        <el-select v-model="exam.region" placeholder="请选择">
          <el-option label="张家村" value="zhang" />
          <el-option label="王家庄" value="wang" />
          <el-option label="李家洼" value="li" />
          <el-option label="赵家屯" value="zhao" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="性别">
        <el-radio-group v-model="exam.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="民族">
        <el-select v-model="exam.ethno" placeholder="请选择">
          <el-option label="汉族" value="han" />
          <el-option label="回族" value="hui" />
          <el-option label="蒙古族" value="menggu" />
          <el-option label="维吾尔族" value="weiwuer" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="出生日期">
        <el-date-picker v-model="exam.birthday" type="date" placeholder="请选择" lang="cn" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="exam.age" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="证件号码">
        <el-input v-model="exam.idcard_no" />
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="exam.idcard_address" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="联系方式">
        <el-input v-model="exam.mobiphone" />
      </el-form-item>
      <el-form-item label="备用电话">
        <el-input v-model="exam.telepphone" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="慢病管理">
        <el-checkbox-group v-model="exam.manbing">
          <el-checkbox label="高血压" name="type" />
          <el-checkbox label="糖尿病" name="type" />
          <el-checkbox label="肺结核" name="type" />
          <el-checkbox label="精神病" name="type" />
          <el-checkbox label="脑卒中" name="type" />
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="exam.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { save } from '@/api/exam_elder'
export default {
  data() {
    return {
      exam: {
        type: 'elder',
        package: 'elder',
        name: '',
        region: '',
        gender: '男',
        ethno: '',
        birthday: '',
        age: '',
        idcard_no: '',
        idcard_address: '',
        mobiphone: '',
        telephone: '',
        manbing: ['高血压'],
        remark: ''
      }
    }
  },
  methods: {
    onSubmit() {
      save(this.exam).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.$router.push({ name: 'exam.elder' })
        }
        this.listLoading = false
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

