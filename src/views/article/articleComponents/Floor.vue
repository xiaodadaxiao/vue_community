<template>
  <!-- 单个评论的组件(一层楼) -->
  <div class="floorBox">
    <!-- 评论者信息（层主） -->
    <div class="floorInfo">
      <el-avatar :size="30" :src="userImgUrl" />
      <span class="floorAuthor">键盘侠</span>
      <span class="">回复 : @<span class="byReplyAuthor">蜘蛛侠</span> </span>
    </div>
    <!-- 评论者内容 -->
    <p class="floorValue">
      是不是除了特斯拉其他车都不配拥有名字的啊是不是除了特斯拉其他车都不配拥有名字的啊,都不配拥有名字的啊是不是都不配拥有名字的啊是不是
    </p>
    <!-- 底部回复、点赞 按钮 、时间 -->
    <div class="floorOperate">
      <span
        class="floorOperateItem"
        @click="giveLike"
        :class="{ current: isDianzhan }"
        ><i class="iconfont">&#xe600;</i>({{ giveLikeNum }})</span
      >
      <span
        class="floorOperateItem"
        @click="showFloorInput"
        :class="{ current: isShowInputBox }"
        ><i class="el-icon-edit-outline" /> 回 复</span
      >
      <span class="time">2021-5-8 18:38</span>
    </div>
    <!-- 回复框 -->
    <div v-show="isShowInputBox" class="inputBox">
      <el-input type="textarea" v-model="replyValue" />
      <el-button>回复</el-button>
    </div>
    <!-- 插槽，用于插入楼中楼 -->
    <slot></slot>
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
      isShowInputBox: false,
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
    showFloorInput() {
      if (!this.$store.state.isLogin) {
        return this.$message.error("请先登录");
      }
      this.isShowInputBox = !this.isShowInputBox;
    },
  },
};
</script>

<style lang="less" scoped>
// 楼层的box
.floorBox {
  padding: 10px;
  // border: 1px solid red;
}
// 楼层的信息（名字、时间）
.floorInfo {
  display: flex;
  span {
    margin-right: 6px;
    margin-top: 6px;
  }
  //楼层作者
  .floorAuthor {
    color: @color-blue;
    font-weight: 600;
    cursor: pointer;
  }
  //被回复者
  .byReplyAuthor {
    color: @color-blue;
    opacity: 0.7;
    cursor: pointer;
  }
}
// 楼层内容
.floorValue {
  font-size: 14px;
  // padding: 10px 0;
  line-height: 1.3;
}
// 操作栏 点赞、点击显示评论框按钮
.floorOperate {
  margin-top: 10px;
  font-size: 14px;
  color: #959595;
  //每个操作item
  .floorOperateItem {
    cursor: pointer;
    margin-right: 10px;
  }
  //操作选中状态（点赞、评论）
  .current {
    color: @color-blue;
  }
}
// 评论时间
.time {
  color: rgb(202, 198, 198);
  font-size: 15px;
  padding-top: 4px;
}
//回复输入框和按钮区域
.inputBox {
  margin-top: 10px;
}
</style>
