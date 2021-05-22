export default {
  getToken(state) {
    if (!state.token) {
      state.token = localStorage.getItem("token");
    }
    return state.token;
  },
};
