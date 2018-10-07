<template>
  <div id="app">
    <transition name="fade">
      <!-- <keep-alive> -->
      <router-view/>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
export default {
  mounted() {
    // 添加 -- 路由
    this.$router.addRoutes(this.$store.getters.renderRouter);
  }
};
</script>
