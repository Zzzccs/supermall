import { createRouter, createWebHistory } from 'vue-router'
// const Home =()=> import ("../views/home/Home")
const routes = [
  {
    path: '/',
    component: ()=> import ("../views/home/Home")
  },
  {
    path: '/home',
    component: ()=> import ("../views/home/Home")
  },
  {
    path: '/category',
    component: ()=> import ("../views/category/Category")
  },
  {
    path: '/shopcart',
    component: ()=> import ("../views/shopcart/Shopcart")
  },
  {
    path: '/profile',
    component: ()=> import ("../views/profile/Profile")
  },
  {
    path:'/detail/:iid',
    name:'detail',
    component: () => import("../views/detail/Detail"),
  },
  {
    path: '/detail/:iid/comment',
    component: () => import("../views/detail/childComps/DetailAllComments")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
