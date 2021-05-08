<template>
  <div v-loading="loading">
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      ref="elupload"
      :action="serverUrl"
      :headers="header"
      name="img"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
    >
    </el-upload>
    <!-- 富文本容器 -->

    <quill-editor
      v-model="content"
      :options="editorOption"
      class="editor"
      ref="myQuillEditor"
    >
    </quill-editor>

    <el-button type="primary" @click="publish">发布</el-button>
  </div>
</template>

<script>
/* 导入QuillEditor插件 */
import { quillEditor } from "vue-quill-editor";
/* 导入vue-quill-editor样式 */
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
/* 设置中文提示 */
import { addQuillTitle } from "./quill-title.js";
/* 代码高亮插件 */
import hljs from "highlight.js";
import "highlight.js/styles/agate.css"; // 代码高亮风格

//编辑器自定义工具栏
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
  ["blockquote", "code-block"], //引用，代码块
  [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
  [{ list: "ordered" }, { list: "bullet" }], //列表
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
  ["image", "link"], //上传图片 链接
];
export default {
  props: {},
  data() {
    return {
      loading: false,
      serverUrl: "https://sm.ms/api/v2/upload", // 上传的图片服务器地址,
      header: { Authorization: "14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf" }, // 图床token参数，写在这里

      //编辑器内容
      content: "",
      //编辑器配置
      editorOption: {
        placeholder: "输入文章内容...",
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              //自定义图片上传方法
              image: function(value) {
                console.log(value);
                if (value) {
                  //触发上传事件
                  document.querySelector(".avatar-uploader  input").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
          syntax: {
            highlight: (text) => {
              return hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
            },
          },
        },
      },
    };
  },
  components: { quillEditor },
  methods: {
    //点击发布
    publish() {
      console.log(this.content);
    },
    // 上传图片前
    beforeUpload(res, file) {
      this.loading = true;
    },
    // 上传图片成功
    uploadSuccess(res, file) {
      console.log(res);
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res.code === "200" && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.info);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
      // loading动画消失
      this.loading = false;
    },
    // 上传图片失败
    uploadError(res, file) {
      this.$message.error("图片上传失败");
      // loading动画消失
      this.loading = false;
    },
  },
  created() {},

  mounted() {
    //设置中文提示
    addQuillTitle();
  },
};
</script>

<style scoped lang="less">
.value {
  font-size: 17px;
}

pre {
  font-family: Consolas;
}
</style>
