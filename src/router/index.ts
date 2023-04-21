// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Devel from '@/views/Devel.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
        meta:{
          title: '主页'
        }
  },
  {
    path: '/about',
    component: About,
    meta:{
      title: '关于我们'
    }
  },
  {
    path: '/devel',
    component: Devel,
    meta:{
      title: '项目开发'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta:{
      title:"找不到页面"
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 添加路由守卫以便能够更改标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `开放，包容，细致，坚守 ——— 玟茵开源社区（${to.meta.title as string}）`;
  }
  next();
});

export default router
