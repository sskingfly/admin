<template>
  <div class="login">
    <el-card
      class="login-container"
      shadow="always"
      :body-style="{ padding: '20px' }"
    >
      <div slot="header">
        <span>
          请输入账号
        </span>
      </div>
      <!-- card body -->
      <el-form
        :model="user"
        ref="loginRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="user.username"></el-input>
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="user.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            :loading="isLoading"
          >确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </el-card>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.isLoading = true
      this.$refs.loginRef.validate((valid) => {
        if (valid) {
          // alert('submit!')
          this.$http.Login({ username: this.user.username.trim(), password: this.user.password.trim() }).then(res => {
            console.log(res)
            this.isLoading = false
            this.$storage.setItem('userinfo', res.data.data)
            this.$storage.setItem('token', res.data.data.token)
            this.$router.push('/')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  .login-container {
    width: 25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>