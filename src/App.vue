<template>
  <div id="app" ref="app">
    <tab-bar class="app_tab_bar" />
    <router-view class="app_router_view" />
    <go-back />
  </div>
</template>
<script>
import TabBar from "components/tabBar/TabBar";
import GoBack from "components/goBack/GoBack";
export default {
  components: { TabBar, GoBack },
  methods: {},
};
</script>
<style scoped>
#app {
  height: 100vh;
  /* overflow: hidden; */
}
/* 固定定位，脱离文档 */
.app_tab_bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/*  */
.app_router_view {
  /* height: calc(100vh - 64px); */
  /* overflow: scroll; */
  margin-top: 64px;
}
</style>
