import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/pages/HomePage/HomePage.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/components/pages/ProjectPage/ProjectPage.vue')
  },
  {
    path: '/project/:page',
    name: 'projectArticle',
    component: () => import('@/components/pages/ProjectPage/ProjectPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/components/pages/BlogPage/BlogPage.vue')
  },
  {
    path: '/blog/:page',
    name: 'blogArticle',
    component: () => import('@/components/pages/BlogPage/BlogPage.vue')
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: () => import('@/components/pages/ProjectDetailsPage/ProjectDetails.vue')
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: () => import('@/components/pages/BlogDetailsPage/BlogDetailsPage.vue')
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: () => import('@/components/pages/NotFoundPage.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
