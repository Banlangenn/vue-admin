
import {getRoutes} from '@/utils/utils.js'

export default {
 /**
  * 生成路由数据结构
  * 添加 -- 路由  必须有： 添加路由有两种 
  * 1 同步加载 app  是同步加载
  * 2 异步加载 menuindex异步加载 
  *  
  */
    renderRouter: state => {
        return getRoutes(state.permission)
    },
    isLoginOut: state => {
        return state.userinfo ? false : true;
    }

}

