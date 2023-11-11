<template>
  <div class="app-container">
    <div style="text-align: center;">
      <h3>高血压患者随访服务记录表</h3>
    </div>
    <table style="width: 100%;border:none;">
      <tr>
        <td>姓名：<el-input v-model="detail.patient_name" size="small" style="width: 120px" /></td>
        <td style="text-align: right;">
          编号：<el-input v-model="detail.patientElder.archive_no" size="mini" style="width: 150px" />
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th colspan="2">随访日期</th>
        <td colspan="5"><el-date-picker v-model="detail.followup_visit_date" type="date" size="mini" style="width: 180px" /></td>
      </tr>
      <tr>
        <th colspan="2">随访方式</th>
        <td colspan="5">
          <el-radio-group v-model="detail.followup_visit_type">
            <el-radio label="1.门诊" />
            <el-radio label="2.家庭" />
            <el-radio label="3.电话" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">症状</th>
        <td colspan="5">
          <el-checkbox-group v-model="detail.symptom">
            <el-checkbox label="1.无症状" />
            <el-checkbox label="2.头昏头晕" />
            <el-checkbox label="3.恶心呕吐" />
            <el-checkbox label="4.眼花耳鸣" />
            <el-checkbox label="5.呼吸困难" />
            <el-checkbox label="6.心悸胸闷" />
            <el-checkbox label="7.鼻衄出血不止" />
            <el-checkbox label="8.四肢发麻" />
            <el-checkbox label="9.下肢水肿" />
          </el-checkbox-group><br>
          其他：<el-input v-model="detail.symptom_other" size="mini" style="margin-left:10px; width: 220px" />
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="3">体征</th>
        <th>血 压（mmHg）</th>
        <td>
          <el-input v-model="detail.left_sbp" size="mini" style="width: 70px" />
          / <el-input v-model="detail.left_dbp" size="mini" style="width: 70px" />
        </td>
        <th>体重（kg)</th>
        <td colspan="2">
          <el-input v-model="detail.body_weight" size="mini" style="width: 70px" />
          / <el-input v-model="detail.body_weight_target" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th>体质指数（kg/㎡）</th>
        <td>
          <el-input v-model="detail.body_bmi" size="mini" style="width: 70px" />
          / <el-input v-model="detail.body_bmi_target" size="mini" style="width: 70px" />
        </td>
        <th>心率（次/分钟）</th>
        <td colspan="2">
          <el-input v-model="detail.heart_rate" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th>其 他</th>
        <td colspan="4">
          <el-input v-model="detail.body_other" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="8">生活方式指导</th>
        <th>日吸烟量（支）</th>
        <td colspan="4">
          <el-input v-model="detail.smoke_everyday" size="mini" style="width: 70px" />
          / <el-input v-model="detail.smoke_everyday_target" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th>日饮酒量（两）</th>
        <td colspan="4">
          <el-input v-model="detail.drink_everyday" size="mini" style="width: 70px" />
          /<el-input v-model="detail.drink_everyday_target" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th rowspan="2">运动</th>
        <td colspan="4">
          <el-input v-model="detail.sport_everyweek" size="mini" style="width: 70px" />次/周
          <el-input v-model="detail.sport_everytime" size="mini" style="margin-left:10px; width: 70px" />分钟/次
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <el-input v-model="detail.sport_everyweek_target" size="mini" style="width: 70px" />次/周
          <el-input v-model="detail.sport_everytime_target" size="mini" style="margin-left:10px; width: 70px" />分钟/次
        </td>
      </tr>
      <tr>
        <th rowspan="2">摄盐情况（咸淡）</th>
        <td colspan="4">
          <el-radio-group v-model="detail.salt">
            <el-radio label="1.轻" />
            <el-radio label="2.中" />
            <el-radio label="3.重" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <el-radio-group v-model="detail.salt_target">
            <el-radio label="1.轻" />
            <el-radio label="2.中" />
            <el-radio label="3.重" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>心理调整</th>
        <td colspan="4">
          <el-radio-group v-model="detail.psychological_adjustment">
            <el-radio label="1.良好" />
            <el-radio label="2.一般" />
            <el-radio label="3.差" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>遵医行为</th>
        <td colspan="4">
          <el-radio-group v-model="detail.compliance_behavior">
            <el-radio label="1.良好" />
            <el-radio label="2.一般" />
            <el-radio label="3.差" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">辅助检查*</th>
        <td colspan="5">
          <el-input v-model="detail.assist_checkup_other" size="mini" />
        </td>
      </tr>
      <tr>
        <th colspan="2">服药依从性</th>
        <td colspan="5">
          <el-radio-group v-model="detail.drug_compliance">
            <el-radio label="1.规律" />
            <el-radio label="2.间断" />
            <el-radio label="3.不服药" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">药物不良反应</th>
        <td colspan="5">
          <el-radio-group v-model="detail.adverse_drug_reaction">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="detail.adr_content" size="mini" style="margin-left:10px; width: 120px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">此次随访分类</th>
        <td colspan="5">
          <el-radio-group v-model="detail.followup_visit_result">
            <el-radio label="1.控制满意" />
            <el-radio label="2.控制不满意" />
            <el-radio label="3.不良反应" />
            <el-radio label="4.并发症" />
          </el-radio-group>
          <el-input v-model="detail.symptom_other" size="mini" style="margin-left:10px; width: 120px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">下一步管理措施</th>
        <td colspan="5">
          <el-radio-group v-model="detail.next_measure">
            <el-radio label="1.常规随访" />
            <el-radio label="2.第1次控制不满意2周随访" />
            <el-radio label="3.两次控制不满意转诊随访" />
            <el-radio label="4.紧急转诊" />
          </el-radio-group>
          <el-input v-model="detail.symptom_other" size="mini" style="margin-left:10px; width: 120px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">用药情况</th>
        <td colspan="5">
          <table>
            <tr>
              <th>药物名称</th>
              <th>用法</th>
              <th @click="addDrugHistory">用量 <el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(drug, index) in detail.drug_history" :key="'drug' + index">
              <td><el-input v-model="drug.name" size="mini" style=" width: 120px" /></td>
              <td><el-input v-model="drug.usage" size="mini" style=" width: 100px" /></td>
              <td>
                <el-input v-model="drug.dosage" size="mini" style=" width: 100px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeDrugHistory(drug)" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="2">转诊</th>
        <th>原因</th>
        <td colspan="4"><el-input v-model="detail.referral_reaction" size="mini" /></td>
      </tr>
      <tr>
        <th>机构及科别</th>
        <td colspan="4"><el-input v-model="detail.referral_office" size="mini" /></td>
      </tr>
      <tr>
        <th colspan="2">下次随访日期</th>
        <td colspan="5"><el-date-picker v-model="detail.next_visit_date" type="date" size="mini" style="width: 150px" /></td>
      </tr>
      <tr>
        <th colspan="2">随访医生签名</th>
        <td colspan="5"><el-input v-model="detail.doctor_name" size="mini" style=" width: 150px" /></td>
      </tr>
      <tr>
        <td colspan="7"><el-button type="primary" round @click="saveData">保存</el-button></td>
      </tr>
    </table>
  </div>
</template>
<style>
  .el-row {
    border: 1px solid #EBEEF5;
    border-bottom: none;
    border-right: none;
  }
  .el-row:last-child {
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
  .el-col {
    border-right: 1px solid #EBEEF5;
    padding: 5px;
  }
  .el-col:last-child {
    border-right: none;
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
import { read, save } from '@/api/hypertension'

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
        symptom: [],
        drug_history: [],
        patientElder: {
          archive_no: ''
        }
      },
      loading: true
    }
  },
  computed: {
    followup_visit_no: function() {
      return '--------'.split('-')
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
        if (response.data) { this.detail = response.data }
        this.loading = false
      })
    },
    saveData() {
      save(this.detail, { key: this.detail.hypertension_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    },
    addDrugHistory() {
      this.detail.drug_history.push({
        name: '非洛地平缓释片',
        usage: '一日3次',
        dosage: '一次1片',
        method: '口服'
      })
    },
    removeDrugHistory(item) {
      var index = this.detail.drug_history.indexOf(item)
      if (index !== -1) { this.detail.drug_history.splice(index, 1) }
    }
  }
}
</script>
