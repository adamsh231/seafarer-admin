import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import Dashboard from "../views/mainmenu/Dashboard";
import Candidates from "../views/mainmenu/Candidates";
import Employees from "../views/mainmenu/Employees";
import StandBy from "../views/mainmenu/StandBy";
import Reports from "../views/mainmenu/Reports";
import Settings from "../views/mainmenu/Settings";

const routes = [
  {
    path: '/login',
    alias: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/standby',
    name: 'StandBy',
    component: StandBy
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
