<template>
       <span class ="headerSearch " @click = "enterSearchMode">
        <i class="el-icon-search" />
        <!-- <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete> -->

         <el-autocomplete
            class="inline-input  input"
            v-model="value"
            placeholder="站内搜索"
            :class="{show:searchMode}"
            ref ="input"
            @blur = "leaveSearchMode"
            :trigger-on-focus="false"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
    />






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
            }
        },
        mounted(){
            this.searchMode = this.defaultOpen
        },
    methods:{
     handleSelect(item) {
        console.log(item);
      },
          querySearch(queryString, cb) {
        var restaurants = this.dataSource;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        console.log(results)
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
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
        this.$refs.input.focus();
      }
  },

  leaveSearchMode(){
   this.searchMode =  false;
    //  this.value =' ';
    setTimeout(()=>{
         this.value =' ';
    },300)
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
      width: 210px;
      margin-left: 8px;
    }
  }
}

</style>


