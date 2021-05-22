import request from "./request";
//注册请求
export function register(userEmail, userName, userPassword) {
  return request({
    url: "/user/register",
    method: "post",
    data: { userEmail, userName, userPassword },
  });
}
