import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import UserPage from "@/pages/UserPage"
import About from "@/pages/About"
import PostIdPage from "@/pages/PostIdPage.vue";
import UserPageWithStore from "@/pages/UserPageWithStore.vue";

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
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: UserPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;