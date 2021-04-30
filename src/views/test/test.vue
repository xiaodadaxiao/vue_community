<template>
  <div class="test_box">
    <div class="test_item">123</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@red: red;
.test_box {
  .test_item {
    color: @red;
    background: #000;
  }
}
</style>
