<template>
  <div>
    <h3>发表评论</h3>
    <el-input placeholder="输入评论" type="textarea" v-model="commentText" />
    <el-button type="primary">评论</el-button>
    <h3>更多评论</h3>
    <div class="comments">
      <div class="commentItem" v-for="i in 10">
        <div class="commentInfo">
          <span class="auto">键盘侠</span>
          <span class="time">2021-5-8 18:38</span>
        </div>
        <div class="commentValue">
          是不是除了特斯拉其他车都不配拥有名字的啊是不是除了特斯拉其他车都不配拥有名字的啊
        </div>
      </div>
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
export default {
  props: {},
  data() {
    return {
      commentText: "",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.commentItem {
  padding: 10px;
  border-top: 1px solid #ccc;
}
.commentInfo {
  display: flex;
  span {
    margin-right: 6px;
  }
  //作者
  .auto {
    color: @color-blue;
  }
  // 时间
  .time {
    color: rgb(202, 198, 198);
    font-size: 15px;
  }
}
.commentValue {
  font-size: 14px;
  padding: 10px 0;
}
</style>
