<template>
  <div class="home">
    <div class="base-container">
      <div class="side-left">
        <div class="logo">
          <a href="/">
            <img
              src="../assets/images/logo.png"
              alt=""
            >
            <h1>Vue Element Admin</h1>
          </a>
        </div>
        <div class="nav-left">

        </div>
      </div>
      <div class="main">
        <div class="main-top">
          <div>
            面包屑
          </div>
          <div>user</div>
        </div>
        <div class="main-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
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
.base-container {
  display: flex;
  .logo {
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    a {
      text-decoration: none;
      display: flex;
      img {
        height: 50px;
        padding: 10px;
        box-sizing: border-box;
      }
      h1 {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .side-left {
    width: 200px;
    color: rgb(191, 203, 217);
    background-color: rgb(48, 65, 86);
    .nav-left {
      height: calc(100vh - 50px);
    }
  }
  .main {
    width: calc(100vw - 200px);
    background-color: #f0f2f5;
  }
  .main-top {
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .main-view {
    padding: 10px;
    height: calc(100vh - 50px);
    box-sizing: border-box;
  }
}
</style>