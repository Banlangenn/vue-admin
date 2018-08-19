
export default {
	// 权限数据结构
    setPermission(state,permission){
        state.permission = permission;
    },
       // 切换Collapsn
    changeCollapsn(state){
        state.isCollapse = !state.isCollapse
    }
}


