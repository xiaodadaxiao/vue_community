<template>
  <div>
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
          <div class="article-contain" v-html="article2" v-highlight  />
          <!-- 评论 -->
          <article-comment/>
          
          </el-col>
      </el-row>
  </div>
</template>

<script>
/* 导入组件 */
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
     
      article:`😀😀😀<h2>特斯拉舆论风波</h2><p>在引发“舆论风暴”后，大部分人都在等着看特斯拉“笑话”。毕竟，此前已经有先例。2018年，东风本田受“机油门”事件的影响，销量大幅下滑。其中，2018年上半年，东风本田的销量下跌13.4%。当时，中国市场汽车总销量保持着4%的同比增长，东风本田也是数不多销量下滑的汽车厂商之一。2018年全年，本田CR-V销量腰斩，拖累东风本田2018年的整体销</p><p><img src="https://inews.gtimg.com/newsapp_bt/0/13499108424/1000"></p><p>在此次维权事件中，与网络上的“口诛笔伐”不同，“暴风眼”中的特斯拉车主，气氛相对平静许多。一位车主表示，如果特斯拉真有安全隐患，这起事件对车主来说是“排雷”；即使没有，相信服务上也会有所提升，“马斯克是一个极致分子，拥有这样一个狂人的公司，其产品一切都有可能，好的坏的都不稀奇。”</p><h1>Quill—心目中的最佳富文本编辑器</h1><pre class="ql-syntax" spellcheck="false">&lt;!-- 引入css文件 --&gt;
&lt;link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet"&gt;

&lt;!-- 自定义编辑器工具栏 --&gt;
&lt;div id="toolbar"&gt;
  &lt;button class="ql-bold"&gt;Bold&lt;/button&gt;
  &lt;button class="ql-italic"&gt;Italic&lt;/button&gt;
&lt;/div&gt;

&lt;!-- 创建编辑容器 --&gt;
&lt;div id="editor"&gt;
  &lt;p&gt;Hello World!&lt;/p&gt;
&lt;/div&gt;

&lt;!-- 引入js文件 --&gt;
&lt;script src="https://cdn.quilljs.com/1.0.0/quill.js"&gt;&lt;/script&gt;

&lt;!-- 初始化编辑器，snow主题 --&gt;
&lt;script&gt;
  var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
  });
&lt;/script&gt;
</pre><p><br></p>`,
article2:`<p>🙁🙁🙁🙁😫🙁🙂😀123😂😓你妈的👌1⏩到沙你说的🐷</p><p>傻实打实大苏打🐷阿德是大撒大撒⏩啊飒飒大苏打☝️</p><p>🐷🐷🐷</p><p>🖐️</p><p>合利屋的汉堡也太难吃了</p><p>炸鸡不但没有什么鸡肉……而且出奇的硬</p><p><span style="color: rgb(64, 64, 64);"><img src="https://news.online.sh.cn/news/gb/content/attachement/jpeg/site1/20210407/IMGf48e389446e856775385280.jpeg"></span></p>`
     }
  },
  components:{ArticleComment},
  created(){
    //测试文本提取
    console.log(getText(this.article));
    //测试图片链接提取
    console.log(getImgUrls(this.article));
    
  },
  mounted(){
   
  },
  methods:{
   
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

//代码块
.article-contain pre {
  font-size: 17px;
  line-height: 1.5;
   font-family:"Arial",sans-serif;
}
//图片
.article-contain img {
  width: 100%;
}
//p标签
.article-contain p {
  font-size: 18px;
  line-height: 1.2;
}
</style>
