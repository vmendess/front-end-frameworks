import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'
import EmptyState from '../views/EmptyState.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'empty',
      component: EmptyState
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: ChatView
    }
  ]
})

export default router
