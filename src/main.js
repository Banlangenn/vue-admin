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


const routerObj2 = [
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
										meta:{icon:'el-icon-setting',title:'第1-1个子集'},
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
													meta:{icon:'el-icon-setting',title:'第1-1-2个子集'}
												}
											]
									},
									 {
										path: "helloWorld2-3",
										name: "helloWorld2-3",
										component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/About.vue"),
										meta:{icon:'el-icon-setting',title:'第2-1个子集'},
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
								meta:{icon:'el-icon-setting',title:'测试'},
							}
		]
},

{
	path: '/step2',
		component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
		redirect: '/step2/index',
		meta: {
			title: '管理',
			icon: 'el-icon-location',
		},
		children:[
								
							{
								path: "index",
								name: "helloWorld",
								component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/manage/PermissionMg.vue"),
								meta:{icon:'el-icon-setting',title:'权限管理'}
							}
				]
		},
		]
		const routerObj = [
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
													meta:{icon:'el-icon-star-on',title:'第1-1-1个子集'}
												},
												{
													path: "helloWorld71",
													name: "helloWorld7-1",
													component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/About.vue"),
													meta:{icon:'el-icon-star-on',title:'第1-1-2个子集'}
												}
											]
									},
									 {
										path: "helloWorld2-3",
										name: "helloWorld2-3",
										component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/About.vue"),
										meta:{icon:'el-icon-setting',title:'第2-1个子集'},
										 children:[
												{
													path: "helloWorld2-6",
													name: "helloWorld2-6",
													component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue"),
													meta:{icon:'el-icon-star-on',title:'第2-1-1-个子集'}
												}
											]
									}
								]
							},
							
								 {
								path: "about46/helloWorld2-6/helloWorld2-3",
								name: "about48",
								component: () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue"),
								meta:{icon:'el-icon-setting',title:'测试'},
							}
		]
},

{
	path: '/step2',
		component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
		redirect: '/step2/index',
		meta: {
			title: '管理',
			icon: 'el-icon-location',
		},
		children:[
								
							{
								path: "index",
								name: "helloWorld",
								component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/manage/PermissionMg.vue"),
								meta:{icon:'el-icon-setting',title:'权限管理'}
							}
				]
		},
		]
		// const routerObj2 = routerObj.slice(0)
		// const [ ...routerObj2 ] = routerObj
	// 1

// 渲染侧边栏--和--添加router
		 
		 
		 // 最后实在没办法-- 就本地存 loocal store
		 // window.localStorage  setItem   getItem  用minx  引入需要组件
		  store.dispatch("routerArray",routerObj);
	
		  	 store.dispatch("setPermission",routerObj2); 
		 	
		router.addRoutes(store.state.routerArray) 

	