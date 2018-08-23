



const Index = () => import(/* webpackChunkName: "index" */ "@/views/Index.vue")
const About = () => import(/* webpackChunkName: "about" */ "@/views/others/About.vue")
const PermissionMg = () => import(/* webpackChunkName: "managePermit" */ "@/views/manage/PermissionMg.vue")
const HelloWorld = () => import(/* webpackChunkName: "helloWorld" */ "@/views/others/HelloWorld.vue") 
const ListComplete = () => import(/* webpackChunkName: "listComplete" */ "@/views/others/ListComplete.vue") 


export default {
    Index,
    PermissionMg,
    About ,
    HelloWorld,
    ListComplete
}