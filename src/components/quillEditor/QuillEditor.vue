<template>
  <div v-loading="loading">
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      ref="elupload"
      accept=".jpg,.jpeg,.png,.bmp"
      action="http://81.70.10.158:8080/user/upLoadPic"
      
      :multiple="false"
      :headers="header"
      name="pc1"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
      :on-change="uploadChange"
    >
    </el-upload>
    <!-- 表情选择组件 -->
    <emoji
      @emojiChoose="emojiChoose"
      ref="emoji"
      v-show="false"
      class="emoji"
    />
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
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
/* 导入自定义emoji组件 */
import Emoji from "components/emoji/Emoji";
/* 设置中文提示、工具栏参数、设置emoji图标 */
import { addQuillTitle, toolbarOptions, addEmojiIcon } from "./quill-edit.js";

//自定义图片上传方法
const image = function(value) {
  //console.log(value);
  if (value) {
    //触发上传事件
    document.querySelector(".avatar-uploader  input").click();
  } else {
    this.quill.format("image", false);
  }
};
let isShowEmoji = false;

//自定义表情emoji方法;
const emoji = function(value) {
  //console.log(isShowEmoji);
  document.querySelector(".emoji").style.display = isShowEmoji
    ? "none"
    : "block";
  isShowEmoji = !isShowEmoji;
};
export default {
  props: {},
  data() {
    return {
      loading: false,
      header: { token:localStorage.getItem('token') }, // 图床token参数，写在这里
      //编辑器内容
      content: "",
      //编辑器配置
      editorOption: {
        placeholder: "输入文章内容...",
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: { image, emoji }, //自定义方法
          },
        },
      },
    };
  },
  components: { quillEditor, Emoji },
  methods: {
    //点击发布
    publish() {
      this.$emit("addMessage", this.content);
    },
    // 上传图片前
    beforeUpload(file) {
      //显示加载
      this.loading = true;
      let types = ['image/jpeg', 'image/bmp', 'image/png',' image/jpeg'];
        const isImage = types.includes(file.type);
        const isLtSize = file.size / 1024 / 1024 < 3;
        //console.log(isImage,isLtSize);
        if (!isImage) {
          this.loading=false
          this.$message.error('上传图片只能是 JPG、JPEG、BMP、PNG 格式!');
          return false;
        }
        if (!isLtSize) {
          this.loading=false
          this.$message.error('上传图片大小不能超过 3MB!');
          return false;
        }
        return true;
    },
    //图片改变
    uploadChange(file, fileList) {
      // let name = file.name;
      // name = name.toLowerCase();
      // let flag =
      //   name.endsWith(".png") ||
      //   name.endsWith(".jpeg") ||
      //   name.endsWith(".jpg") ||
      //   name.endsWith(".png") ||
      //   name.endsWith(".bmp");
      // if (!flag) {
      //   return this.$message.error("选中的文件非图片类型");
      // } else {
      //   return console.log("图片");
      // }
    },
    // 上传图片成功
    uploadSuccess(res, file) {
      console.log(res);
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill;
      // 如果上传成功
      if (res.Status === "200" ) {
        // 获取光标所在位置
        // let length = quill.getSelection().index;
        let length = quill.selection.savedRange.index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, "image", "http://81.70.10.158:8080"+res.url);
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
    //emoji组件返回表情
    emojiChoose(value) {
      //console.log(value);
      this.$refs.emoji.$el.style.display = "none";
      isShowEmoji = !isShowEmoji;
      let quill = this.$refs.myQuillEditor.quill;
      //光标位置
      let length = quill.selection.savedRange.index;
      //console.log(length);
      //插入文本
      quill.insertText(quill.selection.savedRange.index, value);
      //光标+3(添加了表情。。)
      quill.setSelection(length + 3);
    },
  },
  created() {},

  mounted() {
    //设置中文提示
    addQuillTitle();
    //设置图标
    addEmojiIcon();
  },
};
</script>

<style scoped lang="less">
.value {
  font-size: 17px;
}
.emoji {
  width: 200px;
  height: 100px;
}

pre {
  font-family: Consolas;
}
</style>
