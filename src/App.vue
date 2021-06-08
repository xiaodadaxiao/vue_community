<template>
  <div id="app" ref="app">
    <tab-bar class="app_tab_bar" />
    <keep-alive include="home">
      <router-view class="app_router_view" />
    </keep-alive>

    <go-back />
  </div>
</template>
<script>
  import TabBar from "components/tabBar/TabBar";
  import GoBack from "components/goBack/GoBack";
  export default {
    components: {
      TabBar,
      GoBack
    },
    created() {
    },
    methods: { 
    },
  };
</script>
<style scoped>
  #app {
    height: 100vh;
  }

  /* 固定定位，脱离文档 */
  .app_tab_bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .app_router_view {
    margin-top: 64px;
  }
</style>