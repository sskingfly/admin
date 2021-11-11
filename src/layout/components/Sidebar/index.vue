<template>
  <div class="sidebar">
    <logo :isCollapse="isCollapse"></logo>
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      class="sidebar-menu"
    >
      <sidebar-item></sidebar-item>
    </el-menu>
  </div>
</template>
<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
export default {
  props: ['isCollapse'],
  // data() {
  //   return {
  //     isCollapse: false
  //   }
  // },
  components: {
    Logo,
    SidebarItem
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  .sidebar-menu {
    border-right: none;
  }
}
</style>