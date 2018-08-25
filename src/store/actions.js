



import cloneDeep from 'lodash/cloneDeep';
import {getMenData} from '@/utils/utils.js'
export default {
	//登录  设置权限会自动触发  生成树
	setPermission({ commit }, permission) {
		// 这里边是可以  请求接口的=== 
		//    想法： 便利出的数据 =一份已给菜单   可以直接用 
		// 只能缓存 menu 数据 ：
		// let data = JSON.parse(JSON.stringify(permission))
		let data = cloneDeep(permission)
		commit('setPermission', getMenData(data))
	},
}

 

