/* 富文本编辑器的中文提示 */
const titleConfig = {
  "ql-bold": "加粗",
  "ql-color": "颜色",
  "ql-font": "字体",
  "ql-code": "插入代码",
  "ql-italic": "斜体",
  "ql-link": "添加链接",
  "ql-background": "背景颜色",
  "ql-size": "字体大小",
  "ql-strike": "删除线",
  "ql-script": "上标/下标",
  "ql-underline": "下划线",
  "ql-blockquote": "引用",
  "ql-header": "标题",
  "ql-indent": "缩进",
  "ql-list": "列表",
  "ql-align": "文本对齐",
  "ql-direction": "文本方向",
  "ql-code-block": "代码块",
  "ql-formula": "公式",
  "ql-image": "图片",
  "ql-video": "视频",
  "ql-clean": "清除字体样式",
  "ql-emoji": "表情",
};
//设置中文提示
export function addQuillTitle() {
  const oToolBar = document.querySelector(".ql-toolbar"),
    aButton = oToolBar.querySelectorAll("button"),
    aSelect = oToolBar.querySelectorAll("select");
  aButton.forEach(function(item) {
    if (item.className === "ql-script") {
      item.value === "sub" ? (item.title = "下标") : (item.title = "上标");
    } else if (item.className === "ql-indent") {
      item.value === "+1"
        ? (item.title = "向右缩进")
        : (item.title = "向左缩进");
    } else {
      item.title = titleConfig[item.classList[0]];
    }
  });
  aSelect.forEach(function(item) {
    item.parentNode.title = titleConfig[item.classList[0]];
  });
}
//编辑器自定义工具栏
export const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
  //["blockquote", "code-block"], //引用，代码块
  [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
  //[{ list: "ordered" }, { list: "bullet" }], //列表
  //[{ size: ["small", false, "large", "huge"] }], // 字体大小
  //[{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
  // ["link"], //连接
  ["image"], //上传图片
  ["emoji"], //新添加表情
];
//创建菜单的表情按钮图标
export function addEmojiIcon() {
  //得到创建的emoji元素
  var emojiDom = document.querySelector(".ql-emoji ");
  var Front = document.createElement("i"); //创建标签元素
  Front.className = "iconfont "; //新增class属性
  Front.innerHTML = "&#xe703;"; //表情属性（表情）
  //添加到emoji按钮下
  emojiDom.appendChild(Front);
}
