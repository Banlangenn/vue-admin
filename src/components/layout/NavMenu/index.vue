<template>
  <div id="navMenu-wrap"  :class="{ collapsed:isCollapse }">
  <button @click = "isCollapsnFn">切换</button>
<el-menu 
      :default-active = this.$route.fullPath
      :collapse = isCollapse
      :collapse-transition = true
      class="el-menu-vertical-admin"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router= true
      :unique-opened= true
      >



 
    <MenuItem v-for="route of this.$store.state.permission"  :key="route.name" :item="route"     :base-path="route.path"  />  



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
