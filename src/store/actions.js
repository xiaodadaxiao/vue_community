export default {
  initUserStatus(context) {
    //1、查看本地是否有token
    let token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    //2、有token的话，检查token是否有效
    // checkToken()
    //   .then()
    //   .catch();
  },
};
