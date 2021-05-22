<template>
  <div class="goBack">
    <span class="gobackBtn" v-show="showBtn" @click="goBack(0)"
      ><i class="el-icon-upload2"></i
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtn: false,
    };
  },
  methods: {
    // 显示回到顶部按钮
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      //是否显示返回顶部
      this.showBtn = scrollTop > 200;
    },
    goBack(top) {
      var timer = setInterval(function() {
        if (
          document.documentElement.scrollTop <= top &&
          document.body.scrollTop <= top
        ) {
          return clearInterval(timer);
        }
        document.documentElement.scrollTop += -300;
        document.body.scrollTop += -350;
      }, 30);
    },
  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.showbtn, true);
    //监听事件总线的返回顶部事件
    this.$bus.$on("scrollTop", (top = 0) => {
      this.goBack(top);
    });
  },
};
</script>

<style lang="less" scoped>
.goBack {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.gobackBtn {
  display: block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 30px;
  color: rgb(25, 137, 250);
  background-color: rgb(242, 245, 246);
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  padding: 5px;
  border-radius: 50%;
}
</style>
