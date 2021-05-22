import request from "./request";
//请求首页帖子列表
export function requestHomeList(pageNumber) {
  return request({
    url: "/user/getMessage",
    method: "get",
    params: {
      pageNumber,
    },
  });
}
