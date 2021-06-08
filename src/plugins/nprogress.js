//导入
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  easing: "ease", //缓动
  speed: 500, //速度
  trickleSpeed: 1000, //涓流/增量的频率
  showSpinner: true, //是否开启微调器
});
export default NProgress;
