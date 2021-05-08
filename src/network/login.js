import request from "./request";
//登录请求
export function login(userEmail, userPassword) {
  return request({
    url: "/user/login",
    method: "post",
    data: { userEmail, userPassword },
  });
}
