/*
 * @Author:douya 
 * @Date: 2018-08-12 16:37:57 
 * @Last Modified by: xiaoliu
 * @Last Modified time: 2018-08-19 10:36:33
 * @Description: 基础页面 
 */
<template>    
 <el-container style="height:100%">
  <el-header><Header/></el-header>
  <el-container>


    <el-aside style="width:inherit"> 

      <!-- 随时可以把我干掉   -- 不会影响别的-->
      <div  :style= "{
      cursor: 'pointer',
      height:'64px',
      transition:'width .3s ease-in-out',
      position:'absolute',
      display: 'flex',
    
      flexDirection: 'row',
      zIndex:100,
      backgroundColor:'#535c64',
      borderBottom:'1px solid #ffd04b',
      width: this.$store.state.isCollapse ? '64px':'230px'} ">
       <transition name="fade">
             <div v-show='!this.$store.state.isCollapse' 
             style="
               flex:1;
                color:#fff;
                 overflow: hidden;
                ">

                ddddddddddd
                 </div>
        </transition>
     


     
      
     <i class="iconfont-icon-collapse-right"
     :style="{
       fontSize:'25px',
       alignSelf:'flex-end',
       padding:' 19.5px',
       color:'#8f9398' ,
       transform:this.$store.state.isCollapse ? 'rotate(180deg)':'rotate(0deg)',
       transition:'transform .6s ease-in-out',

     }"  @click = "changeCollapsn"></i>
      </div>




      <NavMenu /></el-aside>
    <el-container >
    <el-header><TabList/></el-header>
      <el-main><FrameView/></el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
import layout from "@/components/layout";
import { mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    ...layout
  },
  methods: {
    ...mapMutations(["changeCollapsn"])
  }
};
</script>
