

<template>
  <div class='exception'>
    <div class='imgBlock'>
      <div
        class='imgEle'
        :style="{ backgroundImage: `url(${img || config[pageType].img})`}"
      />
    </div>
    <div class='content'>
      <h1>{{ title || config[pageType].title }}</h1>
      <div class='desc'>{{ desc || config[pageType].desc }}</div>
      <div class='actions'>
          
        <!--
            anted  pre  还有个 actions  自定义 
            
             {actions ||
            createElement(
              linkElement,
              {
                to: '/',
                href: '/',
              }, -->
        <router-link to = '/' replace><el-button 
          size="small" 
          type="primary">返回首页</el-button></router-link>
          <!-- )} -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        403: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",
          title: "403",
          desc: "抱歉，你无权访问该页面"
        },
        404: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",
          title: "404",
          desc: "抱歉，你访问的页面不存在"
        },
        500: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",
          title: "500",
          desc: "抱歉，服务器出错了"
        }
      }
    };
  },
  props: {
    type: {
      // 必须提供字段
      type: Number,
      required: true
    },
    title: String,
    desc: String,
    img: String
  },

  computed: {
    pageType() {
      return this.type in this.config ? this.type : "404";
    }
  }
};
</script>
<style lang= 'less'>
.exception {
  display: flex;
  align-items: center;
  /* height: 100%; */
  min-height: 600px;
  /* flex: 1; */
  .imgBlock {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
      visibility: hidden;
      font-size: 0;
      height: 0;
    }
  }

  .imgEle {
    height: 360px;
    width: 100%;
    max-width: 430px;
    min-width: 233px;
    float: right;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }

  .content {
    flex: auto;

    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }

    .desc {
      /* color: @text-color-secondary; */
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }

    .actions {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}
</style>
