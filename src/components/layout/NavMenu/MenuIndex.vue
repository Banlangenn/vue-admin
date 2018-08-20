<template>

  <div id="navMenu-wrap" >
   <el-scrollbar>
<el-menu 
      v-loading="loading"
      element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, .1)"
      :default-active = this.$route.fullPath
      :collapse = this.$store.state.isCollapse
      :collapse-transition = true
      class="el-menu-vertical-admin"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened= true
      @select = "handleSelect"
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
  // data(){
  //   return {
  //     loading: true
  //   }
  // },
  created(){
      console.log('==========================')
      console.log(this.$store.state.permission)
      console.log(this.$store.state.isCollapse)
 
      // console.log(this.$route)
  },
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
  },
  methods: {
    //  ...mapMutations([
    //   'setPermission'
    // ]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      
      // this.$router.push(key)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath){
    //   console.log('oooooooooooooooooooooooooooo')
    //   this.$router.push(indexPath)
    //  this.$router.push('/'+indexPath.join('/'))

    },
  }
  }
</script>

<style  lang='less'>

  .el-menu-vertical-admin:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
    /*height: 100%*/

  }
  .is-dark {
        background: #303133;
        color: #fff;
}
#navMenu-wrap {
      height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
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
.el-scrollbar__wrap {
  overflow-x: hidden;
}
    .el-menu {
      flex: 1;
    }


      /*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/

// &::-webkit-scrollbar{
//     width:6px;
//     height:6px;
//     background-color:#F5F5F5;
// }
/*定义滚动条轨道
 内阴影+圆角*/
// &::-webkit-scrollbar-track{
//     -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
//     border-radius:10px;
//     background-color:#F5F5F5;
// }
/*定义滑块
 内阴影+圆角*/
// &::-webkit-scrollbar-thumb{
//     border-radius:10px;
//     -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
//     background-color:#555;
// }
}

</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

