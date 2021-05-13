<template>
<div>
     <!-- 顶部tabbar -->
 
      <!-- 中心内容区 -->
      <el-row>
            <el-col class="publishBox" :sm="{ span: 14, offset: 5 }" xs:="24">
                <!-- 头部 -->
            <el-page-header class="header" @back="goBack" content="发布文章" title="首页"/>
            <!-- 标题栏 -->
            <el-input placeholder="输入文章标题" v-model="title" class="titleValue" />
           
            <!-- 富文本编辑器 -->
            <quill-editor class="editor" />
            </el-col>
      </el-row>
</div>

</template>

<script>
/* 导入组件 */

/* 导入quillEditor */
import QuillEditor from "components/quillEditor/QuillEditor";

export default {
  props: {},
  data() {
    return {
        title:'',
       
    };
  },
  methods: {
    //返回首页
    goBack() {
      this.$router.go(-1);
    },
    
  },
  components: { QuillEditor},
};
</script>

<style lang="less" scoped>

.publishBox {
  padding:  10px;
  background-color: #fff;
}
// 页头
.header {
  margin: 10px 0 10px 5px;
}

.titleValue {
  margin: 10px 0;
}
//编辑器
.editor {
}
</style>
