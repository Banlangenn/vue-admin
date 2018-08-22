
import commentsMap from '@/router/comObj'
import cloneDeep from 'lodash/cloneDeep';
export default {
    // 权限数据结构
    routerArray2: state => {
        // 只有 用routerArray2的时候 ==routerArray2 才会走 ，并且会缓存下来，猜测是闭包单例
        // console.time('JSON')
        // let data = JSON.parse(JSON.stringify(state.permission))
        // console.log(data)
        // console.timeEnd('JSON')

        // console.time('lodash')
        let  data  =  cloneDeep(state.permission)
        // console.log(list12)
        // console.timeEnd('lodash')


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
        // let list2 = JSON.parse(JSON.stringify(list))
        // 为什么这里还用到 clone了呢 不用会 
        //  Error in mounted hook: "RangeError: Maximum call stack size exceeded"
        let  list2  =  cloneDeep(list)
        // let list2 = list
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