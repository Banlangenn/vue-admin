/*
 * @Author:douya 
 * @Date: 2018-08-12 16:06:50 
 * @Last Modified by: xiaoliu
 * @Last Modified time: 2018-08-26 21:16:36
 * @Description:自定义的一些 小工具
 */

import Vue from "vue";

Vue.use({
  install: function(Vue) {
    Vue.component("Flex", {
      render: function(createElement) {
        return createElement(
          this.tag, // tag name 标签名称
          {
            // 和`v-bind:class`一样的 API
            // 接收一个字符串、对象或字符串和对象组成的数组
            class: {
              foo: true,
              bar: false
            },
            // 和`v-bind:style`一样的 API
            // 接收一个字符串、对象或对象组成的数组
            style: {
              display: "flex"
            }
          },
          this.$slots.default // 子组件中的阵列
        );
      },
      props: {
        tag: {
          type: String,
          default: "div"
        }
      }
    });
  }
});
