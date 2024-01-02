<template>
  <div class="app-container">
    <div style="text-align: center;">
      <h3>老年人生活自理能力评估表</h3>
    </div>
    <table style="text-align: left;">
      <tr>
        <th style="text-align: center;">{{ detail.patient.real_name }}, {{ detail.patient.gender }}, {{ detail.exam.age }}, {{ detail.patient.idcard_no }}, {{ detail.exam.region_name }}</th>
      </tr>
      <tr>
        <th style="text-align: left;">(1)进餐：使用餐具将饭菜送入口、咀嚼、吞咽等活动</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 20px 0;">
          <el-radio-group v-model="detail.eat">
            <el-radio label="0">1.可自理，独立完成(0分)</el-radio>
            <el-radio label="0" disabled>2.轻度依赖(0分)</el-radio>
            <el-radio label="3">3.中度依赖，需要协助，如切碎、搅拌食物等(3分)</el-radio>
            <el-radio label="5">4.不能自理，完全需要帮助(5分)</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th style="text-align: left;">(2)梳洗：梳头、洗脸、刷牙、剃须、洗澡等活动</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 20px 0;">
          <el-radio-group v-model="detail.wash">
            <el-radio label="0">1.可自理，独立完成(0分)</el-radio>
            <el-radio label="1">2.轻度依赖，能独立的洗头、梳头、洗脸、刷牙、剃须等；洗澡需要协助(1分)</el-radio>
            <el-radio label="3">3.中度依赖，在协助下和适当的时间内，能完成部分梳洗活动(3分)</el-radio>
            <el-radio label="7">4.不能自理，完全需要帮助(7分)</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th style="text-align: left;">(3)穿衣：穿衣裤、袜子、鞋子等活动</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 20px 0;">
          <el-radio-group v-model="detail.wear">
            <el-radio label="0">1.可自理，独立完成(0分)</el-radio>
            <el-radio label="0" disabled>2.轻度依赖(0分)</el-radio>
            <el-radio label="3">3.中度依赖，需要协助，在适当的时间内，完成部分穿衣活动(3分)</el-radio>
            <el-radio label="5">4.不能自理，完全需要帮助(5分)</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th style="text-align: left;">(4)如厕：小便、大便等活动及自控</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 20px 0;">
          <el-radio-group v-model="detail.toilet">
            <el-radio label="0">1.可自理，不需要协助、可自控(0分)</el-radio>
            <el-radio label="1">2.轻度依赖，偶尔失禁、但基本上能如厕或使用便具(1分)</el-radio>
            <el-radio label="5">3.中度依赖，经常失禁，在很多提示和协助下尚能如厕或使用便具(5分)</el-radio>
            <el-radio label="10">4.不能自理，完全失禁、完全需要帮助(10分)</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th style="text-align: left;">(5)活动：站立、室内行走、上下楼梯、户外活动</th>
      </tr>
      <tr>
        <td style="text-align: left; padding: 20px 0;">
          <el-radio-group v-model="detail.sport">
            <el-radio label="0">1.可自理，独立完成所有活动(0分)</el-radio>
            <el-radio label="1">2.轻度依赖，借助较小的外力或辅助装置能完成站立、行走、上下楼梯等(1分)</el-radio>
            <el-radio label="5">3.中度依赖，借助较大的外力才能完成站立、行走、不能上下楼梯(5分)</el-radio>
            <el-radio label="10">4.不能自理，卧床不起，活动完全需要帮助(10分)</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td><el-button type="primary" round @click="saveData">{{ getResult() }}</el-button></td>
      </tr>
    </table>
    <table style="display: none;">
      <tr>
        <th colspan="6">{{ detail.patient.real_name }}, {{ detail.patient.gender }}, {{ detail.exam.age }}, {{ detail.patient.idcard_no }}, {{ detail.exam.region_name }}</th>
      </tr>
      <tr>
        <th rowspan="3">评估事项、内容与评分</th>
      </tr>
      <tr>
        <th colspan="5">程度等级</th>
      </tr>
      <tr>
        <th>可自理</th>
        <th>轻度依赖</th>
        <th>中度依赖</th>
        <th>不能自理</th>
        <th>评分</th>
      </tr>
      <tr>
        <th>(1)进餐：使用餐具将饭菜送入口、咀嚼、吞咽等活动</th>
        <td>
          <el-radio v-model="detail.eat" label="0">独立完成<br>0分</el-radio>
        </td>
        <td>
          <el-radio disabled label="0">——<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.eat" label="3">需要协助，如切碎、搅拌食物等<br>3分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.eat" label="5">完全需要帮助<br>5分</el-radio>
        </td>
        <td>{{ detail.eat }}</td>
      </tr>
      <tr>
        <th>(2)梳洗：梳头、洗脸、刷牙、剃须、洗澡等活动</th>
        <td>
          <el-radio v-model="detail.wash" label="0">独立完成<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wash" label="1">能独立的洗头、梳头、洗脸、刷牙、剃须等；洗澡需要协助<br>1分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wash" label="3">在协助下和适当的时间内，能完成部分梳洗活动<br>3分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wash" label="7">完全需要帮助<br>7分</el-radio>
        </td>
        <td>{{ detail.wash }}</td>
      </tr>
      <tr>
        <th>(3)穿衣：穿衣裤、袜子、鞋子等活动</th>
        <td>
          <el-radio v-model="detail.wear" label="0">独立完成<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wear" disabled label="0">——<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wear" label="3">需要协助，在适当的时间内，完成部分穿衣活动<br>3分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.wear" label="5">完全需要帮助<br>5分</el-radio>
        </td>
        <td>{{ detail.wear }}</td>
      </tr>
      <tr>
        <th>(4)如厕：小便、大便等活动及自控</th>
        <td>
          <el-radio v-model="detail.toilet" label="0">不需要协助、可自控<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.toilet" label="1">偶尔失禁、但基本上能如厕或使用便具<br>1分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.toilet" label="5">经常失禁，在很多提示和协助下尚能如厕或使用便具<br>5分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.toilet" label="10">完全失禁、完全需要帮助<br>10分</el-radio>
        </td>
        <td>{{ detail.toilet }}</td>
      </tr>
      <tr>
        <th>(5)活动：站立、室内行走、上下楼梯、户外活动</th>
        <td>
          <el-radio v-model="detail.sport" label="0">独立完成所有活动<br>0分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.sport" label="1">借助较小的外力或辅助装置能完成站立、行走、上下楼梯等<br>1分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.sport" label="5">借助较大的外力才能完成站立、行走、不能上下楼梯<br>5分</el-radio>
        </td>
        <td>
          <el-radio v-model="detail.sport" label="10">卧床不起，活动完全需要帮助<br>10分</el-radio>
        </td>
        <td>{{ detail.sport }}</td>
      </tr>
      <tr>
        <th>总评分</th>
        <td colspan="4">{{ result }} ({{ score }} 分)</td>
        <td>{{ score }}</td>
      </tr>
      <tr>
        <td colspan="6"><el-button type="primary" round @click="saveData">保存</el-button></td>
      </tr>
    </table>
  </div>
</template>
<style>
  .el-row {
    border: 1px solid #EBEEF5;
      border-bottom: none;
      border-right: none;
    &:last-child {
      border-bottom: 1px solid #EBEEF5;
      border-right: 1px solid #EBEEF5;
    }
  }
  .el-col {
    border-right: 1px solid #EBEEF5;
    padding: 5px;
    &:last-child {
      border-right: none;
    }
  }
  table{
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #EBEEF5;
  }
  table th,table td{
    border: 1px solid #EBEEF5;
    padding: 5px;
  }
  table th{
    font-size: 16px;
  }
  table td table th{
    text-align: left;
  }
  table td{
    font-size: 14px;
    color:#606266;
    text-align: center;
  }
  table table{
    margin: -5px;
    border: none;
  }
  .el-radio,.el-checkbox{
    margin-right: 10px;
  }
  .el-radio__label,.el-checkbox__label{
    padding-left: 0;
  }
  .el-checkbox-group{
    display: inline-block;
  }
  .el-input input{
    padding: 0 3px;
    text-align: center;
  }
  img{
    height: 28px;
    width: 80px;
  }
</style>
<script>
import { read, save } from '@/api/elder_selfcare'

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
      detail: {
        exam: {},
        patient: {},
        user: {}
      },
      loading: true
    }
  },
  computed: {
    score: function() {
      return this.detail.eat * 1 + this.detail.wash * 1 + this.detail.wear * 1 + this.detail.toilet * 1 + this.detail.sport * 1
    },
    result: function() {
      var score = this.detail.eat * 1 + this.detail.wash * 1 + this.detail.wear * 1 + this.detail.toilet * 1 + this.detail.sport * 1
      if (score >= 19) {
        return '不能自理'
      } else if (score >= 9) {
        return '中度依赖'
      } else if (score >= 4) {
        return '轻度依赖'
      } else {
        return '可自理'
      }
    }
  },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      this.loading = true
      var query = this.$route.query
      read({ key: query.key }).then(response => {
        this.detail = response.data
        this.loading = false
      })
    },
    getResult() {
      return '提交：(' + this.result + '，' + this.score + ')'
    },
    saveData() {
      save(this.detail, { key: this.detail.elder_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    }
  }
}
</script>
