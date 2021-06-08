import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


/* 基础样式 */
import "assets/css/base.css";

/* 插件 */
//挂载element-ui
import "plugins/elementUI";
import "plugins/vueXss"


/* 事件总线 */
Vue.prototype.$bus = new Vue(); //vue实例可以作为事件总线

/* 过滤器 */
import { dateFormat } from "utils/filter";
Vue.filter("dateFormat", dateFormat);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
