<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="基本情况">
        <el-form :inline="true" label-width="120px">
          <el-form-item label="真实姓名">
            <el-input v-model="elder.patient_name" />
          </el-form-item>
          <el-form-item label="档案编号">
            <el-input v-model="elder.patientElder.archive_no" />
          </el-form-item>
          <el-form-item label="体检日期">
            <el-date-picker v-model="elder.exam_date" type="date" style="width:180px" />
          </el-form-item>
          <el-form-item label="责任医生">
            <el-input v-model="elder.doctor_name" style="width: 100px" />
          </el-form-item>
        </el-form>
        <el-form label-width="120px">
          <el-form-item label="症状">
            <el-checkbox-group v-model="elder.symptom">
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
          </el-form-item>
          <el-form-item label="其他症状">
            <el-input v-model="elder.symptom_other" size="mini" />
          </el-form-item>
        </el-form>
        <el-form label-width="120px">
          <el-form-item label="医生签名">
            <img src="/static/images/doctor_sign.png">
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="一般状况">
        <el-form :inline="true" label-width="120px">
          <el-form-item label="体温">
            <el-input v-model="elder.body_temperature" size="mini" style="width: 80px" />℃
          </el-form-item>
          <el-form-item label="脉率">
            <el-input v-model="elder.heart_pr" size="mini" style="width: 50px" />次/分钟
          </el-form-item>
          <el-form-item label="呼吸频率">
            <el-input v-model="elder.lung_rr" size="mini" style="width: 50px" />次/分钟
          </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="120px">
          <el-form-item label="身高">
            <el-input v-model="elder.body_height" size="mini" style="width: 50px" />CM
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="elder.body_weight" size="mini" style="width: 50px" />KG
          </el-form-item>
          <el-form-item label="体质指数">
            <el-input v-model="elder.body_waistline" size="mini" style="width: 50px" />kg/㎡
          </el-form-item>
          <el-form-item label="腰围">
            <el-input v-model="elder.body_waistline" size="mini" style="width: 50px" />CM
          </el-form-item>
        </el-form>
        <el-form :inline="true" label-width="120px">
          <el-form-item label="左侧血压">
            <el-input v-model="elder.left_sbp" size="mini" style="width: 50px" />/
            <el-input v-model="elder.left_dbp" size="mini" style="width: 50px" />mmHg
          </el-form-item>
          <el-form-item label="右侧血压">
            <el-input v-model="elder.right_sbp" size="mini" style="width: 50px" />/
            <el-input v-model="elder.right_dbp" size="mini" style="width: 50px" />mmHg
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="老年人健康状态自我评估*">
            <el-radio-group v-model="elder.health_status">
              <el-radio label="1.满意" />
              <el-radio label="2.基本满意" />
              <el-radio label="3.说不清楚" />
              <el-radio label="4.不太满意" />
              <el-radio label="5.不满意" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="老年人生活自理能力自我评估*">
            <el-radio-group v-model="elder.selfcare">
              <el-radio label="1.可自理（0～3分）" />
              <el-radio label="2.轻度依赖（4～8分）" />
              <el-radio label="3.中度依赖（9～18分)" />
              <el-radio label="4.不能自理（≥19分）" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="老年人认知功能*">
            <el-radio-group v-model="elder.cognition">
              <el-radio label="1.粗筛阴性" />
              <el-radio label="2.粗筛阳性" />
            </el-radio-group>
            ，简易智力状态检查，总分<el-input v-model="elder.cognition_score" size="mini" style="margin-left:10px; width: 50px" />
          </el-form-item>
          <el-form-item label="老年人情感状态*">
            <el-radio-group v-model="elder.affection">
              <el-radio label="1.粗筛阴性" />
              <el-radio label="2.粗筛阳性" />
            </el-radio-group>
            ，老年人抑郁评分检查，总分<el-input v-model="elder.affection_score" size="mini" style="margin-left:10px; width: 50px" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="老年人健康">状态自我评估
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <table class="table" style="width: 100%; border: 1px solid #f00;">
      <tr>
        <th>内容</th>
        <th colspan="6">检查项目</th>
        <th>医师签名</th>
      </tr>

      <tr>
        <th rowspan="5">生<br>活<br>方<br>式</th>
        <th colspan="2">体育锻炼</th>
        <td colspan="4">
          <table>
            <tr>
              <th>锻炼频率</th>
              <td colspan="3">
                <el-radio-group v-model="elder.sport_rate">
                  <el-radio label="1.每天" />
                  <el-radio label="2.每周一次以上" />
                  <el-radio label="3.偶尔" />
                  <el-radio label="4.不锻炼" />
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <th>每次锻炼时间</th>
              <td><el-input v-model="elder.sport_everytime" size="mini" style="width: 50px" />分钟</td>
              <th>坚持锻炼时间</th>
              <td><el-input v-model="elder.sport_years" size="mini" style="width: 50px" />年</td>
            </tr>
            <tr>
              <th>锻炼方式</th>
              <td colspan="3"><el-input v-model="elder.sport_type" size="mini" style="width: 150px" /></td>
            </tr>
          </table>
        </td>
        <td rowspan="5"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">饮食习惯</th>
        <td colspan="4">
          <el-radio v-model="elder.dietary_style" label="1.荤素均衡" />
          <el-radio v-model="elder.dietary_style" label="2.荤食为主" />
          <el-radio v-model="elder.dietary_style" label="3.素食为主" />
          <el-checkbox-group v-model="elder.dietary_like">
            <el-checkbox label="4.嗜盐" />
            <el-checkbox label="5.嗜油" />
            <el-checkbox label="6.嗜糖" />
          </el-checkbox-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">吸烟情况</th>
        <td colspan="4">
          <table>
            <tr>
              <th>吸烟状况</th>
              <td colspan="3">
                <el-radio-group v-model="elder.smoke">
                  <el-radio label="1.从不吸烟" />
                  <el-radio label="2.已戒烟" />
                  <el-radio label="3.吸烟" />
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <th>日吸烟量 </th>
              <td colspan="3">平均<el-input v-model="elder.smoke_everyday" size="mini" style="width: 50px" />支</td>
            </tr>
            <tr>
              <th>开始吸烟年龄</th>
              <td><el-input v-model="elder.smoke_start_age" size="mini" style="width: 50px" />岁</td>
              <th>戒烟年龄</th>
              <td><el-input v-model="elder.smoke_stop_age" size="mini" style="width: 50px" />岁</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th colspan="2">饮酒情况</th>
        <td colspan="4">
          <table>
            <tr>
              <th>饮酒频率</th>
              <td colspan="3">
                <el-radio-group v-model="elder.drink_rate">
                  <el-radio label="1.从不" />
                  <el-radio label="2.偶尔" />
                  <el-radio label="3.经常" />
                  <el-radio label="4.每天" />
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <th>日饮酒量</th>
              <td colspan="3">平均<el-input v-model="elder.drink_everyday" size="mini" style="width: 50px" />两</td>
            </tr>
            <tr>
              <th>是否戒酒</th>
              <td colspan="3">
                <el-radio-group v-model="elder.drink_stop">
                  <el-radio label="1.未戒酒" />
                  <el-radio label="2.已戒酒" />
                </el-radio-group>
                ，戒酒年龄<el-input v-model="elder.drink_stop_age" size="mini" style="width: 50px" />岁
              </td>
            </tr>
            <tr>
              <th>开始饮酒年龄</th>
              <td><el-input v-model="elder.drink_start_age" size="mini" style="width: 50px" />岁</td>
              <th>近一年内是否曾醉酒</th>
              <td>
                <el-radio-group v-model="elder.drunk_this_year">
                  <el-radio label="1.是" />
                  <el-radio label="2.否" />
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <th>饮酒种类</th>
              <td colspan="3">
                <el-checkbox-group v-model="elder.drink_type">
                  <el-checkbox label="1.白酒" />
                  <el-checkbox label="2.啤酒" />
                  <el-checkbox label="3.红酒" />
                  <el-checkbox label="4.黄酒" />
                  <el-checkbox label="5.其他" />
                </el-checkbox-group>
                <el-input v-model="elder.drink_type_other" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th colspan="2">职业病危害因素接触史</th>
        <td colspan="4">
          <table>
            <tr>
              <td colspan="5">
                <el-radio-group v-model="elder.occupation_disease">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                （工种<el-input v-model="elder.od_types" size="mini" style="width: 50px" />从业时间
                <el-input v-model="elder.od_years" size="mini" style="width: 50px" />年）
              </td>
            </tr>
            <tr>
              <th rowspan="6">毒<br>物<br>种<br>类</th>
            </tr>
            <tr>
              <td>粉尘</td>
              <td><el-input v-model="elder.od_dust" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_dust_protect">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                <el-input v-model="elder.od_dust_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
            <tr>
              <td>放射物质</td>
              <td><el-input v-model="elder.od_radioactivity" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_radioactivity_protect">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                <el-input v-model="elder.od_radioactivity_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
            <tr>
              <td>物理因素</td>
              <td><el-input v-model="elder.od_physics" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_physics_protect">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                <el-input v-model="elder.od_physics_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
            <tr>
              <td>化学物质</td>
              <td><el-input v-model="elder.od_chemistry" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_chemistry_protect">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                <el-input v-model="elder.od_chemistry_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
            <tr>
              <td>其他</td>
              <td><el-input v-model="elder.od_other" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_other_protect">
                  <el-radio label="1.无" />
                  <el-radio label="2.有" />
                </el-radio-group>
                <el-input v-model="elder.od_other_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th rowspan="6">脏<br>器<br>功<br>能</th>
        <th rowspan="3" colspan="2">口腔</th>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_dentition">
            <el-radio label="1.红润" />
            <el-radio label="2.苍白" />
            <el-radio label="3.发绀" />
            <el-radio label="4.皲裂" />
            <el-radio label="5.疱疹" />
          </el-radio-group>
        </td>
        <td rowspan="6"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <td colspan="4">
          <table style="width:auto; display:inline">
            <tr>
              <td><el-checkbox v-model="elder.mouth_dentition" label="1.正常" /></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="2.缺齿" /></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="3.龋齿" /></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="4.义齿(假牙)" /></td>
            </tr>
            <tr>
              <td rowspan="2">齿列</td>
              <td>
                <el-input v-model="elder.mouth_toothmiss_left_up" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_toothmiss_right_up" size="mini" style="width: 70px" />
              </td>
              <td>
                <el-input v-model="elder.mouth_toothdecay_left_up" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_toothdecay_right_up" size="mini" style="width: 70px" />
              </td>
              <td>
                <el-input v-model="elder.mouth_denture_left_up" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_denture_right_up" size="mini" style="width: 70px" />
              </td>
            </tr>
            <tr>
              <td>
                <el-input v-model="elder.mouth_toothmiss_left_down" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_toothmiss_right_down" size="mini" style="width: 70px" />
              </td>
              <td>
                <el-input v-model="elder.mouth_toothdecay_left_down" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_toothdecay_right_down" size="mini" style="width: 70px" />
              </td>
              <td>
                <el-input v-model="elder.mouth_denture_left_down" size="mini" style="width: 70px" />
                <el-checkbox />
              </td>
              <td>
                <el-checkbox />
                <el-input v-model="elder.mouth_denture_right_down" size="mini" style="width: 70px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_pharynx">
            <el-radio label="1.无充血" />
            <el-radio label="2.充血" />
            <el-radio label="3.淋巴滤泡增生" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">视力</th>
        <td colspan="4">
          左眼<el-input v-model="elder.vision_left" size="mini" style="width: 40px" />
          右眼<el-input v-model="elder.vision_right" size="mini" style="width: 40px" />
          （矫正视力：左眼<el-input v-model="elder.vision_left_correct" size="mini" style="width: 40px" />
          右眼<el-input v-model="elder.vision_right_correct" size="mini" style="width: 40px" />）
        </td>
      </tr>
      <tr>
        <th colspan="2">听力</th>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_dentition">
            <el-radio label="1.听见" />
            <el-radio label="2.听不清或无法听见" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">运动功能</th>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_dentition">
            <el-radio label="1.可顺利完成" />
            <el-radio label="2.无法独立完成任何一个动作" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th rowspan="19">查体</th>
        <th colspan="2">眼底*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.fundus">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.fundus_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">皮肤</th>
        <td colspan="4">
          <el-radio-group v-model="elder.skin">
            <el-radio label="1.正常" />
            <el-radio label="2.潮红" />
            <el-radio label="3.苍白" />
            <el-radio label="4.发绀" />
            <el-radio label="5.黄染" />
            <el-radio label="6.色素沉着" />
            <el-radio label="7.其他" />
          </el-radio-group>
          <el-input v-model="elder.skin_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td rowspan="10"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">巩膜</th>
        <td colspan="4">
          <el-radio-group v-model="elder.sclera">
            <el-radio label="1.正常" />
            <el-radio label="2.黄染" />
            <el-radio label="3.充血" />
            <el-radio label="4.其他" />
          </el-radio-group>
          <el-input v-model="elder.sclera_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">淋巴结</th>
        <td colspan="4">
          <el-radio-group v-model="elder.lymph_node">
            <el-radio label="1.正常" />
            <el-radio label="2.锁骨上" />
            <el-radio label="3.腋窝" />
            <el-radio label="4.其他" />
          </el-radio-group>
          <el-input v-model="elder.lymph_node_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th rowspan="3" colspan="2">肺</th>
        <td colspan="4">
          桶状胸：
          <el-radio-group v-model="elder.sclera">
            <el-radio label="1.否" />
            <el-radio label="2.是" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          呼吸音：
          <el-radio-group v-model="elder.breath_sound">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.breath_sound_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          罗音：
          <el-radio-group v-model="elder.rale">
            <el-radio label="1.正常" />
            <el-radio label="2.干罗音" />
            <el-radio label="3.湿罗音" />
            <el-radio label="4.其他" />
          </el-radio-group>
          <el-input v-model="elder.rale_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">心脏</th>
        <td colspan="4">
          心率：
          <el-input v-model="elder.heart_rate" size="mini" style="width: 50px" />次/分<br>
          心律：
          <el-radio-group v-model="elder.heart_rhythm">
            <el-radio label="1.齐" />
            <el-radio label="2.不齐" />
            <el-radio label="3.绝对不齐" />
          </el-radio-group><br>
          杂音：
          <el-radio-group v-model="elder.cardiac_murmur">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.cardiac_murmur_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">腹部</th>
        <td colspan="4">
          压痛:
          <el-radio-group v-model="elder.tenderness">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.tenderness_content" size="mini" style="margin-left:10px; width: 100px" /><br>
          包块:
          <el-radio-group v-model="elder.abdominal_mass">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.abdominal_mass_content" size="mini" style="margin-left:10px; width: 100px" /><br>
          肝大:
          <el-radio-group v-model="elder.hepatomegaly">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.hepatomegaly_content" size="mini" style="margin-left:10px; width: 100px" /><br>
          脾大:
          <el-radio-group v-model="elder.splenomegaly">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.splenomegaly_content" size="mini" style="margin-left:10px; width: 100px" /><br>
          移动性浊音:
          <el-radio-group v-model="elder.shifting_dullness">
            <el-radio label="1.无" />
            <el-radio label="2.有" />
          </el-radio-group>
          <el-input v-model="elder.shifting_dullness_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">下肢水肿</th>
        <td colspan="4">
          <el-radio-group v-model="elder.shifting_dullness">
            <el-radio label="1.无" />
            <el-radio label="2.单侧" />
            <el-radio label="3.双侧不对称" />
            <el-radio label="4.双侧对称" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">足背动脉搏动*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.dorsalis_pedis_artery_pulse">
            <el-radio label="1.未触及" />
            <el-radio label="2.触及双侧对称" />
            <el-radio label="3.触及左侧弱或消失" />
            <el-radio label="4.触及右侧弱或消失" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">肛门指诊*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.anus">
            <el-radio label="1.未及异常" />
            <el-radio label="2.触痛" />
            <el-radio label="3.包块" />
            <el-radio label="4.前列腺异常" />
            <el-radio label="5.其他" />
          </el-radio-group>
          <el-input v-model="elder.anus_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">乳腺*</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.galactophore">
            <el-checkbox label="1.未见异常" />
            <el-checkbox label="2.乳房切除" />
            <el-checkbox label="3.异常泌乳" />
            <el-checkbox label="4.乳腺包块" />
            <el-checkbox label="5.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.galactophore_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th rowspan="5">妇科*</th>
        <th>外阴</th>
        <td colspan="4">
          <el-radio-group v-model="elder.vulva">
            <el-radio label="1.未见异常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.vulva_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td rowspan="5"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th>阴道</th>
        <td colspan="4">
          <el-radio-group v-model="elder.vagina">
            <el-radio label="1.未见异常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.vagina_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th>宫颈</th>
        <td colspan="4">
          <el-radio-group v-model="elder.cervix">
            <el-radio label="1.未见异常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.cervix_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th>宫体</th>
        <td colspan="4">
          <el-radio-group v-model="elder.uterine_body">
            <el-radio label="1.未见异常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.uterine_body_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th>附件</th>
        <td colspan="4">
          <el-radio-group v-model="elder.uterine_adnexa">
            <el-radio label="1.未见异常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.uterine_adnexa_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">其他*</th>
        <td colspan="4">
          <el-input v-model="elder.body_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th rowspan="25">辅<br>助<br>检<br>查</th>
        <th colspan="2">血型</th>
        <td colspan="4">
          ABO<el-input v-model="elder.blood_abo" size="mini" style="width: 40px" />
          Rh*<el-input v-model="elder.blood_rh" size="mini" style="width: 40px" />
        </td>
        <td rowspan="7"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2" rowspan="2">血常规*</th>
        <td colspan="4" style="border-bottom: none !important;">
          血红蛋白<el-input v-model="elder.blood_hgb" size="mini" style="width: 70px" />g/L
          白细胞<el-input v-model="elder.blood_wbc" size="mini" style="width: 70px" />×10⁹/L
          血小板<el-input v-model="elder.blood_plt" size="mini" style="width: 70px" />×10⁹/L
        </td>
      </tr>
      <tr>
        <td colspan="4">其他<el-input v-model="elder.blood_other" size="mini" style="width: 140px" /></td>
      </tr>
      <tr>
        <th colspan="2" rowspan="2">尿常规*</th>
        <td colspan="4">
          尿蛋白<el-input v-model="elder.urine_pro" size="mini" style="width: 70px" />
          尿糖<el-input v-model="elder.urine_glu" size="mini" style="width: 70px" />
          尿酮体<el-input v-model="elder.urine_ket" size="mini" style="width: 70px" />
          尿潜血<el-input v-model="elder.urine_bld" size="mini" style="width: 70px" />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          其他<el-input v-model="elder.urine_other" size="mini" style="width: 140px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">空腹血糖</th>
        <td colspan="4">
          <el-input v-model="elder.blood_glu" size="mini" style="width: 70px" />mmol/L
          或<el-input v-model="elder.blood_glu_mg" size="mini" style="width: 70px" />mg/dL
        </td>
      </tr>
      <tr>
        <th colspan="2">同型半胱氨酸</th>
        <td colspan="4"><el-input v-model="elder.bloodbc_hcy" size="mini" style="width: 70px" />umol/L</td>
      </tr>
      <tr>
        <th colspan="2">尿微量白蛋白*</th>
        <td colspan="4"><el-input v-model="elder.urine_malb" size="mini" style="width: 70px" />mg/dL</td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">大便潜血*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.fecal_occult_blood">
            <el-radio label="1.阴性" />
            <el-radio label="2.阳性" />
          </el-radio-group>
        </td>
        <td rowspan="11"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">糖化血红蛋白*</th>
        <td colspan="4"><el-input v-model="elder.bloodbc_ghb" size="mini" style="width: 70px" />%</td>
      </tr>
      <tr>
        <th colspan="2">乙型肝炎表面抗原*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.liver_hbsag">
            <el-radio label="1.阴性" />
            <el-radio label="2.阳性" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="3">肝功能*</th>
        <td colspan="4">
          血清谷丙转氨酶<el-input v-model="elder.bloodbc_alt" size="mini" style="width: 70px" />U/L
          血清谷草转氨酶<el-input v-model="elder.bloodbc_ast" size="mini" style="width: 70px" />U/L
        </td>
      </tr>
      <tr>
        <td colspan="4">
          白蛋白<el-input v-model="elder.bloodbc_alb" size="mini" style="width: 70px" />g/L
          总胆红素<el-input v-model="elder.bloodbc_tbil" size="mini" style="width: 70px" />μmol/L
        </td>
      </tr>
      <tr>
        <td colspan="4">结合胆红素<el-input v-model="elder.bloodbc_dbil" size="mini" style="width: 70px" />μmol/L</td>
      </tr>
      <tr>
        <th rowspan="2" colspan="2">肾功能*</th>
        <td colspan="4">
          血清肌酐<el-input v-model="elder.bloodbc_cr" size="mini" style="width: 70px" />μmol/L
          血尿素<el-input v-model="elder.bloodbc_ure" size="mini" style="width: 70px" />mmol/L
        </td>
      </tr>
      <tr>
        <td colspan="4">
          血钾浓度<el-input v-model="elder.bloodbc_k" size="mini" style="width: 70px" />mmol/L
          血钠浓度<el-input v-model="elder.bloodbc_na" size="mini" style="width: 70px" />mmol/L
        </td>
      </tr>
      <tr>
        <th colspan="2" rowspan="3">血脂*</th>
        <td colspan="4">
          总胆固醇<el-input v-model="elder.bloodbc_ghb" size="mini" style="width: 70px" />mmol/L
          甘油三酯<el-input v-model="elder.bloodbc_ghb" size="mini" style="width: 70px" />mmol/L
        </td>
      </tr>
      <tr>
        <td colspan="4">血清低密度脂蛋白胆固醇<el-input v-model="elder.bloodbc_tg" size="mini" style="width: 70px" />mmol/L</td>
      </tr>
      <tr>
        <td colspan="4">血清高密度脂蛋白胆固醇<el-input v-model="elder.bloodbc_tc" size="mini" style="width: 70px" />mmol/L</td>
      </tr>
      <tr>
        <th colspan="2">心电图*</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.ecg">
            <el-checkbox label="1.正常" />
            <el-checkbox label="2.ST-T改变" />
            <el-checkbox label="3.陈旧性心肌梗塞" />
            <el-checkbox label="4.窦性心动过速" />
            <el-checkbox label="5.窦性心动过缓" />
            <el-checkbox label="6.早搏" />
            <el-checkbox label="7.房颤" />
            <el-checkbox label="8.房室传导阻滞" />
            <el-checkbox label="9.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.ecg_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">胸部X线片*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.chest_xray">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.chest_xray_abnormal" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2" rowspan="2">B超*</th>
        <td colspan="4">
          腹部B超：
          <el-radio-group v-model="elder.abdomen_b_ultrasound">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.abdomen_b_ultrasound_abnormal" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <td colspan="4">
          其他：
          <el-radio-group v-model="elder.abdomen_b_ultrasound_other">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.abdomen_b_ultrasound_other__abnormal" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">宫颈涂片*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.liver_hbsag">
            <el-radio label="1.正常" />
            <el-radio label="2.异常" />
          </el-radio-group>
          <el-input v-model="elder.galactophore_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">其他*</th>
        <td colspan="4"><el-input v-model="elder.galactophore_other" size="mini" style="width: 200px" /></td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th rowspan="6">现<br>存<br>主<br>要<br>健<br>康<br>问<br>题</th>
        <th colspan="2">脑血管疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.cerebrovascular">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.缺血性卒中" />
            <el-checkbox label="3.脑出血" />
            <el-checkbox label="4.蛛网膜下腔出血" />
            <el-checkbox label="5.短暂性脑缺血发作" />
            <el-checkbox label="6.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.cerebrovascular_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td rowspan="8"><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th colspan="2">肾脏疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.kidney_diseases">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.糖尿病肾病" />
            <el-checkbox label="3.肾功能衰竭" />
            <el-checkbox label="4.急性肾炎" />
            <el-checkbox label="5.慢性肾炎" />
            <el-checkbox label="6.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.kidney_diseases_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">心血管疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.cardiovascular">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.心肌梗死" />
            <el-checkbox label="3.心绞痛" />
            <el-checkbox label="4.冠状动脉运血重建" />
            <el-checkbox label="5.充血性心力衰竭" />
            <el-checkbox label="6.心前区疼痛" />
            <el-checkbox label="7.高血压" />
            <el-checkbox label="8.夹层动脉瘤" />
            <el-checkbox label="9.动脉闭塞性疾病" />
            <el-checkbox label="10.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.cardiovascular_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">眼部疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.eye_diseases">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.视网膜出血或渗出" />
            <el-checkbox label="3.视乳头水肿" />
            <el-checkbox label="4.白内障" />
            <el-checkbox label="5.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.eye_diseases_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">神经系统其他疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.nervous_system">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.阿尔兹海默症(老年性痴呆)" />
            <el-checkbox label="3.帕金森症" />
            <el-checkbox label="4.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.nervous_system_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">其他系统疾病</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.other_diseases">
            <el-checkbox label="1.未发现" />
            <el-checkbox label="2.糖尿病" />
            <el-checkbox label="3.慢性支气管炎" />
            <el-checkbox label="4.慢性阻塞性肺气肿" />
            <el-checkbox label="5.恶性肿瘤" />
            <el-checkbox label="6.老年性骨关节病" />
            <el-checkbox label="7.其他" />
          </el-checkbox-group>
          <el-input v-model="elder.other_diseases_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
      </tr>
      <tr>
        <th rowspan="2">住院<br>治疗<br>情况</th>
        <th colspan="2">住院史</th>
        <td colspan="4">
          <table>
            <tr>
              <th>入/出院日期</th>
              <th>原因</th>
              <th>医疗机构名称</th>
              <th @click="addHospitalHistory">病案号 <el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(hospital, index) in elder.hospital_history" :key="'hospital' + index">
              <td>
                <el-date-picker v-model="hospital.date0" type="date" size="mini" style=" width: 130px" />
                / <el-date-picker v-model="hospital.date1" type="date" size="mini" style=" width: 130px" />
              </td>
              <td><el-input v-model="hospital.reseaon" size="mini" style=" width: 150px" /></td>
              <td><el-input v-model="hospital.name" size="mini" style=" width: 150px" /></td>
              <td colspan="2">
                <el-input v-model="hospital.patient_no" size="mini" style=" width: 120px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeHospitalHistory(hospital)" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th colspan="2">家庭病床史</th>
        <td colspan="4">
          <table>
            <tr>
              <th>建/撤床日期</th>
              <th>原因</th>
              <th>医疗机构名称</th>
              <th @click="addHomeHistory">病案号 <el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(home, index) in elder.home_history" :key="'home' + index">
              <td>
                <el-date-picker v-model="home.date0" type="date" size="mini" style=" width: 130px" />
                / <el-date-picker v-model="home.date1" type="date" size="mini" style=" width: 130px" />
              </td>
              <td><el-input v-model="home.reseaon" size="mini" style=" width: 150px" /></td>
              <td><el-input v-model="home.name" size="mini" style=" width: 150px" /></td>
              <td colspan="2">
                <el-input v-model="home.patient_no" size="mini" style=" width: 120px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeHomeHistory(home)" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th>主要<br>用药<br>情况</th>
        <td colspan="6">
          <table>
            <tr>
              <th>药物名称</th>
              <th>用法</th>
              <th>用量</th>
              <th>用药时间</th>
              <th @click="addDrugHistory">服药依从性（1.规律 2.间断 3.不服药）<el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(drug, index) in elder.drug_history" :key="'drug' + index">
              <td><el-input v-model="drug.name" size="mini" style=" width: 120px" /></td>
              <td><el-input v-model="drug.usage" size="mini" style=" width: 100px" /></td>
              <td><el-input v-model="drug.dosage" size="mini" style=" width: 100px" /></td>
              <td><el-input v-model="drug.duration" size="mini" style=" width: 80px" /></td>
              <td>
                <el-radio-group v-model="drug.compliance">
                  <el-radio label="1.规律" />
                  <el-radio label="2.间断" />
                  <el-radio label="3.不服药" />
                </el-radio-group>
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeDrugHistory(drug)" />
              </td>
            </tr>
          </table>
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th>非免疫<br>规划预防<br>接种史</th>
        <td colspan="6">
          <table>
            <tr>
              <th>名称</th>
              <th>接种日期</th>
              <th @click="addVaccinateHistory">接种机构 <el-button type="primary" icon="el-icon-plus" circle size="mini" /></th>
            </tr>
            <tr v-for="(vaccinate, index) in elder.vaccinate_history" :key="'vaccinate' + index">
              <td><el-input v-model="vaccinate.name" size="mini" style=" width: 150px" /></td>
              <td><el-date-picker v-model="vaccinate.date" type="date" size="mini" style=" width: 130px" /></td>
              <td>
                <el-input v-model="vaccinate.hospital" size="mini" style=" width: 150px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeVaccinateHistory(vaccinate)" />
              </td>
            </tr>
          </table>
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th>健康<br>评价</th>
        <td colspan="6">
          <el-radio-group v-model="elder.health_evaluation">
            <el-radio label="1.体检无异常" />
            <el-radio label="2.有异常" />
          </el-radio-group>
          <el-button type="primary" icon="el-icon-plus" circle size="mini" style="margin-left: 10px;" @click="addHealthEvaluationAbnormal" /><br>
          <table>
            <tr v-for="(abnormal, index) in elder.health_evaluation_abnormal" :key="'abnormal' + index">
              <td>
                <el-input v-model="abnormal.content" size="mini" style=" width: 350px" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeHealthEvaluationAbnormal(abnormal)" />
              </td>
            </tr>
          </table>
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th>健<br>康<br>指<br>导</th>
        <td colspan="3">
          <el-radio-group v-model="elder.health_guide">
            <el-radio label="1.纳入慢性患者健康管理" /><br>
            <el-radio label="2.建议复查" /><br>
            <el-radio label="3.建议转诊" /><br>
            <el-radio label="4.其他" /><br>
          </el-radio-group><br>
          <el-input v-model="elder.health_guide_other" size="mini" style=" width: 150px" />
        </td>
        <td colspan="3">
          危险因素控制：
          <br>
          <el-checkbox-group v-model="elder.dangerous_factor_control">
            <el-checkbox label="1.戒烟" />
            <el-checkbox label="2.健康饮酒" />
            <el-checkbox label="3.饮食" />
            <el-checkbox label="4.锻炼" />
          </el-checkbox-group>
          <br>
          <el-checkbox v-model="elder.dangerous_factor_control" label="5.减体重" />
          （目标<el-input v-model="elder.dfc_weight_target" size="mini" style=" width: 50px" />kg）
          <br>
          <el-checkbox v-model="elder.dangerous_factor_control" label="6.建议接种疫苗" />
          <el-input v-model="elder.dfc_vaccine" size="mini" style=" width: 150px" />
          <br>
          <el-checkbox v-model="elder.dangerous_factor_control" label="7.其他" />
          <el-input v-model="elder.dfc_other" size="mini" style=" width: 150px" />
        </td>
        <td><img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <th rowspan="4">结<br>果<br>反<br>馈</th>
        <td colspan="7">以上体检结果、健康评价已面对面反馈本人（家属），并已进行健康指导</td>
      </tr>
      <tr>
        <td colspan="3" rowspan="2">&nbsp;</td>
        <td colspan="4">
          签字：<img src="/static/images/doctor_sign.png">（本人）
          /<img src="/static/images/doctor_sign.png">（家属）
        </td>
      </tr>
      <tr>
        <td colspan="4">反馈人签字：<img src="/static/images/doctor_sign.png"></td>
      </tr>
      <tr>
        <td colspan="3">&nbsp;</td>
        <td colspan="4">反馈时间：<el-input v-model="elder.feedback_date" size="mini" style=" width: 150px" /></td>
      </tr>
      <tr>
        <th colspan="11"><el-button type="primary" round @click="saveData">保存</el-button></th>
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
import { parseTime } from '@/utils/index'
import { read, save } from '@/api/elder'

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
        cardiovascular: [],
        eye_diseases: [],
        nervous_system: [],
        other_diseases: [],
        hospital_history: [],
        home_history: [],
        drug_history: [],
        vaccinate_history: [],
        health_evaluation_abnormal: [],
        dangerous_factor_control: []
      },
      listLoading: true
    }
  },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      this.listLoading = true
      var query = this.$route.query
      read({ key: query.key }).then(response => {
        if (response.data) { this.elder = response.data }
        this.listLoading = false
      })
    },
    saveData() {
      save(this.detail, { key: this.detail.elder_key }).then(response => {
        this.$message(response.message)
        this.loading = false
      })
    },
    addHospitalHistory() {
      this.elder.hospital_history.push({
        date0: '2023-08-10',
        date1: '2023-08-10',
        name: '中医院',
        reseaon: '住不了了',
        patient_no: '001002'
      })
    },
    removeHospitalHistory(item) {
      var index = this.elder.hospital_history.indexOf(item)
      if (index !== -1) { this.elder.hospital_history.splice(index, 1) }
    },
    addHomeHistory() {
      this.elder.home_history.push({
        date0: '2023-08-10',
        date1: '2023-08-10',
        name: '中医院',
        reseaon: '住不了了',
        patient_no: '001002'
      })
    },
    removeHomeHistory(item) {
      var index = this.elder.home_history.indexOf(item)
      if (index !== -1) { this.elder.home_history.splice(index, 1) }
    },
    addDrugHistory() {
      this.elder.drug_history.push({
        name: '非洛地平缓释片',
        usage: '一日3次',
        dosage: '一次1片',
        unit: '片',
        method: '口服',
        duration: '1年',
        date: '2023-05',
        compliance: '1.规律'
      })
    },
    removeDrugHistory(item) {
      var index = this.elder.drug_history.indexOf(item)
      if (index !== -1) { this.elder.drug_history.splice(index, 1) }
    },
    addVaccinateHistory() {
      this.elder.vaccinate_history.push({
        name: '流感疫苗',
        date: '2023-08-10',
        hospital: '预防门诊'
      })
    },
    removeVaccinateHistory(item) {
      var index = this.elder.vaccinate_history.indexOf(item)
      if (index !== -1) { this.elder.vaccinate_history.splice(index, 1) }
    },
    addHealthEvaluationAbnormal() {
      this.elder.health_evaluation_abnormal.push({
        content: 'ss'
      })
    },
    removeHealthEvaluationAbnormal(item) {
      var index = this.elder.health_evaluation_abnormal.indexOf(item)
      if (index !== -1) { this.elder.health_evaluation_abnormal.splice(index, 1) }
    }
  }
}
</script>
