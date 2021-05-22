<template>
  <div ref="commentBox" class="commentBox">
    <h3>发表评论</h3>
    <el-input
      :placeholder="
        $store.state.isLogin ? '评论功能开发未完成' : '未登录不能评论'
      "
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
    <h3>更多评论（未完成）</h3>
    <!-- 评论列表 -->
    <div class="comments">
      <!-- 评论组件 -->
      <floor v-for="i in 10" :key="i" class="lou">
        <floor v-for="s in 2" class="louzhonglou"></floor>
        <span class="more">查看更多回复</span>
      </floor>
      <!-- 页码 -->
      <el-pagination
        small
        layout="prev, pager, next"
        :total="20"
        :page-size="1"
        :pager-count="5"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
import Floor from "./Floor";

export default {
  props: {},
  data() {
    return {
      commentText: "",
      //评论区的offset
      offsetTop: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    //页面更改
    pageChange(page) {
      console.log(page);
      //触发事件总线，回到顶部
      this.$bus.$emit("scrollTop", this.offsetTop);
      //通知父组件是否显示文章内容
      this.$emit("currentPagechange", page);
    },
  },
  components: { Floor },
};
</script>

<style scoped lang="less">
// 发表评论按钮
.addCommentBtn {
  margin-top: 2px;
}
.more {
  color: #666;
  cursor: pointer;
  font-size: 13px;
}
.more:hover {
  color: @color-blue;
}

.lou {
  border-bottom: 1px solid #ccc;
}
.louzhonglou {
  background-color: #fafafa;
  padding: 2px;
  font-size: 13px;
  margin: 5px 15px;
  color: #666;
}
</style>
