<template>
  <!-- 文章列表 -->
  <div class="list_contain">
    <div>
      <div class="list" v-if="isImg1">
        <!-- 标题 -->
        <div class="list-title">
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
    <div>
      <div class="list" v-if="isImg2">
        <!-- 标题 -->
        <div class="list-title"></div>
        <!-- 文本 -->
        <div class="list-text"></div>
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
          75位一线艺人注销200家关联公司，如何看待众艺人集体注销关联公司？
        </div>
        <!-- 文本 -->
        <div class="list-text">
          29日，郑爽涉嫌偷逃税涉事企业被约谈。郑爽、黄晓明、何炅、黄圣依、唐嫣、赵薇等75位一线艺人相关公司发现，75位艺人名下相关公司共有647家，其中已注销200家。此外，艺人名下关联公司数量最多的是黄晓明，其相关公司一共有43家，其次为章子怡，名下相关公司有29家，为女艺人中公司数量最多。此外，陈坤有25家，李晨有21家，黄磊有20家，何炅有19家
        </div>
        <!-- 操作栏 -->
        <div class="operation">
          <span class="author"><i class="el-icon-user-solid" />黎明</span>
          <span class="time">2021-05-15</span>
          <span class="comment"><i class="el-icon-chat-dot-round" />220</span>
        </div>
      </div>
    </div>
    <div>
      <div class="list" v-if="isImg1">
        <!-- 标题 -->
        <div class="list-title">
          丈夫将 3 套房遗赠同居保姆案，法院以违背公序良俗改判无效，是否合理?
        </div>
        <!-- 文本 -->
        <div class="list-text">
          3月26日，裁判文书网公布了一份广东省深圳市中级人民法院民事判决书，该判决书向大众揭开了一个家庭不和、保姆成丈夫遗嘱继承人的故事，而遗嘱纠纷中涉及的财产则是位于深圳南山区大冲城市花园里的三套房产，总计面积300平方米。4月28日，@21世纪经济报道
          记者在多家房产中介网站中查询发现，上述小区中相似面积在售房子的政府参考单价为13万每平方米。也就是说，涉及纠纷的财产价值如今已近4000万元。
        </div>
        <!-- 图片-->
        <el-row class="list-img" :span="8">
          <el-col :xs="{ span: 22, offset: 1 }" :sm="10">
            <img src="~assets/img/dog2.jpg" alt="" />
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
        <div class="list-title"></div>
        <!-- 文本 -->
        <div class="list-text"></div>
        <!-- 操作栏 -->
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
.box {
  padding: 2%;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
.list {
  padding: 2%;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
/* 文本区 */

.list-title {
  font-size: 22px;
  font-weight: 600;
  /* 限制行 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 正文 */
.list-text {
  font-size: 16px;
  line-height: 1.7;
  /* 限制4行 */
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
