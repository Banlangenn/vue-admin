



const Index = () => import(/* webpackChunkName: "Index" */ "@/views/Index.vue")
const About = () => import(/* webpackChunkName: "About" */ "@/views/others/About.vue")
const PermissionMg = () => import(/* webpackChunkName: "ManagePermit" */ "@/views/manage/PermissionMg.vue")
const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ "@/views/others/HelloWorld.vue")



export default {
    Index,
    PermissionMg,
    About ,
    HelloWorld
}