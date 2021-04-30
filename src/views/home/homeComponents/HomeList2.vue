<template>
  <!-- 文章列表 -->
  <div class="list_contain">
    <div class="box">
      <!-- 有图 -->
      <el-row v-if="isImg1" class="list">
        <!-- 内容区 -->
        <!-- 文本占格  -->
        <el-col class="list-value" :span="16">
          <div class="list-value-title">
            国家统计局称 2020 年我国人口继续保持增长，你怎么看？国家统计局称
            2020年我国人口继续保持增长，你怎么看？
          </div>
          <div class="list-value-text">
            1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
          </div>
        </el-col>
        <!-- 图片占格 -->
        <el-col class="list-img" :span="8">
          <img src="~assets/img/dog.jpg" alt="" />
        </el-col>
      </el-row>
      <!-- 无图 -->
      <el-row v-else class="list">
        <!-- 内容区 -->
        <!-- 无文本占24格 -->
        <el-col class="list-value" :span="24">
          <div class="list-value-title">
            国家统计局称 2020 年我国人口继续保持增长，你怎么看？国家统计局称
            2020年我国人口继续保持增长，你怎么看？
          </div>
          <div class="list-value-text">
            1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
          </div>
        </el-col>
        <!-- 操作栏 -->
        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </el-row>
      <!-- 操作栏 -->
      <div class="operation">
        <span class="author"><i class="el-icon-user-solid" />黎明</span>
        <span class="time">2021-05-15</span>
        <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
      </div>
    </div>
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

  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  padding: 2%;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
.list {
  // padding: 2%;
}
/* 文本区 */

.list-value-title {
  font-size: 22px;
  font-weight: 600;
  /* 限制2行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 正文 */
.list-value-text {
  font-size: 16px;
  line-height: 1.7;
  /* 限制4行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
/* 图片区 */
.list-img {
  height: 100%;
  img {
    margin-top: 3px;
    width: 100%;
    height: 131px;
    border-radius: 7px;
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
