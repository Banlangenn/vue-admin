<template>
<div class="login"> 
   <div class="lark page-account lark-login"> 
    <div class="main-wrapper"> 
     <div class="layout-container"> 
      <div class="lark-form"> 
       <div class="lark-form-main"> 
        <div class="lark-form-logo"> 
         <a href="/"> <img src="http://im.suning.com/images/logo.png" alt="豆芽" /> </a> 
        </div> 
        <div class="lark-form-content form-pro"> 
         <div class="account-slogon"> 
          <h2 class="account-slogon-main"> 欢迎回到豆芽</h2> 
          <p class="account-slogon-subhead"> 
            <span>写后台，就用豆芽</span>
             </p> 
         </div> 

         <div class="account-login form-pro"> 
   <el-form :model="ruleForm2" status-icon  ref="ruleForm2" 
  class="demo-ruleForm">
    <el-form-item >
    <el-input  v-model="ruleForm2.checkPass"
    prefix-icon = "el-icon-mobile-phone"
     auto-complete="off"></el-input>
  </el-form-item>
   <el-form-item  >
    <el-input type="password" v-model="ruleForm2.checkPass"
    prefix-icon = "el-icon-check"
     auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="success" style="width:100%" @click.native="loginHandle" >登 录</el-button>         
  </el-form-item>
</el-form>
          <div class="third-login"> 
           <div class="ant-row"> 
            <div class="ant-col-12 dingtalk-link"> 
             <a href="/login?login_type=dingtalk" title="钉钉登录"> <span class="dingtalk"> </span>微信登录</a> 
            </div>
            <div class="ant-col-12 dingtalk-extra"> 
             <a href="/register">免费注册账户</a>
            </div> 
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div> 
    </div>
    <div class="footer"> 
     <!-- <div class="layout-container">
                        <div class="footer-container">

                        </div>
                        </div> --> 
    </div>
   </div> 
  </div> 
</template>
Ï
<script>
let id = 1000;
import cloneDeep from 'lodash/cloneDeep';


const routerObj2 = [
	{
		id:"2",
		parentId:"0",
		menuName:'开发备注',
		component:'Index',
		icon: 'el-icon-setting',
		 path:'test',
	},
	{
		id:"1",
		parentId:"0",
		menuName:'权限',
		component:'Index',
		icon: 'el-icon-setting',
		path:'permission',
	},
	{
		id:"1024",
		parentId:"1",
		menuName:'角色权限',
		component:'RolesMg',
		icon: 'el-icon-setting',
		path:'RolesMg',
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
	   menuName:'添加路由和组件',
		component:'PermissionMg',
		icon: 'iconfont-icon-home',
		 path:'two',
	},
	  {
		id:"19  ",
		parentId:"2",
	   menuName:'更新日志',
		component:'UpdateLog',
		icon: 'el-icon-setting',
		 path:'three',
	},
	{
		id:"1922 ",
		parentId:"2",
	   menuName:"一些demo",
		component:'ListComplete',
		icon: 'el-icon-setting',
		 path:'demo',
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
	// {
	// 	id:"3000",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'el-icon-setting',
	// 	 path:'xxx',
	// },
	// {
	// 	id:"3001",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'iconfont-icon-home',
	// 	 path:'xxx7',
	// },
	// {
	// 	id:"3002",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'iconfont-icon-collapse-right',
	// 	 path:'xxx8',
	// },
	// {
	// 	id:"3003",
	// 	parentId:"0",
	// 	menuName:'测试456456',
	// 	component:'Index',
	// 	icon: 'iconfont-icon-home',
	// 	 path:'xxx89',
	// },
	// {
	// 	id:"3004",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'el-icon-setting',
	// 	 path:'xxx9',
	// },
	// {
	// 	id:"3005",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'el-icon-setting',
	// 	 path:'xx11',
	// },
	// {
	// 	id:"3006",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'el-icon-setting',
	// 	 path:'xx12',
	// },
	// {
	// 	id:"3007",
	// 	parentId:"0",
	// 	menuName:'测试',
	// 	component:'Index',
	// 	icon: 'el-icon-setting',
	// 	 path:'xx13',
	// },
  ]


	
// 我应该在 登录页== 路由添加 1.本地有缓存在app.vue2.本地没有缓存 在菜单
	// setTimeout(()=>{
	// 	// alert(!!store.state.permission)
	// 	// console.log()
	// 	if (store.state.permission.length === 0) {
	// 		store.dispatch("setPermission",routerObj2);
	// 	}
	// },3000)
	// store.dispatch('getproduct')// 请求


export default {
data() {
   
return {
   ruleForm2: {
      pass: 'admin',
      checkPass: '123445',
      age: ''
    },

}
},
computed:{

},
methods: {
  loginHandle(){
    this.$store.dispatch("setPermission",routerObj2)
    
    this.$router.push({path:'/'})
  }


}
}


</script>
<style  lang = 'less'>
.login{
  .lark {
      position: relative;
      background: #fff;
      margin: 0 auto;
      .page-account {
          background-color: #fafafa;
      }
  }
  .main-wrapper {
    width: 100%;
    /* min-height: calc(100vh - 60px - 54px); */
    min-height:100vh;
    /* background: #fafafa; */
    background:url('http://bpic.588ku.com/back_pic/04/84/37/5058d77791a86e5.jpg!r650/fw/800') no-repeat;
    background-size: cover;
    
  }
  .account-login {
    margin-top: 36px;
  }
  .layout-container {
      max-width: 1056px;
      padding-left: 16px;
      padding-right: 16px;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
  }
  .lark-form {
    padding-top: 96px;
    width: 430px;
    margin: auto;
  } 
  .lark-form-main {
        background-color: rgba(53, 73, 95, 0.2);
        
    padding: 56px 8px 72px;
    margin-bottom: 64px;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    .lark-form-logo {
    max-width: 320px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 24px;
   }
   .lark-form-content {
    max-width: 320px;
    margin: 0 auto;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    .account-slogon {
      margin-bottom: 0;
    }
    .account-slogon-main {
      font-size: 24px;
      line-height: 32px;
      color: #262626;
    }
    .account-slogon-subhead {
        color: #595959;
        margin-top: 12px;
    }
  }


  .third-login {
    margin-top: 32px;
    border-top: 1px solid #e8e8e8;
    padding-top: 16px;
    span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("https://gw.alipayobjects.com/zos/rmsportal/iSBYXPhvTkwhjYUQVMLG.png");
    background-size: 100%;
    vertical-align: middle;
    margin-right: 8px;
}
  }
  .ant-row {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .dingtalk-link {
      display: inline-block;
      text-align: left;
    }
    .ant-col-12 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    float: left;
    flex: 0 0 auto;
    position: relative;
    min-height: 1px;
    padding-left: 0;
    padding-right: 0;
  }
  .dingtalk-extra {
      text-align: right;
  }
    &:after {
        clear: both;
    }

    &:before, &:after {
        content: "";
        display: table;
    }
    a {
    color: #096DD9;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-text-decoration-skip: objects;
    }
  }



  }






}

</style>


