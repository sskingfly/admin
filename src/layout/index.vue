<template>
  <div class="app-wrapper">
    <!-- 左侧  -->
    <sidebar
      :class="['sidebar-container', isCollapse ?'fold': 'unfold' ]"
      :isCollapse="isCollapse"
    ></sidebar>
    <!-- 右侧 -->
    <div :class="['main-container', isCollapse ?'fold': 'unfold']">
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { Navbar, AppMain, Sidebar } from './components'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  components: {
    Navbar,
    AppMain,
    Sidebar
  }
}
</script>
<style lang="scss">
.app-wrapper {
  position: relative;
  .sidebar-container {
    position: fixed;
    width: 200px;
    // background-color: #000;
    height: 100vh;
    color: #fff;
    transition: width 0.3s;
    &.fold {
      width: 64px;
    }
    &.unfold {
      width: 200px;
    }
  }
  .main-container {
    margin-left: 200px;
    height: 100vh;
    color: #000;
    background-color: pink;
    transition: margin-left 0.3s;
    &.fold {
      margin-left: 64px;
    }
    &.unfold {
      margin-left: 200px;
    }
    .fixed-header {
      height: 50px;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>