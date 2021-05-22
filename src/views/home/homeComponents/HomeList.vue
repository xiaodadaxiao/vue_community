<template>
  <!-- 文章列表 -->
  <div class="list_contain">
    <div class="box" v-for="item in list" :key="item.id">
      <div class="list">
        <!-- 标题 -->
        <div class="list-title" @click="goArticle(item.id)">
          {{ item.messageTitle }}
        </div>
        <!-- 文本 -->
        <div class="list-text">
          {{ item.messageContent }}
        </div>
        <!-- 图片-->
        <el-row class="list-img" :span="8" v-if="item.urls.length > 0">
          <el-col class="imgCol" :xs="{ span: 22, offset: 1 }" :sm="10">
            <!-- <img v-lazy="item.urls[0]" /> -->
            <el-image class="image" :src="item.urls[0]" lazy></el-image>
          </el-col>
        </el-row>
        <!-- 操作栏 -->
        <div class="operation">
          <!-- 作者 -->
          <span class="author"
            ><i class="el-icon-user-solid" />{{ item.user.userName }}</span
          >
          <!-- 时间 -->
          <span class="time">{{ item.messageAddTime | dateFormat }}</span>
          <!-- 评论数 -->
          <span class="comment"><i class="el-icon-chat-dot-round" />0</span>
        </div>
      </div>
    </div>
    <!-- 页码 -->
    <el-pagination
      small
      :hide-on-single-page="true"
      layout="prev, pager, next"
      :total="total"
      :page-size="10"
      :pager-count="5"
      @current-change="pageChange"
    />
  </div>
</template>

<script>
/* 导入工具函数 */
import { getText, getImgUrls } from "utils/filter";
/*
 网络请求函数
 */
import { requestHomeList } from "network/home.js";

export default {
  props: {},
  data() {
    return {
      pageNumber: 1,
      total: 0,
      list: [],
    };
  },
  created() {
    //请求首页数据
    this.requestHomeList();
  },
  methods: {
    goArticle(id) {
      this.$router.push("/article/" + id);
    },
    //点击页码
    pageChange(pageNumber) {
      this.pageNumber = pageNumber;
      //网络请求
      this.requestHomeList(pageNumber);
    },
    /* 网络请求 */
    requestHomeList() {
      requestHomeList(this.pageNumber)
        .then((res) => {
          console.log(res);
          if (res.Status != "200") {
            return this.$message.error("请求帖子数据错误");
          }
          //进行数据处理
          res.data.forEach((item) => {
            //获得图片集合
            item.urls = getImgUrls(item.messageContent);
            //获得纯文本
            item.messageContent = getText(item.messageContent);
          });
          console.log(res.data);
          this.list = res.data;
          this.total = res.total;
          //触发事件总线，回到顶部
          this.$bus.$emit("scrollTop");
        })
        .catch((err) => {
          console.log(err);
          return this.$message.error("error:请求帖子数据错误");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.list_contain {
  // background-color: #fff;
}
.box {
  // background-color: #fff;
}
.list {
  padding: 2%;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 15px;
}
.list:hover {
  background-color: #f3f3f3;
}
/* 文本区 */

.list-title {
  cursor: pointer;
  font-size: 21px;
  font-weight: 600;
  /* 限制行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.list-title:hover {
  transition: all 0.2s;
  color: @color-blue;
  font-size: 23px;
  -webkit-line-clamp: 2;
}
/* 正文 */
.list-text {
  font-size: 15px;
  line-height: 1.6;
  color: #121212;
  /* 限制行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 3px 0;
}
/* 图片区 */
.list-img {
  height: 100%;
  .image {
    margin-top: 3px;
    width: 100%;
    height: 190px;
    border-radius: 5px;
  }
}
/* 操作栏 */
.operation {
  color: #8590a6;
  margin-top: 5px;
  span {
    margin: 0 20px 0 5px;
  }
}
</style>
