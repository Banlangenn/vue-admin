import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import '@/assets/icon/iconfont.css'
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
		id:"1",
		parentId:"0",
		menuName:'权限',
		component:'Index',
		icon: 'el-icon-setting',
		path:'permission',
	},{
		id:"2",
		parentId:"0",
		menuName:'管理',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'test',
	},
	  //   PermissionMg,
	  // About ,
	  // HelloWorld
	{
		id:"3",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx',
	},
	{
		id:"99",
		parentId:"3",
		menuName:'测试',
		component:'About',
		icon: 'el-icon-setting',
		 path:'xxx',
	},
	  {
		id:"40",
		parentId:"0",
		menuName:'测试-1',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'helloWorld',
	},
	{
		id:"10",
		parentId:"1",
	   menuName:'一级1-1',
		component:'About',
		icon: 'el-icon-setting',
		 path:'about',
	},
	{
		id:"100",
		parentId:"10",
	menuName:'一级1-1-1',
		component:'About',
		icon: 'el-icon-setting',
		path:'about',
	},
	
	  {
		id:"11",
		parentId:"1",
	   menuName:'一级1-2',
		component:'HelloWorld',
		icon: 'el-icon-setting',
		 path:'one',
	},
	  {
		id:"22",
		parentId:"2",
	   menuName:'一级2-1',
		component:'PermissionMg',
		icon: 'el-icon-setting',
		 path:'two',
	},
	  {
		id:"19  ",
		parentId:"2",
	   menuName:'一级2-2',
		component:'About',
		icon: 'el-icon-setting',
		 path:'three',
	},
	  {
		id:"23",
		parentId:"1",
	   menuName:'一级1-3',
		component:'About',
		icon: 'el-icon-setting',
		 path:'four',
	},
	  {
		id:"24",
		parentId:"1",
	   menuName:'一级1-4',
		component:'HelloWorld',
		icon: 'el-icon-setting',
		 path:'five',
	},


	// ====================================
	{
		id:"3000",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx',
	},
	{
		id:"3001",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx7',
	},
	{
		id:"3002",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx8',
	},
	{
		id:"3003",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx89',
	},
	{
		id:"3004",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xxx9',
	},
	{
		id:"3005",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xx11',
	},
	{
		id:"3006",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xx12',
	},
	{
		id:"3007",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'xx13',
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
						
								component: () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue"),
								meta:{icon:'el-icon-setting',title:'测试'},
							}
		]
},

{
	path: '/step2',
		component: () => import(/* webpackChunkName: "index" */ "@/views/Index.vue"),
		meta: {
			title: '管理',
			icon: 'el-icon-location',
		},
		children:[
								
							{
								path: "index",
							
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
	
			   store.dispatch("setPermission",routerObj2); 
			   console.log(store.getters.routerArray2)
		 	
		router.addRoutes(store.getters.routerArray2) 

	