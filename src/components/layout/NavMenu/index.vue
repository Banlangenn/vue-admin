<template>
  <div id="navMenu-wrap"  :class="{ collapsed:isCollapse }">
  <button @click = "isCollapsnFn">切换</button>
<el-menu 
      :default-active = this.$route.fullPath
      :collapse = isCollapse
      :collapse-transition = true
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router= true
      >



 
    <MenuItem v-for="route of this.$store.state.permission"  :key="route.name" :item="route"     :base-path="route.path"  />  

<!--   <el-submenu index="kkk">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
      <el-menu-item index="/about">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="/helloWorld">选项3</el-menu-item>
    <el-submenu index="1-4">
      <span slot="title">选项4
      </span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>

 
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>


  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
   <el-submenu index="3">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="13-1">选项1</el-menu-item>
      <el-menu-item index="13-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="13-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="13-4">
      <span slot="title">选项4</span>
      <el-menu-item index="13-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
     <el-submenu index="4">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="134-1">选项1</el-menu-item>
      <el-menu-item index="134-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="134-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="134-4">
      <span slot="title">选项4</span>
      <el-menu-item index="134-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
 -->


</el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: "navMenu",
  data(){
    return {
      data:'首頁',
      isCollapse:false
    }
  },
  components: { MenuItem },
  created(){
      console.log('this.$store.state')
      console.log(this.$store.state)
      console.log('this.$route.state')
      console.log(this.$route)
  },
  // computed: {
    
  // },
  methods: {
    //  ...mapMutations([
    //   'setPermission'
    // ]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.data = keyPath +'---'+keyPath 
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isCollapsnFn(){
      // this.$store.commit('setPermission',)
      console.log(this.$route.fullPath)
      this.isCollapse = !this.isCollapse;
      // this.menuWidth =  this.isCollapse ? 65 : 205;
    }
  }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /*width: 230px;*/
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
