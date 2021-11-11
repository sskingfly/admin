<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  background-color: #eee;
  height: calc(100vh - 50px);
  padding: 10px;
  box-sizing: border-box;
}
</style>