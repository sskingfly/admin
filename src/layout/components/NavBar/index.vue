<template>
  <div class="navbar">
    <i
      :class="getIcon"
      @click="hanldeToggleSideBar"
    ></i>

    <Breadcrumb class="bread"></Breadcrumb>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['sidebar']),
    getIcon() {
      return this.sidebar.opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'
    }
  },
  components: {
    Breadcrumb
  },
  data() {
    return {

    }
  },
  methods: {
    hanldeToggleSideBar() {
      this.$store.dispatch('app/toggleSidebar')
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