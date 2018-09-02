
<script>
import CountUp from 'countup'
export default {
  data(){
    return {
              searchMode:false,
                 value: '',
    }
  },
  mounted(){
   this.$nextTick(() => {
          this.count =  new CountUp(
          this.idName,
          this.start, 
          this.end,
          this.decimals,
          this.duration,
          
          {
          useEasing: true, 
          useGrouping: true, 
          separator: ',', 
          decimal: '.', 
          }
        // this.decimals, this.duration, {
        // useEasing: !this.uneasing,
        // useGrouping: this.useGroup,
        // separator: this.separator,
        // decimal: this.decimal,
        //  }
         )
         if (!this.count.error) {
        this.count.start();
        } else {
          console.error(this.count.error);
        }
     
      })
  },
   render: function (createElement) {
     return createElement(
             this.tag,   // tag name 标签名称 
                {
                    attrs: {
                        id: this.idName,
                        class: this.className,
                        style: this.styleName    
                    },
                    on: {
                        click: this.handleClick
                    }
                });
  },
   watch: {
    end (newVal) {
    //   let endVal = this.getValue(newVal)
      this.count.update(newVal)
    }
  },
        props: {
            styleName:{
                 type: String,
                default: "color:red"
            },
            className:{
                type: String,
                default: 'countUp3'
            }, 
            idName:{
                type: String,
                default: 'countUp'
            }, 
            tag:{
                type: String,
                default: 'p'
            }, 
            start:{
                type: Number,
                default: 0
            }, 
            end:{
                type: Number,
                default:144000,
            },
            duration:{Number},
            decimals:{Number},
            handleClick :{
                type: Function,
                default: () => {},
            },
        },
    methods:{


  
  },
}
</script>
<style lang ="less">


</style>


