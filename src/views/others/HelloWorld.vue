<template>
  <div class="hello">

   
       <h2><p>icon 只有 顶层会有icon ，下边的 不会有icon</p> </h2>
        <h1> 
          <p>1. tree 添加 要修改  ，root之外添加 把 icon 按钮影藏起来 </p>
          <p>2. menu  生成icon  要用 v-if </p>
          <p>3. 生成路由的 meta.icon    map循环传进来 == icon </p>
        </h1>

          <h2><p>把header  补充一下</p> </h2>
        <h1> 
          <p>1.头像-昵称   点击  el-dropdown 组件     icon-退出按钮- </p>
          <p>2.  </p>
          <p>3.  </p>
        </h1>
           <h2><p>设计优化</p> </h2>
        <h1> 
          <p>1.切换 icon 小一些== 弄个hover效果 背景颜色换一下 或者动一下 颜色 加深  </p>
          <p>2.   tab  也应该有 hover 效果  和 icon  统一一下 </p>
          <p>3. menu  可以向右 3px  影音 </p>
        </h1>
    
        <h2><p>把登录  补充一下</p> </h2>
        <h1> 
          <p>1. 微信 - qq </p>
          <p>2. 手机-短信  </p>
          <p>3. 手机-密码 </p>
        </h1>

          <h2><p> 时间允许 ==弄一个 react 版本</p> </h2>
        <h1> 
          <p>1.  </p>
          <p>2.   </p>
          <p>3.  </p>
        </h1>
   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
