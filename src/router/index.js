import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            meta: {
                title: '首页',
            },
         
            component: () =>
                import ( /* webpackChunkName: "index" */ "@/views/Index.vue"),
            children: [{
                    path: "/",
                    component: () =>
                        import ( /* webpackChunkName: "about" */ "@/views/others/HelloWorld.vue"),
                    meta: { icon: 'iconfont-icon-home', title: '首页' }
                }
            ]
        },

    ]
});