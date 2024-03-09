import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import UserPage from "@/pages/UserPage"
import About from "@/pages/About"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts/',
        component: UserPage
    },
    {
        path: '/about/',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;