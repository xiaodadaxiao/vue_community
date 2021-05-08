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
          <!-- <img src="~assets/img/logo/logo.png" class="logo" @click="goHome" /> -->
          <img class="logo" @click="goHome" src="~assets/img/logo/logo2.png" />
        </el-col>
      </el-row>
    </el-col>
    <!-- 中间 -->
    <el-col :span="8" class="menu_center">
      <el-input class="search" placeholder="搜索" clearable></el-input>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="8" class="menu_right">
      <el-row class="right">
        <el-col :sm="6" :xs="0">收藏</el-col>
        <el-col :sm="6" :xs="0">历史</el-col>
        <el-col :sm="0" :xs="12">
          <el-dropdown trigger="click">
            <span> 更多<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>历史</el-dropdown-item>
              <el-dropdown-item>收藏</el-dropdown-item>
              <el-dropdown-item>热门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :sm="6" :xs="12">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            class="avatar"
          >
          </el-avatar>
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
  },
};
</script>

<style lang="less" scoped>
.menu {
  height: 64px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
}
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
.menu_center {
  height: 100%;
  .search {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
}
.menu_right {
  display: flex;
  div {
    flex: 1;
    text-align: center;
    line-height: 64px;
  }
  .avatar {
    margin-top: 13px;
  }
  .right {
    display: flex;
  }
}
.logo {
  cursor: pointer;
}
</style>
