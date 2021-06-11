<template>
  <div class="headerBox">
    <!-- 头像 -->
    <div>
      <!-- <el-avatar class="userAvatar" shape="square"  fit="contain"
        :src="userInfo.userPicture" /> -->
      <img  alt="" class="userAvatar" :src="userInfo.userPicture">
      <!-- <div class="userAvatar" :style=" {background: 'url('+userInfo.userPicture+')'}"  ></div> -->
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
          this.userInfo= res.user;
          this.userInfo.userPicture='http://81.70.10.158:8080'+this.userInfo.userPicture;
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
    object-fit: cover; 
    object-position: center;
    // background-size:50%;
    // background-repeat:no-repeat;
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