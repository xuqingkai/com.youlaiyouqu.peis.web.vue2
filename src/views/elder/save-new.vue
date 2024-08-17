<template>
  <div class="app-container">
    <el-form :inline="true" labelPosition="top" :model="detail" label-width="80px">
      <el-tabs tab-position="left">
        <el-tab-pane label="症状">
          <el-checkbox-group id="symptom" v-model="detail.symptom">
            <el-checkbox label="1.无症状" />
            <el-checkbox label="2.头痛" />
            <el-checkbox label="3.头晕" />
            <el-checkbox label="4.心悸" />
            <el-checkbox label="5.胸闷" />
            <el-checkbox label="6.胸痛" />
            <el-checkbox label="7.慢性咳嗽" />
            <el-checkbox label="8.咳痰" />
            <el-checkbox label="9.呼吸困难" />
            <el-checkbox label="10.多饮" />
            <el-checkbox label="11.多尿" />
            <el-checkbox label="12.体重下降" />
            <el-checkbox label="13.乏力" />
            <el-checkbox label="14.关节肿痛" />
            <el-checkbox label="15.视力模糊" />
            <el-checkbox label="16.手脚麻木" />
            <el-checkbox label="17.尿急" />
            <el-checkbox label="18.尿痛" />
            <el-checkbox label="19.便秘" />
            <el-checkbox label="20.腹泻" />
            <el-checkbox label="21.恶心呕吐" />
            <el-checkbox label="22.眼花" />
            <el-checkbox label="23.耳鸣" />
            <el-checkbox label="24.乳房胀痛" />
            <el-checkbox label="25.其他" />
          </el-checkbox-group>
          <el-input v-model="detail.symptom_other" :disabled="!detail.symptom.includes('25.其他')" size="mini" style="margin-left:10px; width: 120px" @input="changeCheckbox(detail.symptom_other, detail.symptom, '25.其他')" />
        </el-tab-pane>
        <el-tab-pane label="一般状况">
          <el-form-item label="活动名称">
            <el-input v-model="detail.symptom_other"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="生活方式">角色管理</el-tab-pane>
        <el-tab-pane label="脏器功能">定时任务补偿</el-tab-pane>
        <el-tab-pane label="查体">定时任务补偿</el-tab-pane>
        <el-tab-pane label="辅助检查">定时任务补偿</el-tab-pane>
        <el-tab-pane label="健康问题">定时任务补偿</el-tab-pane>
        <el-tab-pane label="住院情况">定时任务补偿</el-tab-pane>
        <el-tab-pane label="用药情况">定时任务补偿</el-tab-pane>
        <el-tab-pane label="预防接种">定时任务补偿</el-tab-pane>
        <el-tab-pane label="健康评价">健康评价</el-tab-pane>
        <el-tab-pane label="健康指导" v-if="false">定时任务补偿</el-tab-pane>
        <el-tab-pane label="其他">其他</el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
<style>
</style>
<script>
import { parseTime } from '@/utils/index'
import * as api from '@/api'
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
        id: 0,
        exam_date: parseTime(new Date(), '{y}-{m}-{d}'),
        symptom: [],
        dietary_like: [],
        drink_type: [],
        mouth_dentition: [],
        galactophore: [],
        ecg: [],
        cerebrovascular: [],
        kidney_diseases: [],
        heart_diseases: [],
        vascular_diseases: [],
        cardiovascular: [],
        eye_diseases: [],
        nervous_system: [],
        other_diseases: [],
        hospital_history: [],
        home_history: [],
        drug_history: [],
        vaccinate_history: [],
        health_evaluation_abnormal: [],
        health_guide: [],
        dangerous_factor_control: [],
        exam: {},
        user: {},
        patient: {},
        patientElder: {}
      },
      testBool: true,
      listLoading: true
    }
  },
  created() { },
  methods: { }
}
</script>
