
export default {
    setPermission({commit},permission){
        commit('setPermission',permission)
    },
    routerArray({commit},data){
     // 		const PERM = JSON.parse(JSON.stringify(permission))
    	// // 不能这样子搞 -- 这样子搞  组件丢了
		commit('routerArray',data.map((item)=>{
			 item.children = initRouter(item,item.path)
			 return	item
		}))
    }
}

	function initRouter(list1,bathpath0){
	      var lists = []
				rest2.apply(this,Array.prototype.slice.apply(arguments))
						function rest2(list,basePath) {
							if (!list.children) {
								// console.log(basePath+'发现一个重点')
								
								list.path = basePath
								lists.push(list)
								return ;
							}
								list.children.forEach(element => {
									rest2(element,basePath+'/'+element.path)
								});
	          }
						return lists;
		}