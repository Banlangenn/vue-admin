



export default {
	// 权限数据结构
    setPermission(state,permission){
        state.permission = permission;
    },
    // 路由数据结构
    routerArray(state,routerArray){
        state.routerArray = [...state.routerArray,...routerArray];
    }
}


