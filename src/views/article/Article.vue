<template>
  <div>
      <!-- 中心内容区 -->
      <el-row class="row">
          <!--  -->
          <el-col class="contain" :sm="{ span: 14, offset: 5 }" xs:="24">
          <!-- 页头 -->
          <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>文章</el-breadcrumb-item>
          </el-breadcrumb>
            <!-- 标题 -->
          <h1>{{article.messageTitle}}</h1>
          <!-- 信息栏 作者 时间 -->
          <div v-show="currentPage==1">
            <span class="author">{{article.userName}}</span>
            <span class="time"  v-cloak>{{article.messageAddTime | dateFormat}}</span>
          </div> 
            <!-- 文章内容 -->
          <div class="article-contain" v-html="$xss(article.messageContent)"  v-show="currentPage==1"/>
          <!-- 评论 -->
          <article-comment :articleId="articleId" @currentPagechange="currentPagechange"/>
          
          </el-col>
      </el-row>
  </div>
</template>

<script>
/* 导入组件 */
//文章评论
import ArticleComment from './articleComponents/ArticleComment'
/* 网络请求 */
import {getArticle} from 'network/article';
export default {
  
  props: {},
  data() {
    return { 
        articleId:null,
        article:{},
        currentPage:1,
     }
  },
  components:{ArticleComment},
  created(){
      //保存id
      this.articleId= this.$route.params.id;
      //请求文章数据
      this.getArticle();
  },
  mounted(){
   
  },
  methods:{
    //评论页码更改
    currentPagechange(page){
      this.currentPage=page;
    },
    //请求文章内容
    getArticle(){
      //console.log(this.articleId);
      getArticle(this.articleId)
        .then((res)=>{
           //console.log(res);
           if(res.status!==200){
             return this.$message.error('请求数据失败');
           }
           //赋值
           this.article=res.data;
        })
    }
  }

   
};
</script>

<style lang="less" scoped>

.row{
  
 
}
.contain{
    background-color: #fff;
    padding: 10px ;
    
}
.author{
  color: @color-blue;
  font-weight: 800;
  font-size: 18px;
  margin-right: 5px;
}
.time{
  color: #666;
}
</style>

<style lang="less">
//文章内容样式 公共

//图片
.article-contain img {
  max-width: 100%;
}
//p标签
.article-contain p {
  font-size: 18px;
  line-height: 1.5;
}
</style>
