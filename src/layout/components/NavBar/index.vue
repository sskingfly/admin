<template>
  <div class="navbar">
    <i
      class="el-icon-s-fold"
      @click="hanldeToggleSideBar"
    ></i>

    <Breadcrumb class="bread"></Breadcrumb>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {

    }
  },
  methods: {
    hanldeToggleSideBar() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  align-items: center;
  .bread {
    margin-left: 12px;
  }
}
</style>