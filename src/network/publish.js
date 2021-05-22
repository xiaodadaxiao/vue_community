import request from "./request";
//发布帖子请求
export function publish(messageTitle, messageContent) {
  return request({
    url: "/user/postMessage",
    method: "post",
    data: { messageTitle, messageContent },
  });
}
