import Vue from "vue";
import VueLazyload from "vue-lazyload";
//1\直接使用
//Vue.use(VueLazyload);
//2、参数使用
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("assets/img/lazyLoad/error.png"),
  //error: "http://pic.616pic.com/ys_img/00/58/28/A1lMAEemor.jpg",
  // error: "https://img.zhouzh.tech/images/image-1604213190574.png",
  loading: require("assets/img/lazyLoad/loading.gif"),
  //loading: "https://pic.17qq.com/img_qqtouxiang/19537592.jpeg",
  //loading: "https://pic.17qq.com/img_qqtouxiang/19537577.jpeg",
  //loading: "http://www.lgpc.com.cn/1/img/time.gif",
  attempt: 2,
});
