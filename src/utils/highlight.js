// highlight.js  代码高亮指令
import Vue from "vue";
import Hljs from "highlight.js";
// import "highlight.js/styles/shades-of-purple.css"; // 代码高亮风格
//import "highlight.js/styles/agate.css"; // 代码高亮风格

// 自定义插件
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre");
  blocks.forEach((block) => {
    Hljs.highlightBlock(block);
  });
});
