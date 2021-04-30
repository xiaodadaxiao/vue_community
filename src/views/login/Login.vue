<template>
  <div class="box">
    <el-row class="login-contain" v-loading="loading">
      <el-col :lg="{ span: 8, offset: 8 }" :xl="24" class="login-box">
        <!-- 标题 -->
        <div class="title">用户登录</div>
        <!-- 表单 -->
        <el-form
          ref="loginFormRef"
          :model="formData"
          label-width="0px"
          class="login-form"
          label-position="left"
          :rules="loginFormRules"
        >
          <el-form-item prop="username">
            <el-input
              v-model="formData.username"
              prefix-icon="el-icon-user-solid"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <!-- 密码-->
          <el-form-item prop="password">
            <el-input
              v-model="formData.password"
              prefix-icon="el-icon-unlock"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" @click="login"
              >登 陆</el-button
            >
          </el-form-item>
          <el-form-item class="login_operation">
            <el-link type="info">忘记密码？</el-link>
            <el-link type="danger" href="/register">注 册</el-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单数据对象
      formData: { username: "123", password: "123456" },
      //表单验证规则
      loginFormRules: {
        //用户名验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度需在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        //密码验证规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度需在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      loading: false,
    };
  },
  methods: {
    //点击登录按钮
    login() {
      //显示加载
      this.loading = true;
      //进行预验证，再执行回调函数

      this.$refs.loginFormRef.validate(async (valid) => {
        //console.log(valid);
        if (!valid) return;
        //进行请求
        //let { data } = await this.$http.post("login", this.loginForm);
        // console.log(data);
        // console.log(data.meta.status);
        // if (data.meta.status == 200) {
        //   console.log(data);
        setTimeout(() => {
          this.loading = false;
          //登录成功弹窗
          // this.$message({
          //   message: "登录成功",
          //   type: "success",
          // });

          this.$router.push("/home");
        }, 1500);
        return;
        //登录成功弹窗
        this.$message({
          message: "登录成功",
          type: "success",
        });
        //将后台传过来的token保存到sessionStorage
        // window.sessionStorage.setItem("token", data.data.token);
        //跳转到后台home

        this.$router.push("/home");
        // } else {
        //   this.$message.error("登录失败！请检查用户名或密码");
        // }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100vh;
}
.login-contain {
  width: 100%;
  // height: 100%;
  height: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: #eee;
}
.login-box {
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 10px -15px #000;
}
.title {
  width: 95px;
  height: 48px;
  margin: 20px auto;
  line-height: 48px;
  text-align: center;
  color: @color-blue;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 3px solid @color-blue;
}
.login-form {
  width: 80%;
  margin: auto;
  padding: 20px;
}
.login_btn {
  width: 100%;
}
.login_operation {
  display: flex;
  justify-content: flex-end;
}
</style>
