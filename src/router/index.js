import Vue from "vue";
import Router from "vue-router";
import RouterCom from './comObj';

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            meta: {
                title: '首页',
            },
         
            component:  RouterCom['Index'],
            children: [{
                    path: "/",
                    component: RouterCom['HelloWorld'],
                    meta: { icon: 'iconfont-icon-home', title: '首页' }
                }
            ]
        },

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});