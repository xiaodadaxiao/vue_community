<template>
  <div>
    <div class="userArticle">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="修改信息" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="修改密码" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    //菜单切换
    handleClick(tab, event) {
      //console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped></style>
