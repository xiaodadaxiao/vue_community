import store from "../store";
import router from "./index";
// 记录路由以及跳转对应的路由
export function savePath(path) {
  //存值
  if (path == "/login" || path == "/register") {
    return;
  }
  //存到vuex
  store.commit("savePath", path);
}
//跳转路由，根据本地记录的path跳转
export function goPath() {
  router.push(store.state.path);
}
