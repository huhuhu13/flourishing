<template>
  <div class="login-box">
    <div class="login">
      <div class="container">
        <el-row>
          <el-col :span="4"><div>&nbsp;</div></el-col>
          <el-col :span="16">
            <div class="form">
              <div class="login-logo">
                <img src="../../../assets/3S-logo.png" />
              </div>
              <div class="form-item">
                <img src="../../../assets/user.png" class="icon" />
                <div class="input-bg">
                  <el-input v-model="username" placeholder="请输入账号"></el-input>
                </div>
              </div>
              <div class="form-item">
                <img src="../../../assets/password.png" class="icon" />
                <div class="input-bg">
                  <el-input
                    v-model="password"
                    placeholder="请输入密码"
                  ></el-input>
                </div>
              </div>
              <div class="form-item">
                <el-button class="submit" @click="toLogin">登录</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="4"><div>&nbsp;</div></el-col>
        </el-row>
      </div>
      <img class="logo-pig" src="../../../assets/pig.png" />
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
export default {
  data() {
    return {
      username: "test",
      password: "123456",
    };
  },
  created() {

  },
  methods: {
      ...mapActions('user', ['login']),
      // 登录
      toLogin() {
        var data = {
          username: this.username,
          password: this.password
        }
        this.login(data)
      },
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100vh;
  background: url("../../../assets/login.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.login {
  width: 100%;
  height: 100vh;
  position: relative;

  .logo-pig {
    width: 163px;
    height: 156px;
    position: absolute;
    bottom: 105px;
    left: 148px;
  }

  .container {
    width: 90%;
    position: absolute;
    top: 146px;
    left: 63px;

    .login-logo {
      text-align: center;
      margin-bottom: 62px;

      img {
        width: 196px;
        height: 143px;
      }
    }

    .form-item {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        width: 42px;
        height: 42px;
        margin-right: 18px;
      }

      .input-bg {
        width: 262px;
        height: 80px;
        background: url("../../../assets/input-bg.png") no-repeat;
        background-size: 100% 100%;
        // background-color: red;
        border-radius: 8px;
      }

      .submit {
        margin-top: 60px;
        width: 218px;
        height: 88px;
        color: #222222;
        font-size: 20px;
        border: none;
        background: rgba(0, 0, 0, 0);
        background-image: url("../../../assets/button-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      /deep/ .el-input {
        width: 262px;
        height: 80px;
      }
      /deep/ .el-input__inner {
        width: 100%;
        height: 80px;
        background: rgba(0, 0, 0, 0);
        border: none;
        padding: 0 24px;
        color: #000;
      }

      /deep/ .el-input__inner::placeholder {
        color: #000;
      }
    }
  }
}
</style>