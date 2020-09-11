import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../home.vue'),
    redirect:'/main',
    children:[
      {
        path: 'main',
        name: 'main',
        icon:'wap-home-o',
        alias:'首页',
        component: () => import('../components/main.vue')
      },
      {
        path: 'member',
        name: 'member',
        icon:'manager-o',
        alias:'会员',
        component: () => import('../components/member.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        icon:'logistics',
        alias:'购物车',
        component: () => import('../components/cart.vue')
      },
      {
        path: 'search',
        name: 'search',
        icon:'search',
        alias:'搜索',
        component: () => import('../components/search.vue')
      },
    ]
  },
  {
    path:'/news',
    name:'news',
    component: () => import('../components/main/news.vue')
  },
  {
    path:'/news_detail/:id',
    name:'news_detail',
    component: () => import('../components/details/news-detail.vue')
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('../components/main/photo.vue')
  },
  {
    path: '/photo_detail/:id',
    name: 'photo_detail',
    component: () => import('../components/details/photo-detail.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../components/main/shop.vue')
  },
  {
    path: '/shop_detail/:id',
    name: 'shop_detail',
    component: () => import('../components/details/shop-detail.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/main/list.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
