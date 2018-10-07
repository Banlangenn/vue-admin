import Vue from "vue";
import Router from "vue-router";
import RouterCom from "./comObj";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      // component: RouterCom["Login"]
      component: RouterCom["Bona"]
    },
    {
      path: "/",
      component: RouterCom["Index"],
      children: [
        {
          path: "/",
          component: RouterCom["UpdateLog"],
          meta: { icon: "iconfont-icon-home", title: "首页" }
        }
      ]
    },
    {
      path: "/exception",
      component: RouterCom["Index"],
      children: [
        {
          path: "404",
          component: RouterCom["Exception"],
          props: { type: 404 },
          meta: { icon: "iconfont-icon-home", title: "404" }
        },
        {
          path: "403",
          component: RouterCom["Exception"],
          props: { type: 403 },
          meta: { icon: "iconfont-icon-home", title: "403" }
        },
        {
          path: "500",
          component: RouterCom["Exception"],
          props: { type: 500 },
          meta: { icon: "iconfont-icon-home", title: "500" }
        }
      ]
    }
  ],
  scrollBehavior(to, from) {
    return { x: 0, y: 0 };
  }
});

// // 全局导航守卫
// router.beforeEach((to, from, next) => {
//     NProgress.start();
//     next()

//    });

//    router.afterEach(transition => {
//     NProgress.done();
//    });

export default router;
