<template>
        <el-menu-item :index="basePath"  v-if="item.children.length < 1">
          <i :class="item.icon"></i>
          <span v-if="item.menuName" slot="title">{{item.menuName}}</span>
        </el-menu-item>


     <!-- 有多个子集 -->
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
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
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
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
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // temp set(will be used if only has one showing child )
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths)
    },
   
  }
}
</script>

