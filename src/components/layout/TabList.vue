
<template>
  <div class="warp-breadcrum">

      <!-- 随时可以把我干掉   -- 不会影响别的   可以考虑弄成个组件-->
      <div class="tr"  style="
        border-top: 10px solid #ccc;
        border-bottom: 10px solid #f2f2f2;
        width:40px;
        padding-bottom:10px;
        cursor: pointer;
        
        
        ">
      <span @click = "changeCollapsn">
     <i class="iconfont-icon-collapse-right"
     :style="{
        transform:this.$store.state.isCollapse ? 'rotate(180deg)':'rotate(0deg)',
       transition:'transform .6s ease-in-out',
       fontSize:'25px',
       color:'#8f9398',
     }" />
     </span>
      </div>
<!-- 随时可以把我干掉   -- 不会影响别的-->
   <ul class="tabListWp">
      <router-link   :to="tabData.path" tag="li" v-for="(tabData,index) of tabsData"    class="tc tab"> 
       <div class="tab-bg" :class="crrIndex == index ? 'tab-active':'' "></div>
       <div class="tab-content ellipse "> 
         <i :class="tabData.meta.icon"></i>
          {{tabData.meta.title}}
         </div>
          <i class="el-icon-close close"></i>
       </router-link>
   
   </ul>

  </div>
</template>
<script>
import { mapMutations } from "vuex";
  export default {
    data() {
      return {
        // currentDate: new Date(),
        tabsData:[],
        crrIndex:-1,
      }
    },
    mounted(){
      this.addTab()
    },
    watch: {
    $route() {
      this.addTab()
     console.log(this.$route)
    },
  },
     methods: {
    ...mapMutations(["changeCollapsn"]),
    addTab(){
      if (this.tabsData.some(v => v.path === this.$route.path)){
          for (let i= 0; i< this.tabsData.length;i++) {
            if (this.tabsData[i].path === this.$route.path) {
                this.crrIndex = i
              break
            }
      }
      }else{
          this.tabsData.push(this.$route)
          this.crrIndex =  this.tabsData.length-1;
      }
      //  1. icon和 title 只有放在== meta 中才能访问
      //  2. 缓存 使用 放在 seesloastore tabs
    }
  }
  }
</script>
<style scoped  lang='less'>
  .warp-breadcrum {
    display: flex;
    align-content: center;
    background-color: #ccc;
    height: 50px;
     position: relative;
    .tabListWp {
      
      margin-left: 40px;
      display: flex;
       height: 50px;
       width: 100%;
        position: absolute;
        z-index: 1;
        padding: 0 15px; 
        overflow: auto;
        border-top: 10px solid #ccc;
        border-bottom: 10px solid #f2f2f2;
        li:not(:first-child) {
             margin-left: -17px;
        }
       li {
         cursor: pointer;
         width: 200px;
        line-height: 30px;
         padding: 0 30px;
         position: relative;
         .tab-bg{
          width:100%;
          height: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -2;
          border-bottom: 30px solid #D9DEE4;
          border-left: 15px solid  transparent;
          border-right: 15px solid transparent;
         }
         .tab-conten {
           padding:  0 15px;
         }
         .close {
          position: absolute;
          right:15px;
          top:50%;
          transform:translateY(-50%);
         }
         .tab-active {
          z-index: -1;
          border-bottom: 30px solid rgb(242,242,242);
         }       
       }

    }
  }


</style>