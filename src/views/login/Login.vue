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
          <el-form-item prop="userEmail">
            <el-input
              v-model="formData.userEmail"
              prefix-icon="el-icon-user-solid"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <!-- 密码-->
          <el-form-item prop="userPassword">
            <el-input
              v-model="formData.userPassword"
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
/* 网络请求 */
import { login } from "network/login";

export default {
  data() {
    return {
      //表单数据对象
      formData: { userEmail: "12356@qq.com", userPassword: "123456" },
      //表单验证规则
      loginFormRules: {
        //用户邮箱验证规则
        userEmail: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        //密码验证规则
        userPassword: [
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
      this.$refs.loginFormRef.validate((valid) => {
        //console.log(valid);
        if (!valid) {
          console.log("表单验证失败");
          return (this.loading = false);
        }
        //发送请求
        login(this.formData.userEmail, this.formData.userPassword)
          .then((res) => {
            this.loading = false;
            console.log(res);
            this.$router.push("/home");
            // //登录成功弹窗
            this.$message.success("登录成功！");
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
            this.$message.error("登录失败！");
          });
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
