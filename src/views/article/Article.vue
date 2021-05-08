<template>
  <div>
      <!-- 顶部tabbar -->
      <tab-bar class="tab-bar"/>
      <!-- 中心内容区 -->
      <el-row class="row">
          <!--  -->
          <el-col class="contain" :sm="{ span: 14, offset: 5 }" xs:="24">
            <!-- 标题 -->
          <h1>文章id:{{ $route.params.id }}</h1>
          <!-- 信息栏 作者 时间 -->
          <div>
            <span class="author">刘德华 </span>
            <span class="time">2021-5-8 17:00</span>
          </div> 
            <!-- 文章内容 -->
          <div class="article-contain" v-html="article" v-highlight />
          <!-- 评论 -->
          <article-comment/>
          
          </el-col>
      </el-row>
      <!-- 返回顶部 -->
       <el-backtop  target=".row"><i class="el-icon-upload2"></i></el-backtop>
  </div>
</template>

<script>
/* 导入组件 */
import TabBar from 'components/tabBar/TabBar';//顶部tabbar
//文章评论
import ArticleComment from './articleComponents/ArticleComment'
/* 导入代码高亮样式 */
import "highlight.js/styles/agate.css"; // 代码高亮风格
//测试过滤器
import {getText,getImgUrls} from 'utils/filter'

export default {
  props: {},
  data() {
    return {
      article:`<h2>特斯拉舆论风波</h2><p>在引发“舆论风暴”后，大部分人都在等着看特斯拉“笑话”。毕竟，此前已经有先例。2018年，东风本田受“机油门”事件的影响，销量大幅下滑。其中，2018年上半年，东风本田的销量下跌13.4%。当时，中国市场汽车总销量保持着4%的同比增长，东风本田也是数不多销量下滑的汽车厂商之一。2018年全年，本田CR-V销量腰斩，拖累东风本田2018年的整体销</p><p><img src="https://inews.gtimg.com/newsapp_bt/0/13499108424/1000"></p><p>在此次维权事件中，与网络上的“口诛笔伐”不同，“暴风眼”中的特斯拉车主，气氛相对平静许多。一位车主表示，如果特斯拉真有安全隐患，这起事件对车主来说是“排雷”；即使没有，相信服务上也会有所提升，“马斯克是一个极致分子，拥有这样一个狂人的公司，其产品一切都有可能，好的坏的都不稀奇。”</p><h1>Quill—心目中的最佳富文本编辑器</h1><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">&lt;!-- 引入css文件 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.quilljs.com/1.0.0/quill.snow.css"</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 自定义编辑器工具栏 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toolbar"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ql-bold"</span>&gt;</span>Bold<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ql-italic"</span>&gt;</span>Italic<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 创建编辑容器 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"editor"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello World!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 引入js文件 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.quilljs.com/1.0.0/quill.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 初始化编辑器，snow主题 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-keyword">var</span> editor = <span class="hljs-keyword">new</span> Quill(<span class="hljs-string">'#editor'</span>, {
    <span class="hljs-attr">modules</span>: { <span class="hljs-attr">toolbar</span>: <span class="hljs-string">'#toolbar'</span> },
    <span class="hljs-attr">theme</span>: <span class="hljs-string">'snow'</span>
  });
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</pre><h2 class="ql-align-justify">被“爸爸们”抛弃的狗狗币</h2><p class="ql-align-justify">狗狗币的创始人有两位，一位是它的开发者比利·马库斯（Billy Marcus），另一位是它的概念发起人杰克逊·帕尔默（Jackson Palmer）。但两个人都在2015年先后卖出了所持有的所有狗狗币，并关闭了个人社交媒体，退出了“狗币的江湖”。</p><p><br></p><p class="ql-align-justify"><img src="https://img.36krcdn.com/20210507/v2_54f0173280a64dc4a197712c9de38f0d_img_000"></p><p class="ql-align-center">图片来自Marketwatch&nbsp;</p>`
     }
  },
  components:{TabBar,ArticleComment},
  method:{},
  created(){
    //测试文本提取
    console.log(getText(this.article));
    //测试图片链接提取
    console.log(getImgUrls(this.article));
    
  }
   
};
</script>

<style lang="less" scoped>
.tab-bar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.row{
  height: 100vh;
  overflow: auto;
}
.contain{
    background-color: #fff;
    padding: 64px 10px 10px 10px;
    
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
.article-contain {
  
}
.article-contain pre {
  font-size: 17px;
  line-height: 1.5;
   font-family:"Arial",sans-serif;
}
.article-contain img {
  width: 100%;
}
.article-contain p {
  font-size: 18px;
  line-height: 1.9;
}
</style>
