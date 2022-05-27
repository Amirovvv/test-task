import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'analyze',
    component: () => import("@/views/AnalyzeView.vue")
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import("@/views/СampaignsView.vue")
  },
  {
    path: '/configure',
    name: 'configure',
    component: () => import("@/views/ConfigureView.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
