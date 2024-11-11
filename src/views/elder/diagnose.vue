<template>
  <div class="app-container">
    <el-collapse accordion v-model="activeNames" @change="collapseChange">
        <el-collapse-item :title="item.title" :name="item.id" v-for="item in list">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {title:"反馈 Feedback",id:'1'},
                {title:"效率 Efficiency",id:'2'},
                {title:"可控 Controllability",id:'3'},
                {title:"反馈 Feedback",id:'4'} 
            ],
            activeNames: '1'
        }
    },
    methods: {
        collapseChange(activeNames){
            alert(activeNames);
        },
    }
}
</script>
