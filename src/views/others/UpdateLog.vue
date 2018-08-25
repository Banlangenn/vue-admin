  <template>
  <div>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="260">
      </el-table-column>
      <el-table-column
        prop="content"
        label="更改类容">
      </el-table-column>
    </el-table>

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
      data() {
        return {
          tableData: [
            {
                date: '2018-08-25',
                title: '模仿 Ant Design Pro',
                content: '添加 404 403 500 错误页面和 封装请求 '
            },
          ]
        }
      }
    }
  </script>