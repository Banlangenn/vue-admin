<template>
       <span class ="headerSearch " @click = "enterSearchMode">
        <i class="el-icon-search" :style = "{color:searchIcon}" />
         <el-autocomplete
            class="inline-input  input"
           v-model = value
            placeholder="站内搜索"
            :class="{show:searchMode}"
            ref ="input"
            @blur = "leaveSearchMode"
            :trigger-on-focus="false"
            :fetch-suggestions="querySearch"
            @select="handleSelect"  
            @input="inputFn"
    >
    <template slot-scope="{item}">
        <i class="iconfont-icon-jinru" :style = "{color:'red'}" />
        <span > {{item.value}}</span> 
    </template>
    </el-autocomplete>
      </span>
</template>
<script>

export default {
  data(){
    return {
              searchMode:false,
                 value: '',
    }
  },
        props: {
        //  className:String,
            placeholder:{
                type: String,
                default: ''
            }, 
            onSearch:{
                type: Function,
                default: () => {},
            },
            onPressEnter :{
                type: Function,
                default: () => {},
            },
            defaultActiveFirstOption: {
                type: Boolean,
                default: false,
            },
            dataSource:{
                type: Array,
                default: () =>[],
            },
            defaultOpen: {
                type: Boolean,
                default: false,
            },
            searchIcon: {
               type: String,
               default: '#626262',
            }
        },
        mounted(){
            this.searchMode = this.defaultOpen
        },
    methods:{
     handleSelect(item) {
        // console.log(item);
        this.$router.push({path:'/'+item.path})
      },
      querySearch(queryString, cb) {
        var restaurants = this.dataSource;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      inputFn(){
        console.log('inputFninputFninputFninputFninputFninputFninputFn')
      },
//   onKeyDown(e ){
//     if (e.key === 'Enter') {
//       this.debouncePressEnter();
//     }
//   },

  onChange(value){
    this.value = value ;
    if (this.onChange) {
      onChange(this.onChange);
    }
  },

  enterSearchMode () {
    this.searchMode = true
      if (this.searchMode) {
       this.$nextTick(()=>{
          this.$refs.input.focus();
       })
      }
  },

  leaveSearchMode(){
  //  this.searchMode =  false;
   
   setTimeout(()=>{
     this.value = ''
     this.$nextTick(() => {
        this.$refs.input.focus();
      });
   },300)
   
   this.searchMode =  false;
  
  },

  // NOTE: 不能小于500，如果长按某键，第一次触发auto repeat的间隔是500ms，小于500会导致触发2次
//   @Bind()
//   @Debounce(500, {
//     leading: true,
//     trailing: false,
//   })
    debouncePressEnter() {
        this.onPressEnter(this.value);
    }
    }
}
</script>
<style lang ="less">
.headerSearch {
  padding: 0 12px;
 cursor: pointer;
  font-size: 16px;

  
  .input {
    transition: width 0.3s, margin-left 0.3s;
    width: 0;
    background: transparent;
    border-radius: 0;
    /* :global(.ant-select-selection) {
      background: transparent;
    } */
    input {
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
       background-color: #eff2f5;
       height: 26px;
    }
    &,
    &:hover,
    &:focus {
      /* border-bottom: 1px solid @border-color-base; */
       border-bottom: 1px solid #ccc;
    }
    &.show {
      width: 260px;
      margin-left: 8px;
    }
  }
}

</style>


