import Main from "@/pages/Main";

// 2) Fayli import edirik.
import PostsPage from "@/pages/PostsPage";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    // 1. '/posts' adinda marsrut yaradiriq. Hemin marsrut bizi 'PostsPage.vue' faylina gonderecek. 
    {
        path: '/posts',
        component: PostsPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;