<template>
  <div>
    <!-- 头部 -->
    <tab-bar class="tab_bar" />
    <!-- 中间 -->
    <el-row class="row">
      <!-- 核心文章区 -->
      <el-col :sm="{ span: 10, offset: 4 }" :xs="24" class="center">
        <!-- 标题 -->
        <home-title />
        <!-- 列表 -->
        <!-- <home-list /> -->
        <home-list3 />
        <!-- 页码 -->
        <el-pagination
          small
          layout="prev, pager, next"
          :total="20"
          :page-size="1"
          :pager-count="5"
        />
        <!-- <div class="test"></div> -->
      </el-col>
      <!-- 右侧区域 -->
      <el-col :sm="{ span: 6, offset: 1 }" :xs="0" class="right">
        <!-- 热门帖子 -->
        <home-hot class="home-hot" />
      </el-col>
    </el-row>
    <!-- 底部 -->
  </div>
</template>

<script>
// 顶部菜单
import TabBar from "components/common/tabBar/TabBar";
//home列表组件
import HomeList from "./homeComponents/HomeList";
//home标题组件
import HomeTitle from "./homeComponents/HomeTitle";
//home标题组件
// import HomeList2 from "./homeComponents/HomeList2";
import HomeList3 from "./homeComponents/HomeList3";
//home热门帖子
import HomeHot from "./homeComponents/HomeHot";
//home页码
// import HomePagination from "./homeComponents/HomePagination.vue";

export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { TabBar, HomeList, HomeTitle, HomeHot, HomeList3 },
};
</script>

<style lang="less" scoped>
.tab_bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.row {
  width: 100%;
  margin-top: 66px;
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
