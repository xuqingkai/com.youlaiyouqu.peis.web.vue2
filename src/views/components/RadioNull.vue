<template>
  <el-radio-group v-model="val">
    <el-radio border v-for="(text, index) in arr" :key="index" :label="text" @click.native="click" />
  </el-radio-group>
</template>

<script>
export default {
  name: 'RadioNull',
  props:{value:String,values:String},
  data() {
    return {
      val: this.value,
      //str: this.values
    }
  },
  computed: {
        arr() {
            return (this.values+'').split('|')
        },
    },
  methods: {
    click(event){
      if (event.target.tagName === 'INPUT') {
        this.val = event.target.value === this.val ? '' : event.target.value
        this.$emit('update:val', this.val)
      }
    }
  }
}
</script>
<style scoped>

</style>
