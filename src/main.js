import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import '@/assets/icon/iconfont.css'
import '@/index.less'
import NProgress from 'nprogress' // progress bar
NProgress.configure({ easing: 'ease',showSpinner: false})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");












// 全局导航守卫
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
		icon: 'iconfont-icon-home',
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
	menuName:'一级1-1-1测试字数边长',
		component:'About',
		icon: 'iconfont-icon-collapse-right',
		path:'about',
	},
	
	  {
		id:"11",
		parentId:"1",
	   menuName:'一级ListComplete ',
		component:'ListComplete',
		icon: 'el-icon-setting',
		 path:'one',
	},
	  {
		id:"22",
		parentId:"2",
	   menuName:'一级2-1',
		component:'PermissionMg',
		icon: 'iconfont-icon-home',
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
		icon: 'iconfont-icon-collapse-right',
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
		icon: 'iconfont-icon-home',
		 path:'xxx7',
	},
	{
		id:"3002",
		parentId:"0",
		menuName:'测试',
		component:'Index',
		icon: 'iconfont-icon-collapse-right',
		 path:'xxx8',
	},
	{
		id:"3003",
		parentId:"0",
		menuName:'测试456456',
		component:'Index',
		icon: 'iconfont-icon-home',
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


	
// 我应该在 登录页== 路由添加 1.本地有缓存在app.vue2.本地没有缓存 在菜单
	setTimeout(()=>{
		store.dispatch("setPermission",routerObj2); 
	},5000)
	store.dispatch('getproduct')


			  

			
		 	
		
			
	

	