import request from "./request";
//请求用户信息
export function getUser() {
    return request({
        url: "/user/getUser",
        method: "get",
    });
}
//请求用户帖子
export function getMyMessage(pageNumber) {
    return request({
        url: "/user/getUserMessage",
        method: "get",
        params: { pageNumber }
    });
}
//获得用户的回复
export function getMyReply(pageNumber) {
    return request({
        url: "/user/getReplyInform",
        method: "get",
        params: { pageNumber }
    });
}
//删除帖子
export function deleteMessage(messageId) {
    return request({
        url: "/user/delMessage",
        method: "get",
        params: { messageId }
    });
}
//将未读改为已读
export function setToRead(replyAndReplyInId) {
    return request({
        url: "/user/getReplyInform/isRead",
        method: "get",
        params: { replyAndReplyInId }
    });
}
//修改用户名
export function updateUserName(newName) {
    return request({
        url: "/user/updateUserName",
        method: "post",
        data: { newName }
    });
}
//修改密码
export function updateUserPassword(userPassword, newPassword) {
    return request({
        url: "/user/updateUserPassword",
        method: "post",
        data: { userPassword, newPassword }
    });
}