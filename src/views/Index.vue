/*
 * @Author:douya 
 * @Date: 2018-08-12 16:37:57 
 * @Last Modified by: douya
 * @Last Modified time: 2018-08-12 18:17:38
 * @Description: 基础页面 
 */
<template>
<!--   <div class="home app-wrapper">
    <Header/>
    <div class="body-container">
        <div class="sidebar-container">
             <NavMenu />
           </div>
          <div class="main-container">
             <TabList/>  
             <FrameView/>
             </div>
    </div>   
  </div> -->
 <el-container style="height:100%">
  <el-header><Header/></el-header>
  <el-container>
    <el-aside style="width:inherit"><NavMenu /></el-aside>
    <el-container>
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
  }
};
</script>

<style lang = 'less'>
/*.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  .body-container {
      flex:1;
      display: flex;
      flex-direction: row;
      .main-container {
          flex:1;
      }
    }
}*/

</style>
