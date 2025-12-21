import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ResearchCv from '../views/ResearchCv.vue'
import EmailMe from '../views/EmailMe.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/research', name: 'ResearchCv', component: ResearchCv },
  { path: '/email', name: 'EmailMe', component: EmailMe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router