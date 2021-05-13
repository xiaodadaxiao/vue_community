<template>
  <div class="headerBox">
    <!-- 头像 -->
    <div>
      <el-avatar
        class="userAvatar"
        shape="square"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </div>
    <!-- 名字 邮箱 -->
    <div class="text">
      <span class="userName">刘德华</span>
      <div class="userEmail">12345@qq.com</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.headerBox {
  display: flex;
}
.userAvatar {
  width: 150px;
  height: 150px;
}
.text {
  margin-left: 10px;
}
.userName {
  font-size: 28px;
  font-weight: 700;
}
.userEmail {
  color: #bbb;
  margin-top: 5px;
  font-size: 18px;
}
</style>
