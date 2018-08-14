import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import NProgress from 'nprogress' // progress bar
NProgress.configure({ easing: 'ease',showSpinner: false})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");












router.beforeEach((to, from, next) => {
 NProgress.start();
 next()

});
router.afterEach(transition => {
 NProgress.done();
});



// 渲染侧边栏--和--添加router

		store.commit('setPermission',[
		{
		path: '/permission',
	    component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
	    redirect: '/permission/about45',
	    meta: {
	      title: '权限',
	      icon: 'el-icon-location',
	    },
	    children:[
	     {
				          path: "about45",
				          name: "about45",
				          component: () => import(/* webpackChunkName: "about" */ "@/views/others/HelloWorld.vue"),
				          meta:{icon:'el-icon-location',title:'第一个'},
				          children:[
				            {
				              path: "helloWorld2",
				              name: "helloWorld2",
				              component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
				              meta:{icon:'el-icon-location',title:'第1-1个子集'},
				               children:[
                          {
                            path: "helloWorld2-1",
                            name: "helloWorld2-1",
                            component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
                            meta:{icon:'el-icon-location',title:'第1-1-1个子集'}
                          },
                          {
                            path: "helloWorld71",
                            name: "helloWorld7-1",
                            component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/About.vue"),
                            meta:{icon:'el-icon-location',title:'第1-1-2个子集'}
                          }
                        ]
				            },
				             {
				              path: "helloWorld2-3",
				              name: "helloWorld2-3",
				              component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/About.vue"),
				              meta:{icon:'el-icon-location',title:'第2-3个子集'},
				               children:[
				                  {
				                    path: "helloWorld2-6",
				                    name: "helloWorld2-6",
				                    component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
				                    meta:{icon:'el-icon-location',title:'第1-4-个子集'}
				                  }
				                ]
				            }
				          ]
				        },
				        
				        	 {
				          path: "about46/helloWorld2-6/helloWorld2-3",
				          name: "about48",
				          component: () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue"),
				          meta:{icon:'el-icon-location',title:'测试'},
				        }
	    ]
	},

	{
		path: '/step2',
	    component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
	    redirect: '/step2/index',
	    meta: {
	      title: '权限2',
	      icon: 'el-icon-location',
	    },
	    children:[
			   				 
				        {
				          path: "index",
				          name: "helloWorld",
				          component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
				          meta:{icon:'el-icon-location',title:'第二个'}
				        }
				  ]
	    },
	    ])





		router.addRoutes(store.state.permission) 