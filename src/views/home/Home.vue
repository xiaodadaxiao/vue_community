<template>
  <div >
    <!-- 中间 -->
    <el-row class="row" >
      <!-- 核心区 -->
      <el-col :sm="{ span: 12, offset: 5 }" xs:="24" class="center">
        <!-- 标题 -->
        <!-- <home-title /> -->
        <!-- 列表 -->
        <home-list/>
      </el-col>
      <!-- 右侧区域 -->
      <el-col :sm="{ span: 5, offset: 1 }" :xs="0" class="right">
        <el-button type="primary" @click="addArticle">发帖子</el-button>
        <!-- 热门帖子 -->
        <home-hot class="home-hot" />
      </el-col>
    </el-row>
     
    
  </div>
  
</template>

<script>

//home列表组件
import HomeList from "./homeComponents/HomeList";
//home标题组件
import HomeTitle from "./homeComponents/HomeTitle";
//home热门帖子
import HomeHot from "./homeComponents/HomeHot";


export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    //点击发帖子
    addArticle(){
      this.$router.push('/publish')
    },
  
  },
  components: { HomeList, HomeTitle, HomeHot},
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
.home-hot {
  margin: 15px 5px;
}
.test {
  border: 1px solid red;
  width: 100%;
  height: 100px;
}
</style>
