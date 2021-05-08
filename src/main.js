import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//挂载element-ui
import "./plugins/elementUI";

//基础样式
import "assets/css/base.css";

// highlight.js代码高亮插件
//import Highlight from "utils/highlight";
//Vue.use(Highlight);
import "utils/highlight";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
