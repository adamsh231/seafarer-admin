import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import Dashboard from "../views/mainmenu/Dashboard";
import Candidates from "../views/mainmenu/Candidates";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
