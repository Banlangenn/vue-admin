import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/smallTools.js";
import "@/assets/icon/iconfont.css";
import "@/index.less";
import NProgress from "nprogress"; // progress bar
NProgress.configure({ easing: "ease", showSpinner: false });

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // console.log( store.state.userinfo == {})
  if (store.state.isLogin || to.path === "/login") {
    if (to.path === "/login" && store.state.isLogin) {
      next({ path: "/" });
    }
    next();
  } else {
    next({ path: "/login" });
  }
});
router.afterEach(() => {
  NProgress.done();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
