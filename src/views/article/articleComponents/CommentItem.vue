<template>
  <!-- 单个评论的组件 -->
  <div class="commentItem">
    <!-- 评论者信息 -->
    <div class="commentInfo">
      <el-avatar :size="40" :src="userImgUrl" />
      <span class="author">键盘侠</span>
    </div>
    <!-- 评论者内容 -->
    <p class="commentValue">
      是不是除了特斯拉其他车都不配拥有名字的啊是不是除了特斯拉其他车都不配拥有名字的啊,都不配拥有名字的啊是不是都不配拥有名字的啊是不是
    </p>
    <!-- 回复谁的原文 -->
    <div class="oldCommentBox">
      <span>回复 @ </span><a class="oldAuthor">黎明：</a>
      <div>大学生薅肯德基系统漏洞的羊毛获刑</div>
    </div>
    <!-- 底部回复、点赞 按钮 、时间 -->
    <div class="operate">
      <span
        class="perateItem"
        @click="giveLike"
        :class="{ current: isDianzhan }"
        >点赞({{ giveLikeNum }})</span
      ><span
        class="perateItem"
        @click="showInput"
        :class="{ current: isShowReply }"
        ><i class="el-icon-edit-outline" /> 回 复</span
      >
      <span class="time">2021-5-8 18:38</span>
    </div>

    <!-- 回复框 -->
    <div v-show="isShowReply" class="replyBox">
      <el-input type="textarea" v-model="replyValue" />
      <el-button>回复</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //用户头像：
      userImgUrl: "http://cdn.lsal.cn/z/0/3/1000md.jpg",
      //是否点赞：静态测试
      isDianzhan: false,
      //点赞个数
      giveLikeNum: 10,
      //是否显示评论框
      isShowReply: false,
      //回复这条评论的内容
      replyValue: "",
    };
  },
  methods: {
    //点赞
    giveLike() {
      if (!this.$store.state.isLogin) {
        return this.$message.error("请先登录");
      }
      this.isDianzhan = !this.isDianzhan;
    },
    //点击显示评论框
    showInput() {
      if (!this.$store.state.isLogin) {
        return this.$message.error("请先登录");
      }
      this.isShowReply = !this.isShowReply;
    },
  },
};
</script>

<style lang="less" scoped>
// 评论的item
.commentItem {
  padding: 10px;
  border-top: 1px solid #ccc;
}
// 评论的信息（名字、时间）
.commentInfo {
  display: flex;
  span {
    margin-right: 6px;
  }
  //评论作者
  .author {
    color: @color-blue;
    font-weight: 600;
    margin-top: 6px;
    cursor: pointer;
  }
}
// 评论内容
.commentValue {
  font-size: 14px;
  padding: 10px 0;
  line-height: 1.7;
}
//旧评论
.oldCommentBox {
  color: #959595;
  margin-left: 10px;
  border-left: 5px solid #ccc;
  padding-left: 4px;
  font-size: 14px;
}
.oldAuthor {
  color: #a0cfff;
  font-weight: 560;
  cursor: pointer;
}

// 操作栏 点赞、点击显示评论框按钮
.operate {
  margin-top: 10px;
  font-size: 14px;
  color: #959595;
}
.perateItem {
  cursor: pointer;
  margin-right: 10px;
}
.current {
  color: @color-blue;
}
// 评论时间
.time {
  color: rgb(202, 198, 198);
  font-size: 15px;
  padding-top: 4px;
}
//回复输入框和按钮区域
.replyBox {
  margin-top: 10px;
}
</style>
