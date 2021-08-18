import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import MainMenu from "../views/dashboard/MainMenu";

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
