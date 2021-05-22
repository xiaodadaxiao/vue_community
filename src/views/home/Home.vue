<template>
  <div >
    <!-- 中间 -->
    <el-row class="row" >
      <!-- 核心区 -->
      <el-col :sm="{ span: 12, offset: 5 }" xs:="24" class="center">
        <el-menu default-active="1" mode="horizontal" class="homeTitle">
              <el-menu-item index="1">首 页</el-menu-item>
              <el-menu-item index="2">讨 论</el-menu-item>
              <el-menu-item index="3">闲 置</el-menu-item>
              <el-menu-item index="4">失物招领</el-menu-item> 
        </el-menu>
        <!-- 列表 -->
        <home-list />
      </el-col>
      <!-- 右侧区域 -->
      <el-col :sm="{ span: 5, offset: 1 }" :xs="0" class="right">
        <!-- <el-button type="primary" @click="addArticle">发帖子</el-button> -->
        <el-button type="primary" icon="el-icon-edit" @click="addArticle"></el-button>
        <!-- 热门帖子 -->
        <home-hot  class="home-hot" />
      </el-col>
    </el-row>
     
    
  </div>
  
</template>

<script>

//home列表组件
import HomeList from "./homeComponents/HomeList";
//home热门帖子
import HomeHot from "./homeComponents/HomeHot";


export default {
  props: {},
  data() {
    return {
      
    };
  },
  created(){

  },
  methods: {

    //点击发帖子
    addArticle(){
      this.$router.push('/publish')
    },
  },
  components: { HomeList, HomeHot},
};
</script>

<style lang="less" scoped>

.row {
  div {
    height: 100%;
  }
  .center {
    background-color: #fff;
    padding-bottom: 10px;
  }
  .right {
    background: #fff;
  }
}
.text {
  text-align: center;
}
.homeTitle{
  
}
.is-active{
  color: @color-blue !important;
}
.home-hot {
  margin: 15px 5px;
}

</style>
