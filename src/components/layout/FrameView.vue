<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view ></router-view>
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      // return this.$store.state.tagsView.cachedViews
    },
    key() {
      // return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
  perspective: 1000;
  backface-visibility: hidden;
}
.fade-transform-enter {
  opacity: 0;
  transform: translate3d(100px,0,0);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translate3d(-100px,0,0);
}

</style>