<template>
  <div class="headerBox">
    <!-- 头像 -->
    <div>
      <el-avatar class="userAvatar" shape="square"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
    </div>
    <!-- 名字 邮箱 -->
    <div class="text">
      <span class="userName">{{userInfo.userName}}</span>
      <p class="userEmail">{{userInfo.userEmail}}</p>
    </div>
  </div>
</template>

<script>
import {getUser} from 'network/userInfo'
  export default {
    props: {},
    data() {
      return {
        userInfo:{}
      };
    },
    created(){
      this.getUser()
    },
    methods: {
      //获取用户数据
      getUser(){
        getUser().then(res=>{
          if(res.Status!=="200"){
            return this.$message.error('请求用户数据失败');
          }
          //console.log(res);
          this.userInfo= res.user;
        })
      }
    },
  };
</script>

<style lang="less" scoped>
  .headerBox {
    display: flex;
  }

  .userAvatar {
    width: 150px;
    height: 150px;
  }

  .text {
    margin-left: 10px;
  }

  .userName {
    font-size: 28px;
    font-weight: 700;
  }

  .userEmail {
    color: #bbb;
    margin-top: 5px;
    font-size: 18px;
  }
</style>