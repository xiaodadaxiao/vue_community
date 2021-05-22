import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex);
const state = {
  //是否是登录状态
  isLogin: false || localStorage.getItem("isLogin"),
  //用户登录id
  userId: null,
  //token
  token: null,
  //路由地址
  path: "/home",
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});
