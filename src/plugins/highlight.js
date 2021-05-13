// highlight.js  代码高亮指令
import Vue from "vue";
import Hljs from "highlight.js";

// 自定义插件
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre");
  blocks.forEach((block) => {
    Hljs.highlightBlock(block);
  });
});
