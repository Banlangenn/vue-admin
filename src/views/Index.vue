/*
 * @Author:douya 
 * @Date: 2018-08-12 16:37:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-22 12:36:46
 * @Description: 基础页面 
 */
<template>    
 <el-container style="height:100%">
  <el-header><Header/></el-header>
  <el-container>


    <el-aside style="width:inherit;  box-shadow: 2px 0 6px rgba(0,21,41,.3); "> 




      <NavMenu /></el-aside>
    <el-container >
    <el-header  
    
    style="box-shadow: 0 2px 4px rgba(0,21,41,.08);height:42px"
    
     ><TabList/></el-header>
      <el-main><FrameView/></el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
import layout from "@/components/layout";
export default {
  name: "home",
  components: {
    ...layout
  },
};
</script>


