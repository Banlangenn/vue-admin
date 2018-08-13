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
        icon:''
      },
       component: () => import(/* webpackChunkName: "index" */ "./views/Index.vue"),
      children : [
          {
              path: "/about",
              name: "about",
              meta:{
                  title:'其他',
                  icon:'',
                },
              component: () => import(/* webpackChunkName: "about" */ "./views/other/About.vue")
            },
            {
              path: "/helloWorld",
              name: "helloWorld",
             meta:{
                  title:'hello',
                  icon:'',
                },
              component: () => import(/* webpackChunkName: "HelloWorld" */ "./views/other/HelloWorld.vue")
            }
      ]
    },
    
  ]
});
