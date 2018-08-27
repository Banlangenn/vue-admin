
<template>
  <div class="head">
   <span class="left">
      logo
   </span>

   <div class="right">
    <div>   <el-input
        placeholder="站内搜索"
        prefix-icon="el-icon-search"
        v-model="data">
      </el-input></div>
      <el-dropdown trigger="hover">
      <span class="el-dropdown-link userinfo">
        <span class="avatar">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="">
     </span>  
     <span>
       admin
     </span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item> <i class="iconfont-icon-tuichu"/> 退出登录</el-dropdown-item>
        <el-dropdown-item> <i class="iconfont-icon-tuichu"/> 退出登录</el-dropdown-item>
        <el-dropdown-item> <i class="iconfont-icon-tuichu"/> 退出登录</el-dropdown-item>
        <el-dropdown-item> <i class="iconfont-icon-tuichu"/> 退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> 
   </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data:''
      }
    }
  }
</script>


<style lang="less" >
  .head {
    background: #eff2f5;
    height: 64px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    padding: 0 12px;
    cursor: pointer;
    .left {
      display: inline-block;
      height: 100%;
      line-height: 64px;
      vertical-align: middle;
    }
  .right{
      display: flex;
      // justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0 12px;
      .userinfo{
        height: 100%;
        line-height: 64px;
          display: inline-block;
        transition: all .3s;
        padding: 0 12px;
        &:hover{
          background-color: rgba(63,180,249,.2)
        }
      }
      .avatar{
      display: inline-block;
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0,0%,100%,.85);
      vertical-align: middle;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      img {
      width: 100%;
      height: 100%;
      display: block;
      }
    }
   }
  }

</style>
