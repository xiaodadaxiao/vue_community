<template>
  <!-- 标题 -->
  <div class="home-title-contain">
    <el-row :gutter="20">
      <el-col :xs="6" :sm="6" v-for="(item, index) in titles" :key="index">
        <div
          class="title"
          :class="{ title: true, active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      titles: ["首页", "分类", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.home-title-contain {
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 5%);
  padding: 10px 0;
  text-align: center;
  .title {
    font-size: 22px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    width: 80%;
    margin: 0 auto;
    cursor: pointer;
  }
  .active {
    color: @color-blue;
  }
}
</style>
