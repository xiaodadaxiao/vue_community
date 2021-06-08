<template>
  <!-- 单个评论的组件(一层楼) -->
  <div class="floorBox">
    <!-- 评论者信息（层主） -->
    <div class="floorInfo">
      <!-- 头像 -->
      <el-avatar :size="50" :src="floorData.user.userPicture" />
      <div>
        <span class="floorAuthor">{{ floorData.user.userName }}</span>
        <!-- <span>回复 : @<span class="byReplyAuthor">蜘蛛侠</span></span> -->
        <div class="floornum">1楼</div>
      </div>
    </div>
    <!-- 评论者内容 -->
    <p class="floorValue">
      {{ floorData.replyContent }}
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
      <span class="time">{{ floorData.replyTime | dateFormat }}</span>
    </div>
    <!-- 回复框 -->
    <div v-show="isShowInputBox" class="inputBox">
      <el-input type="textarea" v-model.trim="replyText" />
      <el-button @click="addCommentClick">回复</el-button>
    </div>
    <!-- 评论区 -->
    <div class="commentsBox">
      <!-- 评论列表-->
      <comments
        class="comment"
        v-for="item in showCommentArr"
        :key="item.id"
        :commentData="item"
        @refresh="getReplyIn"
      />
      <!-- 页码 -->
      <el-pagination
        v-show="isShowMore"
        small
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
        :pager-count="5"
        @current-change="pageChange"
        :hide-on-single-page="true"
      />
      <!-- 是否展示更多评论 -->
      <div class="more" @click="showMore" v-if="allCommentArr.length >= 3">
        {{ isShowMore ? "收起评论" : "查看更多评论" }}
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comments";
import { getReplyIn, addCommentToFloor } from "network/article";
export default {
  props: ["floorData"],
  data() {
    return {
      //用户头像：
      userImgUrl: "http://cdn.lsal.cn/z/0/3/1000md.jpg",
      //当前楼中楼的页码
      page: 1,
      //是否点赞：静态测试
      isDianzhan: false,
      //点赞个数
      giveLikeNum: 10,
      //是否显示评论框
      isShowInputBox: false,
      //回复这条评论的内容
      replyText: "",
      //是否展示更多评论
      isShowMore: false,
      //展示的评论数组
      showCommentArr: [],
      //得到的评论数据数组
      allCommentArr: [],
      //两个评论的数组
      twoCommentArr: [],
      //总数
      total: 0,
    };
  },
  created() {
    //请求楼中楼
    this.getReplyIn();
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
    //点击显示切换更多评论
    showMore() {
      this.isShowMore = !this.isShowMore;
      //根据是否展示评论来切换评论数据源
      this.showCommentArr = this.isShowMore
        ? this.allCommentArr
        : this.twoCommentArr;
    },
    //评论页码切换
    pageChange(page) {
      this.page = page;
      this.getReplyIn();
    },
    //点击按钮添加评论（添加楼中楼）
    addCommentClick() {
      if (this.replyText == "") {
        return this.$message.error("内容不能为空");
      }
      //发送网络请求
      this.addCommentToFloor();
    },
    /* 网络请求 */
    //请求当前楼层和页码的楼中楼
    getReplyIn() {
      getReplyIn(this.floorData.id, this.page).then((res) => {
        if (res.Status !== "200") {
          return this.$message.error("请求评论数据失败");
        }
        this.allCommentArr = res.data;
        //切割数据
        this.twoCommentArr = this.allCommentArr.slice(0, 2);
        //根据是否展开更多评论来展示数据条数
        this.showCommentArr = this.isShowMore
          ? this.allCommentArr
          : this.twoCommentArr;
        //console.log(this.showCommentArr);
        this.total = res.total;
      });
    },
    //添加楼层的回复（楼中楼）
    addCommentToFloor() {
      addCommentToFloor(this.floorData.id, this.replyText)
        .then((res) => {
          if (res.Status !== "200") {
            return this.$message.error("发布失败");
          }
          this.$message.success("发布成功!");
          this.getReplyIn();
          this.replyText = "";
          this.isShowInputBox = false;
          this.isShowMore = false;
        })
        .catch((err) => {
          console.log(err);
          return this.$message.error("发布失败");
        });
    },
  },
  components: { Comments },
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
  //楼层数
  .floornum {
    color: #959595;
    font-size: 15px;
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

//评论区
.commentsBox {
  background-color: #eee;
  //单个评论
  .comment {
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
  }
}

//是否展示更多
.more {
  cursor: pointer;
  margin-top: 5px;
  font-size: 13px;
}
</style>
