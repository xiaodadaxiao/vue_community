<template>
  <!-- 菜单 -->
  <el-row class="menu">
    <!-- 左侧 -->
    <el-col :span="8" class="menu_left">
      <el-row class="h100">
        <el-col
          class="h100"
          :lg="{ span: 6, offset: 4 }"
          :sm="{ span: 14, offset: 2 }"
          :xs="24"
        >
          <img class="logo" @click="goHome" src="~assets/img/logo/logo2.png" />
        </el-col>
      </el-row>
    </el-col>
    <!-- 中间 -->
    <el-col :span="8" class="menu_center">
      <el-input
        class="search"
        placeholder="搜索"
        suffix-icon="el-icon-search"
      />
    </el-col>
    <!-- 右侧 -->
    <el-col :span="8" class="menu_right">
      <el-row class="right">
        <!-- <el-col :sm="6" :xs="0">收藏</el-col>
        <el-col :sm="6" :xs="0">历史</el-col> -->
        <el-col :sm="0" :xs="12">
          <el-dropdown trigger="click">
            <span> 更多<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goPublish"
                >发布</el-dropdown-item
              >
              <el-dropdown-item>热贴</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :sm="6" :xs="12">
          <el-dropdown trigger="click" v-if="$store.state.isLogin">
            <!-- <img class="userImg" src="" /> -->
            <el-avatar
              class="userImg"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goUserInfo"
                >个人主页</el-dropdown-item
              >
              <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button v-else type="primary" @click="goLogin">登录</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    //点击返回首页
    goHome() {
      if (this.$route.path == "/home") return;
      this.$router.push("/home");
    },
    //点击去登录界面
    goLogin() {
      this.$router.push("/login");
    },
    //去个人主页
    goUserInfo() {
      this.$router.push("/userInfo/666");
    },
    //去发布页面
    goPublish() {
      this.$router.push("/publish");
    },
    //退出登录
    exit() {
      this.$store.commit("login", false);
      this.$message("你已退出登录");
    },
  },
};
</script>

<style lang="less" scoped>
// 整体
.menu {
  height: 64px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
}
//左边部分
.menu_left {
  overflow: hidden;
  height: 100%;
  .h100 {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
//中间部分
.menu_center {
  height: 100%;
  // 搜索框
  .search {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Microsoft soft";
    width: 80%;
    height: 50%;
  }
}
//右边部分
.menu_right {
  display: flex;
  div {
    flex: 1;
    text-align: center;
    line-height: 64px;
  }

  .right {
    display: flex;
  }
}
//logo图片
.logo {
  cursor: pointer;
}
//用户头像
.userImg {
  cursor: pointer;
  margin-top: 10px;
}
</style>
