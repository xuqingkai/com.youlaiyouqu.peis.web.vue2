<template>
  <div class="app-container">
    <div style="text-align: center;">
      <h3>老年人中医药健康管理服务记录表</h3>
    </div>
    <table>
      <tr>
        <th colspan="10">{{ elder.patient.real_name }}, {{ elder.patient.gender }}, {{ elder.exam.age }}, {{ elder.patient.idcard_no }}, {{ elder.exam.region_name }}</th>
      </tr>
      <tr>
        <th colspan="5">请根据近一年的体验和感觉，回答以下问题。</th>
        <th>没有<br>（根本不/从来没有）</th>
        <th>很少<br>（有一点/偶尔）</th>
        <th>有时<br>（有些/少数时间）</th>
        <th>经常<br>（相当/多数时间）</th>
        <th>总是<br>（非常/每天）</th>
      </tr>
      <tr>
        <td colspan="5">(1) 您精力充沛吗?(指精神头足，乐于做事) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(2) 您容易疲乏吗?(指体力如何，是否稍微活动一下或做一点家务劳动就感到累) </td>
        <td><el-radio v-model="elder.q2" label="1" /></td>
        <td><el-radio v-model="elder.q2" label="2" /></td>
        <td><el-radio v-model="elder.q2" label="3" /></td>
        <td><el-radio v-model="elder.q2" label="4" /></td>
        <td><el-radio v-model="elder.q2" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(3) 您容易气短，呼吸短促，接不上气吗？</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(4) 您说话声音低弱无力吗?(指说话没有力气) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(5) 您感到闷闷不乐、情绪低沉吗?(指心情不愉快，情绪低落) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(6) 您容易精神紧张、焦虑不安吗?(指遇事是否心情紧张) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(7) 您因为生活状态改变而感到孤独、失落吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(8) 您容易感到害怕或受到惊吓吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(9) 您感到身体超重不轻松吗?(感觉身体沉重)<br>
          [BMI指数=体重(kg) /身高^2(m)]<br>
          身高：<el-input v-model="elder.id" size="mini" style=" width: 50px" />cm
          体重：<el-input v-model="elder.id" size="mini" style=" width: 50px" />kg
          BMI：<el-input v-model="elder.id" size="mini" style=" width: 50px" />
        </td>
        <td><el-radio v-model="elder.q0" label="1">1<br> (BMI&lt;24)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="2">2<br> (24&lt;=BMI&lt;25)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="3">3<br> (25&lt;=BMI&lt;26)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="4">4<br> (26&lt;=BMI&lt;28)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="5">5<br> (BMI>=28)</el-radio></td>
      </tr>
      <tr>
        <td colspan="5">(10) 您眼睛干涩吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(11) 您手脚发凉吗?(不包含因周围温度低或穿的少导致的手脚发冷) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(12) 您胃脘部、背部或腰膝部怕冷吗?(指上腹部、背部、腰部或膝关节等，有一处或多处怕冷) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(13) 您比一般人耐受不了寒冷吗?(指比别人容易害怕冬天或是夏天的冷空调、电扇等) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(14) 您容易患感冒吗?(指每年感冒的次数) </td>
        <td><el-radio v-model="elder.q0" label="1">1<br> (一年&lt;2次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="2">2<br> (一年感冒2-4次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="3">3<br> (一年感冒5-7次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="4">4<br> (一年8次以上)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="5">5<br> (几乎每月都感冒)</el-radio></td>
      </tr>
      <tr>
        <td colspan="5">(15) 您没有感冒时也会鼻塞、流鼻涕吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(16) 您有口粘口腻，或睡眠打鼾吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(17) 您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时) 吗?</td>
        <td><el-radio v-model="elder.q0" label="1">1<br> (从来没有)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="2">2<br> (一年1、2次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="3">3<br> (一年3、4次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="4">4<br> (一年5、6次)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="5">5<br> (每次遇到上述原因都过敏)</el-radio></td>
      </tr>
      <tr>
        <td colspan="5">(18) 您的皮肤容易起荨麻疹吗?(包括风团、风疹块、风疙瘩) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(19) 您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗?(指皮肤在没有外伤的情况下出现青一块紫一块的情况) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(20) 您的皮肤一抓就红，并出现抓痕吗?(指被指甲或钝物划过后皮肤的反应) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr style="border-bottom: 1px solid black;">
        <td colspan="5">(21) 您皮肤或口唇干吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(22) 您有肢体麻木或固定部位疼痛的感觉吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(23) 您面部或鼻部有油腻感或者油亮发光吗?(指脸上或鼻子) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(24) 您面色或目眶晦黯，或出现褐色斑块/斑点吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(25) 您有皮肤湿疹、疮疖吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(26) 您感到口干咽燥、总想喝水吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(27) 您感到口苦或嘴里有异味吗?(指口苦或口臭) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">
          (28) 您腹部肥大吗?(指腹部脂肪肥厚) <br>
          【 腹围：<el-input v-model="elder.id" size="mini" style="width: 50px" />cm 】
        </td>
        <td><el-radio v-model="elder.q0" label="1">1<br> (腹围&lt;80cm，相当于2.4尺)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="2">2<br> (腹围80-85cm，2.4-2.55尺)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="3">3<br> (腹围86-90cm，2.56-2.7尺)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="4">4<br> (腹围91-105cm，2.71-3.15尺)</el-radio></td>
        <td><el-radio v-model="elder.q0" label="5">5<br> (腹围&gt;105或3.15尺)</el-radio></td>
      </tr>
      <tr>
        <td colspan="5">(29) 您吃(喝) 凉的东西会感到不舒服或者怕吃(喝) 凉的东西吗?(指不喜欢吃凉的食物，或吃了凉的食物后会不舒服) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(30) 您有大便黏滞不爽、解不尽的感觉吗?(大便容易粘在马桶或便坑壁上) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr class="PageNext trHover">
        <td colspan="5">(31) 您容易大便干燥吗?</td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(32) 您舌苔厚腻或有舌苔厚厚的感觉吗?(如果自我感觉不清楚可由调查员观察后填写) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <td colspan="5">(33) 您舌下静脉瘀紫或增粗吗?(可由调查员辅助观察后填写) </td>
        <td><el-radio v-model="elder.q0" label="1" /></td>
        <td><el-radio v-model="elder.q0" label="2" /></td>
        <td><el-radio v-model="elder.q0" label="3" /></td>
        <td><el-radio v-model="elder.q0" label="4" /></td>
        <td><el-radio v-model="elder.q0" label="5" /></td>
      </tr>
      <tr>
        <th>体质类型</th>
        <th>气虚质</th>
        <th>阳虚质</th>
        <th>阴虚质</th>
        <th>痰湿质</th>
        <th>湿热质</th>
        <th>血瘀质</th>
        <th>气郁质</th>
        <th>特禀质</th>
        <th>平和质</th>
      </tr>
      <tr>
        <td>体质辨识</td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
        <td>
          1.得分<el-input v-model="elder.id" size="mini" style="width: 30px" /><br>
          2.<el-radio v-model="elder.q0" label="2">是</el-radio><br>
          3.<el-radio v-model="elder.q0" label="3">倾向是</el-radio>
        </td>
      </tr>
      <tr>
        <td>中医保健指导</td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
        <td>
          <el-checkbox-group v-model="elder.pinghe_guide">
            <el-checkbox label="1.情志调摄" /><br>
            <el-checkbox label="2.饮食调养" /><br>
            <el-checkbox label="3.起居调摄" /><br>
            <el-checkbox label="4.运动保健" /><br>
            <el-checkbox label="5.穴位保健" /><br>
            <el-checkbox label="6.其他" />
          </el-checkbox-group><br>
          <el-input v-model="elder.id" size="mini" />
        </td>
      </tr>
      <tr>
        <td colspan="2">填表日期</td>
        <td colspan="3"><el-input v-model="elder.id" size="mini" style="width:150px" /></td>
        <td colspan="2">医生签名</td>
        <td colspan="3"><el-input v-model="elder.id" size="mini" style="width:150px" /></td>
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
import { read, save } from '@/api/elder_tcm'

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
      elder: {
        pinghe_guide: []
      },
      loading: true
    }
  },
  computed: {
    score: function() {
      return this.elder.eat * 1 + this.elder.wash * 1 + this.elder.wear * 1 + this.elder.toilet * 1 + this.elder.sport * 1
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
        this.elder = response.data
        this.loading = false
      })
    },
    getResult() {
      return ''
    },
    saveData() {
      save(this.elder, { key: this.elder.elder_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    }
  }
}
</script>
