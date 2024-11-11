<template>
    <div style="display: inline;">
        <el-checkbox-group v-model="val" style="display: inline;" :max="m">
            <el-checkbox border v-for="(text, index) in arr" :key="index" :label="text" @change.native="sync" />
        </el-checkbox-group>
        <el-input v-model="oth" v-if="this.other!==undefined" :disabled="!val.includes(arr[arr.length-1])" :placeHolder="oth" @input="sync" :style="style" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckBoxAuto',
    props:{value:Array, values:String, other:String, max:String, width:String, first:String},
    data() {
      return {
        val: Array.isArray(this.value) ? this.value : (this.value===undefined || this.value=='' ?[]:this.value.split('|')),
        str: this.values,
        m: this.max===undefined ? 1 : parseInt(this.max),
        oth: this.other===undefined ? '' : this.other+'',
        style: this.width===undefined ? 'width:150px' : 'width:'+this.width+'',
      }
    },
    computed: {
        arr() {
            return (this.values+'').split('|')
        }
    },
    methods: {
      sync(event){
        //alert(this.first=='only');
        if(this.first=='only'){
          if(this.val.includes(this.arr[0])){
            this.val.splice(0,this.val.indexOf(this.arr[0]));
            this.val.splice(this.val.indexOf(this.arr[0])+1);
            this.m=1;
          }else{
            this.m=this.max===undefined ? 1 : parseInt(this.max)
          }
        }
        this.$emit('update:value', this.val) 
        this.$emit('update:values', this.str)
        this.$emit('update:other', this.val.includes(this.arr[this.arr.length-1])===false ? undefined : this.oth)
      }
    }
  }
  </script>
  <style scoped>
  
  </style>
  