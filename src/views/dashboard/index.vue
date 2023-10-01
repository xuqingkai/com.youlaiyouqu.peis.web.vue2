<template>
  <div class="dashboard-container">
    <div class="dashboard-text" @click="_swipeIDCard('d')">你好：{{ name }}，欢迎使用迈格尔健康体检系统</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    window.swipeIDCard = this._swipeIDCard
  },
  methods: {
    swipeIDCard() {
      window.external.swipeIDCard('{"name":"test2222222222222222222222"}')
    },
    _swipeIDCard(str) {
      window.alert(str)
      return '_swipeIDCard'
    }
  }
}

</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
