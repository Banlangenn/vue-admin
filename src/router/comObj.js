



const Index = () => import(/* webpackChunkName: "index" */ "@/views/Index.vue")
const UpdateLog = () => import(/* webpackChunkName: "UpdateLog" */ "@/views/others/UpdateLog.vue")
const PermissionMg = () => import(/* webpackChunkName: "managePermit" */ "@/views/manage/PermissionMg.vue")


const About = () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue")
const HelloWorld = () => import(/* webpackChunkName: "helloWorld" */ "@/views/others/HelloWorld.vue") 
const ListComplete = () => import(/* webpackChunkName: "listComplete" */ "@/views/others/ListComplete.vue") 
const Exception = () => import(/* webpackChunkName: "Exception" */ "@/components/Exception/index.vue") 


export default {
    Index,
    UpdateLog,
    PermissionMg,

    
    Exception,
    About ,
    HelloWorld,
    ListComplete, 
}