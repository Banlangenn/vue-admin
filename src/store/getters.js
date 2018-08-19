


import commentsMap from '@/router/comObj'

export default {
    // 权限数据结构
    routerArray2: state => {
        let data = JSON.parse(JSON.stringify(state.permission))
        return data.map((item) => {
            item.component = commentsMap[item.component];
            item.children = initRouter(item, item.path)
            return item
        })


    }
}


function initRouter(list1, bathpath0) {
    var lists = []
    rest2.apply(this, Array.prototype.slice.apply(arguments))
    function rest2(list, basePath) {
        let list2 = JSON.parse(JSON.stringify(list))


        if (list2.children.length < 1) {
            list2.path = '/'+basePath;
            list2.component = commentsMap[list2.component];
            list2.meta = {title:list2.menuName,icon:list2.icon}
            lists.push(list2)
            // delete list.children
            // delete list.icon
            // delete list.id
            // delete list.parentId
            // delete list.menuName
            return;
        }
        list2.children.forEach(element => {
            rest2(element, basePath + '/' + element.path)
        });
    }
    return lists;
}