// 创建路由实例，并且传入路由映射配置

import Vue from 'vue'
import VueRouter from 'vue-router'

// // const news = ()=>import('../conents/news.vue')
// // 路由懒加载const message = ()=>import('../conents/message.vue')
// const message = ()=>import('../conents/message.vue')
// import news from '../conents/news.vue'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Categroy = () => import('../views/categroy/Categroy.vue')
const Profile = () => import('../views/profile/Profile.vue')
const detail  = () => import('../views/detail/detail.vue')
Vue.use(VueRouter)



const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: "/home",
    //路由名字不是字符串
    component:Home
}, {
    path: "/cart",
    component: Cart
}, {
    path: "/profile",
    component: Profile
}, {
    path: "/categroy",
    component: Categroy
},{
    path:"/detail:iid",
    component:detail
}

]

const router = new VueRouter({
    routes,
    mode:'history'
    })

export default router

// 1.export与export default均可用于导出常量、函数、文件、模块等
// 2.在一个文件或模块中，export、import可以有多个，export default仅有一