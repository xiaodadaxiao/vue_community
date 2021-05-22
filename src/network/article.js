import request from "./request";
//请求单个帖子
export function getArticle(messageId) {
  return request({
    url: "/user/getOneMessage",
    method: "get",
    params: {
      messageId,
    },
  });
}
