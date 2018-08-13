
<template>
  <div class="warp-breadcrum">
<!--     <el-row>
      <el-col :span="3"><div class="tab bg-purple"></div></el-col>
      <el-col :span="3"><div class="tab bg-purple-light"></div></el-col>
      <el-col :span="3"><div class="tab bg-purple"></div></el-col>
      <el-col :span="3"><div class="tab bg-purple-light"></div></el-col>
      <el-col :span="3"><div class="tab bg-purple"></div></el-col>
      <el-col :span="3"><div class="tab bg-purple-light"></div></el-col>
    </el-row> -->
        header

  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
      }
    }
  }
</script>
<style scoped>
  .warp-breadcrum {
    background-color: pink;
    height: 60px;
  }


</style>