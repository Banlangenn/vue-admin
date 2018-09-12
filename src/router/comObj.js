



const Index = () => import(/* webpackChunkName: "index" */ "@/views/Index.vue")
const UpdateLog = () => import(/* webpackChunkName: "updateLog" */ "@/views/others/UpdateLog.vue")
const PermissionMg = () => import(/* webpackChunkName: "managePermit" */ "@/views/manage/PermissionMg.vue")
const RolesMg =  () => import(/* webpackChunkName: "managePermit" */ "@/views/manage/RolesMg.vue")

const About = () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue")
const HelloWorld = () => import(/* webpackChunkName: "helloWorld" */ "@/views/others/HelloWorld.vue") 
const ListComplete = () => import(/* webpackChunkName: "listComplete" */ "@/views/others/ListComplete.vue") 
const Exception = () => import(/* webpackChunkName: "exception" */ "@/components/Exception/index.vue") 



const comObj = {
                Index,
                UpdateLog,
                PermissionMg,
                RolesMg,
                


                // demo
                Exception,
                About ,
                HelloWorld,
                ListComplete, 
            }


export  const comArr =   Object.keys(comObj);
export default comObj;
