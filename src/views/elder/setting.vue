<template>
  <div class="app-container">
    <el-form labelPosition="top" :model="detail" label-width="80px">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        style="position:fixed;top:50px;">
        <el-menu-item v-for="(item, index) in items" :index="item.id" :key="index" @click="scrollTo(item)">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
      <div class="content" @scroll="onScroll" style="margin-left: 120px;">
        <div id="tab-base">
          <h2>基本信息</h2>
          <p></p>
        </div>
        <div id="tab_symptom">
          <h2>症状</h2>
          <el-form-item label="答案选项">
              <el-input type="textarea" autosize v-model="setting.symptom"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
              <el-checkbox-group v-model="detail.symptom">
                <el-checkbox v-for="(text, index) in symptoms" :key="index" :label="text.trim()" />
              </el-checkbox-group>
              <el-input v-model="detail.symptom_other" :disabled="symptom_other_disable" size="mini" style="margin-left:10px; width: 120px" />
            </el-form-item>
        </div>
        <div id="tab_general">
          <h2>一般状况</h2>
          <p></p>
        </div>
        <div id="tab_life">
          <h2>生活方式</h2>
          <p></p>
        </div>
        <div id="tab_viscus">
          <h2>脏器信息</h2>
          <p></p>
        </div>
        <div id="tab_body">
          <h2>查体</h2>
          <p></p>
        </div>
        <div id="tab_assist">
          <h2>辅助检查</h2>
          <p></p>
        </div>
        <div id="tab_health">
          <h2>健康问题</h2>
          <p></p>
        </div>
        <div id="tab_hospital">
          <h2>住院情况</h2>
          <p></p>
        </div>
        <div id="tab_medcoin">
          <h2>用药情况</h2>
          <p></p>
        </div>
        <div id="tab_yufang">
          <h2>预防接种</h2>
          <p></p>
        </div>
        <div id="tab_pingjia">
          <h2>健康评价</h2>
          <p></p>
        </div>
        <div id="tab_zhidao">
          <h2>健康指导</h2>
          <p></p>
        </div>
        <div id="tab_other">
          <h2>其他</h2>
          <p></p>
        </div>
      </div>

    </el-form>
  </div>
</template>
<style>
.content h2 {
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-top: 60px;
}

.content h2:hover {
  color: #409EFF;
}

.el-menu-item.is-active {
  background-color: #ecf5ff;
}
</style>
<script>
import { parseTime } from '@/utils/index'
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
      setting: {
        symptom: '1.无症状|2.头痛|3.头晕|4.心悸|5.胸闷|6.胸痛|7.慢性咳嗽|8.咳痰|9.呼吸困难|10.多饮|11.多尿|12.体重下降|13.乏力|14.关节肿痛|15.视力模糊|16.手脚麻木|17.尿急|18.尿痛|19.便秘|20.腹泻|21.恶心呕吐|22.眼花|23.耳鸣|24.乳房胀痛|25.其他'
      },
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
      listLoading: true,
      activeIndex: '',
      items: [
        { id: 'tab_base', title: '基本信息', description: '这是简介部分的内容。' },
        { id: 'tab_symptom', title: '症状', description: '这是简介部分的内容。' },
        { id: 'tab_general', title: '一般状况', description: '这是特性部分的内容。' },
        { id: 'tab_life', title: '生活方式', description: '这是示例部分的内容。' },
        { id: 'tab_viscus', title: '脏器功能', description: '这是示例部分的内容。' },
        { id: 'tab_body', title: '查体', description: '这是示例部分的内容。' },
        { id: 'tab_assist', title: '辅助检查', description: '这是示例部分的内容。' },
        { id: 'tab_health', title: '健康问题', description: '这是示例部分的内容。' },
        { id: 'tab_hospital', title: '住院情况', description: '这是示例部分的内容。' },
        { id: 'tab_medcoin', title: '用药情况', description: '这是示例部分的内容。' },
        { id: 'tab_yufang', title: '预防接种', description: '这是示例部分的内容。' },
        { id: 'tab_pingjia', title: '健康评价', description: '这是示例部分的内容。' },
        { id: 'tab_zhidao', title: '健康指导', description: '这是示例部分的内容。' },
        { id: 'tab_other', title: '其他', description: '这是示例部分的内容。' }
      ]
    }
  },
  computed: {
    symptoms() {
      return this.setting.symptom.split('|')
    },
    symptom_other_disable() {
      return !this.detail.symptom.join('').includes('.其他')
    }
  },
  mounted() {
    this.activeIndex = this.items[0].id
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.onScroll)
  },
  created() { },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeIndex = key
    },
    scrollTo(item) {
      const target = document.getElementById(item.id)
      target.scrollIntoView()
    },
    onScroll() {
      var menuItems = this.$data.items
      var scrollTop = document.documentElement.scrollTop
      var activeIndex1 = ''
      for (let i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i]
        var section = document.getElementById(menuItem.id)
        document.title = scrollTop + '?>' + section.offsetTop + '+' + section.offsetHeight
        if (scrollTop > section.offsetTop) {
          // window.alert(menuItem.id)
          activeIndex1 = menuItem.id
        }
      }

      this.activeIndex = activeIndex1
    }
  }
}
</script>
