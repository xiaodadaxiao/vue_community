<template>
  <div>
    <el-row class="nofoundbox">
      <el-col :sm="{ span: 12, offset: 6 }" xs:="24">
        <h1>
          访问的页面不存在
          <router-link to="/home">
            返回首页
          </router-link>
        </h1>
        <img v-lazy="'http://www.enappstore.com/public/images/404.png'" />
      </el-col>
    </el-row>
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
.nofoundbox {
  width: 100%;
  padding: 20px 20px;
  img {
    width: 100%;
  }
}
</style>
