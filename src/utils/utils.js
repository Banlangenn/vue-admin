
import commentsMap from '@/router/comObj'
import cloneDeep from 'lodash/cloneDeep';

// 获取路由router参数
    function getRenderArr() {
        let renderArr = [];
        function getRoute(router, basePath) {
            // let list2 = JSON.parse(JSON.stringify(list))
            // 为什么这里还用到 clone了呢 不用会 
            //  Error in mounted hook: "RangeError: Maximum call stack size exceeded"
            let  route  =  cloneDeep(router)
            // let list2 = list
            if (route.children.length < 1) {
                route.path = '/'+basePath;
                route.component = commentsMap[route.component];
                route.meta = {title:route.menuName,icon:route.icon}
                renderArr.push(route)
                return;
            }
            route.children.forEach(element => {
                getRoute(element, basePath + '/' + element.path)
            });
        }
        getRoute.apply(this, Array.prototype.slice.apply(arguments))
        return renderArr;
    }
export function getRoutes(routerData){
    
     // 只有 用routerArray2的时候 ==routerArray2 才会走 ，并且会缓存下来，猜测是闭包单例
            let  data  =  cloneDeep(routerData)
            let resoult =  data.map((item) => {
                item.component = commentsMap[item.component];
                item.children = getRenderArr(item, item.path)
                return item
            })
            resoult.push({path:'*',redirect:'./exception/403'})
            return resoult
        }

// 获取路由 全局搜索数据
export function getSourceData(routerData){
                let renderArr = [];
                function getRoute(router, basePath, baseName) {
                    // let list2 = JSON.parse(JSON.stringify(list))
                    // 为什么这里还用到 clone了呢 不用会 
                    //  Error in mounted hook: "RangeError: Maximum call stack size exceeded"
                    let  route  =  cloneDeep(router)
                    if(route.length > 0){
                        route.forEach(element => {
                            getRoute(element,  element.path,  element.menuName)
                        });
                       return;
                    }
                    if (route.children.length < 1) {
                        let obj = {}
                        obj.path =  basePath;
                        obj.value = baseName;
                        renderArr.push(obj)
                        return;
                    }
                    route.children.forEach(element => {
                        getRoute(element, basePath + '/' + element.path, baseName + '=>' + element.menuName)
                    });
                } 
                if(routerData.length === 0){
                    return routerData;
                 } 
                getRoute(routerData, '', '')
                return renderArr;
            }


export function getMenData(data){
            let targetArr = []
                function menuTree(list, nodeId, targetArr) {
                    if (!targetArr) { return }
                    list.forEach((ele, i) => {
                        if (ele.parentId == nodeId) {
                            ele.children = [];
                            targetArr.push(ele)
                            menuTree(list, ele.id, ele.children)
                        }
                    });
                }
                menuTree(data, 0, targetArr) 
                return targetArr
        }