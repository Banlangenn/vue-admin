



export default {
	//登录  设置权限会自动触发  生成树
	setPermission({ commit }, permission) {


		// 这里边是可以  请求接口的=== 
		//    想法： 便利出的数据 =一份已给菜单   可以直接用 
		// 只能缓存 menu 数据 ：
		let data = JSON.parse(JSON.stringify(permission))
		let targetArr = []
		function authTree(list, nodeId, targetArr) {
			if (!targetArr) { return }
			list.forEach((element, i) => {
				if (element.parentId == nodeId) {
					element.children = [];
					targetArr.push(element)
					authTree(list, element.id, element.children)
				}
			});
		}
		authTree(JSON.parse(JSON.stringify(data)), 0, targetArr) 
		commit('setPermission', targetArr)



		// commit('testrouter')
		// commit('testrouter')
	},
	// 设置路由
	routerArray({ commit }, data) {
		commit('routerArray', data.map((item) => {
			item.children = initRouter(item, item.path)
			return item
		}))
	},

}




function initRouter(list1, bathpath0) {
	var lists = []
	rest2.apply(this, Array.prototype.slice.apply(arguments))
	function rest2(list, basePath) {
		if (!list.children) {
			list.path = basePath
			lists.push(list)
			return;
		}
		list.children.forEach(element => {
			rest2(element, basePath + '/' + element.path)
		});
	}
	return lists;
}