<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="体检类型">
        <el-select v-model="detail.type" placeholder="请选择">
          <el-option label="一般查体" value="health" />
          <el-option label="老年人查体" value="elder" />
        </el-select>
      </el-form-item>
      <el-form-item label="体检套餐">
        <el-select v-model="detail.package_code" placeholder="请选择">
          <el-option label="老年人公卫" value="elder" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="detail.real_name" @blur="real_name_blur" />
      </el-form-item>
      <el-form-item label="所属">
        <el-select v-model="detail.region_code" placeholder="请选择" @change="region_change">
          <el-option v-for="item in regions" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="性别">
        <el-radio-group v-model="detail.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="民族">
        <el-select v-model="detail.ethno" placeholder="请选择">
          <el-option v-for="item in ethno_list" :key="item.code" :label="item.code + '.' + item.name" :value="item.name" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="出生日期">
        <el-date-picker v-model="detail.birthday" type="date" placeholder="请选择" lang="cn" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="detail.age" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="证件号码">
        <el-input v-model="detail.idcard_no" />
      </el-form-item>
      <el-form-item label="户籍住址">
        <el-input v-model="detail.idcard_address" />
      </el-form-item>
    </el-form>
    <el-form ref="form" :inline="true" label-width="120px">
      <el-form-item label="联系方式">
        <el-input v-model="detail.mobiphone" />
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="detail.contact_name" />
      </el-form-item>
      <el-form-item label="联系人电话">
        <el-input v-model="detail.telephone" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="现居住址">
        <el-input v-model="detail.address" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="慢病管理">
        <el-checkbox v-model="detail.hypertension" true-label="1" false-label="0">高血压</el-checkbox>
        <el-checkbox v-model="detail.diabetes" true-label="1" false-label="0">糖尿病</el-checkbox>
        <el-checkbox v-model="detail.phthisis" true-label="1" false-label="0">肺结核</el-checkbox>
        <el-checkbox v-model="detail.psychosis" true-label="1" false-label="0">精神病</el-checkbox>
        <el-checkbox v-model="detail.coronary" true-label="1" false-label="0">冠心病</el-checkbox>
        <el-checkbox v-model="detail.apoplexy" true-label="1" false-label="0">脑卒中</el-checkbox>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="责任医生">
        <el-radio-group v-model="detail.user_key">
          <el-radio v-for="item in doctors" :key="item.id" :label="item.user_key">{{ item.nick_name }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item label="备注信息">
        <el-input v-model="detail.remark" type="textarea" />
      </el-form-item>
    </el-form>
    <el-form ref="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="saveData">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as api from '@/api'
import { parseTime } from '@/utils'
import { getRegionCode } from '@/utils/auth'
export default {
  data() {
    return {
      regions: [],
      doctors: [],
      ethno_list: [],
      detail: {
        type: 'elder',
        package: 'elder',
        hypertension: false,
        user_key: '',
        patient: { }
      }
    }
  },
  mounted() {
    window.swipeIDCard = this._swipeIDCard
    this.loadRegion()
    this.loadEthno()
  },
  created() {
    this.readData()
  },
  methods: {
    swipeIDCard() {
      window.external.swipeIDCard('{"name":"test2222222222222222222222"}')
    },
    _swipeIDCard(str) {
      this.detail = Object.assign({}, this.detail, JSON.parse(str))
      return '{"id":0,"code":"SUCCESS","message":"调取成功","data":' + str + ',"datetime":"' + parseTime(new Date(), '{m}-{d} {h}:{i}:{s}') + '"}'
    },
    loadRegion() {
      api.region.subsets({
        code: getRegionCode()
      }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.regions = response.data
        }
        this.listLoading = false
      })
    },
    real_name_blur() {
      // 徐清凯 男 1983-9-15 370831198309155819 汉族 山东省泗水县中册镇徐家庄村113号
      var val = this.detail.real_name.split(' ')
      if (val.length > 3) {
        this.detail.real_name = val[0]
        this.detail.gender = val[1]
        this.detail.birthday = val[2]
        this.detail.age = 2023 - this.detail.birthday.substr(0, 4)
        this.detail.idcard_no = val[3]
        this.detail.ethno = val[4]
        this.detail.idcard_address = val[5]
        this.regions.forEach(region => {
          if (this.detail.idcard_address.indexOf(region.name) >= 0) {
            this.detail.region_code = region.code
          }
        })
      }
    },
    loadEthno() {
      api.utils.ethno().then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.ethno_list = response.data
        }
        this.listLoading = false
      })
    },
    region_change() {
      this.detail.region_name = ''
      for (var i in this.regions) {
        if (this.detail.region_code === this.regions[i].code) {
          this.detail.region_name = this.regions[i].name
        }
      }
      api.region.read({
        code: this.detail.region_code
      }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.$data.doctors = response.data.doctors
          if (this.$data.doctors.length > 0) {
            this.detail.user_key = this.doctors[0].user_key
          } else {
            this.detail.user_key = ''
          }
        }
        this.listLoading = false
      })
    },
    readData() {
      var query = this.$route.query
      this.detail.exam_key = query.key
      api.exam.elder.read({ key: query.key }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else if (response.data) {
          this.detail = response.data
          this.region_change()
        }
      })
    },
    saveData() {
      api.exam.elder.save(this.detail, {
        key: this.detail.exam_key
      }).then(response => {
        if (response.code !== 'SUCCESS') {
          this.$message.error(response.message)
        } else {
          this.$router.push({ name: 'exam.elder' })
        }
        this.listLoading = false
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

