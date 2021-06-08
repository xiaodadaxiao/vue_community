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

//根据帖子id请求评论
export function getReply(messageId, pageNumber) {
  return request({
    url: "/user/getMessage/getReply",
    method: "get",
    params: {
      messageId,
      pageNumber,
    },
  });
}

//根据楼层id请求楼中楼评论
export function getReplyIn(replyId, pageNumber) {
  return request({
    url: "/user/getMessage/getReply/getReplyIn",
    method: "get",
    params: {
      replyId,
      pageNumber,
    },
  });
}

//发布文章的评论（楼层）
export function addFloor(messageId, replyContent) {
  return request({
    url: "/user/getMessage/postReply",
    method: "post",
    data: {
      messageId,
      replyContent,
    },
  });
}

//添加楼中楼回复
export function addCommentToFloor(replyId, replyinContent) {
  return request({
    url: "/user/getMessage/getReply/postReplyIn",
    method: "post",
    data: {
      replyId,
      replyinContent,
    },
  });
}
//添加楼中楼回复(回复楼中楼的楼中楼)[楼层id，内容，要回复的作者名]
export function addCommentToFloorComment(
  replyId,
  replyinContent,
  replyinTargetUserName
) {
  return request({
    url: "/user/getMessage/getReply/postReplyInToTarget",
    method: "post",
    data: {
      replyId,
      replyinContent,
      replyinTargetUserName,
    },
  });
}
