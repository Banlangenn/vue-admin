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


const routerObj=[
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
										meta:{icon:'el-icon-location',title:'第2-1个子集'},
										 children:[
												{
													path: "helloWorld2-6",
													name: "helloWorld2-6",
													component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
													meta:{icon:'el-icon-location',title:'第2-1-1-个子集'}
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
		]
// 渲染侧边栏--和--添加router

		// store.commit('setPermission',routerObj)


let routerMap = [...routerObj]
routerMap = 	routerMap.map((item)=>{
					 item.children = initRouter(item,item.path)
					 return	item
				})


		router.addRoutes(routerMap) 

		function initRouter(list1,bathpath0){
      var lists = []
			rest2.apply(this,Array.prototype.slice.apply(arguments))
					function rest2(list,basePath) {
						if (!list.children) {
							console.log(basePath+'发现一个重点')
							list.path = basePath
							lists.push(list)
							return ;
						}
							list.children.forEach(element => {
								rest2(element,basePath+'/'+element.path)
							});
          }
					return lists;
				}