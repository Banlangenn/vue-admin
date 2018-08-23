
<template>
  <div class="warp-breadcrum">

      <!-- 随时可以把我干掉   -- 不会影响别的   可以考虑弄成个组件-->
      <div class="tc collapse">
            <span   @click = "changeCollapsn">
                    <i class="iconfont-icon-collapse-right"
                    :style="{
                        transform:this.$store.state.isCollapse ? 'rotate(180deg)':'rotate(0deg)',
                      transition:'transform .6s ease-in-out',
                    }" />
          </span>
      </div>
<!-- 随时可以把我干掉   -- 不会影响别的-->

    <transition-group  tag='ul'  class="tabListWp "   name="list-complete"  >
      <li   v-for = "(tabData,index) of tabsData"    :key = 'tabData.path'   class="list-complete-item" >
              <router-link  
                  :to="tabData.path" 
                  tag="div" 
                  class="tc tab "
            > 
       <div class="tab-bg" :class="crrIndex == index ? 'tab-active':'' "></div>
       <el-tooltip
        class="item" 
         effect="light"
         :content="tabData.meta.title"
          placement="bottom"
          :open-delay = 1000
          popper-class= "tabTooltip"
          >
           <div class="tab-content ellipse" > 
         <i :class="tabData.meta.icon"></i>
          {{tabData.meta.title}}
         </div>
    </el-tooltip>
     
          <i class="el-icon-close close" @click.stop='removeTab(index)'></i>
       </router-link>
             </li>
          </transition-group>


  </div>
</template>
<script>
// draggable  实现拖拽   t 太丑放弃 


import { mapMutations } from "vuex";
  export default {
    data() {
      return {
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
      // tabs数据中没有 这个 路由
      if (this.tabsData.some(v => v.path === this.$route.path)){
          for (let i= 0; i< this.tabsData.length;i++) {
            if (this.tabsData[i].path === this.$route.path) {
                this.crrIndex = i
              break
            }
      }
      }else{
          // tabs数据中有 这个 路由
          this.tabsData.push(this.$route)
          this.crrIndex =  this.tabsData.length-1;
      }
      //  1. icon和 title 只有放在== meta 中才能访问
      //  2. 缓存 使用 放在 seesloastore tabs
    },
  
        removeTab(index){
           let crrIndex = this.crrIndex; //要变化的
          if(index  == crrIndex && crrIndex  == 0 && this.tabsData.length == 1){
             this.$message({
                message: '只剩一个了  不能再删除了',
                type: 'warning'
             });
              return;
          }
  // 不是删除自己
  if(index <  crrIndex){
      this.crrIndex--;
  }else if(index >  crrIndex){
    //  this.crrIndex--;
  }else

 
          
        //  删除自己
          if(index ==crrIndex&& crrIndex  == 0){
            this.$router.push({path:this.tabsData[crrIndex+1].path})
        }else if(index ==crrIndex ){
             this.$router.push({path:this.tabsData[crrIndex-1].path})
        }
          this.tabsData.splice(index,1)
      }

   }
  }
</script>
<style   lang='less'>

  .warp-breadcrum {
    display: flex;
    align-content: center;
    background-color: #ccc;
    height: 42px;
     position: relative;
      cursor: pointer;
      
//  切换
      .collapse {
        border-top: 5px solid #ccc;
        border-bottom: 7px solid #f2f2f2;
        width:40px;
        line-height: 30px;
                i{
                  color: #545c64;
                  font-size: 20px;
                &:hover{
                  color: #7aafe4;
                }
                }
         }



    .tabListWp {
      width:calc(~"100% - 40px");
      display: flex;
       height: 42px;
        z-index: 1;
        overflow: hidden;
        border-top: 5px solid #ccc;
        border-bottom: 7px solid #f2f2f2;
      /*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
&::-webkit-scrollbar{
    width:6px;
    height:6px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
&::-webkit-scrollbar-track{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
&::-webkit-scrollbar-thumb{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#555;
}
        li:not(:first-child) {
             margin-left: -14px;
        }
        li {
              width: 200px;
                min-width: 94px;
        }
       .tab {
         color: #545c64;
        line-height: 30px;
         padding: 0 30px;
         position: relative;// 为什么要用 relative; bg要定位， 取消按钮 要定位
            &:hover{
                  color: #7aafe4;
                }
         .tab-bg {
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
    
         .tab-content {
           i{
             font-size: 18px;
           }
         }
         .close {
          position: absolute;
          right:15px;
          top:25%;
          font-weight: 700;
           transform:rotate(0deg) scale(1) ;
           transition:transform .3s ease-in-out;
          &:hover{
              transform:rotate(180deg) scale(1.1) ;
              color: #fff;
              background-color: #000;
              border-radius: 100px;
              padding: 1px;
          }
         }
         
         .tab-active {
          z-index: -1;
          border-bottom: 30px solid rgb(242,242,242);
         }       
       }
    }
  }



         /*入场(离场)动画的时间段   */
         .my-enter,.my-leave-to{
            opacity:  0;/*透明度*/
            transform: translateY(30px);
        }
        .my-enter-active,.my-leave-active{
            transition: all 0.4s ease-in-out;
        }



          .list-complete-item {
          transition: all .3s ease-in-out;
            /* display: inline-block; */
            /* margin-right: 10px; */
          }
    
           .list-complete-enter, .list-complete-leave-to {
             opacity: 0;
             transform: translateX(-150px);
           }
       
          .list-complete-leave-active {
            position: absolute;
            // left: initial;
            
          }
          // .list-complete-move {
          //   transition: transform .2s;
          // }
    


</style>