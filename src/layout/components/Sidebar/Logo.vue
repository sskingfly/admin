<template>
  <div class="logo">
    <img
      src="@/assets/images/logo.png"
      alt=""
    >
    <span
      class="title"
      v-show="!isCollapse"
    >fly-admin</span>
  </div>
</template>
<script>
export default {
  props: ['isCollapse'],
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  img {
    width: 32px;
    height: 32px;
  }
  .title {
    margin-left: 20px;
  }
}
</style>