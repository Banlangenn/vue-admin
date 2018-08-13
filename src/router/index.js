import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta:{
        title:'首页',
      },
       component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
      children : [
          {
              path: "/about",
              name: "about",
              component: () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue")
            },
            {
              path: "/helloWorld",
              name: "helloWorld",
              component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue")
            }
      ]
    },
    
  ]
});
