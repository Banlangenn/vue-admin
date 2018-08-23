<template>
        <el-menu-item :index="basePath"  v-if="item.children.length < 1" class="ellipse">
          <i   v-if="item.icon"   :class="item.icon"></i>
          <span v-if="item.menuName" slot="title">{{item.menuName}}</span>
        </el-menu-item>


     <!-- 有多个子集 -->
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i  v-if="item.icon"  :class="item.icon"></i>
            <span slot="title"> {{item.menuName}} </span>
          </template>
          <!-- 递归组件 -->
              <MenuItem  v-for="child of item.children"  :item="child" :key="child.id"  :base-path="basePath+'/'+child.path"  />
        </el-submenu> 
</template>
<script>
export default {
  name: 'MenuItem',
   props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  created(){
    // console.log(this.item)
    // console.log('..........................')
    // console.log(this.basePath)
    // console.log(this.item)
  },
}
</script>

