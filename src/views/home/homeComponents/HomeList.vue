<template>
  <!-- 文章列表 -->
  <div class="list_contain">
    <div class="box">
      <div v-if="isImg1" class="list_item">
        <div class="title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 左侧图片 -->
          <el-col :xs="{ span: 22, offset: 1 }" :sm="10" class="img-col">
            <img src="~assets/img/dog.jpg" alt="" />
          </el-col>
          <!-- 右侧文本 -->
          <el-col :sm="14">
            <div class="text">
              1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
      <div v-else class="list_item">
        <div class="title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 无图片 -->
          <!-- 右侧文本 -->
          <el-col :span="24">
            <div class="text">
              1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="isImg2" class="list_item">
        <div class="title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 左侧图片 -->
          <el-col :xs="{ span: 22, offset: 1 }" :sm="7" class="img-col">
            <img src="~assets/img/dog.jpg" alt="" />
          </el-col>
          <!-- 右侧文本 -->
          <el-col :sm="17">
            <div class="text">
              1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
      <div v-else class="list_item">
        <div class="title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 无图片 -->
          <!-- 右侧文本 -->
          <el-col :span="24">
            <div class="text">
              1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="isImg2" class="list_item">
        <div class="title">
          国家统计局称 2020 年我国人口继续保持增长，你怎么看？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 左侧图片 -->
          <el-col :xs="{ span: 22, offset: 1 }" :sm="7" class="img-col">
            <img src="~assets/img/dog.jpg" alt="" />
          </el-col>
          <!-- 右侧文本 -->
          <el-col :sm="17">
            <div class="text">
              1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。1976年9月6日13时36分，当苏联叛逃飞行员把飞机停稳后，其油箱内剩余的燃油，最多能再维持飞行30秒，可谓凶险异常，而他的这一举动，也被称为“震惊世界的苏军三大叛逃事件”之一。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
      <div v-else class="list_item">
        <div class="title">
          如何看待赵薇被冻结数百万股权，发生了什么？可能会有哪些影响？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 无图片 -->
          <!-- 右侧文本 -->
          <el-col :span="24">
            <div class="text">
              近日，赵薇被冻结股权，冻结股权标的企业为北京普林赛斯文化传播有限责任公司.
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="isImg1" class="list_item">
        <div class="title">
          如何看待赵薇被冻结数百万股权，发生了什么？可能会有哪些影响？
        </div>
        <el-row class="content" :gutter="5">
          <!-- 左侧图片 -->
          <el-col :xs="{ span: 22, offset: 1 }" :sm="10" class="img-col">
            <img src="~assets/img/dog2.jpg" alt="" />
          </el-col>
          <!-- 右侧文本 -->
          <el-col :sm="14">
            <div class="text">
              29日，郑爽涉嫌偷逃税涉事企业被约谈。
            </div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
      <div v-else class="list_item">
        <div class="title"></div>
        <el-row class="content" :gutter="5">
          <!-- 无图片 -->
          <!-- 右侧文本 -->
          <el-col :span="24">
            <div class="text"></div>
          </el-col>
        </el-row>

        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
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
.list_contain {
  padding: 2%;
  /* 单个item内容 */
  .list_item {
    width: 100%;
    // height: 200px;
    border-bottom: 1px solid #eee;

    margin-bottom: 20px;
    div {
      margin-bottom: 10px;
    }
    .title {
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
    .content {
      /* 中间正文左侧图片 */
      .img-col {
        img {
          width: 100%;
          height: 170px;
          border-radius: 5px;
        }
      }
      /* 正文 */
      .text {
        font-size: 16px;
        line-height: 1.9;
        /* 限制4行 */
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
    .operation {
      color: #8590a6;

      span {
        margin: 0 20px 0 5px;
      }
    }
  }
}
</style>
