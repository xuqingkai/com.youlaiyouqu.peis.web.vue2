<template>
  <div class="app-container">
    <div style="text-align: center;">
      <h3>Ⅱ型糖尿病患者随访服务记录表</h3>
    </div>
    <table style="width: 100%;border:none;">
      <tr>
        <td>姓名：<el-input v-model="detail.patient_name" size="small" style="width: 120px" /></td>
        <td>
          编号：
          <el-input v-model="followup_visit_no[0]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[1]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[2]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[3]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[4]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[5]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[6]" size="mini" style="width: 30px" />
          <el-input v-model="followup_visit_no[7]" size="mini" style="width: 30px" />
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th colspan="2">随访日期</th>
        <td colspan="5"><el-input v-model="detail.followup_visit_date" size="mini" style="width: 80px" /></td>
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
            <el-checkbox label="2.多饮" />
            <el-checkbox label="3.多食" />
            <el-checkbox label="4.多尿" />
            <el-checkbox label="5.视力模糊" />
            <el-checkbox label="6.感染" />
            <el-checkbox label="7.手脚麻木" />
            <el-checkbox label="8.下肢浮肿" />
            <el-checkbox label="9.体重明显下降" />
          </el-checkbox-group><br>
          其他：<el-input v-model="detail.symptom_other" size="mini" style="margin-left:10px; width: 220px" />
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="4">体征</th>
        <th>血 压（mmHg）</th>
        <td>
          <el-input v-model="detail.left_sbp" size="mini" style="width: 70px" />
          / <el-input v-model="detail.left_dbp" size="mini" style=" width: 70px" />
        </td>
        <th>体重（kg)</th>
        <td colspan="2">
          <el-input v-model="detail.body_weight" size="mini" style="width: 70px" />
          / <el-input v-model="detail.body_weight_target" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th>体质指数（kg/㎡）</th>
        <td colspan="4">
          <el-input v-model="detail.body_bmi" size="mini" style="width: 70px" />
          / <el-input v-model="detail.body_bmi_target" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <th>足背动脉搏动</th>
        <td colspan="4">
          <el-radio-group v-model="detail.dorsalis_pedis_artery">
            <el-radio label="1.触及正常" />
            <el-radio label="2.双侧减弱" />
            <el-radio label="3.左侧减弱" />
            <el-radio label="4.右侧减弱" />
            <el-radio label="5.双侧消失" />
            <el-radio label="6.左侧消失" />
            <el-radio label="7.右侧消失" />
          </el-radio-group><br>
          <el-radio-group v-model="detail.dpa_pulse">
            <el-radio label="触及正常" />
            <el-radio label="减弱" />
            <el-radio label="消失" />
          </el-radio-group><br>
          <el-radio-group v-model="detail.dpa_side">
            <el-radio label="左侧" />
            <el-radio label="右侧" />
            <el-radio label="双侧" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>其 他</th>
        <td colspan="4">
          <el-input v-model="detail.body_other" size="mini" />
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="7">生活方式指导</th>
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
          / <el-input v-model="detail.drink_everyday_target" size="mini" style="width: 70px" />
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
        <th>主食（克/天）</th>
        <td colspan="4">
          <el-input v-model="detail.staple_food" size="mini" style="width: 100px" />
          / <el-input v-model="detail.staple_food_target" size="mini" style="width: 100px" />
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
        <th rowspan="5" colspan="2">辅助检查</th>
        <th>空腹血糖值</th>
        <td colspan="4"><el-input v-model="detail.blood_glu" size="mini" style="width: 100px" />mmol/L</td>
      </tr>
      <tr>
        <th rowspan="4">其他检查*</th>
      </tr>
      <tr>
        <th>糖化血红蛋白</th>
        <td colspan="3">
          <el-input v-model="detail.blood_ghb" size="mini" style="width: 100px" />%
        </td>
      </tr>
      <tr>
        <th>检查日期</th>
        <td colspan="3">
          <el-input v-model="detail.blood_ghb_date" size="mini" style="width: 60px" />月
          <el-input v-model="detail.blood_ghb_date" size="mini" style="width: 60px" />日
        </td>
      </tr>
      <tr>
        <th>其他</th>
        <td colspan="3"><el-input v-model="detail.assist_checkup_other" size="mini" /></td>
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
        <th colspan="2">低血糖反应</th>
        <td colspan="5">
          <el-radio-group v-model="detail.hypoglycemia_reaction">
            <el-radio label="1.无" />
            <el-radio label="2.偶尔" />
            <el-radio label="3.频繁" />
          </el-radio-group>
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
            <tr>
              <th>胰岛素种类</th>
              <th>用法</th>
              <th @click="addInsulinHistory">用量 <el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(insulin, index) in detail.insulin_history" :key="'insulin' + index">
              <td><el-input v-model="insulin.type" size="mini" style=" width: 120px" /></td>
              <td><el-input v-model="insulin.usage" size="mini" style=" width: 100px" /></td>
              <td>
                <el-input v-model="insulin.dosage" size="mini" style=" width: 100px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeInsulinHistory(insulin)" />
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
        <td colspan="5"><el-input v-model="detail.next_visit_date" size="mini" style=" width: 150px" /></td>
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
import { read, save } from '@/api/diabetes'

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
        insulin_history: []
      },
      loading: true
    }
  },
  computed: {
    followup_visit_no: function() {
      return '----------'.split('-')
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
    saveData() {
      save(this.detail, { key: this.detail.diabetes_key }).then(response => {
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
    },
    addInsulinHistory() {
      this.detail.insulin_history.push({
        name: '非洛地平缓释片',
        usage: '一日3次',
        dosage: '一次1片',
        method: '口服'
      })
    },
    removeInsulinHistory(item) {
      var index = this.detail.insulin_history.indexOf(item)
      if (index !== -1) { this.detail.insulin_history.splice(index, 1) }
    }
  }
}
</script>
