<template>
  <!-- 文章列表 -->
  <div class="list_contain">
    <div class="box" v-for="item in 10">
      <div class="list" v-if="isImg1">
        <!-- 标题 -->
        <div class="list-title" @click="goArticle">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？国家统计局称
          2020年我国人口继续保持增长，你怎么看？
        </div>
        <!-- 文本 -->
        <div class="list-text">
          1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
        </div>
        <!-- 图片-->
        <el-row class="list-img" :span="8">
          <el-col :xs="{ span: 22, offset: 1 }" :sm="10">
            <img src="~assets/img/dog.jpg" alt="" />
          </el-col>
        </el-row>

        <!-- 操作栏 -->
        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
      <div class="list" v-else>
        <!-- 标题 -->
        <div class="list-title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？国家统计局称
          2020年我国人口继续保持增长，你怎么看？
        </div>
        <!-- 文本 -->
        <div class="list-text">
          1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
        </div>
        <!-- 操作栏 -->
        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
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
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isImg1: true,
      isImg2: false,
    };
  },

  methods: {
    goArticle() {
      this.$router.push("/article/123");
    },
  },
};
</script>

<style lang="less" scoped>
.box {
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
  font-size: 22px;
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
  font-size: 24px;
  -webkit-line-clamp: 2;
}
/* 正文 */
.list-text {
  font-size: 16px;
  line-height: 1.6;
  /* 限制行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 5px 0;
}
/* 图片区 */
.list-img {
  height: 100%;
  img {
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
