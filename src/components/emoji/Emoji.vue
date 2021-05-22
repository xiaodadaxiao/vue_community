<template>
  <div>
    <div class="list">
      <span
        @click="$emit('emojiChoose', item)"
        class="item"
        v-for="(item, index) in emojis"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import { emojis } from "./emojiData.json";

export default {
  props: {},
  data() {
    return {
      emojis: [],
    };
  },
  created() {
    this.emojis = emojis;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
}
.item {
  padding: 2px;
  margin: 2px;
  cursor: pointer;
}
</style>
