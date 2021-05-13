import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 插件 */
//挂载element-ui
import "./plugins/elementUI";
//挂载代码高亮插件highlight
import "./plugins/highlight";
//图片懒加载插件lazyLoad
import "./plugins/lazyLoad";

/* 基础样式 */
import "assets/css/base.css";
import "assets/css/iconfont.css";
/* 事件总线 */
Vue.prototype.$bus = new Vue(); //vue实例可以作为事件总线

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
