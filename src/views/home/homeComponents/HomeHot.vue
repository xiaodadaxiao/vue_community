<template>
  <!-- 今日热帖 -->
  <div>
    <div class="title">热帖</div>
    <div class="list">
      <span class="num n1">1</span> 国家统计局称 2020 年我国人口继续保持增长，
    </div>
    <div class="list">
      <span class="num n2">2</span> 世界上5大最奇葩的车，最后一辆惊艳全场！
    </div>
    <div class="list">
      <span class="num n3">3</span> 马斯克拒绝在中国投入公关
    </div>
    <div class="list"><span class="num ">4</span> 辽宁 102:98 加时险胜广东</div>
    <div class="list">
      <span class="num ">5</span> 在菲律宾，拥有多少净资产才可进入富人圈？
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.title {
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
  padding-left: 10px;
  border-left: 5px solid red;
}
.list {
  cursor: pointer;
  margin: 20px 5px;
  font-size: 15px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  .num {
    background-color: #ccc;
    color: #fff;
    padding: 3px;
  }
  .n1 {
    background-color: red;
  }
  .n2 {
    background-color: #f88217;
  }
  .n3 {
    background-color: #ffb915;
  }
}
</style>
