<template>
  <div id="navMenu-wrap" >
<el-menu 
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
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: "navMenu",
  components: { MenuItem },
  created(){
      console.log('==========================')
      console.log(this.$store.state.permission)
      console.log(this.$store.state.isCollapse)
      // console.log(this.$route)
  },
   computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
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

<style>
  .el-menu-vertical-admin:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
    /*height: 100%*/

  }
  .is-dark {
        background: #303133;
        color: #fff;
}








</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lange='less'>
   #navMenu-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-menu {
      flex: 1;
    }

  } 


</style>
