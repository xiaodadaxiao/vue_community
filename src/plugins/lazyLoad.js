import Vue from "vue";
import VueLazyload from "vue-lazyload";
//1\直接使用
//Vue.use(VueLazyload);
//2、参数使用
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("assets/img/lazyLoad/error.png"),
  loading: require("assets/img/lazyLoad/loading.gif"),
  attempt: 2,
});
