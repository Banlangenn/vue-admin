/*
 * @Author:douya 
 * @Date: 2018-08-12 01:05:13 
 * @Last Modified by: xiaoliu
 * @Last Modified time: 2018-09-14 00:50:04
 * @Description: 我们组装模块并导出 store 的地方 
 * 1.需要存在 本地的放在外边 跟信息 好取 好拿 好存 
 * 2.需要配置vuex 组件 plugins
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
import product from './modules/product.js'
Vue.use(Vuex);

// 模块




import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const debug = process.env.NODE_ENV !== 'production'


const whiteList = {
  setUserinfo: 'userinfo',
  setPermission: 'permission',
  isLogin:'isLogin',


  resetAllStoreInfo: 'resetAllStoreInfo'// 清除本地 存储 退出登录，一定放在最后
}
// 日志
let plugins =[]
debug&&plugins.push(createLogger())
// 数据持久化
plugins.push(createPersistedState({
  storage: window.localStorage,
  // storage: {
  //   getItem: key => Cookies.get(key),
  //   // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  //   setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
  //   removeItem: key => Cookies.remove(key)
  // }

  reducer: state =>{
    // 本地存哪些 值 ===每次进来都一样的不存的话  可以直接在 store 初始化呀 搞不懂 要这个干啥
          const persistValues = Object.values(whiteList)
          const stateObj = {}
          for(const persistValue of persistValues){
            stateObj[persistValue] = state[persistValue]
          }
          return stateObj
  } ,
  filter: (mutation) => (
    // 需要哪些 mutation 触发 本地改动
    // mutation.type === 'setUser' ||
    // mutation.type === 'setWechat' ||
    // mutation.type === 'setCar' ||
    // mutation.type === 'setOrder' ||
    // mutation.type === 'resetAllStoreInfo'
    Boolean(whiteList[mutation.type])
  )
}))


const initstate = {
  userinfo: {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    name: 'admin'
  },
  isLogin: false,
  permission: [],
  routerArray: [],
  isCollapse: false,
}



export default new Vuex.Store({
  modules: {
    // cart, // 模块
    product // 模块
  },
  state: initstate,// 根状态
  mutations,// 根状态
  actions,// 根状态
  getters,// 根状态
  strict: debug,
  plugins: plugins
});



