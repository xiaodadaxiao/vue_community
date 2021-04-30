<template>
  <div class="page">
    <!-- 大页码 -->

    <!-- 中页码
    class="hidden-sm-and-down "
    <el-pagination
      background
      layout="prev, pager, next"
      :total="10"
      :page-size="1"
      :pager-count="5"
      class="hidden-xs-only"
    /> -->
    <!-- 小页码 -->
    <!-- <el-pagination
      small
      layout="prev, pager, next"
      :total="5"
      :page-size="1"
      class="hidden-sm-and-up"
    /> -->
  </div>
</template>

<script>
/* 隐藏显示样式表 */
// import "element-ui/lib/theme-chalk/display.css";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.number {
  color: red;
  font-size: 22px;
}
</style>
