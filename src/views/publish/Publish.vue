<template>
<div>
     <!-- 顶部tabbar -->
 
      <!-- 中心内容区 -->
      <el-row>
            <el-col class="publishBox" :sm="{ span: 14, offset: 5 }" xs:="24">
            <!-- 头部 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>发布文章</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 标题栏 -->
            <el-input placeholder="输入文章标题" v-model.trim="messageTitle" class="titleValue" />
           
            <!-- 富文本编辑器 -->
            <quill-editor @addMessage="addMessage" class="editor" />
            </el-col>
      </el-row>
</div>

</template>

<script>
/* 导入组件 */
/* 导入quillEditor */
import QuillEditor from "components/quillEditor/QuillEditor";
/* 网络请求 */
import {publish} from 'network/publish'
export default {
  props: {},
  data() {
    return {
        messageTitle:'',
       
    };
  },
  methods: {
    //添加文章
    addMessage(messageContent){
      console.log(messageContent);
      if(this.messageTitle==""){
        return this.$message.error('标题不能为空');
      }
      //发送网络请求
      publish(this.messageTitle,messageContent).then((res)=>{
        console.log(res);
        if(res.Status!=="200"){
          return this.$message.error('发布失败');
        }
        this.$message.success("发布成功！");
        this.$router.push('/home');
      }).catch(err=>{
        return this.$message.error('发布失败');
        console.log(err);
      })
    }
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
  margin: 20px 0 0 0;
}
//编辑器
.editor {
}
</style>
