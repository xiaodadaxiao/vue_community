<template>
  <div>
    <h3>发表评论</h3>
    <el-input
      :placeholder="$store.state.isLogin ? '输入评论' : '未登录不能评论'"
      type="textarea"
      :disabled="!$store.state.isLogin"
      v-model="commentText"
    />
    <el-button
      type="primary"
      :disabled="!$store.state.isLogin"
      class="addCommentBtn"
      >评论</el-button
    >
    <h3>更多评论</h3>
    <!-- 评论列表 -->
    <div class="comments">
      <!-- 评论组件 -->
      <comment-item v-for="i in 10" :key="i" />
      <!-- 页码 -->
      <el-pagination
        small
        layout="prev, pager, next"
        :total="20"
        :page-size="1"
        :pager-count="5"
      />
    </div>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  props: {},
  data() {
    return {
      commentText: "",
    };
  },
  methods: {},
  components: {
    CommentItem,
  },
};
</script>

<style scoped lang="less">
// 发表评论按钮
.addCommentBtn {
  margin-top: 2px;
}
</style>
