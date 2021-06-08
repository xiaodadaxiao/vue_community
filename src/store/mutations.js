export default {
  //登录通过，设置成功
  login(state, payload) {
    state.isLogin = payload;
  },
  //保存路由
  savePath(state, payload) {
    state.path = payload;
  },
  //设置用户id
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
};
