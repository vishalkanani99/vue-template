import { createRouter, createWebHistory, setupDataFetchingGuard } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory('/vue-template/'),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return setupLayouts(routes)
  },
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

setupDataFetchingGuard(router)

export default router