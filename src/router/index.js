import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login";
import Dashboard from "../views/mainmenu/Dashboard";
import Candidates from "../views/mainmenu/Candidates";
import Employees from "../views/mainmenu/Employees";
import StandBy from "../views/mainmenu/StandBy";
import Letters from "../views/mainmenu/Letters";
import Settings from "../views/mainmenu/Settings";
import CreateCandidate from "../views/sidemenu/CreateCandidate";
import CreateEmployee from "../views/sidemenu/CreateEmployee";
import CreateLetter from "../views/sidemenu/CreateLetter";
import CreateStandby from "../views/sidemenu/CreateStandby";

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
        path: '/letters',
        name: 'Letters',
        component: Letters
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/create-candidate',
        name: 'CreateCandidate',
        component: CreateCandidate
    },
    {
        path: '/create-employee',
        name: 'CreateEmployee',
        component: CreateEmployee
    }
    ,
    {
        path: '/create-letter',
        name: 'CreateLetter',
        component: CreateLetter
    },
    {
        path: '/create-standby',
        name: 'CreateStandby',
        component: CreateStandby
    },
    {
        path: '/:catchAll(.*)',
        name: 'Redirect',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
