<template>
  <div class="box">
    <el-row class="register-contain">
      <el-col :lg="{ span: 8, offset: 8 }" :xl="24" class="register-box">
        <!-- 标题 -->
        <div class="title">用户注册</div>
        <!-- 表单 -->
        <el-form
          ref="registerFormRef"
          :model="formData"
          label-width="0px"
          class="register-form"
          label-position="left"
          :rules="registerFormRules"
        >
          <!-- 邮箱 -->
          <el-form-item prop="userEamil">
            <el-input
              v-model="formData.userEamil"
              prefix-icon="el-icon-message"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <!-- 用户名 -->
          <el-form-item prop="userName">
            <el-input
              v-model="formData.userName"
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
          <!-- 确认密码-->
          <el-form-item prop="confirmPassword">
            <el-input
              v-model="formData.confirmPassword"
              prefix-icon="el-icon-unlock"
              placeholder="确认密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="register_btn" type="danger" @click="register"
              >注 册</el-button
            >
          </el-form-item>
          <el-form-item class="register_operation">
            <el-link type="info">忘记密码？</el-link>
            <el-link type="primary" href="/login">登 录</el-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* 网络请求 */
import { register } from "network/register";
export default {
  data() {
    return {
      //表单数据对象
      formData: {
        userEamil: "",
        userName: "",
        userPassword: "",
        confirmPassword: "",
      },
      //表单验证规则
      registerFormRules: {
        //邮箱验证规则
        userEamil: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        //用户名验证规则
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度需在 3 到 10 个字符",
            trigger: "blur",
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
        //确认验证规则
        confirmPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.formData.userPassword) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //点击注册按钮
    register() {
      //进行预验证，再执行回调函数
      this.$refs.registerFormRef.validate(async (valid) => {
        if (!valid) return;
        //网络请求
        register(
          this.formData.userEamil,
          this.formData.userName,
          this.formData.userPassword
        )
          .then((res) => {
            console.log(res);
            if (res.status !== 200) {
              return this.$message.error("注册失败");
            }
            this.$message.success("注册成功");
            this.$router.replace("/login");
          })
          .catch((err) => {
            console.log(err);
            this.$message.error("注册失败");
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
.register-contain {
  width: 100%;
  // height: 100%;
  height: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: #eee;
}
.register-box {
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 10px -15px #000;
}
.title {
  width: 95px;
  height: 48px;
  margin: 10px auto;
  line-height: 48px;
  text-align: center;
  color: @color-red;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 3px solid @color-red;
}
.register-form {
  width: 80%;
  margin: auto;
  padding: 20px;
}
.register_btn {
  width: 100%;
}
.register_operation {
  display: flex;
  justify-content: flex-end;
}
</style>
