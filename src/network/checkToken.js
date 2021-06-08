import request from "./request";
//请求检测token
export function checkToken() {
  return request({
    url: "/checkLogin",
    method: "get",
  });
}
