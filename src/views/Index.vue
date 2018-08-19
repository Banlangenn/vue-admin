/*
 * @Author:douya 
 * @Date: 2018-08-12 16:37:57 
 * @Last Modified by: xiaoliu
 * @Last Modified time: 2018-08-19 22:56:20
 * @Description: 基础页面 
 */
<template>    
 <el-container style="height:100%">
  <el-header><Header/></el-header>
  <el-container>


    <el-aside style="width:inherit"> 




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
export default {
  name: "home",
  components: {
    ...layout
  },
};
</script>
