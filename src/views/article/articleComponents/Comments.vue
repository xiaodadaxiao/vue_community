<template>
  <div class="commentsBox">
    <!-- 单个评论 -->
    <div class="content">
      <div class="value">
        <div>
          <!-- 楼中楼回复者 -->
          <span class="author">{{ commentData.user.userName }}</span>
          <!-- 楼中楼被回复者 -->
          <span v-if="commentData.replyinTargetUserName">
            回复
            <span class="author">{{
              commentData.replyinTargetUserName
            }}</span></span
          >
          <!-- 楼中楼回复内容 -->
          ：
          {{ commentData.replyinContent }}
        </div>
        <span
          class="operate"
          @click="showCommentInput"
          :class="{ current: isShowInput }"
          ><i class="el-icon-edit-outline" /> 回复
        </span>
        <span class="time"> {{ commentData.replyinTime | dateFormat }}</span>
      </div>
      <div v-show="isShowInput">
        <el-input v-model="commentInputValue"></el-input>
        <el-button
          @click="addCommentToFloorCommentClick(commentData.user.userName)"
          >回复</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { addCommentToFloorComment } from "network/article";
export default {
  props: ["commentData"],
  data() {
    return {
      isShowInput: false,
      //输入框内容
      commentInputValue: "",
    };
  },

  methods: {
    //点击展示回复框
    showCommentInput() {
      if (!this.$store.state.isLogin) {
        return this.$message.error("请先登录");
      }
      this.isShowInput = !this.isShowInput;
    },
    //点击回复本楼中楼
    addCommentToFloorCommentClick(userName) {
      if (this.commentInputValue == "") {
        return this.$message.error("内容不能为空");
      }
      //发送网络请求
      this.addCommentToFloorComment(userName);
    },
    /* 网络请求 */
    //回复楼中楼
    addCommentToFloorComment(userName) {
      addCommentToFloorComment(
        this.commentData.replyId,
        this.commentInputValue,
        userName
      )
        .then((res) => {
          if (res.Status !== "200") {
            return this.$message.error("添加评论失败");
          }
          this.$message.success("发布成功!");
          this.isShowInput = false;
          this.commentInputValue = "";
          //让父组件刷新楼层的所有楼中楼
          this.$emit("refresh");
        })
        .catch((err) => {
          console.log(err);
          return this.$message.error("添加评论失败");
        });
    },
  },
};
</script>

<style lang="less" scoped>
//评论区盒子
.commentsBox {
  font-size: 15px;
}
//单个评论
.content {
  margin-top: 5px;
}
//作者
.author {
  color: @color-blue;
  font-weight: 550;
}
//操作栏(回复)
.operate {
  cursor: pointer;
  font-size: 14px;
  color: #959595;
}
//时间
.time {
  color: #ccc;
  margin-left: 5px;
}
//操作选中状态（点赞、评论）
.current {
  color: @color-blue;
}
</style>
