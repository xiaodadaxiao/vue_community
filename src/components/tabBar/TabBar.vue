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
          :xs="0"
        >
       
          <img
            class="biglogo"
            @click="goHome"
            src="https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/a7995ad8a14a816fe32960457099ae29.svg"
          />
        
        </el-col>
        <el-col class="h100" :sm="0" :xs="24">
          <img
            class="smalllogo"
            @click="goHome"
            src="https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/2226da2ecb231c5d979d539c78efe9fb.svg"
          />
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
        <!-- 更多菜单 只在移动端显示 -->
        <el-col :sm="0" :xs="12">
          <el-dropdown trigger="click">
            <!-- <span> 更多<i class="el-icon-arrow-down el-icon--right"></i> </span> -->
            <span><i class="iconfont mobile_more">&#xe602;</i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goPublish"
                >发布</el-dropdown-item
              >
              <el-dropdown-item>热贴</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :sm="6" :xs="12">
          <!-- 已登录 用户头像 -->
          <el-dropdown trigger="click" v-if="$store.state.isLogin">
             <el-badge is-dot >
            <img
              class="userImg"
              :src="$store.state.userInfo.userPicture"
            />
             </el-badge>
            <!-- 用户菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goUserInfo"
                >个人主页</el-dropdown-item
              >
              <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 未登录  登陆按钮-->
          <el-button v-else size="small" round type="primary" @click="goLogin"
            >登录</el-button
          >
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import {goPath} from 'router/routerRecord'
export default {
  props: {},
  data() {
    return {
      //点击返回首页的节流
      timer: null,
    };
  },
  created(){
    //监听退出登陆，执行退出登陆事件
    //this.$bus.$on('userExit',this.exit);
  },
  methods: {
    //点击返回首页
    goHome() {
      if (this.$route.path == "/home") {
        //如果是重复点击logo，触发事件总线刷新首页数据
        if (this.isLock) {
          return;
        }
        //上锁，不能频繁点击刷新
        this.isLock = true;
        this.$bus.$emit("homeRefresh");
        setTimeout(() => {
          //1s后解锁
          this.isLock = false;
        }, 1000);
      } else {
        this.$router.push("/home");
      }
    },
    //点击去登录界面
    goLogin() {
      this.$router.push("/login");
    },
    //去个人主页
    goUserInfo() {
      this.$router.push("/userInfo/"+this.$store.state.userInfo.id);
    },
    //去发布页面
    goPublish() {
      this.$router.push("/publish");
    },
    //点击退出登录
    exitClick(){

    },
    //退出登录
    exit() {
      this.$store.commit("login", false);
      this.$store.commit("setUserInfo", {});
      localStorage.removeItem("token");
      this.$message("你已退出登录");
      goPath();
    },
  },
};
</script>

<style lang="less" scoped>
// 整体
.menu {
  height: 60px;
  width: 100%;
  background-color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  div {
    flex: 1;
  }
}
//左边部分
.menu_left {
  // overflow: hidden;
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
  }
}
//右边部分
.menu_right {
  height: 100%;
  .right {
    // margin-top: 1px;
    line-height: 60px;
    text-align: center;
    height: 100%;
    display: flex;
    padding: 5px 5px;
    div {
      flex: 1;
    }
  }
}
//logo图片
.biglogo {
  cursor: pointer;
}
.smalllogo {
  cursor: pointer;
}

.userImg {
  cursor: pointer;
  margin-top: 3px;
  height: 45px ;
  width: 45px;
  border-radius: 24px;
  object-fit: cover; 
  object-position: center;
}
//更多icon
.mobile_more {
  color: @color-blue;
}
</style>
