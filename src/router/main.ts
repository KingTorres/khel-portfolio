import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/vues/content.vue")
    },
    {
      path: "/home",
      component: () => import("@/vues/content.vue")
    },
    // {
    //   path: "/about",
    //   component: () => import("@/vues/About.vue")
    // },
    {
      path: '/:catchAll(.*)',
      name: "NotFound",
      component: () => import("@/vues/404.vue")
    }
  ],
})
export default router
