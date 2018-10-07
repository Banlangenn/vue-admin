
<template>
  <div class="head">
    <span class="left">
      <img 
        class="logo" 
        :src="cat" 
        alt="">
    </span>

    <div class="right">
      <header-search 
        :data-source = this.$store.getters.renderSourceData
      />
      <el-dropdown 
        trigger="hover" 
        @command="handleCommand">
        <span class="el-dropdown-link userinfo">
          <span class="avatar">
            <img 
              :src="$store.state.userinfo.user_avatar" 
              alt="">
          </span>  
          <span>
            {{ $store.state.userinfo.login_name}}
          </span>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item command="loginout"> <i class="iconfont-icon-tuichu"/> 退出登录</el-dropdown-item>
          <el-dropdown-item command="user"> <i class="iconfont-icon-tuichu"/> 切换user账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> 
    </div>
  </div>
</template>
<script>
import HeaderSearch from "@/components/HeaderSearch/index.vue";

const routerObj2 = [
  {
    id: "2",
    parentId: "0",
    menuName: "开发备注",
    component: "Index",
    icon: "el-icon-setting",
    path: "test"
  },

  {
    id: "22",
    parentId: "2",
    menuName: "添加路由和组件",
    component: "PermissionMg",
    icon: "iconfont-icon-home",
    path: "two"
  },
  {
    id: "19  ",
    parentId: "2",
    menuName: "更新日志",
    component: "UpdateLog",
    icon: "el-icon-setting",
    path: "three"
  },
  {
    id: "1922 ",
    parentId: "2",
    menuName: "一些demo",
    component: "ListComplete",
    icon: "el-icon-setting",
    path: "demo"
  }
];
import Cat from "@/assets/cat.gif";
import Cat2 from "@/assets/cat2.png";
import { mapState } from "vuex";
export default {
  mounted() {
    // console.log(this.$store.userin)
  },
  data() {
    return {
      data: "",
      cat: Cat
    };
  },
  components: {
    HeaderSearch
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    // ...mapState({
    //   userinfo: state => state.userinfo
    // })
  },
  methods: {
    handleCommand(command) {
      if (command === "loginout") {
        this.$message("退出登录");
      } else if (command === "user") {
        this.$message("切换到user用户");
        this.$store.dispatch("setPermission", routerObj2);
        this.$store.commit("setUserinfo", { name: "user", avatar: Cat2 });
        // this.$router.forward()\
        window.location.reload();
      }
    }
  }
};
</script>


<style lang="less" >
.head {
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
  background: #eff2f5;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
  .left {
    display: inline-block;
    height: 100%;
    line-height: 64px;
    vertical-align: middle;
  }
  .right {
    display: flex;
    // justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;
    .userinfo {
      height: 100%;
      line-height: 64px;
      display: inline-block;
      transition: all 0.3s;
      padding: 0 12px;
      &:hover {
        background-color: rgba(63, 180, 249, 0.2);
      }
    }
    .avatar {
      display: inline-block;
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
