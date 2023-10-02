<template>
  <div class="app-container">
    <div style="text-align: center;">
      <h3>健康体检表</h3>
    </div>
    <table style="width: 100%;border:none;">
      <tr>
        <td>姓名：<el-input v-model="elder.patient_name" size="small" style="width: 120px" /></td>
        <td align="right">
          编号：
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
          <el-input v-model="elder.id" size="mini" style="width: 30px" />
        </td>
      </tr>
    </table>
    <table style="width: 100%">
      <tr>
        <th colspan="2">体检日期</th>
        <td>
          <el-input v-model="elder.id" size="mini" style="width: 50px" />年
          <el-input v-model="elder.id" size="mini" style="width: 30px" />月
          <el-input v-model="elder.id" size="mini" style="width: 30px" />日
        </td>
        <th>责任医生</th>
        <td colspan="2">
          <el-input v-model="elder.doctor_name" size="mini" style="width: 80px" />
        </td>
      </tr>
    </table>
    <table class="table" style="width: 100%; border: 1px solid #f00;">
      <tr>
        <th>内容</th>
        <th colspan="6">检查项目</th>
        <th>医师签名</th>
      </tr>
      <tr>
        <th>症<br />状</th>
        <td colspan="6">
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
            <el-input v-model="elder.symptom_other" size="mini" style="margin-left:10px; width: 120px" />
          </el-checkbox-group>
        </td>
        <td><img src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th rowspan="9">一<br />般<br />状<br />况</th>
        <th colspan="2">体温</th>
        <td><el-input v-model="elder.body_temperature" size="mini" style="width: 80px" />℃</td>
        <th>脉率</th>
        <td colspan="2"><el-input v-model="elder.heart_pr" size="mini" style="width: 50px" />次/分钟</td>
        <td rowspan="9"><img id="ysqm_ybzk" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th rowspan="2" colspan="2">呼吸频率</th>
        <td rowspan="2"><el-input v-model="elder.lung_rr" size="mini" style="width: 50px" />次/分钟</td>
        <th rowspan="2">血压</th>
        <td>左侧</td>
        <td>
          <el-input v-model="elder.left_sbp" size="mini" style="width: 50px" />/
          <el-input v-model="elder.left_dbp" size="mini" style="width: 50px" />mmHg
        </td>
      </tr>
      <tr>
        <td>右侧</td>
        <td>
          <el-input v-model="elder.right_sbp" size="mini" style="width: 50px" />/
          <el-input v-model="elder.right_dbp" size="mini" style="width: 50px" />mmHg
        </td>
      </tr>
      <tr>
        <th colspan="2">身高</th>
        <td><el-input v-model="elder.body_height" size="mini" style="width: 50px" />CM</td>
        <th>体重</th>
        <td colspan="2"><el-input v-model="elder.body_weight" size="mini" style="width: 50px" />KG</td>
      </tr>
      <tr>
        <th colspan="2">腰围</th>
        <td><el-input v-model="elder.body_waistline" size="mini" style="width: 50px" />CM</td>
        <th>体质指数（BMI）</th>
        <td colspan="2"><el-input v-model="elder.body_waistline" size="mini" style="width: 50px" />kg/㎡</td>
      </tr>
      <tr>
        <th colspan="2">老年人健康状态自我评估*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.health_status">
            <el-radio label="1.满意">1.满意</el-radio>
            <el-radio label="2.基本满意">2.基本满意</el-radio>
            <el-radio label="3.说不清楚">3.说不清楚</el-radio>
            <el-radio label="4.不太满意">4.不太满意</el-radio>
            <el-radio label="5.不满意">5.不满意</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">老年人生活自理能力自我评估*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.selfcare">
            <el-radio label="1.可自理（0～3分）" />
            <el-radio label="2.轻度依赖（4～8分）" />
            <el-radio label="3.中度依赖（9～18分)" />
            <el-radio label="4.不能自理（≥19分）" />
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">老年人认知功能*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.cognition">
            <el-radio label="1.粗筛阴性"></el-radio>
            <el-radio label="2.粗筛阳性"></el-radio>
          </el-radio-group>
          ，简易智力状态检查，总分<el-input v-model="elder.cognition_score" size="mini" style="margin-left:10px; width: 50px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">老年人情感状态*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.affection">
            <el-radio label="1.粗筛阴性"></el-radio>
            <el-radio label="2.粗筛阳性"></el-radio>
          </el-radio-group>
          ，老年人抑郁评分检查，总分<el-input v-model="elder.affection_score" size="mini" style="margin-left:10px; width: 50px" />
        </td>
      </tr>
      <tr>
        <th rowspan="5">生<br />活<br />方<br />式</th>
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
        <td rowspan="5"><img id="ysqm_shfs" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th colspan="2">饮食习惯</th>
        <td colspan="4">
          
            <el-radio v-model="elder.dietary_style" label="1.荤素均衡"></el-radio>
            <el-radio v-model="elder.dietary_style" label="2.荤食为主"></el-radio>
            <el-radio v-model="elder.dietary_style" label="3.素食为主"></el-radio>
            <el-checkbox-group v-model="elder.dietary_style">
              <el-checkbox label="4.嗜盐"></el-checkbox>
              <el-checkbox label="5.嗜油"></el-checkbox>
              <el-checkbox label="6.嗜糖"></el-checkbox>
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
                  <el-radio label="1.未戒酒"></el-radio>
                  <el-radio label="2.已戒酒"></el-radio>
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
                  <el-checkbox label="1.白酒"></el-checkbox>
                  <el-checkbox label="2.啤酒"></el-checkbox>                   
                  <el-checkbox label="3.红酒"></el-checkbox>
                  <el-checkbox label="4.黄酒"></el-checkbox>
                  <el-checkbox label="5.其他"></el-checkbox>
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
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
                </el-radio-group>
                （工种<el-input v-model="elder.od_types" size="mini" style="width: 50px" />从业时间
                  <el-input v-model="elder.od_years" size="mini" style="width: 50px" />年）
              </td>
            </tr>
            <tr>
              <th rowspan="6">毒<br />物<br />种<br>类</th>
            </tr>
            <tr>
              <td>粉尘</td>
              <td><el-input v-model="elder.od_dust" size="mini" style="width: 100px" /></td>
              <td>防护措施</td>
              <td>
                <el-radio-group v-model="elder.od_dust_protect">
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
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
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
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
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
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
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
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
                  <el-radio label="1.无"></el-radio>
                  <el-radio label="2.有"></el-radio> 
                </el-radio-group>
                <el-input v-model="elder.od_other_protect_content" size="mini" style="margin-left:10px; width: 100px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th rowspan="6">脏<br />器<br />功<br />能</th>
        <th rowspan="3" colspan="2">口腔</th>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_dentition">
            <el-radio label="1.红润"></el-radio>
            <el-radio label="2.苍白"></el-radio> 
            <el-radio label="3.发绀"></el-radio> 
            <el-radio label="4.皲裂"></el-radio> 
            <el-radio label="5.疱疹"></el-radio> 
          </el-radio-group>
        </td>
        <td rowspan="6"><img id="ysqm_zqgn" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <td colspan="4">
          <table style="width:auto; display:inline">
            <tr>
              <td><el-checkbox v-model="elder.mouth_dentition" label="1.正常"></el-checkbox></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="2.缺齿"></el-checkbox></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="3.龋齿"></el-checkbox></td>
              <td colspan="2"><el-checkbox v-model="elder.mouth_dentition" label="4.义齿(假牙)"></el-checkbox></td>
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
            <el-radio label="1.无充血"></el-radio>
            <el-radio label="2.充血"></el-radio> 
            <el-radio label="3.淋巴滤泡增生"></el-radio> 
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
            <el-radio label="1.听见"></el-radio>
            <el-radio label="2.听不清或无法听见"></el-radio> 
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">运动功能</th>
        <td colspan="4">
          <el-radio-group v-model="elder.mouth_dentition">
            <el-radio label="1.可顺利完成"></el-radio>
            <el-radio label="2.无法独立完成任何一个动作"></el-radio> 
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th rowspan="19">查体</th>
        <th colspan="2">眼底*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.fundus">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.fundus_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img id="ysqm_yd" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th colspan="2" >皮肤</th>
        <td colspan="4">
          <el-radio-group v-model="elder.skin">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.潮红"></el-radio> 
            <el-radio label="3.苍白"></el-radio> 
            <el-radio label="4.发绀"></el-radio> 
            <el-radio label="5.黄染"></el-radio> 
            <el-radio label="6.色素沉着"></el-radio> 
            <el-radio label="7.其他"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.skin_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td rowspan="10"><img id="ysqm_ct" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th colspan="2">巩膜</th>
        <td colspan="4">
          <el-radio-group v-model="elder.sclera">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.黄染"></el-radio> 
            <el-radio label="3.充血"></el-radio> 
            <el-radio label="4.其他"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.sclera_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">淋巴结</th>
        <td colspan="4">
          <el-radio-group v-model="elder.lymph_node">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.锁骨上"></el-radio> 
            <el-radio label="3.腋窝"></el-radio> 
            <el-radio label="4.其他"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.lymph_node_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th rowspan="3" colspan="2">肺</th>
        <td colspan="4">
          桶状胸：
          <el-radio-group v-model="elder.sclera">
            <el-radio label="1.否"></el-radio>
            <el-radio label="2.是"></el-radio> 
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          呼吸音：
          <el-radio-group v-model="elder.breath_sound">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.breath_sound_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <td colspan="4">
          罗音：
          <el-radio-group v-model="elder.rale">
            <el-radio label="1.正常"></el-radio>
            <el-radio label="2.干罗音"></el-radio> 
            <el-radio label="3.湿罗音"></el-radio> 
            <el-radio label="4.其他"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.rale_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">心脏</th>
        <td colspan="4">
          心率：
          <el-input v-model="elder.heart_rate" size="mini" style="width: 50px" />次/分<br />
          心律：
          <el-radio-group v-model="elder.heart_rhythm">
            <el-radio label="1.齐"></el-radio>
            <el-radio label="2.不齐"></el-radio> 
            <el-radio label="3.绝对不齐"></el-radio> 
          </el-radio-group><br />
          杂音：
          <el-radio-group v-model="elder.cardiac_murmur">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.cardiac_murmur_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">腹部</th>
        <td colspan="4">
          压痛:
          <el-radio-group v-model="elder.tenderness">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.tenderness_content" size="mini" style="margin-left:10px; width: 100px" /><br />
          包块:
          <el-radio-group v-model="elder.abdominal_mass">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.abdominal_mass_content" size="mini" style="margin-left:10px; width: 100px" /><br />
          肝大:
          <el-radio-group v-model="elder.hepatomegaly">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.hepatomegaly_content" size="mini" style="margin-left:10px; width: 100px" /><br />
          脾大:
          <el-radio-group v-model="elder.splenomegaly">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.splenomegaly_content" size="mini" style="margin-left:10px; width: 100px" /><br />
          移动性浊音:
          <el-radio-group v-model="elder.shifting_dullness">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.有"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.shifting_dullness_content" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th colspan="2">下肢水肿</th>
        <td colspan="4">
          <el-radio-group v-model="elder.shifting_dullness">
            <el-radio label="1.无"></el-radio>
            <el-radio label="2.单侧"></el-radio> 
            <el-radio label="3.双侧不对称"></el-radio> 
            <el-radio label="4.双侧对称"></el-radio> 
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">足背动脉搏动*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.dorsalis_pedis_artery_pulse">
            <el-radio label="1.未触及"></el-radio>
            <el-radio label="2.触及双侧对称"></el-radio> 
            <el-radio label="3.触及左侧弱或消失"></el-radio> 
            <el-radio label="4.触及右侧弱或消失"></el-radio> 
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th colspan="2">肛门指诊*</th>
        <td colspan="4">
          <el-radio-group v-model="elder.anus">
            <el-radio label="1.未及异常"></el-radio>
            <el-radio label="2.触痛"></el-radio> 
            <el-radio label="3.包块"></el-radio> 
            <el-radio label="4.前列腺异常"></el-radio> 
            <el-radio label="5.其他"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.anus_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img id="ysqm_gmzz" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th colspan="2">乳腺*</th>
        <td colspan="4">
          <el-checkbox-group v-model="elder.galactophore">
            <el-checkbox label="1.未见异常"></el-checkbox>
            <el-checkbox label="2.乳房切除"></el-checkbox> 
            <el-checkbox label="3.异常泌乳"></el-checkbox> 
            <el-checkbox label="4.乳腺包块"></el-checkbox> 
            <el-checkbox label="5.其他"></el-checkbox> 
          </el-checkbox-group>
          <el-input v-model="elder.galactophore_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td><img id="ysqm_rx" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <th rowspan="5">妇科*</th>
        <td>外阴</td>
        <td colspan="4">
          <el-radio-group v-model="elder.vulva">
            <el-radio label="1.未见异常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.vulva_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
        <td rowspan="5"><img id="ysqm_fk" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
        <td>阴道</td>
        <td colspan="4">
          <el-radio-group v-model="elder.vagina">
            <el-radio label="1.未见异常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.vagina_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <td>宫颈</td>
        <td colspan="4">
          <el-radio-group v-model="elder.cervix">
            <el-radio label="1.未见异常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.cervix_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <td>宫体</td>
        <td colspan="4">
          <el-radio-group v-model="elder.uterine_body">
            <el-radio label="1.未见异常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.uterine_body_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <td>附件</td>
        <td colspan="4">
          <el-radio-group v-model="elder.uterine_adnexa">
            <el-radio label="1.未见异常"></el-radio>
            <el-radio label="2.异常"></el-radio> 
          </el-radio-group>
          <el-input v-model="elder.uterine_adnexa_other" size="mini" style="margin-left:10px; width: 100px" />
        </td>
      </tr>
      <tr>
        <th>其他*</th>
        <td colspan="5">
          <el-input v-model="elder.body_other" size="mini" style="margin-left:10px; width: 200px" />
        </td>
        <td><img id="ysqm_ct_qt" src="/static/images/doctor_sign.png" /></td>
      </tr>
      <tr>
            <th rowspan="26">辅<br />
                助<br />
                检<br />
                查</th>

            <td colspan="2">血&nbsp;型</td>
            <td colspan="4">ABO<input type="text" class="input"
                id="xx_abo" style="width: 10%; text-align: left" />
                Rh*<input type="text" class="input"
                    id="xx_rh" style="width: 10%; text-align: left" /></td>
            <td rowspan="7">
                <img id="ysqm_fzjc" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2" rowspan="2">血常规*</td>
            <td colspan="4" style="border-bottom: none !important;">
                <div>
                    血红蛋白<input type="text" class="input" id="xcg_xhdb" />g/L
                    白细胞<input type="text" class="input" id="xcg_bxb" />×10⁹/L
                    血小板<input type="text" class="input" id="xcg_xxb" />×10⁹/L
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="border-top: none !important; border-bottom: none !important;">
                <div>
                    其他<input type="text" class="input inputEx" style="width: 90%;" id="xcg_qt" />
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" rowspan="2">尿常规*
            </td>
            <td colspan="4" style="border-bottom: none !important;">
                <div>
                    尿蛋白<input type="text" class="input" id="ncg_ndb" />
                    尿糖<input type="text" class="input" id="ncg_nt" />
                    尿酮体<input type="text" class="input" id="ncg_ntt" />
                    尿潜血<input type="text" class="input" id="ncg_nqx" />
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="border-top: none !important; border-bottom: none !important;">其他<input type="text" class="input" style="width: 90%; text-align: left;" id="ncg_qt" />
            </td>
        </tr>
        <tr>
            <td colspan="2">空腹血糖</td>
            <td colspan="4">
                <input type="text" class="input" id="fzjc_kfxt_1" />mmol/L
                或
                <input type="text" class="input" id="fzjc_kfxt_2" />mg/dL
            </td>
        </tr>
        <tr>
            <td colspan="2">同型半胱氨酸</td>
            <td colspan="4">
                <input type="text" class="input" id="txbgas" />umol/L</td>
        </tr>
        <tr>
            <td colspan="2">尿微量白蛋白*</td>
            <td colspan="4">
                <input type="text" class="input" id="fzjc_nwlbdb" />mg/dL
            </td>
            <td>
                <img id="ysqm_fzjc_nwl" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr class="PageChange">
        </tr>
        <tr>
            <!--            <th rowspan="17">辅<br />
                助<br />
                检<br />
                查</th>-->
            <td colspan="2">大便潜血*</td>
            <td colspan="4">
                <div id="_fzjc_dbqx">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_fzjc_dbqx" />1.阴性</label>
                    <label name="2">
                        <input type="checkbox" name="cb_fzjc_dbqx" />2.阳性</label>
                    <input type="text" class="singleText" id="fzjc_dbqx" />
                </div>
            </td>
            <td rowspan="11">
                <img id="ysqm_fzjc_hy" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2">糖化血红蛋白*</td>
            <td colspan="4">
                <input type="text" class="input" id="fzjc_thxhdb" />%
            </td>
        </tr>
        <tr>
            <td colspan="2">乙型肝炎<br />
                表面抗原*
            </td>
            <td colspan="4">
                <div id="_fzjc_yxgybmky">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_fzjc_yxgybmky" />1.阴性</label>
                    <label name="2">
                        <input type="checkbox" name="cb_fzjc_yxgybmky" />2.阳性</label>
                    <input type="text" class="singleText" id="fzjc_yxgybmky" />
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" rowspan="3">肝功能*</td>
            <th colspan="4" style="border-bottom: none !important; text-align: left">
                <div class="sameRow">
                    血清谷丙转氨酶<input type="text" class="input" id="ggn_xqgbzam" />U/L &nbsp;
                </div>
                <div class="sameRow">
                    血清谷草转氨酶
                    <input type="text" class="input" id="ggn_xqgczam" />U/L
                </div>
            </th>
        </tr>
        <tr>
            <th colspan="4" style="border-top: none !important; border-bottom: none !important; text-align: left">
                <div class="sameRow">
                    白蛋白<input type="text" class="input" id="ggn_bdb" />g/L&nbsp;
                </div>
                <div class="sameRow">
                    总胆红素
                    <input type="text" class="input" id="ggn_zdhs" />μmol/L
                </div>
            </th>
        </tr>
        <tr>
            <th colspan="4" style="border-top: none !important; text-align: left">结合胆红素<input type="text" class="input" id="ggn_jhdhs" />μmol/L
            </th>
        </tr>
        <tr>
            <td rowspan="2" colspan="2">肾功能*
            </td>
            <th colspan="4" style="border-bottom: none !important; text-align: left">
                <div class="sameRow">
                    血清肌酐<input type="text" class="input" id="sgn_xqjg" />μmol/L &nbsp;
                </div>
                <div class="sameRow">
                    血尿素
                    <input type="text" class="input" id="sgn_xns" />mmol/L
                </div>
            </th>
        </tr>
        <tr>
            <th colspan="4" style="border-top: none !important; text-align: left">
                <div class="sameRow">
                    血钾浓度<input type="text" class="input" id="sgn_xjnd" />mmol/L&nbsp;
                </div>
                <div class="sameRow">
                    血钠浓度
                    <input type="text" class="input" id="sgn_xnnd" />mmol/L
                </div>
            </th>
        </tr>
        <tr>
            <td colspan="2" rowspan="3">血脂*</td>
            <th colspan="4" style="border-bottom: none !important; text-align: left">
                <div class="sameRow">
                    总胆固醇<input type="text" class="input" id="xz_zdgc" />mmol/L&nbsp;
                </div>
                <div class="sameRow">
                    甘油三酯
                    <input type="text" class="input" id="xz_gysz" />mmol/L
                </div>
            </th>
        </tr>
        <tr>
            <th colspan="4" style="border-top: none !important; border-bottom: none !important; text-align: left">血清低密度脂蛋白胆固醇<input type="text" class="input" id="xz_xqdmdzdbdgc" />mmol/L
            </th>
        </tr>
        <tr>
            <th colspan="4" style="border-top: none !important; text-align: left">血清高密度脂蛋白胆固醇<input type="text" class="input" id="xz_xqgmdzdbdgc" />mmol/L
            </th>
        </tr>
        <tr>
            <td colspan="2">心电图*</td>
            <td colspan="4">
                <div id="_fzjc_xdt">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_fzjc_xdt" />1.正常</label>
                    <label name="2">
                        <input type="checkbox" name="cb_fzjc_xdt" />2.ST-T改变</label>
                    <label name="3">
                        <input type="checkbox" name="cb_fzjc_xdt" />3.陈旧性心肌梗塞</label>
                    <label name="4">
                        <input type="checkbox" name="cb_fzjc_xdt" />4.窦性心动过速</label>
                    <label name="5">
                        <input type="checkbox" name="cb_fzjc_xdt" />5.窦性心动过缓</label>
                    <label name="6">
                        <input type="checkbox" name="cb_fzjc_xdt" />6.早搏</label>
                    <label name="7">
                        <input type="checkbox" name="cb_fzjc_xdt" />7.房颤</label>
                    <label name="8">
                        <input type="checkbox" name="cb_fzjc_xdt" />8.房室传导阻滞</label>
                    <label name="9">
                        <input type="checkbox" name="cb_fzjc_xdt" />9.其他<input type="text"
                            class="input inputEx" id="fzjc_xdt_qt" style="width: 20%" /></label>
                </div>
                <div class="multiText" style="width: 300px; height: 20px" id="fzjc_xdt">
                </div>
            </td>
            <td>
                <img id="ysqm_fzjc_xdt" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2">胸部X线片*</td>
            <th colspan="4" style="text-align: left">
                <div id="_fzjc_xbxxp">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_fzjc_xbxxp" />1.正常</label>
                    <label name="2">
                        <input type="checkbox" name="cb_fzjc_xbxxp" />2.异常<input type="text"
                            class="input inputEx" id="fzjc_xbxxp_yc" /></label>
                    <input type="text" class="singleText" id="fzjc_xbxxp" />
                </div>
            </th>
            <td>
                <img id="ysqm_fzjc_xx" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2" rowspan="2">B超*</td>
            <th colspan="4" style="text-align: left">
                <div id="_bc_fbbc">
                    腹部B超
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_bc_fbbc" />1.正常</label>
                    <label name="2">
                        <input type="checkbox" name="cb_bc_fbbc" />2.异常<input type="text"
                            class="input inputEx" id="bc_fbbc_yc" style="width:500px" /></label>
                    <input type="text" class="singleText" id="bc_fbbc" />
                </div>
            </th>
            <td>
                <img id="ysqm_fzjc_fbbc" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th colspan="4" style="text-align: left">
                <div id="_bc_qt">
                    其他
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_bc_qt" />1.正常</label>
                    <label name="2">
                        <input type="checkbox" name="cb_bc_qt" />2.异常<input type="text" class="input inputEx"
                            id="bc_qt_yc" /></label>
                    <input type="text" class="singleText" id="bc_qt" />
                </div>
            </th>
            <td>
                <img id="ysqm_fzjc_bcqt" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2">宫颈涂片*</td>
            <th colspan="4" style="text-align: left">
                <div id="_fzjc_gjtp">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_fzjc_gjtp" />1.正常</label>
                    <label name="2">
                        <input type="checkbox" name="cb_fzjc_gjtp" />2.异常<input type="text"
                            class="input inputEx" id="fzjc_gjtp_yc" /></label>
                    <input type="text" class="singleText" id="fzjc_gjtp" />
                </div>
            </th>
            <td>
                <img id="ysqm_fzjc_gjtp" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2">其他*</td>
            <td colspan="4">
                <input type="text" class="input" style="width: 90%; text-align: left" id="fzjc_qt" />
            </td>
            <td>
                <img id="ysqm_fzjc_qt" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th rowspan="6">现<br />
                存<br />
                主<br />
                要<br />
                健<br />
                康<br />
                问<br />
                题</th>
            <td colspan="2">脑血管疾病</td>
            <td colspan="4">
                <div id="_xczyjkwt_nxgjb">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" />1.未发现</label>
                    <label name="2">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" onclick="CheckMB()" />2.缺血性卒中</label>
                    <label name="3">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" />3.脑出血</label>
                    <label name="4">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" />4.蛛网膜下腔出血</label>
                    <label name="5">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" />5.短暂性脑缺血发作</label>
                    <label name="6">
                        <input type="checkbox" name="cb_xczyjkwt_nxgjb" />6.其他<input type="text"
                            class="input inputEx" id="xczyjkwt_nxgjb_qt" /></label>
                </div>
                <div type="text" class="multiText" style="width: 300px; margin-top: -20px;" id="xczyjkwt_nxgjb">
                </div>
            </td>
            <td rowspan="8">
                <img id="ysqm_xcwt" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <td colspan="2">肾脏疾病</td>
            <td colspan="4" style="margin: 0px; padding: 0px">
                <div id="_xczyjkwt_szjb" style="width: 100%; margin: 0px; padding: 0px">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />1.未发现</label>
                    <label name="2">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />2.糖尿病肾病</label>
                    <label name="3">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />3.肾功能衰竭</label>
                    <label name="4">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />4.急性肾炎</label>
                    <label name="5">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />5.慢性肾炎</label>
                    <label name="6">
                        <input type="checkbox" name="cb_xczyjkwt_szjb" />6.其他<input type="text"
                            class="input inputEx" id="xczyjkwt_szjb_qt" /></label>
                </div>
                <div type="text" class="multiText" style="width: 300px; margin-top: -20px;" id="xczyjkwt_szjb"></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">心血管疾病</td>
            <td colspan="4">
                <div id="_xczyjkwt_xxgjb">
                    <label name="1" class="Normal" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />1.未发现</label>
                    <label name="2" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />2.心肌梗死</label>
                    <label name="3" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />3.心绞痛</label>
                    <label name="4" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />4.冠状动脉运血重建</label>
                    <label name="5" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />5.充血性心力衰竭</label><br />
                    <label name="6" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />6.心前区疼痛</label>
                    <label name="7" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" id="cb_xczyjkwt_xxgjb_gxy" onclick="CheckMB()" />7.高血压</label>
                    <label name="8" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />8.夹层动脉瘤</label>
                    <label name="9" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />9.动脉闭塞性疾病</label>
                    <label name="10" style="display: inline;">
                        <input type="checkbox" name="cb_xczyjkwt_xxgjb" />10.其他
                        <input type="text" class="input inputEx" id="xczyjkwt_xxgjb_qt" /></label>
                </div>
                <div type="text" class="multiText" style="width: 200px; display: inline; margin-top: 0px;"
                    id="xczyjkwt_xxgjb">
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">眼部疾病</td>
            <td colspan="4" style="margin: 0px; padding: 0px">
                <div id="_xczyjkwt_ybjb" style="width: 100%; margin: 0px; padding: 0px">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_xczyjkwt_ybjb" />1.未发现</label>
                    <label name="2">
                        <input type="checkbox" name="cb_xczyjkwt_ybjb" />2.视网膜出血或渗出</label>
                    <label name="3">
                        <input type="checkbox" name="cb_xczyjkwt_ybjb" />3.视乳头水肿</label>
                    <label name="4">
                        <input type="checkbox" name="cb_xczyjkwt_ybjb" />4.白内障</label>
                    <label name="5">
                        <input type="checkbox" name="cb_xczyjkwt_ybjb" />5.其他<input type="text"
                            class="input inputEx" id="xczyjkwt_ybjb_qt" /></label>
                </div>
                <div type="text" class="multiText" style="width: 300px; margin-top: -20px;" id="xczyjkwt_ybjb">
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">神经系统其他疾病</td>
            <td colspan="4">
                <div id="_xczyjkwt_sjxtjb">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_xczyjkwt_sjxtjb" />1.未发现</label>
                    <label name="2">
                        <input type="checkbox" name="cb_xczyjkwt_sjxtjb" />2.阿尔兹海默症(老年性痴呆)</label>
                    <label name="3">
                        <input type="checkbox" name="cb_xczyjkwt_sjxtjb" />3.帕金森症</label>
                    <label name="4">
                        <input type="checkbox" name="cb_xczyjkwt_sjxtjb" />4.其他<input type="text"
                            class="input inputEx" id="xczyjkwt_sjxtjb_info" /></label>
                    <div class="multiText" style="width: 300px; height: 10px; margin-top: -20px;" id="xczyjkwt_sjxtjb">
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">其他系统疾病</td>
            <td colspan="4">
                <div id="_xczyjkwt_qtxtjb">
                    <label name="1" class="Normal">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />1.未发现</label>
                    <label name="2">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" id="cb_xczyjkwt_qtxtjb_tnb"  onclick="CheckMB()"/>2.糖尿病</label>
                    <label name="3">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />3.慢性支气管炎</label>
                    <label name="4">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />4.慢性阻塞性肺气肿</label>
                    <label name="5">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />5.恶性肿瘤</label>
                    <label name="6">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />6.老年性骨关节病</label>
                    <label name="7">
                        <input type="checkbox" name="cb_xczyjkwt_qtxtjb" />7.其他
                    <input type="text" class="input inputEx" id="xczyjkwt_qtxtjb_info" /></label>
                </div>
                <div class="multiText" style="width: 300px; height: 10px; margin-top: -20px;" id="xczyjkwt_qtxtjb">
                </div>
            </td>
        </tr>
            <tr>
            <td rowspan="2">住院<br />
                治疗<br />
                情况</td>
            <td colspan="2"><a href="javascript:addRow('zyzlqk_zys');" style="color: darkslateblue;">住院史</a></td>
            <td colspan="4" style="margin: 0px; padding: 0px" valign="top">
                <table style="width: 100%; height: 100%; margin: 0px; padding: 0px" id="zyzlqk_zys" class="table">
                    <tr style="margin: 0px; padding: 0px">
                        <th style="border-top: none;width:25%" class="auto-style3">入/出院日期
                        </th>
                        <th style="border-top: none;width:25%" class="auto-style3">原因
                        </th>
                        <th style="border-top: none;width:25%" class="auto-style3">医疗机构名称
                        </th>
                        <th style="border-top: none;width:25%" class="auto-style3">病案号
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input class="input extrInput" type="text" onclick="WdatePicker({ el: this, dateFmt: 'yyyy-MM-dd' })" />/<input
                                class="input extrInput" type="text" onclick="WdatePicker({ el: this, dateFmt: 'yyyy-MM-dd' })" />
                        </td>
                        <td>
                            <input type="text" class="input extrInput" style="width:70%" />
                        </td>
                        <td>
                            <input type="text" class="input extrInput" style="width:70%" />
                        </td>
                        <td colspan="2">
                            <input type="text" class="input extrInput" style="width:70%" /><a onclick="DeleteRow('zyzlqk_zys',this.parentNode.parentNode.rowIndex)"
                                style="color: firebrick; padding-left: 30%;">删除</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2"><a href="javascript:addRow('zyzlqk_jtbcs');" style="color: darkslateblue;">家庭病床史</a></td>
            <td colspan="4" style="margin: 0px; height: 100%; padding: 0px" valign="top">
                <table style="width: 100%; margin: 0px; padding: 0px" id="zyzlqk_jtbcs" class="table">
                    <tr>
                        <th style="border-top: none;width:25%">建/撤床日期
                        </th>
                        <th style="border-top: none;width:25%">原因
                        </th>
                        <th style="border-top: none;width:25%">医疗机构名称
                        </th>
                        <th style="border-top: none;width:25%">病案号
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input class="input extrInput" type="text" onclick="WdatePicker({ el: this, dateFmt: 'yyyy-MM-dd' })" />/<input
                                class="input extrInput" type="text" onclick="WdatePicker({ el: this, dateFmt: 'yyyy-MM-dd' })" />
                        </td>
                        <td>
                            <input type="text" class="input extrInput" style="width:70%"/>
                        </td>
                        <td>
                            <input type="text" class="input extrInput" style="width:70%"/>
                        </td>
                        <td colspan="2">
                            <input type="text" class="input extrInput" style="width:70%"/><a onclick="DeleteRow('zyzlqk_jtbcs',this.parentNode.parentNode.rowIndex)"
                                style="color: firebrick; padding-left: 30%;">删除</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr class="PageChange">
        </tr>
        <tr>
            <th><a href="javascript:addRow('zyyyqk');" style="color: darkslateblue;">主要<br />
                用药<br />
                情况</a></th>

            <td colspan="6" style="margin: 0px; padding: 0px; height: 100%" valign="top">
                <table id="zyyyqk" style="width: 100%; height: 100%; margin: 0px; padding: 0px" class="table">
                    <tr>
                        <th style="width:25%">药物名称
                        </th>
                        <th style="width:20%">用法
                        </th>
                        <th style="width:20%">用量
                        </th>
                        <th style="width:20%">用药时间
                        </th>
                        <th style="width:15%">服药依从性<br />
                            （1.规律 2.间断 3.不服药）
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" style="width: 90%" class="input extrInput" onkeydown="YongYaoKeyDownEvent(this)" />
                        </td>
                        <td>
                            <input type="text" style="width: 90%"  class="input extrInput" onkeydown="YongFaKeyDownEvent(this)" />
                        </td>
                        <td>
                            <input type="text" style="width: 90%" class="input extrInput" onkeydown="YongLiangKeyDownEvent(this)" />
                        </td>
                        <td>
                            <input type="text" class="input extrInput" style="width: 90%" />
                        </td>
                        <td align="center" colspan="2" style="border-right-style: none">
                            <input type="text" class="input extrInput" style="width: 50px" />
                            <a onclick="DeleteRow('zyyyqk',this.parentNode.parentNode.rowIndex)" class="Noprint"
                                style="color: firebrick; padding-left: 40%;">删除</a>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <img id="ysqm_yyqk" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th>
                <a href="javascript:addRow('fmyghyfjzs');" style="color: darkslateblue;">非免疫<br />
                    规划预防<br />
                    接种史</a>
            </th>
            <td colspan="6" style="margin: 0px; padding: 0px; height: 100%" valign="top">
                <table id="fmyghyfjzs" style="width: 100%; height: 100%; margin: 0px; padding: 0px" class="table">
                    <tr>
                        <th>名称
                        </th>
                        <th>接种日期
                        </th>
                        <th>接种机构
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" class="input extrInput"style="width:70%" />
                        </td>
                        <td>
                            <input class="input extrInput" type="text" style="width:70%" onclick="WdatePicker({ el: this, dateFmt: 'yyyy-MM-dd' })" />
                        </td>
                        <td colspan="4">
                            <input type="text" class="input extrInput" style="width:70%"/>
                            <a onclick="DeleteRow('fmyghyfjzs',this.parentNode.parentNode.rowIndex)"
                                style="color: firebrick; padding-left: 40%;">删除</a>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <img id="ysqm_myjz" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th>健康<br />
                评价
            </th>
            <td id="_jkpj" colspan="6">
                <label name="1" class="Normal">
                    <input type="checkbox" name="cb_jkpj" />1.体检无异常</label>
                <label name="2">
                    <input type="checkbox" name="cb_jkpj" />2.有异常</label>
                <input type="text" class="singleText" id="jkpj" />
                <table class="subTable" id="jkpj_yc">
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <!--   <a href="javascript:RelationZd();" style="float: right; color: dodgerblue;">重录</a>-->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="javascript:addRow('jkpj_yc');" style="color: darkslateblue;">异常</a>
                        </td>
                        <td>
                            <input type="text" class="input" style="width: 700px;" />
                        </td>
                        <td>
                            <a onclick="DeleteRow('jkpj_yc',this.parentNode.parentNode.rowIndex)"
                                style="color: firebrick;">删除</a>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <img id="ysqm_jkpj" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th>健<br />
                康<br />
                指<br />
                导
            </th>
            <td id="_jkzd" colspan="3">
                <label name="1" class="Normal">
                    <input type="checkbox" name="cb_jkzd" id="cb_jkzd_mbgl" />1.纳入慢性患者健康管理</label>
                <br />
                <label name="2" class="Normal">
                    <input type="checkbox" name="cb_jkzd" id="cb_jkzd_fc" />2.建议复查</label>
                <br />
                <label name="3" class="Normal">
                    <input type="checkbox" name="cb_jkzd" id="cb_jkzd_zz" />3.建议转诊</label>
                <br />
                 <label name="4" class="Normal">
                    <input type="checkbox" name="cb_jkzd"  />4.其他<input type="text"
                        class="input" id="jkzd_qt" style="width: 200px" /></label>
                <br />
                <div type="text" class="multiText" style="width: 300px" id="jkzd">
                </div>
            </td>
            <td id="_wxyskz" colspan="3">
                <div>
                    <span>危险因素控制：</span><div type="text" class="multiText" style="float: right; margin-top: -15px; width: 200px;"
                        id="wxyskz">
                    </div>
                </div>
                <br />
                <label name="1" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_jy" />1.戒烟</label>
                <label name="2" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_jkyj" />2.健康饮酒</label>
                <label name="3" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_ys" />3.饮食</label>
                <label name="4" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_dl" />4.锻炼</label>
                <br />
                <label name="5" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_jtz" />5.减体重（目标<input
                        type="text" class="input" id="wxyskz_jtz" />kg）</label>
                <br />
                <label name="6" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" />6.建议接种疫苗<input type="text"
                        class="input inputEx" id="wxyskz_jyjzym" /></label>
                <br />
                <label name="7" class="Normal">
                    <input type="checkbox" name="cb_wxyskz" id="cb_wxyskz_qt" />7.其他<input type="text"
                        class="input" id="wxyskz_qt" style="width: 200px" /></label>
            </td>
            <td>
                <img id="ysqm_jkzd" src="/static/images/doctor_sign.png" /></td>
        </tr>
        <tr>
            <th rowspan="4">结<br />
                果<br />
                反<br />
                馈
            </th>
            <td colspan="7" style="border-bottom: 0px none">以上体检结果、健康评价已面对面反馈本人（家属），并已进行健康指导
            </td>
        </tr>
        <tr>
            <td colspan="3" style="border-bottom: 0px none; border-top: 0px none; border-right: 0px none"></td>
            <td colspan="4" style="border-bottom: 0px none; border-top: 0px none; border-left: 0px none">签字：
                <img id="qz_br" src="/static/images/doctor_sign.png" />（本人）/
               <!-- <input type="text"class="input" id="jgfk_br" />（本人）/
                <input type="text"  class="input" id="jgfk_js" />-->
                <img id="qz_js" src="/static/images/doctor_sign.png" />（家属）

            </td>
        </tr>
        <tr>
            <td colspan="3" style="border-bottom: 0px none; border-top: 0px none; border-right: 0px none" class="auto-style6"></td>
            <td colspan="4" style="border-bottom: 0px none; border-top: 0px none; border-left: 0px none" class="auto-style6">反馈人签字：<!--<input type="text"
                class="input" id="jgfk_fkrqz" />-->
                <img id="qz_fkr" src="/static/images/doctor_sign.png" />
            </td>
        </tr>
        <tr>
            <td colspan="3" style="border-top: 0px none; border-right: 0px none"></td>
            <td colspan="4" style="border-top: 0px none; border-left: 0px none">反馈时间：<input type="text"
                class="input" id="qz_fksj" /></td>
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
import { read } from '@/api/elder'

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
        symptom: ['1.无症状', '2.头痛'],
        health_status: [],
        selfcare: [],
        cognition: [],
        affection: [],
        dietary_style: ['5.嗜盐'],
        drink_type: [],
        mouth_dentition: [],
        galactophore: []
      },
      listLoading: true
    }
  },
  created() {
    //this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      read({ key: 'elder169557519105103' }).then(response => {
        this.elder = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
