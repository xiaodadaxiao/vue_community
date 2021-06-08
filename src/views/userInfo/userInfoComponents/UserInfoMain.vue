<template>
  <div>
    <div class="userArticle">
      <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
        <!-- 我的帖子 -->
        <el-tab-pane label="帖子" class="myArtilceBox" name="first">
          <!-- 单行帖子信息 -->
          <div class="myArticleitem"  v-for="item in myArticleList" :key="item.id">
            <el-row>     
                <el-col :span="20">
                  <el-link @click="goClick(item.id)" type="primary">{{item.messageTitle}}</el-link>
                </el-col>
                <el-col  :span="4">
                  <el-link type="danger" @click="deleteClick(item.id)" >删除</el-link>
                </el-col>
            </el-row>
            <el-row>
              <el-col class="reply" :span="6">{{item.countReplyAndReplyin}} 回复</el-col>
              <el-col class="time" :span="18"> {{item.messageAddTime | dateFormat}}</el-col>
            </el-row>
          </div>
          <el-pagination small :hide-on-single-page="true" layout="prev, pager, next" :total="myArticleTotal" :page-size="10"
            :pager-count="5" :current-page="myArticlePageNumber" @current-change="myArticlePageChange" />
        </el-tab-pane>

        <!-- 回复 -->
        <el-tab-pane label="回复" class="replyBox" name="second">
          <span slot="label">回复<el-badge value="new" v-show="isHaveNew"></el-badge> </span>
          <div class="replyItem" v-for="item in replyList" :key="item.id">
            <el-row class="replyItemRow">
              <el-col :span="24"><el-badge value="new" v-if="!item.read" /> <span class="user">{{item.user.userName}}</span> 回复了你：{{item.content}}</el-col>  
            </el-row>
            <el-row class="replyItemRow">
              <!-- 帖子链接 -->
              <el-col :span="12">
                <el-link @click="goClick(item.messageId,item.read,item.id)" type="primary" >帖子：{{item.message.messageTitle}}</el-link>
              </el-col>
              <el-col :span="12" class="time">
                 {{item.time|dateFormat}}
              </el-col>
            </el-row>
          </div>
          <!-- 页码 -->
          <el-pagination small :hide-on-single-page="true" layout="prev, pager, next" :total="replyTotal" :page-size="10"
            :pager-count="5" :current-page="replyPageNumber" @current-change="replyPageChange" />
        </el-tab-pane>

        <!-- 通知 -->
        <el-tab-pane label="通知" name="third" class="noticeBox">
          <span slot="label">通知<el-badge :value="1"></el-badge> </span>
          <!-- 单行帖子信息 -->
          <el-row class="noticeItem" >
            <!-- 帖子链接 -->
            <el-col :span="12">
              <el-link icon="el-icon-message-solid" @click="showNoticeClick" type="primary">欢迎使用！</el-link>
            </el-col>
            <el-col :span="4" class="time">系统</el-col>
            <el-col :span="4" class="time">2022-02-03 18：30</el-col>
          </el-row>
          <!-- 页码 -->
          <!-- <el-pagination small :hide-on-single-page="true" layout="prev, pager, next" :total="50" :page-size="10"
            :pager-count="5" :current-page="noticePageNumber" @current-change="noticePageChange" />-->
        </el-tab-pane> 

         <!-- 设置中心 -->
        <el-tab-pane label="设置" name="four" class="noticeBox">
           <el-tabs tab-position="left" style="height: 200px;">
              <el-tab-pane label="账号设置">
                <el-input v-model.trim="newName"></el-input>
                 <el-button plain @click="updateUserName">修改用户名</el-button>
              </el-tab-pane>

              <el-tab-pane label="头像设置">
                <!-- 上传组件 -->
                <el-upload
                    accept=".jpg,.jpeg,.png,.bmp,.gif"
                    :action="uploadUrl"
                    name="img"
                    >
                 <el-button plain>
                   点击上传头像
                  </el-button></el-upload>
              </el-tab-pane>

              <el-tab-pane label="密码设置">
                <el-input class="passwordInput" placeholder="原密码" type="password" v-model.trim="oldPassword"></el-input>
                <el-input class="passwordInput" placeholder="新密码" type="password" v-model.trim="newPassword"></el-input>
                <el-input class="passwordInput" placeholder="确认密码" type="password" v-model.trim="newPassword2"></el-input>
                 <el-button plain @click="updateUserPassword">修改密码</el-button>
              </el-tab-pane>
            </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 网络请求函数
import{getMyMessage,getMyReply,setToRead,updateUserName,updateUserPassword,deleteMessage } from 'network/userInfo'
//字符串截取函数
import {getStr} from 'utils/filter'
  export default {
    props: {},
    data() {
      return {
        activeName: "first",
        myArticlePageNumber: 1,
        myArticleTotal:0,
        replyPageNumber: 1,
        replyTotal:0,
        noticePageNumber: 1,
        //我的帖子列表
        myArticleList:[],
        //通知列表
        replyList:[],
        //是否含有未读通知
        isHaveNew:false,
        //图片上传路径
        uploadUrl:'http:www.baidu.com',
        //修改用户名
        newName:'',
        //用户密码
        oldPassword:'',
        newPassword:'',
        newPassword2:'',
      };
    },
    created(){
      //请求帖子列表
      this.getMyMessage();
      //请求通知列表
      this.getMyReply();
    },
    methods: {
      //菜单切换
      handleClick(tab, event) {     
        //console.log(tab, event);
      },
      //我的帖子页码更改
      myArticlePageChange(page) {
        this.myArticlePageNumber = page;
        this.getMyMessage();

      },
      //回复列表页码更改
      replyPageChange(page) {
        this.replyPageNumber = page;
        this.getMyReply();
      },
      //通知列表页码更改
      noticePageChange(page) {
        this.noticePageNumber = page
      },      
      //点击帖子跳转
      goClick(id,isRead=true,replyAndReplyInId) {
        //设置为已读
        if(!isRead){
          this.setToRead(replyAndReplyInId);
        }
        //跳转
        this.$router.push("/article/" + id);
      },
      //点击查看通知
      showNoticeClick() {
        this.$alert('欢迎使用！', '系统通知', {
          confirmButtonText: '确定',
        })
      },
      //点击删除帖子
      deleteClick  (id) {
        
         this.$confirm("是否删除帖子?", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(isDelete=>{
           if(isDelete==='confirm'){
             return deleteMessage(id)
           }
        }).then(res=>{
          //console.log(res);
          if(res.Status!=="200"){
            return this.$message.error('删除失败');
          }
          this.$message.success('删除成功');
          this.getMyMessage();
        })
        .catch(err=>{
          if(err=='cancel') return;
          console.log(err);
          return this.$message.error('删除失败');
        })
        
      },

      /* 
      网络请求
      */
     //请求我的帖子列表
     getMyMessage(){
       getMyMessage(this.myArticlePageNumber).then(res=>{
         if(res.Status!=="200"){
           return this.$message.error('请求帖子列表失败');
         }
         //保存帖子列表
         this.myArticleList=res.data;
         //保存页码
         this.myArticleTotal=res.myArticleTotal;

       }).catch(err=>{
         console.log(err);
         this.$message.error('请求帖子列表失败')
       })
     },
     //请求我的通知列表
     getMyReply(){
       getMyReply(this.replyPageNumber).then(res=>{
         if(res.Status!=="200"){
           return this.$message.error('请求通知列表失败');
         }
         //console.log(res);
          //1、处理回复文本长度
          res.data.forEach((item)=>{
           //截取长度20以上的
            item.content= getStr(item.content,20); 
         })
         //2、查看是否有未读通知
         let index= res.data.findIndex(item=>{
           return item.read===false;
         })
         this.isHaveNew=index>-1
         //3、保存通知列表
        this.replyList=res.data;
        //4、保存总数
        this.replyTotal=res.total;

       }).catch(err=>{
         console.log(err);
         this.$message.error('请求通知列表失败')
       })
     },
     //帖子为已读
     setToRead(replyAndReplyInId){
       //发送请求，设置已读
        setToRead(replyAndReplyInId).then(res=>{
            if(res.Status!=="200"){
              this.$message.error('标记已读失败')
            }
        })
     },
     //修改用户名
     updateUserName(){
       if(this.newName==''){
         return this.$message.warning('输入不能为空')
       }else if(this.newName.length>10 ||this.newName.length<2){
         return this.$message.warning('输入长度为2-10')
       }
       updateUserName(this.newName).then(res=>{
         if(res.Status==="200"){
           this.$message.success('修改成功');
           localStorage.setItem('token',res.token);
            this.$router.go(0);
         }
       }).catch(err=>{
         this.$message.error('修改失败！')
         console.log(err);
       })  
     },
      //修改用户密码
      updateUserPassword(){
        if(this.oldPassword=='' || this.newPassword==''){
         return this.$message.warning('输入不能为空')
       }else if(
         this.oldPassword.length>20 ||this.oldPassword.length<6
         ||this.newPassword.length>20 ||this.newPassword.length<6
        ){
         return this.$message.warning('输入长度为6-120')
       } else if(this.newPassword2!==this.newPassword){
          return this.$message.warning('两次密码输入不一致')
       } else if(this.oldPassword===this.newPassword){
          return this.$message.warning('新旧密码不能相同')
       }
        updateUserPassword(this.oldPassword,this.newPassword).then(res=>{
          if(res.Status=="200"){
            this.$message.success('修改成功，请重新登陆');
            this.$store.commit("login", false);
            this.$store.commit("setUserInfo", {});
            localStorage.removeItem("token");
            this.$router.replace('/login');
          }else if(res.Status==="400"){
            this.$message.error('密码错误！')
          }
        }).catch(err=>{
          this.$message.error('修改密码失败！')
          console.log(err);
        })
      }
    },
  };
</script>

<style lang="less" scoped>
  /* 我的帖子 */
  .myArtilceBox {
    font-size: 14px;

    //单行帖子
    .myArticleitem {
      padding: 10px 0px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }

    .myArticleitem:hover {
      background-color: #eeeeee;
    }
  }

  // 回复
  .replyBox {
    font-size: 14px;

    .replyItem {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;

      .replyItemRow {
        margin-top: 10px;
      }
    }

    .replyItem:hover {
      background-color: #F5F5F5;
    }
  }

  //通知
  .noticeBox {
    font-size: 14px;

    .noticeItem {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  //回复
  .reply{
     color: #959595;
     font-size: 14px;
  }
  //时间
  .time {
    color: #959595;
    font-size: 16px;
  }

  .user {
    cursor: pointer;
    color: @color-blue;
  }
  .passwordInput{
    margin: 5px ;
  }
</style>