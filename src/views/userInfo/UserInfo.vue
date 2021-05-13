<template>
  <div>
      <!-- 中心内容区 -->
      <el-row class="userRow">
        <!-- 基本信息 -->
        <el-col class="userCol" :sm="{ span: 14, offset: 5 }" xs:="24">
          <el-card class="box-card">
              <div slot="header" class="header">
                 <user-info-header/>
              </div>
              <!-- 修改菜单组件 -->
              <user-info-modify/>
          </el-card>
          
        </el-col>
      </el-row>
  </div>
</template>

<script>
import UserInfoHeader from './userInfoComponents/UserInfoHeader.vue';
import UserInfoModify from './userInfoComponents/UserInfoModify'
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components:{
    UserInfoHeader,
    UserInfoModify
  }
};
</script>

<style lang="less" scoped>

 .userCol{
   background-color: #fff;
 }
 
</style>
