<template>
  <div ref="commentBox" class="commentBox">
    <h3>发表评论</h3>
    <el-input
      :placeholder="$store.state.isLogin ? '输入评论内容' : '未登录不能评论'"
      type="textarea"
      :disabled="!$store.state.isLogin"
      v-model.trim="floorText"
    />
    <el-button
      type="primary"
      :disabled="!$store.state.isLogin"
      class="addCommentBtn"
      @click="addFloorClick"
      >评论</el-button
    >
    <h3>更多评论</h3>
    <!-- 评论列表 -->
    <div class="floors">
      <!-- 评论组件 -->
      <floor
        v-for="item in replyArr"
        :key="item.id"
        :floorData="item"
        class="lou"
      />
      <!-- 页码 -->
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
        :pager-count="5"
        @current-change="pageChange"
        :hide-on-single-page="true"
      />
    </div>
  </div>
</template>

<script>
import Floor from "./Floor";
/*
导入网络请求函数
*/
import { getReply, addFloor } from "network/article";
export default {
  props: ["articleId"],
  data() {
    return {
      floorText: "",
      page: 1,
      //评论区的offset
      offsetTop: 0,
      //评论列表
      replyArr: [],
      //评论的总数
      total: 0,
    };
  },
  created() {
    this.getReply();
  },
  mounted() {},
  methods: {
    //页面更改
    pageChange(page) {
      //console.log(page);
      this.page = page;
      //得到当前页码数据
      this.getReply();
      //触发事件总线，回到顶部
      this.$bus.$emit("scrollTop", this.offsetTop);
      //通知父组件是否显示文章内容
      this.$emit("currentPagechange", page);
    },
    //点击发布评论（楼层）
    addFloorClick() {
      if (this.floorText == "") {
        return this.$message.error("内容不能为空");
      }
      //发送网络请求添加楼层评论
      this.addFloor();
    },
    /* 网络请求 */
    //根据文章id、页码请求楼层评论
    getReply() {
      getReply(this.articleId, this.page)
        .then((res) => {
          if (res.Status != "200") {
            return this.$message.error("请求文章评论失败");
          }
          this.replyArr = res.data;
          //总回复
          this.total = res.total;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("请求文章评论失败");
        });
    },
    //发布楼层评论内容
    addFloor() {
      addFloor(this.articleId, this.floorText)
        .then((res) => {
          if (res.Status !== "200") {
            return this.$message.error("发布失败");
          }
          this.$message.success("发布成功!");
          this.floorText = "";
          this.getReply();
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("发布失败");
        });
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
.lou {
  border-bottom: 1px solid #ccc;
}
</style>
