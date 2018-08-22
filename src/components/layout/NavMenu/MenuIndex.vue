<template>

  <div id="navMenu-wrap"    
      element-loading-background="rgba(0, 0, 0, .1)"  
    v-loading="loading"
      element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading">
   <el-scrollbar> 
       <!-- </el-scrollbar> -->
<el-menu 

      :default-active = this.$route.fullPath
      :collapse = this.$store.state.isCollapse
      :collapse-transition = true
      class="el-menu-vertical-admin"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened= true
      :router = true
      >


    <el-menu-item index="/"  v-if="true">
          <i class="iconfont-icon-home"></i>
          <span   slot="title">首页</span>
        </el-menu-item>
 
    <MenuItem v-for="route of this.$store.state.permission"  :key="route.id" :item="route"     :base-path="'/'+route.path"  />  
</el-menu>
</el-scrollbar>
  </div>
  
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: "navMenu",
  components: { MenuItem },
   computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
  loading(){
    // alert( this.$store.state.permission.length)
    if( this.$store.state.permission.length < 1 ){
       return  true
    }else{
      // 添加 -- 路由
              this.$router.addRoutes(this.$store.getters.routerArray2) 
        return  false
    }
  }
  }
  }
</script>

<style  lang='less'>

  .el-menu-vertical-admin:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }
  .is-dark {
        background: #303133;
        color: #fff;
}
#navMenu-wrap {
  //  border-right: solid 1px #e6e6e6;
      height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #545c64;
  .el-loading-mask {
        top:50px;
      }
.el-scrollbar__bar.is-vertical {
 background-color: #697582;;
}
.el-scrollbar__thumb{
      background-color:#9aa9b7;
}
.el-scrollbar {
    height: 100%;
}
.el-scrollbar__wrap ,.el-scrollbar__view{
  overflow-x: hidden;
}
    .el-menu {
      flex: 1;
      border: none;
    }



}

</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

